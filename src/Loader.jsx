import React from 'react'

const Loader = () => {
  return (
    <div className="p-[20px] backdrop-blur-[16px] saturate-[180%] bg-[rgba(150,150,142,0.75)]  border border-[rgba(255,255,255,0.125)]">
  <div className="flex flex-col justify-center items-center text-center my-20">
    <div className="text-black inline-flex items-center gap-2 bg-[#d6e416] px-6 py-1 rounded-full border border-[#737373] shadow-[5px_5px_10px_#9b9b9b]">
      <p>Transform Words into Stunning Images Instantly!</p>
    </div>
    <h1 className="text-center mt-10 text-[2.25rem] sm:text-[4.5rem] max-w-[300px] sm:max-w-[590px]">
      Bring your words to life with <span className="text-[#2563eb]">AI-generated images</span>
    </h1>
    <h3 className="text-center max-w-[36rem] mt-5">
      Transform your ideas into stunning art—AI makes creativity effortless!
    </h3>
  </div>
  <div className="w-full flex flex-col justify-center items-center">
    <h2>Please Wait........</h2>
    <div className="loader">
  <div className="loader__bar"></div>
  <div className="loader__bar"></div>
  <div className="loader__bar"></div>
  <div className="loader__bar"></div>
  <div className="loader__bar"></div>
  <div className="loader__ball"></div>
</div>
  </div>
</div>
  )
}

export default Loader;