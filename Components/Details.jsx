import Link from "next/link";
import StarsRating from "stars-rating";
import { IMGPATH, Unavailable } from "../Config/Config";
import { truncate } from "../setting/setting";
import Cast from './Cast';

const Details = ({ DetailsData, genres, CastDatas }) => {
    const Rateing = Math.round(DetailsData.vote_average / 2)
    return (
        <>
            <div className="DetailsPages flex">
                <img className="rounded-lg" alt="images" src={DetailsData.poster_path ? IMGPATH + "/" + DetailsData.poster_path : Unavailable} width={350} />
                <div className="ml-10 text-white">
                    <h1 className="p-2 -mt-4" style={{ fontSize: "40px" }}>Title : {DetailsData.title || DetailsData.name}</h1>
                    <h1 className="flex text-lg mt-2">
                        {genres != undefined ? genres.map((e) => (
                            <Link href={`/Category/${e.id}?CategoryName=${e.name}`}><h1 className="border-2 m-2 py-1 px-5 rounded-3xl cursor-pointer">{e.name}</h1></Link>
                        )) : null}
                    </h1>
                    <p className="flex flex-wrap text-xl m-1 pl-1">
                        {truncate(DetailsData.overview, 200)}
                    </p>
                    <div className="flex">
                        <div className="ml-3">
                            <StarsRating
                                count={5}
                                edit={false}
                                value={DetailsData.vote_average / 2}
                                size={30}
                                color2={Rateing == 5 ? '#F1D045' : Rateing == 4 ? '#F1B345' : Rateing == 3 ? '#F1A545' : Rateing == 2 ? '#d17a00' : '#F17A45'} />
                        </div>
                    </div>
                    <div style={{ width: "65rem" }}>
                        <Cast CastData={CastDatas} />
                    </div>
                </div>
            </div>
        </>
    );
}

export default Details;