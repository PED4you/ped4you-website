export interface UserData {
  startDate: Date
  name: string
  title: string
  birthdate: string
  province: string
  district: string
  subdistrict: string
  votingDistrict: VotingDistrict
  regionVote: RegionVote
  partylistVote: PartyListVote
  referendumVote: ReferendumVote
}

export interface VotingDistrict {
  id: string
  province: string
  code: string
  districts: {
    name: string
    votingDistrict: string
  }[]
  candidates: {
    no: string
    electionType: string
    voteingDistrict: string
    candidate: string
    party: string
  }[]
}

export interface RegionVote {
  no: string
  party: string
  candidate: string
}

export interface PartyListVote {
  no: string
  party: string
}

export interface ReferendumVote {
  choice: "approve" | "disapprove" | "abstain" | null
}
