import Layout from '../../components/layout'

export default function ResultsCaseStudies() {
  const caseStudies = [
    {
      company: "テックスタートアップA社",
      industry: "AI・機械学習",
      challenge: "急成長に伴う従業員の健康管理と生産性維持",
      solution: "個別最適化されたウェルネスプログラムの導入",
      result: "従業員満足度30%向上、生産性20%向上、離職率15%低下"
    },
    {
      company: "フィンテックスタートアップB社",
      industry: "金融テクノロジー",
      challenge: "高ストレス環境下での従業員のメンタルヘルス管理",
      solution: "ストレス軽減に特化したマインドフルネスプログラムの実施",
      result: "ストレス関連の休職50%減少、チームのコミュニケーション効率30%向上"
    },
    {
      company: "ヘルステックスタートアップC社",
      industry: "健康・医療",
      challenge: "創業者の燃え尽き症候群と従業員の長時間労働",
      solution: "経営陣向けコーチングと労働時間最適化プログラムの導入",
      result: "創業者の生産性40%向上、従業員の残業時間25%削減"
    }
  ]

  return (
    <Layout>
      <section className="py-20">
        <div className="container mx-auto px-6">
          <h1 className="text-4xl md:text-5xl font-light tracking-tight text-center mb-12
            bg-clip-text text-transparent bg-gradient-to-r from-white to-blue-200">
            成長事例
          </h1>
          <p className="text-xl text-center mb-12 max-w-3xl mx-auto">
            Startup Wellnessを導入し、大きな成長を遂げた企業の事例をご紹介します。
          </p>
          <div className="space-y-12">
            {caseStudies.map((study, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-lg rounded-2xl p-8">
                <h2 className="text-2xl font-semibold mb-4 text-blue-300">{study.company}</h2>
                <p className="text-white/90 mb-2"><strong>業界：</strong>{study.industry}</p>
                <p className="text-white/90 mb-2"><strong>課題：</strong>{study.challenge}</p>
                <p className="text-white/90 mb-2"><strong>ソリューション：</strong>{study.solution}</p>
                <p className="text-white/90"><strong>結果：</strong>{study.result}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  )
}

