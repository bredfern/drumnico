import React from 'react';
import Scrollspy from 'react-scrollspy';

import Layout from '../components/Layout';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Scroll from '../components/Scroll';
import overLayPic from '../assets/images/overlay.png';
import { Link } from 'gatsby';

const sections = [
  { id: 'one', bg: require('../assets/images/pic01.jpg') },
  { id: 'two', bg: require('../assets/images/pic02.jpg') },
  { id: 'three', bg: require('../assets/images/pic03.jpg') },
];
const IndexPage = () => (
  <Layout>
    <Header />

    <section id="one" className="main special">
      <div className="container">
        <span className="image fit primary">
          <img src={sections[0].bg} alt="" />
        </span>
        <div className="content">
          <header className="major">
            <h2>Who I am</h2>
          </header>
          <p>
          Nico Spezzacatena is a multi-talented percussionist, performer, and educator from Hoboken, New Jersey. 
          He received his BFA and MFA in world music performance from the California Institute of the Arts. 
          Nico has been studying and researching traditional music and dance for over 15 years. 
          In 1997, he founded Guineafia - a West African Drum and Dance Ensemble. 
          </p>
          <p>
          In 1999, Nico traveled to Ghana, West Africa to research Ewe, Dagomba, and Asante culture, dance and music. 
          He has studied Drum and Dance under the Ladzekpo family, the Yevutsey family, Sulley Imoro, 
          the Lawluvi family (choreography and dance), Asari of Legon, Kakraba Lobi, Doug Floyd, Mor Thiam, 
          and Mamady Keita.
          </p>
          <p> Nico is a tabla disciple of Swapan Chaudhuri, and has also studied South Indian Karnatic 
          music with Poovalur Srinivasan. He has studied Javanese and Balinese gamelan, Afro-Cuban 
          and Haitian drumming, and frame drums with John Bergamo. 
          </p>
          <p>
          Nico has performed with Olodum, Boogsie Sharp, Wadada Leo Smith, Huun-Huur-Tu, Ozomatli, and Mark Karan, to name a few. 
          Nico has performed and given workshops in the Tri-State Area, Florida, California, Nevada, West Virginia, Milan, 
          the Hawaiian Islands, and Ghana. In 2001, he recorded music for NBC's Survivor Kenya TV series. 
          </p>
          <p>
          Nico is also a researcher and board member of the Nada Brahma Foundation, a non-profit organization dedicated to the research, 
          education, and preservation of indigenous culture. Currently on Maui, Nico is the lead percussionist in “Ulalena,” 
          the award-winning theatrical production depicting the history, mythology, and culture of the Hawaiian peoples.
          </p>
        </div>
        <Scroll type="id" element="two">
          <a href="#two" className="goto-next ">
            Next
          </a>
        </Scroll>
      </div>
    </section>

    <section id="two" className="main special">
      <div className="container">
        <span className="image fit primary">
          <img src={sections[1].bg} alt="" />
        </span>
        <div className="content">
          <header className="major">
            <h2>Stuff I do</h2>
          </header>
          <p>
           As a percussion professional I offer several services.
          </p>
          <ul className="icons-grid">
            <li>
              <span className="icon major fa-phone" />
              <h3><a href="#three">African Song</a></h3>
            </li>
            <li>
              <span className="icon major fa-pencil" />
              <h3><a href="#four">Team Building</a></h3>
            </li>
            <li>
              <span className="icon major fa-code" />
              <h3><a href="#five">Workshops</a></h3>
            </li>
            <li>
              <span className="icon major fa-coffee" />
              <h3><a href="#footer">Private Instruction</a></h3>
            </li>
          </ul>
        </div>
        <Scroll type="id" element="three">
          <a href="#three" className="goto-next ">
            Next
          </a>
        </Scroll>
      </div>
    </section>

    <section id="three" className="main special">
      <div className="container">
        <span className="image fit primary">
          <img src={sections[2].bg} alt="" />
        </span>
        <div className="content">
          <header className="major">
            <h2>Africa Song</h2>
          </header>
          <p>
              A class that focuses on Ewe, Fo, Egun, and Ga-Adangbe songs from Ghana, 
West Africa. Students will learn both lead and chorus parts. English translations, 
along with the meaning and historical information are also given to the students. 
 This class will help with pronunciation of the languages as well as fortify what 
they are learning in the West African Ensemble. 
 Students will clap, walk and dance in time, and also play bells and rattles 
while they sing.
              </p>
        </div>
        <Scroll type="id" element="footer">
          <a href="#footer" className="goto-next ">
            Next
          </a>
        </Scroll>
      </div>
    </section>

    <section id="four" className="main special">
      <div className="container">
        <span className="image fit primary">
          <img src={sections[2].bg} alt="" />
        </span>
        <div className="content">
          <header className="major">
            <h2>Corporate Team Building</h2>
          </header>
          <p>
          Nico offers team building workshops though rhythm…This is a great way to build 
communication and camaraderie within the team. They will have to use listening skills to 
communicate with each other through percussive means. These workshops will boost 
confidence, increase productivity, create new bonds, and most importantly be fun and 
interactive.
              </p>
        </div>
        <Scroll type="id" element="footer">
          <a href="#footer" className="goto-next ">
            Next
          </a>
        </Scroll>
      </div>
    </section>

    <section id="fivr" className="main special">
      <div className="container">
        <span className="image fit primary">
          <img src={sections[2].bg} alt="" />
        </span>
        <div className="content">
          <header className="major">
            <h2>Workshops</h2>
          </header>
          <p>
          Nico is available to give workshops for schools, after school programs, and corporate events. 
Workshops in West African drum and dance (Ewe, Dagomba, and Manding), Afro-Cuban 
drumming, North and South Indian rhythmic principles, and Kecak (Balinese Monkey Chant) 
are currently offered. These workshops are fun and educational and essential for students of 
all ages and backgrounds. 
              </p>
        </div>
        <Scroll type="id" element="footer">
          <a href="#footer" className="goto-next ">
            Next
          </a>
        </Scroll>
      </div>
    </section>

    <section id="footer">
      <div className="container">
        <header className="major">
          <h2>Get in touch</h2>
        </header>
        <form method="post" action="#">
          <div className="row gtr-uniform">
            <div className="col-6 col-12-xsmall">
              <input type="text" name="name" id="name" placeholder="Name" />
            </div>
            <div className="col-6 col-12-xsmall">
              <input type="email" name="email" id="email" placeholder="Email" />
            </div>
            <div className="col-12">
              <textarea
                name="message"
                id="message"
                placeholder="Message"
                rows="4"
              />
            </div>
            <div className="col-12">
              <ul className="actions special">
                <li>
                  <input
                    type="submit"
                    value="Send Message"
                    className="primary"
                  />
                </li>
              </ul>
            </div>
          </div>
        </form>
        <Link to="/Elements"> Check out Elements page</Link>
      </div>
      <Footer />
    </section>

    <Scrollspy
      items={sections.map(s => s.id)}
      currentClassName="active"
      offset={50}
      componentTag={'div'}
    >
      {sections.map(s => {
        return (
          <div
            key={s.id}
            className="main-bg"
            id={`${s.id}-bg`}
            style={{ backgroundImage: `url(${overLayPic}), url(${s.bg})` }}
          />
        );
      })}
    </Scrollspy>
  </Layout>
);

export default IndexPage;
