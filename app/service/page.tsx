import Layout from '../components/layout'
import Link from 'next/link'
import { ArrowRight, Zap, Globe, Shield, BarChart } from 'lucide-react'

export default function ServiceOverview() {
  return (
    <Layout>
      <section className="py-20">
        <div className="container mx-auto px-6">
          <h1 className="text-4xl md:text-5xl font-light tracking-tight text-center mb-12
            bg-clip-text text-transparent bg-gradient-to-r from-white to-blue-200">
            サービス概要
          </h1>
          <div className="mb-16">
            <p className="text-xl text-white/90 mb-8 max-w-3xl mx-auto text-center">
              Startup Wellnessは、スタートアップ企業とその投資家であるVC向けに、従業員の健康を最適化する革新的な健康管理プログラムを提供します。データドリブンなアプローチと最先端のウェルネステクノロジーを組み合わせ、企業の成長と従業員の健康を両立させます。
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-3xl mx-auto">
              {[
                { icon: Zap, text: "カスタマイズ可能" },
                { icon: Globe, text: "グローバル対応" },
                { icon: Shield, text: "データプライバシー" },
                { icon: BarChart, text: "24/7サポート" }
              ].map((item, index) => (
                <div key={index} className="flex flex-col items-center text-center">
                  <item.icon className="w-12 h-12 mb-4 text-blue-300" />
                  <span className="text-sm">{item.text}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            <Link href="/service/features" className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 hover:bg-white/15 transition-all duration-300 group">
              <h2 className="text-2xl font-semibold mb-4 text-blue-300 group-hover:text-blue-200">特徴と強み</h2>
              <p className="text-white/90 mb-4">スタートアップに特化した個別最適化プログラム、グローバル基準の高品質なWell-beingソリューション、データドリブンな効果測定と継続的な改善について詳しく解説します。</p>
              <span className="text-blue-300 group-hover:text-blue-200 inline-flex items-center">
                詳細を見る
                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </span>
            </Link>
            <Link href="/service/effects" className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 hover:bg-white/15 transition-all duration-300 group">
              <h2 className="text-2xl font-semibold mb-4 text-blue-300 group-hover:text-blue-200">導入効果</h2>
              <p className="text-white/90 mb-4">組織の活性化と生産性向上、リスクの軽減と安定的な成長、企業価値の向上と投資魅力度の強化など、具体的な導入効果をご紹介します。</p>
              <span className="text-blue-300 group-hover:text-blue-200 inline-flex items-center">
                詳細を見る
                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </span>
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  )
}

