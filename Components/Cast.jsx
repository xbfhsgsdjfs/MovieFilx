import AliceCarousel from "react-alice-carousel";
import { Imagew500, noPicture } from "../Config/Config";
import { responsive } from "../setting/setting";

const Cast = ({ CastData }) => {
    const handleDragStart = (e) => e.preventDefault();
    const CastPoster = CastData.map((c) => (
        <div style={{ objectFit: "contain" }}>
            <img
                src={c.profile_path ? `${Imagew500}/${c.profile_path}` : noPicture}
                onDragStart={handleDragStart}
                style={{
                    borderRadius: "20px",
                    width: "180px",
                    height: "250px",
                    marginBottom: "5px",
                }}
            />
            <b style={{
                display: "flex",
                justifyContent: "center",
                color: "#fff"
            }}>{c?.name}</b>
        </div>
    ));
    return (
        <>
            <h1 className="text-3xl font-bold ml-1 p-2 text-white">CastDetails</h1>
            <AliceCarousel
                mouseTracking
                infinite
                autoPlay
                disableDotsControls
                disableButtonsControls
                responsive={responsive}
                items={CastPoster}
            />
        </>
    );
}

export default Cast;