import LOGO from "../Logo.png"
function Header() {
    return (
        <header>
            <nav>
                <ul>
                    <img src={LOGO} alt="Logo"></img>
                    <li><a href='/home'>home</a></li>
                    <li><a href='./about'>About</a></li>
                    <li><a href='./special'>Menu</a></li>
                    <li><a href='./rservation'>Reservations</a></li>
                    <li><a href='./orderonline'>Order Online</a></li>
                    <li><a href='./login'>Login</a></li>
                </ul>
        </nav>
      </header>
    );

}
export default Header