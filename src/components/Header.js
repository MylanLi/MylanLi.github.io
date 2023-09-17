import "./Header.css";

function Header() {
    return (
        <header className="bg-purple-200 flex justify-between px-5">     
            <div>
                hekki
            </div>

            <nav>
                <ul className="flex">
                    {/* li has its css in the actual css file, just as a reminder for copies */}
                    <li>
                        one
                    </li>
                    <li>
                        two
                    </li>
                </ul>
            </nav>
        </header>
    );
}
  
export default Header;
  