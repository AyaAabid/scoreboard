import React from "react";

export const Dashboard = () => {
  return (
    <div className="min-h-screen">
      <div className="container mx-auto p-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Widget 1 */}
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">
              {/* Card info */}
            </h2>
            <p className="text-gray-600">{/* Add content */}</p>
          </div>

          {/* Widget 2 */}
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">
              {/* Card info */}
            </h2>
            <p className="text-gray-600">{/* Add content  */}</p>
          </div>
        </div>
      </div>
    </div>
  );
};
