import { useState } from 'react'
import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';
import './styled.css'

export const GifExpertApp = () => {
  
  // Estado para las categorias
  const [categories, setCategories] = useState([]);
  
  // Renderizamos el componente
  return (
    <>
    
    <h1>Find the best gifs</h1>
    <AddCategory setCategories={setCategories}/>

    {
      categories.map((category) => (
        <GifGrid 
          key={category} 
          cat={category} />
          ))
    }
    </>
  )
}
