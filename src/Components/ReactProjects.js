import React from 'react';
import './react-projects.css'
function ReactProjects(){
    return(
        <div>
            <div>React projects</div>
            <div className='project-holder'>
                <div className='pro'>
                    <p><a href='https://todolist-app-self-ten.vercel.app/' target='_blank' rel='noopener noreferrer'>ToDoList</a></p>
                </div>
                <div className='pro'>
                    <p><a href='https://weather-api-swart-pi.vercel.app/' target='_blank' rel='noopener noreferrer'>Weather Api</a></p>
                </div>
                <div className='pro'>
                    <p><a href='#' target='_blank' rel='noopener noreferrer'>News Api</a></p>
                </div>
            </div>
        </div>
    )
}

export default ReactProjects;