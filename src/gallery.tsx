import { useState, useEffect } from "react";
import { Gallery } from "react-grid-gallery";
import themes from "./themes";
import './style/gallery.css';

const filterList = ['Music', 'Movies', 'Bands', 'Nature', 'Anime', 'Cartoons', 'TV Shows', 'Abstract', 'Books', 'Fantasy', 'Sci-Fi'].sort();

const styleTag = () => {
    return ({
        color: '#B026FF',
        backgroundColor: 'black',
        borderRadius: '3px',
        fontSize: 'x-large',
        fontFamily: 'Courier New, monospace',
        margin: 2,
        fontWeight: 'bold'
    });
}

const ImageGallery = () => {

    const images = themes.map((theme) => ({
        ...theme,
        customOverlay: (
            <div className="custom-overlay__caption">
                <div>{theme.name}</div>
            </div>
        ),
    }));

    const [tagValue, setTagValue] = useState('');
    const [searchQuery, setSearchQuery] = useState('');
    const [themeList, setThemeList] = useState(images);

    useEffect(() => {
        let filteredThemes = images;

        if (tagValue) {
            filteredThemes = filteredThemes.filter(image =>
                image.tags.some(tag => tag.value === tagValue)
            );
        }

        if (searchQuery) {
            filteredThemes = filteredThemes.filter(image =>
                image.name.toLowerCase().includes(searchQuery.toLowerCase())
            );
        }

        setThemeList(filteredThemes);
    }, [tagValue, searchQuery]);

    const handleTagChange = (event: any) => {
        setTagValue(event.target.value);
    };

    const handleSearchChange = (event: any) => {
        setSearchQuery(event.target.value);
    };
    const noThemesMsg = `No themes for: "${searchQuery}" located.`;

    return (
        <div>
            <div className="filter-container">
                <select id="tagSelect" onChange={handleTagChange} value={tagValue}>
                    <option value="">All Themes &crarr;</option>
                    {filterList.map((filter) => (
                        <option key={filter} value={filter}>
                            {filter}
                        </option>
                    ))}
                </select>
                <input
                    type="text"
                    placeholder="Search themes by name..."
                    value={searchQuery}
                    onChange={handleSearchChange}
                />
            </div>
            {themeList.length > 0 ? (
                <Gallery
                    images={themeList}
                    onClick={clickHandler}
                    enableImageSelection={false}
                    margin={6}
                    rowHeight={300}
                    tagStyle={styleTag}
                />
            ) : (
                <div className="no-themes-message">{noThemesMsg}<br /> Check again later or request a new theme!</div>
            )}
        </div>
    );
};

const clickHandler = (_index: number, image: any) => {
    if (image.url === 'Pending') {
        alert('Theme pending Chrome Store approval, please check back soon!');
    } else {
        window.open(image.url);
    }
};

export default ImageGallery;
