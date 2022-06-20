import Banner from "../Components/Banner";
import { useEffect, useState } from "react";
import FetchData from "../Components/Row/FetchData";
import MovieWebSite from "../Components/MovieWebsite";
import BannerMovieRow from "../Components/Row/BannerMovieRow";
import { Api_Key, BasicUrl, DataUrls } from "../Config/Config";

const index = ({ Name }) => {
    const [BannerUrl, SetBannerUrl] = useState([])
    const [Loader, setLoader] = useState(false)
    useEffect(() => {
        setLoader(true)
        fetch(`${BasicUrl}/trending/all/day?api_key=${Api_Key}&language=en-US&page=1`).then((res) => res.json()).then((e) => {
            SetBannerUrl(e.results)
            setLoader(false)
        })
    }, [])
    return (
        Loader ? <div className="loader"></div> :
            <>
                <Banner Data={BannerUrl} media_type={Name} />
                <BannerMovieRow Data={BannerUrl} />
                <MovieWebSite />
                <FetchData page={1} media={"movie"} Title={DataUrls.fetchActionMovie.title} URlS={BasicUrl + DataUrls.fetchActionMovie.url} />
                <FetchData page={1} media={"movie"} Title={DataUrls.fetchAdventureMovie.title} URlS={BasicUrl + DataUrls.fetchAdventureMovie.url} />
                <FetchData page={1} media={"movie"} Title={DataUrls.fetchAnimation.title} URlS={BasicUrl + DataUrls.fetchAnimation.url} />
                <FetchData page={1} media={"movie"} Title={DataUrls.fetchComedyMovie.title} URlS={BasicUrl + DataUrls.fetchComedyMovie.url} />
                <FetchData page={1} media={"movie"} Title={DataUrls.fetchCrimeMovie.title} URlS={BasicUrl + DataUrls.fetchCrimeMovie.url} />
                <FetchData page={1} media={"movie"} Title={DataUrls.fetchDocumentaryMovie.title} URlS={BasicUrl + DataUrls.fetchDocumentaryMovie.url} />
                <FetchData page={1} media={"movie"} Title={DataUrls.fetchDramaMovie.title} URlS={BasicUrl + DataUrls.fetchDramaMovie.url} />
                <FetchData page={1} media={"movie"} Title={DataUrls.fetchFamilyMovie.title} URlS={BasicUrl + DataUrls.fetchFamilyMovie.url} />
                <FetchData page={1} media={"movie"} Title={DataUrls.fetchFantasyMovie.title} URlS={BasicUrl + DataUrls.fetchFantasyMovie.url} />
                <FetchData page={1} media={"movie"} Title={DataUrls.fetchHistoryMovie.title} URlS={BasicUrl + DataUrls.fetchHistoryMovie.url} />
                <FetchData page={1} media={"movie"} Title={DataUrls.fetchHorrorMovie.title} URlS={BasicUrl + DataUrls.fetchHorrorMovie.url} />
                <FetchData page={1} media={"movie"} Title={DataUrls.fetchMusicMovie.title} URlS={BasicUrl + DataUrls.fetchMusicMovie.url} />
            </>
    );
}

export default index;