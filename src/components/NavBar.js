import React, { useState } from 'react';

function NavBar() {

    // TO DO: make nav bar scrolling legit

    const [AboutMeH1, setAboutMeH1] = useState('navlink')
    const [ProjectsH1, setProjectsH1] = useState('navlink')
    const [SkillsH1, setSkillsH1] = useState('navlink')
    const [ProfExperienceH1, setProfExperienceH1] = useState('navlink')
    
    const changevalueonScroll=()=>{

        const scrollValue=document.documentElement.scrollTop;
        
        if (scrollValue <= 699) {
            setAboutMeH1('navlink')
            setProjectsH1('navlink')
            setSkillsH1('navlink')
            setProfExperienceH1('navlink')
        } else if (scrollValue >= 699 && scrollValue <= 1399){
            setAboutMeH1('navlink-highlight')
            setProjectsH1('navlink')
            setSkillsH1('navlink')
            setProfExperienceH1('navlink')
        } else if (scrollValue >= 1399 && scrollValue <= 2200) {
            setAboutMeH1('navlink')
            setProjectsH1('navlink-highlight')
            setSkillsH1('navlink')
            setProfExperienceH1('navlink')
        } else if (scrollValue >= 2200 && scrollValue <= 2899) {
            setAboutMeH1('navlink')
            setProjectsH1('navlink')
            setSkillsH1('navlink-highlight')
            setProfExperienceH1('navlink')
        } else if (scrollValue >= 2900) {
            setAboutMeH1('navlink')
            setProjectsH1('navlink')
            setSkillsH1('navlink')
            setProfExperienceH1('navlink-highlight')
        }
    }
    
    window.addEventListener('scroll',changevalueonScroll);


    function handleClickAbout()  {
        window.scrollTo({
            top: 700,
            behavior: "smooth"
          });
        };

    function handleClickProjects() {
        window.scrollTo({
            top: 1400,
            behavior: "smooth"
          });
        };

    function handleClickSkills() {
        window.scrollTo({
            top: 2350,
            behavior: "smooth"
          });
        };

    function handleClickExperience() {
        window.scrollTo({
            top: 2900,
            behavior: "smooth"
            });
        };

    return (
        <>
            <div className="navbar-container">
                    <p className={AboutMeH1} onClick={handleClickAbout}>About Me</p>
                    <p className={ProjectsH1} onClick={handleClickProjects}>Projects</p>
                    <p className={SkillsH1} onClick={handleClickSkills}>Skills</p>
                    <p className={ProfExperienceH1} onClick={handleClickExperience}>Experience</p>
            </div> 
        </>
    )

}

export default NavBar;