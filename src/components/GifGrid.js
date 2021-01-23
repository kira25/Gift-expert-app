import React from "react";
import { useFetchGGifs } from "../hooks/useFetchGifs";
// import { getGifts } from "../helpers/getGifs";
import { GifGridItem } from "./GifGridItem";

export const GifGrid = ({ category }) => {
  // const [images, setImages] = useState([]);
 const {data: images,loading} = useFetchGGifs(category);



  return (
    <>
      <h3 className="animate__animated animate__slideInLeft">{category}</h3>
      {loading && <p className="animate__animated animate__flash">Loading</p> }
    
      <div className="card-grid">
        {images.map((img) => (
          <GifGridItem key={img.id} {...img} />
        ))}
      </div>
    </>
  );
};
