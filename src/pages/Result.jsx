import React, { useContext, useState } from "react";
import { assestsImg } from "../assets/assets";
import { AppContext } from "../context/AppContext";

const Result = () => {
  const [image, setImage] = useState(assestsImg.panda);
  const [isImageLoaded, setIsImageLoaded] = useState(false);
  const [loading, setLoading] = useState(false);
  const [input, steInput] = useState("");
  const{generateImage}=useContext(AppContext)
  const onSubmitHandler = async (e) => {
    e.preventDefault()
    setLoading(true)
    if(input){
      const image = await generateImage(input)
      if(image){
        setIsImageLoaded(true)
        setImage(image)
      }
    }
    setLoading(false)
  };
  return (
    <form
      onSubmit={onSubmitHandler}
      className="flex flex-col min-h-[90vh] justify-center items-center"
    >
      <div>
        <div className="relative">
          <img className="max-w-sm rounded" src={image} alt="" />
          <span
            className={`absolute bottom-0 left-0 h-1 bg-blue-500 ${
              loading ? "w-full transition-all duration-[10s]" : "w-0"
            }`}
          />
          <p className={!loading ? "hidden" : ""}>Loading....</p>
        </div>
      </div>
      {!isImageLoaded && (
        <div className="flex w-full max-w-xl bg-neutral-500 text-white text-sm p-0.5 mt-10 rounded-full">
          <input
            onChange={(e) => steInput(e.target.value)}
            value={input}
            className="flex-1 bg-transparent outline-none ml-8   max-sm:w-20 grey-placeholder"
            type="text-area"
            placeholder="Describe your Creativity"
          />
          <button
            className="bg-zinc-900 px-10 text-white sm:px-16 py-3 rounded-full"
            type="submit"
          >
            Generate
          </button>
        </div>
      )}
      {isImageLoaded && (
        <div className="flex gap-2 flex-wrap justify-center text-white text-sm p-0.5 mt-10 rounded-full">
          <p
            onClick={() => {
              setIsImageLoaded(false);
            }}
            className="bg-transparent border border-zinc-900 text-black px-8 py-3 rounded-full cursor-pointer"
          >
            Generate Another
          </p>
          <a
            className="bg-zinc-900 px-10 py-3 rounded-full cursor-pointer"
            href={image} download
          >
            Download
          </a>
        </div>
      )}
    </form>
  );
};

export default Result;
