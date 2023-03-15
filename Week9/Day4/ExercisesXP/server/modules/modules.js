const pexels = require('pexels');

const client = pexels.createClient('Rds6lA0mV8Rot3bB88ivXyl3DuPH4W0gbdKPXh2hiOQAxD3HZnqoy9xz');

const pictures = (category) => {
    const query = category;
    return (
        client.photos.search({ query, per_page: 28 })
        .then(photos => photos)
        .catch(err => err)
    )

}

module.exports = {pictures};