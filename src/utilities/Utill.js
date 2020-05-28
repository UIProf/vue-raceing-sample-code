export const reformateRaceData = (obj) => {
  const raceObj = []
  Object.keys(obj).forEach(key => {
    raceObj.push(obj[key])
  })

  return raceObj
}
