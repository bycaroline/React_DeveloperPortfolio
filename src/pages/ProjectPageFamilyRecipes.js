import styles from '../css/styles.module.css';
import Footer from '../components/Footer';
import PagesHeader from '../components/PagesHeader';
import FamilyRecepiesImg from '../assets/FamilyRecepiesImg.png';

const ProjectPageFamilyRecipes = () => {
    return (
        <div className={styles.wrapper}>
            <PagesHeader />
            <div className={styles.ProjectPageTopSection}>
                <div className={styles.ProjectPageWrapperTopSection}>
                    <h3>family recipes with authentication</h3>
                    <p>This is a fullstack MERN crud application I built for my family to share our favorite recipes with each other. I started the project as part of a MERN course on UDEMY by Academind. I mapped out the deisgn in Figma.</p>
                    <h4>technologies</h4>
                    <ul style={{ listStyle: 'none' }}>
                        <li><strong>Backend:</strong>NodeJS, ExpressJS</li>
                        <li><strong>Frontend:</strong> HTML, CSS, JavaScript</li>
                        <li><strong>Database:</strong> MongoDB and Cloudinary for images</li>
                    </ul>
                </div>
                <div className={styles.ProjectPageWrapperTopSectionImg}>
                    <img src={FamilyRecepiesImg} />
                </div>
            </div>
            <div className={styles.ProjectPageWrapperBottomSection}>
                <h4>features</h4>
                <ul style={{ listStyle: 'none' }}>
                    <li><span><strong>Authentication</strong>: JWT is set up for registring and logging in</span></li>
                    <li><span><strong>CRUD operations</strong>: Users can subscribe/unsubscribe to the service.</span></li>
                    <li><span><strong>Search</strong>: It is possible for search for recipes by title</span></li>
                    <li><span><strong>Profile Page</strong>: Displays the recipes created for each user</span></li>
                    <li><span><strong>Comments</strong>: Users can comment on each recipe</span></li>
                    <li><span><strong>Listing recipes</strong>: A list of all the recipes and by which user</span></li>
                </ul>
                <h4>code</h4>
                <p><a href='https://github.com/bycaroline/MERNappServerRecepies' target="_blank" rel="noopener noreferrer">github.com/bycaroline/MERNappServerRecepies</a></p>
            </div>
            <Footer />
        </div>
    );
};

export default ProjectPageFamilyRecipes;