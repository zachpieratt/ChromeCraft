import { Gallery } from "react-grid-gallery";
import themes from "./themes";
/*
const searchInput = document.getElementById('searchInput') as HTMLInputElement;


searchInput.addEventListener('input', (event: Event) => {
    event.preventDefault();
    const searchValue: string = searchInput.value.toLowerCase();
    console.log(themes.filter(theme => theme.name.toLowerCase() === "blade runner".toLowerCase()));
    console.log(searchValue);
})
*/
const clickHandler = (_index: number, image: any) => { window.open(image.url) };
const ImageGallery = () => {
    return (<Gallery
        images={themes}
        onClick={clickHandler}
        enableImageSelection={false}
        margin={5}
        rowHeight={300}
    />)
};

export default ImageGallery;