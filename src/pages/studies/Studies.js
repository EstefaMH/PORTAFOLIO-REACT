import './Studies.css'
import Footer from "../../components/footer/Footer";
import Navbar from "../../components/navbar/Navbar";

function Studies() {
    return (
        <div className="main-container-studies">
            <Navbar />
            <section>
                <h1 className='title'>ESTUDIOS</h1>
                <p className='line-studies'></p>
            </section>
            <section>
                <article>
                    <h3>Tecnico en sistemas de informacion con profundizacion en desarrollo front-end </h3>
                    <p className='line-studies'></p>
                    <p><strong>INSTITUCION :</strong> Kuepa Edutech</p>

                </article>

                <article>
                     <h3>ingeniería de software </h3>
                     <p className='line-studies'></p>
                     <p><strong>INSTITUCION :</strong> Intitucion universitaria UCompensar</p>
                    
                </article>


            </section>
            
            

            <Footer />
        </div>
    );
}

export default Studies;