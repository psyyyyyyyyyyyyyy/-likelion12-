import { NavLink } from "react-router-dom";
import styled from "styled-components";

const Nav = styled(NavLink)`
    text-decoration: none;
    color: black;
    &.active{
        color: red;
    }
`
export default function Header(){
    return(
        <>
            <NavLink to='/'>HOME</NavLink> 
            &nbsp;&nbsp;|&nbsp;&nbsp;
            <NavLink to='/intro'>INTRO</NavLink>
            &nbsp;&nbsp;|&nbsp;&nbsp; 
            <NavLink to='/work'>TODO</NavLink>
            &nbsp;&nbsp;|&nbsp;&nbsp;
            <NavLink to='/React'>REACT</NavLink>
            <h1>------------------------------------------------------------------------------------------</h1>
        </>
    );
}