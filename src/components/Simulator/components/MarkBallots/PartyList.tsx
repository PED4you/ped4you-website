import Image from "next/image"
import { Fragment } from "react"
import { usePage } from "../../PageProvider"
import { PartyListVote, RegionVote } from "../../types"
import { chunkArray, getPartyList } from "../../utils"

function PartyListElectionSquare({ party, onClick }: { party: PartyListVote; onClick: () => void }) {
  return (
    <>
      <div className="flex items-center justify-center border border-black bg-black p-2 text-white">
        <p className="text-center text-lg font-semibold">{party.no}</p>
      </div>

      <div className="flex items-center justify-center border border-black bg-white p-2 text-black">
        <Image src={`/images/simulator/party/${party.party}.png`} alt={party.party} width={50} height={50} />
      </div>

      <div className="col-span-3 flex items-center justify-center border border-black bg-white p-2 text-black">
        <p className="text-center text-sm font-semibold">พรรค{party.party}</p>
      </div>

      <button
        onClick={() => onClick()}
        className="flex items-center justify-center border border-black bg-white p-2 text-black transition-colors duration-500 ease-out hover:bg-PED-orange-secondary"
      ></button>
    </>
  )
}

export default function PartyListBallot({ nextPage }: { nextPage: () => void }) {
  const { userData, setUserData } = usePage()
  const partyListCandidates = getPartyList()

  return (
    <div className="flex min-h-[32rem] flex-col items-center justify-between gap-4 bg-gradient-to-br from-[#59CD90] to-[#2D936C]">
      <div className="flex flex-col items-center gap-4 py-4 text-center">
        <p>
          บัตรเลือกตั้งสมาชิกสภาผู้แทนราษฎรแบบแบ่งเขตเลือกตั้ง
          <br />
          ให้ทำเครื่องหมาย “X” ภายใน “ช่องทำเครื่องหมาย” ไม่เกินหนึ่งหมายเลข
        </p>
      </div>

      <div className="grid max-h-96 grid-cols-6 gap-2 overflow-y-auto px-10">
        <div className="flex items-center justify-center border border-black bg-white p-2">
          <p className="text-center text-sm font-light">หมายเลขฯ</p>
        </div>
        <div className="flex items-center justify-center border border-black bg-white p-2">
          <p className="text-center text-sm font-light">สัญลักษณ์</p>
        </div>
        <div className="col-span-3 flex items-center justify-center border border-black bg-white p-2">
          <p className="text-center text-sm font-light">ชื่อพรรคการเมือง</p>
        </div>
        <div className="flex items-center justify-center border border-black bg-white p-2">
          <svg width="44" height="49" viewBox="0 0 44 49" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M36.0912 0H7.92203V27.7003H0.0509033L22.0066 48.8271L43.9622 27.7003H36.0912V0Z"
              fill="#59CD90"
            />
          </svg>
        </div>
        {partyListCandidates.map((party, i) => {
          return (
            <Fragment key={party.no}>
              <PartyListElectionSquare
                onClick={() => {
                  setUserData({ ...userData, partylistVote: party })
                  nextPage()
                }}
                party={party}
              />
            </Fragment>
          )
        })}
      </div>

      <div className="flex w-full items-center justify-center gap-6 bg-[#2D936C] p-6 text-white">
        <p className="text-center text-sm font-light">
          ถ้าประสงค์ออกเสียงลงคะแนน “ไม่เลือกผู้สมัครผู้ใด”
          <br />
          ให้ทำเครื่องหมายกากบาท “X” ในช่องสี่เหลี่ยมนี้
        </p>

        <div className="flex items-center gap-4">
          <svg width="36" height="31" viewBox="0 0 36 31" fill="none" xmlns="http://www.w3.org/2000/svg">
            <mask id="path-1-inside-1_185_191" fill="white">
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M0.678649 5.54633L0.67865 25.3965L20.198 25.3965L20.198 30.9434L35.0856 15.4717L20.198 2.2035e-05L20.198 5.54633L0.678649 5.54633Z"
              />
            </mask>
            <path
              d="M0.67865 25.3965L-0.0213503 25.3965L-0.0213503 26.0965L0.67865 26.0965L0.67865 25.3965ZM0.678649 5.54633L0.678649 4.84633L-0.0213512 4.84633L-0.0213512 5.54633L0.678649 5.54633ZM20.198 25.3965L20.898 25.3965L20.898 24.6965L20.198 24.6965L20.198 25.3965ZM20.198 30.9434L19.498 30.9434L19.498 32.6804L20.7024 31.4287L20.198 30.9434ZM35.0856 15.4717L35.59 15.9571L36.057 15.4717L35.59 14.9863L35.0856 15.4717ZM20.198 2.2035e-05L20.7024 -0.485341L19.498 -1.73699L19.498 2.20656e-05L20.198 2.2035e-05ZM20.198 5.54633L20.198 6.24633L20.898 6.24633L20.898 5.54633L20.198 5.54633ZM1.37865 25.3965L1.37865 5.54633L-0.0213512 5.54633L-0.0213503 25.3965L1.37865 25.3965ZM20.198 24.6965L0.67865 24.6965L0.67865 26.0965L20.198 26.0965L20.198 24.6965ZM20.898 30.9434L20.898 25.3965L19.498 25.3965L19.498 30.9434L20.898 30.9434ZM34.5812 14.9863L19.6936 30.458L20.7024 31.4287L35.59 15.9571L34.5812 14.9863ZM19.6936 0.485385L34.5812 15.9571L35.59 14.9863L20.7024 -0.485341L19.6936 0.485385ZM20.898 5.54633L20.898 2.20044e-05L19.498 2.20656e-05L19.498 5.54633L20.898 5.54633ZM0.678649 6.24633L20.198 6.24633L20.198 4.84633L0.678649 4.84633L0.678649 6.24633Z"
              fill="white"
              mask="url(#path-1-inside-1_185_191)"
            />
          </svg>

          <button
            onClick={() => {
              setUserData({
                ...userData,
                partylistVote: {
                  no: "X",
                  party: "ไม่เลือกผู้สมัครผู้ใด",
                },
              })
              nextPage()
            }}
            className="flex h-12 w-12 items-center justify-center border border-black bg-white p-2 text-black transition-colors duration-500 ease-out hover:bg-PED-orange-secondary"
          ></button>
        </div>
      </div>
    </div>
  )
}
