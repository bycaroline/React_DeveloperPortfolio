import React from 'react';
import ProjectCards from './ProjectCards';
import styles from '../css/styles.module.css';

//import icons
import iconGarnGalore from '../assets/iconGarnGalore.jpg'
import iconDeveloperPortfolio from '../assets/iconDeveloperPortfolio.jpg'
import iconFamilyRecipes from '../assets/iconFamilyRecipes.jpg'
import iconPhotoPortfolio from '../assets/iconPhotoPortfolio.jpg'
import iconSurfGame from '../assets/iconSurfGame.jpg'
import iconSurfNotification from '../assets/iconSurfNotification.jpg'
import iconChatApp from '../assets/iconChatApp.jpg'
import iconML from '../assets/iconML.jpg'

function ProjectsSection() {

    return (
        <section className={styles.wrapperProjects}>
            <ProjectCards
                name='exam project in machine learning'
                iconImage={iconML}
                description='This project aims to explore how machine learning works while applying Python skills and integrating them with Java and React.'
                projectURL='/ExamProject'
            />
            <ProjectCards
                name='webshop with java backend'
                iconImage={iconGarnGalore}
                description='Java webshop team project at Campus Mölndal. A web application that manages an e-commerce platform selling yarn, where users can explore products, add them to a shopping cart, and complete purchases.'
                projectURL='/WebshopJava'
            />
            <ProjectCards
                name="chat app in java with authentication"
                iconImage={iconChatApp}
                description="Setup with a java backend and a React frontend."
                projectURL="/ChatApp"
            />
            <ProjectCards
                name="developer portfolio with java backend"
                iconImage={iconDeveloperPortfolio}
                description="React JS is used to build this Portfolio to showcase my work in photography."
                projectURL="/DeveloperPortfolio"
            />
            <ProjectCards
                name="surf notification"
                iconImage={iconSurfNotification}
                description="Weather api and mail sender for surf notifications. This surf app uses weather data from SMHI api (Swedish Meteorological and Hydrological Institute) and detects if good surf conditions might be expected at Knäbäckshusen in Sweden. If good conditions can be expected, every subscriber will receive a notification by email the day before."
                projectURL="/SurfNotification"
            />
            <ProjectCards
                name="family recipes with authentication"
                iconImage={iconFamilyRecipes}
                description="Recipe database and CRUD operations on family recipes for family members. Built with Node and javascript in the backend and React in the frontend, thereby implementing the so called MERN stack."
                projectURL="/FamilyRecipes"
            />
            <ProjectCards
                name="photo portfolio"
                iconImage={iconPhotoPortfolio}
                description="A photography portfolio for showcasing a collection of photos categorized by themes such as nature, portrait, and architecture."
                projectURL="/PhotoPortfolio"
            />
            <ProjectCards
                name="surf game"
                iconImage={iconSurfGame}
                description="Exploring the basics of Javascript with this surf game. It currently only runs on laptops."
                projectURL="/SurfGame"
            />
        </section>

    )
}

export default ProjectsSection
