import { useState } from "react";

export default function Footer() {
  const [email, setEmail] = useState("");

  const handleEmail = (e) => {
    setEmail(e.target.value)
  }

  return (
    <footer className="container w-full py-14">
      <div className="lg:grid grid-cols-4 gap-20 flex flex-col items-center">
        <div className="col-span-2 flex flex-col gap-y-5 items-center lg:items-start">
          <h4 className="font-heading text-primary text-3xl font-bold">
            Suscribe to our newsletter
          </h4>
          <p className="text-gray-500 font-body text-[35px] leading-6">
            The latest news, articles, and resources, sent to your inbox weekly.
          </p>
          <div className="flex flex-col lg:flex-row justify-between items-center gap-y-5 lg:gap-x-6 w-full px-4 lg:px-0">
          <input type="text" className="pl-4 focus:outline-none mt-2 w-full h-12 shadow-md" placeholder="Enter your email" value={email} onChange={(e) => handleEmail(e)} />
          <button className="bg-primary text-white font-body text-3xl w-2/6 uppercase h-12 shadow-xl">Suscribe</button>
          </div>
        </div>
        <div className="col-span-1">
          <div className="flex flex-col h-full gap-y-2 justify-start items-start font-body text-gray-500 text-3xl">
            <p className="cursor-pointer">Legals</p>
            <p className="cursor-pointer">Claim</p>
            <p className="cursor-pointer">Terms</p>
            <p className="cursor-pointer">Privacy</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
