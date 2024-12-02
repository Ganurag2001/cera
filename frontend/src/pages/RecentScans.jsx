import React, { useState } from "react";

const RecentScans = () => {
    // Sample data to represent the scans
    const [scans, setScans] = useState([
        { id: 1, name: "ECP-Prod:Unique ID 45112", status: "completed", issues: [1, 0, 2, 3], actions: "Scan" },
        { id: 2, name: "ECP-QA:Unique ID 45112", status: "completed", issues: [0, 0, 6, 13], actions: "Scan" },
        { id: 3, name: "ECP-Acc:Unique ID 45112", status: "completed", issues: [1, 0, 2, 3], actions: "Scan" },
        { id: 4, name: "Remote Access VPN-QA:Unique ID 46086", status: "completed", issues: [0, 0, 1, 1], actions: "Scan" },
        { id: 5, name: "Remote Access VPN-Dev:Unique ID 46086", status: "completed", issues: [0, 0, 1, 1], actions: "Scan" },
        { id: 6, name: "PLM 3DX Platform-Prod:Unique ID 122452/496051", status: "scanning", issues: [], actions: "Cancel" },
        { id: 7, name: "PLM 3DX Platform-Dev:Unique ID 109151/1027081", status: "scanning", issues: [], actions: "Cancel" },
    ]);

    // Handlers for Scan and Cancel actions
    const handleAction = (id, action) => {
        if (action === "Scan") {
            alert(`Scanning ${id}`);
        } else if (action === "Cancel") {
            alert(`Cancelling ${id}`);
        }
    };

    return (
        <div className="p-4 bg-gray-100">
            <h2 className="text-xl font-bold mb-4">Recent Scans</h2>
            <div className="flex justify-between mb-2">
                <button className="bg-purple-600 text-white px-4 py-2 rounded">Target Name</button>
                <button className="bg-purple-600 text-white px-4 py-2 rounded">Target URL</button>
            </div>
            <table className="w-full border-collapse table-auto text-left text-sm bg-white shadow-md rounded">
                <thead>
                    <tr className="bg-gray-200">
                        <th className="border p-2">Name</th>
                        <th className="border p-2">Critical</th>
                        <th className="border p-2">High</th>
                        <th className="border p-2">Medium</th>
                        <th className="border p-2">Low</th>
                        <th className="border p-2">Action</th>
                    </tr>
                </thead>
                <tbody>
                    {scans.map((scan) => (
                        <tr
                            key={scan.id}
                            className={`${scan.status === "scanning" ? "bg-yellow-100" : "bg-white"}`}
                        >
                            <td className="border p-2">{scan.name}</td>
                            {scan.issues.length > 0 ? (
                                scan.issues.map((issue, idx) => (
                                    <td
                                        key={idx}
                                        className={`border p-2 text-center ${
                                            idx === 0
                                                ? "text-red-500"
                                                : idx === 1
                                                ? "text-orange-500"
                                                : idx === 2
                                                ? "text-yellow-500"
                                                : "text-gray-500"
                                        }`}
                                    >
                                        {issue}
                                    </td>
                                ))
                            ) : (
                                <>
                                    <td className="border p-2 text-center">--</td>
                                    <td className="border p-2 text-center">--</td>
                                    <td className="border p-2 text-center">--</td>
                                    <td className="border p-2 text-center">--</td>
                                </>
                            )}
                            <td className="border p-2 text-center">
                                <button
                                    className={`px-4 py-1 rounded ${
                                        scan.status === "scanning"
                                            ? "bg-red-500 text-white"
                                            : "bg-green-500 text-white"
                                    }`}
                                    onClick={() => handleAction(scan.id, scan.actions)}
                                >
                                    {scan.actions}
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default RecentScans;
