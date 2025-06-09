const companiesLogos = [
  {
    src: "https://cdn.durable.co/assets/logo-showcase/logo-ipsum-1.png",
    alt: "Company X1 logo",
  },
  {
    src: "https://cdn.durable.co/assets/logo-showcase/logo-ipsum-2.png",
    alt: "Company X2 logo",
  },
  {
    src: "https://cdn.durable.co/assets/logo-showcase/logo-ipsum-3.png",
    alt: "Company X3 logo",
  },
  {
    src: "https://cdn.durable.co/assets/logo-showcase/logo-ipsum-4.png",
    alt: "Company X4 logo",
  },
  {
    src: "https://cdn.durable.co/assets/logo-showcase/logo-ipsum-5.png",
    alt: "Company X5 logo",
  },
];

const CompaniesScroll = () => {
  return (
    <div
      className="h-full max-w-[1920px] w-dvw m-auto
                flex relative overflow-hidden"
    >
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute left-0 top-0 h-full w-40 z-10 shadow-[inset_120px_0_60px_-60px_rgba(255,255,255,1)]"></div>
        <div className="absolute -right-1 top-0 h-full w-40 z-10 shadow-[inset_-120px_0_60px_-60px_rgba(255,255,255,1)]"></div>
      </div>
      <div
        id="scrollCompaniesElem"
        className="h-full m-auto
                flex w-full relative
                py-20 gap-20 companies-scroll"
      >
        {companiesLogos.map((elem) => (
          <div key={elem.src} className="relative h-full flex-shrink-0">
            <img
              className="relative h-full object-contain"
              src={elem.src}
              alt={elem.alt}
            />
          </div>
        ))}
        {companiesLogos.map((elem) => (
          <div
            key={`${elem.src}-${2}`}
            className="relative h-full flex-shrink-0"
          >
            <img
              className="relative h-full object-contain"
              src={elem.src}
              alt={elem.alt}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default CompaniesScroll;
