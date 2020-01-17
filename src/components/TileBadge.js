import dateDifference from './utils/dateDifference.js'

export const TileBadge = ({airDate, episodeNumber}) => {
    if (episodeNumber  == '1') return `<div class="tile__badge">PREMIERE</div>`
    if (dateDifference(airDate) <= 7) return `<div class="tile__badge">NEW</div>`
    return ''
}