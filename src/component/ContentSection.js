import React,{useContext} from 'react'
import './ContentSection.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import chrisevans from '../images/ContentSectionTopActors/chrisevans.jpg';
import chrishemsworth from '../images/ContentSectionTopActors/chrishemsworth.jpg';
import tom from '../images/ContentSectionTopActors/tom.jpg';
import ben from '../images/ContentSectionTopActors/ben.jpg';
import bale from '../images/ContentSectionTopActors/bale.jpg';
import leo from '../images/ContentSectionTopActors/leo.jpg';
import rock from '../images/ContentSectionTopActors/rock.jpg';



function ContentSection() {
    return (
      <div style={{"background": "black"}}>
        <div style={{"font-size":"30px","font-family": "roboto","background": "black"}}>Content Section</div>
          <div className="content">
            <img  src={chrisevans}/>
            <img  src={chrishemsworth} />
            <img  src={tom} />
            <img  src={ben}/>
            <img  src={bale}/>
            <img  src={leo}/>
            <img  src={rock}/>
          </div>
      </div>
    )
};
    

export default ContentSection;
