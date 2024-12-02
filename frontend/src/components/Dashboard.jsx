import React, { useState } from 'react';
import PanelButton from './PanelButton';  // Import PanelButton

const Dashboard = () => {
  const [isPanelOpen, setIsPanelOpen] = useState(true); // State to manage panel visibility

  const togglePanel = () => {
    setIsPanelOpen(!isPanelOpen);
  };

  const renderContent = () => {
    switch (isPanelOpen) {
      case 'button1':
        return <div>Content for Button 1</div>;
      case 'button2':
        return <div>Content for Button 2</div>;
      case 'button3':
        return <div>Content for Button 3</div>;
      default:
        return <div>Please select a panel</div>;
    }
  };

  return (
    <div className="flex h-screen">
      {/* Left Side Panel */}
      <div className={`transform ${isPanelOpen ? 'translate-x-0' : '-translate-x-full'} transition-transform duration-300 w-1/5 bg-gray-200 p-4 flex flex-col items-center pt-5`}>
        <PanelButton label="Text Box" onClick={() => setIsPanelOpen('button1')} />
        <PanelButton label="Radio Button" onClick={() => setIsPanelOpen('button2')} />
        <PanelButton label="Combo Box" onClick={() => setIsPanelOpen('button3')} />
        <PanelButton label="label" onClick={() => setIsPanelOpen('button3')} />
        <PanelButton label="button" onClick={() => setIsPanelOpen('button3')} />
        <PanelButton label="delete button" onClick={() => setIsPanelOpen('button3')} />
        <PanelButton label="back Button" onClick={() => setIsPanelOpen('button3')} />
        <PanelButton label="grid" onClick={() => setIsPanelOpen('button3')} />
        <PanelButton label="More" onClick={() => setIsPanelOpen('button3')} />
      </div>

      {/* Toggle Arrow */}
      <button
        onClick={togglePanel}
        className="absolute left-0 ml-4 mt-4 bg-gray-400 p-2 rounded focus:outline-none"
      >
        {isPanelOpen ? '←' : '→'}
      </button>

      {/* Right Side Content */}
      <div className="w-4/5 p-8 bg-white border border-gray-300">
        {renderContent()}
      </div>
    </div>
  );
};

export default Dashboard;
