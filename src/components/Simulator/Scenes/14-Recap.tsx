import { LinkButton } from "@/components/common/Home/Button"

const InfoSteps = [
  { no: 1, title: "ตรวจสอบสิทธิ์การเลือกตั้ง" },
  { no: 2, title: "จดจำหมายเลขของผู้สมัครรับเลือกตั้งประเภทต่าง ๆ" },
  { no: 3, title: "ตรวจชื่อ-สกุลและจดจำเลขลำดับของตน" },
  { no: 4, title: "แจ้งเลขลำดับของตนเองให้กับเจ้าหน้าที่" },
  {
    no: 5,
    title: "ยื่นหลักฐานแสดงตัวตนให้กับเจ้าหน้าที่",
    description: "(บัตรประชาชน/ใบขับขี่/พาสปอร์ต/บัตรจากแอป ThaiID)",
  },
  { no: 6, title: "ลงลายมือชื่อหรือพิมพ์ลายนิ้วหัวแม่มือ" },
  { no: 7, title: "คุณจะได้บัตรลงคะแนนเสียงมา 2 ใบ เข้าคูหาเพื่อกา" },
  { no: 8, title: "พับบัตรเพื่อหย่อนลงในหีบใส่บัตร", description: "พับให้มิดชิด ห้ามทำสัญลักษณ์" },
  { no: 9, title: "นำบัตรที่พับหย่อนลงในหีบใส่บัตร" },
]

