# 🔐 認証設定

## 現在のパスワード

### DeepBiz × TheSide スライド
- **パスワード**: `deepbiz2026`
- **認証方式**: JavaScript簡易認証（sessionStorage）
- **有効期限**: ブラウザセッション中（タブを閉じるまで）

## パスワードの変更方法

1. `slides/deepbiz-theside/App.tsx` を開く
2. 以下の行を編集：
   ```tsx
   const correctPassword = 'deepbiz2026'; // ← ここを変更
   ```
3. コミット＆プッシュしてデプロイ

## 新しいスライドに認証を追加

新しいスライドを作成する際は、以下のコードを`App.tsx`に追加：

```tsx
const [isAuthenticated, setIsAuthenticated] = useState(false);

// 簡易認証チェック
useEffect(() => {
  const authKey = 'slide_auth_your-slide-name'; // スライドごとに変更
  const isAuth = sessionStorage.getItem(authKey) === 'true';
  
  if (isAuth) {
    setIsAuthenticated(true);
    return;
  }

  const password = prompt('🔐 このスライドを閲覧するにはパスワードを入力してください:');
  const correctPassword = 'your-password-here'; // パスワードを設定
  
  if (password === correctPassword) {
    sessionStorage.setItem(authKey, 'true');
    setIsAuthenticated(true);
  } else {
    alert('❌ パスワードが正しくありません');
    window.location.href = '/shintaro-slide/';
  }
}, []);

// 認証されていない場合は何も表示しない
if (!isAuthenticated) {
  return (
    <div className="min-h-screen bg-slate-50 flex items-center justify-center">
      <div className="text-center">
        <div className="text-6xl mb-4">🔐</div>
        <p className="text-slate-500">認証中...</p>
      </div>
    </div>
  );
}
```

## セキュリティの注意事項

⚠️ **この認証は軽い保護のみを提供します**

### できること
- 一般公開を避ける
- URLを知っている人でも簡単にアクセスできないようにする
- ブラウザのタブを閉じるまでログイン状態を維持

### できないこと
- 本格的なセキュリティ保護
- パスワードの暗号化（ソースコードに平文で含まれる）
- ブルートフォース攻撃の防止

### より強固な保護が必要な場合
以下のサービスへの移行を検討してください：
- **Netlify** - Basic認証のネイティブサポート
- **Vercel** - パスワード保護機能
- **Cloudflare Access** - エンタープライズレベルの認証

## 認証のクリア方法

ブラウザの開発者ツール → Application → Session Storage → `slide_auth_*` を削除
