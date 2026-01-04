import Image from "next/image";
import wondersImages, { WonderImage } from "@/app/data/photoData";
import ModalUI from "@/components/ui/Modal";

export default async function InterceptPhotoPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const photo: WonderImage = wondersImages.find((p) => p.id === id)!;

  return (
    // <ModalUI>
    <div className=" mx-auto ">
      <div className="w-full mx-auto">
        <div>
          <h1 className="text-center text-3xl font-bold text-black my-4">
            {photo.name}
          </h1>
        </div>
        <Image
          alt={photo.name}
          src={photo.src}
          className="w-1/2 object-cover aspect-square "
        />

        <div className="bg-white text-black py-4">
          <h3>{photo.photographer}</h3>
          <h3>{photo.location}</h3>
        </div>
      </div>
    </div>
    // </ModalUI>
  );
}
