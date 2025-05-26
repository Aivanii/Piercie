const companiesLogos = [
  {
    src: "https://cdn.durable.co/assets/logo-showcase/logo-ipsum-3.png",
    alt: "Company X logo",
  },
  {
    src: "https://cdn.durable.co/assets/logo-showcase/logo-ipsum-3.png",
    alt: "Company X logo",
  },
  {
    src: "https://cdn.durable.co/assets/logo-showcase/logo-ipsum-3.png",
    alt: "Company X logo",
  },
  {
    src: "https://cdn.durable.co/assets/logo-showcase/logo-ipsum-3.png",
    alt: "Company X logo",
  },
  {
    src: "https://cdn.durable.co/assets/logo-showcase/logo-ipsum-3.png",
    alt: "Company X logo",
  },
  {
    src: "https://cdn.durable.co/assets/logo-showcase/logo-ipsum-3.png",
    alt: "Company X logo",
  },
  {
    src: "https://cdn.durable.co/assets/logo-showcase/logo-ipsum-3.png",
    alt: "Company X logo",
  },
  {
    src: "https://cdn.durable.co/assets/logo-showcase/logo-ipsum-3.png",
    alt: "Company X logo",
  },
  {
    src: "https://cdn.durable.co/assets/logo-showcase/logo-ipsum-3.png",
    alt: "Company X logo",
  },
];

const CompaniesScroll = () => {
  return (
    <div
      className="h-full max-w-[1920px] m-auto
                flex w-full overflow-hidden relative
                py-20 gap-20"
    >
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute left-0 top-0 h-full w-[120px] z-10 shadow-[inset_120px_0_60px_-60px_rgba(255,255,255,1)]"></div>
        <div className="absolute right-0 top-0 h-full w-40 z-10 shadow-[inset_-120px_0_60px_-60px_rgba(255,255,255,1)]"></div>
      </div>
      {companiesLogos.map((elem) => (
        <div key={elem.src} className="relative h-full flex-shrink-0">
          <img
            className="relative h-full object-contain"
            src={elem.src}
            alt={elem.alt}
          />
        </div>
      ))}
    </div>
  );
};

export default CompaniesScroll;
