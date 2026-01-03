# A4スライド作成ルール

このドキュメントは、HTMLでA4横向きスライドを作成する際のベストプラクティスをまとめたものです。

## 📐 基本仕様

### スライドの寸法
- **幅**: `1123px`
- **高さ**: `794px`
- **アスペクト比**: 1.414:1 (A4横向き)
- **印刷サイズ**: 297mm × 210mm

```tsx
const BASE_WIDTH = 1123;
const BASE_HEIGHT = 794;
```

## 🎨 HTML構造

### index.html の必須設定

```html
<!DOCTYPE html>
<html lang="ja">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no">
    <title>スライドタイトル</title>
    <style>
        body {
            font-family: 'Inter', 'Noto Sans JP', sans-serif;
            background-color: #f8fafc;
            color: #1e293b;
            margin: 0;
            padding: 0;
            overflow-x: hidden; /* 重要: 横スクロール防止 */
        }

        /* スライドの基本形状 */
        .slide-container {
            width: 1123px;
            height: 794px;
            overflow: hidden;
            position: relative;
            background: white;
            box-shadow: 0 10px 25px -5px rgba(0, 0, 0, 0.1);
            border: 1px solid #e2e8f0;
            flex-shrink: 0;
        }

        /* 印刷用設定 */
        @media print {
            .no-print { display: none; }
            .slide-container {
                width: 297mm;
                height: 210mm;
                box-shadow: none;
                border: none;
                margin: 0;
                page-break-after: always;
            }
        }
    </style>
</head>
<body>
    <div id="root"></div>
    <script type="module" src="./index.tsx"></script>
</body>
</html>
```

### 重要なviewport設定

```html
<meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no">
```

- `maximum-scale=1.0` - ピンチズームを防止
- `user-scalable=no` - ユーザーによる拡大縮小を無効化
- これにより、スマホでの意図しない左右の揺れを防止

## 📱 レスポンシブスケーリング

### スケール計算ロジック

```tsx
const [scale, setScale] = useState(1);

useEffect(() => {
  const handleResize = () => {
    const padding = window.innerWidth < 640 ? 20 : 80;
    const availableWidth = window.innerWidth - padding;
    const newScale = Math.min(availableWidth / BASE_WIDTH, 1.1);
    setScale(newScale);
  };

  handleResize();
  window.addEventListener('resize', handleResize);
  return () => window.removeEventListener('resize', handleResize);
}, []);
```

### スケールの重要ポイント

1. **最大スケール**: `1.1` (110%) まで許容
   - `1.0`だと小さすぎる場合があるため
   - デスクトップで適度な拡大を許可

2. **パディング**: 
   - スマホ (`< 640px`): `20px`
   - デスクトップ: `80px`

3. **計算式**: `Math.min(availableWidth / BASE_WIDTH, 1.1)`

### スタイル適用

```tsx
const wrapperStyle = useMemo(() => ({
  width: '100%',
  height: `${BASE_HEIGHT * scale}px`,
  display: 'flex',
  justifyContent: 'center',
  marginBottom: window.innerWidth < 640 ? '1rem' : '2rem', // レスポンシブ
}), [scale]);

const scalerStyle = useMemo(() => ({
  transform: `scale(${scale})`,
  transformOrigin: 'top center', // 重要: 上端を基準にスケール
  width: `${BASE_WIDTH}px`,
  height: `${BASE_HEIGHT}px`,
}), [scale]);
```

### HTML構造

```tsx
<div style={wrapperStyle}>
  <div style={scalerStyle}>
    <Slide id={1} title="タイトル" ...>
      {/* スライドコンテンツ */}
    </Slide>
  </div>
</div>
```

## 🎯 スライド間隔の制御

### レスポンシブmarginBottom

```tsx
marginBottom: window.innerWidth < 640 ? '1rem' : '2rem'
```

- スマホ: `1rem` - コンパクトな間隔
- デスクトップ: `2rem` - 余裕のある間隔
- ❌ 固定値（`4rem`など）は使わない - スマホで間隔が広すぎる

## 🖼️ コンテナレイアウト

### メインコンテナ

```tsx
<div className="min-h-screen bg-slate-50 flex flex-col items-center pb-24 sm:pb-12">
  {/* コンテンツ */}
</div>
```

### 重要なクラス設定

- `bg-slate-50` - 明るい背景
- `flex flex-col items-center` - 中央揃え
- `pb-24 sm:pb-12` - 下部パディング（上部は不要）
- ❌ `py-4 md:py-12` は使わない - 上部の余白が不要

### スライドコンテナ

```tsx
<div className="w-full flex flex-col items-center pt-8 sm:pt-12">
  {/* スライド群 */}
</div>
```

## 📄 PDF出力機能

### ボタン配置

```tsx
<div className="fixed bottom-6 right-6 sm:top-8 sm:right-8 sm:bottom-auto z-[100] no-print">
  <button onClick={downloadPDF} ...>
    {/* ボタンコンテンツ */}
  </button>
</div>
```

- スマホ: 画面下部に固定
- デスクトップ: 画面上部に固定
- `z-[100]` で最前面に配置
- `no-print` で印刷時は非表示

### ボタンスタイル

```tsx
className={`flex items-center gap-3 px-6 py-4 sm:px-8 sm:py-4 rounded-full font-bold shadow-[0_20px_50px_rgba(0,0,0,0.2)] transition-all transform active:scale-95 ${
  isGenerating ? 'bg-slate-300 text-slate-500 cursor-not-allowed' : 'bg-slate-900 text-white hover:bg-slate-800'
}`}
```

