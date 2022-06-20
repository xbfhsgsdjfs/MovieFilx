import ReactPlayer from 'react-player';
import { truncate } from '../setting/setting';

const Player = ({ VideoData }) => {
    return (
        <>
            {VideoData.length !== 0
                ? <>
                    <h1 className='flex flex-wrap justify-center text-3xl text-[#C0392B] video'>🎬Videos🎬</h1>
                    <div className='flex flex-wrap justify-center'>
                        {VideoData.map((e) => (
                            VideoData[0].key
                                ?
                                <>
                                    <div className="m-4">
                                        <ReactPlayer
                                            width={600}
                                            height="40vh"
                                            url={`https://www.youtube.com/watch?v=${e.key}`}
                                            controls={true}
                                        />
                                        <h1 className="text-2xl font-bold  text-red-600 justify-center flex flex-wrap">{truncate(e.name, 45)}</h1>
                                    </div>
                                </>
                                : null
                        ))} </div></> :
                null
            }
        </>
    );
}

export default Player;