import React, { useState } from 'react';
import { Outlet, useNavigate } from 'react-router-dom';
import { Sidebar } from './Sidebar';
import Modal from './Modal';

const Layout = () => {
    const [showModal, setShowModal] = useState(false);
    const navigate = useNavigate();

    const handleNewButtonClick = () => {
        setShowModal(true); // Show the modal when the button is clicked
    };

    const handleCloseModal = () => {
        setShowModal(false); // Close the modal
        navigate('/issues');
    };

    const handleSubmit = (selectedType) => {
        console.log('New Target Type:', selectedType);
    };

    return (
        <div className="flex min-h-screen bg-gray-100">
            {/* Sidebar */}
            <Sidebar onNewTargetClick={handleNewButtonClick} />

            {/* Content */}
            <div className="flex-grow p-6">
                <Outlet />
            </div>

            {/* Modal */}
            {showModal && (
                <Modal onClose={handleCloseModal} onSubmit={handleSubmit} />
            )}
        </div>
    );
};

export default Layout;
