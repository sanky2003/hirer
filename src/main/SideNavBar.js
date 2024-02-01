import React from 'react';

const SideNavBar = () => {
  return (
    <div className="flex h-screen bg-gray-200">
      {/* Content */}
      <div className="flex-1 p-10">
        <h1 className="text-2xl font-semibold">Main Content</h1>
        <p>Your main content here.</p>
      </div>

      {/* Sidebar */}
      <div className="w-64 bg-gray-800 p-6">
        <h1 className="text-white text-xl font-semibold mb-4">Sidebar</h1>
        <ul>
          <li><a href="#" className="text-white hover:bg-gray-700 px-4 py-2 block">Home</a></li>
          <li><a href="#" className="text-white hover:bg-gray-700 px-4 py-2 block">About</a></li>
          <li><a href="#" className="text-white hover:bg-gray-700 px-4 py-2 block">Services</a></li>
          <li><a href="#" className="text-white hover:bg-gray-700 px-4 py-2 block">Contact</a></li>
        </ul>
      </div>
    </div>
  );
};

export default SideNavBar;
