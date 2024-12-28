import Layout from '../../components/layout'

export default function VisionMission() {
  return (
    <Layout>
      <section className="py-20">
        <div className="container mx-auto px-6">
          <h1 className="text-4xl md:text-5xl font-light tracking-tight text-center mb-12
            bg-clip-text text-transparent bg-gradient-to-r from-white to-blue-200">
            ミッション
          </h1>
          <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 mb-12">
            <h2 className="text-2xl font-semibold mb-4 text-blue-300">私たちの使命 - 挑戦者の健康を、未来の力へ</h2>
            <p className="text-white/90 mb-4">
              Startup Wellnessのミッションは、「挑戦するすべての起業家とそのチームが、心身ともに最高の状態で、世界を変えるイノベーションを起こし続けられるようにサポートする」ことです。
            </p>
            <p className="text-white/90 mb-4">
              情熱と創造性に満ちた挑戦者たちが、健康上の問題によってその才能を十分に発揮できない現状を変えたい。私たちは、最先端のウェルネス技術と深い人間理解に基づいたプログラムを通じて、彼らの健康を支え、その情熱を最大限に引き出すことを使命としています。
            </p>
          </div>
          <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8">
            <h2 className="text-2xl font-semibold mb-4 text-blue-300">私たちが目指す未来</h2>
            <ul className="list-disc list-inside space-y-4 text-white/90">
              <li>すべてのスタートアップが、健康経営を当たり前のものとして実践している世界</li>
              <li>起業家とそのチームが、心身ともに健康で、持続可能な形でイノベーションを生み出し続けられる社会</li>
              <li>健康な従業員が、健全な企業文化を育み、それが企業の持続的な成長と社会貢献につながる未来</li>
              <li>投資家が、財務指標だけでなく、企業の健康経営への取り組みも重要な投資判断基準とする時代</li>
            </ul>
          </div>
        </div>
      </section>
    </Layout>
  )
}

