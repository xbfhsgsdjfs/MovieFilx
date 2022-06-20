import Banner from "../../Components/Banner";
import SearchRow from "../../Components/Row/SearchRow";
import { Api_Key, BasicUrl } from "../../Config/Config";

const Categorys = ({ BannerUrl, UpComping, GenresRow, Name }) => {
    return (
        <>
            {BannerUrl.results.length != 0 ?
                <>
                    <Banner media_type="movie" Data={BannerUrl.results} />
                    <SearchRow Data={UpComping.results} title={`UpComing ${Name}`} media_type="movie" />
                </>
                : null}
            <SearchRow Data={GenresRow.results} title={Name} media_type="movie" />
        </>
    );
}

export default Categorys;

export const getServerSideProps = async (context) => {
    const BannerUrl = await fetch(`${BasicUrl}/movie/upcoming?api_key=${Api_Key}&language=en-US&page=1&with_genres=${context.query.Categorys}`).then((res) => res.json())
    const UpComping = await fetch(`${BasicUrl}/movie/upcoming?api_key=${Api_Key}&language=en-US&with_genres=${context.query.Categorys}`).then((res) => res.json())
    const GenresRow = await fetch(`${BasicUrl}/discover/movie?api_key=${Api_Key}&language=en-US&with_genres=${context.query.Categorys}`).then((res) => res.json())
    return {
        props: {
            BannerUrl,
            UpComping,
            GenresRow,
            Name: context.query.CategoryName
        }
    }
}