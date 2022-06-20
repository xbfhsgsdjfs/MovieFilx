import HoverVideoPlayer from 'react-hover-video-player';
import { urlposter } from '../Config/Config';

const MovieWebSite = () => {
    return (
        <>
            <div className="flex flex-wrap mx-32 my-20">
                {urlposter.map((e) => (
                    <a href={e.webside} target="_blank">
                        <div className="m-3 cursor-pointer" style={{ width: "300px" }}>
                            <HoverVideoPlayer
                                videoSrc={e.url}
                                pausedOverlay={
                                    <img
                                        src={e.poster}
                                        alt=""
                                        style={{
                                            width: '100%',
                                            height: '100%',
                                            objectFit: 'cover',
                                        }}
                                    />
                                }
                                loadingOverlay={
                                    <div className="loading-overlay">
                                        <div className="loading-spinner" />
                                    </div>
                                }
                            />
                        </div>
                    </a>
                ))}
            </div>
        </>
    );
}
export default MovieWebSite;