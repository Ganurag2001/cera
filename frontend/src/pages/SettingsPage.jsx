import React, { useState } from "react";

const SettingsPage = () => {
    const [timeout, setTimeout] = useState(240);
    const [isRetentionRawFiles, setRetentionRawFiles] = useState(false);
    const [isRetentionScanData, setRetentionScanData] = useState(false);
    const [suspendScans, setSuspendScans] = useState(false);

    const handleToggle = (setter) => {
        setter((prevState) => !prevState);
    };

    return (
        <div className="p-6 bg-gray-100">
            <h1 className="text-2xl font-bold mb-6">Settings</h1>

            {/* Advanced Settings */}
            <div className="mb-6">
                <h2 className="text-lg font-semibold mb-3">Advanced Settings</h2>
                <div className="space-y-2">
                    {[
                        "Disable issue notifications that are sent by the system",
                        "Do not mark Information issues as accepted risks",
                        "Disable assigning issues to the committer",
                        "Send notification about long-running scans",
                        "Allow scanning without a duration limit",
                        "Force agents to use web application VDB file URL",
                        "Do not stop scan when maximum logout is exceeded",
                        "Account can execute custom security checks",
                    ].map((label, index) => (
                        <label key={index} className="flex items-center space-x-2">
                            <input type="checkbox" className="form-checkbox" />
                            <span>{label}</span>
                        </label>
                    ))}
                </div>
                <div className="mt-4">
                    <label className="block font-semibold mb-2">Internal Agent Terminate Timeout (Hours)</label>
                    <input
                        type="number"
                        className="border rounded p-2 w-32"
                        value={timeout}
                        onChange={(e) => setTimeout(e.target.value)}
                    />
                </div>
            </div>

            {/* Data Retention Settings */}
            <div className="mb-6">
                <h2 className="text-lg font-semibold mb-3">Data Retention Settings</h2>
                <div className="space-y-2">
                    <label className="flex items-center space-x-2">
                        <input
                            type="checkbox"
                            className="form-checkbox"
                            checked={isRetentionRawFiles}
                            onChange={() => handleToggle(setRetentionRawFiles)}
                        />
                        <span>Configure retention period for raw scan files</span>
                    </label>
                    <label className="flex items-center space-x-2">
                        <input
                            type="checkbox"
                            className="form-checkbox"
                            checked={isRetentionScanData}
                            onChange={() => handleToggle(setRetentionScanData)}
                        />
                        <span>Configure retention period for scan data</span>
                    </label>
                </div>
            </div>

            {/* Scan Controls Settings */}
            <div className="mb-6">
                <h2 className="text-lg font-semibold mb-3">Scan Controls Settings</h2>
                <div>
                    <label className="flex items-center space-x-2">
                        <input
                            type="checkbox"
                            className="form-checkbox"
                            checked={suspendScans}
                            onChange={() => handleToggle(setSuspendScans)}
                        />
                        <span>Suspend all future scans</span>
                    </label>
                </div>
                <div className="mt-4 space-x-2">
                    <button className="bg-gray-200 border rounded px-4 py-2">
                        Resume paused scans
                    </button>
                    <button className="bg-gray-200 border rounded px-4 py-2">
                        Pause active scans
                    </button>
                </div>
                <div className="mt-4 p-4 bg-blue-100 rounded">
                    <p>Scans in progress: 0</p>
                    <p>Scans pausing: 0</p>
                    <p>Scans paused: 0</p>
                    <p>Unsuccessful: 0</p>
                </div>
            </div>

            {/* Data Privacy and Security Settings */}
            <div>
                <h2 className="text-lg font-semibold mb-3">Data Privacy and Security Settings</h2>
                <p className="p-4 bg-gray-200 rounded">Placeholder for additional settings</p>
            </div>
        </div>
    );
};

export default SettingsPage;
