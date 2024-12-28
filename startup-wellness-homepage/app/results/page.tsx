import Layout from '../components/layout'
import Link from 'next/link'
import Image from 'next/image'
import { ArrowRight, TrendingUp, Users, Award } from 'lucide-react'

export default function Results() {
  return (
    <Layout>
      <section className="py-20">
        <div className="container mx-auto px-6">
          <h1 className="text-4xl md:text-5xl font-light tracking-tight text-center mb-12
            bg-clip-text text-transparent bg-gradient-to-r from-white to-blue-200">
            実績・効果
          </h1>
          <div className="text-center mb-16">
            <p className="text-xl text-white/90 mb-8 max-w-3xl mx-auto">
              Startup Wellnessの導入により、多くの企業が目覚ましい成果を上げています。具体的なデータ、成長事例、そしてお客様の声をご紹介します。
            </p>
            <Image
              src="/results-overview.png"
              alt="実績・効果の概要"
              width={800}
              height={400}
              className="rounded-lg shadow-2xl mx-auto"
            />
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <Link href="/results/data" className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 hover:bg-white/15 transition-all duration-300 group">
              <div className="flex items-center mb-4">
                <TrendingUp className="w-8 h-8 mr-4 text-blue-300" />
                <h2 className="text-2xl font-semibold text-blue-300 group-hover:text-blue-200">導入効果データ</h2>
              </div>
              <p className="text-white/90 mb-4">具体的な数値で見る、Startup Wellness導入後の効果をご紹介します。</p>
              <span className="text-blue-300 group-hover:text-blue-200 inline-flex items-center">
                詳細を見る
                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </span>
            </Link>
            <Link href="/results/case-studies" className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 hover:bg-white/15 transition-all duration-300 group">
              <div className="flex items-center mb-4">
                <Users className="w-8 h-8 mr-4 text-blue-300" />
                <h2 className="text-2xl font-semibold text-blue-300 group-hover:text-blue-200">成長事例</h2>
              </div>
              <p className="text-white/90 mb-4">Startup Wellnessを導入し、大きな成長を遂げた企業の事例をご紹介します。</p>
              <span className="text-blue-300 group-hover:text-blue-200 inline-flex items-center">
                詳細を見る
                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </span>
            </Link>
            <Link href="/results/testimonials" className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 hover:bg-white/15 transition-all duration-300 group">
              <div className="flex items-center mb-4">
                <Award className="w-8 h-8 mr-4 text-blue-300" />
                <h2 className="text-2xl font-semibold text-blue-300 group-hover:text-blue-200">顧客の声</h2>
              </div>
              <p className="text-white/90 mb-4">Startup Wellnessを導入されたお客様からいただいた声をご紹介します。</p>
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

