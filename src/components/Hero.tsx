import Image from "next/image";

const Hero = () => {
  return (
    <section className="rounded bg-white p-5 flex gap-4">
      <div className="tab grid w-52">
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

      <div className="hero-main group relative flex-1 overflow-hidden rounded">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/assets/hero-banner.png"
          alt="banner"
          className="absolute h-full w-full object-cover "
        />

        <div className="content relative z-20 p-11">
          <p className="text-3xl">Latest Trending</p>
          <p className="text-3xl font-bold">Electronic items</p>
          <button className="btn bg-white mt-4 ">
            <p className="px-2">Learn More</p>{" "}
          </button>
        </div>
      </div>

      <div className="cta flex flex-col gap-2.5 w-52">
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
