import './style/header.css'
import themes from './themes';

const totalInstallCount = themes.reduce((total, theme) => {
    return total + (theme.installCount ?? 0);
}, 0);
function TopHeader() {
    return (
        <div className="topHeader">
            <div className="chrome">Chrome</div>
            <div className="craft">Craft</div>
            <div className='totalInstalls'>Total Themes Installed: {totalInstallCount}</div>
        </div>
    );
}

export default TopHeader