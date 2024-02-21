import "./Header.css";

//header for page, tutorial says to use hyperlinks, will wait and see first
function Header() {
    return (
        <header className="bg-sky-900 flex justify-between px-5 py-2 text-white">     
            <div>
                TempTitle
            </div>

            <nav>
                <ul className="flex space-x-3">
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
  