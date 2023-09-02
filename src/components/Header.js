import Logo from "../assets/261752.jpg"
export const Header = () => {
  return (
    <header className="box">
      <img className="logo" src={Logo} alt="" />
      <div className="home">Home</div>
    </header>
  )
}
