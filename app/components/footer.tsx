import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-xl font-semibold mb-4">Startup Wellness</h3>
            <p>投資先企業の成長を、健康から加速する。</p>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-4">Contact Us</h3>
            <p>〒100-0005 東京都千代田区丸の内1-1-1</p>
            <p>Phone: 03-1234-5678</p>
            <p>Email: info@startupwellness.jp</p>
          </div>
        </div>
        <div className="mt-8 text-center">
          <p>&copy; 2024 Startup Wellness. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

