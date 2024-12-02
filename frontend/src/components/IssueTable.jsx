import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { FaSearch, FaTrashAlt, FaFileAlt, FaEdit } from 'react-icons/fa';
import Modal from '../pages/Modal';


const IssueTable = () => {
    const [issues, setIssues] = useState([]);
    const [showModal, setShowModal] = useState(false);

    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/posts')
            .then((response) => {
                const dummyIssues = response.data.slice(0, 10).map((issue, index) => ({
                    name: `Service Name ${index + 1}`,
                    description: issue.title,
                    url: 'https://sampleurl.com',
                    results: {
                        critical: Math.floor(Math.random() * 10),
                        high: Math.floor(Math.random() * 10),
                        medium: Math.floor(Math.random() * 10),
                        low: Math.floor(Math.random() * 10),
                    },
                    lastScan: '2024-10-15 12:48 PM',
                    groups: 'Internal Resource',
                    tags: 'Pen Testing',
                    creatorName: `Creator ${index + 1}`,
                    status: 'Not started'
                }));
                setIssues(dummyIssues);
            })
            .catch((error) => {
                console.error('Error fetching the data: ', error);
            });
    }, []);

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

    return (
        <div className="p-6">
            <div className="flex justify-between items-center mb-4">
                <h1 className="text-2xl font-semibold text-gray-800">Targets</h1>
                <button
                    type="button"
                    className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
                    onClick={handleNewButtonClick}
                >
                    New
                </button>
            </div>

            <div className="overflow-x-auto">
                <table className="w-full text-left text-sm bg-white border border-gray-300 rounded-lg shadow-lg">
                    <thead className="bg-gray-100">
                        <tr>
                            <th className="p-3 border-b"><FaSearch className="inline mr-1" /> Name</th>
                            <th className="p-3 border-b"><FaSearch className="inline mr-1" /> Description</th>
                            <th className="p-3 border-b"><FaSearch className="inline mr-1" /> URL</th>
                            <th className="p-3 border-b"><FaSearch className="inline mr-1" /> Results</th>
                            <th className="p-3 border-b"><FaSearch className="inline mr-1" /> Last Scan</th>
                            <th className="p-3 border-b"><FaSearch className="inline mr-1" /> Groups</th>
                            <th className="p-3 border-b"><FaSearch className="inline mr-1" /> Tags</th>
                            <th className="p-3 border-b"><FaSearch className="inline mr-1" /> Creator Name</th>
                            <th className="p-3 border-b">Status</th>
                            <th className="p-3 border-b">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {issues.map((issue, index) => (
                            <tr key={index} className={`${index % 2 === 0 ? 'bg-gray-50' : 'bg-white'} hover:bg-gray-100 transition`}>
                                <td className="p-3 text-purple-700 font-medium">{issue.name}</td>
                                <td className="p-3 text-gray-700">{issue.description}</td>
                                <td className="p-3 text-blue-600 underline">
                                    <a href={issue.url} target="_blank" rel="noopener noreferrer">{issue.url}</a>
                                </td>
                                <td className="p-3">
                                    <div className="flex gap-2">
                                        <span className="text-red-600">🔴 {issue.results.critical}</span>
                                        <span className="text-orange-500">🟠 {issue.results.high}</span>
                                        <span className="text-yellow-500">🟡 {issue.results.medium}</span>
                                        <span className="text-green-500">🟢 {issue.results.low}</span>
                                    </div>
                                </td>
                                <td className="p-3 text-gray-600">{issue.lastScan}</td>
                                <td className="p-3 text-green-700">{issue.groups}</td>
                                <td className="p-3 text-gray-600">{issue.tags}</td>
                                <td className="p-3 text-purple-600 font-medium">{issue.creatorName}</td>
                                <td className="p-3 text-gray-800">{issue.status}</td>
                                <td className="p-3 flex gap-2">
                                    <button className="px-2 py-1 bg-gray-200 text-gray-700 rounded hover:bg-gray-300 transition">
                                        <FaFileAlt className="inline mr-1" /> Latest Report
                                    </button>
                                    <button className="px-2 py-1 bg-gray-200 text-gray-700 rounded hover:bg-gray-300 transition">
                                        <FaEdit className="inline mr-1" /> Edit
                                    </button>
                                    <button className="px-2 py-1 bg-gray-200 text-gray-700 rounded hover:bg-gray-300 transition">
                                        <FaTrashAlt className="inline mr-1" /> Delete
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            {showModal && <Modal onClose={handleCloseModal} onSubmit={handleAddIssue} />}
        </div>
    );
};

export default IssueTable;
