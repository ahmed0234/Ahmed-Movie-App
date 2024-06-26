
/* eslint-disable */

export  default  {
    fetchPopular:{
        title: "Popular",
        url: `/movie/popular?api_key=${process.env.API_KEY}&language=en-US&page=1`
    },
    fetchTrending:{
        title:'Trending',
        url:`/trending/all/week?api_key=${process.env.API_KEY}&language=en=us`
    },
    fetchNetFlixOriginals:{
        title:'NetFlixOriginals',
        url:`/discover/tv?api_key=${process.env.API_KEY}&with_networks=213`
    },
    fetchTopRated: {
        title:'TopRated',
        url:`/movie/top_rated?api_key=${process.env.API_KEY}&language=en-US&page=1`
    },
    fetchAction:{
        title:'Action',
        url:`/discover/movie?api_key=${process.env.API_KEY}&with_genres=28`
    },
    fetchComedy:{
        title:'Comedy',
        url:`/discover/movie?api_key=${process.env.API_KEY}&with_genres=35`
    },
    fetchHorror:{
        title:'Horror',
        url:`/discover/movie?api_key=${process.env.API_KEY}&with_genres=27`
    },
    fetchDocumentaries:{
        title:'Documentaries',
        url:`/discover/movie?api_key=${process.env.API_KEY}&with_genres=99`
    },

    fetchRomance:{
        title:'Romance',
        url:`/discover/movie?api_key=${process.env.API_KEY}&with_genres=10749`
    },
    fetchWar:{
        title:'War',
        url:`/discover/movie?api_key=${process.env.API_KEY}&with_genres=10752`
    },
    APIKEY: process.env.API_KEY

}

