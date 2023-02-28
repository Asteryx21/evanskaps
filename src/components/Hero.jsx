import CV from "../assets/evanskaps.pdf"
import {BsLinkedin,BsGithub} from 'react-icons/bs';

export default function Hero(){
    return  <section id="header" className="hero text-center container">
                    <h2>
                        <b>Evangelos Kapsoulakis  </b> <br></br>
                        <b className="sub-text">Software Engineer &amp; Developer</b>
                        <div className='cv_contact'>
                            <a href={CV} target="_blank" rel="noreferrer" className='btn'> View CV</a>
                            <a href='#contact' className='btn'>Contact me</a>
                        </div>
                        <div className='socials'>
                            The holy trinity - 1:
                            <a href="https://www.linkedin.com/in/evanskaps/"  rel="noreferrer" target='_blank'><BsLinkedin/></a>        
                            <a href="https://github.com/Asteryx21/"  rel="noreferrer" target='_blank'><BsGithub/></a>       
                        </div>

                    </h2>
            </section>
}