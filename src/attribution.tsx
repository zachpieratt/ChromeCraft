import './style/attribution.css'

let currentYear: string = new Date().getFullYear().toString();

const Attribution = () => {
    return (
        <div className="footer">
            <img className="ghLogo" alt="gitHub" src="/github.png" />
            <br />
            <span >{currentYear}</span>
            <span> Zach Pieratt</span>
            <br />
            <a href="https://github.com/zachpieratt" target="_blank">Github</a>
            <br />
            <a href="https://github.com/sponsors/zachpieratt" target="_blank">Support the Site</a>
        </div>
    )
};

export default Attribution;