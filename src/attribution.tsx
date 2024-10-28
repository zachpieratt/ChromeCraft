import './style/attribution.css'



let currentYear: string = new Date().getFullYear().toString();



const Attribution = () => {
    return (
        <div className="footer">
            <img className="ghLogo" src="/github.png" />
            <br />
            <span >{currentYear}</span>
            <span> Zach Pieratt</span>
            <br />
            <a href="https://github.com/zachpieratt" target="_blank">Github</a>
            <br />
            <a href="https://github.com/sponsors/zachpieratt" target="_blank">Donate</a>
        </div>
    )
};

export default Attribution;