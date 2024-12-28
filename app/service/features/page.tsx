import Layout from '../../components/layout'

export default function ServiceFeatures() {
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
    <Layout>
      <section className="py-20">
        <div className="container mx-auto px-6">
          <h1 className="text-4xl md:text-5xl font-light tracking-tight text-center mb-12
            bg-clip-text text-transparent bg-gradient-to-r from-white to-blue-200">
            特徴と強み
          </h1>
          <p className="text-xl text-center mb-12 max-w-3xl mx-auto">
            Startup Wellnessは、単なる福利厚生サービスではありません。スタートアップ特有の課題を深く理解し、グローバル水準のノウハウと革新的なアプローチで、投資先企業の真の成長を支えます。
          </p>
          <div className="space-y-12">
            {features.map((feature, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 hover:bg-white/15 transition-all duration-300">
                <h2 className="text-2xl font-semibold mb-4 text-blue-300">{feature.title}</h2>
                <p className="text-white/90">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  )
}

