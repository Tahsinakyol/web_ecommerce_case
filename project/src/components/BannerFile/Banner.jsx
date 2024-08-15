import "./Banner.css";
const Banner = () => {
  return (
    <>
      <div className="banner_outher">
        <div className="row">
          <div className="col-xs-12 col-sm-12 col-md-12 col-lg-6">
            <img
              className="img_left_slide"
              src="/yetis.jpg"
              alt="This image not see"
            />
          </div>
          <div
            className="col-xs-12 col-sm-12 col-md-12 col-lg-6"
            data-aos="zoom-in"
          >
            <div className="right_slide_outher">
              <div className="right_slide_inner_top">
                <a className="right_slider_innerTop_link" href="/">
                  Lorem, ipsum.
                </a>
                <a className="right_slider_innerTop_link" href="/">
                  Lorem, ipsum.
                </a>
                <a className="right_slider_innerTop_link" href="/">
                  Lorem, ipsum.
                </a>
                <a className="right_slider_innerTop_link" href="/">
                  Lorem, ipsum.
                </a>
              </div>
              <h1 className="header_slider_right">Hızır Global Case</h1>
              <span>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Tempora ullam expedita enim eos praesentium perferendis, unde
                ipsum sapiente alias voluptatibus autem facilis amet consectetur
                minima, animi cupiditate placeat harum cum! Lorem ipsum dolor
                sit amet consectetur, adipisicing elit. Tempora ullam expedita
                enim eos praesentium perferendis, unde ipsum sapiente alias
                voluptatibus autem facilis amet consectetur minima, animi
                cupiditate placeat harum cum!
              </span>
              <a
                href="https://yetisplus.com/"
                target="_blank"
                className="button_location"
              >
                Yetiş WebSite
                <img
                  className="logo_abs"
                  src="/logo.jpg"
                  alt="Logo undefined"
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Banner;
