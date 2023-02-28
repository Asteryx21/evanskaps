import React from 'react'
import {MdLibraryAddCheck} from 'react-icons/md';

export default function skills() {
  return (
    <section id="skills">
        <h2>My skills</h2>

        <div className='container skills_container'>
            <div className='skills_one'>
                {/* <h3>First rectangle</h3> */}
                <div className='skills_content'>
                    <article className='skills_details'>
                        <MdLibraryAddCheck className='skills_details_icon'/>
                        <div>
                        <h4>Python</h4>
                        </div>
                    </article>
                    <article className='skills_details'>
                        <MdLibraryAddCheck className='skills_details_icon'/>
                        <div>
                        <h4>Java</h4>
                        </div>
                    </article>
                    <article className='skills_details'>
                        <MdLibraryAddCheck className='skills_details_icon'/>
                        <div>
                        <h4>MySQL</h4>
                        </div>
                    </article>
                    <article className='skills_details'>
                        <MdLibraryAddCheck className='skills_details_icon'/>
                        <div>
                        <h4>PHP</h4>
                        </div>
                    </article>
                    <article className='skills_details'>
                        <MdLibraryAddCheck className='skills_details_icon'/>
                        <div>
                        <h4>Data Analysis</h4>        
                        </div>
                    </article>
                    <article className='skills_details'>
                        <MdLibraryAddCheck className='skills_details_icon'/>
                        <div>
                        <h4>NLP</h4>
                        </div>
                    </article>
                    <article className='skills_details'>
                        <MdLibraryAddCheck className='skills_details_icon'/>
                        <div>
                        <h4>Machine Learning</h4>
                        </div>
                    </article>
                    <article className='skills_details'>
                        <MdLibraryAddCheck className='skills_details_icon'/>
                        <div>
                        <h4>Git</h4>
                        </div>
                    </article>
                    
                </div>
            </div>

            <div className='skills_two'>
            {/* <h3>Second rectangle</h3> */}
                <div className='skills_content'>
                    <article className='skills_details'>
                        <MdLibraryAddCheck className='skills_details_icon'/>
                        <div>
                        <h4>JavaScript</h4>
                        </div>
                    </article>
                    <article className='skills_details'>
                        <MdLibraryAddCheck className='skills_details_icon'/>
                        <div>
                        <h4>React JS</h4>
                        </div>
                    </article>
                    <article className='skills_details'>
                        <MdLibraryAddCheck className='skills_details_icon'/>
                        <div>
                        <h4>Angular Framework</h4>
                        </div>
                    </article>
                    <article className='skills_details'>
                        <MdLibraryAddCheck className='skills_details_icon'/>
                        <div>
                        <h4>Data Visualization</h4>
                        </div>
                    </article>
                    <article className='skills_details'>
                        <MdLibraryAddCheck className='skills_details_icon'/>
                        <div>
                        <h4>Figma</h4>
                        </div>
                    </article>
                    <article className='skills_details'>
                        <MdLibraryAddCheck className='skills_details_icon'/>
                        <div>
                        <h4>CSS & SCSS</h4>
                        </div>
                    </article>
                    <article className='skills_details'>
                        <MdLibraryAddCheck className='skills_details_icon'/>
                        <div>
                        <h4>Android Studio</h4>
                        </div>
                    </article>
                    <article className='skills_details'>
                        <MdLibraryAddCheck className='skills_details_icon'/>
                        <div>
                        <h4>RenPy (Scripting Laguage)</h4>
                        </div>
                    </article>
                </div>
            </div>
        </div>


    </section>
  )
}