### PDF生成コード

```tsx
const downloadPDF = async () => {
  setIsGenerating(true);
  const pdf = new jsPDF('l', 'mm', 'a4'); // 'l' = landscape
  const slides = document.querySelectorAll('.slide-container');

  for (let i = 0; i < slides.length; i++) {
    const slide = slides[i] as HTMLElement;
    const canvas = await html2canvas(slide, {
      scale: 2,
      useCORS: true,
      backgroundColor: '#ffffff',
      logging: false,
      width: BASE_WIDTH,
      height: BASE_HEIGHT,
    });

    const imgData = canvas.toDataURL('image/png');
    const pdfWidth = pdf.internal.pageSize.getWidth();
    const pdfHeight = pdf.internal.pageSize.getHeight();

    if (i > 0) pdf.addPage();
    pdf.addImage(imgData, 'PNG', 0, 0, pdfWidth, pdfHeight);
  }

  pdf.save('presentation.pdf');
  setIsGenerating(false);
};
```

## ⚠️ よくある問題と解決策

### 1. スマホで左右に揺れる

**原因**:
- viewport設定が不足
- `overflow-x: hidden` の欠如
- スケール計算が `1.0` まで

**解決策**:
```html
<!-- viewport設定 -->
<meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no">
```

```css
body {
  overflow-x: hidden;
}
```

```tsx
const newScale = Math.min(availableWidth / BASE_WIDTH, 1.1); // 1.1に
```

### 2. スライド間隔が詰まっている

**原因**:
- `wrapperStyle` の欠如
- `marginBottom` が固定値

**解決策**:
```tsx
// 各スライドを必ずwrapperで囲む
<div style={wrapperStyle}>
  <div style={scalerStyle}>
    <Slide .../>
  </div>
</div>

// レスポンシブなmarginBottom
marginBottom: window.innerWidth < 640 ? '1rem' : '2rem'
```

### 3. PDF出力で崩れる

**原因**:
- `@media print` の設定不足
- スライドに`.slide-container`クラスがない

**解決策**:
```css
@media print {
  .no-print { display: none; }
  .slide-container {
    width: 297mm !important;
    height: 210mm !important;
    box-shadow: none;
    margin: 0;
    page-break-after: always;
  }
}
```

### 4. useMemoの依存配列エラー

**原因**:
- `window.innerWidth` を直接useMemoで参照

**解決策**:
```tsx
// ✅ 正しい方法
const wrapperStyle = useMemo(() => ({
  marginBottom: window.innerWidth < 640 ? '1rem' : '2rem',
}), [scale]); // scaleだけを依存配列に

// ❌ 間違った方法
const wrapperStyle = useMemo(() => ({
  marginBottom: window.innerWidth < 640 ? '1rem' : '2rem',
}), [scale, window.innerWidth]); // window.innerWidthは入れない
```

## 🎨 デザインのベストプラクティス

### カラーパレット

```tsx
// 背景
bg-slate-50 / bg-slate-100

// テキスト
text-slate-900 / text-slate-600 / text-slate-400

// アクセント
bg-blue-600 / bg-indigo-600 / bg-emerald-600

// ボタン
bg-slate-900 (primary)
```

### フォント設定

```tsx
// Tailwind設定は不要、Google Fontsを使用
font-family: 'Inter', 'Noto Sans JP', sans-serif;
```

### シャドウ

```css
/* スライド */
box-shadow: 0 10px 25px -5px rgba(0, 0, 0, 0.1);

/* ボタン */
shadow-[0_20px_50px_rgba(0,0,0,0.2)]
```

## 📋 チェックリスト

デプロイ前に以下を確認：

- [ ] viewport設定に `maximum-scale=1.0, user-scalable=no` が含まれている
- [ ] `body` に `overflow-x: hidden` が設定されている
- [ ] スケール計算が `Math.min(availableWidth / BASE_WIDTH, 1.1)` になっている
- [ ] すべてのスライドが `wrapperStyle` と `scalerStyle` で囲まれている
- [ ] `marginBottom` がレスポンシブになっている
- [ ] PDFボタンが `.no-print` クラスを持っている
- [ ] `@media print` の設定が適切
- [ ] `.slide-container` クラスがすべてのスライドに付与されている

## 🚀 デプロイ後の確認

1. **デスクトップ**: Chrome DevTools でレスポンシブモードをテスト
2. **スマホ**: 実機でピンチズーム・横スクロールが発生しないか確認
3. **PDF**: 出力したPDFのレイアウトが崩れていないか確認
4. **キャッシュクリア**: `Ctrl+Shift+R` (Windows) / `Cmd+Shift+R` (Mac)

## 📦 必須パッケージ

```json
{
  "dependencies": {
    "react": "^19.x",
    "lucide-react": "^0.x",
    "html2canvas": "^1.4.1",
    "jspdf": "^3.0.4"
  },
  "devDependencies": {
    "@types/react": "^19.x",
    "vite": "^6.x",
    "tailwindcss": "^3.x"
  }
}
```

## 💡 参考リンク

- [A4サイズの寸法](https://www.a-size.net/a4/)
- [Tailwind CSS Docs](https://tailwindcss.com/)
- [jsPDF Documentation](https://artskydj.github.io/jsPDF/docs/)
- [html2canvas Documentation](https://html2canvas.hertzen.com/)

---

**最終更新**: 2026-01-03  
**バージョン**: 1.0
