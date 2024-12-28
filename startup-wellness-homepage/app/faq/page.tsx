'use client'

import React, { useState } from 'react'
import { ChevronDown, ChevronUp } from 'lucide-react'
import Layout from '../components/layout'

export default function FAQ() {
  const faqs = [
    {
      question: "Startup Wellnessのプログラムは、どのような企業に最適ですか？",
      answer: "Startup Wellnessのプログラムは、主にシリーズAからシリーズCステージのスタートアップ企業を対象としています。特に、急成長期にある企業や、従業員の健康管理に課題を感じている企業に最適です。ただし、各企業の状況に応じてカスタマイズも可能ですので、まずはお問い合わせください。",
    },
    {
      question: "導入にあたって、どのような準備が必要ですか？",
      answer: "導入に際して、特別な設備や大がかりな準備は必要ありません。まずは、初回のコンサルテーションで貴社の現状と課題をお伺いし、最適なプログラムをご提案いたします。その後、従業員の皆様への説明会を実施し、スムーズな導入をサポートいたします。",
    },
    {
      question: "従業員が匿名でサービスを利用することは可能ですか？",
      answer: "はい、可能です。従業員のプライバシーを最大限尊重し、匿名でのサービス利用を保証しています。個人情報の取り扱いには細心の注意を払い、データの匿名化処理を行っています。",
    },
    {
      question: "効果測定はどのように行われますか？",
      answer: "効果測定は、定量的・定性的の両面から行います。具体的には、従業員の健康状態の変化、生産性指標、欠勤率、従業員満足度調査などのデータを活用します。また、定期的なフィードバックセッションを通じて、質的な評価も行います。これらのデータを総合的に分析し、プログラムの効果と改善点を可視化します。",
    },
    {
      question: "グローバル展開している企業にも対応できますか？",
      answer: "はい、対応可能です。多言語対応のプロフェッショナルチームを擁しており、グローバル展開している企業にも柔軟に対応いたします。各国の文化や法規制の違いにも配慮しながら、一貫性のあるプログラムを提供いたします。",
    },
    {
      question: "セキュリティ対策について教えてください。",
      answer: "セキュリティ対策には万全を期しています。データの暗号化、多要素認証、定期的なセキュリティ監査を実施しています。また、GDPR、CCPA、個人情報保護法などの各国の法規制にも準拠しています。詳細なセキュリティポリシーについては、お問い合わせいただければ詳しくご説明いたします。",
    }
  ]

  return (
    <Layout>
      <section className="py-20">
        <div className="container mx-auto px-6">
          <h1 className="text-4xl md:text-5xl font-light tracking-tight text-center mb-12
            bg-clip-text text-transparent bg-gradient-to-r from-white to-blue-200">
            よくあるご質問
          </h1>
          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <FAQItem key={index} question={faq.question} answer={faq.answer} />
            ))}
          </div>
        </div>
      </section>
    </Layout>
  )
}

function FAQItem({ question, answer }: { question: string, answer: string }) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 hover:bg-white/15 transition-all duration-300">
      <button
        className="flex justify-between items-center w-full text-left"
        onClick={() => setIsOpen(!isOpen)}
      >
        <div className="flex items-center">
          <h2 className="text-xl font-semibold">{question}</h2>
        </div>
        {isOpen ? <ChevronUp className="w-6 h-6" /> : <ChevronDown className="w-6 h-6" />}
      </button>
      {isOpen && (
        <p className="mt-4 text-white/90 pl-12">{answer}</p>
      )}
    </div>
  )
}

