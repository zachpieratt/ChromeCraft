

type tag = {
    value: string;
    title: string;
};

type theme = {
    name: string;
    src: string;
    width: number;
    height: number;
    url: string;
    tags: tag[];
    alt: string;
    nano: string;
}



let base64Loader: string = '/loader.gif';
const imgWidth: number = 464;
const imgHeight: number = 300;

const urlEndpoint = `https://ik.imagekit.io/chromecraft/tr:h-${imgHeight},w-${imgWidth}/`;

const themes: theme[] = [
    {
        name: "Blade Runner",
        src: `${urlEndpoint}bladeRunner.png`,
        width: imgWidth,
        height: imgHeight,
        tags: [
            { value: "Movies", title: "Movies" }
        ],
        url: 'https://chromewebstore.google.com/detail/blade-runner-chrome-theme/hhokgonhmnigmfgpbfjenabkddbgmohk?authuser=1&hl=en',
        alt: 'Blade Runner Theme',
        nano: base64Loader
    },
    {
        name: "Sleep Token",
        src: `${urlEndpoint}sleepToken.png`,
        width: imgWidth,
        height: imgHeight,
        tags: [
            { value: "Music", title: "Music" },
            { value: "Bands", title: "Bands" },
        ],
        url: 'https://chromewebstore.google.com/detail/sleep-token-chrome-theme/flmikamoipjdpofeacmcikblbjghnnce?authuser=1&hl=en',
        alt: 'Sleep Token Theme',
        nano: base64Loader
    },
    {
        name: "ACOTAR - Night Court",
        src: `${urlEndpoint}acotarNightCourt.png`,
        width: imgWidth,
        height: imgHeight,
        tags: [
            { value: "Books", title: "Books" },
            { value: "Fantasy", title: "Fantasy" }
        ],
        url: 'https://chromewebstore.google.com/detail/acotar-night-court/dpfjpnaeimodijaklnlcacconffpnlkb?authuser=1&hl=en',
        alt: 'ACOTAR - Night Court Theme',
        nano: base64Loader
    },
    {
        name: "G1 Transformers",
        src: `${urlEndpoint}g1Transformers.png`,
        width: imgWidth,
        height: imgHeight,
        tags: [
            { value: "Movies", title: "Movies" },
            { value: "TV Shows", title: "TV Shows" },
            { value: "Cartoons", title: "Cartoons" }
        ],
        url: "https://chromewebstore.google.com/detail/transformers-g1-theme/jjohdmihcmhkbfekeiipbbfbnihjhaco?hl=en&authuser=1",
        alt: "G1 Transformers",
        nano: base64Loader
    },
    {
        name: "Ronin Warriors",
        src: `${urlEndpoint}roninWarriors.png`,
        width: imgWidth,
        height: imgHeight,
        tags: [
            { value: "Anime", title: "Anime" },
            { value: "TV Shows", title: "TV Shows" },
            { value: "Cartoons", title: "Cartoons" }
        ],
        url: "Pending",
        alt: "https://chromewebstore.google.com/detail/ronin-warriors-theme/gpfcjgbljcipdaheihanogpogccmdjmk",
        nano: base64Loader
    }
];
export default themes