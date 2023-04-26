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
