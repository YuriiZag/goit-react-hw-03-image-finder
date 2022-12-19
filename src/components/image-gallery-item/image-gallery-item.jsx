import { GalleryImage, GalleryItem } from "./image-gallery-item.styled"
import PropTypes from 'prop-types';

export const ImageGalleryItem = ({id, label, source, onClickHandler, fullSize }) => {
    
    return (<GalleryItem>
        <GalleryImage src={source} alt={label} onClick={onClickHandler} id={id} data-full-size={fullSize} />  
            </GalleryItem>
    )
}

ImageGalleryItem.propTypes = {
    id: PropTypes.number.isRequired,
    label: PropTypes.string.isRequired,
    source: PropTypes.string.isRequired,
    fullSize: PropTypes.string.isRequired,
    onClickHandler: PropTypes.func.isRequired,
}