import { useState } from 'react';
import { RiderView } from './components/RiderView';
import { DriverView } from './components/DriverView';
import { ManagerView } from './components/ManagerView';
import { RegulatorView } from './components/RegulatorView';
import { Users, Car, BarChart3, Shield } from 'lucide-react';

type Role = 'rider' | 'driver' | 'manager' | 'regulator' | null;

export default function App() {
  const [selectedRole, setSelectedRole] = useState<Role>(null);

  if (selectedRole === 'rider') {
    return <RiderView onBack={() => setSelectedRole(null)} />;
  }

  if (selectedRole === 'driver') {
    return <DriverView onBack={() => setSelectedRole(null)} />;
  }

  if (selectedRole === 'manager') {
    return <ManagerView onBack={() => setSelectedRole(null)} />;
  }

  if (selectedRole === 'regulator') {
    return <RegulatorView onBack={() => setSelectedRole(null)} />;
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 p-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-indigo-600 mb-2">RideShare Pro</h1>
          <p className="text-gray-600">Select your role to continue</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <button
            onClick={() => setSelectedRole('rider')}
            className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 focus:outline-none focus:ring-4 focus:ring-blue-500"
          >
            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Users className="w-8 h-8 text-blue-600" />
            </div>
            <h2 className="text-gray-900 mb-2">Rider</h2>
            <p className="text-gray-600">Book affordable, safe rides</p>
          </button>

          <button
            onClick={() => setSelectedRole('driver')}
            className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 focus:outline-none focus:ring-4 focus:ring-green-500"
          >
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Car className="w-8 h-8 text-green-600" />
            </div>
            <h2 className="text-gray-900 mb-2">Driver</h2>
            <p className="text-gray-600">Manage schedules & earnings</p>
          </button>

          <button
            onClick={() => setSelectedRole('manager')}
            className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 focus:outline-none focus:ring-4 focus:ring-purple-500"
          >
            <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <BarChart3 className="w-8 h-8 text-purple-600" />
            </div>
            <h2 className="text-gray-900 mb-2">Platform Manager</h2>
            <p className="text-gray-600">Monitor operations & metrics</p>
          </button>

          <button
            onClick={() => setSelectedRole('regulator')}
            className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 focus:outline-none focus:ring-4 focus:ring-orange-500"
          >
            <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Shield className="w-8 h-8 text-orange-600" />
            </div>
            <h2 className="text-gray-900 mb-2">Regulator</h2>
            <p className="text-gray-600">Ensure safety & compliance</p>
          </button>
        </div>
      </div>
    </div>
  );
}
