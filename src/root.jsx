import React from 'react'
import { Outlet } from 'react-router-dom';
import NavBar from './components/common/nav';
import FilterSectionHP from './components/Homepage/FilterSectionHP';
import HomePage from './components/Homepage/HomePage';

const Root = () => {
  return (
    <>
    <HomePage />
    </>

  )
}

export default Root;