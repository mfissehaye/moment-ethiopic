import makeMoment from '../create/make-moment'

export default (config, utc) => {
    let len = config._f.length
    let scoreToBeat, bestMoment

    if (len === 0) {
        return makeMoment(new Date(NaN))
    }

    config._f.forEach((format, i) => {
        let currentScore = 0
        let tempMoment = makeMoment(config._i, format, config._l, utc)

        if (!tempMoment.isValid()) return

        currentScore += tempMoment._eDiff

        if (tempMoment._i1) {
            currentScore += tempMoment._i1.length
        }

        if (scoreToBeat == null || currentScore < scoreToBeat) {
            scoreToBeat = currentScore
            bestMoment = tempMoment
        }
    })

    return bestMoment
}