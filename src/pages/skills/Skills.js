import './Skills.css'
import icon_react from '../../utils/img/react-icon.svg'
import icon_js from '../../utils/img/js-icon.png'
import icon_html from '../../utils/img/html-icon.webp'
import icon_css from '../../utils/img/css-icon.webp'
import Navbar from '../../components/navbar/Navbar'
import Footer from '../../components/footer/Footer';

function Skills(){
    return (
        <div>
            <Navbar />
            <section className="container">

            </section>

            <section className="container-skills">
                <article className='skill'>
                    <img src={icon_react}/>
                    <p className='skill-name'>React</p>
                </article>

                <article className='skill'>
                    <img src={icon_js}/>
                    <p className='skill-name'>JavaScript</p>
                </article>

                <article className='skill'>
                    <img src={icon_html}/>
                    <p className='skill-name'>HTML</p>
                </article>

                <article className='skill'>
                    <img src={icon_css}/>
                    <p className='skill-name'>CSS</p>
                </article>

            </section>
            <Footer />
        </div>
        
    );
}

export default Skills;