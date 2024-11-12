import { useState, useEffect } from "react";
import { Gallery } from "react-grid-gallery";
import themes from "./themes";
import './style/gallery.css';



const filterList = ['Music', 'Movies', 'Bands', 'Nature', 'Anime', 'Cartoons', 'TV Shows', 'Abstract', 'Books', 'Fantasy', 'Sci-Fi'].sort();

const ImageGallery = () => {


    const images = themes;

    const [tagValue, setTagValue] = useState('');
    const [searchQuery, setSearchQuery] = useState('');
    const [themeList, setThemeList] = useState(images);
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 8;

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
        setCurrentPage(1);
    }, [tagValue, searchQuery]);

    const startIndex = (currentPage - 1) * itemsPerPage;
    const currentThemes = themeList.slice(startIndex, startIndex + itemsPerPage);
    const totalPages = Math.ceil(themeList.length / itemsPerPage);

    const handleTagChange = (event: any) => {
        setTagValue(event.target.value);
    };

    const handleSearchChange = (event: any) => {
        setSearchQuery(event.target.value);
    };

    const noThemesMsg = `No themes for: "${searchQuery}" located.`;

    const goToNextPage = () => {
        setCurrentPage((prev) => Math.min(prev + 1, totalPages));
    };

    const goToPreviousPage = () => {
        setCurrentPage((prev) => Math.max(prev - 1, 1));
    };

    return (
        <div>
            <div className="filter-container">
                <select id="tagSelect" onChange={handleTagChange} value={tagValue}>
                    <option value="">Latest Themes &crarr;</option>
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
                <>
                    <Gallery
                        images={currentThemes}
                        onClick={clickHandler}
                        enableImageSelection={false}
                        margin={6}
                        rowHeight={300}
                    />
                    <div className="pagination-controls">
                        <button onClick={goToPreviousPage} disabled={currentPage === 1}>
                            Previous
                        </button>
                        <span>Page {currentPage} of {totalPages}</span>
                        <button onClick={goToNextPage} disabled={currentPage === totalPages}>
                            Next
                        </button>
                    </div>
                </>
            ) : (
                <div className="no-themes-message">{noThemesMsg}<br />Check again later or request a new theme!</div>
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
