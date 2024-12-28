import Layout from '../../components/layout'
import Image from 'next/image'

export default function VisionFounderStory() {
  return (
    <Layout>
      <section className="py-20">
        <div className="container mx-auto px-6">
          <h1 className="text-4xl md:text-5xl font-light tracking-tight text-center mb-12
            bg-clip-text text-transparent bg-gradient-to-r from-white to-blue-200">
            創業者ストーリー
          </h1>
          <div className="grid md:grid-cols-2 gap-12 items-center mb-12">
            <Image
              src="/founder-image.jpg"
              alt="Startup Wellness創業者"
              width={500}
              height={500}
              className="rounded-lg shadow-lg"
            />
            <div>
              <h2 className="text-2xl font-semibold mb-4 text-blue-300">情熱の原点 - 起業家を支えたいという強い想い</h2>
              <p className="text-white/90 mb-4">
                Startup Wellnessの創業には、私自身の強い想いと、家族に受け継がれてきた起業家支援の精神があります。幼い頃から、父から聞かされた叔父と石坂泰三氏の交流の物語は、私の心に深く刻まれました。戦後の日本経済を牽引した偉大な起業家を支えた叔父の姿は、常に私の憧れであり、誇りでした。
              </p>
            </div>
          </div>
          <div className="space-y-8 text-white/90">
            <p>
              その後、私自身も起業の道を歩み、その過程で多くの起業家たちと出会い、彼らの情熱と苦悩を目の当たりにしました。彼らの多くが、素晴らしいビジョンと能力を持ちながらも、過酷な労働環境や高いストレスにさらされ、心身の健康を犠牲にしている現状に心を痛めました。
            </p>
            <p>
              そこで私は、現代の起業家たちを支える新しい形を模索し始めました。最先端のウェルネス技術と、日本古来の「おもてなし」の精神を融合させることで、起業家たちの心身の健康を守り、彼らの挑戦を支える仕組みを作り上げたいと考えたのです。
            </p>
            <p>
              Startup Wellnessは、この想いから生まれました。私たちは、現代の起業家たちが直面する健康課題に真正面から向き合い、彼らが最高のパフォーマンスを発揮できるよう支援します。そして、彼らの成功を通じて、日本そして世界のイノベーションに貢献していきたいと考えています。
            </p>
            <p>
              私たちの挑戦はまだ始まったばかりです。しかし、一人でも多くの起業家とそのチームが、健康で幸せに、そして持続可能な形で世界を変えていく姿を思い描くとき、胸が高鳴ります。共に、より良い未来を創造していきましょう。
            </p>
          </div>
        </div>
      </section>
    </Layout>
  )
}

