import React, { useState, useEffect } from 'react';
import Slide from '../shared/Slide';
import { Lock, CheckCircle2, TrendingUp, Target, DollarSign, Users, Zap, BarChart3, AlertCircle, Calendar, Database, Settings } from 'lucide-react';

const PASSWORD = '2026';
const TOTAL_SLIDES = 22;

function App() {
  const [currentSlide, setCurrentSlide] = useState(1);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [passwordInput, setPasswordInput] = useState('');

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!isAuthenticated) return;
      
      if (e.key === 'ArrowRight' && currentSlide < TOTAL_SLIDES) {
        setCurrentSlide(prev => prev + 1);
      } else if (e.key === 'ArrowLeft' && currentSlide > 1) {
        setCurrentSlide(prev => prev - 1);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [currentSlide, isAuthenticated]);

  const handlePasswordSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (passwordInput === PASSWORD) {
      setIsAuthenticated(true);
    } else {
      alert('パスワードが違います');
      setPasswordInput('');
    }
  };

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 flex items-center justify-center p-8">
        <div className="bg-white rounded-2xl shadow-2xl p-12 max-w-md w-full">
          <div className="flex justify-center mb-6">
            <div className="bg-blue-100 p-4 rounded-full">
              <Lock className="w-12 h-12 text-blue-600" />
            </div>
          </div>
          <h2 className="text-3xl font-bold text-center mb-2 text-slate-900">
            認証が必要です
          </h2>
          <p className="text-center text-slate-600 mb-8">
            TheSide ハイブリッド自動化戦略<br />企画提案書
          </p>
          <form onSubmit={handlePasswordSubmit}>
            <input
              type="password"
              value={passwordInput}
              onChange={(e) => setPasswordInput(e.target.value)}
              placeholder="パスワードを入力"
              className="w-full px-4 py-3 border-2 border-slate-300 rounded-lg mb-4 text-lg focus:border-blue-500 focus:outline-none"
              autoFocus
            />
            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
            >
              ログイン
            </button>
          </form>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-100 via-blue-50 to-slate-100 py-8">
      <div className="flex flex-col items-center gap-8 pb-8">
        {/* Slide 1: タイトル */}
        {currentSlide === 1 && (
          <Slide id={1} title="" subtitle="" pageNumber={1} totalPageCount={TOTAL_SLIDES}>
            <div className="h-full flex flex-col items-center justify-center text-center -mt-8">
              <div className="mb-6">
                <div className="inline-block bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-6 py-2 rounded-full text-sm font-bold mb-4">
                  CONFIDENTIAL PROPOSAL
                </div>
              </div>
              <h1 className="text-6xl font-black mb-4 bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                ハイブリッド自動化戦略
              </h1>
              <h2 className="text-4xl font-bold text-slate-700 mb-8">
                TheSide インテリジェント振り分けシステム
              </h2>
              <div className="text-slate-600 text-xl mb-12">
                <p className="mb-2">運用コスト<span className="text-3xl font-bold text-blue-600 mx-2">50%削減</span></p>
                <p>処理速度<span className="text-3xl font-bold text-indigo-600 mx-2">3倍向上</span></p>
              </div>
              <div className="border-t-2 border-slate-200 pt-6 mt-6">
                <p className="text-slate-500 text-lg mb-2">企画提案書</p>
                <p className="text-slate-400">2026年1月2日 ver 1.0</p>
              </div>
            </div>
          </Slide>
        )}

        {/* Slide 2: エグゼクティブサマリー */}
        {currentSlide === 2 && (
          <Slide id={2} title="エグゼクティブサマリー" subtitle="提案の要点" pageNumber={2} totalPageCount={TOTAL_SLIDES}>
            <div className="grid grid-cols-2 gap-8 h-full">
              <div>
                <h3 className="text-2xl font-bold text-slate-800 mb-6 flex items-center gap-2">
                  <Target className="w-6 h-6 text-blue-600" />
                  提案コンセプト
                </h3>
                <div className="space-y-4">
                  <div className="bg-red-50 border-l-4 border-red-500 p-4 rounded">
                    <div className="text-sm font-semibold text-red-700 mb-1">現状</div>
                    <div className="text-slate-700">すべてのフォーム送信をワーカーに割り当て</div>
                  </div>
                  <div className="bg-green-50 border-l-4 border-green-500 p-4 rounded">
                    <div className="text-sm font-semibold text-green-700 mb-1">提案</div>
                    <div className="text-slate-700 font-bold">reCAPTCHAの有無で自動/手動を振り分け</div>
                  </div>
                </div>

                <h3 className="text-xl font-bold text-slate-800 mt-8 mb-4 flex items-center gap-2">
                  <Zap className="w-5 h-5 text-amber-600" />
                  期待効果
                </h3>
                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <DollarSign className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <div>
                      <div className="font-bold text-slate-800">運用コスト50%削減</div>
                      <div className="text-sm text-slate-600">月120,000円 → 60,000円</div>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <TrendingUp className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" />
                    <div>
                      <div className="font-bold text-slate-800">処理速度3倍向上</div>
                      <div className="text-sm text-slate-600">自動処理タスク対象</div>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Users className="w-5 h-5 text-indigo-600 mt-0.5 flex-shrink-0" />
                    <div>
                      <div className="font-bold text-slate-800">ワーカー負荷軽減</div>
                      <div className="text-sm text-slate-600">単純作業を自動化</div>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-2xl font-bold text-slate-800 mb-6 flex items-center gap-2">
                  <BarChart3 className="w-6 h-6 text-green-600" />
                  投資対効果（ROI）
                </h3>
                <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-xl p-6 border border-green-200">
                  <table className="w-full">
                    <tbody className="divide-y divide-green-200">
                      <tr>
                        <td className="py-3 font-semibold text-slate-700">開発コスト（3週間）</td>
                        <td className="py-3 text-right font-bold text-slate-800">300,000円</td>
                      </tr>
                      <tr>
                        <td className="py-3 font-semibold text-slate-700">月額削減効果</td>
                        <td className="py-3 text-right font-bold text-green-600 text-xl">66,000円</td>
                      </tr>
                      <tr>
                        <td className="py-3 font-semibold text-slate-700">投資回収期間</td>
                        <td className="py-3 text-right font-bold text-blue-600 text-2xl">5ヶ月</td>
                      </tr>
                      <tr className="bg-green-100">
                        <td className="py-3 font-bold text-slate-800">年間効果</td>
                        <td className="py-3 text-right font-bold text-green-700 text-2xl">792,000円</td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <div className="mt-6 bg-blue-50 border-2 border-blue-200 rounded-xl p-4">
                  <div className="flex items-center gap-2 mb-2">
                    <CheckCircle2 className="w-5 h-5 text-blue-600" />
                    <span className="font-bold text-blue-900">判定結果</span>
                  </div>
                  <p className="text-slate-700 text-sm leading-relaxed">
                    <span className="font-bold text-blue-600">高ROI案件</span> - 短期間で投資回収が可能。規模拡大時の効果も大きく、事業成長を加速させる戦略的投資として推奨します。
                  </p>
                </div>
              </div>
            </div>
          </Slide>
        )}

        {/* Slide 3: 現状分析 */}
        {currentSlide === 3 && (
          <Slide id={3} title="現状分析と課題" subtitle="システム構成と問題点" pageNumber={3} totalPageCount={TOTAL_SLIDES}>
            <div className="grid grid-cols-2 gap-8 h-full">
              <div>
                <h3 className="text-xl font-bold text-slate-800 mb-4">現在のシステム構成</h3>
                <div className="bg-slate-50 rounded-xl p-6 border-2 border-slate-200">
                  <div className="space-y-4">
                    <div className="bg-white rounded-lg p-4 border border-slate-200 text-center">
                      <div className="font-bold text-lg text-slate-800">すべてのタスク</div>
                      <div className="text-blue-600 font-bold text-2xl">60,000件/月</div>
                    </div>
                    <div className="flex justify-center">
                      <div className="text-slate-400">↓</div>
                    </div>
                    <div className="bg-white rounded-lg p-4 border border-slate-200 text-center">
                      <div className="font-bold text-slate-800">ワーカーコンソール</div>
                      <div className="text-sm text-slate-600 mt-1">全件を手動割り当て</div>
                    </div>
                    <div className="flex justify-center">
                      <div className="text-slate-400">↓</div>
                    </div>
                    <div className="bg-white rounded-lg p-4 border border-slate-200 text-center">
                      <div className="font-bold text-slate-800">半自動処理</div>
                      <div className="text-sm text-slate-600 mt-1">ワーカー対応</div>
                    </div>
                    <div className="flex justify-center">
                      <div className="text-slate-400">↓</div>
                    </div>
                    <div className="bg-red-50 rounded-lg p-4 border-2 border-red-300 text-center">
                      <div className="font-bold text-red-700">月額コスト</div>
                      <div className="text-red-600 font-bold text-2xl">120,000円</div>
                      <div className="text-sm text-red-600 mt-1">60,000件 × 2円</div>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-bold text-slate-800 mb-4 flex items-center gap-2">
                  <AlertCircle className="w-6 h-6 text-red-600" />
                  課題一覧
                </h3>
                <div className="space-y-4">
                  <div className="bg-red-50 border-l-4 border-red-500 p-4 rounded-lg">
                    <div className="font-bold text-slate-800 mb-2 flex items-center gap-2">
                      <DollarSign className="w-5 h-5 text-red-600" />
                      1. コスト効率の悪化
                    </div>
                    <ul className="text-sm text-slate-700 space-y-1 ml-7">
                      <li>• reCAPTCHA無しも手動対応</li>
                      <li>• 単純作業に人件費投入</li>
                      <li>• スケールするほどコスト増大</li>
                    </ul>
                  </div>

                  <div className="bg-orange-50 border-l-4 border-orange-500 p-4 rounded-lg">
                    <div className="font-bold text-slate-800 mb-2 flex items-center gap-2">
                      <Users className="w-5 h-5 text-orange-600" />
                      2. ワーカーのモチベーション低下
                    </div>
                    <ul className="text-sm text-slate-700 space-y-1 ml-7">
                      <li>• 単純作業の繰り返し</li>
                      <li>• 付加価値の低い作業</li>
                      <li>• reCAPTCHA対応が本来の価値</li>
                    </ul>
                  </div>

                  <div className="bg-amber-50 border-l-4 border-amber-500 p-4 rounded-lg">
                    <div className="font-bold text-slate-800 mb-2 flex items-center gap-2">
                      <Zap className="w-5 h-5 text-amber-600" />
                      3. 処理速度の限界
                    </div>
                    <ul className="text-sm text-slate-700 space-y-1 ml-7">
                      <li>• 人間: 1タスク2分（720件/日/人）</li>
                      <li>• 自動: 1タスク15秒（5,760件/日）</li>
                      <li>• <span className="font-bold text-amber-700">8倍の速度差</span></li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </Slide>
        )}

        {/* Slide 4: 市場調査結果 */}
        {currentSlide === 4 && (
          <Slide id={4} title="市場調査結果" subtitle="自動化可能性の分析" pageNumber={4} totalPageCount={TOTAL_SLIDES}>
            <div className="h-full">
              <div className="bg-blue-50 rounded-xl p-6 mb-6 border border-blue-200">
                <h3 className="text-lg font-bold text-slate-800 mb-2">調査概要</h3>
                <p className="text-slate-700"><span className="font-semibold">調査対象:</span> 日本企業のお問い合わせフォーム 500サイト</p>
              </div>

              <div className="grid grid-cols-2 gap-8">
                <div>
                  <h3 className="text-xl font-bold text-slate-800 mb-4">reCAPTCHA導入状況</h3>
                  <table className="w-full border-collapse">
                    <thead>
                      <tr className="bg-slate-100">
                        <th className="border border-slate-300 px-4 py-3 text-left font-semibold text-slate-700">reCAPTCHA状況</th>
                        <th className="border border-slate-300 px-4 py-3 text-center font-semibold text-slate-700">割合</th>
                        <th className="border border-slate-300 px-4 py-3 text-right font-semibold text-slate-700">件数<br /><span className="text-xs font-normal">(6万件換算)</span></th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="bg-red-50">
                        <td className="border border-slate-300 px-4 py-3">
                          <div className="font-semibold text-slate-800">reCAPTCHA v2</div>
                          <div className="text-xs text-slate-600">(手動対応必要)</div>
                        </td>
                        <td className="border border-slate-300 px-4 py-3 text-center font-bold text-lg">45%</td>
                        <td className="border border-slate-300 px-4 py-3 text-right font-bold text-lg">27,000件</td>
                      </tr>
                      <tr className="bg-green-50">
                        <td className="border border-slate-300 px-4 py-3">
                          <div className="font-semibold text-slate-800">reCAPTCHA v3</div>
                          <div className="text-xs text-slate-600">(自動対応可能)</div>
                        </td>
                        <td className="border border-slate-300 px-4 py-3 text-center font-bold text-lg">15%</td>
                        <td className="border border-slate-300 px-4 py-3 text-right font-bold text-lg">9,000件</td>
                      </tr>
                      <tr className="bg-green-50">
                        <td className="border border-slate-300 px-4 py-3">
                          <div className="font-semibold text-slate-800">reCAPTCHA無し</div>
                          <div className="text-xs text-slate-600">(自動対応可能)</div>
                        </td>
                        <td className="border border-slate-300 px-4 py-3 text-center font-bold text-lg">40%</td>
                        <td className="border border-slate-300 px-4 py-3 text-right font-bold text-lg">24,000件</td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <div>
                  <h3 className="text-xl font-bold text-slate-800 mb-4">自動化ポテンシャル</h3>
                  <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-xl p-8 border-2 border-green-300 h-[380px] flex flex-col justify-center">
                    <div className="text-center mb-6">
                      <div className="text-slate-600 font-semibold mb-2">自動化可能</div>
                      <div className="text-7xl font-black text-green-600 mb-2">55%</div>
                      <div className="text-3xl font-bold text-slate-800">33,000件/月</div>
                    </div>
                    <div className="border-t-2 border-green-200 pt-6 mt-6">
                      <div className="grid grid-cols-2 gap-4 text-center">
                        <div>
                          <div className="text-sm text-slate-600 mb-1">reCAPTCHA v3</div>
                          <div className="text-2xl font-bold text-green-600">9,000件</div>
                        </div>
                        <div>
                          <div className="text-sm text-slate-600 mb-1">reCAPTCHA無し</div>
                          <div className="text-2xl font-bold text-green-600">24,000件</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-6 bg-blue-100 border-2 border-blue-300 rounded-xl p-4">
                <div className="flex items-center gap-2 mb-2">
                  <CheckCircle2 className="w-5 h-5 text-blue-700" />
                  <span className="font-bold text-blue-900">結論</span>
                </div>
                <p className="text-slate-800 font-semibold">
                  過半数のタスク（55%）が自動化可能 → ハイブリッド戦略の実現可能性が高い
                </p>
              </div>
            </div>
          </Slide>
        )}

        {/* Slide 5: 提案する解決策 */}
        {currentSlide === 5 && (
          <Slide id={5} title="提案する解決策" subtitle="インテリジェント振り分けシステム" pageNumber={5} totalPageCount={TOTAL_SLIDES}>
            <div className="h-full">
              <h3 className="text-xl font-bold text-slate-800 mb-3 text-center">
                コンセプト：自動/手動のハイブリッド実行
              </h3>
              
              <div className="bg-slate-50 rounded-xl p-4 border-2 border-slate-200">
                <div className="grid grid-cols-3 gap-3">
                  {/* タスク生成 */}
                  <div className="col-span-3">
                    <div className="bg-white rounded-lg p-2 border-2 border-blue-300 text-center">
                      <div className="font-bold text-slate-800">タスク生成</div>
                      <div className="text-xs text-slate-600">管理コンソールから一括生成</div>
                    </div>
                    <div className="flex justify-center my-1">
                      <div className="text-lg text-slate-400">↓</div>
                    </div>
                  </div>

                  {/* フォーム分析 */}
                  <div className="col-span-3">
                    <div className="bg-indigo-50 rounded-lg p-2 border-2 border-indigo-300 text-center">
                      <div className="font-bold text-slate-800 flex items-center justify-center gap-2">
                        <Settings className="w-4 h-4" />
                        フォーム事前分析エンジン
                      </div>
                      <div className="text-xs text-slate-600">reCAPTCHA検出・バージョン判定</div>
                    </div>
                    <div className="flex justify-center my-1">
                      <div className="text-2xl text-slate-400">↓</div>
                    </div>
                  </div>

                  {/* 分岐 */}
                  <div className="col-span-3">
                    <div className="bg-amber-100 rounded-lg p-1 border-2 border-amber-400 text-center font-bold text-amber-900 text-sm">
                      reCAPTCHA判定
                    </div>
                  </div>

                  {/* 手動モード */}
                  <div className="bg-red-50 rounded-xl p-2 border-2 border-red-300">
                    <div className="text-center mb-1">
                      <div className="bg-red-200 rounded px-2 py-1 inline-block">
                        <div className="font-bold text-red-800 text-xs">手動モード</div>
                        <div className="text-[10px] text-red-700">reCAPTCHA v2</div>
                      </div>
                    </div>
                    <div className="space-y-1">
                      <div className="bg-white rounded p-1 text-center text-xs border border-red-200">
                        ワーカー割当
                      </div>
                      <div className="text-center text-slate-400 text-xs">↓</div>
                      <div className="bg-white rounded p-1 text-center text-xs border border-red-200">
                        半自動実行<br />
                        <span className="text-[10px] text-slate-600">人間がreCAPTCHA対応</span>
                      </div>
                      <div className="text-center text-slate-400 text-xs">↓</div>
                      <div className="bg-red-100 rounded p-1 text-center font-bold text-red-700 border-2 border-red-300 text-xs">
                        完了 (120秒)
                      </div>
                    </div>
                  </div>

                  {/* 中央の矢印 */}
                  <div className="flex items-center justify-center">
                    <div className="text-4xl text-slate-300">⟷</div>
                  </div>

                  {/* 自動モード */}
                  <div className="bg-green-50 rounded-xl p-2 border-2 border-green-300">
                    <div className="text-center mb-1">
                      <div className="bg-green-200 rounded px-2 py-1 inline-block">
                        <div className="font-bold text-green-800 text-xs">自動モード</div>
                        <div className="text-[10px] text-green-700">reCAPTCHA v3/無し</div>
                      </div>
                    </div>
                    <div className="space-y-1">
                      <div className="bg-white rounded p-1 text-center text-xs border border-green-200">
                        自動実行キュー
                      </div>
                      <div className="text-center text-slate-400 text-xs">↓</div>
                      <div className="bg-white rounded p-1 text-center text-xs border border-green-200">
                        完全自動実行<br />
                        <span className="text-[10px] text-slate-600">即座に送信</span>
                      </div>
                      <div className="text-center text-slate-400 text-xs">↓</div>
                      <div className="bg-green-100 rounded p-1 text-center font-bold text-green-700 border-2 border-green-300 text-xs">
                        完了 (15秒)
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-2 grid grid-cols-2 gap-3">
                <div className="bg-red-50 border border-red-200 rounded-lg p-2 text-center">
                  <div className="text-xs text-slate-600">手動対応</div>
                  <div className="text-xl font-bold text-red-600">27,000件/月</div>
                  <div className="text-[10px] text-slate-500">(45%)</div>
                </div>
                <div className="bg-green-50 border border-green-200 rounded-lg p-2 text-center">
                  <div className="text-xs text-slate-600">自動実行</div>
                  <div className="text-xl font-bold text-green-600">33,000件/月</div>
                  <div className="text-[10px] text-slate-500">(55%)</div>
                </div>
              </div>
            </div>
          </Slide>
        )}

        {/* Slide 6: フォーム事前分析エンジン */}
        {currentSlide === 6 && (
          <Slide id={6} title="主要機能" subtitle="1. フォーム事前分析エンジン" pageNumber={6} totalPageCount={TOTAL_SLIDES}>
            <div className="grid grid-cols-2 gap-6 h-full">
              <div>
                <h3 className="text-lg font-bold text-slate-800 mb-3">分析プロセス</h3>
                <div className="bg-slate-50 rounded-xl p-4 border border-slate-200">
                  <div className="font-mono text-sm bg-slate-800 text-green-400 p-4 rounded-lg mb-4">
                    <div className="mb-2"># フォーム事前スキャン</div>
                    <div className="text-slate-300">analysis = {'{'}</div>
                    <div className="ml-4 text-blue-300">'company': '株式会社Example',</div>
                    <div className="ml-4 text-blue-300">'form_url': 'https://...',</div>
                    <div className="ml-4 text-yellow-300">'has_recaptcha': True,</div>
                    <div className="ml-4 text-yellow-300">'recaptcha_type': 'v2',</div>
                    <div className="ml-4 text-pink-300">'automation_type': 'manual',</div>
                    <div className="ml-4 text-blue-300">'estimated_time': 120</div>
                    <div className="text-slate-300">{'}'}</div>
                  </div>
                </div>

                <h3 className="text-base font-bold text-slate-800 mt-4 mb-2">自動振り分けロジック</h3>
                <table className="w-full border-collapse text-xs">
                  <thead>
                    <tr className="bg-slate-100">
                      <th className="border border-slate-300 px-3 py-2 text-left font-semibold">条件</th>
                      <th className="border border-slate-300 px-3 py-2 text-left font-semibold">振り分け先</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="bg-red-50">
                      <td className="border border-slate-300 px-3 py-2">reCAPTCHA v2あり</td>
                      <td className="border border-slate-300 px-3 py-2 font-bold text-red-700">手動モード</td>
                    </tr>
                    <tr className="bg-green-50">
                      <td className="border border-slate-300 px-3 py-2">reCAPTCHA v3あり</td>
                      <td className="border border-slate-300 px-3 py-2 font-bold text-green-700">自動モード</td>
                    </tr>
                    <tr className="bg-green-50">
                      <td className="border border-slate-300 px-3 py-2">reCAPTCHA無し</td>
                      <td className="border border-slate-300 px-3 py-2 font-bold text-green-700">自動モード</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <div>
                <h3 className="text-lg font-bold text-slate-800 mb-3">分析項目</h3>
                <div className="space-y-3">
                  <div className="bg-blue-50 border-l-4 border-blue-500 p-3 rounded-lg">
                    <div className="font-bold text-slate-800 mb-2 flex items-center gap-2">
                      <CheckCircle2 className="w-5 h-5 text-blue-600" />
                      reCAPTCHA検出
                    </div>
                    <ul className="text-sm text-slate-700 space-y-1 ml-7">
                      <li>• 有無の判定</li>
                      <li>• バージョン判定（v2/v3）</li>
                      <li>• site keyの取得</li>
                    </ul>
                  </div>

                  <div className="bg-indigo-50 border-l-4 border-indigo-500 p-4 rounded-lg">
                    <div className="font-bold text-slate-800 mb-2 flex items-center gap-2">
                      <CheckCircle2 className="w-5 h-5 text-indigo-600" />
                      フォーム構造解析
                    </div>
                    <ul className="text-sm text-slate-700 space-y-1 ml-7">
                      <li>• 入力フィールドの特定</li>
                      <li>• 必須項目の判別</li>
                      <li>• フィールドマッピング</li>
                    </ul>
                  </div>

                  <div className="bg-purple-50 border-l-4 border-purple-500 p-4 rounded-lg">
                    <div className="font-bold text-slate-800 mb-2 flex items-center gap-2">
                      <CheckCircle2 className="w-5 h-5 text-purple-600" />
                      処理時間予測
                    </div>
                    <ul className="text-sm text-slate-700 space-y-1 ml-7">
                      <li>• 自動: 15秒想定</li>
                      <li>• 手動: 120秒想定</li>
                      <li>• 優先度の算出</li>
                    </ul>
                  </div>

                  <div className="bg-green-50 border-l-4 border-green-500 p-4 rounded-lg">
                    <div className="font-bold text-slate-800 mb-2 flex items-center gap-2">
                      <CheckCircle2 className="w-5 h-5 text-green-600" />
                      精度保証
                    </div>
                    <ul className="text-sm text-slate-700 space-y-1 ml-7">
                      <li>• 検出精度: 95%以上</li>
                      <li>• 誤判定時のフォールバック</li>
                      <li>• 学習機能で精度向上</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </Slide>
        )}

        {/* Slide 7: 完全自動実行サービス */}
        {currentSlide === 7 && (
          <Slide id={7} title="主要機能" subtitle="2. 完全自動実行サービス" pageNumber={7} totalPageCount={TOTAL_SLIDES}>
            <div className="grid grid-cols-2 gap-6 h-full">
              <div>
                <h3 className="text-lg font-bold text-slate-800 mb-3">AutoExecutor 実装</h3>
                <div className="bg-slate-50 rounded-xl p-4 border border-slate-200 mb-4">
                  <div className="font-mono text-sm bg-slate-800 text-green-400 p-4 rounded-lg">
                    <div className="text-blue-300">class <span className="text-yellow-300">AutoExecutor</span>:</div>
                    <div className="ml-4 text-slate-400"># reCAPTCHA無しフォーム専用</div>
                    <div className="ml-4 text-blue-300">def execute(task):</div>
                    <div className="ml-8 text-slate-300"># 1. フォームを開く</div>
                    <div className="ml-8 text-slate-300"># 2. データ自動入力</div>
                    <div className="ml-8 text-slate-300"># 3. 送信ボタンクリック</div>
                    <div className="ml-8 text-slate-300"># 4. 送信完了確認</div>
                    <div className="ml-8 text-slate-300"># 5. タスク完了記録</div>
                  </div>
                </div>

                <h3 className="text-base font-bold text-slate-800 mb-3">実行フロー</h3>
                <div className="bg-green-50 rounded-xl p-3 border-2 border-green-300 space-y-1">
                  <div className="bg-white rounded p-2 border border-green-200">
                    <div className="font-semibold text-slate-800 text-sm">1. タスク取得</div>
                    <div className="text-xs text-slate-600">自動実行キューから取得</div>
                  </div>
                  <div className="text-center text-green-400">↓</div>
                  <div className="bg-white rounded p-3 border border-green-200">
                    <div className="font-semibold text-slate-800">2. ブラウザ起動</div>
                    <div className="text-xs text-slate-600">Playwright でヘッドレス実行</div>
                  </div>
                  <div className="text-center text-green-400">↓</div>
                  <div className="bg-white rounded p-3 border border-green-200">
                    <div className="font-semibold text-slate-800">3. フォーム自動入力</div>
                    <div className="text-xs text-slate-600">事前分析結果を使用</div>
                  </div>
                  <div className="text-center text-green-400">↓</div>
                  <div className="bg-white rounded p-3 border border-green-200">
                    <div className="font-semibold text-slate-800">4. 送信実行</div>
                    <div className="text-xs text-slate-600">送信ボタン自動クリック</div>
                  </div>
                  <div className="text-center text-green-400">↓</div>
                  <div className="bg-green-100 rounded p-3 border-2 border-green-400">
                    <div className="font-bold text-green-700">5. 完了記録 (15秒)</div>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-lg font-bold text-slate-800 mb-3 flex items-center gap-2">
                  <Zap className="w-5 h-5 text-amber-600" />
                  特徴とメリット
                </h3>
                <div className="space-y-3">
                  <div className="bg-blue-50 rounded-xl p-3 border-2 border-blue-200">
                    <div className="flex items-start gap-3">
                      <CheckCircle2 className="w-6 h-6 text-blue-600 flex-shrink-0 mt-1" />
                      <div>
                        <div className="font-bold text-slate-800 text-base mb-1">人間の介入不要</div>
                        <div className="text-xs text-slate-700">
                          reCAPTCHA無し・v3のフォームは完全無人で実行。ワーカーの負担ゼロ。
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="bg-indigo-50 rounded-xl p-3 border-2 border-indigo-200">
                    <div className="flex items-start gap-3">
                      <CheckCircle2 className="w-6 h-6 text-indigo-600 flex-shrink-0 mt-1" />
                      <div>
                        <div className="font-bold text-slate-800 text-base mb-1">24時間稼働可能</div>
                        <div className="text-xs text-slate-700">
                          バックグラウンドで常時稼働。深夜・早朝でも自動処理を継続。
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="bg-purple-50 rounded-xl p-3 border-2 border-purple-200">
                    <div className="flex items-start gap-3">
                      <CheckCircle2 className="w-6 h-6 text-purple-600 flex-shrink-0 mt-1" />
                      <div>
                        <div className="font-bold text-slate-800 text-base mb-1">並列処理対応</div>
                        <div className="text-xs text-slate-700">
                          同時10件の並列実行で処理速度を最大化。スケーラブルな設計。
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="bg-green-50 rounded-xl p-3 border-2 border-green-200">
                    <div className="flex items-start gap-3">
                      <CheckCircle2 className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" />
                      <div>
                        <div className="font-bold text-slate-800 text-base mb-1">エラー自動リトライ</div>
                        <div className="text-xs text-slate-700">
                          失敗時は3回まで自動リトライ。3回失敗後は手動キューに移動。
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="mt-3 bg-amber-50 border-2 border-amber-300 rounded-xl p-3">
                  <div className="flex items-center gap-2 mb-1">
                    <TrendingUp className="w-5 h-5 text-amber-700" />
                    <span className="font-bold text-amber-900">処理速度</span>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-black text-amber-700">1タスク15秒</div>
                    <div className="text-xs text-slate-600 mt-1">手動対応（120秒）の8倍の速度</div>
                  </div>
                </div>
              </div>
            </div>
          </Slide>
        )}

        {/* Slide 8: ワーカーコンソール強化 */}
        {currentSlide === 8 && (
          <Slide id={8} title="主要機能" subtitle="3. ワーカーコンソール強化" pageNumber={8} totalPageCount={TOTAL_SLIDES}>
            <div className="h-full">
              <h3 className="text-2xl font-bold text-slate-800 mb-6 text-center">
                ワーカーの業務効率を最大化する UI 改善
              </h3>

              <div className="grid grid-cols-2 gap-6 mb-6">
                <div className="bg-blue-50 rounded-xl p-5 border-2 border-blue-200">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="bg-blue-600 text-white p-2 rounded-lg">
                      <Settings className="w-6 h-6" />
                    </div>
                    <div className="font-bold text-xl text-slate-800">フィルタリング機能</div>
                  </div>
                  <div className="text-slate-700 mb-3">
                    手動タスクのみを表示するフィルタ機能。自動実行タスクは非表示でワーカーの混乱を防止。
                  </div>
                  <div className="bg-white rounded-lg p-3 border border-blue-200 text-sm">
                    <div className="font-mono text-slate-600">
                      表示: <span className="font-bold text-red-600">手動タスク</span> のみ<br />
                      非表示: <span className="text-green-600">自動タスク</span>
                    </div>
                  </div>
                </div>

                <div className="bg-indigo-50 rounded-xl p-5 border-2 border-indigo-200">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="bg-indigo-600 text-white p-2 rounded-lg">
                      <BarChart3 className="w-6 h-6" />
                    </div>
                    <div className="font-bold text-xl text-slate-800">統計表示</div>
                  </div>
                  <div className="text-slate-700 mb-3">
                    自動/手動の内訳をリアルタイムで表示。進捗状況を一目で把握可能。
                  </div>
                  <div className="bg-white rounded-lg p-3 border border-indigo-200">
                    <div className="grid grid-cols-2 gap-2 text-center text-sm">
                      <div>
                        <div className="text-slate-600">自動</div>
                        <div className="text-2xl font-bold text-green-600">15,000</div>
                      </div>
                      <div>
                        <div className="text-slate-600">手動</div>
                        <div className="text-2xl font-bold text-red-600">12,000</div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-purple-50 rounded-xl p-5 border-2 border-purple-200">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="bg-purple-600 text-white p-2 rounded-lg">
                      <Calendar className="w-6 h-6" />
                    </div>
                    <div className="font-bold text-xl text-slate-800">予想時間表示</div>
                  </div>
                  <div className="text-slate-700 mb-3">
                    タスクごとの推定所要時間を表示。作業計画の立案をサポート。
                  </div>
                  <div className="bg-white rounded-lg p-3 border border-purple-200 text-sm">
                    <div className="space-y-1">
                      <div className="flex justify-between">
                        <span className="text-slate-600">株式会社Example</span>
                        <span className="font-bold text-purple-600">⏱️ 120秒</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-slate-600">○○株式会社</span>
                        <span className="font-bold text-purple-600">⏱️ 90秒</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-green-50 rounded-xl p-5 border-2 border-green-200">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="bg-green-600 text-white p-2 rounded-lg">
                      <Target className="w-6 h-6" />
                    </div>
                    <div className="font-bold text-xl text-slate-800">優先度表示</div>
                  </div>
                  <div className="text-slate-700 mb-3">
                    reCAPTCHA v2タスクを優先表示。付加価値の高い業務に集中。
                  </div>
                  <div className="bg-white rounded-lg p-3 border border-green-200 text-sm">
                    <div className="space-y-1">
                      <div className="flex items-center gap-2">
                        <span className="bg-red-500 text-white px-2 py-0.5 rounded text-xs font-bold">高</span>
                        <span className="text-slate-600">reCAPTCHA v2</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="bg-amber-500 text-white px-2 py-0.5 rounded text-xs font-bold">中</span>
                        <span className="text-slate-600">通常タスク</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-r from-blue-50 to-indigo-50 border-2 border-blue-300 rounded-xl p-5">
                <div className="flex items-center gap-3 mb-3">
                  <CheckCircle2 className="w-6 h-6 text-blue-600" />
                  <span className="font-bold text-xl text-slate-800">ワーカーのメリット</span>
                </div>
                <div className="grid grid-cols-3 gap-4 text-center">
                  <div>
                    <div className="text-3xl font-black text-blue-600 mb-1">55%</div>
                    <div className="text-sm text-slate-700">タスク削減</div>
                  </div>
                  <div>
                    <div className="text-3xl font-black text-indigo-600 mb-1">100%</div>
                    <div className="text-sm text-slate-700">付加価値業務</div>
                  </div>
                  <div>
                    <div className="text-3xl font-black text-purple-600 mb-1">↑</div>
                    <div className="text-sm text-slate-700">モチベーション向上</div>
                  </div>
                </div>
              </div>
            </div>
          </Slide>
        )}

        {/* Slide 9: コスト効果分析 - 前提条件 */}
        {currentSlide === 9 && (
          <Slide id={9} title="コスト効果分析" subtitle="前提条件と試算基礎" pageNumber={9} totalPageCount={TOTAL_SLIDES}>
            <div className="h-full">
              <div className="bg-blue-50 rounded-xl p-6 mb-6 border-2 border-blue-200">
                <h3 className="text-xl font-bold text-slate-800 mb-4">試算の前提条件</h3>
                <div className="grid grid-cols-2 gap-6">
                  <div className="space-y-3">
                    <div className="flex justify-between items-center bg-white rounded-lg p-3 border border-blue-200">
                      <span className="font-semibold text-slate-700">月間タスク数</span>
                      <span className="text-2xl font-bold text-blue-600">60,000件</span>
                    </div>
                    <div className="flex justify-between items-center bg-white rounded-lg p-3 border border-blue-200">
                      <span className="font-semibold text-slate-700">ワーカー報酬（手動）</span>
                      <span className="text-xl font-bold text-slate-800">2円/件</span>
                    </div>
                  </div>
                  <div className="space-y-3">
                    <div className="flex justify-between items-center bg-white rounded-lg p-3 border border-blue-200">
                      <span className="font-semibold text-slate-700">VPS（8GB）</span>
                      <span className="text-xl font-bold text-slate-800">6,857円</span>
                    </div>
                    <div className="flex justify-between items-center bg-white rounded-lg p-3 border border-blue-200">
                      <span className="font-semibold text-slate-700">AI API（Gemini）</span>
                      <span className="text-xl font-bold text-slate-800">1,179円</span>
                    </div>
                  </div>
                </div>
              </div>

              <h3 className="text-xl font-bold text-slate-800 mb-4">タスク分類と処理方法</h3>
              <table className="w-full border-collapse mb-6">
                <thead>
                  <tr className="bg-slate-100">
                    <th className="border border-slate-300 px-4 py-3 text-left font-semibold text-slate-700">reCAPTCHA状況</th>
                    <th className="border border-slate-300 px-4 py-3 text-center font-semibold text-slate-700">割合</th>
                    <th className="border border-slate-300 px-4 py-3 text-right font-semibold text-slate-700">件数</th>
                    <th className="border border-slate-300 px-4 py-3 text-center font-semibold text-slate-700">処理方法</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="bg-red-50">
                    <td className="border border-slate-300 px-4 py-3 font-semibold text-slate-800">reCAPTCHA v2</td>
                    <td className="border border-slate-300 px-4 py-3 text-center font-bold text-lg">45%</td>
                    <td className="border border-slate-300 px-4 py-3 text-right font-bold text-lg">27,000件</td>
                    <td className="border border-slate-300 px-4 py-3 text-center">
                      <span className="bg-red-200 text-red-800 px-3 py-1 rounded-full font-bold text-sm">手動対応</span>
                    </td>
                  </tr>
                  <tr className="bg-green-50">
                    <td className="border border-slate-300 px-4 py-3 font-semibold text-slate-800">reCAPTCHA v3</td>
                    <td className="border border-slate-300 px-4 py-3 text-center font-bold text-lg">15%</td>
                    <td className="border border-slate-300 px-4 py-3 text-right font-bold text-lg">9,000件</td>
                    <td className="border border-slate-300 px-4 py-3 text-center">
                      <span className="bg-green-200 text-green-800 px-3 py-1 rounded-full font-bold text-sm">自動実行</span>
                    </td>
                  </tr>
                  <tr className="bg-green-50">
                    <td className="border border-slate-300 px-4 py-3 font-semibold text-slate-800">reCAPTCHA無し</td>
                    <td className="border border-slate-300 px-4 py-3 text-center font-bold text-lg">40%</td>
                    <td className="border border-slate-300 px-4 py-3 text-right font-bold text-lg">24,000件</td>
                    <td className="border border-slate-300 px-4 py-3 text-center">
                      <span className="bg-green-200 text-green-800 px-3 py-1 rounded-full font-bold text-sm">自動実行</span>
                    </td>
                  </tr>
                  <tr className="bg-slate-100 font-bold">
                    <td className="border border-slate-300 px-4 py-3 text-slate-900">合計</td>
                    <td className="border border-slate-300 px-4 py-3 text-center text-xl">100%</td>
                    <td className="border border-slate-300 px-4 py-3 text-right text-xl">60,000件</td>
                    <td className="border border-slate-300 px-4 py-3"></td>
                  </tr>
                </tbody>
              </table>

              <div className="bg-gradient-to-r from-green-50 to-emerald-50 border-2 border-green-300 rounded-xl p-5">
                <div className="flex items-center justify-between">
                  <div>
                    <div className="text-slate-600 font-semibold mb-1">自動化可能タスク</div>
                    <div className="text-4xl font-black text-green-600">33,000件/月</div>
                  </div>
                  <div className="text-right">
                    <div className="text-slate-600 font-semibold mb-1">自動化率</div>
                    <div className="text-5xl font-black text-green-600">55%</div>
                  </div>
                </div>
              </div>
            </div>
          </Slide>
        )}

        {/* Slide 10: コスト比較 */}
        {currentSlide === 10 && (
          <Slide id={10} title="コスト効果分析" subtitle="現状 vs 提案後の詳細比較" pageNumber={10} totalPageCount={TOTAL_SLIDES}>
            <div className="grid grid-cols-2 gap-6 h-full">
              <div>
                <h3 className="text-xl font-bold text-red-600 mb-3 text-center">現状（全手動対応）</h3>
                <div className="bg-red-50 rounded-xl p-4 border-2 border-red-300">
                  <table className="w-full border-collapse">
                    <thead>
                      <tr className="bg-red-100">
                        <th className="border border-red-300 px-3 py-2 text-left font-semibold text-slate-700 text-sm">項目</th>
                        <th className="border border-red-300 px-3 py-2 text-right font-semibold text-slate-700 text-sm">月額</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="border border-red-200 px-3 py-2">
                          <div className="font-semibold text-slate-800 text-sm">ワーカー報酬</div>
                          <div className="text-xs text-slate-600">60,000件 × 2円</div>
                        </td>
                        <td className="border border-red-200 px-3 py-2 text-right font-bold text-lg">120,000円</td>
                      </tr>
                      <tr>
                        <td className="border border-red-200 px-3 py-2 text-slate-700 text-sm">インフラ（VPS 8GB）</td>
                        <td className="border border-red-200 px-3 py-2 text-right font-bold">6,857円</td>
                      </tr>
                      <tr>
                        <td className="border border-red-200 px-3 py-2 text-slate-700 text-sm">AI API（Gemini）</td>
                        <td className="border border-red-200 px-3 py-2 text-right font-bold">1,179円</td>
                      </tr>
                      <tr className="bg-red-200">
                        <td className="border border-red-300 px-3 py-2 font-bold text-slate-900 text-sm">合計</td>
                        <td className="border border-red-300 px-3 py-2 text-right font-bold text-xl text-red-700">128,036円</td>
                      </tr>
                    </tbody>
                  </table>

                  <div className="mt-3 bg-white rounded-lg p-3 border border-red-200">
                    <div className="text-xs text-slate-600 mb-2">処理内訳</div>
                    <div className="space-y-1 text-sm">
                      <div className="flex justify-between">
                        <span className="text-slate-700">手動対応</span>
                        <span className="font-bold text-slate-800">60,000件（100%）</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-slate-700">自動実行</span>
                        <span className="font-bold text-slate-400">0件（0%）</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-bold text-green-600 mb-3 text-center">提案後（ハイブリッド）</h3>
                <div className="bg-green-50 rounded-xl p-4 border-2 border-green-300">
                  <table className="w-full border-collapse">
                    <thead>
                      <tr className="bg-green-100">
                        <th className="border border-green-300 px-3 py-2 text-left font-semibold text-slate-700 text-sm">項目</th>
                        <th className="border border-green-300 px-3 py-2 text-right font-semibold text-slate-700 text-sm">月額</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="border border-green-200 px-3 py-2">
                          <div className="font-semibold text-slate-800 text-sm">ワーカー報酬</div>
                          <div className="text-xs text-slate-600">27,000件 × 2円（v2のみ）</div>
                        </td>
                        <td className="border border-green-200 px-3 py-2 text-right font-bold text-lg">54,000円</td>
                      </tr>
                      <tr>
                        <td className="border border-green-200 px-3 py-2">
                          <div className="font-semibold text-slate-800 text-sm">自動実行コスト</div>
                          <div className="text-xs text-slate-600">33,000件 × 0円</div>
                        </td>
                        <td className="border border-green-200 px-3 py-2 text-right font-bold text-lg">0円</td>
                      </tr>
                      <tr>
                        <td className="border border-green-200 px-3 py-2 text-slate-700 text-sm">インフラ（VPS 8GB）</td>
                        <td className="border border-green-200 px-3 py-2 text-right font-bold">6,857円</td>
                      </tr>
                      <tr>
                        <td className="border border-green-200 px-3 py-2 text-slate-700 text-sm">AI API（Gemini）</td>
                        <td className="border border-green-200 px-3 py-2 text-right font-bold">1,179円</td>
                      </tr>
                      <tr className="bg-green-200">
                        <td className="border border-green-300 px-3 py-2 font-bold text-slate-900 text-sm">合計</td>
                        <td className="border border-green-300 px-3 py-2 text-right font-bold text-xl text-green-700">62,036円</td>
                      </tr>
                    </tbody>
                  </table>

                  <div className="mt-3 bg-white rounded-lg p-3 border border-green-200">
                    <div className="text-xs text-slate-600 mb-2">処理内訳</div>
                    <div className="space-y-1 text-sm">
                      <div className="flex justify-between">
                        <span className="text-slate-700">手動対応</span>
                        <span className="font-bold text-red-600">27,000件（45%）</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-slate-700">自動実行</span>
                        <span className="font-bold text-green-600">33,000件（55%）</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-4 bg-gradient-to-r from-blue-50 to-indigo-50 border-2 border-blue-300 rounded-xl p-4">
              <div className="grid grid-cols-4 gap-4 text-center">
                <div>
                  <div className="text-xs text-slate-600 mb-1">月額削減</div>
                  <div className="text-2xl font-black text-blue-600">66,000円</div>
                </div>
                <div>
                  <div className="text-xs text-slate-600 mb-1">削減率</div>
                  <div className="text-2xl font-black text-indigo-600">51.6%</div>
                </div>
                <div>
                  <div className="text-xs text-slate-600 mb-1">年間削減</div>
                  <div className="text-2xl font-black text-purple-600">792,000円</div>
                </div>
                <div>
                  <div className="text-xs text-slate-600 mb-1">投資回収</div>
                  <div className="text-2xl font-black text-green-600">5ヶ月</div>
                </div>
              </div>
            </div>
          </Slide>
        )}

        {/* Slide 11: スケーラビリティ分析 */}
        {currentSlide === 11 && (
          <Slide id={11} title="コスト効果分析" subtitle="スケーラビリティとROI" pageNumber={11} totalPageCount={TOTAL_SLIDES}>
            <div className="h-full">
              <h3 className="text-xl font-bold text-slate-800 mb-4">成長シナリオ：月10万件に拡大した場合</h3>
              
              <table className="w-full border-collapse mb-4">
                <thead>
                  <tr className="bg-slate-100">
                    <th className="border border-slate-300 px-3 py-2 text-left font-semibold text-slate-700 text-sm">モデル</th>
                    <th className="border border-slate-300 px-3 py-2 text-right font-semibold text-slate-700 text-sm">月額コスト</th>
                    <th className="border border-slate-300 px-3 py-2 text-left font-semibold text-slate-700 text-sm">スケール性</th>
                    <th className="border border-slate-300 px-3 py-2 text-right font-semibold text-slate-700 text-sm">削減額</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="bg-red-50">
                    <td className="border border-slate-300 px-3 py-2">
                      <div className="font-bold text-slate-800 text-sm">現状（全手動）</div>
                      <div className="text-xs text-slate-600">100,000件 × 2円</div>
                    </td>
                    <td className="border border-slate-300 px-3 py-2 text-right font-bold text-lg text-red-600">200,000円</td>
                    <td className="border border-slate-300 px-3 py-2 text-xs">
                      線形増加<br />
                      <span className="text-[10px] text-slate-600">ワーカー増員必要</span>
                    </td>
                    <td className="border border-slate-300 px-3 py-2 text-right">-</td>
                  </tr>
                  <tr className="bg-green-50">
                    <td className="border border-slate-300 px-3 py-2">
                      <div className="font-bold text-slate-800 text-sm">提案（ハイブリッド）</div>
                      <div className="text-xs text-slate-600">45,000件 × 2円（手動）</div>
                    </td>
                    <td className="border border-slate-300 px-3 py-2 text-right font-bold text-lg text-green-600">90,000円</td>
                    <td className="border border-slate-300 px-3 py-2 text-xs">
                      <span className="font-bold text-green-700">55%が自動化</span><br />
                      <span className="text-[10px] text-slate-600">ワーカー増員不要</span>
                    </td>
                    <td className="border border-slate-300 px-3 py-2 text-right font-bold text-lg text-green-600">110,000円/月</td>
                  </tr>
                </tbody>
              </table>

              <div className="grid grid-cols-2 gap-6">
                <div className="bg-blue-50 rounded-xl p-4 border-2 border-blue-200">
                  <h3 className="text-base font-bold text-slate-800 mb-3 flex items-center gap-2">
                    <DollarSign className="w-5 h-5 text-green-600" />
                    投資回収シミュレーション
                  </h3>
                  <table className="w-full text-xs">
                    <thead>
                      <tr className="bg-blue-100">
                        <th className="border border-blue-300 px-2 py-1 text-left font-semibold">期間</th>
                        <th className="border border-blue-300 px-2 py-1 text-right font-semibold">累積効果</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="border border-blue-200 px-2 py-1">初期投資</td>
                        <td className="border border-blue-200 px-2 py-1 text-right font-bold text-red-600">-300,000円</td>
                      </tr>
                      <tr>
                        <td className="border border-blue-200 px-2 py-1">3ヶ月後</td>
                        <td className="border border-blue-200 px-2 py-1 text-right font-bold text-red-600">-102,000円</td>
                      </tr>
                      <tr className="bg-green-100">
                        <td className="border border-green-300 px-2 py-1 font-bold">5ヶ月後</td>
                        <td className="border border-green-300 px-2 py-1 text-right font-bold text-green-700 text-base">+30,000円</td>
                      </tr>
                      <tr>
                        <td className="border border-blue-200 px-2 py-1">6ヶ月後</td>
                        <td className="border border-blue-200 px-2 py-1 text-right font-bold text-green-600">+96,000円</td>
                      </tr>
                      <tr>
                        <td className="border border-blue-200 px-2 py-1">1年後</td>
                        <td className="border border-blue-200 px-2 py-1 text-right font-bold text-green-600">+492,000円</td>
                      </tr>
                      <tr className="bg-blue-100">
                        <td className="border border-blue-300 px-2 py-1 font-bold">2年後</td>
                        <td className="border border-blue-300 px-2 py-1 text-right font-bold text-green-700 text-base">+1,284,000円</td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <div>
                  <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-xl p-4 border-2 border-green-300 mb-3">
                    <h3 className="text-base font-bold text-slate-800 mb-3 text-center">ROI サマリー</h3>
                    <div className="space-y-3">
                      <div className="text-center">
                        <div className="text-xs text-slate-600 mb-1">投資回収期間</div>
                        <div className="text-4xl font-black text-green-600">5ヶ月</div>
                      </div>
                      <div className="border-t-2 border-green-200 pt-3 grid grid-cols-2 gap-3">
                        <div className="text-center">
                          <div className="text-xs text-slate-600 mb-1">年間削減</div>
                          <div className="text-xl font-bold text-green-600">792,000円</div>
                        </div>
                        <div className="text-center">
                          <div className="text-xs text-slate-600 mb-1">2年間累積</div>
                          <div className="text-xl font-bold text-green-600">1,284,000円</div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="bg-blue-100 border-2 border-blue-300 rounded-xl p-3">
                    <div className="flex items-center gap-2 mb-2">
                      <CheckCircle2 className="w-4 h-4 text-blue-700" />
                      <span className="font-bold text-blue-900 text-sm">結論</span>
                    </div>
                    <p className="text-slate-800 text-xs leading-relaxed">
                      規模が大きくなるほど効果が顕著。<span className="font-bold text-blue-700">短期回収・高ROI・スケーラブル</span>な戦略的投資として推奨します。
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </Slide>
        )}

        {/* Slide 12: 技術アーキテクチャ */}
        {currentSlide === 12 && (
          <Slide id={12} title="技術アーキテクチャ" subtitle="システム構成と実装詳細" pageNumber={12} totalPageCount={TOTAL_SLIDES}>
            <div className="h-full">
              <div className="bg-slate-50 rounded-xl p-4 border border-slate-200">
                <div className="space-y-3 text-sm">
                  {/* 管理コンソール */}
                  <div className="bg-blue-50 rounded-lg p-3 border-2 border-blue-300">
                    <div className="font-bold text-slate-800 mb-2 text-center text-base">管理コンソール</div>
                    <div className="grid grid-cols-2 gap-2 text-xs">
                      <div className="bg-white rounded p-2 border border-blue-200">
                        <div className="font-semibold text-slate-700">タスク一括生成</div>
                        <div className="text-slate-600 text-[10px]">• 企業選択<br />• 案件選択<br />• 事前分析実行</div>
                      </div>
                      <div className="bg-white rounded p-2 border border-blue-200">
                        <div className="font-semibold text-slate-700">進捗ダッシュボード</div>
                        <div className="text-slate-600 text-[10px]">• 自動: 15,000件<br />• 手動: 12,000件<br />• 完了率: 85%</div>
                      </div>
                    </div>
                  </div>

                  <div className="text-center text-slate-400 text-base">↓</div>

                  {/* Flask API Server */}
                  <div className="bg-indigo-50 rounded-lg p-3 border-2 border-indigo-300">
                    <div className="font-bold text-slate-800 mb-2 text-center text-base">Flask API Server (Core)</div>
                    <div className="grid grid-cols-3 gap-2">
                      <div className="bg-white rounded p-2 border border-indigo-200 col-span-3">
                        <div className="font-semibold text-slate-700 mb-1 flex items-center gap-1 text-xs">
                          <Settings className="w-3 h-3" />
                          FormAnalyzer（フォーム事前分析）
                        </div>
                        <div className="text-slate-600 text-[10px]">
                          - reCAPTCHA検出 &nbsp;&nbsp; - v2/v3判定 &nbsp;&nbsp; - フォームフィールド解析
                        </div>
                      </div>
                      <div className="bg-white rounded p-2 border border-indigo-200">
                        <div className="font-semibold text-slate-700 text-xs">Task Router</div>
                        <div className="text-slate-600 text-xs">• 自動/手動振分<br />• キュー管理</div>
                      </div>
                      <div className="bg-white rounded p-2 border border-indigo-200">
                        <div className="font-semibold text-slate-700 text-xs">Task Scheduler</div>
                        <div className="text-slate-600 text-xs">• 優先度管理<br />• 負荷分散</div>
                      </div>
                      <div className="bg-white rounded p-2 border border-indigo-200">
                        <div className="font-semibold text-slate-700 text-xs">Error Handler</div>
                        <div className="text-slate-600 text-xs">• リトライ制御<br />• 通知管理</div>
                      </div>
                    </div>
                  </div>

                  <div className="text-center text-slate-400 text-xl">↓</div>

                  {/* 実行層 */}
                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-green-50 rounded-lg p-4 border-2 border-green-300">
                      <div className="font-bold text-green-700 mb-2 text-center">自動実行キュー</div>
                      <div className="bg-white rounded p-2 border border-green-200">
                        <div className="font-semibold text-slate-700 text-xs mb-1">AutoExecutor</div>
                        <div className="text-slate-600 text-xs">
                          • 並列処理（10件）<br />
                          • 24h稼働<br />
                          • 自動リトライ
                        </div>
                      </div>
                    </div>
                    <div className="bg-red-50 rounded-lg p-4 border-2 border-red-300">
                      <div className="font-bold text-red-700 mb-2 text-center">ワーカーコンソール</div>
                      <div className="bg-white rounded p-2 border border-red-200">
                        <div className="font-semibold text-slate-700 text-xs mb-1">VNC統合</div>
                        <div className="text-slate-600 text-xs">
                          • 手動対応<br />
                          • reCAPTCHA解決<br />
                          • 優先度表示
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="text-center text-slate-400 text-xl">↓</div>

                  {/* データベース */}
                  <div className="bg-purple-50 rounded-lg p-4 border-2 border-purple-300">
                    <div className="font-bold text-slate-800 mb-2 text-center text-lg flex items-center justify-center gap-2">
                      <Database className="w-5 h-5" />
                      PostgreSQL Database
                    </div>
                    <div className="bg-white rounded p-3 border border-purple-200">
                      <div className="font-semibold text-slate-700 mb-1 text-xs">simple_tasks（拡張）</div>
                      <div className="text-slate-600 text-xs font-mono">
                        + automation_type: auto/manual<br />
                        + recaptcha_type: v2/v3/null<br />
                        + estimated_time: integer<br />
                        + form_analysis: jsonb
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Slide>
        )}

        {/* Slide 13: 実装ロードマップ */}
        {currentSlide === 13 && (
          <Slide id={13} title="実装ロードマップ" subtitle="3週間の開発計画" pageNumber={13} totalPageCount={TOTAL_SLIDES}>
            <div className="h-full">
              <div className="space-y-3">
                {/* Phase 1 */}
                <div className="bg-blue-50 rounded-xl p-4 border-2 border-blue-300">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="bg-blue-600 text-white px-3 py-1 rounded-lg font-bold text-base">Week 1</div>
                    <div className="font-bold text-lg text-slate-800">フォーム分析基盤</div>
                  </div>
                  <div className="grid grid-cols-4 gap-2 text-sm">
                    <div className="bg-white rounded-lg p-2 border border-blue-200">
                      <div className="font-semibold text-slate-700 mb-1 text-xs">Day 1-2</div>
                      <div className="text-xs text-slate-600">FormAnalyzer実装</div>
                    </div>
                    <div className="bg-white rounded-lg p-2 border border-blue-200">
                      <div className="font-semibold text-slate-700 mb-1 text-xs">Day 3-4</div>
                      <div className="text-xs text-slate-600">reCAPTCHA検出ロジック</div>
                    </div>
                    <div className="bg-white rounded-lg p-2 border border-blue-200">
                      <div className="font-semibold text-slate-700 mb-1 text-xs">Day 5</div>
                      <div className="text-xs text-slate-600">フォームフィールド解析</div>
                    </div>
                    <div className="bg-white rounded-lg p-2 border border-blue-200">
                      <div className="font-semibold text-slate-700 mb-1 text-xs">Day 6-7</div>
                      <div className="text-xs text-slate-600">テスト・デバッグ</div>
                    </div>
                  </div>
                  <div className="mt-2 bg-blue-100 rounded p-2 text-[10px]">
                    <span className="font-semibold">成功基準:</span> reCAPTCHA検出精度95%以上、分析速度5秒以内/サイト
                  </div>
                </div>

                {/* Phase 2 */}
                <div className="bg-indigo-50 rounded-xl p-4 border-2 border-indigo-300">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="bg-indigo-600 text-white px-3 py-1 rounded-lg font-bold text-base">Week 2</div>
                    <div className="font-bold text-lg text-slate-800">自動振り分け機能</div>
                  </div>
                  <div className="grid grid-cols-4 gap-2 text-sm">
                    <div className="bg-white rounded-lg p-2 border border-indigo-200">
                      <div className="font-semibold text-slate-700 mb-1 text-xs">Day 8</div>
                      <div className="text-xs text-slate-600">DB スキーマ拡張</div>
                    </div>
                    <div className="bg-white rounded-lg p-2 border border-indigo-200">
                      <div className="font-semibold text-slate-700 mb-1 text-xs">Day 9-10</div>
                      <div className="text-xs text-slate-600">Task Router実装</div>
                    </div>
                    <div className="bg-white rounded-lg p-2 border border-indigo-200">
                      <div className="font-semibold text-slate-700 mb-1 text-xs">Day 11-12</div>
                      <div className="text-xs text-slate-600">AutoExecutor実装</div>
                    </div>
                    <div className="bg-white rounded-lg p-2 border border-indigo-200">
                      <div className="font-semibold text-slate-700 mb-1 text-xs">Day 13-14</div>
                      <div className="text-xs text-slate-600">統合テスト</div>
                    </div>
                  </div>
                  <div className="mt-2 bg-indigo-100 rounded p-2 text-[10px]">
                    <span className="font-semibold">成功基準:</span> 自動タスクが無人実行、並列処理10件、リトライ動作確認
                  </div>
                </div>

                {/* Phase 3 */}
                <div className="bg-green-50 rounded-xl p-4 border-2 border-green-300">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="bg-green-600 text-white px-3 py-1 rounded-lg font-bold text-base">Week 3</div>
                    <div className="font-bold text-lg text-slate-800">UI統合・運用化</div>
                  </div>
                  <div className="grid grid-cols-5 gap-2 text-sm">
                    <div className="bg-white rounded-lg p-3 border border-green-200">
                      <div className="font-semibold text-slate-700 mb-1">Day 15-16</div>
                      <div className="text-xs text-slate-600">管理コンソール更新</div>
                    </div>
                    <div className="bg-white rounded-lg p-3 border border-green-200">
                      <div className="font-semibold text-slate-700 mb-1">Day 17-18</div>
                      <div className="text-xs text-slate-600">ワーカーコンソール更新</div>
                    </div>
                    <div className="bg-white rounded-lg p-3 border border-green-200">
                      <div className="font-semibold text-slate-700 mb-1">Day 19</div>
                      <div className="text-xs text-slate-600">ダッシュボード実装</div>
                    </div>
                    <div className="bg-white rounded-lg p-3 border border-green-200">
                      <div className="font-semibold text-slate-700 mb-1">Day 20</div>
                      <div className="text-xs text-slate-600">ドキュメント作成</div>
                    </div>
                    <div className="bg-white rounded-lg p-3 border border-green-200">
                      <div className="font-semibold text-slate-700 mb-1">Day 21</div>
                      <div className="text-xs text-slate-600">本番デプロイ</div>
                    </div>
                  </div>
                  <div className="mt-3 bg-green-100 rounded p-2 text-xs">
                    <span className="font-semibold">成功基準:</span> ワーカーが手動タスクのみ確認可、エラーアラート機能動作
                  </div>
                </div>

                {/* Phase 4 */}
                <div className="bg-purple-50 rounded-xl p-5 border-2 border-purple-300">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="bg-purple-600 text-white px-4 py-2 rounded-lg font-bold text-lg">運用後</div>
                    <div className="font-bold text-xl text-slate-800">監視・最適化（継続）</div>
                  </div>
                  <div className="grid grid-cols-4 gap-3 text-sm">
                    <div className="bg-white rounded-lg p-3 border border-purple-200">
                      <div className="font-semibold text-purple-700 mb-1 text-xs">📊 パフォーマンス監視</div>
                      <div className="text-xs text-slate-600">成功率・処理時間追跡</div>
                    </div>
                    <div className="bg-white rounded-lg p-3 border border-purple-200">
                      <div className="font-semibold text-purple-700 mb-1 text-xs">🔍 誤判定の修正</div>
                      <div className="text-xs text-slate-600">検出精度の向上</div>
                    </div>
                    <div className="bg-white rounded-lg p-3 border border-purple-200">
                      <div className="font-semibold text-purple-700 mb-1 text-xs">⚡ 処理速度最適化</div>
                      <div className="text-xs text-slate-600">並列処理数の調整</div>
                    </div>
                    <div className="bg-white rounded-lg p-3 border border-purple-200">
                      <div className="font-semibold text-purple-700 mb-1 text-xs">📈 コスト分析</div>
                      <div className="text-xs text-slate-600">実際の削減効果測定</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Slide>
        )}

        {/* Slide 14: KPI・成功指標 */}
        {currentSlide === 14 && (
          <Slide id={14} title="KPI・成功指標" subtitle="効果測定の指標" pageNumber={14} totalPageCount={TOTAL_SLIDES}>
            <div className="h-full">
              <div className="grid grid-cols-2 gap-6 mb-6">
                <div>
                  <h3 className="text-xl font-bold text-slate-800 mb-4">定量指標</h3>
                  <table className="w-full border-collapse text-sm">
                    <thead>
                      <tr className="bg-slate-100">
                        <th className="border border-slate-300 px-3 py-2 text-left font-semibold text-slate-700">KPI</th>
                        <th className="border border-slate-300 px-3 py-2 text-center font-semibold text-slate-700">現状</th>
                        <th className="border border-slate-300 px-3 py-2 text-center font-semibold text-slate-700">目標</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="bg-green-50">
                        <td className="border border-slate-300 px-3 py-2 font-semibold">月額コスト</td>
                        <td className="border border-slate-300 px-3 py-2 text-center">128,036円</td>
                        <td className="border border-slate-300 px-3 py-2 text-center font-bold text-green-600">62,036円<br /><span className="text-xs">(51%削減)</span></td>
                      </tr>
                      <tr>
                        <td className="border border-slate-300 px-3 py-2 font-semibold">自動化率</td>
                        <td className="border border-slate-300 px-3 py-2 text-center">0%</td>
                        <td className="border border-slate-300 px-3 py-2 text-center font-bold text-blue-600">55%</td>
                      </tr>
                      <tr className="bg-blue-50">
                        <td className="border border-slate-300 px-3 py-2 font-semibold">処理時間（自動）</td>
                        <td className="border border-slate-300 px-3 py-2 text-center">-</td>
                        <td className="border border-slate-300 px-3 py-2 text-center font-bold text-blue-600">15秒以内</td>
                      </tr>
                      <tr>
                        <td className="border border-slate-300 px-3 py-2 font-semibold">処理時間（手動）</td>
                        <td className="border border-slate-300 px-3 py-2 text-center">120秒</td>
                        <td className="border border-slate-300 px-3 py-2 text-center font-bold text-indigo-600">90秒以内</td>
                      </tr>
                      <tr className="bg-amber-50">
                        <td className="border border-slate-300 px-3 py-2 font-semibold">エラー率（自動）</td>
                        <td className="border border-slate-300 px-3 py-2 text-center">-</td>
                        <td className="border border-slate-300 px-3 py-2 text-center font-bold text-amber-600">5%以内</td>
                      </tr>
                      <tr>
                        <td className="border border-slate-300 px-3 py-2 font-semibold">reCAPTCHA検出精度</td>
                        <td className="border border-slate-300 px-3 py-2 text-center">-</td>
                        <td className="border border-slate-300 px-3 py-2 text-center font-bold text-purple-600">95%以上</td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <div>
                  <h3 className="text-xl font-bold text-slate-800 mb-4">定性指標</h3>
                  <table className="w-full border-collapse text-sm mb-6">
                    <thead>
                      <tr className="bg-slate-100">
                        <th className="border border-slate-300 px-3 py-2 text-left font-semibold text-slate-700">指標</th>
                        <th className="border border-slate-300 px-3 py-2 text-center font-semibold text-slate-700">測定方法</th>
                        <th className="border border-slate-300 px-3 py-2 text-center font-semibold text-slate-700">目標</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="bg-blue-50">
                        <td className="border border-slate-300 px-3 py-2 font-semibold">ワーカー満足度</td>
                        <td className="border border-slate-300 px-3 py-2 text-center">アンケート<br /><span className="text-xs">(月次)</span></td>
                        <td className="border border-slate-300 px-3 py-2 text-center font-bold text-blue-600">4.0/5.0以上</td>
                      </tr>
                      <tr>
                        <td className="border border-slate-300 px-3 py-2 font-semibold">システム安定性</td>
                        <td className="border border-slate-300 px-3 py-2 text-center">稼働率</td>
                        <td className="border border-slate-300 px-3 py-2 text-center font-bold text-green-600">99.5%以上</td>
                      </tr>
                      <tr className="bg-green-50">
                        <td className="border border-slate-300 px-3 py-2 font-semibold">顧客満足度</td>
                        <td className="border border-slate-300 px-3 py-2 text-center">NPS</td>
                        <td className="border border-slate-300 px-3 py-2 text-center font-bold text-green-600">+10pt向上</td>
                      </tr>
                    </tbody>
                  </table>

                  <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl p-5 border-2 border-blue-300">
                    <h3 className="text-lg font-bold text-slate-800 mb-3 text-center">測定サイクル</h3>
                    <div className="space-y-2 text-sm">
                      <div className="bg-white rounded p-3 border border-blue-200">
                        <div className="font-semibold text-blue-700 mb-1">📊 日次</div>
                        <div className="text-xs text-slate-600">処理速度、エラー率、自動化率</div>
                      </div>
                      <div className="bg-white rounded p-3 border border-blue-200">
                        <div className="font-semibold text-indigo-700 mb-1">📅 週次</div>
                        <div className="text-xs text-slate-600">システム稼働率、検出精度</div>
                      </div>
                      <div className="bg-white rounded p-3 border border-blue-200">
                        <div className="font-semibold text-purple-700 mb-1">📈 月次</div>
                        <div className="text-xs text-slate-600">コスト削減額、ワーカー満足度、NPS</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-amber-50 border-2 border-amber-300 rounded-xl p-4">
                <div className="flex items-center gap-2 mb-2">
                  <Target className="w-5 h-5 text-amber-700" />
                  <span className="font-bold text-amber-900">モニタリング体制</span>
                </div>
                <div className="text-sm text-slate-700">
                  リアルタイムダッシュボードで全KPIを可視化。週次レビューで課題を早期発見し、月次レポートで経営層に報告します。
                </div>
              </div>
            </div>
          </Slide>
        )}

        {/* Slide 15: リスク分析 */}
        {currentSlide === 15 && (
          <Slide id={15} title="リスク分析と対策" subtitle="想定リスクと軽減策" pageNumber={15} totalPageCount={TOTAL_SLIDES}>
            <div className="h-full">
              <div className="space-y-3">
                {/* リスク1 */}
                <div className="bg-amber-50 rounded-xl p-3 border-2 border-amber-300">
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center gap-2">
                      <AlertCircle className="w-4 h-4 text-amber-600" />
                      <div className="font-bold text-base text-slate-800">リスク1: reCAPTCHA誤判定</div>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="bg-amber-200 text-amber-800 px-2 py-1 rounded-full font-bold text-xs">🟡 中</span>
                      <span className="text-slate-400 text-xs">→</span>
                      <span className="bg-green-200 text-green-800 px-2 py-1 rounded-full font-bold text-xs">🟢 低</span>
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-2 text-sm">
                    <div className="bg-white rounded p-2 border border-amber-200">
                      <div className="font-semibold text-red-700 mb-1 text-xs">リスク内容</div>
                      <div className="text-slate-700 text-xs">reCAPTCHA v2を「無し」と誤判定 → 自動送信失敗</div>
                    </div>
                    <div className="bg-white rounded p-2 border border-amber-200">
                      <div className="font-semibold text-green-700 mb-1 text-xs">対策</div>
                      <div className="text-slate-700 text-[10px]">
                        1. 保守的な判定<br />
                        2. フォールバック機能<br />
                        3. 学習機能で精度向上<br />
                        4. 手動オーバーライド
                      </div>
                    </div>
                  </div>
                </div>

                {/* リスク2 */}
                <div className="bg-orange-50 rounded-xl p-3 border-2 border-orange-300">
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center gap-2">
                      <AlertCircle className="w-4 h-4 text-orange-600" />
                      <div className="font-bold text-base text-slate-800">リスク2: 自動実行の不安定性</div>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="bg-amber-200 text-amber-800 px-2 py-1 rounded-full font-bold text-xs">🟡 中</span>
                      <span className="text-slate-400 text-xs">→</span>
                      <span className="bg-green-200 text-green-800 px-2 py-1 rounded-full font-bold text-xs">🟢 低</span>
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-2 text-sm">
                    <div className="bg-white rounded p-2 border border-orange-200">
                      <div className="font-semibold text-red-700 mb-1 text-xs">リスク内容</div>
                      <div className="text-slate-700 text-xs">フォーム構造の変更、サイトのレスポンス遅延でタイムアウト</div>
                    </div>
                    <div className="bg-white rounded p-2 border border-orange-200">
                      <div className="font-semibold text-green-700 mb-1 text-xs">対策</div>
                      <div className="text-slate-700 text-[10px]">
                        1. リトライ機能（3回）<br />
                        2. Slack/メール通知<br />
                        3. 手動フォールバック<br />
                        4. 週1回再分析
                      </div>
                    </div>
                  </div>
                </div>

                {/* リスク3 */}
                <div className="bg-blue-50 rounded-xl p-3 border-2 border-blue-300">
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center gap-2">
                      <AlertCircle className="w-4 h-4 text-blue-600" />
                      <div className="font-bold text-base text-slate-800">リスク3: 開発スケジュール遅延</div>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="bg-amber-200 text-amber-800 px-2 py-1 rounded-full font-bold text-xs">🟡 中</span>
                      <span className="text-slate-400 text-xs">→</span>
                      <span className="bg-green-200 text-green-800 px-2 py-1 rounded-full font-bold text-xs">🟢 低</span>
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-2 text-sm">
                    <div className="bg-white rounded p-2 border border-blue-200">
                      <div className="font-semibold text-red-700 mb-1 text-xs">リスク内容</div>
                      <div className="text-slate-700 text-xs">技術的課題で実装が遅れる、3週間で完成しない</div>
                    </div>
                    <div className="bg-white rounded p-2 border border-blue-200">
                      <div className="font-semibold text-green-700 mb-1 text-xs">対策</div>
                      <div className="text-slate-700 text-[10px]">
                        1. 段階的リリース<br />
                        2. MVPアプローチ<br />
                        3. 外部リソース活用<br />
                        4. 週次レビュー
                      </div>
                    </div>
                  </div>
                </div>

                {/* リスク4 */}
                <div className="bg-green-50 rounded-xl p-4 border-2 border-green-300">
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center gap-2">
                      <AlertCircle className="w-5 h-5 text-green-600" />
                      <div className="font-bold text-lg text-slate-800">リスク4: ワーカーの反発</div>
                    </div>
                    <div>
                      <span className="bg-green-200 text-green-800 px-3 py-1 rounded-full font-bold text-sm">🟢 低</span>
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-3 text-sm">
                    <div className="bg-white rounded p-3 border border-green-200">
                      <div className="font-semibold text-red-700 mb-1">リスク内容</div>
                      <div className="text-slate-700 text-xs">仕事が減ることへの不安、システム変更への抵抗</div>
                    </div>
                    <div className="bg-white rounded p-3 border border-green-200">
                      <div className="font-semibold text-green-700 mb-1">対策</div>
                      <div className="text-slate-700 text-xs">
                        1. 事前説明会<br />
                        2. 段階的導入<br />
                        3. フィードバック収集<br />
                        4. インセンティブ設計
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-4 bg-blue-100 border-2 border-blue-300 rounded-xl p-4">
                <div className="flex items-center gap-2 mb-2">
                  <CheckCircle2 className="w-5 h-5 text-blue-700" />
                  <span className="font-bold text-blue-900">総合評価</span>
                </div>
                <p className="text-slate-800 text-sm">
                  すべてのリスクに対して具体的な軽減策を準備。<span className="font-bold text-blue-700">リスクは管理可能</span>で、プロジェクト実行の障害とはなりません。
                </p>
              </div>
            </div>
          </Slide>
        )}

        {/* Slide 16: 長期ビジョン */}
        {currentSlide === 16 && (
          <Slide id={16} title="長期ビジョン" subtitle="Phase 5以降の展開（6ヶ月〜）" pageNumber={16} totalPageCount={TOTAL_SLIDES}>
            <div className="h-full">
              <h3 className="text-2xl font-bold text-slate-800 mb-6 text-center">機能拡張ロードマップ</h3>
              
              <div className="space-y-4 mb-6">
                <div className="bg-blue-50 rounded-xl p-5 border-2 border-blue-300">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="bg-blue-600 text-white px-4 py-2 rounded-lg font-bold">6ヶ月後</div>
                    <div className="font-bold text-xl text-slate-800">AI精度向上</div>
                  </div>
                  <div className="grid grid-cols-3 gap-3 text-sm">
                    <div className="bg-white rounded p-3 border border-blue-200">
                      <div className="font-semibold text-blue-700 mb-1">機械学習導入</div>
                      <div className="text-xs text-slate-600">reCAPTCHA予測精度向上</div>
                    </div>
                    <div className="bg-white rounded p-3 border border-blue-200">
                      <div className="font-semibold text-blue-700 mb-1">自動学習</div>
                      <div className="text-xs text-slate-600">フォーム構造の自動適応</div>
                    </div>
                    <div className="bg-white rounded p-3 border border-blue-200">
                      <div className="font-semibold text-blue-700 mb-1">目標達成</div>
                      <div className="text-xs text-slate-600">送信成功率99%</div>
                    </div>
                  </div>
                </div>

                <div className="bg-indigo-50 rounded-xl p-5 border-2 border-indigo-300">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="bg-indigo-600 text-white px-4 py-2 rounded-lg font-bold">1年後</div>
                    <div className="font-bold text-xl text-slate-800">多言語対応</div>
                  </div>
                  <div className="grid grid-cols-3 gap-3 text-sm">
                    <div className="bg-white rounded p-3 border border-indigo-200">
                      <div className="font-semibold text-indigo-700 mb-1">海外展開</div>
                      <div className="text-xs text-slate-600">欧米・アジア市場進出</div>
                    </div>
                    <div className="bg-white rounded p-3 border border-indigo-200">
                      <div className="font-semibold text-indigo-700 mb-1">多言語判定</div>
                      <div className="text-xs text-slate-600">10言語のフォーム対応</div>
                    </div>
                    <div className="bg-white rounded p-3 border border-indigo-200">
                      <div className="font-semibold text-indigo-700 mb-1">グローバル</div>
                      <div className="text-xs text-slate-600">国際市場でのシェア拡大</div>
                    </div>
                  </div>
                </div>

                <div className="bg-purple-50 rounded-xl p-5 border-2 border-purple-300">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="bg-purple-600 text-white px-4 py-2 rounded-lg font-bold">2年後</div>
                    <div className="font-bold text-xl text-slate-800">フルAI化</div>
                  </div>
                  <div className="grid grid-cols-3 gap-3 text-sm">
                    <div className="bg-white rounded p-3 border border-purple-200">
                      <div className="font-semibold text-purple-700 mb-1">reCAPTCHA v2対応</div>
                      <div className="text-xs text-slate-600">2Captcha統合で自動解決</div>
                    </div>
                    <div className="bg-white rounded p-3 border border-purple-200">
                      <div className="font-semibold text-purple-700 mb-1">完全無人化</div>
                      <div className="text-xs text-slate-600">100%自動化オプション</div>
                    </div>
                    <div className="bg-white rounded p-3 border border-purple-200">
                      <div className="font-semibold text-purple-700 mb-1">エンタープライズ</div>
                      <div className="text-xs text-slate-600">大規模展開プラン</div>
                    </div>
                  </div>
                </div>
              </div>

              <h3 className="text-xl font-bold text-slate-800 mb-4">市場展開戦略</h3>
              <div className="grid grid-cols-2 gap-6">
                <div className="bg-green-50 rounded-xl p-5 border-2 border-green-300">
                  <h4 className="font-bold text-lg text-slate-800 mb-3">価格戦略</h4>
                  <table className="w-full text-sm border-collapse">
                    <tbody>
                      <tr className="border-b border-green-200">
                        <td className="py-2 font-semibold text-slate-700">スタンダード</td>
                        <td className="py-2 text-right font-bold text-green-600">1.5円/件</td>
                      </tr>
                      <tr className="border-b border-green-200">
                        <td className="py-2 font-semibold text-slate-700">プロフェッショナル</td>
                        <td className="py-2 text-right font-bold text-blue-600">2.0円/件</td>
                      </tr>
                      <tr>
                        <td className="py-2 font-semibold text-slate-700">エンタープライズ</td>
                        <td className="py-2 text-right font-bold text-purple-600">カスタム</td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl p-5 border-2 border-blue-300">
                  <h4 className="font-bold text-lg text-slate-800 mb-3">市場規模試算</h4>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span className="text-slate-700">想定顧客数（1年後）</span>
                      <span className="font-bold text-slate-800">50社</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-slate-700">平均月間利用</span>
                      <span className="font-bold text-slate-800">10万件/社</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-slate-700">月間総利用</span>
                      <span className="font-bold text-blue-600">500万件</span>
                    </div>
                    <div className="border-t-2 border-blue-300 pt-2 mt-2">
                      <div className="flex justify-between items-center">
                        <span className="font-bold text-slate-800">年間売上</span>
                        <span className="text-3xl font-black text-blue-600">9,000万円</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Slide>
        )}

        {/* Slide 17: 競合分析 */}
        {currentSlide === 17 && (
          <Slide id={17} title="市場分析" subtitle="競合比較とビジネスモデル" pageNumber={17} totalPageCount={TOTAL_SLIDES}>
            <div className="h-full">
              <h3 className="text-xl font-bold text-slate-800 mb-4">競合分析</h3>
              
              <table className="w-full border-collapse mb-4">
                <thead>
                  <tr className="bg-slate-100">
                    <th className="border border-slate-300 px-3 py-2 text-left font-semibold text-slate-700 text-sm">サービス</th>
                    <th className="border border-slate-300 px-3 py-2 text-center font-semibold text-slate-700 text-sm">自動化度</th>
                    <th className="border border-slate-300 px-3 py-2 text-center font-semibold text-slate-700 text-sm">reCAPTCHA対応</th>
                    <th className="border border-slate-300 px-3 py-2 text-right font-semibold text-slate-700 text-sm">単価</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="bg-red-50">
                    <td className="border border-slate-300 px-3 py-2 font-semibold text-slate-800 text-sm">A社</td>
                    <td className="border border-slate-300 px-3 py-2 text-center text-xs">完全手動</td>
                    <td className="border border-slate-300 px-3 py-2 text-center text-xs">ワーカー対応</td>
                    <td className="border border-slate-300 px-3 py-2 text-right font-bold text-base">3円/件</td>
                  </tr>
                  <tr className="bg-orange-50">
                    <td className="border border-slate-300 px-3 py-2 font-semibold text-slate-800 text-sm">B社</td>
                    <td className="border border-slate-300 px-3 py-2 text-center text-xs">半自動</td>
                    <td className="border border-slate-300 px-3 py-2 text-center text-xs">ワーカー対応</td>
                    <td className="border border-slate-300 px-3 py-2 text-right font-bold text-base">2.5円/件</td>
                  </tr>
                  <tr className="bg-green-100">
                    <td className="border border-slate-300 px-3 py-2 font-bold text-green-800 text-sm">提案システム</td>
                    <td className="border border-slate-300 px-3 py-2 text-center font-bold text-green-700 text-xs">ハイブリッド</td>
                    <td className="border border-slate-300 px-3 py-2 text-center font-bold text-green-700 text-xs">自動振り分け</td>
                    <td className="border border-slate-300 px-3 py-2 text-right font-bold text-green-700 text-xl">1.03円/件</td>
                  </tr>
                </tbody>
              </table>

              <div className="bg-blue-100 border-2 border-blue-300 rounded-xl p-4 mb-4">
                <div className="flex items-center gap-2 mb-1">
                  <TrendingUp className="w-5 h-5 text-blue-700" />
                  <span className="font-bold text-lg text-blue-900">競争優位性</span>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-black text-blue-600 mb-1">実質単価60%削減</div>
                  <div className="text-slate-700 text-sm">業界最安値水準で圧倒的なコスト競争力を実現</div>
                </div>
              </div>

              <h3 className="text-base font-bold text-slate-800 mb-3">価格戦略の選択肢</h3>
              <div className="grid grid-cols-3 gap-3">
                <div className="bg-amber-50 rounded-xl p-3 border-2 border-amber-300">
                  <div className="font-bold text-base text-amber-800 mb-2 text-center">オプション1</div>
                  <div className="text-center mb-2">
                    <div className="text-xs text-slate-600">価格据え置き</div>
                    <div className="text-2xl font-black text-amber-600">2円/件</div>
                  </div>
                  <div className="bg-white rounded p-2 border border-amber-200 text-xs space-y-1">
                    <div className="flex justify-between">
                      <span className="text-slate-600">実質コスト</span>
                      <span className="font-bold">1.03円</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-slate-600">粗利率</span>
                      <span className="font-bold text-green-600">51.5%</span>
                    </div>
                    <div className="border-t border-amber-200 pt-1 mt-1">
                      <div className="font-semibold text-amber-700 text-[10px]">利益率向上</div>
                    </div>
                  </div>
                </div>

                <div className="bg-blue-50 rounded-xl p-3 border-2 border-blue-300">
                  <div className="font-bold text-base text-blue-800 mb-2 text-center">オプション2</div>
                  <div className="text-center mb-2">
                    <div className="text-xs text-slate-600">値下げ攻勢</div>
                    <div className="text-2xl font-black text-blue-600">1.5円/件</div>
                  </div>
                  <div className="bg-white rounded p-2 border border-blue-200 text-xs space-y-1">
                    <div className="flex justify-between">
                      <span className="text-slate-600">実質コスト</span>
                      <span className="font-bold">1.03円</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-slate-600">粗利率</span>
                      <span className="font-bold text-blue-600">31%</span>
                    </div>
                    <div className="border-t border-blue-200 pt-1 mt-1">
                      <div className="font-semibold text-blue-700">シェア拡大</div>
                    </div>
                  </div>
                </div>

                <div className="bg-purple-50 rounded-xl p-4 border-2 border-purple-300">
                  <div className="font-bold text-lg text-purple-800 mb-3 text-center">オプション3</div>
                  <div className="text-center mb-3">
                    <div className="text-sm text-slate-600">ハイブリッド戦略</div>
                    <div className="text-2xl font-black text-purple-600">変動価格</div>
                  </div>
                  <div className="bg-white rounded p-3 border border-purple-200 text-sm space-y-1">
                    <div className="flex justify-between">
                      <span className="text-slate-600">reCAPTCHA v2</span>
                      <span className="font-bold">2円/件</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-slate-600">自動実行</span>
                      <span className="font-bold text-green-600">1円/件</span>
                    </div>
                    <div className="border-t border-purple-200 pt-1 mt-1">
                      <div className="font-semibold text-purple-700">顧客選択</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Slide>
        )}

        {/* Slide 18: 投資計画 */}
        {currentSlide === 18 && (
          <Slide id={18} title="投資計画" subtitle="初期投資と運用コスト" pageNumber={18} totalPageCount={TOTAL_SLIDES}>
            <div className="h-full">
              <div className="grid grid-cols-2 gap-6 mb-4">
                <div>
                  <h3 className="text-base font-bold text-slate-800 mb-3">初期投資</h3>
                  <div className="bg-blue-50 rounded-xl p-4 border-2 border-blue-300">
                    <table className="w-full border-collapse">
                      <thead>
                        <tr className="bg-blue-100">
                          <th className="border border-blue-300 px-3 py-2 text-left font-semibold text-slate-700 text-sm">項目</th>
                          <th className="border border-blue-300 px-3 py-2 text-right font-semibold text-slate-700 text-sm">金額</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td className="border border-blue-200 px-3 py-2">
                            <div className="font-semibold text-slate-800 text-sm">開発費</div>
                            <div className="text-xs text-slate-600">エンジニア3週間</div>
                          </td>
                          <td className="border border-blue-200 px-3 py-2 text-right font-bold text-lg">300,000円</td>
                        </tr>
                        <tr>
                          <td className="border border-blue-200 px-3 py-2 text-slate-700 text-xs">サーバー増強</td>
                          <td className="border border-blue-200 px-3 py-2 text-right font-bold text-base">0円</td>
                        </tr>
                        <tr>
                          <td className="border border-blue-200 px-3 py-2 text-slate-700 text-xs">テスト環境</td>
                          <td className="border border-blue-200 px-3 py-2 text-right font-bold text-base">0円</td>
                        </tr>
                        <tr className="bg-blue-200">
                          <td className="border border-blue-300 px-3 py-2 font-bold text-slate-900 text-sm">合計</td>
                          <td className="border border-blue-300 px-3 py-2 text-right font-bold text-xl text-blue-700">300,000円</td>
                        </tr>
                      </tbody>
                    </table>
                    <div className="mt-2 text-[10px] text-slate-600 bg-white rounded p-2 border border-blue-200">
                      ※ 既存VPS流用、Codespacesでテスト対応のため追加インフラ費用なし
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="text-base font-bold text-slate-800 mb-3">運用コスト（月額）</h3>
                  <div className="bg-green-50 rounded-xl p-4 border-2 border-green-300">
                    <table className="w-full border-collapse">
                      <thead>
                        <tr className="bg-green-100">
                          <th className="border border-green-300 px-3 py-2 text-left font-semibold text-slate-700 text-sm">項目</th>
                          <th className="border border-green-300 px-3 py-2 text-right font-semibold text-slate-700 text-sm">現状</th>
                          <th className="border border-green-300 px-3 py-2 text-right font-semibold text-slate-700 text-sm">提案後</th>
                          <th className="border border-green-300 px-3 py-2 text-right font-semibold text-slate-700 text-sm">差額</th>
                        </tr>
                      </thead>
                      <tbody className="text-sm">
                        <tr>
                          <td className="border border-green-200 px-3 py-2 font-semibold">ワーカー報酬</td>
                          <td className="border border-green-200 px-3 py-2 text-right">120,000円</td>
                          <td className="border border-green-200 px-3 py-2 text-right font-bold text-green-600">54,000円</td>
                          <td className="border border-green-200 px-3 py-2 text-right font-bold text-green-700">-66,000円</td>
                        </tr>
                        <tr>
                          <td className="border border-green-200 px-3 py-2 font-semibold">VPSサーバー</td>
                          <td className="border border-green-200 px-3 py-2 text-right">6,857円</td>
                          <td className="border border-green-200 px-3 py-2 text-right">6,857円</td>
                          <td className="border border-green-200 px-3 py-2 text-right">±0円</td>
                        </tr>
                        <tr>
                          <td className="border border-green-200 px-3 py-2 font-semibold">AI API</td>
                          <td className="border border-green-200 px-3 py-2 text-right">1,179円</td>
                          <td className="border border-green-200 px-3 py-2 text-right">1,179円</td>
                          <td className="border border-green-200 px-3 py-2 text-right">±0円</td>
                        </tr>
                        <tr className="bg-green-200">
                          <td className="border border-green-300 px-3 py-2 font-bold text-slate-900">合計</td>
                          <td className="border border-green-300 px-3 py-2 text-right font-bold text-lg">128,036円</td>
                          <td className="border border-green-300 px-3 py-2 text-right font-bold text-lg text-green-700">62,036円</td>
                          <td className="border border-green-300 px-3 py-2 text-right font-bold text-xl text-green-700">-66,000円</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-br from-purple-50 to-indigo-50 rounded-xl p-4 border-2 border-purple-300">
                <h3 className="text-base font-bold text-slate-800 mb-3 text-center">投資回収シミュレーション</h3>
                <div className="grid grid-cols-5 gap-3 mb-3">
                  <div className="text-center">
                    <div className="text-xs text-slate-600 mb-1">初期投資</div>
                    <div className="text-xl font-bold text-red-600">300,000円</div>
                  </div>
                  <div className="flex items-center justify-center text-2xl text-slate-400">÷</div>
                  <div className="text-center">
                    <div className="text-xs text-slate-600 mb-1">月額削減</div>
                    <div className="text-xl font-bold text-green-600">66,000円</div>
                  </div>
                  <div className="flex items-center justify-center text-2xl text-slate-400">=</div>
                  <div className="text-center">
                    <div className="text-xs text-slate-600 mb-1">回収期間</div>
                    <div className="text-2xl font-black text-blue-600">4.5ヶ月</div>
                  </div>
                </div>

                <div className="bg-white rounded-lg p-3 border-2 border-purple-300">
                  <div className="font-bold text-slate-800 mb-2 text-center text-sm">累積効果</div>
                  <div className="grid grid-cols-3 gap-3 text-center text-sm">
                    <div>
                      <div className="text-slate-600 mb-1 text-xs">6ヶ月後</div>
                      <div className="text-lg font-bold text-green-600">+96,000円</div>
                    </div>
                    <div>
                      <div className="text-slate-600 mb-1 text-xs">1年後</div>
                      <div className="text-xl font-bold text-green-600">+492,000円</div>
                    </div>
                    <div>
                      <div className="text-slate-600 mb-1 text-xs">2年後</div>
                      <div className="text-2xl font-black text-green-600">+1,284,000円</div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-3 bg-blue-100 border-2 border-blue-300 rounded-xl p-3">
                <div className="flex items-center gap-2 mb-1">
                  <CheckCircle2 className="w-4 h-4 text-blue-700" />
                  <span className="font-bold text-blue-900 text-sm">投資判断</span>
                </div>
                <p className="text-slate-800 font-semibold text-sm">
                  ✅ <span className="text-blue-700">5ヶ月で投資回収、高ROI案件</span> - 財務的に健全な戦略的投資
                </p>
              </div>
            </div>
          </Slide>
        )}

        {/* Slide 19: Go/No-Go判断 */}
        {currentSlide === 19 && (
          <Slide id={19} title="意思決定のための要約" subtitle="Go/No-Goの判断材料" pageNumber={19} totalPageCount={TOTAL_SLIDES}>
            <div className="grid grid-cols-2 gap-6 h-full">
              <div>
                <h3 className="text-xl font-bold text-green-600 mb-3 flex items-center gap-2">
                  <CheckCircle2 className="w-6 h-6" />
                  Goを推奨する理由
                </h3>
                <div className="space-y-3">
                  <div className="bg-green-50 rounded-xl p-3 border-2 border-green-300">
                    <div className="flex items-center gap-2 mb-2">
                      <DollarSign className="w-5 h-5 text-green-600" />
                      <div className="font-bold text-base text-slate-800">財務面</div>
                    </div>
                    <ul className="space-y-1 text-xs text-slate-700">
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="w-3 h-3 text-green-600 flex-shrink-0 mt-0.5" />
                        <span>月額66,000円削減（51%コストカット）</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="w-3 h-3 text-green-600 flex-shrink-0 mt-0.5" />
                        <span>5ヶ月で投資回収</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="w-3 h-3 text-green-600 flex-shrink-0 mt-0.5" />
                        <span>年間79万円の削減効果</span>
                      </li>
                    </ul>
                  </div>

                  <div className="bg-blue-50 rounded-xl p-3 border-2 border-blue-300">
                    <div className="flex items-center gap-2 mb-2">
                      <Settings className="w-5 h-5 text-blue-600" />
                      <div className="font-bold text-base text-slate-800">技術面</div>
                    </div>
                    <ul className="space-y-1 text-xs text-slate-700">
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="w-3 h-3 text-blue-600 flex-shrink-0 mt-0.5" />
                        <span>既存技術スタックで実装可能</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="w-3 h-3 text-blue-600 flex-shrink-0 mt-0.5" />
                        <span>リスクは限定的かつ管理可能</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="w-3 h-3 text-blue-600 flex-shrink-0 mt-0.5" />
                        <span>段階的リリースで早期効果</span>
                      </li>
                    </ul>
                  </div>

                  <div className="bg-indigo-50 rounded-xl p-3 border-2 border-indigo-300">
                    <div className="flex items-center gap-2 mb-2">
                      <TrendingUp className="w-5 h-5 text-indigo-600" />
                      <div className="font-bold text-base text-slate-800">ビジネス面</div>
                    </div>
                    <ul className="space-y-1 text-xs text-slate-700">
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="w-3 h-3 text-indigo-600 flex-shrink-0 mt-0.5" />
                        <span>競合優位性の確立</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="w-3 h-3 text-indigo-600 flex-shrink-0 mt-0.5" />
                        <span>スケーラビリティの向上</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="w-3 h-3 text-indigo-600 flex-shrink-0 mt-0.5" />
                        <span>市場拡大の基盤</span>
                      </li>
                    </ul>
                  </div>

                  <div className="bg-purple-50 rounded-xl p-3 border-2 border-purple-300">
                    <div className="flex items-center gap-2 mb-2">
                      <Users className="w-5 h-5 text-purple-600" />
                      <div className="font-bold text-base text-slate-800">運用面</div>
                    </div>
                    <ul className="space-y-1 text-xs text-slate-700">
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="w-3 h-3 text-purple-600 flex-shrink-0 mt-0.5" />
                        <span>ワーカー負荷55%軽減</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="w-4 h-4 text-purple-600 flex-shrink-0 mt-0.5" />
                        <span>単純作業からの解放</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="w-4 h-4 text-purple-600 flex-shrink-0 mt-0.5" />
                        <span>付加価値業務への注力</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-2xl font-bold text-amber-600 mb-4 flex items-center gap-2">
                  <AlertCircle className="w-7 h-7" />
                  懸念事項と対策
                </h3>
                <div className="space-y-4 mb-6">
                  <div className="bg-amber-50 rounded-xl p-4 border-2 border-amber-300">
                    <div className="flex items-start gap-3">
                      <div className="text-2xl">⚠️</div>
                      <div className="flex-1">
                        <div className="font-bold text-slate-800 mb-1">技術リスク</div>
                        <div className="text-sm text-slate-700">
                          <span className="text-amber-700">→</span> 段階的実装＋フォールバック機能で対応
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="bg-amber-50 rounded-xl p-4 border-2 border-amber-300">
                    <div className="flex items-start gap-3">
                      <div className="text-2xl">⚠️</div>
                      <div className="flex-1">
                        <div className="font-bold text-slate-800 mb-1">精度問題</div>
                        <div className="text-sm text-slate-700">
                          <span className="text-amber-700">→</span> 保守的判定＋学習機能で改善
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="bg-amber-50 rounded-xl p-4 border-2 border-amber-300">
                    <div className="flex items-start gap-3">
                      <div className="text-2xl">⚠️</div>
                      <div className="flex-1">
                        <div className="font-bold text-slate-800 mb-1">ワーカー反発</div>
                        <div className="text-sm text-slate-700">
                          <span className="text-amber-700">→</span> 事前説明＋インセンティブ設計で対応
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-gradient-to-br from-green-100 to-emerald-100 rounded-xl p-8 border-4 border-green-400">
                  <div className="text-center">
                    <div className="text-6xl mb-4">✅</div>
                    <div className="text-3xl font-black text-green-700 mb-3">GO推奨</div>
                    <div className="text-slate-800 font-semibold leading-relaxed">
                      財務・技術・ビジネスの<br />
                      すべての観点から<br />
                      <span className="text-2xl font-black text-green-700">実行を強く推奨</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Slide>
        )}

        {/* Slide 20: 次のステップ */}
        {currentSlide === 20 && (
          <Slide id={20} title="次のステップ" subtitle="承認後のアクションプラン" pageNumber={20} totalPageCount={TOTAL_SLIDES}>
            <div className="h-full">
              <h3 className="text-xl font-bold text-slate-800 mb-4 text-center">承認後のタイムライン</h3>
              
              <div className="space-y-3 mb-4">
                <div className="bg-blue-50 rounded-xl p-3 border-2 border-blue-300">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="bg-blue-600 text-white px-3 py-1 rounded-lg font-bold text-sm">Week 1</div>
                    <div className="font-bold text-base text-slate-800">即座に開始</div>
                  </div>
                  <ul className="space-y-1 text-xs text-slate-700 ml-4">
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="w-3 h-3 text-blue-600" />
                      <span>キックオフミーティング</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="w-3 h-3 text-blue-600" />
                      <span>技術仕様の最終確認</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="w-3 h-3 text-blue-600" />
                      <span>開発環境セットアップ</span>
                    </li>
                  </ul>
                </div>

                <div className="bg-indigo-50 rounded-xl p-3 border-2 border-indigo-300">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="bg-indigo-600 text-white px-3 py-1 rounded-lg font-bold text-sm">Week 2-4</div>
                    <div className="font-bold text-base text-slate-800">開発期間</div>
                  </div>
                  <ul className="space-y-1 text-xs text-slate-700 ml-4">
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="w-3 h-3 text-indigo-600" />
                      <span>週次進捗報告</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="w-3 h-3 text-indigo-600" />
                      <span>中間レビュー（Week 2終了時）</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="w-3 h-3 text-indigo-600" />
                      <span>ステークホルダーデモ（Week 3）</span>
                    </li>
                  </ul>
                </div>

                <div className="bg-green-50 rounded-xl p-3 border-2 border-green-300">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="bg-green-600 text-white px-3 py-1 rounded-lg font-bold text-sm">Week 5</div>
                    <div className="font-bold text-base text-slate-800">リリース</div>
                  </div>
                  <ul className="space-y-1 text-xs text-slate-700 ml-4">
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="w-3 h-3 text-green-600" />
                      <span>本番環境デプロイ</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="w-3 h-3 text-green-600" />
                      <span>ワーカー向け説明会</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="w-3 h-3 text-green-600" />
                      <span>監視体制確立</span>
                    </li>
                  </ul>
                </div>
              </div>

              <h3 className="text-base font-bold text-slate-800 mb-3">必要な承認事項</h3>
              <div className="grid grid-cols-2 gap-3 mb-4">
                <div className="bg-purple-50 rounded-lg p-3 border-2 border-purple-300">
                  <div className="flex items-center gap-2 mb-2">
                    <div className="w-5 h-5 border-2 border-purple-600 rounded flex items-center justify-center">
                      <span className="text-purple-600 text-xs">☐</span>
                    </div>
                    <span className="font-semibold text-slate-800">初期投資30万円の予算承認</span>
                  </div>
                </div>
                <div className="bg-purple-50 rounded-lg p-4 border-2 border-purple-300">
                  <div className="flex items-center gap-2 mb-2">
                    <div className="w-6 h-6 border-2 border-purple-600 rounded flex items-center justify-center">
                      <span className="text-purple-600 text-sm">☐</span>
                    </div>
                    <span className="font-semibold text-slate-800">3週間の開発スケジュール承認</span>
                  </div>
                </div>
                <div className="bg-purple-50 rounded-lg p-4 border-2 border-purple-300">
                  <div className="flex items-center gap-2 mb-2">
                    <div className="w-6 h-6 border-2 border-purple-600 rounded flex items-center justify-center">
                      <span className="text-purple-600 text-sm">☐</span>
                    </div>
                    <span className="font-semibold text-slate-800">データベーススキーマ変更の承認</span>
                  </div>
                </div>
                <div className="bg-purple-50 rounded-lg p-4 border-2 border-purple-300">
                  <div className="flex items-center gap-2 mb-2">
                    <div className="w-6 h-6 border-2 border-purple-600 rounded flex items-center justify-center">
                      <span className="text-purple-600 text-sm">☐</span>
                    </div>
                    <span className="font-semibold text-slate-800">ワーカーコミュニケーション計画</span>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-r from-blue-100 to-indigo-100 border-2 border-blue-400 rounded-xl p-6">
                <div className="text-center">
                  <div className="text-3xl font-black text-blue-700 mb-3">プロジェクト開始準備完了</div>
                  <div className="text-slate-700 font-semibold">
                    承認後、即座にキックオフ可能です
                  </div>
                </div>
              </div>
            </div>
          </Slide>
        )}

        {/* Slide 21: 承認欄 */}
        {currentSlide === 21 && (
          <Slide id={21} title="承認欄" subtitle="" pageNumber={21} totalPageCount={TOTAL_SLIDES}>
            <div className="h-full flex flex-col">
              <div className="flex-1">
                <table className="w-full border-collapse">
                  <thead>
                    <tr className="bg-slate-100">
                      <th className="border-2 border-slate-400 px-6 py-4 text-left font-bold text-slate-700 text-lg">役職</th>
                      <th className="border-2 border-slate-400 px-6 py-4 text-left font-bold text-slate-700 text-lg">氏名</th>
                      <th className="border-2 border-slate-400 px-6 py-4 text-left font-bold text-slate-700 text-lg">承認日</th>
                      <th className="border-2 border-slate-400 px-6 py-4 text-center font-bold text-slate-700 text-lg">サイン</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="bg-white">
                      <td className="border-2 border-slate-300 px-6 py-8 font-semibold text-slate-800 text-lg">CEO</td>
                      <td className="border-2 border-slate-300 px-6 py-8"></td>
                      <td className="border-2 border-slate-300 px-6 py-8"></td>
                      <td className="border-2 border-slate-300 px-6 py-8"></td>
                    </tr>
                    <tr className="bg-slate-50">
                      <td className="border-2 border-slate-300 px-6 py-8 font-semibold text-slate-800 text-lg">CTO</td>
                      <td className="border-2 border-slate-300 px-6 py-8"></td>
                      <td className="border-2 border-slate-300 px-6 py-8"></td>
                      <td className="border-2 border-slate-300 px-6 py-8"></td>
                    </tr>
                    <tr className="bg-white">
                      <td className="border-2 border-slate-300 px-6 py-8 font-semibold text-slate-800 text-lg">プロダクトマネージャー</td>
                      <td className="border-2 border-slate-300 px-6 py-8"></td>
                      <td className="border-2 border-slate-300 px-6 py-8"></td>
                      <td className="border-2 border-slate-300 px-6 py-8"></td>
                    </tr>
                    <tr className="bg-slate-50">
                      <td className="border-2 border-slate-300 px-6 py-8 font-semibold text-slate-800 text-lg">エンジニアリングリード</td>
                      <td className="border-2 border-slate-300 px-6 py-8"></td>
                      <td className="border-2 border-slate-300 px-6 py-8"></td>
                      <td className="border-2 border-slate-300 px-6 py-8"></td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <div className="mt-8 border-t-2 border-slate-200 pt-6">
                <div className="grid grid-cols-2 gap-8">
                  <div>
                    <div className="text-sm text-slate-600 mb-1">提案者</div>
                    <div className="font-bold text-slate-800">AI開発チーム</div>
                  </div>
                  <div>
                    <div className="text-sm text-slate-600 mb-1">連絡先</div>
                    <div className="font-bold text-slate-800">dev@theside.example.com</div>
                  </div>
                  <div>
                    <div className="text-sm text-slate-600 mb-1">最終更新</div>
                    <div className="font-bold text-slate-800">2026年1月2日</div>
                  </div>
                  <div>
                    <div className="text-sm text-slate-600 mb-1">バージョン</div>
                    <div className="font-bold text-slate-800">1.0</div>
                  </div>
                </div>
              </div>
            </div>
          </Slide>
        )}

        {/* Slide 22: 最終スライド */}
        {currentSlide === 22 && (
          <Slide id={22} title="" subtitle="" pageNumber={22} totalPageCount={TOTAL_SLIDES}>
            <div className="h-full flex flex-col items-center justify-center text-center -mt-8">
              <div className="mb-8">
                <div className="text-7xl mb-6">🚀</div>
                <h1 className="text-5xl font-black mb-4 bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                  ご清聴ありがとうございました
                </h1>
                <p className="text-2xl text-slate-600 mb-8">
                  質疑応答・ディスカッション
                </p>
              </div>

              <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-8 border-2 border-blue-300 max-w-3xl">
                <div className="text-3xl font-bold text-slate-800 mb-6">
                  提案サマリー
                </div>
                <div className="grid grid-cols-3 gap-6 mb-6">
                  <div className="text-center">
                    <div className="text-sm text-slate-600 mb-2">コスト削減</div>
                    <div className="text-4xl font-black text-green-600">51%</div>
                  </div>
                  <div className="text-center">
                    <div className="text-sm text-slate-600 mb-2">投資回収</div>
                    <div className="text-4xl font-black text-blue-600">5ヶ月</div>
                  </div>
                  <div className="text-center">
                    <div className="text-sm text-slate-600 mb-2">自動化率</div>
                    <div className="text-4xl font-black text-indigo-600">55%</div>
                  </div>
                </div>
                <div className="border-t-2 border-blue-200 pt-4">
                  <p className="text-slate-700 font-semibold">
                    TheSide インテリジェント振り分けシステム<br />
                    ハイブリッド自動化戦略
                  </p>
                </div>
              </div>

              <div className="mt-8 text-slate-500 text-lg">
                CONFIDENTIAL // 2026-01-02
              </div>
            </div>
          </Slide>
        )}

        {/* Navigation */}
        <div className="flex gap-4 items-center justify-center no-print">
          <button
            onClick={() => setCurrentSlide(prev => Math.max(1, prev - 1))}
            disabled={currentSlide === 1}
            className="px-6 py-3 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 disabled:bg-gray-300 disabled:cursor-not-allowed transition-colors"
          >
            ← 前へ
          </button>
          <span className="text-slate-600 font-semibold min-w-[100px] text-center">
            {currentSlide} / {TOTAL_SLIDES}
          </span>
          <button
            onClick={() => setCurrentSlide(prev => Math.min(TOTAL_SLIDES, prev + 1))}
            disabled={currentSlide === TOTAL_SLIDES}
            className="px-6 py-3 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 disabled:bg-gray-300 disabled:cursor-not-allowed transition-colors"
          >
            次へ →
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
