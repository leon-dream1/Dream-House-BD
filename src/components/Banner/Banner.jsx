const Banner = () => {
  return (
    <div className="carousel w-full h-[900px]">
      <div
        id="slide1"
        className="carousel-item relative w-full bg-image-1 bg-cover bg-no-repeat"
      >
        {/* <img src={image1} className="w-full object-cover" /> */}
        <div className="w-[60%] mx-auto flex items-center text-center">
          <div>
            <h1 className="text-[60px] font-merriweather font-extrabold text-[#4860ca]">
              Explore Luxury Living & Hospitality Excellence
            </h1>
            <p className="text-[18px] text-[#ece4e4] font-medium">
              Discover a world where luxury meets comfort, and hospitality is a
              way of life. Explore our exclusive collection of premier real
              estate properties, crafted to elevate your living experience.
              Whether you are looking to sell or let your home or want to buy or
              rent a home, we really are the people for you to come to.
            </p>
          </div>
        </div>
        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
          <a href="#slide3" className="btn btn-circle">
            ❮
          </a>
          <a href="#slide2" className="btn btn-circle">
            ❯
          </a>
        </div>
      </div>
      <div
        id="slide2"
        className="carousel-item relative w-full bg-image-5 bg-no-repeat bg-cover"
      >
        {/* <img src={image1} className="w-full object-cover" /> */}
        <div className="w-[60%] mx-auto flex items-center text-center">
          <div>
            <h1 className="text-[60px] font-merriweather font-extrabold text-[#4860ca]">
              Welcome to Luxury Living: Where Every Detail Exceeds Expectations
            </h1>
            <p className="text-[18px] text-[#ece4e4] font-medium">
              Indulge in a lifestyle of opulence and refinement where every
              detail is meticulously curated to surpass your expectations.
              Immerse yourself in the epitome of luxury living with our
              exclusive real estate offerings, where unparalleled hospitality
              transforms houses into homes Whether you are looking to sell or
              let your home or want to buy or rent a home, we really are the
              people for you to come to.
            </p>
          </div>
        </div>
        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
          <a href="#slide1" className="btn btn-circle">
            ❮
          </a>
          <a href="#slide3" className="btn btn-circle">
            ❯
          </a>
        </div>
      </div>
      <div
        id="slide3"
        className="carousel-item relative w-full bg-image-3 bg-cover bg-no-repeat"
      >
        {/* <img src={image1} className="w-full object-cover" /> */}
        <div className="w-[60%] mx-auto flex items-center text-center">
          <div>
            <h1 className="text-[60px] font-merriweather font-extrabold text-[#4860ca]">
              Find Your Dream Home: Where Luxury Meets Comfort
            </h1>
            <p className="text-[18px] text-[#ece4e4] font-medium">
              Embark on a journey to find your perfect sanctuary, where luxury
              seamlessly intertwines with comfort. Explore our curated selection
              of exquisite homes designed to exceed your expectations. From
              elegant interiors to serene surroundings, each residence is a
              testament to fine living. Discover the essence of home with us and
              unlock a world of unparalleled comfort and style. Whether you are
              looking to sell or let your home or want to buy or rent a home, we
              really are the people for you to come to.
            </p>
          </div>
        </div>
        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
          <a href="#slide2" className="btn btn-circle">
            ❮
          </a>
          <a href="#slide4" className="btn btn-circle">
            ❯
          </a>
        </div>
      </div>
      <div
        id="slide4"
        className="carousel-item relative w-full bg-image-8 bg-cover bg-no-repeat"
      >
        {/* <img src={image1} className="w-full object-cover" /> */}
        <div className="w-[60%] mx-auto flex items-center text-center">
          <div>
            <h1 className="text-[60px] font-merriweather font-extrabold text-[#4860ca]">
              Find Your Dream Home: Where Luxury Meets Comfort
            </h1>
            <p className="text-[18px] text-[#e8a76a] font-medium">
              Embark on a journey to find your perfect sanctuary, where luxury
              seamlessly intertwines with comfort. Explore our curated selection
              of exquisite homes designed to exceed your expectations. From
              elegant interiors to serene surroundings, each residence is a
              testament to fine living. Discover the essence of home with us and
              unlock a world of unparalleled comfort and style. Whether you are
              looking to sell or let your home or want to buy or rent a home, we
              really are the people for you to come to.
            </p>
          </div>
        </div>
        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
          <a href="#slide2" className="btn btn-circle">
            ❮
          </a>
          <a href="#slide1" className="btn btn-circle">
            ❯
          </a>
        </div>
      </div>
    </div>
  );
};

export default Banner;
