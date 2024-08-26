import React from 'react';
import { NavLink } from 'react-router-dom';
import './navbar.css';

function Navbar() {
  return (
    <nav className='navbar'>
      <NavLink to="/create" className={({ isActive }) => isActive ? "nav-link active-link" : "nav-link"}>Create</NavLink>
      <NavLink to="/update" className={({ isActive }) => isActive ? "nav-link active-link" : "nav-link"}>Update</NavLink>
      <NavLink to="/delete" className={({ isActive }) => isActive ? "nav-link active-link" : "nav-link"}>Delete</NavLink>
      <NavLink to="/debounce" className={({ isActive }) => isActive ? "nav-link active-link" : "nav-link"}>Debounce</NavLink>
      <NavLink to="/" className={({ isActive }) => isActive ? "nav-link active-link" : "nav-link"}>Filter</NavLink>
      <NavLink to="/userform" className={({ isActive }) => isActive ? "nav-link active-link" : "nav-link"}>Filter II</NavLink>
      <NavLink to="/filteradjust" className={({ isActive }) => isActive ? "nav-link active-link" : "nav-link"}>Filter Ajust</NavLink>
      <NavLink to="/useref" className={({ isActive }) => isActive ? "nav-link active-link" : "nav-link"}>useRef</NavLink>
      <NavLink to="/usememo" className={({ isActive }) => isActive ? "nav-link active-link" : "nav-link"}>useMemo</NavLink>
      <NavLink to="/usecallback" className={({ isActive }) => isActive ? "nav-link active-link" : "nav-link"}>useCallback</NavLink>
      <NavLink to="/reactquery" className={({ isActive }) => isActive ? "nav-link active-link" : "nav-link"}>Query</NavLink>
      <NavLink to="/loadmore" className={({ isActive }) => isActive ? "nav-link active-link" : "nav-link"}>Query lm</NavLink>
      <NavLink to="/observer" className={({ isActive }) => isActive ? "nav-link active-link" : "nav-link"}>Query inf.</NavLink>
      <NavLink to="/mutation" className={({ isActive }) => isActive ? "nav-link active-link" : "nav-link"}>Mutation.</NavLink>

    </nav>
  );
}

export default Navbar;
