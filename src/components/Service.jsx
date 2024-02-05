import React from "react";

const Service = () => {
  return (
    <div className="h-100 bg-neutral-100">
      <div className="w-100 mx-auto flex items-center h-full gap-16">
        <div className="img bg-right w-1/2 h-80 bg-contain bg-no-repeat"></div>
        <div className="w-1/2 h-80 flex flex-col justify-center">
          <h1 className="text-4xl font-bold mb-8">Our Services</h1>
          <ul className="list-disc text-lg ml-5">
            <li>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</li>
            <li> Eos, ad officia atque dignissimos cum.</li>
            <li>deserunt earum repudiandae odio</li>
            <li>est tempore laboriosam unde facere temporibus quis</li>
            <li>consectetur hic facilis, atque dignissimos cum veritatis!</li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Service