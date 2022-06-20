import Slider from "react-slick/lib/slider";
import StarsRating from "stars-rating";
import { IMGPATH, Unavailable } from "../../Config/Config";
import { MovieLatestmovie } from "../../setting/setting";
import { useRouter } from "next/dist/client/router";

const SearchRow = ({ Data, title, media_type }) => {
    const router = useRouter()
    return (
        <>
            <div className="section" id="section">
                <div className="container">
                    <div className="section-header">
                        {title}
                    </div>
                    <Slider {...MovieLatestmovie}>
                        {Data.map((e) => (
                            <div className="movie-item" onClick={e.media_type === "movie" || media_type == "movie" ? () => router.push(`/Details/${e.id}?page=movie`) : () => router.push(`/Details/${e.id}?page=tv`)}>
                                <img src={e.poster_path ? IMGPATH + e.poster_path : Unavailable} alt="" />
                                <div className="movie-item-content">
                                    <div className="movie-item-title">
                                        {e.name || e.title}
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

export default SearchRow;