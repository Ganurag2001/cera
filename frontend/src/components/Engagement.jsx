import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Engagement({ onAddNewEngagement }) {
    const [step, setStep] = useState(1);
    const totalSteps = 2;
    const [formData, setFormData] = useState({
        domainName: "",
        ipAddress: "",
        projectName: "",
        projectDescription: "",
        targetGroup: "",
        pentesterName: "",
        projectOwnerName: "",
        startDate: "",
        endDate: "",
        inscopeItem: "",
        outscopeItem: "",
    });

    const navigate = useNavigate();

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handlePrev = () => step > 1 && setStep((prev) => prev - 1);

    const handleNext = () => {
        if (step < totalSteps) {
            setStep((prev) => prev + 1);
        } else if (step === totalSteps) {
            onAddNewEngagement(formData);
            navigate("/activeEngagement");
        }
    };

    const renderSteps = () => {
        if (step === 1) {
            return (
                <div className="flex justify-center items-center mt-20">
                    <div className="flex flex-col mr-8">
                        <label htmlFor="domainName" className="mb-2">Domain Name</label>
                        <input
                            type="text"
                            id="domainName"
                            name="domainName"
                            placeholder="Enter domain name"
                            value={formData.domainName}
                            onChange={handleChange}
                            required
                            className="w-full p-2 border border-gray-300 rounded"
                        />
                    </div>
                    <div className="flex flex-col">
                        <label htmlFor="ipAddress" className="mb-2">IP Address</label>
                        <input
                            type="text"
                            id="ipAddress"
                            name="ipAddress"
                            placeholder="Enter IP address"
                            value={formData.ipAddress}
                            onChange={handleChange}
                            required
                            className="w-full p-2 border border-gray-300 rounded"
                        />
                    </div>
                </div>
            );
        }
        if (step === 2) {
            return (
                <>
                    <div className="flex flex-col mb-4">
                        <label htmlFor="projectName" className="mb-2">Project Name</label>
                        <input
                            type="text"
                            id="projectName"
                            name="projectName"
                            placeholder="Project Name"
                            value={formData.projectName}
                            onChange={handleChange}
                            required
                            className="w-full p-2 border border-gray-300 rounded"
                        />
                    </div>
                    <div className="flex flex-col mb-4">
                        <label htmlFor="projectDescription" className="mb-2">Project Description</label>
                        <textarea
                            id="projectDescription"
                            name="projectDescription"
                            placeholder="Project Description"
                            value={formData.projectDescription}
                            onChange={handleChange}
                            required
                            className="w-full p-2 border border-gray-300 rounded resize-none h-12"
                        />
                    </div>
                    <div className="flex flex-col mb-4">
                        <label htmlFor="targetGroup" className="mb-2">Target Group</label>
                        <select
                            id="targetGroup"
                            name="targetGroup"
                            value={formData.targetGroup}
                            onChange={handleChange}
                            required
                            className="w-full p-2 border border-gray-300 rounded"
                        >
                            <option value="" disabled>Select Target Group</option>
                            <option value="Black Box">Black Box</option>
                            <option value="White Box">White Box</option>
                            <option value="Grey Box">Grey Box</option>
                        </select>
                    </div>
                    <div className="flex flex-col mb-4">
                        <label htmlFor="pentesterName" className="mb-2">Pentester Name</label>
                        <input
                            type="text"
                            id="pentesterName"
                            name="pentesterName"
                            placeholder="Pentester Name"
                            value={formData.pentesterName}
                            onChange={handleChange}
                            required
                            className="w-full p-2 border border-gray-300 rounded"
                        />
                    </div>
                    <div className="flex flex-col mb-4">
                        <label htmlFor="projectOwnerName" className="mb-2">Project Owner Name</label>
                        <input
                            type="text"
                            id="projectOwnerName"
                            name="projectOwnerName"
                            placeholder="Project Owner Name"
                            value={formData.projectOwnerName}
                            onChange={handleChange}
                            required
                            className="w-full p-2 border border-gray-300 rounded"
                        />
                    </div>
                    <div className="flex flex-col mb-4">
                        <label htmlFor="startDate" className="mb-2">Start Date</label>
                        <input
                            type="date"
                            id="startDate"
                            name="startDate"
                            value={formData.startDate}
                            onChange={handleChange}
                            required
                            className="w-full p-2 border border-gray-300 rounded"
                        />
                    </div>
                    <div className="flex flex-col mb-4">
                        <label htmlFor="endDate" className="mb-2">End Date</label>
                        <input
                            type="date"
                            id="endDate"
                            name="endDate"
                            value={formData.endDate}
                            onChange={handleChange}
                            required
                            className="w-full p-2 border border-gray-300 rounded"
                        />
                    </div>
                </>
            );
        }
    };

    return (
        <div className="max-w-lg h-screen bg-white p-6 rounded-lg shadow-lg mx-auto">
            <div className="flex justify-around mb-8">
                <div className={`w-12 h-12 flex items-center justify-center rounded-full ${step >= 1 ? 'bg-purple-600 text-white' : 'bg-gray-300'}`}>1</div>
                <div className={`w-12 h-12 flex items-center justify-center rounded-full ${step >= 2 ? 'bg-purple-600 text-white' : 'bg-gray-300'}`}>2</div>
            </div>
            <form className="mb-6">{renderSteps()}</form>
            <div className="flex justify-between">
                <button
                    className="px-6 py-2 bg-purple-600 text-white rounded hover:bg-purple-700 transition duration-300"
                    onClick={handlePrev}
                    disabled={step === 1}
                >
                    Prev
                </button>
                <button
                    className="px-6 py-2 bg-purple-600 text-white rounded hover:bg-purple-700 transition duration-300"
                    onClick={handleNext}
                >
                    {step === totalSteps ? "Submit" : "Next"}
                </button>
            </div>
        </div>
    );
}
