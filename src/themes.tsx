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
    id: string;
    thumbnailCaption: any;
    installCount?: number;
}


let base64Loader: string = 'https://ik.imagekit.io/chromecraft/loader.gif?updatedAt=1730996295578';
const imgWidth: number = 464;
const imgHeight: number = 300;

const urlEndpoint = `https://ik.imagekit.io/chromecraft/tr:h-${imgHeight},w-${imgWidth}/`;

const themeList: theme[] = [
    {
        name: "Blade Runner",
        id: "hhokgonhmnigmfgpbfjenabkddbgmohk",
        src: `${urlEndpoint}bladeRunner.png`,
        width: imgWidth,
        height: imgHeight,
        tags: [
            { "value": "Movies", "title": "Movies" },
            { "value": "Sci-Fi", "title": "Sci-Fi" }
        ],
        url: 'https://chromewebstore.google.com/detail/blade-runner-chrome-theme/hhokgonhmnigmfgpbfjenabkddbgmohk',
        alt: 'Blade Runner Theme',
        nano: base64Loader,
        thumbnailCaption: "",
        installCount: 112
    },
    {
        name: "Sleep Token",
        id: "flmikamoipjdpofeacmcikblbjghnnce",
        src: `${urlEndpoint}sleepToken.png`,
        width: imgWidth,
        height: imgHeight,
        tags: [
            { value: "Music", title: "Music" },
            { value: "Bands", title: "Bands" },
        ],
        url: 'https://chromewebstore.google.com/detail/sleep-token-chrome-theme/flmikamoipjdpofeacmcikblbjghnnce',
        alt: 'Sleep Token Theme',
        nano: base64Loader,
        thumbnailCaption: "",
        installCount: 121
    },
    {
        name: "ACOTAR - Night Court",
        id: "dpfjpnaeimodijaklnlcacconffpnlkb",
        src: `${urlEndpoint}acotarNightCourt.png`,
        width: imgWidth,
        height: imgHeight,
        tags: [
            { value: "Books", title: "Books" },
            { value: "Fantasy", title: "Fantasy" }
        ],
        url: 'https://chromewebstore.google.com/detail/acotar-night-court/dpfjpnaeimodijaklnlcacconffpnlkb',
        alt: 'ACOTAR - Night Court Theme',
        nano: base64Loader,
        thumbnailCaption: "",
        installCount: 245
    },
    {
        name: "G1 Transformers",
        id: "jjohdmihcmhkbfekeiipbbfbnihjhaco",
        src: `${urlEndpoint}g1Transformers.png`,
        width: imgWidth,
        height: imgHeight,
        tags: [
            { value: "Movies", title: "Movies" },
            { value: "TV Shows", title: "TV Shows" },
            { value: "Cartoons", title: "Cartoons" }
        ],
        url: "https://chromewebstore.google.com/detail/transformers-g1-theme/jjohdmihcmhkbfekeiipbbfbnihjhaco",
        alt: "G1 Transformers Theme",
        nano: base64Loader,
        thumbnailCaption: "",
        installCount: 110
    },
    {
        name: "Ronin Warriors",
        id: "gpfcjgbljcipdaheihanogpogccmdjmk",
        src: `${urlEndpoint}roninWarriors.png`,
        width: imgWidth,
        height: imgHeight,
        tags: [
            { value: "Anime", title: "Anime" },
            { value: "TV Shows", title: "TV Shows" },
            { value: "Cartoons", title: "Cartoons" }
        ],
        url: "https://chromewebstore.google.com/detail/ronin-warriors-theme/gpfcjgbljcipdaheihanogpogccmdjmk",
        alt: "Ronin Warriors Theme",
        nano: base64Loader,
        thumbnailCaption: "",
        installCount: 10
    },
    {
        name: "Starship Troopers",
        id: "ecofplpilnkielmeeomhobempcagjepp",
        src: `${urlEndpoint}starshipTroopers.png`,
        width: imgWidth,
        height: imgHeight,
        tags: [
            { value: "Movies", title: "Movies" },
            { value: "Sci-Fi", title: "Sci-Fi" }
        ],
        url: "https://chromewebstore.google.com/detail/starship-troopers/ecofplpilnkielmeeomhobempcagjepp",
        alt: "Starship Troopers Theme",
        nano: base64Loader,
        thumbnailCaption: "",
        installCount: 3
    },
    {
        name: "Yu-Gi-Oh!",
        id: "gcohhapgdpodaiepinmaglljiaplmcff",
        src: `${urlEndpoint}yugioh.png`,
        width: imgWidth,
        height: imgHeight,
        tags: [
            { value: "Anime", title: "Anime" },
            { value: "TV Shows", title: "TV Shows" },
            { value: "Cartoons", title: "Cartoons" }
        ],
        url: "https://chromewebstore.google.com/detail/yu-gi-oh-theme/gcohhapgdpodaiepinmaglljiaplmcff",
        alt: "YuGiOh Theme",
        nano: base64Loader,
        thumbnailCaption: "",
        installCount: 30
    },
    {
        name: "Gundam Iron-Blooded Orphans",
        id: "dncoeodgjncffgjekoalnogjiadkkple",
        src: `${urlEndpoint}gundamIBO.png`,
        width: imgWidth,
        height: imgHeight,
        tags: [
            { value: "Anime", title: "Anime" },
            { value: "TV Shows", title: "TV Shows" }
        ],
        url: "https://chromewebstore.google.com/detail/gundam-iron-blooded-orpha/dncoeodgjncffgjekoalnogjiadkkple",
        alt: "Gundam Iron-Blooded Orphans Theme",
        nano: base64Loader,
        thumbnailCaption: "",
        installCount: 30
    },
    {
        name: "Fourth Wing",
        id: "bfdginfimjehbionlenblbfppfalfppd",
        src: `${urlEndpoint}fourthWing.png`,
        width: imgWidth,
        height: imgHeight,
        tags: [
            { value: "Books", title: "Books" },
            { value: "Fantasy", title: "Fantasy" }
        ],
        url: "https://chromewebstore.google.com/detail/fourth-wing-theme/bfdginfimjehbionlenblbfppfalfppd?authuser=0&hl=en",
        alt: "Fourth Wing Theme",
        nano: base64Loader,
        thumbnailCaption: "",
        installCount: 0
    }
];
themeList.forEach(theme => {
    theme.thumbnailCaption = (
        <div className="tagContainer">
            <div className="installCount">
                {`Installs: ${theme.installCount}`}
            </div>
            <div className="themeName">
                {theme.name}
            </div>
            <div className="tagList">
                {theme.tags.map(tag => tag.title).join('  /  ')}
            </div>

        </div>
    );
});

const themes = themeList.reverse();

export default themes