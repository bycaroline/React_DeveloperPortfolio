
import { Fragment } from 'react'
import LayoutStart from './pages/LayoutStart';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ProjectPageGarnGalore from './pages/ProjectPageGarnGalore';
import ProjectPageChatApp from './pages/ProjectPageChatApp';
import ProjectPageDeveloperPortfolio from './pages/ProjectPageDeveloperPortfolio';
import ProjectPageSurfNotification from './pages/ProjectPageSurfNotification';
import ProjectPageFamilyRecipes from './pages/ProjectPageFamilyRecipes';
import ProjectPagePhotoPortfolio from './pages/ProjectPagePhotoPortfolio';
import ProjectPageSurfGame from './pages/ProjectPageSurfGame';



const App = () => {
  return (
    <Fragment>
      <Router>
        <Routes>
          <Route path="/" element={<LayoutStart />} />
          <Route path="*" element={<LayoutStart />} />
          <Route path="/WebshopJava" element={<ProjectPageGarnGalore />} />
          <Route path="/ChatApp" element={<ProjectPageChatApp />} />
          <Route path="/DeveloperPortfolio" element={<ProjectPageDeveloperPortfolio />} />
          <Route path="/SurfNotification" element={<ProjectPageSurfNotification />} />
          <Route path="/FamilyRecipes" element={<ProjectPageFamilyRecipes />} />
          <Route path="/PhotoPortfolio" element={<ProjectPagePhotoPortfolio />} />
          <Route path="/SurfGame" element={<ProjectPageSurfGame />} />
        </Routes>
      </Router>
    </Fragment>
  );
};

export default App;

