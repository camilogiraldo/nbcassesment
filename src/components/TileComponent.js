import { TileBadge } from './TileBadge.js'

export const TileComponent = 
    ({data}) => `
        <div class="tile">
            <article class="tile__content">
                <div class="tile__content__thumbnail">
                    ${TileBadge(data)}
                    <img src="${data.image}" alt="${data.title}"/>
                </div>
                <div class="tile__metadata">
                    <div class="tile__metadata__title">${data.title}</div>
                    <div class="tile__metadata__info">${data.secondaryTitle}</div>
                </div>
            </article>
        </div>
    `