export function isAbleToVote(birthDate: string) {
  const ageThresholdDate = "2548-05-14"

  return birthDate <= ageThresholdDate
}
