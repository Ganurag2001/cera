import React from "react";
import { useNavigate } from "react-router-dom";

export default function EngagementPage({ engagements }) {
    const navigate = useNavigate();

    return (
        <div className="flex h-screen p-5">
            {/* Left Section - 1/3 */}
            <div className="w-1/3 p-5 bg-gray-100 border-r border-gray-300">
                <div className="flex justify-between items-center mb-4">
                    <h3 className="text-lg font-semibold">Waiting for Activation</h3>
                    <div className="bg-blue-500 text-white px-3 py-1 rounded-full">0</div>
                </div>
                <p className="text-gray-500">No Matching Engagements</p>
            </div>

            {/* Right Section - 2/3 */}
            <div className="w-2/3 p-5">
                <div className="flex justify-between items-center mb-4">
                    <h3 className="text-lg font-semibold">Active Engagements</h3>
                    <button
                        className="bg-gray-500 text-white py-2 px-4 rounded hover:bg-gray-600 transition duration-300"
                        onClick={() => navigate('/engagement')}
                    >
                        New Engagement
                    </button>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5">
                    {engagements.map((engagement, index) => (
                        <div key={index} className="bg-white p-4 border border-gray-300 rounded-lg shadow-md">
                            <h4 className="text-lg font-semibold mb-2">{engagement.projectName}</h4>
                            <p className="text-sm text-gray-600">Type: {engagement.projectDescription}</p>
                            <p className="text-sm text-gray-600">Start date: {new Date(engagement.startDate).toDateString()}</p>
                            <p className="text-sm text-gray-600">Recurring: {engagement.recurring}</p>
                            <p className="text-sm text-gray-600">Findings: {engagement.findings}</p>
                            <p className="text-sm text-gray-600">Created by: {engagement.projectOwnerName}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
