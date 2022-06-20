import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

const Header = () => {
    const [Genres, SetGenres] = useState([])
    const router = useRouter()
    useEffect(() => {
        fetch("https://api.themoviedb.org/3/genre/movie/list?api_key=f81980ff410e46f422d64ddf3a56dddd&language=en-US").then((e) => e.json()).then((res) => {
            SetGenres(res.genres);
        })
    })
    function HandleEvent(e) {
        if (e.currentTarget.lastChild.style.display == "block") {
            document.querySelector(".dropdown-content").style.display = "none";
        } else {
            document.querySelector(".dropdown-content").style.display = "block";
        }
    }
    return (
        <>
            <div class="nav-wrapper">
                <div class="container md:flex-col flex-row">
                    <div class="nav">
                        <Link href="/"><a class="logo">
                            <i class='bx bx-movie-play bx-tada main-color'></i>Fl<span class="main-color">i</span>x
                        </a></Link>
                        <ul class="nav-menu m-5" id="nav-menu">
                            <li><Link href="/"><a>Home</a></Link></li>
                            <li>
                                <div class="dropdown" onClick={HandleEvent}>
                                    <div className='flex'>
                                        <a class="">Genre</a>
                                    </div>
                                    <div class="dropdown-content">
                                        {Genres.map((e) => (
                                            <>
                                                <Link href={`/Category/${e.id}?CategoryName=${e.name}`}><a className={router.query.CategoryName == e.name ? "text-red-600 hover:text-white text-xl active" : "text-red-600 hover:text-white text-xl"}>{e.name}</a></Link>
                                            </>))}
                                    </div>
                                </div>
                            </li>
                            <li><Link href="/Movie"><a>Movies</a></Link></li>
                            <li><Link href="/Tv"><a>Series</a></Link></li>
                            <li><Link href="/About"><a>About</a></Link></li>
                            <li class="signbtn signbtn-hover ">
                                <Link href="/Sign"><span className="hover:text-white">Sign in</span></Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Header;