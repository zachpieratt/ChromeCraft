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
const imgWidth: number = 320;
const imgHeight: number = 174;

const themes: theme[] = [
    {
        name: "Blade Runner",
        src: "themeImages/bladeRunner.png",
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
        src: "themeImages/sleepToken.png",
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
        src: "themeImages/acotarNightCourt.png",
        width: imgWidth,
        height: imgHeight,
        tags: [
            { value: "Books", title: "Books" },
        ],
        url: 'https://chromewebstore.google.com/detail/dpfjpnaeimodijaklnlcacconffpnlkb',
        alt: 'ACOTAR - Night Court Theme',
        nano: base64Loader
    }
];
export default themes