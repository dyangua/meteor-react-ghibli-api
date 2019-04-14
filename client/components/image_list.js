import React from "react";
import ImageDetail from "./image_detail";

const IMAGES = [
  {
    title: "Pen",
    link: "https://dummyimage.com/600x400"
  },
  {
    title: "Pine Tree",
    link: "https://dummyimage.com/600x400"
  },
  {
    title: "Cow",
    link: "https://dummyimage.com/600x400"
  }
];

const ImageList = ({ films }) => {
  console.log("From image list");
  console.log(films);

  // const RenderedImages = IMAGES.map(img => (
  //   <ImageDetail key={img.title} title={img.title} image={img.link} />
  // ));

  const RenderFilms = films.map(film => (
    <ImageDetail
      key={film.id}
      title={film.title}
      description={film.description}
      rate={film.rt_score}
      image={
        "https://hips.hearstapps.com/es.h-cdn.co/fotoes/images/noticias-cine/studio-ghibli-cuenta-como-nacio-mi-vecino-totoro/138094841-1-esl-ES/El-Studio-Ghibli-nos-cuenta-como-nacio-Mi-Vecino-Totoro.jpg?crop=1xw:0.7769347496206374xh;center,top&resize=980:*"
      }
    />
  ));

  return <ul className="media-list list-group">{RenderFilms}</ul>;
};

export default ImageList;
