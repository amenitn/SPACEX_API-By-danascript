import React  , {useRef} from 'react';
import { gql } from '@apollo/client';
import useNavigation from './../../hooks/useNavigation';
import { useQuery } from '@apollo/client';
import Error from './../Error';
import Loader from './../Loader';
import TopMenu from './../TopMenu';
import SideMenu from './../SideMenu';
import './style.scss';
const GET_ROCKETS_NAMES = gql `{
    rockets(offset:1 ) {
      id
      name
    }
  }`;

const NavBar = () => {
    const navRef = useRef(null);
const {isMobileView,isMenuOpen,setIsMenuOpen}=useNavigation(navRef);
const {data , loading , error }=useQuery(GET_ROCKETS_NAMES);

if(loading) return <Loader />;
if(error) return <Error error={error}/>;




return (
<div className="container-fluid" ref={navRef}>
    <div className="row">
    <TopMenu isMobileView={isMenuOpen} isMenuOpen={isMenuOpen} toggleMenu={setIsMenuOpen} rockets={data.rockets}/>
        <SideMenu isMobileView={isMenuOpen} isMenuOpen={isMenuOpen} toggleMenu={setIsMenuOpen} rockets={data.rockets} />
        
    </div>
</div> );

};

export default NavBar;
