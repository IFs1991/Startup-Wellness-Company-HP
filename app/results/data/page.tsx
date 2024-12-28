import Layout from '../../components/layout'

export default function ResultsData() {
  const data = [
    { label: '生産性向上', value: '25%' },
    { label: '従業員満足度向上', value: '40%' },
    { label: 'ストレス関連問題減少', value: '35%' },
    { label: '離職率低下', value: '30%' },
    { label: '創業者の燃え尽き症候群減少', value: '60%' },
    { label: '資金調達成功率向上', value: '20%' }
  ]

  return (
    <Layout>
      <section className="py-20">
        <div className="container mx-auto px-6">
          <h1 className="text-4xl md:text-5xl font-light tracking-tight text-center mb-12
            bg-clip-text text-transparent bg-gradient-to-r from-white to-blue-200">
            導入効果データ
          </h1>
          <p className="text-xl text-center mb-12 max-w-3xl mx-auto">
            Startup Wellnessの導入により、以下のような具体的な効果が確認されています。
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {data.map((item, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 text-center">
                <h2 className="text-4xl font-bold text-blue-300 mb-2">{item.value}</h2>
                <p className="text-xl text-white/90">{item.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  )
}

