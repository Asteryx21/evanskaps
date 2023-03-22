import React from 'react'
import PROJECT1 from '../assets/project_a.png';
import PROJECT2 from '../assets/project_b.png';
import PROJECT3 from '../assets/project_c.png';
import PROJECT4 from '../assets/project_d.png';
import PROJECT5 from '../assets/project_e.png';
import PROJECT6 from '../assets/project_f.png';
import PROJECT7 from '../assets/project_g.png';
import PROJECT8 from '../assets/project_h.png'

const data = [
  {
    id: 1,
    image: PROJECT3,
    title: 'Galaxy Solutions',
    technologies: 'Python, PyGame library, RenPy (scripting language), Figma, SPSS',
    description: 'This Serious Game simulates all the stages of the recruitment process. It starts when the player is searching for vacancies and submitting applications, continues to the interview process, and concludes at the last stage, in which a company named “Jupiter Solutions” hires the player. The main objective of this game is to help graduates acquire basic interview skills and be aware of the whole process by making the learning experience more enjoyable and engaging. Throughout the game, the player must make decisions through multiple-choice actions and dialogue, and all these decisions affect the character’s events in the future.',
    github: 'https://evanskaps.itch.io/galaxy-solutions',
    demo: ''
  },
  {
    id: 7,
    image: PROJECT7,
    title: 'Project KaPa',
    technologies: 'JavaScript, JQuery, PHP, MySQL, CSS, SCSS',
    description: 'The user can register to our platform and: See information about our team, in the Calendar section where the events are posted they can click on some event and they can declare if they are interested to participate. In the Services section there is a map where they can see the areas where the team have done clean-ups (Green markers) and report a poluted area (Red markers). In the Education section there is quiz regarding 3Rs mentality. In the Profile section they can see the events they declared interested and a graph with all the users and their participation rates.',
    github: 'https://github.com/Asteryx21/projectkapa',
    demo: ''
  },
  {
    id: 8,
    image: PROJECT8,
    title: 'Project Waste',
    technologies: 'React JS, React Leaflet, React Three Fiber, Three.js',
    description: 'The project displays 2020 Eurostat data on recycling rates, waste production per capita, and renewable energy usage percentages for various European countries. The data is visualized on a map, allowing users to compare the environmental sustainability of different regions at a glance. The user can select from the top left dropmenu the data that he wants to visualize on the map. The legend updates aswell providing information of what the user sees each time. Also by clicking on each country displayed on the map he gets more information about the data that is provided.',
    github: 'https://asteryx21.github.io/waste_project/',
    demo: ''
  },
  {
    id: 2,
    image: PROJECT2,
    title: 'Movie recommendation system',
    technologies: 'Python, pandas, matplotlib, kNN algorithm, sklearn',
    description: 'A group project worked in a team of three. We developed a system that suggests movies to users based on the film they have watched and the ratings they have made. In addition, data were analyzed from which information was extracted and visualized. To develop the system, we used a user-based collaborative filtering technique & kNN algorithm. We examined two cases. Firstly the user has not rated any movies yet, and secondly, the user has already rated movies.',
    github: 'https://github.com/Asteryx21/Decision-Theory',
    demo: ''
  },
  {
    id: 3,
    image: PROJECT4,
    title: 'Natural language processing',
    technologies: 'Python, nltk library, TFIDF, Classification',
    description: 'I developed a crawler is monitoring news websites & downloads articles. After that, the program pre-processes & analyses the data (words tokenization), so we can represent the web pages in the vector space model. Then the program creates an index (based on TFIDF) & evaluates it (using queries). The second part of the project: I developed a classification system for uncategorized articles that were found here: http://qwone.com/~jason/20Newsgroups/',
    github: 'https://github.com/Asteryx21/Natural-language-processing',
    demo: ''
  },
  {
    id: 4,
    image: PROJECT1,
    title: 'Knowledge representation and reasoning ',
    technologies: 'Java, NetBeans, JUnit, Protégé, Owl ontologies.',
    description: 'Created a custom owl ontology for movies with the Protégé tool based on Movies (Produciton staff, genre, location of shooting etc.). Then developed, an application that loads the OWL ontology and applies the Inference model, retrieves and presents individuals of the ontology after the selection of a class by the user. Allows inserting new individuals. Allows to search for individuals based on user-defined parameter values ​​using SPARQL queries. A video showing what the app does:',
    github: 'https://github.com/Asteryx21/Knowledge-representation-and-reasoning',
    demo: 'https://www.youtube.com/watch?v=KuOnzobrXpc'
  },
  {
    id: 5,
    image: PROJECT5,
    title: 'Staff evaluation system',
    technologies: 'MySQL, Java, JUnit, MySQL Workbench, Netbeans',
    description: 'A staff evaluation system of a group of companies to which four categories of users are connected: Managers of the company in which the staff is evaluated. Managers decide on the positions that will be, announced for promotion. They also update employee records whenever there is a change (eg additional certification, an additional letter of recommendation, etc.). Evaluators who work with the company and they evaluate the staff, announce the job openings that can be claimed by employees, and make evaluations. Employees of the company. They can submit a request for a job position in which they can be promoted or transferred. And lastly the system administrator.',
    github: 'https://github.com/Asteryx21/Databases',
    demo: ''
  },
  {
    id: 6,
    image: PROJECT6,
    title: 'Spatiotemporal human activity data',
    technologies: 'JavaScript, JQuery, PHP, MySQL, CSS',
    description: 'The user registers and accesses the system by selecting a username & password. The user can upload his location information exported as JSON from Google Maps and, before submission, with the use of a map screen, can choose one or more areas for which he does not wish to submit the data. There, the app visualizes the data of his locations on the heatmap, and various graphs are displayed based on his activities and the date of his choice. There is also a leaderboard of ecological movement score this month, top ecological persons registered on the system (currently not working). Also, if you log in as an Admin, you can select to display the locations of all users in a heatmap based and filter out. Delete all data in the database after confirmation and export selected locations information displayed on the heatmap in CVS, XML, or JSON format.',
    github: 'https://github.com/Asteryx21/Web',
    demo: ''
  },


]

export default function projects() {
  return (
    <section id='projects'>
      <h2>Projects</h2>
      <div className='container projects_container'>
        {
          data.map(({id, image,description,technologies, title, github, demo}) => {
              if (demo !==''){
                return (
                  <article key={id} className='projects_item'>
                    <div className='projects_item_image'>
                      <img src={image} alt={title} />
                    </div>
                      <h3>{title} <br></br><p>{technologies}</p></h3>
                      <small>{description} <a href={demo} target="blank" className=''> here.</a></small>
                      <br></br>
                      <div className="projects_item_a">
                        <a href={github} rel="noreferrer" target="_blank" className='btn'>See more</a>
                      </div>
                  </article>
                )
            }  else {
              return (
                <article key={id} className='projects_item'>
                  <div className='projects_item_image'>
                    <img src={image} alt={title} />
                  </div>
                    <h3>{title} <br></br><p>{technologies}</p></h3>
                    <small>{description}</small>
                    <div className="projects_item_a">
                      <a href={github} rel="noreferrer" target="_blank" className='btn'>See more</a>
                    </div>
                </article>
              )
            }
          })
        }
      </div>
    </section>
  )
}
