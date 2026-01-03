
import React, { useState, useEffect, useMemo } from 'react';
import { 
  Download, 
  Cpu, 
  Database, 
  Zap, 
  ArrowRight, 
  Search, 
  Mail, 
  CheckCircle2, 
  BarChart3, 
  Target, 
  FileText, 
  Info, 
  Share2,
  Heart,
  MousePointerClick,
  ChevronRight
} from 'lucide-react';
import Slide from './components/Slide';
import html2canvas from 'html2canvas';
import { jsPDF } from 'jspdf';

const App: React.FC = () => {
  const [isGenerating, setIsGenerating] = useState(false);
  const [scale, setScale] = useState(1);
  const totalSlides = 23;

  const BASE_WIDTH = 1123;
  const BASE_HEIGHT = 794;

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

  const downloadPDF = async () => {
    setIsGenerating(true);
    const pdf = new jsPDF('l', 'mm', 'a4');
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

    pdf.save('DeepBiz-TheSide-Strategic-Proposal-v6.pdf');
    setIsGenerating(false);
  };

  const wrapperStyle = useMemo(() => ({
    width: '100%',
    height: `${BASE_HEIGHT * scale}px`,
    display: 'flex',
    justifyContent: 'center',
    marginBottom: window.innerWidth < 640 ? '1rem' : '2rem',
  }), [scale]);

  const scalerStyle = useMemo(() => ({
    transform: `scale(${scale})`,
    transformOrigin: 'top center',
    width: `${BASE_WIDTH}px`,
    height: `${BASE_HEIGHT}px`,
  }), [scale]);

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col items-center pb-24 sm:pb-12">
      <div className="fixed bottom-6 right-6 sm:top-8 sm:right-8 sm:bottom-auto z-[100] no-print">
        <button
          onClick={downloadPDF}
          disabled={isGenerating}
          className={`flex items-center gap-3 px-6 py-4 sm:px-8 sm:py-4 rounded-full font-bold shadow-[0_20px_50px_rgba(0,0,0,0.2)] transition-all transform active:scale-95 ${
            isGenerating ? 'bg-slate-300 text-slate-500 cursor-not-allowed' : 'bg-slate-900 text-white hover:bg-slate-800'
          }`}
        >
          {isGenerating ? <div className="animate-spin rounded-full h-5 w-5 border-2 border-white/20 border-t-white" /> : <Download size={22} />}
          <span className="text-base sm:text-lg">{isGenerating ? 'PDF生成中...' : '資料をPDF出力'}</span>
        </button>
      </div>

      <div className="w-full flex flex-col items-center pt-8 sm:pt-12">
        
        {/* SLIDE 1: TITLE */}
        <div style={wrapperStyle}><div style={scalerStyle}>
          <Slide id={1} title="DeepBiz × TheSide 統合AI戦略" subtitle="営業DXの次世代モデル" pageNumber={1} totalPageCount={totalSlides}>
            <div className="h-full flex flex-col justify-center items-center text-center space-y-12">
              <div className="relative">
                <div className="absolute -inset-12 bg-blue-100/50 rounded-full blur-3xl opacity-60"></div>
                <div className="relative px-20 py-14 bg-white rounded-[40px] border border-slate-100 shadow-sm">
                  <h2 className="text-6xl font-black tracking-tight leading-[1.1] text-slate-900 mb-8">システム全体像 &<br/>AI活用戦略</h2>
                  <div className="flex justify-center gap-4"><div className="h-2.5 w-32 bg-blue-600 rounded-full"></div><div className="h-2.5 w-16 bg-slate-200 rounded-full"></div></div>
                </div>
              </div>
              <div className="text-slate-400 text-xs font-bold tracking-[0.4em] uppercase">Final Update: 2026-01-01 // Strategy Paper v6.0</div>
            </div>
          </Slide>
        </div></div>

        {/* SLIDE 2: 目次 */}
        <div style={wrapperStyle}><div style={scalerStyle}>
          <Slide id={2} title="統合戦略：目次" subtitle="本資料の構成" pageNumber={2} totalPageCount={totalSlides}>
            <div className="h-full flex items-center justify-center">
              <div className="grid grid-cols-3 gap-10 w-full">
                {[
                  { icon: <Database className="text-blue-600" />, title: "PART 1. DeepBiz", desc: "店舗・企業データベース解析基盤。ネット上の情報を構造化する「調査員」の役割。" },
                  { icon: <Zap className="text-indigo-600" />, title: "PART 2. TheSide", desc: "営業支援・自動送信プラットフォーム。個別の営業文を届ける「営業マン」の役割。" },
                  { icon: <BarChart3 className="text-emerald-600" />, title: "PART 3. 統合コスト戦略", desc: "最新のコストシミュレーション。Google Maps API超過分を反映した運用設計。" }
                ].map((item, i) => (
                  <div key={i} className="p-10 bg-slate-50 rounded-[32px] border border-slate-100 flex flex-col gap-6 shadow-sm">
                    <div className="w-14 h-14 rounded-2xl bg-white shadow-sm flex items-center justify-center border border-slate-100">{item.icon}</div>
                    <h3 className="text-2xl font-black text-slate-900">{item.title}</h3>
                    <p className="text-base text-slate-500 leading-relaxed">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </Slide>
        </div></div>

        {/* SLIDE 3: システム構造 */}
        <div style={wrapperStyle}><div style={scalerStyle}>
          <Slide id={3} title="全体のシステム構造" subtitle="情報のバトンが、高品質な営業活動を実現する" pageNumber={3} totalPageCount={totalSlides}>
            <div className="h-full flex flex-col justify-center">
              <div className="flex items-center justify-between gap-4 mb-14">
                {[
                  { step: "Step 1", icon: <Search />, label: "データ収集", sub: "DeepBiz", color: "blue" },
                  { step: "Step 2", icon: <Cpu />, label: "AI分析", sub: "DeepBiz", color: "blue" },
                  { step: "Step 3", icon: <Share2 />, label: "リスト提供", sub: "Data Exchange", color: "slate" },
                  { step: "Step 4", icon: <FileText />, label: "文面作成", sub: "TheSide", color: "indigo" },
                  { step: "Step 5", icon: <Mail />, label: "自動送信", sub: "TheSide", color: "indigo" },
                ].map((item, i, arr) => (
                  <React.Fragment key={i}>
                    <div className="flex flex-col items-center gap-5 text-center group">
                      <div className={`w-24 h-24 rounded-3xl ${item.color === 'slate' ? 'bg-slate-100' : `bg-${item.color}-50`} flex items-center justify-center border border-${item.color === 'slate' ? 'slate-200' : `${item.color}-100`} shadow-sm`}>
                        {React.cloneElement(item.icon as React.ReactElement, { className: item.color === 'slate' ? 'text-slate-600' : `text-${item.color}-600`, size: 36 })}
                      </div>
                      <p className="text-base font-bold text-slate-900">{item.label}</p>
                    </div>
                    {i < arr.length - 1 && <ArrowRight className="text-slate-200 mt-[-45px]" size={24} />}
                  </React.Fragment>
                ))}
              </div>
              <div className="grid grid-cols-2 gap-10">
                <div className="p-8 bg-blue-50/30 border border-blue-100 rounded-3xl">
                  <h5 className="text-xs font-bold text-blue-600 mb-3 uppercase tracking-widest">DeepBizの役割</h5>
                  <p className="text-sm text-slate-600 leading-relaxed">ネット上の情報を収集し、AIが「強み・悩み」を自動抽出。営業先ごとのインテリジェンスを生成します。</p>
                </div>
                <div className="p-8 bg-indigo-50/30 border border-indigo-100 rounded-3xl">
                  <h5 className="text-xs font-bold text-indigo-600 mb-3 uppercase tracking-widest">TheSideの役割</h5>
                  <p className="text-sm text-slate-600 leading-relaxed">DeepBizの解析データを元に、AIが一社一社に刺さる文面を作成。フォーム送信までを自動化します。</p>
                </div>
              </div>
            </div>
          </Slide>
        </div></div>

        {/* SLIDE 4: PART 1 TITLE */}
        <div style={wrapperStyle}><div style={scalerStyle}>
          <Slide id={4} title="PART 1. DeepBiz システム戦略" subtitle="データベース + AI解析プラットフォーム" pageNumber={4} totalPageCount={totalSlides}>
            <div className="h-full flex flex-col justify-center items-center text-center">
              <div className="w-32 h-32 rounded-3xl bg-blue-50 flex items-center justify-center text-blue-600 mb-8 border border-blue-100 shadow-sm"><Database size={64} /></div>
              <h2 className="text-5xl font-black mb-6">DeepBiz 全体像</h2>
              <p className="text-zinc-500 max-w-lg text-lg leading-relaxed">高精度なデータ収集とAI解析により、Web上の情報を構造化データへ変換する調査基盤。</p>
            </div>
          </Slide>
        </div></div>

        {/* SLIDE 5: DeepBiz Flow */}
        <div style={wrapperStyle}><div style={scalerStyle}>
          <Slide id={5} title="DeepBiz システム全体フロー" subtitle="全体アーキテクチャ：Phase 1 & 2" pageNumber={5} totalPageCount={totalSlides}>
            <div className="grid grid-cols-2 gap-8 h-full items-center">
              <div className="p-8 bg-zinc-50 rounded-3xl border border-zinc-100 space-y-4">
                <h5 className="text-sm font-black text-blue-600 uppercase tracking-widest border-b border-blue-100 pb-2">【Phase 1】 データ収集</h5>
                <div className="space-y-3">
                  {[{ t: "Step 1: 基本情報取得", s: "店舗名・住所・Place ID・電話番号" }, { t: "Step 2: CID取得", s: "Google Maps URL解析・CID抽出" }, { t: "Step 3: Web情報取得", s: "公式サイト・メール・SNS取得" }].map((s, i) => (
                    <div key={i} className="p-4 bg-white rounded-xl border border-zinc-100 shadow-sm">
                      <p className="text-xs font-bold">{s.t}</p><p className="text-[10px] text-zinc-400">{s.s}</p>
                    </div>
                  ))}
                </div>
              </div>
              <div className="p-8 bg-zinc-50 rounded-3xl border border-zinc-100 space-y-4">
                <h5 className="text-sm font-black text-indigo-600 uppercase tracking-widest border-b border-indigo-100 pb-2">【Phase 2】 企業分析</h5>
                <div className="space-y-3">
                  {[{ t: "Step 1: Web取得", s: "HTML取得・洗浄" }, { t: "Step 2: AI解析 (Gemini 2.0)", s: "強み抽出 / 💰 0.023円/社", active: true }, { t: "Step 3: キャッシュ", s: "90日間保存・再利用" }].map((s, i) => (
                    <div key={i} className={`p-4 rounded-xl border ${s.active ? 'bg-indigo-50 border-indigo-200' : 'bg-white border-zinc-100 shadow-sm'}`}>
                      <p className={`text-xs font-bold ${s.active ? 'text-indigo-600' : ''}`}>{s.t}</p><p className="text-[10px] text-zinc-400">{s.s}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </Slide>
        </div></div>

        {/* SLIDE 6: DeepBiz Matrix */}
        <div style={wrapperStyle}><div style={scalerStyle}>
          <Slide id={6} title="DeepBiz AI使用箇所とコスト" subtitle="コスト発生箇所マトリックス" pageNumber={6} totalPageCount={totalSlides}>
            <div className="flex flex-col justify-center h-full space-y-8">
              <div className="overflow-hidden rounded-2xl border border-zinc-200 bg-white shadow-sm">
                <table className="w-full text-left text-xs">
                  <thead className="bg-zinc-50 text-zinc-500 font-bold uppercase tracking-widest">
                    <tr><th className="px-6 py-4">フェーズ</th><th className="px-6 py-4">AI使用</th><th className="px-6 py-4">コスト</th><th className="px-6 py-4">用途</th></tr>
                  </thead>
                  <tbody className="divide-y divide-zinc-100">
                    <tr><td className="px-6 py-4 font-bold">Phase 1: Place ID取得</td><td className="px-6 py-4 text-zinc-400">❌ 不要</td><td className="px-6 py-4 font-bold text-zinc-900">$0.032/検索</td><td className="px-6 py-4 text-zinc-500">店舗名→Place ID変換</td></tr>
                    <tr className="bg-blue-50/50"><td className="px-6 py-4 font-black text-blue-600">Phase 2: 企業分析</td><td className="px-6 py-4 text-blue-600 font-black">✅ 必須</td><td className="px-6 py-4 font-black text-blue-600">0.023円/社</td><td className="px-6 py-4 text-zinc-500 font-bold">Gemini 2.0 による構造化</td></tr>
                  </tbody>
                </table>
              </div>
            </div>
          </Slide>
        </div></div>

        {/* SLIDE 7: Google Maps API Strategy */}
        <div style={wrapperStyle}><div style={scalerStyle}>
          <Slide id={7} title="Google Maps API 戦略" subtitle="月1万件無料運用の実現" pageNumber={7} totalPageCount={totalSlides}>
            <div className="h-full flex flex-col justify-center space-y-10">
              <div className="p-8 bg-blue-50/30 border border-blue-100 rounded-3xl">
                <h5 className="text-sm font-bold text-blue-600 mb-6 flex items-center gap-3"><Target size={20}/> なぜAPIが必要か？</h5>
                <div className="grid grid-cols-2 gap-8 text-xs text-zinc-600 leading-relaxed">
                  <div className="p-6 bg-white rounded-2xl border border-blue-50 shadow-sm"><p className="font-bold text-zinc-900 mb-2">【課題】</p>店舗名だけでは一意に特定できない。</div>
                  <div className="p-6 bg-white rounded-2xl border border-blue-50 shadow-sm"><p className="font-bold text-blue-600 mb-2">【解決】</p>Place IDを取得し、正規情報に紐付ける。</div>
                </div>
              </div>
              <div className="overflow-hidden rounded-2xl border border-zinc-200">
                <table className="w-full text-left text-xs">
                  <thead className="bg-zinc-50 text-zinc-500 font-bold uppercase tracking-widest">
                    <tr><th className="px-6 py-4">項目</th><th className="px-6 py-4">旧API</th><th className="px-6 py-4 text-emerald-600">新API (Essentials)</th></tr>
                  </thead>
                  <tbody className="divide-y divide-zinc-100">
                    <tr><td className="px-6 py-4 text-zinc-500 font-black">月1万件コスト</td><td className="px-6 py-4 text-zinc-400 italic">$320 (約5万円)</td><td className="px-6 py-4 text-emerald-600 text-lg font-black">$0 (完全無料)</td></tr>
                  </tbody>
                </table>
              </div>
            </div>
          </Slide>
        </div></div>

        {/* SLIDE 8: 企業分析詳細 (修正適用済み) */}
        <div style={wrapperStyle}><div style={scalerStyle}>
          <Slide id={8} title="企業分析機能詳細 (Phase 2)" subtitle="非構造化テキストを営業用インテリジェンスへ" pageNumber={8} totalPageCount={totalSlides}>
            <div className="grid grid-cols-5 gap-10 h-full items-center">
              <div className="col-span-2 space-y-8">
                <div className="p-10 bg-slate-50 rounded-[40px] border border-slate-100 shadow-sm">
                  <h5 className="text-xs font-bold text-slate-400 uppercase mb-6 tracking-widest">AIが必要な理由</h5>
                  <div className="space-y-6">
                    {[{ l: "データ形式", v: "非構造化 (自然言語)" }, { l: "文脈理解", v: "必須", h: true }, { l: "解析速度", v: "2秒 / 社" }].map((row, i) => (
                      <div key={i} className="flex justify-between border-b border-slate-200 pb-3 items-center h-10">
                        <span className="text-sm text-slate-500">{row.l}</span>
                        <span className={`text-base font-bold ${row.h ? 'text-blue-600' : 'text-slate-900'}`}>{row.v}</span>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="p-10 bg-blue-600 rounded-[40px] text-white text-center shadow-xl">
                  <p className="text-xs font-bold uppercase tracking-widest opacity-80 mb-2">Cost per analysis</p>
                  <div className="flex items-center justify-center gap-4 h-16"><span className="text-6xl font-black tabular-nums">0.023</span><span className="text-4xl font-bold">円</span></div>
                </div>
              </div>
              <div className="col-span-3 p-10 bg-slate-900 rounded-[40px] font-mono text-sm text-blue-300 shadow-2xl border border-slate-800">
                <p className="text-slate-500 mb-4 border-b border-slate-800 pb-3">// Output Example</p>
                <pre className="whitespace-pre-wrap leading-relaxed">{`{
  "industry": "IT・ソフトウェア",
  "strengths": ["創業30年の実績", "独自の解析技術"],
  "target": "DX推進担当者",
  "painPoints": ["リソース不足"]
}`}</pre>
              </div>
            </div>
          </Slide>
        </div></div>

        {/* SLIDE 9: DeepBiz Optimization */}
        <div style={wrapperStyle}><div style={scalerStyle}>
          <Slide id={9} title="DeepBiz コスト最適化戦略" subtitle="データ資産化と格安AIモデルの戦略的選定" pageNumber={9} totalPageCount={totalSlides}>
            <div className="h-full flex flex-col justify-center space-y-12">
              <div className="grid grid-cols-2 gap-8">
                <div className="p-8 bg-white border border-zinc-200 rounded-3xl shadow-sm space-y-4">
                  <h5 className="text-sm font-bold text-zinc-900 flex items-center gap-2"><Share2 size={18} className="text-blue-600"/> 1. AIキャッシュ戦略</h5>
                  <p className="text-xs text-zinc-500 leading-relaxed">初回解析のみ0.023円。結果をDBに90日間保存し、2回目以降は <span className="text-emerald-600 font-bold italic">完全無料(0円)</span>。</p>
                </div>
                <div className="p-8 bg-white border border-zinc-200 rounded-3xl shadow-sm space-y-4">
                  <h5 className="text-sm font-bold text-zinc-900 flex items-center gap-2"><Cpu size={18} className="text-indigo-600"/> 2. Gemini 2.0 選定</h5>
                  <p className="text-xs text-zinc-500 leading-relaxed">GPT-4比で <span className="text-zinc-900 font-bold underline">2,739倍安い</span>。大量データ処理に最適な最高コスパモデルを採用。</p>
                </div>
              </div>
            </div>
          </Slide>
        </div></div>

        {/* SLIDE 10: PART 2 TITLE */}
        <div style={wrapperStyle}><div style={scalerStyle}>
          <Slide id={10} title="PART 2. TheSide 実行戦略" subtitle="お問い合わせフォーム自動送信" pageNumber={10} totalPageCount={totalSlides}>
            <div className="h-full flex flex-col justify-center items-center text-center">
              <div className="w-32 h-32 rounded-3xl bg-indigo-50 flex items-center justify-center text-indigo-600 mb-8 border border-indigo-100 shadow-sm"><Zap size={64} /></div>
              <h2 className="text-5xl font-black mb-6">TheSide 全体像</h2>
              <p className="text-zinc-500 max-w-lg text-lg leading-relaxed">分析データを使い、一社一社に最適化された営業文を企業の窓口へ自動で送り届ける。</p>
            </div>
          </Slide>
        </div></div>

        {/* SLIDE 11: TheSide Overview */}
        <div style={wrapperStyle}><div style={scalerStyle}>
          <Slide id={11} title="TheSide サービス概要" subtitle="解決する課題とターゲットユーザー" pageNumber={11} totalPageCount={totalSlides}>
            <div className="h-full flex flex-col justify-center space-y-12">
              <div className="grid grid-cols-2 gap-12">
                <div className="space-y-6">
                  <h5 className="text-xs font-black text-indigo-600 uppercase tracking-widest border-l-4 border-indigo-600 pl-3">解決する課題</h5>
                  {["営業リストの作成", "メッセージ作成", "フォーム送信", "送信管理"].map((t, i) => (
                    <div key={i} className="flex gap-3 items-center text-sm font-bold text-zinc-700 bg-zinc-50 p-4 rounded-xl"><CheckCircle2 className="text-emerald-500" size={20}/> {t}</div>
                  ))}
                </div>
                <div className="p-10 bg-indigo-50 rounded-2xl border border-indigo-100 text-center italic text-sm">「リストアップから送信までの人的工数をAIでゼロにする」</div>
              </div>
            </div>
          </Slide>
        </div></div>

        {/* SLIDE 12: TheSide Flow */}
        <div style={wrapperStyle}><div style={scalerStyle}>
          <Slide id={12} title="TheSide システム全体フロー" subtitle="外部連携から自動送信まで" pageNumber={12} totalPageCount={totalSlides}>
            <div className="h-full flex flex-col justify-center">
              <div className="grid grid-cols-5 gap-4 relative">
                {[{ s: "Step 1", t: "企業取得", icon: <Database /> }, { s: "Step 2", t: "テンプレート", icon: <Heart /> }, { s: "Step 3", t: "個別化", icon: <Mail /> }, { s: "Step 4", t: "フォーム認識", icon: <MousePointerClick /> }, { s: "Step 5", t: "自動送信", icon: <Zap /> }].map((item, i) => (
                  <div key={i} className="flex flex-col items-center gap-3"><div className="w-16 h-16 rounded-2xl bg-white border border-zinc-200 shadow-sm flex items-center justify-center text-indigo-600">{item.icon}</div><p className="text-[11px] font-bold">{item.t}</p></div>
                ))}
              </div>
            </div>
          </Slide>
        </div></div>

        {/* SLIDE 13: TheSide Matrix */}
        <div style={wrapperStyle}><div style={scalerStyle}>
          <Slide id={13} title="AI使用箇所とコストマトリックス" subtitle="各プロセスのAI選定理由" pageNumber={13} totalPageCount={totalSlides}>
            <div className="overflow-hidden rounded-2xl border border-zinc-200 bg-white shadow-sm">
              <table className="w-full text-left text-xs">
                <thead className="bg-zinc-50 text-zinc-500 font-bold uppercase tracking-widest">
                  <tr><th className="px-6 py-4">ステップ</th><th className="px-6 py-4">AIモデル</th><th className="px-6 py-4">コスト</th><th className="px-6 py-4">必要性</th></tr>
                </thead>
                <tbody className="divide-y divide-zinc-100">
                  <tr><td className="px-6 py-4 font-bold">テンプレート作成</td><td className="px-6 py-4 text-orange-600 font-black">GPT-4 Turbo</td><td className="px-6 py-4 font-bold">6.4円/案件</td><td className="px-6 py-4 text-zinc-500">最高品質の追求</td></tr>
                  <tr><td className="px-6 py-4 font-bold">文面個別化</td><td className="px-6 py-4 text-indigo-600 font-black">Gemini 2.5</td><td className="px-6 py-4 font-bold">0.013円/件</td><td className="px-6 py-4 text-zinc-500">大量実行のコスト最適化</td></tr>
                </tbody>
              </table>
            </div>
          </Slide>
        </div></div>

        {/* SLIDE 14: Hybrid Recommendation */}
        <div style={wrapperStyle}><div style={scalerStyle}>
          <Slide id={14} title="ハイブリッド構成推奨の結論" subtitle="GPT-4の「質」とGeminiの「量」を融合" pageNumber={14} totalPageCount={totalSlides}>
            <div className="h-full flex flex-col justify-center space-y-12">
              <div className="p-10 bg-zinc-900 rounded-3xl text-white shadow-xl flex flex-col justify-center">
                <h4 className="text-xl font-black mb-4 flex items-center gap-2"><CheckCircle2 className="text-emerald-400"/> 月18円の差で最高品質を。</h4>
                <p className="text-sm text-zinc-400 leading-relaxed italic">「商材の顔となるテンプレートはGPT-4で。日々の大量処理にはGeminiで。投資対効果の最適解です。」</p>
              </div>
            </div>
          </Slide>
        </div></div>

        {/* SLIDE 15: Cost Design Strategy */}
        <div style={wrapperStyle}><div style={scalerStyle}>
          <Slide id={15} title="AI活用のコスト設計戦略 (TheSide)" subtitle="構造の透明性と予測可能性の確保" pageNumber={15} totalPageCount={totalSlides}>
            <div className="grid grid-cols-3 gap-6 h-full items-center">
              {[{ t: "1. コストの透明性", d: "すべての処理に明確な原価を設定。" }, { t: "2. スケールメリット", d: "送信数が増えてもAI比率は約15%で安定。" }, { t: "3. 学習効果", d: "認識は2回目以降無料。実質原価は低下していく。" }].map((item, i) => (
                <div key={i} className="p-8 bg-zinc-50 rounded-3xl border border-zinc-100 flex flex-col gap-4"><h6 className="text-sm font-black text-zinc-900 border-l-4 border-indigo-600 pl-3">{item.t}</h6><p className="text-xs text-zinc-500 leading-relaxed">{item.d}</p></div>
              ))}
            </div>
          </Slide>
        </div></div>

        {/* SLIDE 16: PART 3 TITLE */}
        <div style={wrapperStyle}><div style={scalerStyle}>
          <Slide id={16} title="PART 3. 統合AI戦略：営業DXの次世代モデル" subtitle="経営層・営業部門へ送る、最新統合プラン" pageNumber={16} totalPageCount={totalSlides}>
            <div className="h-full flex flex-col justify-center items-center text-center">
              <div className="w-32 h-32 rounded-full bg-emerald-50 flex items-center justify-center text-emerald-600 mb-8 shadow-sm"><BarChart3 size={64} /></div>
              <h2 className="text-5xl font-black mb-6">統合コスト戦略</h2>
              <p className="text-zinc-500 max-w-lg text-lg leading-relaxed">Google Maps APIの超過料金を正確に反映した最新のシミュレーション。</p>
            </div>
          </Slide>
        </div></div>

        {/* SLIDE 17: Challenges Solved */}
        <div style={wrapperStyle}><div style={scalerStyle}>
          <Slide id={17} title="1. サービスが解決する「営業の課題」" subtitle="人的作業の限界を、2つのシステム連携で突破" pageNumber={17} totalPageCount={totalSlides}>
            <div className="grid grid-cols-2 gap-12 h-full items-center">
              <div className="p-10 bg-white border border-zinc-200 rounded-3xl shadow-sm"><h4 className="text-2xl font-black text-zinc-900 mb-4">DeepBiz (調査員)</h4><p className="text-sm text-zinc-500">ターゲット企業を見つけ出し、特徴を分析する役割。</p></div>
              <div className="p-10 bg-white border border-zinc-200 rounded-3xl shadow-sm"><h4 className="text-2xl font-black text-zinc-900 mb-4">TheSide (営業マン)</h4><p className="text-sm text-zinc-500">分析データを元に、心に刺さる営業文を届ける役割。</p></div>
            </div>
          </Slide>
        </div></div>

        {/* SLIDE 18: Why AI? */}
        <div style={wrapperStyle}><div style={scalerStyle}>
          <Slide id={18} title="2. なぜ「AI」を使うのか？" subtitle="従来のITシステムでは不可能だった「文脈理解」の代行" pageNumber={18} totalPageCount={totalSlides}>
            <div className="h-full flex flex-col justify-center gap-8">
              <div className="overflow-hidden rounded-3xl border border-zinc-200 shadow-sm">
                <table className="w-full text-left text-sm">
                  <thead className="bg-zinc-50 text-zinc-500 font-bold uppercase tracking-widest">
                    <tr><th className="px-8 py-6 w-1/4">AIの役割</th><th className="px-8 py-6">AIを使う理由</th></tr>
                  </thead>
                  <tbody className="divide-y divide-zinc-100">
                    <tr><td className="px-8 py-8 font-black text-zinc-900">企業の本質を理解</td><td className="px-8 py-8 text-zinc-500">人が読むと10分かかる調査を、AIなら「2秒」で完了できるため。</td></tr>
                    <tr><td className="px-8 py-8 font-black text-zinc-900">心に刺さる文章作成</td><td className="px-8 py-8 text-zinc-500">コピペ文ではなく、成約率を最大化するため。</td></tr>
                  </tbody>
                </table>
              </div>
            </div>
          </Slide>
        </div></div>

        {/* SLIDE 19: Integrated Cost Simulation (修正適用済み) */}
        <div style={wrapperStyle}><div style={scalerStyle}>
          <Slide id={19} title="3. 【重要】最新統合コストシミュレーション" subtitle="Google Maps API 超過料金を反映" pageNumber={19} totalPageCount={totalSlides}>
            <div className="h-full flex flex-col justify-center space-y-10">
              <div className="overflow-hidden rounded-[40px] border-2 border-slate-900 shadow-2xl bg-white">
                <table className="w-full text-left text-sm">
                  <thead className="bg-slate-900 text-white font-bold tracking-widest">
                    <tr><th className="px-8 py-7 uppercase">規模のイメージ</th><th className="px-8 py-7 text-center">月3万件</th><th className="px-8 py-7 text-center text-blue-400 font-black">月6万件 (本格運用)</th><th className="px-8 py-7 text-center">月15万件</th></tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100">
                    <tr><td className="px-8 py-5 font-bold text-slate-500">想定企業数</td><td className="px-8 py-5 text-center">10,000社</td><td className="px-8 py-5 text-center font-black">20,000社</td><td className="px-8 py-5 text-center">50,000社</td></tr>
                    <tr><td className="px-8 py-5 font-bold text-slate-500">外部データ費 (GMap)</td><td className="px-8 py-5 text-center text-emerald-600 font-bold">0円</td><td className="px-8 py-5 text-center text-orange-600 font-black">8,000円</td><td className="px-8 py-5 text-center text-orange-600 font-black">32,000円</td></tr>
                    <tr className="bg-slate-50 font-black"><td className="px-8 py-10 text-xl font-black tracking-widest">🔥 月額合計 (税込)</td><td className="px-8 py-10 text-center text-2xl">¥7,485</td><td className="px-8 py-10 text-center text-4xl text-blue-600 underline decoration-blue-100 decoration-8 underline-offset-8">¥19,723</td><td className="px-8 py-10 text-center text-2xl">¥52,405</td></tr>
                  </tbody>
                </table>
              </div>
            </div>
          </Slide>
        </div></div>

        {/* SLIDE 20: Google Maps logic */}
        <div style={wrapperStyle}><div style={scalerStyle}>
          <Slide id={20} title="Google Maps API 超過コストの考え方" subtitle="月1万件の境界線とビジネス判断" pageNumber={20} totalPageCount={totalSlides}>
            <div className="grid grid-cols-2 gap-12 h-full items-center">
              <div className="p-10 bg-orange-50 rounded-3xl border border-orange-100 shadow-sm"><h5 className="text-lg font-black text-orange-600 mb-6 flex items-center gap-3"><Info size={24}/> 月額8,000円の超過料金</h5><p className="text-sm text-zinc-600 leading-relaxed">月間10,000社を超えるPlace ID取得を行う際、Googleから1万件あたり8,000円の課金が発生します。</p></div>
              <div className="p-10 bg-white border border-zinc-200 rounded-3xl shadow-sm"><h5 className="text-sm font-black text-zinc-900 uppercase tracking-widest border-l-4 border-blue-600 pl-3">資産化によるコスト低減</h5><p className="text-sm text-zinc-500 leading-relaxed">一度取得したPlace IDはシステム内に蓄積されます。2回目以降使う場合は、この8,000円は<span className="text-emerald-600 underline">一切発生しません</span>。</p></div>
            </div>
          </Slide>
        </div></div>

        {/* SLIDE 21: Summary */}
        <div style={wrapperStyle}><div style={scalerStyle}>
          <Slide id={21} title="4. まとめ：本システムのビジネス価値" subtitle="「量」と「質」の両立、そして資産が積み上がる" pageNumber={21} totalPageCount={totalSlides}>
            <div className="grid grid-cols-3 gap-8 h-full items-center">
              {[{ t: "1. 「量」と「質」の両立", d: "大量送信をAIが自動でパーソナライズ。" }, { t: "2. コストの透明性", d: "AI利用料は送信数に比例し、インフラ費は固定。" }, { t: "3. 蓄積される資産", d: "使えば使うほど営業知能が向上。" }].map((item, i) => (
                <div key={i} className="p-10 bg-white border border-zinc-200 rounded-3xl shadow-sm flex flex-col gap-6"><h5 className="text-lg font-black text-zinc-900 underline decoration-slate-100 decoration-8 underline-offset-[-2px]">{item.t}</h5><p className="text-xs text-zinc-500 leading-relaxed">{item.d}</p></div>
              ))}
            </div>
          </Slide>
        </div></div>

        {/* SLIDE 22: Closing summary */}
        <div style={wrapperStyle}><div style={scalerStyle}>
          <Slide id={22} title="統合運用のビジネス価値総括" subtitle="AI駆動型営業プラットフォーム" pageNumber={22} totalPageCount={totalSlides}>
            <div className="h-full flex flex-col justify-center items-center text-center">
              <div className="max-w-3xl w-full p-16 bg-zinc-900 rounded-3xl text-white shadow-2xl relative overflow-hidden">
                <h4 className="text-2xl font-black mb-8 uppercase tracking-[0.2em] underline underline-offset-[12px] decoration-blue-500">営業DXの最終形</h4>
                <p className="text-lg text-zinc-400 leading-relaxed italic mb-12">「AI時代の新しい『営業原価』を再定義し、企業の競争力を根本から引き上げるプラットフォームです。」</p>
              </div>
            </div>
          </Slide>
        </div></div>

        {/* SLIDE 23: Thank you */}
        <div style={wrapperStyle}><div style={scalerStyle}>
          <Slide id={23} title="Thank You" subtitle="次世代の営業組織への変革を、共に。" pageNumber={23} totalPageCount={totalSlides}>
            <div className="h-full flex flex-col justify-center items-center text-center space-y-16">
              <div className="w-28 h-28 rounded-full bg-white flex items-center justify-center text-slate-900 shadow-xl border border-slate-100"><CheckCircle2 size={56} /></div>
              <div className="space-y-6"><h2 className="text-5xl font-black text-slate-900 leading-tight">ご清聴ありがとうございました</h2><p className="text-slate-400 text-lg">DeepBiz × TheSide Strategy Team</p></div>
              <div className="text-slate-300 text-xs font-bold uppercase tracking-[0.5em]">© 2026 Integrated AI Strategy Paper</div>
            </div>
          </Slide>
        </div></div>

      </div>
    </div>
  );
};

export default App;
