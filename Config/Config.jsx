const Api_Key = "f81980ff410e46f422d64ddf3a56dddd"
const BasicUrl = "https://api.themoviedb.org/3"
const IMGPATH = "https://image.tmdb.org/t/p/original";
const Imagew500 = "http://image.tmdb.org/t/p/w500";
const Unavailable = "https://www.movienewz.com/img/films/poster-holder.jpg";
const noPicture = "https://upload.wikimedia.org/wikipedia/en/6/60/No_Picture.jpg";
const unavailableLandscape = "https://user-images.githubusercontent.com/10515204/56117400-9a911800-5f85-11e9-878b-3f998609a6c8.jpg";

const urlposter = [
    {
        poster: "https://thumbs.dreamstime.com/b/logo-icon-vector-logos-logo-icons-set-social-media-flat-banner-vectors-svg-eps-jpg-jpeg-emblem-wallpaper-background-editorial-208329596.jpg",
        url: "/netflix-logo-animation-2013.mp4",
        webside: "https://www.netflix.com/in/"
    },
    {
        poster: "https://static.wikia.nocookie.net/62e33cab-fde9-49a4-9670-3b05708281cf",
        url: "DisneyIntro.mp4",
        webside: "https://www.hotstar.com/in"
    },
    {
        poster: "https://rukminim2.flixcart.com/image/416/416/jcdoscw0/poster/a/a/h/medium-pl-marvel-studios-new-wall-poster-13-19-inches-original-imafyvfzww6pk7qz.jpeg?q=70",
        url: "/intro-marvel-studios-hd.mp4",
        webside: "https://www.marvel.com/"
    },
    {
        poster: "https://cdn.wallpapersafari.com/44/1/hi3RmI.png",
        url: "/Hulu.mp4",
        webside: "https://www.hulu.com/welcome"
    },
    {
        poster: "https://dci832c741skk.cloudfront.net/assets/files/16951/prime-video-june.800x600.jpg",
        url: "/AmazonPrime.mp4",
        webside: "https://www.primevideo.com/ref=atv_error_404"
    }
]

const DataUrls = {
    fetchTrending: {
        title: "Trending",
        url: `/trending//all/day?api_key=${Api_Key}`
    },
    fetchTopRated: {
        title: "Top Rated",
        url: `/movie/top_rated?api_key=${Api_Key}`
    },
    fetchActionMovie: {
        title: "Action",
        url: `/discover/movie?api_key=${Api_Key}&with_genres=28`
    },
    fetchAdventureMovie: {
        title: "Adventure",
        url: `/discover/movie?api_key=${Api_Key}&with_genres=12`
    },
    fetchAnimation: {
        title: "Animation",
        url: `/discover/movie?api_key=${Api_Key}&with_genres=16`
    },
    fetchComedyMovie: {
        title: "Comedy",
        url: `/discover/movie?api_key=${Api_Key}&with_genres=35`
    },
    fetchCrimeMovie: {
        title: "Crime",
        url: `/discover/movie?api_key=${Api_Key}&with_genres=80`
    },
    fetchDocumentaryMovie: {
        title: "Documentary",
        url: `/discover/movie?api_key=${Api_Key}&with_genres=99`
    },
    fetchDramaMovie: {
        title: "Drama",
        url: `/discover/movie?api_key=${Api_Key}&with_genres=18`
    },
    fetchFamilyMovie: {
        title: "Family",
        url: `/discover/movie?api_key=${Api_Key}&with_genres=10751`
    },
    fetchFantasyMovie: {
        title: "Fantasy",
        url: `/discover/movie?api_key=${Api_Key}&with_genres=14`
    },
    fetchHistoryMovie: {
        title: "History",
        url: `/discover/movie?api_key=${Api_Key}&with_genres=36`
    },
    fetchHorrorMovie: {
        title: "Horror",
        url: `/discover/movie?api_key=${Api_Key}&with_genres=27`
    },
    fetchMusicMovie: {
        title: "Music",
        url: `/discover/movie?api_key=${Api_Key}&with_genres=10402`
    },
    fetchMystery: {
        title: "Mystery",
        url: `/discover/movie?api_key=${Api_Key}&with_genres=9648`
    },
    fetchRomanceMovie: {
        title: "Romance",
        url: `/discover/movie?api_key=${Api_Key}&with_genres=10749`
    },
    fetchSciFi: {
        title: "Sci-Fi",
        url: `/discover/movie?api_key=${Api_Key}&with_genres=878`
    },
    fetchTv: {
        title: "Tv Movie",
        url: `/discover/movie?api_key=${Api_Key}&with_genres=36`
    },
    fetchThrillerMovie: {
        title: "Thriller",
        url: `/discover/movie?api_key=${Api_Key}&with_genres=53`
    },
    fetchWarMovie: {
        title: "War",
        url: `/discover/movie?api_key=${Api_Key}&with_genres=10752`
    },
    fetchWestern: {
        title: "Western",
        url: `/discover/movie?api_key=${Api_Key}&with_genres=37`
    }
}
export {
    BasicUrl,
    IMGPATH,
    Imagew500,
    Unavailable,
    noPicture,
    unavailableLandscape,
    Api_Key,
    urlposter,
    DataUrls
};