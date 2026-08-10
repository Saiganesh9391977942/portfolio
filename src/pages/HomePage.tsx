import React from 'react';
import { Navbar } from "../components/navbar/Navbar";
import { Hero } from "../components/hero/Hero";
import { Experiance } from '../components/experiance/Experiance';

export const HomePage: React.FC = () => {
    return (
        <>
            <Navbar />
            <Hero />
            <Experiance />
        </>
    );
};
