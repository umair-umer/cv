import './App.css';

let Heading=()=>{
   return (
  <div className="header">
      <h1 className="head">umair umer</h1>
      


  </div>


   );


}


 let Iernalinformatio=()=>{
     return(
         <div className="pi">
             <h2>persnal information</h2>
             <ul className="infolist">
                <li>male</li>
                <li> Date of birthS  23/3/1996</li>
                <li> mobile  03122612142</li>
                <li>  umerumair228@gmailcom</li>
                
                
                
                
                </ul>

             

         </div>
     );
 }
let Skill=()=>{
    return(
        
            <div className="sh">
             <h2 className="">Skills</h2>
             <ul className="skillist">
                <li>Full stack Developer
                    <ul>
                    <li>Html/css</li>
                    <li>javascript</li>
                    <li>firebaseDatabase</li>
                    <li>React-js</li>
                    </ul>
                </li>
                
                <li>Languages
                    <ul>
                        <li>englis</li>
                        <li>urdue</li>
                        <li>french</li>
                    </ul>
                </li>
                
                
                
                
                
                </ul>
</div>

    );
}
 let Honouraward=()=>{
     return(
        
             <div className="hh">
                 <h2>Honouraward</h2>
               <ul className="skillist">
                   <li>
                       <p>certified from Smit</p>
                   </li>
                   <li>
                       <p>Bechlor iN CsIt</p>
                   </li>
                   <li> Digital marketing from Smit</li>
               </ul>
             </div>
         
     );
 }
 let Infoobj=()=>{
     return(
      
      <>
      <div className="inobj">
            <h1 className="h1">objects</h1>
            </div>
            <div className="detail">
            <p>Fill in your Career’s Objective
+ Shorterm (in the next 2 years).
Ex: Complete Diploma of Marketing at XYZ university, and be fluently about photoshop skill in the next 6 months
+ Longterm (In the next 3-5 years).
Ex: To be an CMO for ACB company, running at least 5 big sucessful campaigns for company</p>
</div>

</>
        
     );
 }
 let Worke =()=>{
     return(
     <>   
        <div className="workobj">
              <h1 className="h3">workexperience</h1>
              
              <div className="details">
              <p>Fill in your Career’s Objective
  + Shorterm (in the next 2 years).
  Ex: Complete Diploma of Marketing at XYZ university, and be fluently about photoshop skill in the next 6 months
  + Longterm (In the next 3-5 years).
  Ex: To be an CMO for ACB company, running at least 5 big sucessful campaigns for company</p>
  </div>
  </div>
  
  </>
     );


 }
 let Activity=()=>{
     return(
         <>
            <div className="activity">
                <h2 className="h">Activity</h2>
                <ul>
                    <li>boxing</li>
                    <li>chase</li>
                    <li>gym</li>
                </ul>
            </div>
         </>
     );
 }


export { Heading,Iernalinformatio,Skill,Honouraward,Infoobj,Worke,Activity};