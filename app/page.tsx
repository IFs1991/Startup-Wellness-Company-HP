import Link from 'next/link'
import Layout from './components/layout'
import { Button } from '@/components/ui/button'
import { ArrowRight } from 'lucide-react'
import { Rocket, BarChart2, Globe } from 'lucide-react'
import AnimatedBackground from './components/animated-background'
import AnimatedChart from './components/animated-chart'

export default function Home() {
  return (
    <Layout>
      <section className="min-h-screen flex items-center justify-center text-center 
        relative overflow-hidden">
        <AnimatedBackground />
        <div className="absolute inset-0">
          <div className="absolute w-96 h-96 bg-blue-500 rounded-full blur-3xl 
            animate-[float_8s_ease-in-out_infinite] top-1/4 -left-48 opacity-20" />
          <div className="absolute w-96 h-96 bg-purple-500 rounded-full blur-3xl 
            animate-[float_12s_ease-in-out_infinite] bottom-1/4 -right-48 opacity-20" />
        </div>
        
        <div className="container mx-auto px-6 relative z-20">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="md:w-1/2 text-left">
              <h1 className="text-5xl md:text-7xl font-light tracking-tight mb-8 
                bg-clip-text text-transparent bg-gradient-to-r from-white to-blue-200">
                投資価値を高める、
                <br />
                戦略的アプローチ。
              </h1>
              <p className="text-xl md:text-2xl mb-12 font-light tracking-wider text-blue-100">
                ポートフォリオ企業の潜在能力を最大限に引き出し、
                次世代のユニコーン企業創出をサポート
              </p>
              <Link href="/contact" passHref>
                <Button 
                  className="text-lg px-8 py-6 bg-white/10 backdrop-blur-md hover:bg-white/20
                    border border-white/20 rounded-full transition-all duration-300
                    hover:tracking-wider group"
                >
                  <span>資料ダウンロード</span>
                  <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
            </div>
            <div className="md:w-1/2 mt-12 md:mt-0">
              <img
                src="/hero-image.png"
                alt="Startup Wellness Hero Image"
                width={600}
                height={600}
                className="rounded-lg shadow-2xl animate-float"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white/5 backdrop-blur-lg">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl md:text-5xl font-light tracking-tight text-center mb-12
            bg-clip-text text-transparent bg-gradient-to-r from-white to-blue-200">
            なぜStartup Wellnessなのか
          </h2>
          <div className="grid md:grid-cols-3 gap-12">
            {[
              { title: "スタートアップに特化", icon: Rocket },
              { title: "データドリブン", icon: BarChart2 },
              { title: "グローバル基準", icon: Globe }
            ].map((item, index) => (
              <div key={index} className="text-center">
                <item.icon className="w-16 h-16 mx-auto mb-6 text-blue-300" />
                <h3 className="text-2xl font-semibold mb-4">{item.title}</h3>
                <p className="text-white/80">
                  {item.title === "スタートアップに特化" &&
                    "スタートアップ特有の肉体的精神的なストレスに特化した施術やカウンセリングで仕事のパフォーマンスを引き上げます"
                  }
                  {item.title === "データドリブン" &&
                    "ポートフォリオ企業ごとにデータ解析し業績を効率的に改善する施術とカウンセリングを提供します"
                  }
                  {item.title === "グローバル基準" &&
                    "英語圏にも対応し多国籍なチームへの対応も可能です"
                  }
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl md:text-5xl font-light tracking-tight text-center mb-12
            bg-clip-text text-transparent bg-gradient-to-r from-white to-blue-200">
            導入効果
          </h2>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6">
              <AnimatedChart />
              <p className="text-center text-white/70 mt-4">6ヶ月間の改善傾向</p>
            </div>
            <div>
              <ul className="space-y-6">
                {[
                  "生産性が大幅に向上",
                  "従業員満足度が上昇",
                  "離職率が低下",
                  "6ヶ月で顕著な改善が見られます"
                ].map((item, index) => (
                  <li key={index} className="flex items-center">
                    <svg className="w-6 h-6 mr-2 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-lg">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white/5 backdrop-blur-lg">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-light tracking-tight text-center mb-12
          bg-clip-text text-transparent bg-gradient-to-r from-white to-blue-200">
          お知らせ
        </h2>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 hover:bg-white/15 transition-all duration-300 max-w-2xl mx-auto">
            <div className="flex items-center justify-between mb-2">
              <span className="text-blue-300">2025年1月18日</span>
              <span className="text-sm bg-blue-500/20 text-blue-300 px-2 py-1 rounded">お知らせ</span>
            </div>
            <p className="text-white/90 mb-4">HPを開設しました。</p>
          </div>
        </div>
      </div>
    </section>
    </Layout>
  )
}

