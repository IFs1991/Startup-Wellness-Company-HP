'use client'

import React from 'react'
import { ArrowRight } from 'lucide-react'
import { Button } from '@/components/ui/button'
import Header from '../components/header'
import Footer from '../components/footer'

export default function ServiceOverview() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-950 to-blue-950 text-white">
      <Header />
      <main className="pt-16 md:pt-20">
        <FeaturesSection />
        <EffectsSection />
      </main>
      <Footer />
    </div>
  )
}

function FeaturesSection() {
  const features = [
    {
      title: "スタートアップに特化した個別最適化プログラム",
      description: "過酷な労働環境、高いプレッシャー、不規則な生活。スタートアップの現場を知り尽くしているからこそ、画一的な健康管理ではなく、各社の成長ステージ、企業文化、そして従業員一人ひとりの状況に合わせた最適なプログラムを設計します。創業期から成長期、そしてExitまで、企業のライフサイクル全体をサポートします。"
    },
    {
      title: "グローバル基準の高品質なWell-beingソリューション",
      description: "豪華客船基準の施術クオリティ、多言語対応可能なプロフェッショナルチーム。世界中の最先端ウェルネス技術と、東洋医学の叡智を融合させた独自のプログラムは、身体と精神の両面からアプローチし、真のWell-beingを実現します。グローバル展開を見据える企業にも、安心して導入いただけます。"
    },
    {
      title: "データドリブンな効果測定と継続的な改善",
      description: "感覚的な効果測定ではなく、客観的なデータに基づいた効果検証を行います。独自の分析システムを活用し、従業員の健康状態の変化、生産性の向上、ストレス軽減効果などを可視化。得られたデータは、プログラムの継続的な改善に活かし、常に最適な状態へと進化させます。投資対効果を最大化するための、透明性の高い運用をお約束します。"
    }
  ]

  return (
    <section className="py-20 bg-slate-900/50">
      <div className="container mx-auto px-6">
        <h1 className="text-4xl md:text-5xl font-light tracking-tight text-center mb-4
          bg-clip-text text-transparent bg-gradient-to-r from-white to-blue-200">
          サービス概要
        </h1>
        <h2 className="text-3xl md:text-4xl font-light tracking-tight text-center mb-8
          bg-clip-text text-transparent bg-gradient-to-r from-white to-blue-200">
          選ばれる理由 - 投資を、確かな成長へと導く3つの強み
        </h2>
        <p className="text-xl text-center mb-12 max-w-3xl mx-auto">
          Startup Wellnessは、単なる福利厚生サービスではありません。スタートアップ特有の課題を深く理解し、グローバル水準のノウハウと革新的なアプローチで、投資先企業の真の成長を支えます。
        </p>
        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 hover:bg-white/15 transition-all duration-300">
              <h3 className="text-2xl font-semibold mb-4 text-blue-300">{feature.title}</h3>
              <p className="text-white/90">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function EffectsSection() {
  const effects = [
    {
      title: "組織の活性化と生産性向上",
      description: "従業員の集中力とパフォーマンスが向上し、生産性が平均25%向上します。心身の不調によるパフォーマンス低下を防ぎ、創造性とイノベーションを促進します。チームのエンゲージメントが向上し、組織全体のコミュニケーションが活性化します。"
    },
    {
      title: "リスクの軽減と安定的な成長",
      description: "創業者の燃え尽き症候群発生率を60%減少させます。従業員の離職率を抑制し、貴重な人材の定着を促進します。健康問題に起因する欠勤や休職を減らし、事業継続性のリスクを低減します。"
    },
    {
      title: "企業価値の向上と投資привлекательностьの強化",
      description: "従業員の健康を重視する企業文化は、優秀な人材の獲得と維持に繋がり、企業привлекательностьを高めます。投資家へのアピールポイントとなり、資金調達を有利に進めることができます。長期的な視点での企業価値向上に貢献し、Exit戦略の成功を後押しします。"
    }
  ]

  return (
    <section className="py-20 bg-blue-900/20">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-light tracking-tight text-center mb-8
          bg-clip-text text-transparent bg-gradient-to-r from-white to-blue-200">
          目に見える成果 - 投資リターンの最大化に貢献
        </h2>
        <p className="text-xl text-center mb-12 max-w-3xl mx-auto">
          Startup Wellnessの導入は、単に従業員の健康を改善するだけでなく、組織全体のパフォーマンス向上、ひいては投資リターンの最大化に直結します。具体的な効果をご覧ください。
        </p>
        <div className="grid md:grid-cols-3 gap-8">
          {effects.map((effect, index) => (
            <div key={index} className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 hover:bg-white/15 transition-all duration-300">
              <h3 className="text-2xl font-semibold mb-4 text-blue-300">{effect.title}</h3>
              <p className="text-white/90">{effect.description}</p>
            </div>
          ))}
        </div>
        <div className="text-center mt-12">
          <Button 
            className="text-lg px-8 py-6 bg-white/10 backdrop-blur-md hover:bg-white/20
              border border-white/20 rounded-full transition-all duration-300
              hover:tracking-wider group"
          >
            <span>資料ダウンロード</span>
            <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
          </Button>
        </div>
      </div>
    </section>
  )
}

