import { NavLink } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-zinc-800 text-white">
      <div className="py-3 pt-10">
        <div className="container mx-auto max-w-[80%]">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 grid-flow-row grid-">
            <div className="col-sm-6">
              <NavLink to={`/`}>
                <img src="https://i.imgur.com/99nM9G2.png" width="150" />
              </NavLink>
              <p>
                Huydev Hệ thống bán source code tự động Đảm bảo uy tín và chất
                lượng
              </p>
              <ul className="c-info">
                <li className="flex items-center">
                  <NavLink to={`sms:0775502724`} className="c-font-regular">
                    Quốc Huy
                  </NavLink>
                </li>
                <li className="flex items-center">
                  {" "}
                  Làm việc từ 8h đến 21h hằng ngày
                </li>
              </ul>
            </div>
            <div className="col-sm-6">
              <h3 className="c-font-upper c-font-bold c-text-2xl">ABOUT US</h3>
              <p>
                Chúng tôi làm việc một cách chuyên nghiệp, uy tín, nhanh chóng
                và luôn đặt quyền lợi của bạn lên hàng đầu
              </p>
              <ul className="c-socials">
                <li className="pt-2 pb-2">
                  {" "}
                  <a
                    href="https://www.dmca.com/Protection/Status.aspx?ID=55a6f3e7-4f05-452a-8373-fb7033b7fb8a&amp;refurl=https://shopcode.biz/"
                    title=" DMCA.com Protection Status"
                    className="dmca-badge mb-2"
                  >
                    {" "}
                    <img
                      src="https://images.dmca.com/Badges/dmca_protected_sml_120m.png?ID=67e43413-9fd4-4e84-8950-3574a0286897"
                      alt="DMCA.com Protection Status"
                    />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <hr />
      <div className="py-3">
        <div className="container mx-auto max-w-[80%]">
          <div className="grid grid-cols-2 gap-4 grid-flow-row grid-">
            <div className="">
              Copyright © 2022 Source - Design by{" "}
              <NavLink to={`fb.com/huydev`}>HuyDev</NavLink>
            </div>
            <div className="">
              <NavLink to={`/`}>Terms of Service</NavLink>{" "}
              <NavLink className="c-ml-3" to={`/`}>
                Privacy Policy
              </NavLink>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
