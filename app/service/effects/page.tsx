import Layout from '../../components/layout'

export default function ServiceEffects() {
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
      title: "企業価値の向上と投資魅力度の強化",
      description: "従業員の健康を重視する企業文化は、優秀な人材の獲得と維持に繋がり、企業の魅力を高めます。投資家へのアピールポイントとなり、資金調達を有利に進めることができます。長期的な視点での企業価値向上に貢献し、Exit戦略の成功を後押しします。"
    }
  ]

  return (
    <Layout>
      <section className="py-20">
        <div className="container mx-auto px-6">
          <h1 className="text-4xl md:text-5xl font-light tracking-tight text-center mb-12
            bg-clip-text text-transparent bg-gradient-to-r from-white to-blue-200">
            導入効果
          </h1>
          <p className="text-xl text-center mb-12 max-w-3xl mx-auto">
            Startup Wellnessの導入は、単に従業員の健康を改善するだけでなく、組織全体のパフォーマンス向上、ひいては投資リターンの最大化に直結します。具体的な効果をご覧ください。
          </p>
          <div className="space-y-12">
            {effects.map((effect, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 hover:bg-white/15 transition-all duration-300">
                <h2 className="text-2xl font-semibold mb-4 text-blue-300">{effect.title}</h2>
                <p className="text-white/90">{effect.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  )
}

