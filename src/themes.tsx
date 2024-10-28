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
        src: "https://github.com/user-attachments/assets/bbd567c6-f381-4dbb-a880-58d698c6e5a9",
        width: imgWidth,
        height: imgHeight,
        tags: [
            { value: "Movie", title: "Movie" }
        ],
        url: 'https://chromewebstore.google.com/detail/blade-runner-chrome-theme/hhokgonhmnigmfgpbfjenabkddbgmohk?authuser=1&hl=en',
        alt: 'Blade Runner Theme',
        nano: base64Loader
    },
    {
        name: "Sleep Token",
        src: "https://github.com/user-attachments/assets/204ab217-174b-4a8e-a62f-9e16ffdc2fbc",
        width: imgWidth,
        height: imgHeight,
        tags: [
            { value: "Music", title: "Music" },
            { value: "Band", title: "Band" },
        ],
        url: 'https://chromewebstore.google.com/detail/sleep-token-chrome-theme/flmikamoipjdpofeacmcikblbjghnnce?authuser=1&hl=en',
        alt: 'Sleep Token Theme',
        nano: base64Loader
    }
];
export default themes