import { useState, useEffect } from "react";
import { Gallery } from "react-grid-gallery";
import themes from "./themes";
import './style/gallery.css';

const filterList = ['Music', 'Movie', 'Band', 'Nature', 'Anime', 'Cartoon', 'TV Show', 'Abstract'];

const styleTag = () => {
    return ({
        color: '#B026FF',
        'background-color': 'black',
        borderRadius: '3px',
        'font-size': 'x-large',
        'font-family': 'Courier New, monospace'
    });
}

const ImageGallery = () => {

    const [tagValue, setTagValue] = useState('');
    const [themeList, setThemeList] = useState(themes);

    useEffect(() => {
        if (tagValue) {
            const filteredThemes = themes.filter(theme =>
                theme.tags.some(tag => tag.value === tagValue)
            );
            setThemeList(filteredThemes);
        } else {
            setThemeList(themes);
        }
    }, [tagValue]);

    const handleTagChange = (event: any) => {
        setTagValue(event.target.value);
    };

    return (
        <div>
            <select id="tagSelect" onChange={handleTagChange} value={tagValue}>
                <option value="">All Themes &crarr;</option>
                {filterList.map((filter) => (
                    <option key={filter} value={filter}>
                        {filter}
                    </option>
                ))}
            </select>
            <Gallery
                images={themeList}
                onClick={clickHandler}
                enableImageSelection={false}
                margin={6}
                rowHeight={300}
                tagStyle={styleTag}

            />
        </div>
    );
};

const clickHandler = (_index: number, image: any) => {
    window.open(image.url);
};

export default ImageGallery;
