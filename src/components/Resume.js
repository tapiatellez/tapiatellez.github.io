import React from 'react';

export default function Resume(props) {

    if (props.data) {
        var skillmessage = props.data.skillmessage;
        var education = props.data.education.map(function (education) {
            return <div key={education.school}><h3>{education.school}</h3>
                <p className="info">{education.degree} <span>&bull;</span><em className="date">{education.graduated}</em></p>
                <p>{education.description}</p></div>
        })
        var work = props.data.work.map(function (work) {
            return <div key={work.company}><h3>{work.company}</h3>
                <p className="info">{work.title}<span>&bull;</span> <em className="date">{work.years}</em></p>
                <p>{work.description}</p>
            </div>
        })
        var publications = props.data.publications.map(function (publications) {
            return <div key={publications.title}><h3>{publications.title}</h3>
                <p className="info">{publications.magazine}<span>&bull;</span> <em className="date">{publications.year}</em></p>
                <p>{publications.description}</p>
                <a href = {publications.url} > {publications.url}</a>
            </div>
        })
        var skills = props.data.skills.map((skills) => {
            var className = 'bar-expand ' + skills.name.toLowerCase();
            return (
                <li key={skills.name}>
                    <span style={{ width: skills.level, backgroundColor: '#740001' }} className={className}></span><em>{skills.name}</em>
                </li>
            )
        })
        var complementary = props.data.complementary.map(function (complementary) {
            return <div key={complementary.title}><h3>{complementary.title}</h3>
                <p className="info">{complementary.school}<span>&bull;</span> <em className="date">{complementary.year}</em></p>
                <p>{complementary.description}</p>
            </div>
        })
    }

    return (
        <section id="resume">
            <div className="row education">
                <div className="three columns header-col">
                    <h1><span>Education</span></h1>
                </div>

                <div className="nine columns main-col">
                    <div className="row item">
                        <div className="twelve columns">
                            {education}
                        </div>
                    </div>
                </div>
            </div>


            <div className="row work">
                <div className="three columns header-col">
                    <h1><span>Work</span></h1>
                </div>
                <div className="nine columns main-col">
                    {work}
                </div>
            </div>

            <div className="row publications">
                <div className="three columns header-col">
                    <h1><span>Publications</span></h1>
                </div>
                <div className="nine columns main-col">
                    {publications}
                </div>
            </div>

            <div className="row skill">
                <div className="three columns header-col">
                    <h1><span>Skills</span></h1>
                </div>

                <div className="nine columns main-col">
                    <p>{skillmessage}
                    </p>
                    <div className="bars">
                        <ul className="skills">
                            {skills}
                        </ul>
                    </div>
                </div>
            </div>
            <div className="row complementary">
                <div className="three columns header-col">
                    <h1><span>Specializations</span></h1>
                </div>
                <div className="nine columns main-col">
                    {complementary}
                </div>
            </div>
        </section>
    );
}
