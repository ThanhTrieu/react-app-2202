import axios from 'axios';

const getDataMovieById = async (id, lang = 'en-US') => {
    const url = `https://api.themoviedb.org/3/movie/${id}?api_key=0aecc06bb4fadb06b5f071fef0c2ce6d&language=${lang}&append_to_response=videos,images&include_image_language=en,null`;
    const response = await axios.get(url);
    const result = response.status === 200 ? response.data : {};
    return result;
}

const getDataUpcomingMovies = async (page = 1, lang = 'en-US') => {
    const date = new Date();
    const timeDate = new Date();

    let toDate = date.getDate();
    toDate = toDate < 10 ? '0'+toDate : toDate; // 01 - 02 ... 09

    let month = date.getMonth() + 1;
    month = month < 10 ? '0'+month : month; // 01 ... 09

    let year = date.getFullYear();

    let currentDay = `${year}-${month}-${toDate}`; // ngay thang hien tai
    
    // bang ngay hien tai cong them 3 thang
    timeDate.setTime(date.getTime() + (129600 * 60 * 1000));

    let toDate2 = timeDate.getDate();
    toDate2 = toDate2 < 10 ? '0'+toDate2 : toDate2; // lay ra ngay cua 3 thang sau do

    let month2 = timeDate.getMonth() + 1;
    month2 = month2 < 10 ? '0'+month2 : month2; // lay ra thang cua 3 thang sau do

    let year2 = timeDate.getFullYear();

    let nextDay = `${year2}-${month2}-${toDate2}`; 

    const url = `https://api.themoviedb.org/3/discover/movie?api_key=0aecc06bb4fadb06b5f071fef0c2ce6d&language=${lang}&region=US&sort_by=popularity.desc&include_adult=false&include_video=false&page=${page}&release_date.gte=${currentDay}&release_date.lte=${nextDay}&with_release_type=3|2`;

    const response = await axios.get(url);
    const result   = response.status === 200 ? response.data : {};
    return result;
}

export const api = {
    getDataUpcomingMovies,
    getDataMovieById
}