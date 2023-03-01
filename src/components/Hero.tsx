import Image from "next/image";

const Hero = () => {
  return (
    <section className="lg:rounded bg-white md:p-5 grid md:grid-cols-9 lg:grid-cols-12 gap-4">
      <div className="tab md:col-span-2 lg:col-span-3 hidden md:grid ">
        {[
          "Automobiles",
          "Clothes and wear",
          "Home interiors",
          "Computer and tech",
          "Tools, equipments",
          "Sports and outdoor",
          "Animal and pets",
          "Machinery tools",
          "More category",
        ].map((tab, i) => (
          <a href="#" key={i} className="active:bg-[#E5F1FF] btn">
            {tab}
          </a>
        ))}
      </div>

      <div className="hero-main md:col-span-5 lg:col-span-7 min-h-[200px] md:min-h-[320px]">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="/assets/hero-banner.png" alt="banner" className="" />

        <div className="content p-5 md:p-11">
          <p className="text-xl md:text-3xl">Latest Trending</p>
          <p className="text-xl md:text-3xl font-bold">Electronic items</p>
          <button className="btn bg-white mt-4 ">
            <p className="md:px-2 text-[13px] md:text-base">Learn More</p>
          </button>
        </div>
      </div>

      <div className="cta hidden md:col-span-2 md:flex flex-col gap-2.5">
        <div className="btn bg-[#E3F0FF] h-full grid gap-2">
          <div className="flex gap-2 5 items-center">
            <Image
              src="/assets/icons/Avatar.png"
              width={40}
              height={40}
              alt="profile"
            />
            <p>
              Hi, user <br /> let’s get stated
            </p>
          </div>
          <button className="rounded p-1.5 w-full bg-[rgb(18,127,255)] text-white">
            Join Now
          </button>
          <button className="rounded p-1.5 w-full text-[#127FFF] bg-white">
            Log in
          </button>
        </div>
        <div className="btn bg-[#F38332] cta-card">
          <p>Get US $10 off with a new supplier</p>
        </div>
        <div className="btn bg-[#55BDC3] cta-card">
          <p>Send quotes with supplier preferences</p>
        </div>
      </div>
    </section>
  );
};

export default Hero;
