import Image from "next/image";

export const Header = () => (
  <header className="header">
    <Image
      src={require("../../../assets/img/logo.png")}
      alt="Star Wars"
      width="120"
      height="50"
    />
  </header>
);
