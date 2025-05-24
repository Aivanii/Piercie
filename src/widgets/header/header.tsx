const Header = () => {
  return (
    <header className="absolute top-0 left-0">
      <div className="max-w-[1920px] w-dvw relative px-6 py-12">
        <a href="/" className="w-fit">
          <h2
            className="text-2xl text-black header-logo
                w-fit"
          >
            Piercie
          </h2>
        </a>
      </div>
    </header>
  );
};

export default Header;
