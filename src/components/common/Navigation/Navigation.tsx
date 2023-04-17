import {Logo} from "@/components/common/Navigation/Logo"

export const Navigation = () => {
  return <nav className="w-full bg-PED-purple py-2">
    <div className="max-w-desktop mx-auto flex w-full items-center justify-between">
      <Logo/>
      <div className="flex items-center space-x-8 text-lg text-white">
        <a>ลองเลือกตั้ง</a>
        <a>สิ่งที่ควรรู้</a>
        <a>เกี่ยวกับการเลือกตั้ง</a>
        <a>About us</a>
      </div>
    </div>
  </nav>
}