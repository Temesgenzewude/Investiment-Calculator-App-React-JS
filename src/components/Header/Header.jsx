import Logo from "../../assets/investment-calculator-logo.png";

export default function Header() {
  return (
    <header id="header">
        <img src={Logo} alt="Logo showing a money bag" />
      <h1>Investiment Calculator App</h1>
    </header>
  );
}