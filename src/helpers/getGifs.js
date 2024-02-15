
export const getGifs = async (cat) => {
    
    const url = `https://api.giphy.com/v1/gifs/search?api_key=NHtzYdSRuM1RFaCUuMW7NvabPrBroI2z&q=${cat}&limit=5`;
    const resp = await fetch(url);
    const {data} = await resp.json();
    
    // Creamos un nuevo arreglo con los datos que necesitamos haciendo uso de map
    const gift = data.map(img =>({
            id: img.id,
            title: img.title,
            url: img.images?.downsized_medium.url
    }));

    console.log(gift)
    return gift;
}