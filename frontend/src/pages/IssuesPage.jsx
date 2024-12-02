import React from "react";

const IssuesPage = () => {
    const issues = [
        {
            title: "Referrer-Policy Not Implemented",
            severity: "Best Practice",
            targetGroup: "OneTime Scan, Ericsson Resource, Internal facing asset",
            target: "Zoning Configuration Management System",
            url: "https://zcms.ericsson.se/",
            firstSeen: "2023-08-25 11:55 AM",
            lastSeen: "2023-08-25 11:55 AM",
            assignee: "Shiwani Garg",
            retestable: true,
            status: "Accepted Risk",
        },
        {
            title: "Internal Server Error",
            severity: "Low",
            targetGroup: "OneTime Scan, Ericsson Resource, Internal facing asset",
            target: "Zoning Configuration Management System",
            url: "https://zcms.ericsson.se/",
            firstSeen: "2023-08-25 11:55 AM",
            lastSeen: "2023-08-25 11:55 AM",
            assignee: "Shiwani Garg",
            retestable: true,
            status: "Present",
        },
        // Add more rows as needed
    ];

    return (
        <div className="flex">
            {/* Sidebar */}
            <aside className="w-64 bg-purple-900 text-white h-screen p-6">
                <h2 className="text-lg font-bold mb-6">Invicti</h2>
                <ul className="space-y-4">
                    {[
                        "Discovery",
                        "Targets",
                        "Scans",
                        "Scheduling",
                        "Reporting",
                        "Issues",
                        "Technologies",
                        "Policies",
                        "Notifications",
                        "Integrations",
                        "Team",
                        "Activity",
                        "Agents",
                    ].map((item, index) => (
                        <li key={index} className="hover:text-gray-300 cursor-pointer">
                            {item}
                        </li>
                    ))}
                </ul>
            </aside>

            {/* Main Content */}
            <div className="flex-1 p-6 bg-gray-100">
                <div className="flex justify-between items-center mb-6">
                    <h1 className="text-2xl font-bold">Issues</h1>
                    <div className="space-x-2">
                        <button className="bg-purple-600 text-white px-4 py-2 rounded">New Scan</button>
                        <button className="bg-purple-600 text-white px-4 py-2 rounded">Export to CSV</button>
                        <button className="bg-purple-600 text-white px-4 py-2 rounded">Send To</button>
                        <button className="bg-purple-600 text-white px-4 py-2 rounded">Edit</button>
                    </div>
                </div>

                {/* Table */}
                <table className="w-full bg-white rounded-lg shadow-md text-left">
                    <thead>
                        <tr className="bg-gray-200 border-b">
                            <th className="px-4 py-2">Title</th>
                            <th className="px-4 py-2">Severity</th>
                            <th className="px-4 py-2">Target Group</th>
                            <th className="px-4 py-2">Target</th>
                            <th className="px-4 py-2">URL</th>
                            <th className="px-4 py-2">First Seen</th>
                            <th className="px-4 py-2">Last Seen</th>
                            <th className="px-4 py-2">Tags</th>
                            <th className="px-4 py-2">Retestable</th>
                            <th className="px-4 py-2">Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        {issues.map((issue, index) => (
                            <tr key={index} className="border-b hover:bg-gray-100">
                                <td className="px-4 py-2">{issue.title}</td>
                                <td className="px-4 py-2">{issue.severity}</td>
                                <td className="px-4 py-2">{issue.targetGroup}</td>
                                <td className="px-4 py-2">{issue.target}</td>
                                <td className="px-4 py-2 text-blue-600">
                                    <a href={issue.url} target="_blank" rel="noopener noreferrer">
                                        {issue.url}
                                    </a>
                                </td>
                                <td className="px-4 py-2">{issue.firstSeen}</td>
                                <td className="px-4 py-2">{issue.lastSeen}</td>
                                <td className="px-4 py-2">{issue.assignee}</td>
                                <td className="px-4 py-2">
                                    {issue.retestable ? "✅" : "❌"}
                                </td>
                                <td className="px-4 py-2">
                                    <span
                                        className={`px-2 py-1 rounded ${
                                            issue.status === "Accepted Risk"
                                                ? "bg-yellow-200 text-yellow-800"
                                                : "bg-red-200 text-red-800"
                                        }`}
                                    >
                                        {issue.status}
                                    </span>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default IssuesPage;
