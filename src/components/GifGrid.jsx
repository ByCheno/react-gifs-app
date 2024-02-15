import { GiftItem } from './GiftItem';
import { useFetchGifs } from '../hooks/useFetchGifs';

export const GifGrid = ({ cat }) => {

  const {images, isLoading} = useFetchGifs(cat);

  return (
    <>
        <h4>{cat}</h4>
        {isLoading && <p>Cargando...</p>}

        {/* Lista ordenada donde guardo el id como clave y saco las imagenes dada la url */}
        <div className="card-grid">
          {
            // Recorremos el arreglo de imagenes y renderizamos el componente GiftItem
            images.map((image) => (
              <GiftItem key={image.id}
              // Usamos el operador spread para pasar las propiedades del objeto como props
              { ...image}
              />
            ))
          }
        </div>
    </>
  )
}
