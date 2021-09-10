
import './App.css';
import './data.js'
import  {Heading,Iernalinformatio,Skill,Honouraward,Infoobj,Worke ,Activity} from './data.js';
Heading()

function App() {
  return (
    <>

<Heading/>
<div className="grey">
<Iernalinformatio/>
<Skill/>

<Honouraward/>
</div>
<Infoobj/>
<Worke/>

<Activity/>

    </>
  );
}

export default App;
