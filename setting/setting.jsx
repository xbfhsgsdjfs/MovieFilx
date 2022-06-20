const BannerSetting = {
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    initialSlide: 0,
    arrows: false,
    autoplay: true,
};

const MovieLatestmovie = {
    infinite: false,
    speed: 1500,
    slidesToShow: 6,
    slidesToScroll: 6,
    initialSlide: 0,
    arrows: true,
    responsive: [
        {
            breakpoint: 1300,
            settings: {
                slidesToShow: 5,
                slidesToScroll: 3,
                arrows: true,
            },
        },
        {
            breakpoint: 600,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 2,
                initialSlide: 2,
                arrows: true,
            },
        },
        {
            breakpoint: 480,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 2,
                arrows: true,
            },
        },
    ],
};

const MovieRowSetting = {
    infinite: false,
    speed: 1500,
    slidesToShow: 7,
    slidesToScroll: 7,
    initialSlide: 0,
    arrows: false,
    responsive: [
        {
            breakpoint: 1300,
            settings: {
                slidesToShow: 5,
                slidesToScroll: 3,
                arrows: false,
            },
        },
        {
            breakpoint: 600,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 2,
                initialSlide: 2,
                arrows: false,
            },
        },
        {
            breakpoint: 480,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 2,
                arrows: false,
            },
        },
    ],
};

const responsive = {
    0: {
        items: 2,
    },
    512: {
        items: 5,
    },
    1024: {
        items: 5,
    },
};

const truncate = (string, n) => {
    return string?.length > n ? string.substring(0, n - 1) + "..." : string
}
export { BannerSetting, MovieLatestmovie, MovieRowSetting, responsive, truncate };