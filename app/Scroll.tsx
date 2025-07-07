import Head from 'next/head'
import Image from 'next/image'

export default function Scroll() {
  return (
    <div className="flex overflow-x-auto h-screen">
      <Head>
        <title>Scrolling Website</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="flex space-x-4 w-full">
        <div className="min-w-full bg-white p-8">
          <div className="grid grid-cols-3 gap-4">
            <div className="bg-gray-100 p-4">
              <Image src="https://cdn.prod.website-files.com/5837424ae11409586f837994/65de8050eb3235ff3f5a61ce_Frame%202343-p-500.png" alt="Service 1" width={500} height={500} />
              Pay-Per-Click Ads
            </div>
            <div className="bg-gray-100 p-4">
              <Image src="https://cdn.prod.website-files.com/5837424ae11409586f837994/65de9d1cea9fe43024b32476_Frame%202341-p-500.png" alt="Design" className="mx-auto" width={250} height={250} />
            </div>
            <div className="bg-gray-100 p-4">
              <Image src="https://cdn.prod.website-files.com/5837424ae11409586f837994/65de85206e70f69fe7d42321_Frame%202346-p-500.png" alt="Service 2" width={500} height={500} />
              SEO
            </div>
            <div className="bg-gray-100 p-4">
              <Image src="https://cdn.prod.website-files.com/5837424ae11409586f837994/65de8249d707f08552102caa_Frame%202348-p-500.png" alt="External Service" width={500} height={500} />
              Content Production
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
