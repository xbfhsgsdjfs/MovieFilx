import Banner from "../Components/Banner";
import { Api_Key, BasicUrl, urlposter } from "../Config/Config";
import { useEffect, useState } from "react"
import SearchRow from "../Components/Row/SearchRow";
import FetchData from "../Components/Row/FetchData";

const Movie = ({ Name }) => {
    const [SearchValue, SetSearchValue] = useState("")
    const [Searchdata, SetSearchdata] = useState([])
    const [BannerUrl, SetBannerUrl] = useState([])
    function HandleSearch(e) {
        e.preventDefault();
        SetSearchValue(e.target.value);
    }
    useEffect(() => {
        fetch(`${BasicUrl}/search/movie?api_key=${Api_Key}&query=${SearchValue}&language=EN`).then((e) => e.json()).then((res) => {
            SetSearchdata(res.results);
        })
        fetch(`${BasicUrl}/discover/movie?api_key=${Api_Key}&language=en-US&page=1`).then((res) => res.json()).then((e) => {
            SetBannerUrl(e.results)
        })
    }, [SearchValue])

    return (
        <>
            <Banner Data={BannerUrl} media_type={Name} />
            <form style={{
                position: "absolute",
                right: "10px"
            }}>
                <input type="text"
                    style={{
                        backgroundColor: "transparent",
                        border: "none",
                        borderBottom: "3px solid #C0392B",
                        color: "#C0392B",
                        boxSizing: "border-box",
                        fontFamily: 'Arvo',
                        fontSize: '25px',
                        padding: '12px 10px',
                        width: "20vw"
                    }}
                    placeholder="Search Movie ..."
                    onChange={HandleSearch}
                    value={SearchValue} />
            </form>
            {Searchdata != undefined ? <SearchRow Data={Searchdata} title="movie" media_type="movie" /> :
                <>
                    <FetchData page={1} media={"movie"} Title="Trend movie" URlS={`${BasicUrl}/discover/movie?api_key=${Api_Key}&language=en-US`} />
                    <FetchData page={101} media={"movie"} Title="Trend movie" URlS={`${BasicUrl}/discover/movie?api_key=${Api_Key}&language=en-US`} />
                </>
            }
        </>
    );
}

export default Movie;