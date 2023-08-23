import LOGO1 from "../Logo.png"
function Footer() {
    return (
    <footer>
        <div>
            <ul>
                <img src={LOGO1} alt="Logo"></img>
                <li><p>navigation</p></li>
                <li><a href='/home'>home</a></li>
                <li><a href='./about'>specials</a></li>
                <li><a href='./special'>Testimonials</a></li>
                <li><a href='./rservation'>About</a></li>
            </ul>
        </div>
        <div>
            <ul>
                <li><p>Contacts</p></li>
                <li><a href='./Address'>Address</a></li>
                <li><a href='./Phone'>Phone</a></li>
                <li><a href='./Email'>Email</a></li>
            </ul>
        </div>
        <div>
            <ul>
                <li><p>Social Media</p></li>
                <li><a href='./Facebok'>Facebook</a></li>
                <li><a href='./Instagram'>instagrm</a></li>
                <li><a href='./whatsapp'>Whats app</a></li>
            </ul>
        </div>
    </footer>
    );

}
export default Footer