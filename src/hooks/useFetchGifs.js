import { useState, useEffect } from 'react';
import { getGifs } from '../helpers/getGifs';

export const useFetchGifs = (cat) => {

    const [images, setImages] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    const getImages = async () => {
        const newImages = await getGifs(cat);
        const uniqueImages = [];
        const ids = new Set();

        for (const image of newImages) {
            if (!ids.has(image.id)) {
                ids.add(image.id);
                uniqueImages.push(image);
            }
        }
        setImages(uniqueImages);
        setIsLoading(false);
    }

    useEffect(() => {
        getImages();
    }, []);

    return {
        images,
        isLoading
    }
}
