import velvetLogo from "../assets/logo.png";

const Header = () => {
  return (
    <header style={{ backgroundColor: "#FFDAB9" }} className="p-3">
      <div className="container">
        <div className="d-flex flex-wrap align-items-center justify-content-lg-start">
          <a
            href="/"
            className="d-flex align-items-center mb-2 mb-lg-0 text-decoration-none logo"
          >
            <img
              src={velvetLogo}
              alt="VELVET Logo"
              style={{ height: "50px", width: "auto" }}
              className="logo-img"
            />
          </a>

          <ul className="nav col-12 col-lg-auto me-lg-auto mb-2  mb-md-0">
            <li>
              <a href="#" className="nav-link px-2 text-black">
                Home
              </a>
            </li>
            <li>
              <a href="#" className="nav-link px-2 text-black">
                Features
              </a>
            </li>
            <li>
              <a href="#" className="nav-link px-2 text-black">
                Pricing
              </a>
            </li>
            <li>
              <a href="#" className="nav-link px-2 text-black">
                FAQs
              </a>
            </li>
            <li>
              <a href="#" className="nav-link px-2 text-black">
                About
              </a>
            </li>
          </ul>

          <form
            className="col-12 col-lg-auto mb-3 mb-lg-0 me-lg-3"
            role="search"
          >
            <input
              type="search"
              className="form-control form-control-dark text-bg-white"
              placeholder="Search..."
              aria-label="Search"
            />
          </form>

          <div className="text-end">
            <button
              type="button"
              style={{
                backgroundColor: "#E9967A",
                color: "white",
                border: "none",
              }}
              className="btn btn-outline-light me-2"
            >
              Login
            </button>
            <button type="button" className="btn btn-warning">
              Sign-up
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
