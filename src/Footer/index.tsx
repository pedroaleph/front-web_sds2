import './styles.css';
import {ReactComponent as YoutubeICon } from './youtube.svg';
import {ReactComponent as LinkedinICon } from './linkedin.svg';
import {ReactComponent as InstagramICon } from './instagram.svg';

function Footer() {
    return(
       <footer className="main-footer">
           App desenvolvido durante a 2ª ed. do evento Semana DevSuperior
           <div className="footer-icons">
               <a href="https://www.youtube.com/c/DevSuperior" target="_new">
                    <YoutubeICon />
               </a>
               <a href="https://www.linkedin.com/school/devsuperior/" target="_new">
                    <LinkedinICon />
               </a>
               <a href="https://www.instagram.com/devsuperior.ig/" target="_new">
                    <InstagramICon />
               </a>
           </div>
       </footer> 
    );
}

export default Footer;