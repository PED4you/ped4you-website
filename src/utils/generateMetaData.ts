import type { Metadata } from "next"

export function generateMetaData(title: string, description: string, path: string): Metadata {
  return {
    title: `${title} : PED4YOU — เป็ดฟอร์ยู`,
    description: `${description}\nลองเลือกตั้งตามกติกาใหม่ก่อนไปกาจริง - จำลองขั้นตอนการเลือกตั้งตามกติกาใหม่ทุกขั้นตอน ตั้งแต่ตรวจสอบรายชื่อ กาบัตร จนถึงหย่อนบัตรลงกล่อง แถมรู้ผลด้วยว่ากาให้ใครไปบ้าง`,
    openGraph: {
      title: `${title} : PED4YOU — เป็ดฟอร์ยู`,
      description: `${description}\nลองเลือกตั้งตามกติกาใหม่ก่อนไปกาจริง - จำลองขั้นตอนการเลือกตั้งตามกติกาใหม่ทุกขั้นตอน ตั้งแต่ตรวจสอบรายชื่อ กาบัตร จนถึงหย่อนบัตรลงกล่อง แถมรู้ผลด้วยว่ากาให้ใครไปบ้าง`,
      type: "website",
      url: `https://ped4you.com${path}`,
      images: [
        {
          url: "https://ped4you.com/meta/ped4you-banner.png",
          width: 1200,
          height: 630,
          alt: `${title} : PED4YOU — เป็ดฟอร์ยู`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      images: [
        {
          url: "https://ped4you.com/meta/ped4you-banner.png",
          width: 1200,
          height: 630,
          alt: `${title} : PED4YOU — เป็ดฟอร์ยู`,
        },
      ],
      title: `${title} : PED4YOU — เป็ดฟอร์ยู`,
      description: `${description}\nลองเลือกตั้งตามกติกาใหม่ก่อนไปกาจริง - จำลองขั้นตอนการเลือกตั้งตามกติกาใหม่ทุกขั้นตอน ตั้งแต่ตรวจสอบรายชื่อ กาบัตร จนถึงหย่อนบัตรลงกล่อง แถมรู้ผลด้วยว่ากาให้ใครไปบ้าง`,
    },
    authors: [
      {
        name: "PED4YOU",
        url: "https://ped4you.com",
      },
    ],
  }
}
