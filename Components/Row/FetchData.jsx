import { useEffect, useState } from "react";
import MovieRow from "./MovieRow";

const FetchData = ({ page, media, Title, URlS }) => {
    const [MovieData, SetMovieData] = useState([])
    useEffect(() => {
        fetch(`${URlS}&page=${page}`).then((res) => res.json()).then((e) => {
            SetMovieData(e.results);
        })
    })
    return (
        <>
            {MovieData.length != 0 ? <MovieRow pages={2} media_type={media} Data={MovieData} title={Title} url={URlS} /> : null}
        </>
    );
}

export default FetchData;