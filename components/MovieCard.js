export function createMovieCard(title, description, imageUrl, watchUrl, downloadUrl) {
    return `
        <article class="movie-card">
            <a href="${watchUrl}" target="_blank" class="movie-link">
                <img src="${imageUrl}" alt="${title}">
                <h2>${title}</h2>
                <p>${description}</p>
            </a>
            <a href="${downloadUrl}" class="download-btn" download>
                Download Movie
            </a>
        </article>
    `;
}