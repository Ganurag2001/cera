import React from "react";

const TargetsPage = () => {
    const data = [
        {
            name: "AtLAS Antenna layer system-prod",
            id: "105320",
            description: "MELA IT",
            url: "https://atlas.de.ericsson.net/",
            lastScan: "2024-11-14 09:20 PM",
            group: "OneTime Scan, Resource, Internal facing",
            tags: "Ericsson asset",
            creator: "michael.polke@ericsson.net",
        },
        {
            name: "FSO Germany Tool-QA",
            id: "140317",
            description: "MELA IT",
            url: "https://uat.ticketing.de.ericsson.net/",
            lastScan: "2024-11-14 06:08 PM",
            group: "OneTime Scan, Resource, Internal facing",
            tags: "Ericsson asset",
            creator: "julian.schulze.dieckm",
        },
        // Add more rows here as needed
    ];

    return (
        <div className="flex">
            {/* Sidebar */}
            <aside className="w-64 bg-purple-900 text-white h-screen p-6">
                <h2 className="text-lg font-bold mb-6">Invicti</h2>
                <ul className="space-y-4">
                    {["Dashboard", "Targets", "New Target", "Import Targets", "Manage Groups", "New Group", "Scans", "Scheduling"].map(
                        (item, index) => (
                            <li key={index} className="hover:text-gray-300 cursor-pointer">
                                {item}
                            </li>
                        )
                    )}
                </ul>
            </aside>

            {/* Main Content */}
            <div className="flex-1 p-6 bg-gray-100">
                <div className="flex justify-between items-center mb-6">
                    <h1 className="text-2xl font-bold">Targets</h1>
                    <div className="space-x-2">
                        <button className="bg-purple-600 text-white px-4 py-2 rounded">New</button>
                        <button className="bg-purple-600 text-white px-4 py-2 rounded">Import</button>
                        <button className="bg-purple-600 text-white px-4 py-2 rounded">Export to CSV</button>
                    </div>
                </div>

                {/* Table */}
                <table className="w-full bg-white rounded-lg shadow-md text-left">
                    <thead>
                        <tr className="bg-gray-200 border-b">
                            <th className="px-4 py-2">Name</th>
                            <th className="px-4 py-2">Description</th>
                            <th className="px-4 py-2">URL</th>
                            <th className="px-4 py-2">Last Scan</th>
                            <th className="px-4 py-2">Groups</th>
                            <th className="px-4 py-2">Tags</th>
                            <th className="px-4 py-2">Creator Name</th>
                            <th className="px-4 py-2">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {data.map((target, index) => (
                            <tr key={index} className="border-b hover:bg-gray-100">
                                <td className="px-4 py-2">
                                    <div>
                                        <p>{target.name}</p>
                                        <p className="text-sm text-gray-500">{target.id}</p>
                                    </div>
                                </td>
                                <td className="px-4 py-2">{target.description}</td>
                                <td className="px-4 py-2 text-blue-600">
                                    <a href={target.url} target="_blank" rel="noopener noreferrer">
                                        {target.url}
                                    </a>
                                </td>
                                <td className="px-4 py-2">{target.lastScan}</td>
                                <td className="px-4 py-2">{target.group}</td>
                                <td className="px-4 py-2">{target.tags}</td>
                                <td className="px-4 py-2">{target.creator}</td>
                                <td className="px-4 py-2">
                                    <div className="space-x-2">
                                        <button className="bg-purple-500 text-white px-3 py-1 rounded">
                                            Scan
                                        </button>
                                        <button className="bg-purple-500 text-white px-3 py-1 rounded">
                                            Latest Report
                                        </button>
                                        <button className="bg-yellow-500 text-white px-3 py-1 rounded">
                                            Edit
                                        </button>
                                        <button className="bg-red-500 text-white px-3 py-1 rounded">
                                            Delete
                                        </button>
                                    </div>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default TargetsPage;
