interface AILoadingProps {
  loading: boolean
  loadingProgress: number
}

export default function AILoading({ loading, loadingProgress }: AILoadingProps) {
  // if (!loading) return null

  return (
    <div className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-black/50 text-white backdrop-blur-sm">
      <div className="flex flex-col items-start rounded-3xl bg-white p-8 text-black shadow-2xl">
        <div className="size-12 animate-spin rounded-full border-4 border-t-transparent"></div>
        <p className="mt-4 text-xl font-medium">กำลังโหลดข้อมูล AI</p>
        <p className="mb-4 text-sm font-light text-gray-600">กรุณารอสักครู่ ขั้นตอนนี้อาจใช้เวลา 1-2 นาที</p>
        <p className="text-xs font-normal text-gray-400">{loadingProgress}%</p>
        <div className="mt-1 h-4 w-64 overflow-hidden rounded-full bg-gray-200 transition-all">
          <div
            className="h-full bg-PED-green transition-all duration-300"
            style={{ width: `${loadingProgress}%` }}
          ></div>
        </div>
      </div>
    </div>
  )
}
