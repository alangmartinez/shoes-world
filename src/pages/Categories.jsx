/* eslint-disable react/no-unescaped-entities */
import newShoe from "/assets/images/new-shoe.png";
import adidasNewShoe from "/assets/images/adidas-new-shoe.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import brand from "/assets/videos/brand.mp4";

export default function Categories() {
  return (
    <div className="relative">
    <section className="container w-full lg:mt-0 lg:py-[18rem] flex flex-col lg:flex-row gap-48 justify-between items-center h-screen">
      <article className="w-full h-full flex flex-col justify-center items-center lg:items-start">
        <div className="flex ">
          <div className="w-full lg:w-1/2 mr-3">
            <img src={newShoe} alt="new shoe" className="object-cover" />
          </div>
          <h2 className="font-heading w-3/4 text-[64px] font-extrabold text-center lg:text-start self-center mb-8 lg:mb-3 leading-[78px]">
            Nike's new dynamic support design
          </h2>
        </div>

        <div className="flex flex-col px-7 lg:px-0 w-full">
          <p className="font-body text-4xl text-gray-500 text-center lg:text-start">
            Introducing Nike's new brand of shoes with dynamic support. This
            shoe has a cutting-edge design that incorporates dynamic support
            technology to provide maximum comfort and stability during physical
            activity. The shoe is specifically engineered to adapt to your
            individual movements, providing a custom fit that enhances your
            natural range of motion.
            <br />
            Features a flexible, yet durable outsole that is designed to respond
            to your foot's movements. This allows you to move with greater
            agility and confidence, whether you're running, jumping, or doing
            any other physical activity. The shoe's midsole is also designed
            with dynamic support, utilizing a unique foam material that provides
            extra cushioning and support where you need it most.
          </p>
          <button className="uppercase flex-inital bg-black w-[150px] lg:w-[180px] self-center lg:self-start h-[60px] lg:h-[64px] text-white mt-14 font-body text-4xl shadow-xl ">
            See more
            <FontAwesomeIcon className="w-4 ml-3 h-6" icon={faArrowRight} />
          </button>
        </div>
      </article>
      <article className="w-full h-full flex flex-col justify-center items-center lg:items-start">
        <div className="flex ">
          <div className="w-full lg:w-1/2 mr-3">
            <img src={adidasNewShoe} alt="new shoe" className="object-cover" />
          </div>
          <h2 className="font-heading w-3/4 text-[64px] font-extrabold text-center lg:text-start self-center mb-8 lg:mb-3 leading-[78px]">
            New Adidas Yeezy SPLY - 350 V2
          </h2>
        </div>

        <div className="flex flex-col px-7 lg:px-0 w-full">
          <p className="font-body text-4xl text-gray-500 text-center lg:text-start">
            The Adidas Yeezy Boost 350 line is one of the most popular and
            iconic sneaker collections in recent years. Designed by Kanye West
            in collaboration with Adidas, the Yeezy Boost 350 features a
            distinctive silhouette and a range of colorways and materials.
            <br />
            The Yeezy Boost 350 is known for its comfortable and lightweight
            design, featuring a Primeknit upper that conforms to the shape of
            your foot and a Boost sole that provides cushioning and energy
            return with each step. The shoe's unique design incorporates minimal
            branding and a sleek, modern aesthetic, making it a popular choice
            for both casual wear and athletic pursuits.
          </p>
          <button className="uppercase flex-inital bg-black w-[150px] lg:w-[180px] self-center lg:self-start h-[60px] lg:h-[64px] text-white mt-14 font-body text-4xl shadow-xl ">
            See more
            <FontAwesomeIcon className="w-4 ml-3 h-6" icon={faArrowRight} />
          </button>
        </div>
      </article>
    </section>
      <div className="w-full h-[300px] lg:h-[760px]">
        <video src={brand} autoPlay loop muted className="w-full h-full attached bottom-0 object-cover object-center"></video>
      </div>
    </div>
  );
}
