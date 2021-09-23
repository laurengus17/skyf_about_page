import React from 'react';
import BrandonM from './BrandonM';
import BrandonV from './BrandonV';
import DannyL from './DannyL';
import IsaacD from './IssacD';
import TaliaR from './TaliaR';
import ChrisR from './ChrisR';
import ZachG from './ZachG';
import JoinUs from './JoinUs';
import './Employees.css'

const AllEmployees = () => {
    return (
        <>
        <div className='employees_each_container'>
            <BrandonV />
            <BrandonM />
            <DannyL />
            <IsaacD />
            <TaliaR />
            <ChrisR />
            <ZachG />
            <JoinUs />
        </div>
        </>
    )
}

export default AllEmployees;