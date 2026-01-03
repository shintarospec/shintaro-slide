
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
  ShieldCheck, 
  Info, 
  Share2,
  ArrowDownCircle,
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
      const newScale = Math.min(availableWidth / BASE_WIDTH, 1);
      setScale(newScale);
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const downloadPDF = async () => {
    setIsGenerating(true);
    // 'l' for landscape
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
    marginBottom: window.innerWidth < 640 ? '2rem' : '4rem',
  }), [scale]);

  const scalerStyle = useMemo(() => ({
    transform: `scale(${scale})`,
    transformOrigin: 'top center',
    width: `${BASE_WIDTH}px`,
    height: `${BASE_HEIGHT}px`,
  }), [scale]);

  return (
    <div className="min-h-screen bg-zinc-100 py-4 md:py-12 flex flex-col items-center text-zinc-900 font-sans">
      <div className="fixed top-4 right-4 md:top-6 md:right-6 z-50 flex flex-col items-end gap-2 no-print">
        <button
          onClick={downloadPDF}
          disabled={isGenerating}
          className={`flex items-center gap-2 px-4 py-3 md:px-8 md:py-4 rounded-full text-sm md:text-base font-bold shadow-2xl transition-all ${
            isGenerating 
              ? 'bg-zinc-300 text-zinc-500 cursor-not-allowed' 
              : 'bg-zinc-900 text-white hover:bg-zinc-800 active:scale-95'
          }`}
        >
          {isGenerating ? (
            <div className="animate-spin rounded-full h-5 w-5 border-2 border-white/20 border-t-white" />
          ) : (
            <Download size={20} />
          )}
          <span className="hidden sm:inline">{isGenerating ? 'PDF生成中...' : '統合戦略資料(v6)をPDF出力'}</span>
          <span className="sm:hidden">{isGenerating ? '生成中...' : 'PDF'}</span>
        </button>
      </div>

      <div className="w-full flex flex-col items-center pt-8 md:pt-12">
        
        {/* SLIDE 1: MAIN TITLE */}
        <div style={wrapperStyle}><div style={scalerStyle}>
          <Slide id={1} title="DeepBiz × TheSide 統合AI戦略" subtitle="営業DXの次世代モデル：高精度解析と自動送信の融合" pageNumber={1} totalPageCount={totalSlides}>
          <div className="h-full flex flex-col justify-center items-center text-center space-y-12">
            <div className="relative">
              <div className="absolute -inset-8 bg-blue-100 rounded-full blur-3xl opacity-50"></div>
              <div className="relative px-16 py-12 bg-white rounded-3xl border border-zinc-200 shadow-sm">
                <h2 className="text-6xl font-black tracking-tighter leading-tight text-zinc-900 mb-6">
                  システム全体像 &<br/>AI活用戦略
                </h2>
                <div className="flex justify-center gap-3">
                  <div className="h-2 w-24 bg-blue-600 rounded-full"></div>
                  <div className="h-2 w-12 bg-zinc-200 rounded-full"></div>
                </div>
              </div>
            </div>
            <div className="text-zinc-400 text-xs font-bold tracking-[0.3em] uppercase">
              Final Update: 2026-01-01 // Strategy Paper v6.0
            </div>
          </div>
        </Slide>
        </div></div>


        {/* SLIDE 2: TOC */}
        <div style={wrapperStyle}><div style={scalerStyle}>
          <Slide id={2} title="統合戦略：目次" subtitle="本資料の構成" pageNumber={2} totalPageCount={totalSlides}>
          <div className="h-full flex items-center justify-center">
            <div className="grid grid-cols-3 gap-8 w-full">
              {[
                { icon: <Database className="text-blue-600" />, title: "PART 1. DeepBiz", desc: "店舗・企業データベース解析基盤。ネット上の情報を構造化する「調査員」の役割。" },
                { icon: <Zap className="text-indigo-600" />, title: "PART 2. TheSide", desc: "営業支援・自動送信プラットフォーム。個別の営業文を届ける「営業マン」の役割。" },
                { icon: <BarChart3 className="text-emerald-600" />, title: "PART 3. 統合コスト戦略", desc: "最新のコストシミュレーション。Google Maps API超過分を反映した運用設計。" }
              ].map((item, i) => (
                <div key={i} className="p-8 bg-zinc-50 rounded-3xl border border-zinc-100 flex flex-col gap-6">
                  <div className="w-12 h-12 rounded-2xl bg-white shadow-sm flex items-center justify-center border border-zinc-100">
                    {item.icon}
                  </div>
                  <h3 className="text-xl font-black">{item.title}</h3>
                  <p className="text-sm text-zinc-500 leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </Slide>
        </div></div>


        {/* SLIDE 3: SYSTEM CONNECTIVITY (Landscape Diagram) */}
        <div style={wrapperStyle}><div style={scalerStyle}>
        <Slide id={3} title="全体のシステム構造" subtitle="情報のバトンが、高品質な営業活動を実現する" pageNumber={3} totalPageCount={totalSlides}>
          <div className="h-full flex flex-col justify-center">
            <div className="flex items-center justify-between gap-4 mb-12">
              {[
                { step: "Step 1", icon: <Search />, label: "データ収集", sub: "DeepBiz", color: "blue" },
                { step: "Step 2", icon: <Cpu />, label: "AI分析", sub: "DeepBiz", color: "blue" },
                { step: "Step 3", icon: <Share2 />, label: "リスト提供", sub: "Data Exchange", color: "zinc" },
                { step: "Step 4", icon: <FileText />, label: "文面作成", sub: "TheSide", color: "indigo" },
                { step: "Step 5", icon: <Mail />, label: "自動送信", sub: "TheSide", color: "indigo" },
              ].map((item, i, arr) => (
                <React.Fragment key={i}>
                  <div className="flex flex-col items-center gap-4 text-center group">
                    <div className={`w-20 h-20 rounded-2xl bg-${item.color}-50 flex items-center justify-center border border-${item.color}-100 shadow-sm transition-transform group-hover:scale-105`}>
                      {React.cloneElement(item.icon as React.ReactElement, { className: `text-${item.color === 'zinc' ? 'zinc' : item.color}-600`, size: 32 })}
                    </div>
                    <div>
                      <p className={`text-[10px] font-black text-${item.color === 'zinc' ? 'zinc' : item.color}-600 uppercase tracking-widest`}>{item.step}</p>
                      <p className="text-sm font-bold">{item.label}</p>
                      <p className="text-[10px] text-zinc-400 font-medium">{item.sub}</p>
                    </div>
                  </div>
                  {i < arr.length - 1 && <ArrowRight className="text-zinc-200 mt-[-40px]" size={20} />}
                </React.Fragment>
              ))}
            </div>
            <div className="grid grid-cols-2 gap-8">
              <div className="p-6 bg-blue-50/30 border border-blue-100 rounded-2xl">
                <h5 className="text-xs font-bold text-blue-600 mb-3 uppercase tracking-widest">DeepBizの役割</h5>
                <p className="text-xs text-zinc-600 leading-relaxed">ネット上の情報を収集し、AIが「強み・悩み」を自動抽出。営業先ごとのインテリジェンスを生成します。</p>
              </div>
              <div className="p-6 bg-indigo-50/30 border border-indigo-100 rounded-2xl">
                <h5 className="text-xs font-bold text-indigo-600 mb-3 uppercase tracking-widest">TheSideの役割</h5>
                <p className="text-xs text-zinc-600 leading-relaxed">DeepBizの解析データを元に、AIが一社一社に刺さる文面を作成。フォーム送信までを自動化します。</p>
              </div>
            </div>
          </div>
        </Slide>
        </div></div>

        {/* PART 1: DEEPBIZ START */}
        <div style={wrapperStyle}><div style={scalerStyle}>
          <Slide id={4} title="PART 1. DeepBiz システム戦略" subtitle="店舗・企業データベース + AI解析プラットフォーム" pageNumber={4} totalPageCount={totalSlides}>
          <div className="h-full flex flex-col justify-center items-center text-center">
            <div className="w-32 h-32 rounded-3xl bg-blue-50 flex items-center justify-center text-blue-600 mb-8 border border-blue-100 shadow-sm">
              <Database size={64} />
            </div>
            <h2 className="text-5xl font-black mb-6">DeepBiz 全体像</h2>
            <p className="text-zinc-500 max-w-lg text-lg leading-relaxed">高精度なデータ収集とAI解析により、Web上の情報を構造化データへ変換する調査基盤。</p>
          </div>
        </Slide>
        </div></div>

        <div style={wrapperStyle}><div style={scalerStyle}>
          <Slide id={5} title="DeepBiz システム全体フロー" subtitle="全体アーキテクチャ：Phase 1 & 2" pageNumber={5} totalPageCount={totalSlides}>
          <div className="grid grid-cols-2 gap-8 h-full items-center">
            <div className="p-8 bg-zinc-50 rounded-3xl border border-zinc-100 space-y-4">
              <h5 className="text-sm font-black text-blue-600 uppercase tracking-widest border-b border-blue-100 pb-2">【Phase 1】 データ収集</h5>
              <div className="space-y-3">
                {[
                  { t: "Step 1: 基本情報取得", s: "店舗名・住所・Place ID・電話番号 / AI不要" },
                  { t: "Step 2: CID取得", s: "Google Maps URL解析・CID抽出 / AI不要" },
                  { t: "Step 3: Web情報取得", s: "公式サイト・メール・SNS取得 / AI不要" }
                ].map((s, i) => (
                  <div key={i} className="p-4 bg-white rounded-xl border border-zinc-100 shadow-sm">
                    <p className="text-xs font-bold">{s.t}</p>
                    <p className="text-[10px] text-zinc-400">{s.s}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="p-8 bg-zinc-50 rounded-3xl border border-zinc-100 space-y-4">
              <h5 className="text-sm font-black text-indigo-600 uppercase tracking-widest border-b border-indigo-100 pb-2">【Phase 2】 企業分析</h5>
              <div className="space-y-3">
                {[
                  { t: "Step 1: Web取得", s: "HTML取得・テキスト抽出・洗浄 / AI不要" },
                  { t: "Step 2: AI解析 (Gemini 2.0)", s: "強み・課題抽出・JSON構造化 / 💰 0.023円/社", active: true },
                  { t: "Step 3: キャッシュ", s: "90日間保存・再利用 / 💰 0円" }
                ].map((s, i) => (
                  <div key={i} className={`p-4 rounded-xl border ${s.active ? 'bg-indigo-50 border-indigo-200' : 'bg-white border-zinc-100 shadow-sm'}`}>
                    <p className={`text-xs font-bold ${s.active ? 'text-indigo-600' : ''}`}>{s.t}</p>
                    <p className="text-[10px] text-zinc-400">{s.s}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Slide>

        <Slide id={6} title="DeepBiz AI使用箇所とコスト" subtitle="コスト発生箇所マトリックス（AI + API）" pageNumber={6} totalPageCount={totalSlides}>
          <div className="flex flex-col justify-center h-full space-y-8">
            <div className="overflow-hidden rounded-2xl border border-zinc-200 bg-white shadow-sm">
              <table className="w-full text-left text-xs">
                <thead className="bg-zinc-50 text-zinc-500 font-bold uppercase tracking-widest">
                  <tr>
                    <th className="px-6 py-4">フェーズ</th>
                    <th className="px-6 py-4">AI使用</th>
                    <th className="px-6 py-4">コスト</th>
                    <th className="px-6 py-4">用途</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-zinc-100">
                  <tr>
                    <td className="px-6 py-4 font-bold">Phase 1: Place ID取得</td>
                    <td className="px-6 py-4 text-zinc-400">❌ 不要</td>
                    <td className="px-6 py-4 font-bold text-zinc-900">$0.032/検索</td>
                    <td className="px-6 py-4 text-zinc-500">店舗名→Place ID変換</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 font-bold">Phase 1: 連絡先/Website</td>
                    <td className="px-6 py-4 text-zinc-400">❌ 不要</td>
                    <td className="px-6 py-4 font-bold text-zinc-900">¥0</td>
                    <td className="px-6 py-4 text-zinc-500">自社スクレイピング対応</td>
                  </tr>
                  <tr className="bg-blue-50/50">
                    <td className="px-6 py-4 font-black text-blue-600">Phase 2: 企業分析</td>
                    <td className="px-6 py-4 text-blue-600 font-black">✅ 必須</td>
                    <td className="px-6 py-4 font-black text-blue-600">0.023円/社</td>
                    <td className="px-6 py-4 text-zinc-500 font-bold">Gemini 2.0 Flash による構造化</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="grid grid-cols-2 gap-8">
              <div className="p-6 bg-zinc-50 rounded-2xl border border-zinc-100">
                <p className="text-[10px] font-bold text-zinc-400 mb-2 uppercase tracking-widest">Google Maps API (Essentials)</p>
                <p className="text-2xl font-black text-zinc-900">$0.005 / 検索</p>
                <p className="text-[10px] text-emerald-600 font-bold mt-1 italic">※月10,000件まで完全無料枠あり</p>
              </div>
              <div className="p-6 bg-zinc-50 rounded-2xl border border-zinc-100">
                <p className="text-[10px] font-bold text-zinc-400 mb-2 uppercase tracking-widest">Gemini 2.0 Flash AI</p>
                <p className="text-2xl font-black text-zinc-900">0.023円 / 社</p>
                <p className="text-[10px] text-blue-600 font-bold mt-1 italic">※15,000文字を2秒で解析完了</p>
              </div>
            </div>
          </div>
        </Slide>

        <Slide id={7} title="Google Maps API 戦略" subtitle="新API (Essentials) 体系による月1万件無料運用の実現" pageNumber={7} totalPageCount={totalSlides}>
          <div className="h-full flex flex-col justify-center space-y-10">
            <div className="p-8 bg-blue-50/30 border border-blue-100 rounded-3xl">
              <h5 className="text-sm font-bold text-blue-600 mb-6 flex items-center gap-3"><Target size={20}/> なぜAPIが必要か？</h5>
              <div className="grid grid-cols-2 gap-8 text-xs text-zinc-600 leading-relaxed">
                <div className="p-6 bg-white rounded-2xl border border-blue-50 shadow-sm">
                  <p className="font-bold text-zinc-900 mb-2">【課題】</p>
                  店舗名だけでは、ネット上の膨大な情報の中から一意に特定できない。
                </div>
                <div className="p-6 bg-white rounded-2xl border border-blue-50 shadow-sm">
                  <p className="font-bold text-blue-600 mb-2">【解決】</p>
                  Place IDを取得し、正規の店舗情報に紐付ける。これが営業精度の土台となる。
                </div>
              </div>
            </div>
            <div className="overflow-hidden rounded-2xl border border-zinc-200">
              <table className="w-full text-left text-xs">
                <thead className="bg-zinc-50 text-zinc-500 font-bold uppercase tracking-widest">
                  <tr><th className="px-6 py-4">項目</th><th className="px-6 py-4">旧API</th><th className="px-6 py-4 text-emerald-600">新API (Essentials)</th></tr>
                </thead>
                <tbody className="divide-y divide-zinc-100">
                  <tr><td className="px-6 py-4 text-zinc-500">単価</td><td className="px-6 py-4">$0.032 /検索</td><td className="px-6 py-4 font-bold text-emerald-600">$0.005 /検索</td></tr>
                  <tr><td className="px-6 py-4 text-zinc-500">無料枠</td><td className="px-6 py-4">なし</td><td className="px-6 py-4 font-bold text-emerald-600">10,000件 /月</td></tr>
                  <tr className="bg-zinc-50/50 font-black"><td className="px-6 py-4 text-zinc-400 italic">$320 (約5万円)</td><td className="px-6 py-4 text-emerald-600 text-lg">$0 (完全無料)</td></tr>
                </tbody>
              </table>
            </div>
          </div>
        </Slide>

        <Slide id={8} title="企業分析機能詳細 (Phase 2)" subtitle="非構造化テキストを営業用インテリジェンスへ変換" pageNumber={8} totalPageCount={totalSlides}>
          <div className="grid grid-cols-5 gap-8 h-full items-center">
            <div className="col-span-2 space-y-6">
              <div className="p-8 bg-zinc-50 rounded-3xl border border-zinc-100">
                <h5 className="text-[10px] font-bold text-zinc-400 uppercase mb-4 tracking-widest">AIが必要な理由</h5>
                <div className="space-y-4 text-xs">
                  <p className="flex justify-between border-b border-zinc-200 pb-1 items-center">
                    <span>データ形式</span>
                    <span className="font-bold">非構造化 (自然言語)</span>
                  </p>
                  <p className="flex justify-between border-b border-zinc-200 pb-1 items-center">
                    <span>文脈理解</span>
                    <span className="text-blue-600 font-bold">必須</span>
                  </p>
                  <p className="flex justify-between border-b border-zinc-200 pb-1 items-center">
                    <span>解析速度</span>
                    <span className="font-bold">2秒 / 社</span>
                  </p>
                </div>
              </div>
              <div className="p-8 bg-blue-600 rounded-3xl text-white text-center shadow-lg">
                <p className="text-[10px] font-bold uppercase tracking-widest opacity-80 mb-1">Cost per analysis</p>
                <p className="text-4xl font-black flex items-center justify-center">
                  0.023<span className="ml-3 text-3xl font-bold">円</span>
                </p>
              </div>
            </div>
            <div className="col-span-3 p-8 bg-zinc-900 rounded-3xl font-mono text-xs text-blue-300 shadow-xl border border-zinc-800">
              <p className="text-zinc-500 mb-3 border-b border-zinc-800 pb-2">// Gemini 2.0 Flash Analytics Output</p>
              <pre className="whitespace-pre-wrap leading-relaxed">{`{
  "description": "中小企業向けAIソリューション提供...",
  "industry": "IT・ソフトウェア",
  "strengths": [
    "創業30年の実績",
    "手厚いサポート体制",
    "独自のAI解析技術"
  ],
  "target": "中小企業のDX推進担当者",
  "painPoints": ["リソース不足", "ITスキル不足"]
}`}</pre>
            </div>
          </div>
        </Slide>

        <Slide id={9} title="DeepBiz コスト最適化戦略" subtitle="データ資産化と格安AIモデルの戦略的選定" pageNumber={9} totalPageCount={totalSlides}>
          <div className="h-full flex flex-col justify-center space-y-12">
            <div className="grid grid-cols-2 gap-8">
              <div className="p-8 bg-white border border-zinc-200 rounded-3xl shadow-sm space-y-4">
                <h5 className="text-sm font-bold text-zinc-900 flex items-center gap-2"><Share2 size={18} className="text-blue-600"/> 1. AIキャッシュ戦略</h5>
                <p className="text-xs text-zinc-500 leading-relaxed">初回解析のみ0.023円。結果をDBに90日間保存し、2回目以降は <span className="text-emerald-600 font-bold italic">完全無料(0円)</span>。複数ユーザー共有で効率最大化。</p>
              </div>
              <div className="p-8 bg-white border border-zinc-200 rounded-3xl shadow-sm space-y-4">
                <h5 className="text-sm font-bold text-zinc-900 flex items-center gap-2"><Cpu size={18} className="text-indigo-600"/> 2. Gemini 2.0 Flash選定</h5>
                <p className="text-xs text-zinc-500 leading-relaxed">GPT-4(63円)比で <span className="text-zinc-900 font-bold underline decoration-blue-500 decoration-2">2,739倍安い</span>。大量データ処理に最適な最高コスパモデルを採用。</p>
              </div>
            </div>
            <div className="p-10 bg-zinc-50 rounded-3xl border border-zinc-100">
              <h5 className="text-sm font-black text-zinc-900 mb-6 flex items-center gap-3">3. 推奨インフラ：さくらVPS 4Gプラン (石狩: ¥3,227)</h5>
              <div className="grid grid-cols-3 gap-6 text-[11px] text-zinc-500 text-center">
                <div className="p-4 bg-white rounded-2xl border border-zinc-200">1G / 2G<br/><span className="text-red-500 font-bold">Selenium動作不安定</span></div>
                <div className="p-4 bg-white rounded-2xl border-2 border-blue-500 shadow-sm text-blue-600 font-black">4G (推奨)<br/>並列処理を安定稼働可能</div>
                <div className="p-4 bg-white rounded-2xl border border-zinc-200">16G<br/>日次5,000件超の拡大期</div>
              </div>
            </div>
          </div>
        </Slide>

        {/* PART 2: THESIDE START */}
        <Slide id={10} title="PART 2. TheSide 実行戦略" subtitle="AIお問い合わせフォーム自動送信プラットフォーム" pageNumber={10} totalPageCount={totalSlides}>
          <div className="h-full flex flex-col justify-center items-center text-center">
            <div className="w-32 h-32 rounded-3xl bg-indigo-50 flex items-center justify-center text-indigo-600 mb-8 border border-indigo-100 shadow-sm">
              <Zap size={64} />
            </div>
            <h2 className="text-5xl font-black mb-6">TheSide 全体像</h2>
            <p className="text-zinc-500 max-w-lg text-lg leading-relaxed">DeepBizの分析データを使い、一社一社に最適化された営業文を企業の窓口へ自動で送り届ける。</p>
          </div>
        </Slide>

        <Slide id={11} title="TheSide サービス概要" subtitle="解決する課題とターゲットユーザー" pageNumber={11} totalPageCount={totalSlides}>
          <div className="h-full flex flex-col justify-center space-y-12">
            <div className="grid grid-cols-2 gap-12">
              <div className="space-y-6">
                <h5 className="text-xs font-black text-indigo-600 uppercase tracking-widest border-l-4 border-indigo-600 pl-3">解決する課題</h5>
                <div className="space-y-3">
                  {[
                    "営業リストの作成 (DeepBiz API連携)",
                    "メッセージ作成 (AI自動個別化)",
                    "フォーム送信 (ブラウザ自動化)",
                    "送信管理 (データベース一元管理)"
                  ].map((t, i) => (
                    <div key={i} className="flex gap-3 items-center text-sm font-bold text-zinc-700 bg-zinc-50 p-4 rounded-xl">
                      <CheckCircle2 className="text-emerald-500" size={20}/> {t}
                    </div>
                  ))}
                </div>
              </div>
              <div className="space-y-6">
                <h5 className="text-xs font-black text-zinc-400 uppercase tracking-widest border-l-4 border-zinc-200 pl-3">ターゲットユーザー</h5>
                <div className="grid grid-cols-2 gap-4">
                  {[
                    "BtoB営業担当者",
                    "新規開拓部門",
                    "スタートアップ経営者",
                    "営業代行会社"
                  ].map((t, i) => (
                    <div key={i} className="p-6 bg-white rounded-2xl border border-zinc-200 shadow-sm text-center text-xs font-bold flex items-center justify-center">
                      {t}
                    </div>
                  ))}
                </div>
                <div className="p-6 bg-indigo-50 rounded-2xl border border-indigo-100 italic text-xs text-zinc-500 leading-relaxed text-center">
                  「リストアップから送信までの人的工数をAIでゼロにする」
                </div>
              </div>
            </div>
          </div>
        </Slide>

        <Slide id={12} title="TheSide システム全体フロー" subtitle="外部連携から自動送信までの5ステップ" pageNumber={12} totalPageCount={totalSlides}>
          <div className="h-full flex flex-col justify-center">
            <div className="p-5 bg-blue-50 border border-blue-100 rounded-2xl text-center mb-8">
              <p className="text-[10px] text-blue-600 font-black uppercase tracking-[0.2em] mb-1">DeepBiz API (分析済みデータ連携)</p>
              <p className="text-xs text-zinc-500 font-bold">💰 TheSide側コスト: ¥0 (基盤側で処理済み)</p>
            </div>
            <div className="grid grid-cols-5 gap-4 relative">
              <div className="absolute top-1/2 left-0 right-0 h-0.5 bg-zinc-100 z-0"></div>
              {[
                { s: "Step 1", t: "企業取得", d: "DeepBiz API / AI不要", icon: <Database /> },
                { s: "Step 2", t: "テンプレート作成", d: "🤖 GPT-4: 高品質 / 6.4円", icon: <Heart /> },
                { s: "Step 3", t: "メッセージ個別化", d: "🤖 Gemini 2.5: 0.013円", icon: <Mail /> },
                { s: "Step 4", t: "フォーム認識", d: "🤖 Gemini 2.5: 0.019円", icon: <MousePointerClick /> },
                { s: "Step 5", t: "自動送信", d: "Playwright / AI不要", icon: <Zap /> }
              ].map((item, i) => (
                <div key={i} className="relative z-10 flex flex-col items-center gap-3 group">
                  <div className="w-16 h-16 rounded-2xl bg-white border border-zinc-200 shadow-sm flex items-center justify-center text-indigo-600 transition-colors group-hover:border-indigo-400">
                    {React.cloneElement(item.icon as React.ReactElement, { size: 24 })}
                  </div>
                  <div className="text-center">
                    <p className="text-[9px] font-black text-indigo-600 uppercase mb-1">{item.s}</p>
                    <p className="text-[11px] font-bold mb-1">{item.t}</p>
                    <p className="text-[8px] text-zinc-400 leading-tight">{item.d}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Slide>

        <Slide id={13} title="AI使用箇所とコストマトリックス" subtitle="各プロセスのAI選定理由とコスト最適化の根拠" pageNumber={13} totalPageCount={totalSlides}>
          <div className="h-full flex flex-col justify-center space-y-8">
            <div className="overflow-hidden rounded-2xl border border-zinc-200 bg-white shadow-sm">
              <table className="w-full text-left text-xs">
                <thead className="bg-zinc-50 text-zinc-500 font-bold uppercase tracking-widest">
                  <tr><th className="px-6 py-4">ステップ</th><th className="px-6 py-4">AIモデル</th><th className="px-6 py-4">コスト</th><th className="px-6 py-4">必要性</th></tr>
                </thead>
                <tbody className="divide-y divide-zinc-100">
                  <tr><td className="px-6 py-4 font-bold">テンプレート作成</td><td className="px-6 py-4 text-orange-600 font-black">GPT-4 Turbo</td><td className="px-6 py-4 font-bold">6.4円/案件</td><td className="px-6 py-4 text-zinc-500">営業成果を左右する最高品質の追求</td></tr>
                  <tr><td className="px-6 py-4 font-bold">文面個別化</td><td className="px-6 py-4 text-indigo-600 font-black">Gemini 2.5 Flash</td><td className="px-6 py-4 font-bold">0.013円/件</td><td className="px-6 py-4 text-zinc-500">大量実行におけるコスト最適化</td></tr>
                  <tr><td className="px-6 py-4 font-bold">フォーム認識</td><td className="px-6 py-4 text-indigo-600 font-black">Gemini 2.5 Flash</td><td className="px-6 py-4 font-bold">0.019円/社</td><td className="px-6 py-4 text-zinc-500">可変的なフォーム構造への柔軟な対応</td></tr>
                </tbody>
              </table>
            </div>
            <div className="p-8 bg-zinc-50 rounded-3xl border border-zinc-100">
              <h5 className="text-[10px] font-black text-zinc-400 uppercase mb-4 tracking-widest">AIパーソナライズの威力 (0.013円/件)</h5>
              <div className="flex gap-8 items-center text-[11px] text-zinc-600 italic leading-relaxed">
                <div className="flex-1 p-6 bg-white rounded-2xl border border-zinc-200 shadow-sm">「貴社がIT業界においてDX推進に伴う人材不足に悩んでおられることを拝見しました。弊社のソリューションなら...」</div>
                <ChevronRight className="text-zinc-300" />
                <div className="flex-1 p-6 bg-white rounded-2xl border border-zinc-200 shadow-sm font-bold text-indigo-600">誰にでも送れる文面ではなく、「貴社にこそ送っている」という特別感を自動生成。</div>
              </div>
            </div>
          </div>
        </Slide>

        <Slide id={14} title="ハイブリッド構成推奨の結論" subtitle="GPT-4の「質」とGeminiの「量」を戦略的に融合" pageNumber={14} totalPageCount={totalSlides}>
          <div className="h-full flex flex-col justify-center space-y-12">
            <div className="grid grid-cols-2 gap-12">
              <div className="space-y-6">
                <p className="text-sm text-zinc-600 leading-relaxed">
                  テンプレート作成もGeminiにした場合とのコスト比較（月6万件送信時）:
                </p>
                <div className="overflow-hidden rounded-2xl border border-zinc-200">
                   <table className="w-full text-left text-xs">
                    <thead className="bg-zinc-50 text-zinc-500 font-bold uppercase tracking-widest">
                      <tr><th className="px-4 py-4">プラン</th><th className="px-4 py-4 text-center">月額合計</th></tr>
                    </thead>
                    <tbody className="divide-y divide-zinc-100">
                      <tr><td className="px-4 py-4 text-zinc-500 font-bold">All Gemini Flash</td><td className="px-4 py-4 text-center font-bold">¥8,018</td></tr>
                      <tr className="bg-blue-50 font-black"><td className="px-4 py-4 text-blue-600">GPT-4 ハイブリッド</td><td className="px-4 py-4 text-center text-blue-600">¥8,036</td></tr>
                      <tr className="bg-zinc-50/50"><td className="px-4 py-4 text-zinc-400 font-bold">差額</td><td className="px-4 py-4 text-center font-bold">+18円</td></tr>
                    </tbody>
                  </table>
                </div>
              </div>
              <div className="p-10 bg-zinc-900 rounded-3xl text-white shadow-xl relative overflow-hidden flex flex-col justify-center">
                <div className="absolute top-0 right-0 w-32 h-32 bg-blue-600/20 blur-[60px]"></div>
                <h4 className="text-xl font-black mb-4 flex items-center gap-2"><CheckCircle2 className="text-emerald-400"/> 月18円の差で最高品質を。</h4>
                <p className="text-sm text-zinc-400 leading-relaxed italic">
                  「商材の顔となるテンプレートは一度作れば長く使われます。その要となる『言葉』にはGPT-4の最高品質を。日々の大量処理にはGeminiの低コストを。この構成が投資対効果の最適解です。」
                </p>
              </div>
            </div>
          </div>
        </Slide>

        <Slide id={15} title="AI活用のコスト設計戦略 (TheSide)" subtitle="構造の透明性と予測可能性の確保" pageNumber={15} totalPageCount={totalSlides}>
          <div className="h-full flex flex-col justify-center gap-6">
            <div className="grid grid-cols-3 gap-6">
              {[
                { t: "1. コストの透明性", d: "すべての処理に明確な原価（0.013円〜）を設定。" },
                { t: "2. スケールメリット", d: "送信数が増えてもAI比率は約15%で安定。" },
                { t: "3. 学習効果による削減", d: "フォーム認識は2回目以降無料。実質原価は低下していく。" }
              ].map((item, i) => (
                <div key={i} className="p-8 bg-zinc-50 rounded-3xl border border-zinc-100 flex flex-col gap-4">
                  <h6 className="text-sm font-black text-zinc-900 border-l-4 border-indigo-600 pl-3">{item.t}</h6>
                  <p className="text-xs text-zinc-500 leading-relaxed">{item.d}</p>
                </div>
              ))}
            </div>
            <div className="p-10 bg-white border-2 border-dashed border-zinc-200 rounded-3xl text-center">
              <p className="text-zinc-400 font-bold text-sm italic">「ITシステムとしての安定性と、AIによる柔軟性を両立させた原価設計」</p>
            </div>
          </div>
        </Slide>

        {/* PART 3: INTEGRATED COST STRATEGY START */}
        <Slide id={16} title="PART 3. 統合AI戦略：営業DXの次世代モデル" subtitle="経営層・営業部門へ送る、最新統合コストプラン" pageNumber={16} totalPageCount={totalSlides}>
          <div className="h-full flex flex-col justify-center items-center text-center">
            <div className="w-32 h-32 rounded-full bg-emerald-50 flex items-center justify-center text-emerald-600 mb-8 border border-emerald-100 shadow-sm">
              <BarChart3 size={64} />
            </div>
            <h2 className="text-5xl font-black mb-6">統合コスト戦略 (最新版)</h2>
            <p className="text-zinc-500 max-w-lg text-lg leading-relaxed">Google Maps APIの超過料金を正確に反映した、<br/>直感的に理解できる最新のコストシミュレーション。</p>
          </div>
        </Slide>

        <Slide id={17} title="1. サービスが解決する「営業の課題」" subtitle="人的作業の限界を、2つのシステム連携で突破する" pageNumber={17} totalPageCount={totalSlides}>
          <div className="grid grid-cols-2 gap-12 h-full items-center">
            <div className="p-10 bg-white border border-zinc-200 rounded-3xl shadow-sm relative overflow-hidden group hover:border-blue-200 transition-colors">
              <div className="absolute top-0 right-0 w-32 h-32 bg-blue-50 blur-[50px] group-hover:bg-blue-100 transition-colors"></div>
              <div className="flex gap-6 items-center mb-6">
                <div className="w-16 h-16 rounded-2xl bg-blue-50 flex items-center justify-center text-blue-600 shrink-0 shadow-inner"><Search size={32}/></div>
                <h4 className="text-2xl font-black text-zinc-900">DeepBiz (データ基盤)</h4>
              </div>
              <p className="text-sm text-zinc-500 leading-relaxed">
                ネット上の膨大な情報から「ターゲット企業」を見つけ出し、その特徴を分析する<span className="text-blue-600 font-black italic">「調査員」</span>の役割を果たします。
              </p>
            </div>
            <div className="p-10 bg-white border border-zinc-200 rounded-3xl shadow-sm relative overflow-hidden group hover:border-indigo-200 transition-colors">
              <div className="absolute top-0 right-0 w-32 h-32 bg-indigo-50 blur-[50px] group-hover:bg-indigo-100 transition-colors"></div>
              <div className="flex gap-6 items-center mb-6">
                <div className="w-16 h-16 rounded-2xl bg-indigo-50 flex items-center justify-center text-indigo-600 shrink-0 shadow-inner"><Zap size={32}/></div>
                <h4 className="text-2xl font-black text-zinc-900">TheSide (営業実行)</h4>
              </div>
              <p className="text-sm text-zinc-500 leading-relaxed">
                DeepBizが調べた情報を元に、企業に刺さる「ラブレター（営業文）」を書き、窓口へ届ける<span className="text-indigo-600 font-black italic">「営業マン」</span>の役割を果たします。
              </p>
            </div>
          </div>
        </Slide>

        <Slide id={18} title="2. なぜ「AI」を使うのか？" subtitle="従来のITシステムでは不可能だった「文脈理解」の代行" pageNumber={18} totalPageCount={totalSlides}>
          <div className="h-full flex flex-col justify-center gap-8">
            <div className="overflow-hidden rounded-3xl border border-zinc-200 shadow-sm">
              <table className="w-full text-left text-sm">
                <thead className="bg-zinc-50 text-zinc-500 font-bold uppercase tracking-widest">
                  <tr><th className="px-8 py-6 w-1/4">AIの役割</th><th className="px-8 py-6 w-2/5">具体的な内容</th><th className="px-8 py-6">AIを使う理由</th></tr>
                </thead>
                <tbody className="divide-y divide-zinc-100">
                  {[
                    { r: "企業の本質を理解", c: "Webサイトから「この会社は今、人材不足に悩んでいるな」と推測。", y: "人が読むと10分かかる調査を, AIなら「2秒」で完了できるため。" },
                    { r: "心に刺さる文章作成", c: "相手の強みを褒め, 自社サービスがどう役立つかを自然な日本語で作成。", y: "コピペ文ではなく, 成約率を最大化するため。" },
                    { r: "複雑な操作の代行", d: "企業ごとに異なる複雑なお問い合わせフォームを正しく認識。", y: "あらゆる企業のサイトに低コストで対応するため。" }
                  ].map((item, i) => (
                    <tr key={i}>
                      <td className="px-8 py-8 font-black text-zinc-900">{item.r}</td>
                      <td className="px-8 py-8 text-zinc-500 leading-relaxed">{item.c || item.d}</td>
                      <td className="px-8 py-8 text-zinc-400 font-bold">{item.y}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </Slide>

        <Slide id={19} title="3. 【重要】最新統合コストシミュレーション" subtitle="Google Maps API 超過料金を反映した運用予測" pageNumber={19} totalPageCount={totalSlides}>
          <div className="h-full flex flex-col justify-center space-y-8">
            <div className="overflow-hidden rounded-3xl border-2 border-zinc-900 shadow-xl bg-white">
              <table className="w-full text-left text-xs">
                <thead className="bg-zinc-900 text-white font-bold tracking-widest">
                  <tr>
                    <th className="px-6 py-6 uppercase">規模のイメージ</th>
                    <th className="px-6 py-6 text-center">月3万件 (検証期)</th>
                    <th className="px-6 py-6 text-center text-blue-400 font-black">月6万件 (本格運用)</th>
                    <th className="px-6 py-6 text-center">月15万件 (拡大期)</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-zinc-100">
                  <tr><td className="px-6 py-4 font-bold text-zinc-500">想定企業数</td><td className="px-6 py-4 text-center">10,000社</td><td className="px-6 py-4 text-center font-black">20,000社</td><td className="px-6 py-4 text-center">50,000社</td></tr>
                  <tr><td className="px-6 py-4 font-bold text-zinc-500">システム維持費 (VPS)</td><td className="px-6 py-4 text-center">6,656円</td><td className="px-6 py-4 text-center">10,084円</td><td className="px-6 py-4 text-center">16,336円</td></tr>
                  <tr><td className="px-6 py-4 font-bold text-zinc-500">外部データ費 (GMap)</td><td className="px-6 py-4 text-center text-emerald-600 font-bold">0円</td><td className="px-6 py-4 text-center text-orange-600 font-black">8,000円 (超過分)</td><td className="px-6 py-4 text-center text-orange-600 font-black">32,000円 (超過分)</td></tr>
                  <tr><td className="px-6 py-4 font-bold text-zinc-500">AI利用料 (Gemini/GPT-4)</td><td className="px-6 py-4 text-center">829円</td><td className="px-6 py-4 text-center">1,639円</td><td className="px-4 py-4 text-center">4,069円</td></tr>
                  <tr className="bg-zinc-50 font-black">
                    <td className="px-6 py-8 text-lg font-black tracking-widest">🔥 月額合計 (税込)</td>
                    <td className="px-6 py-8 text-center text-2xl">¥7,485</td>
                    <td className="px-6 py-8 text-center text-4xl text-blue-600 ring-4 ring-blue-50 shadow-inner">¥19,723</td>
                    <td className="px-6 py-8 text-center text-2xl">¥52,405</td>
                  </tr>
                  <tr className="bg-white">
                    <td className="px-6 py-4 text-zinc-400 font-bold uppercase tracking-widest">送信単価 /件</td>
                    <td className="px-6 py-4 text-center text-zinc-900 font-bold">0.25円</td>
                    <td className="px-6 py-4 text-center text-zinc-900 font-black underline decoration-blue-600 decoration-4">0.33円</td>
                    <td className="px-6 py-4 text-center text-zinc-900 font-bold">0.35円</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </Slide>

        <Slide id={20} title="Google Maps API 超過コストの考え方" subtitle="月1万件の境界線とビジネス判断の妥当性" pageNumber={20} totalPageCount={totalSlides}>
          <div className="grid grid-cols-2 gap-12 h-full items-center">
            <div className="space-y-8">
              <div className="p-10 bg-orange-50 rounded-3xl border border-orange-100 shadow-sm relative overflow-hidden">
                <div className="absolute top-0 right-0 w-24 h-24 bg-white/50 blur-[40px]"></div>
                <h5 className="text-lg font-black text-orange-600 mb-6 flex items-center gap-3"><Info size={24}/> 月額8,000円の超過料金</h5>
                <p className="text-sm text-zinc-600 leading-relaxed">
                  月間10,000社を超える「新規 Place ID 取得」を行う際, Googleから<span className="font-black">1万件あたり8,000円</span>の課金が段階的に発生します。
                </p>
              </div>
              <div className="p-8 bg-zinc-50 rounded-3xl border border-zinc-100 italic text-xs text-zinc-400 leading-relaxed">
                「送信単価は0.25円→0.33円へと微増しますが, 人件費と比較すれば誤差範囲内の圧倒的低コストであることに変わりはありません。」
              </div>
            </div>
            <div className="p-10 bg-white border border-zinc-200 rounded-3xl shadow-sm space-y-6">
              <h5 className="text-sm font-black text-zinc-900 uppercase tracking-widest border-l-4 border-blue-600 pl-3">資産化によるコスト低減</h5>
              <p className="text-sm text-zinc-500 leading-relaxed">
                一度取得した Place ID はシステム内に蓄積(キャッシュ)されます。
              </p>
              <div className="p-6 bg-zinc-50 rounded-2xl border border-zinc-100 text-xs font-bold text-zinc-700 leading-relaxed">
                同じ企業のリストを2回目以降使う場合は, この8,000円の超過費は<span className="text-emerald-600 underline">一切発生しません</span>。
              </div>
            </div>
          </div>
        </Slide>

        <Slide id={21} title="4. まとめ：本システムのビジネス価値" subtitle="「量」と「質」の両立、そして資産が積み上がる設計" pageNumber={21} totalPageCount={totalSlides}>
          <div className="h-full flex flex-col justify-center space-y-8">
            <div className="grid grid-cols-3 gap-8">
              {[
                { n: "1", t: "「量」と「質」の両立", d: "大量送信をAIが自動でパーソナライズ。コピペではなく『刺さる』営業文を維持します。" },
                { n: "2", t: "コストの透明性", d: "AI利用料は送信数に比例し, インフラ費は固定。予算が立てやすく予測可能な設計です。" },
                { n: "3", t: "蓄積される資産", d: "分析データは90日間保存され, 再利用無料。使えば使うほど営業知能が向上します。" }
              ].map((item, i) => (
                <div key={i} className="p-10 bg-white border border-zinc-200 rounded-3xl shadow-sm flex flex-col gap-6 group hover:border-blue-200 transition-colors">
                  <div className="w-12 h-12 rounded-full bg-zinc-900 text-white flex items-center justify-center font-black text-lg group-hover:bg-blue-600 transition-colors">{item.n}</div>
                  <h5 className="text-lg font-black text-zinc-900 underline decoration-zinc-100 decoration-8 underline-offset-[-2px] group-hover:decoration-blue-50 transition-all">{item.t}</h5>
                  <p className="text-xs text-zinc-500 leading-relaxed">{item.d}</p>
                </div>
              ))}
            </div>
            <div className="p-8 bg-zinc-50 rounded-3xl border border-zinc-100 text-center text-sm font-bold text-zinc-400 italic">
              「原価を戦略的に設計し, 効率的な営業組織へと変革する」
            </div>
          </div>
        </Slide>

        {/* CLOSING SLIDES */}
        <Slide id={22} title="統合運用のビジネス価値総括" subtitle="原価を戦略的に設計した、AI駆動型営業プラットフォーム" pageNumber={22} totalPageCount={totalSlides}>
          <div className="h-full flex flex-col justify-center items-center">
            <div className="max-w-3xl w-full p-16 bg-zinc-900 rounded-3xl text-white shadow-2xl relative overflow-hidden text-center">
              <div className="absolute top-0 right-0 w-64 h-64 bg-blue-600/20 blur-[80px]"></div>
              <h4 className="text-2xl font-black mb-8 uppercase tracking-[0.2em] underline underline-offset-[12px] decoration-blue-500">営業DXの最終形</h4>
              <p className="text-lg text-zinc-400 leading-relaxed italic mb-12">
                「このシステムは単なる自動化ツールではありません。AI時代の新しい『営業原価』を再定義し, 企業の競争力を根本から引き上げるプラットフォームです。」
              </p>
              <div className="flex gap-6 justify-center">
                <span className="px-6 py-3 bg-white/5 rounded-full border border-white/10 text-xs font-bold tracking-widest">SPEED</span>
                <span className="px-6 py-3 bg-white/5 rounded-full border border-white/10 text-xs font-bold tracking-widest">QUALITY</span>
                <span className="px-6 py-3 bg-white/5 rounded-full border border-white/10 text-xs font-bold tracking-widest">SCALE</span>
              </div>
            </div>
          </div>
        </Slide>

        <Slide id={23} title="Thank You" subtitle="次世代の営業組織への変革を、共に。" pageNumber={23} totalPageCount={totalSlides}>
          <div className="h-full flex flex-col justify-center items-center text-center space-y-16">
            <div className="w-24 h-24 rounded-full bg-zinc-50 flex items-center justify-center text-zinc-900 shadow-sm border border-zinc-100">
              <CheckCircle2 size={48} />
            </div>
            <div className="space-y-4">
              <h2 className="text-5xl font-black text-zinc-900">ご清聴ありがとうございました</h2>
              <p className="text-zinc-500 max-w-sm mx-auto text-sm leading-relaxed">
                本資料の内容に関するお問い合わせや, 導入スケジュールの詳細については担当までご連絡ください。
              </p>
            </div>
            <div className="w-full max-w-lg flex items-center gap-4 text-zinc-200 text-[10px] font-mono tracking-[0.3em] uppercase">
              <div className="flex-1 h-px bg-zinc-100"></div>
              <span>End of Strategy Paper</span>
              <div className="flex-1 h-px bg-zinc-100"></div>
            </div>
            <div className="text-zinc-400 text-[10px] font-bold uppercase tracking-widest">© 2026 DeepBiz x TheSide Strategy Team v6.0</div>
          </div>
        </Slide>
        </div></div>

      </div>
    </div>
  );
};

export default App;
