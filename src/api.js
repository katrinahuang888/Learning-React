import axios from 'axios';

const searchImages = async (term) => {
    const response = await axios.get('https://api.unsplash.com/search/photos', {
        headers: {
            Authorization: 'Client-ID cqwnm31FKoR2hY4Nyp4ciLy_7yPvchwdhHae-hbn0Yg',
        },
        params: {
            query: term,
        }
    });

    return response.data.results;
};

export default searchImages;