export default function Recap() {
  return (
    <section className="min-h-screen w-full bg-PED-green">
      <div className="mx-auto flex w-full flex-col gap-4 px-4 py-12 md:px-10">
        <div className="mb-4 flex w-full items-end justify-between">
          <h1 className="text-2xl font-medium text-white md:text-3xl">ขั้นตอนการลงคะแนนเสียง</h1>

          <LinkButton link="/" text="เข้าใจแล้ว !" />
        </div>

        <div className="grid grid-cols-1 justify-center gap-6 md:grid-cols-4">
          <div className="grid grid-cols-2 justify-center gap-6 md:col-span-3 md:grid-cols-3">
            {InfoSteps.map((step) => (
              <div
                key={step.no}
                className="flex flex-col items-center justify-center gap-2 rounded-xl bg-white px-6 py-3 text-center shadow-2xl ring-1 ring-PED-purple-secondary/10 transition-all duration-500 ease-out hover:scale-[101%] hover:ring-8"
              >
                <p className="text-xl font-medium text-PED-orange">{step.no}</p>

                <p className="text-lg font-medium text-PED-purple">{step.title}</p>
                {step.description && <p className="text-sm font-light text-PED-purple">{step.description}</p>}
              </div>
            ))}
          </div>

          <div className="mx-auto flex w-full max-w-sm flex-col gap-2 rounded-xl bg-PED-purple-secondary p-6 text-white shadow-2xl ring-1 ring-PED-purple-secondary/10 transition-all duration-500 ease-out hover:scale-[101%] hover:ring-8 md:max-w-full">
            <div className="flex items-center justify-center gap-2 font-medium text-PED-yellow">
              <div className="flex h-8 w-8 items-center justify-center rounded-full bg-PED-orange text-lg font-medium text-white">
                ?
              </div>

              <p className="text-base">กายังไงไม่ให้บัตรเสีย</p>
            </div>

            <div className="mt-3 flex flex-col gap-3 text-sm font-light text-white">
              <p className="font-normal">หลักการทำเครื่องหมายลงบนบัตรเลือกตั้ง</p>

              <ol className="list-decimal">
                <li>
                  ให้ทำเครื่องหมาย <span className="font-medium">กากบาท</span> ลงในช่องที่กำหนดเพียง 1 ช่องเท่านั้น
                </li>
                <li>
                  ห้ามทำเครื่องหมายอื่นหรือเขียนข้อความอื่นนอกจาก <span className="font-medium">กากบาท</span>{" "}
                  ลงบนบัตรเลือกตั้ง
                </li>
              </ol>
            </div>

            <div className="my-4 flex flex-col gap-2">
              <span className="rounded-full bg-PED-green px-1 py-2 text-center text-sm font-normal text-white">
                ตัวอย่างการกากบาทที่ถูกต้อง
              </span>

              <svg
                className="w-full md:-mt-2 md:-mb-8"
                xmlns="http://www.w3.org/2000/svg"
                width="275"
                height="145"
                fill="none"
                viewBox="0 0 275 145"
              >
                <rect width="60" height="60" x="4.342" y="3.746" fill="#fff" rx="6"></rect>
                <rect width="60" height="60" x="74.342" y="3.746" fill="#fff" rx="6"></rect>
                <rect width="60" height="60" x="144.342" y="3.746" fill="#fff" rx="6"></rect>
                <rect width="60" height="60" x="214.342" y="3.746" fill="#fff" rx="6"></rect>
                <path
                  stroke="#000"
                  strokeLinecap="round"
                  strokeWidth="3"
                  d="M61.07 59.817c.593-.415-5.515-7.11-5.696-7.322-7.522-8.78-15.092-17.56-22.835-26.145-6.031-6.688-12.349-12.748-19.525-18.18-1.864-1.41-3.788-3.023-5.976-3.899"
                ></path>
                <path
                  stroke="#000"
                  strokeLinecap="round"
                  strokeWidth="3"
                  d="M63.341 2.504c.408.148-.182.536-.336.687-2.703 2.645-5.461 5.242-8.22 7.827C44.461 20.692 33.862 30.03 22.888 38.96c-6.024 4.903-11.979 10.002-17.477 15.5-1.147 1.147-2.071 2.515-3.254 3.619-.433.404.148.047.337-.028M103.991 2c0 11.597-.445 23.19-.505 34.786-.048 9.363-.431 18.876-2.272 28.082"
                ></path>
                <path
                  stroke="#000"
                  strokeLinecap="round"
                  strokeWidth="3"
                  d="M135.551 33.309c-.694.427-1.682.188-2.441.126-2.29-.188-4.592-.129-6.887-.266-8.507-.51-16.921.645-25.43.645-7.103 0-14.202-.253-21.307-.253-1.121 0-2.474-.16-3.549.253-.274.105-.2.138-.477 0M200.944 10.836c-.874 1.218-1.941 2.004-3.142 2.89-2.493 1.836-4.312 4.017-6.453 6.227-6.917 7.143-15.022 12.837-23.144 18.488-5.376 3.74-10.698 7.841-15.303 12.511-1.562 1.584-3.067 3.678-4.979 4.826"
                ></path>
                <path
                  stroke="#000"
                  strokeLinecap="round"
                  strokeWidth="3"
                  d="M164.334 22.197c4.083 5.028 8.363 9.887 12.399 14.953 1.919 2.407 3.455 5.093 5.274 7.518M246.643 29.27c-2.492 1.804-4.691 3.992-7.294 5.638-1.349.853-2.68 1.558-3.816 2.693M238.311 28.512c3.049 3.811 6.641 7.424 10.351 10.604"
                ></path>
                <rect width="60" height="60" x="4.342" y="84.746" fill="#fff" rx="6"></rect>
                <rect width="60" height="60" x="74.342" y="84.746" fill="#fff" rx="6"></rect>
                <rect width="60" height="60" x="144.342" y="84.746" fill="#fff" rx="6"></rect>
                <rect width="60" height="60" x="214.342" y="84.746" fill="#fff" rx="6"></rect>
                <path
                  stroke="#000"
                  strokeLinecap="round"
                  strokeWidth="3"
                  d="M15.875 99.709c2.912 7.005 4.695 14.414 9.02 20.774 2.84 4.177 7.056 9.634 12.244 10.87 5.13 1.223 9.47-1.851 12.316-5.905 3.41-4.859 4.23-13.077 2.735-18.712-.85-3.205-2.159-6.204-5.905-5.961-3.987.258-7.347 4.358-9.552 7.28-4.222 5.592-7.537 11.793-11.6 17.491-2.358 3.307-4.96 6.348-7.49 9.51M82.164 122.732c.654 3.413.6 6.97 1.644 10.302 1.393 4.451 4.15 2.754 6.685.292 8.437-8.188 18.077-15.04 26.45-23.307 3.342-3.3 12.024-14.33 9.608-10.303M127.209 135.884c-12.667-12.734-24.73-27.118-39.784-37.153M198.557 98.73c-3.985 3.623-9.409 5.883-13.755 9.134-6.017 4.5-11.847 9.238-17.809 13.809-4.562 3.497-9.099 6.645-14.23 9.243-2.129 1.078-4.363 1.935-6.484 2.995"
                ></path>
                <path
                  stroke="#000"
                  strokeLinecap="round"
                  strokeWidth="3"
                  d="M152.197 95.441c10.025 8.038 21.541 14.095 31.966 21.591 6.284 4.519 12.555 9.779 18.011 15.234M153.183 114.84c.49.871.914 1.728 1.316 2.63M260.699 97.086c-8.676 8.675-17.636 17.195-26.066 26.102-4.144 4.379-9.22 8.077-12.988 12.787-.946 1.183 2.171-2.118 3.197-3.233 1.281-1.392 2.675-4.158 4.695-4.603 3.559-.786 5.241 4.064 6.502 6.429M265.631 133.91c-11.307-13.25-23.501-24.944-36.496-36.496"
                ></path>
              </svg>
            </div>

            <div className="my-2 flex flex-col gap-2">
              <span className="rounded-full bg-PED-orange px-3 py-2 text-center text-sm font-normal text-white">
                ตัวอย่างการกากบาทที่ผิด
              </span>

              <svg
                className="w-full md:-mt-2 md:-mb-8"
                xmlns="http://www.w3.org/2000/svg"
                width="270"
                height="141"
                fill="none"
                viewBox="0 0 270 141"
              >
                <rect width="60" height="60" fill="#fff" rx="6"></rect>
                <rect width="60" height="60" x="70" fill="#fff" rx="6"></rect>
                <rect width="60" height="60" x="140" fill="#fff" rx="6"></rect>
                <rect width="60" height="60" x="210" fill="#fff" rx="6"></rect>
                <path
                  stroke="#000"
                  strokeLinecap="round"
                  strokeWidth="3"
                  d="M11.41 16.695C6.248 19.548 4 24.595 4 30.355c0 3.919 1.244 8.056 2.938 11.564.289.598.858 1.43 1.44 1.721M50.207 16c1.364 1.091 1.94 3.088 2.77 4.603 1.673 3.055 2.827 5.696 2.806 9.244-.026 4.56-1.458 10.077-4.229 13.772M41.815 17c-7.367 7.326-15.057 14.313-22.454 21.593-1.491 1.468-2.904 3.011-4.154 4.678M42.826 40.577C35.48 32.677 28.479 24.046 20.259 17M85.977 44.284c3.196-5.845 5.955-11.903 8.795-17.926 1.337-2.837 2.652-5.673 3.854-8.57.399-.96.727-2.197 1.366-3.05 3.36-4.48 6.645 12.834 7.055 14.24 1.121 3.843 3.049 7.275 5.071 10.703.734 1.245 2.52 4.4-.487 2.77-3.047-1.653-5.562-4.154-8.589-5.876-4.469-2.543-8.786-3.846-13.66-5.165-2.07-.56-4.54-1.343-6.343-2.544-.473-.316 3.457-.822 4.005-.973 8.974-2.48 16.688-8.696 26.14-9.73.417-.046 4.176-.707 4.061.392-.086.81-1.136 1.472-1.666 1.89-1.939 1.531-4.002 2.896-5.95 4.416-7.325 5.716-15.283 12.387-20.62 20.097M186.692 15.031C174.589 23.724 163.226 32.921 152 42.65"
                ></path>
                <path
                  stroke="#000"
                  strokeLinecap="round"
                  strokeWidth="3"
                  d="M187.029 45.009c-8.193-5.984-15.346-13.124-22.866-19.91-3.292-2.97-6.38-6.705-10.142-9.056M169.178 12c0 11.902-.674 23.791-.674 35.702M260.417 42.965c-9.631-5.842-19.152-11.866-28.797-17.683-3.927-2.368-7.613-5.055-11.62-7.241"
                ></path>
                <path
                  stroke="#000"
                  strokeLinecap="round"
                  strokeWidth="3"
                  d="M236.167 14c-2.427 6.472-6.269 12.065-9.056 18.337-1.225 2.755-1.97 5.71-2.732 8.608M250.65 17.703c-4.413 9.793-8.667 19.692-13.473 29.303"
                ></path>
                <rect width="60" height="60" y="81" fill="#fff" rx="6"></rect>
                <rect width="60" height="60" x="70" y="81" fill="#fff" rx="6"></rect>
                <rect width="60" height="60" x="140" y="81" fill="#fff" rx="6"></rect>
                <rect width="60" height="60" x="210" y="81" fill="#fff" rx="6"></rect>
                <path
                  stroke="#000"
                  strokeLinecap="round"
                  strokeWidth="3"
                  d="M19 110.493c.333 3.996.191 8.004.524 11.995.066.797.025 3.212 1.03 3.648 1.04.453 2.73-3.152 2.993-3.555C29.469 113.528 36.813 104.937 41.23 95M93.82 99.824c-4.553 7.548-9.194 15.178-14.483 22.23"
                ></path>
                <path
                  stroke="#000"
                  strokeLinecap="round"
                  strokeWidth="3"
                  d="M79 101.508c4.53 4.303 7.836 9.796 11.676 14.689 1.826 2.326 3.84 4.556 5.165 7.204M120.928 100.357c-4.852 6.599-9.302 13.602-13.584 20.583-.389.635-.946 1.984-1.572 1.984M106.109 98c5.279 8.85 10.184 17.99 15.83 26.608M163 118.35c1.06-4.452 3.505-8.241 5.688-12.2.159-.287 1.632-4.334 2.395-2.807.95 1.9 5.191 16.216 6.4 15.007M240.352 110.651c.049-1.191.703-1.076.935 0 .278 1.282-.966 3.18-2.395 2.133-2.771-2.032 2.968-4.993 1.984-1.984-1.489 4.553-4.308-.945-2.002-1.646 3.65-1.111 2.855 4.206.131 2.844"
                ></path>
              </svg>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
