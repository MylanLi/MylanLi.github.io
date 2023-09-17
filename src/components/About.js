import "./About.css";
import GreenSquare from "./greenSquare.png"

function About() {
    return (
        <section className="bg-secondery text-black px-5 py-7" id="about">
            <div className="container mx-auto grid md:grid-cols-2 items-center justify-center md:justify-between">
                <div className="about-info">
                    <p>text 1</p>
                    <p>text 2 aaaaaaaaaaaaaaaaaaaaaaaaaaaa dageaaaaaaaaaaaaa egaaaaaar egalhse esloeh huwe</p>
                </div>
                <div className="relative w-24 h-24">
                    <img
                        src={GreenSquare}
                        alt="green Square thats a circl"
                        className="rounded-full"
                    />
                </div>
            </div>
        </section>
    );
}

export default About;