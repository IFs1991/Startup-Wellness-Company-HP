import Layout from '../../components/layout'
import Image from 'next/image'

export default function ResultsTestimonials() {
  const testimonials = [
    {
      name: "山田 太郎",
      position: "CEO, テックスタートアップA社",
      comment: "Startup Wellnessの導入により、従業員の健康と生産性が大幅に向上しました。特に、個別最適化されたプログラムは、各従業員のニーズに合わせて柔軟に対応してくれるので、非常に効果的でした。",
      image: "/testimonial1.jpg"
    },
    {
      name: "鈴木 花子",
      position: "COO, フィンテックスタートアップB社",
      comment: "高ストレスの環境下で働く従業員のメンタルヘルスが大きな課題でしたが、Startup Wellnessのプログラムにより、ストレス関連の問題が激減しました。チームの雰囲気も明るくなり、コミュニケーションが活性化しています。",
      image: "/testimonial2.jpg"
    },
    {
      name: "佐藤 次郎",
      position: "創業者, ヘルステックスタートアップC社",
      comment: "自身の燃え尽き症候群に悩んでいましたが、Startup Wellnessのコーチングプログラムのおかげで、健康的に働きながら会社を成長させることができるようになりました。従業員の働き方も改善され、会社全体が活性化しています。",
      image: "/testimonial3.jpg"
    }
  ]

  return (
    <Layout>
      <section className="py-20">
        <div className="container mx-auto px-6">
          <h1 className="text-4xl md:text-5xl font-light tracking-tight text-center mb-12
            bg-clip-text text-transparent bg-gradient-to-r from-white to-blue-200">
            顧客の声
          </h1>
          <p className="text-xl text-center mb-12 max-w-3xl mx-auto">
            Startup Wellnessを導入されたお客様からいただいた声をご紹介します。
          </p>
          <div className="space-y-12">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 flex flex-col md:flex-row items-center gap-8">
                <Image
                  src={testimonial.image}
                  alt={testimonial.name}
                  width={150}
                  height={150}
                  className="rounded-full"
                />
                <div>
                  <p className="text-white/90 mb-4 italic">"{testimonial.comment}"</p>
                  <p className="text-blue-300 font-semibold">{testimonial.name}</p>
                  <p className="text-white/70">{testimonial.position}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  )
}

