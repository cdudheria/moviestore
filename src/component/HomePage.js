import React,{useContext} from 'react'
import './HomePage.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import UserContext  from '../AppContext';
import HeroSection  from './HeroSection';
import FeaturedMovieCategorySection  from './FeaturedMovieCategorySection';
import FeaturedTVCategorySection  from './FeaturedTVCategorySection';
import ContentSection  from './ContentSection';

function HomePage() {
    return (
      <React.Fragment>
        <HeroSection />
        <FeaturedMovieCategorySection/>
        <FeaturedTVCategorySection />
        <ContentSection />
      </React.Fragment>
    )
};
    

export default HomePage;
