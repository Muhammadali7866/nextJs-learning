// import Link from "next/link";
// import Image from "next/image";
// import wondersImages, { WonderImage } from "../../../wonders";
// import Model from "@/app/components/model";

// export default function PhotoPage({
//   params: { id },
// }: {
//   params: {
//     id: string;
//   };
// }) {
//   const photo: WonderImage = wondersImages.find((item) => item.id === id);
//   return (
//     <Model>
//       <Image
//         alt={photo.name}
//         src={photo.src}
//         className="w-full object-cover aspect-square"
//       />
//       <div className="bg-white py-4">
//         <h3>{photo.photographer}</h3>
//         <h3>{photo.location}</h3>
//       </div>
//     </Model>
//   );
// }
import Image from "next/image";
import wondersImages, { WonderImage } from "../../../wonders";
import Model from "@/app/components/model";

export default function PhotoPage({
  params: { id },
}: {
  params: {
    id: string;
  };
}) {
  const photo: WonderImage | undefined = wondersImages.find(
    (item) => item.id === id
  );

  if (!photo) {
    return <p>Image not found</p>; // Handle not found case
  }

  return (
    <Model>
      <Image
        alt={photo.name}
        src={photo.src}
        className="w-full object-cover aspect-square"
      />
      <div className="bg-white py-4">
        <h3>{photo.photographer}</h3>
        <h3>{photo.location}</h3>
      </div>
    </Model>
  );
}
