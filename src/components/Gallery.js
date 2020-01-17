import { TileComponent } from './TileComponent.js'

export const Gallery = ( items ) => {
    const tiles = items.map(item =>TileComponent(item)).join('');

    return `
        <div class="gallery">
            <h1 class="gallery__header">RECENTLY ADDED</h1>
            <div class="gallery__tiles">
                ${tiles}
            </div>
        </div>
    `
}