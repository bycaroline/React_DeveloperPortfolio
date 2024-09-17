
import styles from '../css/styles.module.css';
import profilePhoto from '../assets/profilePhoto.png';
import Paragraph2 from '../components/Paragraph2';
import ProjectsSection from '../components/ProjectSection';
import Footer from '../components/Footer';

//The startpage
const LayoutStart = () => {

    return (
        <div className={styles.wrapper}>

            <div className={styles.wrapperTextIntro}>
                <div className={styles.wrapperParagraph1}>
                    <div>
                        <img className={styles.imgHeader} src={profilePhoto} alt="" />
                    </div>
                    <div>
                        <h1>Hi, I am Caroline </h1>
                        <h1>and this is my developer portfolio</h1>
                    </div>
                </div>
                <Paragraph2 />
            </div>
            <ProjectsSection />
            <Footer />
        </div>
    );
};

export default LayoutStart;
