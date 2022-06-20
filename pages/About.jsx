import { useEffect, useState } from "react";
import { useRouter } from "next/dist/client/router";
import SearchRow from "../Components/Row/SearchRow";
import { Api_Key, BasicUrl } from "../Config/Config";
const About = () => {
    const router = useRouter()
    const [Languagesdata, SetLanguagesdata] = useState([])
    const [SearchValue, SetSearchValue] = useState("")
    const [DataS, SetData] = useState([])
    const [DataTV, SetDataTV] = useState([])
    const [Title, SetTitle] = useState([])
    const [ID, SetID] = useState([])

    function HandleClick(e) {
        e.preventDefault();
        SetTitle(e.target.outerText)
        SetID(e.target.id)
        fetch(`${BasicUrl}/discover/movie?api_key=${Api_Key}&with_original_language=${e.target.id}`).then((res) => res.json()).then((e) => {
            SetData(e.results);
        })
        fetch(`${BasicUrl}/discover/tv?api_key=${Api_Key}&with_original_language=${e.target.id}`).then((res) => res.json()).then((e) => {
            SetDataTV(e.results);
        })
    }
    useEffect(() => {
        fetch(`${BasicUrl}/configuration/languages?api_key=${Api_Key}`).then((res) => res.json()).then((e) => {
            SetLanguagesdata(e)
        })
    })
    return (
        <>
            <div class="dropdown ml-12 mt-5">
                <input class="bg-white px-12 py-3 text-black text-center" placeholder="Select Your Language" onChange={(e) => SetSearchValue(e.target.value)} />
                <div class="dropdown-content-hover ml-20 px-12  bg-black rounded-b-xl">
                    {Languagesdata.filter((val) => {
                        if (SearchValue == "") {
                            return val
                        } else if (val.english_name.toLowerCase().includes(SearchValue.toLowerCase())) {
                            return val
                        }
                    }).map((e) => (
                        <a id={e.iso_639_1} onClick={HandleClick} className={ID == e.iso_639_1 ? "text-red-600 text-xl active cursor-pointer" : "text-red-600 hover:text-white text-xl cursor-pointer"}>{e.english_name.toLowerCase()}</a>
                    ))}
                </div>
            </div>
            {DataS.length != 0 || DataTV.length != 0 ?
                <>
                    <div className="mt-80">
                        {DataS.length != 0 ? <SearchRow media_type="movie" Data={DataS} title={`movie ${Title} Languages`} /> : null}
                        {DataTV.length != 0 ? <SearchRow media_type="tv" Data={DataTV} title={`tv ${Title} Languages`} /> : null}
                    </div>
                </> : null}
        </>
    );
}

export default About;