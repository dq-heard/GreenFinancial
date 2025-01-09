import { logo } from "../assets";

export const Logo = () => {
  return (
    <a href="/">
      <div className="logo-area">
        <img src={logo} alt="green financial agency" className="logo-image" />
        <span className="logo-text">Green Financial&nbsp;Agency</span>
      </div>
    </a>
  );
};
