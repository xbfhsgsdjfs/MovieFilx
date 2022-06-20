import axios from "axios";
import { useEffect, useState } from "react";
import Slider from "react-slick/lib/slider";
import StarsRating from "stars-rating";
import ModalVideo from "react-modal-video";
import { IMGPATH } from "../Config/Config";
import { BannerSetting } from "../setting/setting";
import { useRouter } from "next/router";

const Banner = ({ Data, media_type }) => {
    const [key, setkey] = useState([])
    const [isOpen, setOpenModal] = useState(false);
    const router = useRouter()
    function handelVideo(e) {
        e.preventDefault();
        fetch(`https://api.themoviedb.org/3/${e.target.lastChild.className}/${e.target.lastChild.id}/videos?api_key=f81980ff410e46f422d64ddf3a56dddd&language=en-US`).then((res) => res.json()).then((e) => {
            setkey(e.results.length == 0 ? null : e.results[0].key);
            setOpenModal(true)
        })
    }
    return (
        <>
            {key == null ? null :
                process.browser && <ModalVideo channel='youtube' autoplay isOpen={isOpen} videoId={key} onClose={() => setOpenModal(false)} />}
            <Slider {...BannerSetting}>
                {Data.map((e) => (
                    <div class="hero-slide-item">
                        <img className="object-contain w-96" src={IMGPATH
                            + e.backdrop_path} alt="" />
                        <div class="overlay"></div>
                        <div class="hero-slide-item-content">
                            <div class="item-content-wraper">
                                <div class="item-content-title top-down">
                                    {e.title || e.name}
                                </div>
                                <div class="movie-infos top-down delay-2">
                                    <div class="movie-info">
                                        <StarsRating
                                            count={5}
                                            edit={false}
                                            value={e.vote_average ? e.vote_average / 2 : 3}
                                            size={20}
                                            color2={'#F1D045'} />
                                    </div>
                                </div>
                                <div class="item-content-description top-down delay-4">
                                    {e.overview}
                                </div>
                                <div className="flex">
                                    <div class="item-action top-down delay-6" >
                                        <a class="btn btn-hover" onClick={handelVideo}>
                                            {/* <i class="bx bxs-right-arrow"></i> */}
                                            <span id={e.id} className={media_type ? media_type : e.media_type} >Watch now</span>
                                        </a>
                                    </div>
                                    <div class="item-action top-down delay-6" onClick={e.media_type === "movie" || media_type == "movie" ? () => router.push(`/Details/${e.id}?page=movie`) : () => router.push(`/Details/${e.id}?page=tv`)}>
                                        <a class="btn btn-right-hover">
                                            <i class="bx bxs-left-arrow"></i>
                                            <span  >More Details</span>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </Slider>
        </>
    );
}

export default Banner;