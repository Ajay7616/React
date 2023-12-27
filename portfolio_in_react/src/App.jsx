import style from './App.module.css';
import {Navbar} from './components/Navbar/Navbar.jsx';
import { About } from './components/About/About.jsx';
import { Me } from './components/Me/Me.jsx';
import { Skill } from './components/Skill/Skill.jsx';
import { Project } from './components/Project/Project.jsx';
import { Contact } from './components/Contact/Contact.jsx';

function App() {

  return (
    <div className={style.App}>
      <Navbar />
      <Me />
      <About />
      <Project />
      <Skill />
      <Contact />
    </div>
  )
}

export default App
