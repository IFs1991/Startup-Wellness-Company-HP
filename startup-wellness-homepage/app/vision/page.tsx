import Layout from '../components/layout'
import Link from 'next/link'
import Image from 'next/image'
import { ArrowRight, Target, Users } from 'lucide-react'

export default function Vision() {
  return (
    <Layout>
      <section className="py-20">
        <div className="container mx-auto px-6">
          <h1 className="text-4xl md:text-5xl font-light tracking-tight text-center mb-12
            bg-clip-text text-transparent bg-gradient-to-r from-white to-blue-200">
            ビジョン
          </h1>
          <div className="text-center mb-16">
            <p className="text-xl text-white/90 mb-12 max-w-3xl mx-auto">
              Startup Wellnessが目指す未来と、その背景にある想いをご紹介します。私たちは、スタートアップの成功と従業員の健康の両立を通じて、より良い社会の実現を目指しています。
            </p>
            <div className="relative w-full max-w-4xl mx-auto aspect-square md:aspect-[2/1] overflow-hidden rounded-xl">
              <Image
                src="/c1890343-82f8-4d1b-87d0-95244903cef5.png"
                alt="Startup Wellnessのビジョン - イノベーションと成長の象徴"
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            <Link href="/vision/mission" className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 hover:bg-white/15 transition-all duration-300 group">
              <div className="flex items-center mb-4">
                <Target className="w-8 h-8 mr-4 text-blue-300" />
                <h2 className="text-2xl font-semibold text-blue-300 group-hover:text-blue-200">ミッション</h2>
              </div>
              <p className="text-white/90 mb-4">Startup Wellnessが掲げる使命と、私たちが目指す未来についてご紹介します。スタートアップの成長と従業員の健康を両立させ、持続可能なイノベーションを実現します。</p>
              <span className="text-blue-300 group-hover:text-blue-200 inline-flex items-center">
                詳細を見る
                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </span>
            </Link>
            <Link href="/vision/founder-story" className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 hover:bg-white/15 transition-all duration-300 group">
              <div className="flex items-center mb-4">
                <Users className="w-8 h-8 mr-4 text-blue-300" />
                <h2 className="text-2xl font-semibold text-blue-300 group-hover:text-blue-200">創業者ストーリー</h2>
              </div>
              <p className="text-white/90 mb-4">Startup Wellnessが誕生した背景と、創業者の想いをお伝えします。私たちの原点と、スタートアップ支援への情熱をご紹介します。</p>
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

