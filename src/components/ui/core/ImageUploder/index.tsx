import { Dispatch, SetStateAction } from "react";
import { Input } from "../../input";
type TImageUploader = {
  label?: string;
  image: File[] | [];
  setImage: Dispatch<SetStateAction<[] | File[]>>;
  imagePrevue: string[] | [];
  setImagePrevue: Dispatch<SetStateAction<[] | string[]>>;
};
const IndexImageUpload = ({
  label,
  image,
  setImage,
  setImagePrevue,
}: TImageUploader) => {
  console.log(image);

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!e.target.files || e.target.files.length === 0) return; // Prevent errors
    const file = e.target.files[0];
    setImage((pre) => [...pre, file]);
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        setImagePrevue((prev) => [...prev, reader.result as string]);
      };
      reader.readAsDataURL(file);
    }
    e.target.value = "";
  };

  return (
    <div>
      <Input
        id="image-upload"
        type="file"
        accept="image/*"
        multiple
        className="hidden"
        onChange={handleImageChange}
      />
      <label
        htmlFor="image-upload"
        className="w-full h-36 md:size-36 flex items-center justify-center border-2 border-dashed border-gray-300 rounded-md cursor-pointer text-center text-sm text-gray-500 hover:bg-gray-50 transition"
      >
        {label}
      </label>
    </div>
  );
};

export default IndexImageUpload;
