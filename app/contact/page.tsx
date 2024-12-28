import Layout from '../components/layout'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'

export default function Contact() {
  return (
    <Layout>
      <section className="py-20">
        <div className="container mx-auto px-6">
          <h1 className="text-4xl md:text-5xl font-light tracking-tight text-center mb-8
            bg-clip-text text-transparent bg-gradient-to-r from-white to-blue-200">
            お問い合わせ
          </h1>
          <p className="text-xl text-center mb-12 max-w-3xl mx-auto">
            Startup Wellnessの導入にご興味をお持ちいただけましたら、お気軽にお問い合わせください。貴社の課題やご要望をお伺いし、最適なソリューションをご提案させていただきます。
          </p>
          <div className="grid md:grid-cols-2 gap-12">
            <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8">
              <h2 className="text-2xl font-semibold mb-6">お問い合わせフォーム</h2>
              <form className="space-y-6">
                <div>
                  <label htmlFor="name" className="block mb-2">お名前</label>
                  <Input id="name" type="text" placeholder="山田 太郎" required />
                </div>
                <div>
                  <label htmlFor="email" className="block mb-2">メールアドレス</label>
                  <Input id="email" type="email" placeholder="you@example.com" required />
                </div>
                <div>
                  <label htmlFor="company" className="block mb-2">会社名</label>
                  <Input id="company" type="text" placeholder="株式会社〇〇" required />
                </div>
                <div>
                  <label htmlFor="message" className="block mb-2">お問い合わせ内容</label>
                  <Textarea id="message" placeholder="ご質問やご要望をお書きください" required />
                </div>
                <Button type="submit" className="w-full">送信</Button>
              </form>
            </div>
            <div>
              <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 mb-8">
                <h2 className="text-2xl font-semibold mb-4">お電話でのお問い合わせ</h2>
                <p className="text-3xl font-bold">03-1234-5678</p>
                <p className="text-sm text-white/70 mt-2">受付時間：平日 9:00〜18:00</p>
              </div>
              <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8">
                <h2 className="text-2xl font-semibold mb-4">メールでのお問い合わせ</h2>
                <p className="text-xl">info@startup-wellness.com</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  )
}

