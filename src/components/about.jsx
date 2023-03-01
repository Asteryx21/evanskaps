import React from "react";
import ABOUT_IMG from '../assets/Screenshot_1.png';
import {FaUniversity} from 'react-icons/fa';
import {SiMicrosoftacademic} from 'react-icons/si'
import {HiAcademicCap} from 'react-icons/hi';
import PAPER from '../assets/m65496-paper-final.pdf';


export default function about() {
 
  return (
    <section id='about'>
      <h2>About me</h2>
      <div className='container about_container'>
      <div className='about_me'>
        <div className='about_me_image'>
            <img src={ABOUT_IMG} alt="Aboutmeimage" />
          </div>
        </div>

        <div className='about_content'>
          <div className='about_cards'>
            <article className='about_card'>
              <FaUniversity className='about_icon'/>
              <h5>Education</h5>
              <small><a href='https://www.ceid.upatras.gr/en' target='blank'>Computer Engineering & Informatics</a></small>
            </article>
            <article className='about_card'>
              <HiAcademicCap className='about_icon'/>
              <h5>Master Thesis</h5>
              <small><a href='#projects'>Galaxy Solutions</a></small>
            </article>
            <article className='about_card'>
              <SiMicrosoftacademic className='about_icon'/>
              <h5>Publication</h5>
              <small>Will be presented at <a href='https://2023.ieee-educon.org/' target="blank">EDUCON.</a>  <a href={PAPER} target="blank"> View paper</a></small>
            </article>
          </div>
          <p>
          During my studies, I discovered my passion for software engineering and development. I am a strong team player who can quickly learn and apply new technologies and thrives on working in agile environments. In my free time I enjoy playing MMORPG games.
          </p>
        </div>
      </div>
    </section>
  )
}
