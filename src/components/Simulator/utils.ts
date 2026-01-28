import ElectionData from "@/data/data_new.json"
const ProvinceData = ElectionData.provinces

import { VotingDistrict } from "./types"

export function isAbleToVote(birthDate: string) {
  const ageThresholdDate = "2551-02-08"

  return birthDate <= ageThresholdDate
}

export function getVotingDistrict(province: string, district: string, subDistrict: string) {
  // search voting district from location data
  return (
    ProvinceData.find((p) => p.name === province)
      ?.districts.find((d) => d.name === district)
      ?.subdistricts.find((s) => s.name === subDistrict)?.votingDistricts[0].code ?? ""
  )
}

export function getDistrictData(votingDistrict: string): VotingDistrict {
  const [province, _order] = votingDistrict.split(".")
  const order = `${+_order}`

  // districts
  const allVotingDistricts =
    ProvinceData.find((p) => p.name === province)
      ?.districts.map((d) => {
        const subDistricts = d.subdistricts
          .filter((s) => s.votingDistricts[0].code === votingDistrict)
          .map((s) => ({ name: s.name, votingDistrict: s.votingDistricts[0].code }))

        return subDistricts
      })
      .flat() ?? []

  // candidates
  const allCandidates: {
    no: string
    electionType: string
    voteingDistrict: string
    candidate: string
    party: string
  }[] = ElectionData.votables
    .filter((c) => c.voteingDistrict === votingDistrict)
    .map((c) => {
      const party = ElectionData.candidates.find((p) => p.name === c.candidate)?.party ?? ""
      return { ...c, party }
    })

  return {
    id: votingDistrict,
    province,
    code: order,
    districts: allVotingDistricts,
    candidates: allCandidates.sort((a, b) => +a.no - +b.no),
  }
}

export function getPartyList() {
  return ElectionData.votables
    .filter((c) => c.electionType === "สส.บัญชีรายชื่อ")
    .map((c) => {
      return {
        no: c.no,
        party: c.party,
      }
    })
}

export function chunkArray<T>(array: T[], columns = 4): [T[][], number] {
  // chunk array to 2d array
  const chunkedArray = []
  const maxLength = Math.ceil(array.length / columns)
  // const maxLength = 6

  for (let i = 0; i < columns; i++) {
    chunkedArray.push(array.slice(i * maxLength, (i + 1) * maxLength))
  }

  return [chunkedArray, maxLength]
}

export function formatDate(date: Date) {
  return {
    year: date.getFullYear(),
    month: date.getMonth() + 1,
    thMonth: date.toLocaleString("th-TH", { month: "long" }),
    date: date.getDate(),
    "hh-mm": `${String(date.getHours()).padStart(2, "0")}:${String(date.getMinutes()).padStart(2, "0")}`,
  }
}
