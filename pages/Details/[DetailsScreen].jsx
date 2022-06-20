import { useEffect, useState } from "react";
import Player from "../../Components/Player";
import DetailsData from "../../Components/Details";
import SearchRow from "../../Components/Row/SearchRow";
import { Api_Key, BasicUrl, IMGPATH, unavailableLandscape } from "../../Config/Config";

const VideoPlayer = ({ id, Name }) => {
    const [Details, SetDetails] = useState([])
    const [CastRow, SetCastRow] = useState([])
    const [Video, SetVideo] = useState([])
    const [similar, Setsimilar] = useState([])

    function Moviedata() {
        fetch(`${BasicUrl}/${id}/${Name}/similar?api_key=${Api_Key}&language=en-US&page=1`).then((res) => res.json()).then((e) => {
            Setsimilar(e.results)
        })
    }
    Moviedata()
    useEffect(() => {
        fetch(`${BasicUrl}/${id}/${Name}?api_key=${Api_Key}`).then((res) => res.json()).then((e) => {
            SetDetails(e)
            console.log(e.seasons);
        })
        fetch(`${BasicUrl}/${id}/${Name}/credits?api_key=${Api_Key}`).then((res) => res.json()).then((e) => {
            SetCastRow(e.cast)
        })
        fetch(`${BasicUrl}/${id}/${Name}/videos?api_key=${Api_Key}`).then((res) => res.json()).then((e) => {
            SetVideo(e.results)
        })
    }, [id, Name])
    return (
        <>
            <header
                style={{
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    backgroundImage: `url(${Details.backdrop_path ? IMGPATH + "/" + Details.backdrop_path : unavailableLandscape})`,
                    color: "#CCC",
                    height: "100vh"
                }}>
                <div>
                    <DetailsData DetailsData={Details} genres={Details.genres} number={175} CastDatas={CastRow} />
                    <div className="fadeBottom"></div>
                    <div className="-mt-36">
                        <Player VideoData={Video} />
                        <SearchRow Data={similar} title={"similar"} media_type={"movie"} />
                    </div>
                </div>
            </header>
        </>
    );
}

export default VideoPlayer;

export const getServerSideProps = async (context) => {
    return {
        props: {
            id: context.query.page,
            Name: context.query.DetailsScreen
        }
    }
}
