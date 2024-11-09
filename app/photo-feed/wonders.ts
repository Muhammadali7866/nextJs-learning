import { StaticImageData } from "next/image";
import photo1 from "./photos/1.jpg";
import photo2 from "./photos/2.jpg";
import photo3 from "./photos/3.jpg";
import photo4 from "./photos/4.jpg";
import photo5 from "./photos/5.jpg";
import photo6 from "./photos/6.jpg";
import photo7 from "./photos/7.jpg";

export type WonderImage = {
  id: string;
  name: string;
  src: StaticImageData;
  photographer: string;
  location: string;
};

const wondersImages: WonderImage[] = [
  {
    id: "1",
    name: "Night Moon with place",
    photographer: "Photo by Max",
    location: "USA",
    src: photo1,
  },
  {
    id: "2",
    name: "Walking on bridge",
    photographer: "Photo by Max",
    location: "China",
    src: photo2,
  },
  {
    id: "3",
    name: "River full of water",
    photographer: "Photo by Max",
    location: "China",
    src: photo3,
  },
  {
    id: "4",
    name: "Great Flower with black background",
    photographer: "Photo by Max",
    location: "China",
    src: photo4,
  },
  {
    id: "5",
    name: "Great green house",
    photographer: "Photo by Max",
    location: "China",
    src: photo5,
  },
  {
    id: "6",
    name: "Person walking on street",
    photographer: "Photo by Max",
    location: "China",
    src: photo6,
  },
  {
    id: "7",
    name: "House surrounded by greenery",
    photographer: "Photo by Max",
    location: "China",
    src: photo7,
  },
];
export default wondersImages;
