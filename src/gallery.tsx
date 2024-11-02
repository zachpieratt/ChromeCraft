import { useState, useEffect } from "react";
import { Gallery } from "react-grid-gallery";
import themes from "./themes";
import './style/gallery.css';

const filterList = ['Music', 'Movies', 'Bands', 'Nature', 'Anime', 'Cartoons', 'TV Shows', 'Abstract', 'Books', 'Fantasy'].sort();

const styleTag = () => {
    return ({
        color: '#B026FF',
        'backgroundColor': 'black',
        borderRadius: '3px',
        'fontSize': 'x-large',
        'fontFamily': 'Courier New, monospace',
        margin: 2,
        'fontWeight': 'bold'
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
    const [themeList, setThemeList] = useState(images);

    useEffect(() => {
        if (tagValue) {
            const filteredThemes = images.filter(image =>
                image.tags.some(tag => tag.value === tagValue)
            );
            setThemeList(filteredThemes);
        } else {
            setThemeList(images);
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
    if (image.url == 'Pending') {
        alert('Theme pending Chrome Store approval, please check back soon!')
    } else {
        window.open(image.url);
    }

};

export default ImageGallery;
