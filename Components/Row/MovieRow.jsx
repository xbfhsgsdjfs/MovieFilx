import Slider from "react-slick/lib/slider";
import StarsRating from 'stars-rating'
import { IMGPATH, Unavailable } from "../../Config/Config";
import { useRouter } from "next/dist/client/router";
import { useEffect, useState } from "react";
const MovieRow = ({ Data, title, media_type, pages, url }) => {
    const router = useRouter()
    const [MovieRows, SetMovieRow] = useState([])
    let loaded = false;
    const [page, SetPage] = useState(pages);
    const MovieLatestmovie = {
        infinite: false,
        speed: 1500,
        slidesToShow: 7,
        slidesToScroll: 7,
        initialSlide: 0,
        arrows: true,
        afterChange: (current) => GetCurrentPosition(current + 7),
        responsive: [
            {
                breakpoint: 1300,
                settings: {
                    slidesToShow: 5,
                    slidesToScroll: 5,
                    arrows: true,
                    afterChange: (current) => GetCurrentPosition(current + 5),
                },
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    initialSlide: 2,
                    arrows: true,
                    afterChange: (current) => GetCurrentPosition(current + 3),
                },
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    arrows: true,
                    afterChange: (current) => GetCurrentPosition(current + 3),
                },
            },
        ],
    };

    function GetCurrentPosition(Current) {
        if (MovieRows.length === Current) {
            getMoreCarouselData();
        }
    }

    async function getMoreCarouselData() {
        if (loaded === true) {
            return "";
        }
        const result = await fetch(`${url}&page=${page}`).then((res) => res.json())
        if (result && result.results && result.results.length === 0) {
            loaded = true;
        } else {
            SetMovieRow([...MovieRows, ...result.results]);
            SetPage(page + 1);
        }
    }

    async function getMoreData() {
        const result = await fetch(`https://api.themoviedb.org/3/discover/${media_type}?api_key=f81980ff410e46f422d64ddf3a56dddd&language=en-US&page=1`).then((res) => res.json())
        if (result && result.results && result.results.length != 0) {
            SetMovieRow(result.results);
        }
    }

    useEffect(() => {
        if (Data.length == 0) {
            getMoreData()
        } else if (MovieRows.length === 0 && Data.length > 0) {
            SetMovieRow(Data)
        }
    })
    return (
        <>
            <div className="section" id="section">
                <div className="container">
                    <div className="section-header">
                        {title}
                    </div>
                    <Slider {...MovieLatestmovie}>
                        {MovieRows.map((e) => (
                            <div className="movie-item" onClick={e.media_type === "movie" || media_type == "movie" ? () => router.push(`/Details/${e.id}?page=movie`) : () => router.push(`/Details/${e.id}?page=tv`)}>
                                <img src={e.poster_path ? IMGPATH + e.poster_path : Unavailable} alt="" />
                                <div className="movie-item-content">
                                    <div className="movie-item-title">
                                        {e.name || e.original_title || e.title}
                                    </div>
                                    <div class="movie-infos">
                                        <div class="movie-info">
                                            <StarsRating
                                                count={5}
                                                edit={false}
                                                value={e.vote_average / 2}
                                                size={20}
                                                color2={Math.round(e.vote_average / 2) == 5 ? '#F1D045' :
                                                    Math.round(e.vote_average / 2) == 4 ? '#F1B345' :
                                                        Math.round(e.vote_average / 2) == 3 ? '#F1A545' :
                                                            Math.round(e.vote_average / 2) == 2 ? '#d17a00' : '#F17A45'} />
                                        </div>
                                        <div class="movie-info">
                                            <span>{e.original_language}</span>
                                        </div>
                                        <div class="movie-info">
                                            <span>{e.release_date || e.first_air_date}</span>
                                        </div>
                                    </div>
                                </div>
                            </div>))}
                    </Slider>
                </div>
            </div>
        </>
    );
}

export default MovieRow;