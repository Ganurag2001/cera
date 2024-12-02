import React, { useState } from 'react';
import { FaTachometerAlt, FaBullseye, FaAngleDown, FaAngleUp } from 'react-icons/fa';
import { MdOutlineDateRange } from 'react-icons/md';
import { Link, useNavigate } from 'react-router-dom';
import Modal from './Modal';

export const Sidebar = () => {
    const [isDashboardOpen, setIsDashboardOpen] = useState(true);
    const [isTargetOpen, setIsTargetOpen] = useState(false);
    const [isEngagementOpen, setIsEngagementOpen] = useState(false);
    const [issues, setIssues] = useState([]);
    const [showModal, setShowModal] = useState(false);

    const navigate = useNavigate();

    const toggleDashboard = () => {
        setIsDashboardOpen(!isDashboardOpen);
    };

    const toggleTarget = () => {
        setIsTargetOpen(!isTargetOpen);
    };

    const toggleEngagement = () => {
        setIsEngagementOpen(!isEngagementOpen);
    };

    const handleNewButtonClick = () => {
        setShowModal(true);
    };

    const handleCloseModal = () => {
        setShowModal(false);
    };

    const handleAddIssue = (newIssue) => {
        setIssues([newIssue, ...issues]);
        setShowModal(false);
    };

    const handleDashboardClick = () => {
        navigate('/');
    };

    return (
        <div className="flex flex-col min-h-screen w-[200px] bg-gray-800 text-white">
            <a href="/" className="p-3 text-white text-2xl font-semibold">
                Cera
            </a>
            <ul className="list-none pl-0">
                <li className="mb-1">
                    <button
                        className="flex items-center text-white p-2 w-full text-lg hover:bg-gray-700 transition duration-300"
                        onClick={handleDashboardClick}
                        aria-expanded={isDashboardOpen}
                    >
                        <FaTachometerAlt className="mr-2" /> Dashboard
                    </button>
                </li>
                <li className="mb-1">
                    <button
                        className="flex items-center text-white p-2 w-full text-lg hover:bg-gray-700 transition duration-300"
                        onClick={toggleTarget}
                        aria-expanded={isTargetOpen}
                    >
                        <FaBullseye className="mr-2" /> Target
                        {isTargetOpen ? <FaAngleUp className="ml-4" /> : <FaAngleDown className="ml-4" />}
                    </button>
                    {isTargetOpen && (
                        <div className="ml-8">
                            <ul className="list-none font-normal pb-2 text-base">
                                <li>
                                    <Link to="#" onClick={handleNewButtonClick} className="text-white hover:text-gray-400">
                                        New Target
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/issues" className="text-white hover:text-gray-400">
                                        All Targets
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    )}
                </li>
                <li className="mb-1">
                    <button
                        className="flex items-center text-white p-2 w-full text-lg hover:bg-gray-700 transition duration-300"
                        onClick={toggleEngagement}
                        aria-expanded={isEngagementOpen}
                    >
                        <MdOutlineDateRange className="mr-2" /> Engagement
                        {isEngagementOpen ? <FaAngleUp className="ml-4" /> : <FaAngleDown className="ml-4" />}
                    </button>
                    {isEngagementOpen && (
                        <div className="ml-8">
                            <ul className="list-none font-normal pb-2 text-base">
                                <li>
                                    <Link to="/engagement" className="text-white hover:text-gray-400">
                                        New Engagement
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/activeEngagement" className="text-white hover:text-gray-400">
                                        All Engagements
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    )}
                </li>
            </ul>
            {showModal && <Modal onClose={handleCloseModal} onSubmit={handleAddIssue} />}
        </div>
    );
};
