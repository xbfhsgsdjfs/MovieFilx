import Slider from "react-slick/lib/slider";
import StarsRating from 'stars-rating'
import { IMGPATH, Unavailable, unavailableLandscape } from "../../Config/Config";
import { useRouter } from "next/dist/client/router";
import { useEffect, useState } from "react";
const Hindimovie = ({ Data, title, media_type, pages, url }) => {
    const router = useRouter()
    const [MovieRows, SetMovieRow] = useState([])
    let loaded = false;
    const [page, SetPage] = useState(pages);
    const MovieLatestmovie = {
        infinite: false,
        speed: 1500,
        adaptiveHeight: true,
        slidesToShow: 4,
        slidesToScroll: 4,
        initialSlide: 0,
        arrows: true,
        afterChange: (current) => GetCurrentPosition(current + 4),
        responsive: [
            {
                breakpoint: 1300,
                settings: {
                    slidesToShow: 5,
                    slidesToScroll: 3,
                    arrows: true,
                    afterChange: (current) => GetCurrentPosition(current + 3),
                },
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 2,
                    initialSlide: 2,
                    arrows: true,
                    afterChange: (current) => GetCurrentPosition(current + 2),
                },
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 2,
                    arrows: true,
                    afterChange: (current) => GetCurrentPosition(current + 2),
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
        if (Data.length === 0) {
            getMoreData()
        } else if (MovieRows.length === 0 && Data.length > 0) {
            SetMovieRow(Data)
        }
    })
    return (
        <>
            <div className="mx-9">
                <div className="section-header">
                    {title}
                </div>
                <Slider {...MovieLatestmovie}>
                    {MovieRows.map((e) => (
                        <div className="HoverEffect cursor-pointer" onClick={e.media_type === "movie" || media_type == "movie" ? () => router.push(`/Details/${e.id}?page=movie`) : () => router.push(`/Details/${e.id}?page=tv`)}>
                            <img className="p-1" src={e.backdrop_path ? IMGPATH + "/" + e.backdrop_path : unavailableLandscape} width="100%" height="100%"/>
                            <div className="Title">
                                <div style={{
                                    display: "flex",
                                    justifyContent: "center",
                                    marginLeft: "40px"
                                }}>
                                    <div className="text-[white] font-bold text-lg" style={{
                                        position: "fixed",
                                        bottom: "10px",
                                        left: "30px",
                                        fontWeight: "bold"
                                    }}>
                                        <h1 >{e.name || e.original_name || e.title}</h1>
                                        <div className="flex">
                                            <StarsRating
                                                count={5}
                                                edit={false}
                                                value={e.vote_average / 2}
                                                size={20}
                                                color2={Math.round(e.vote_average / 2) == 5 ? '#F1D045' :
                                                    Math.round(e.vote_average / 2) == 4 ? '#F1B345' :
                                                        Math.round(e.vote_average / 2) == 3 ? '#F1A545' :
                                                            Math.round(e.vote_average / 2) == 2 ? '#d17a00' : '#F17A45'} />
                                            <span className="pl-5">{e.original_language}</span>
                                            <span className="pl-5">{e.release_date || e.first_air_date}</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>))}
                </Slider>
            </div>
        </>
    );
}

export default Hindimovie;