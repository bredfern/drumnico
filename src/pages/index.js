import React from 'react';
import Scrollspy from 'react-scrollspy';

import Layout from '../components/Layout';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Scroll from '../components/Scroll';
import overLayPic from '../assets/images/nico1.jpg';
import { Link } from 'gatsby';

const sections = [
  { id: 'one', bg: require('../assets/images/nico2.jpg') },
  { id: 'two', bg: require('../assets/images/nico3.jpg') },
  { id: 'four', bg: require('../assets/images/nico5.jpg') },
  { id: 'three', bg: require('../assets/images/nico4.jpg') },
  { id: 'five', bg: require('../assets/images/nico6.jpg') },
  { id: 'six', bg: require('../assets/images/nico7.jpg') },
  { id: 'seven', bg: require('../assets/images/nico8.jpg') }
];
const IndexPage = () => (
  <Layout>
    <Header />

    <section id="one" className="main special">
      <div className="container">
        <span className="image fit primary">
          <img src={sections[5].bg} alt="" />
        </span>
        <div className="content">
          <header className="major">
            <h2>Who I am</h2>
          </header>
          <p>
          Nico Spezzacatena is a multi-talented percussionist, 
performer, and educator from Hoboken, New Jersey. He 
received his BFA and MFA in world music performance from the 
California Institute of the Arts. Nico has been studying and 
researching traditional music and dance for over 25 years.
</p>
<p> In 1997, he founded Guineafia – a West African Drum and Dance 
Ensemble. In 1999, Nico traveled to Ghana, West Africa to 
research Ewe, Dagomba, and Asante culture, music, and dance. 
As a result, 3 documentaries were released. He has studied 
Drum and Dance under the Ladzekpo family, the Yevutsey 
family, Promise Dogbatsey, Sulley Imoro, the Lawluvi family 
(choreography and dance), Seth and Asari of the University of 
Legon, Kakraba Lobi, Doug Floyd, Mor Thiam, Sylla Diallo, Sidiki 
Dembele, Mamady Keita, Shodunke Ayanlekan and Ayandokun 
Ayanwale.
</p>
<p>
 Nico is a tabla disciple of Swapan Chaudhuri, and 
has also studied South Indian Karnatic music with Poovalur 
Srinivasan and S. Sankar. He has studied the Balinese and 
Javanese gamelans, and in 2010 traveled to Bali to further 
research Jegog, and gong making, among other things. 
Afro-Cuban and Haitian drumming has been studied, as well as an 
array of frame drums with John Bergamo. Nico has been 
involved in Hawaiian culture through his colleague’s at the Maui 
Theatre. 
</p>
<p>
Nico has performed with Olodum, Wadada Leo Smith, 
Trichy Sankaran, Bruce Springsteen, Los Lobos, Ozomatli, 
Huun-Huur-Tu, and Boogsie Sharp, to name a few. He has 
performed and given workshops in the Tri-State Area, Florida, 
California, Nevada, West Virginia, the Hawaiian Islands, Milan, 
and Ghana. In 2001, he recorded music for NBC’s Survivor
Kenya TV series. Nico is also a researcher and board member 
of the Nada Brahma Foundation, a non-profit organisation 
dedicated to the research, education and preservation of 
indigenous culture. On Maui, Nico was the lead percussionist in
‘Ulalena, the award-winning theatrical production depicting the 
history, mythology and culture of the Hawaiian peoples. He 
performed a staggering 4,500+ shows over a 16 and a half year 
run.
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
          <img src={sections[6].bg} alt="" />
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
            <span class="icon major fa-bullseye"></span>
              <h3><a href="#three">African Song</a></h3>
            </li>
            <li>
            <span class="icon major fa-bullseye"></span>
              <h3><a href="#four">Team Building</a></h3>
            </li>
            <li>
            <span class="icon major fa-bullseye"></span>
              <h3><a href="#five">Workshops</a></h3>
            </li>
            <li>
            <span class="icon major fa-bullseye"></span>
              <h3><a href="#six">Drum in the Sun</a></h3>
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
          <img src={sections[0].bg} alt="" />
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
          <img src={sections[1].bg} alt="" />
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

    <section id="five" className="main special">
      <div className="container">
        <span className="image fit primary">
          <img src={sections[4].bg} alt="" />
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

    <section id="six" className="main special">
      <div className="container">
        <span className="image fit primary">
          <img src={sections[3].bg} alt="" />
        </span>
        <div className="content">
          <header className="major">
            <h2>Drum in the Sun</h2>
          </header>
          <p>
          “Play exotic instruments from all over the world in a fun
and educational environment!!!”
</p>
<p>
Drum In The Sun is the new exciting and educational
activity on beautiful Maui led by global percussionist
Nico! During these classes, students will begin their
journey right here in Maui by exploring the traditional
instruments and rhythms of Hawaii and Tahiti. From
there, we will traverse the world of rhythm through
Africa, Latin America, India, and MORE!
</p>
<p>
During these activities, those attending will play
multiple ethnic instruments and also learn about the
history and importance of the drums in these cultures.
Each participant of Drum in the Sun will receive
multiple handouts, including maps, photos, and detailed
information about world rhythm and the instruments at
hand.
Drum in the Sun focuses on developing listening skills,
multiple percussive techniques, motor skills,
improvisation and soloing, and simply having a good
time!
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
        <form action="mailto:drumnico@hotmail.com" method="get" enctype="text/plain">
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
