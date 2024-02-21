import "./About.css";
import Face from "../images/Smile.png";

//profile section meant to briefly introduce me
//currently placeholder
//Tailwind notes:
//* need to put grid first before grid-cols-2 actually works
//* px and py are padding
//* space-y-5 is space between children
//* ml-auto seems to be auto margin?
//* max-w-xs shrinks it, but because its a large image i think
function About() {
    return (
        <section className="bg-sky-800 px-24 py-32">
            <div className="grid grid-cols-2 text-white">
                <div className="text-3xl space-y-5">
                    <p>Hello, my name's Mylan and I'm trying to build a portfolio page.</p>
                    <p>Currently, I don't have much to show here, just typing some text in to simlulate the amount of text I might have once done.</p>
                    <p>The plan is to show some projects below, and attempt to show some cool web stuff with this site itself.</p>
                </div>

                <div>
                    <img 
                        src={Face}
                        className="ml-auto max-w-xs"
                    />
                </div>                
            </div>

        </section>


    );
}

export default About;