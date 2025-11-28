import { useState } from 'react';
import { ArrowLeft, DollarSign, Clock, Star, TrendingUp, Calendar, MapPin, CheckCircle, XCircle } from 'lucide-react';
import { BarChart, Bar, LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

interface DriverViewProps {
  onBack: () => void;
}

interface RideRequest {
  id: string;
  pickup: string;
  dropoff: string;
  distance: string;
  duration: string;
  fare: number;
  passengerRating: number;
}

const mockRideRequests: RideRequest[] = [
  {
    id: '1',
    pickup: '123 Main St',
    dropoff: '456 Oak Ave',
    distance: '4.2 mi',
    duration: '15 min',
    fare: 12.50,
    passengerRating: 4.8
  },
  {
    id: '2',
    pickup: '789 Pine Rd',
    dropoff: '321 Elm St',
    distance: '2.8 mi',
    duration: '10 min',
    fare: 8.75,
    passengerRating: 5.0
  }
];

const earningsData = [
  { day: 'Mon', earnings: 245 },
  { day: 'Tue', earnings: 312 },
  { day: 'Wed', earnings: 289 },
  { day: 'Thu', earnings: 356 },
  { day: 'Fri', earnings: 423 },
  { day: 'Sat', earnings: 498 },
  { day: 'Sun', earnings: 376 }
];

const ratingData = [
  { month: 'Jan', rating: 4.6 },
  { month: 'Feb', rating: 4.7 },
  { month: 'Mar', rating: 4.8 },
  { month: 'Apr', rating: 4.9 },
  { month: 'May', rating: 4.9 },
  { month: 'Jun', rating: 5.0 }
];

export function DriverView({ onBack }: DriverViewProps) {
  const [isOnline, setIsOnline] = useState(false);
  const [acceptedRides, setAcceptedRides] = useState<string[]>([]);

  const handleAcceptRide = (rideId: string) => {
    setAcceptedRides([...acceptedRides, rideId]);
  };

  const handleRejectRide = (rideId: string) => {
    // Remove from requests (in a real app, this would be handled by state management)
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white border-b border-gray-200 px-6 py-4">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-4">
            <button
              onClick={onBack}
              className="p-2 hover:bg-gray-100 rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-green-500"
            >
              <ArrowLeft className="w-5 h-5" />
            </button>
            <h1 className="text-gray-900">Driver Dashboard</h1>
          </div>
          <div className="flex items-center gap-4">
            <span className="text-gray-600">{isOnline ? 'Online' : 'Offline'}</span>
            <button
              onClick={() => setIsOnline(!isOnline)}
              className={`relative w-14 h-8 rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-green-500 ${
                isOnline ? 'bg-green-600' : 'bg-gray-300'
              }`}
            >
              <div
                className={`absolute top-1 left-1 w-6 h-6 bg-white rounded-full transition-transform ${
                  isOnline ? 'translate-x-6' : ''
                }`}
              />
            </button>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto p-6">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-6">
          {/* Stats Cards */}
          <div className="bg-white rounded-xl shadow-sm p-6">
            <div className="flex items-center justify-between mb-2">
              <span className="text-gray-600">Today's Earnings</span>
              <DollarSign className="w-5 h-5 text-green-600" />
            </div>
            <div className="text-gray-900">$423.50</div>
            <div className="text-green-600">+12% from yesterday</div>
          </div>

          <div className="bg-white rounded-xl shadow-sm p-6">
            <div className="flex items-center justify-between mb-2">
              <span className="text-gray-600">Hours Online</span>
              <Clock className="w-5 h-5 text-blue-600" />
            </div>
            <div className="text-gray-900">8.5 hours</div>
            <div className="text-gray-600">14 trips completed</div>
          </div>

          <div className="bg-white rounded-xl shadow-sm p-6">
            <div className="flex items-center justify-between mb-2">
              <span className="text-gray-600">Rating</span>
              <Star className="w-5 h-5 text-yellow-600" />
            </div>
            <div className="text-gray-900">5.0</div>
            <div className="text-gray-600">Based on 247 reviews</div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Left Column */}
          <div className="space-y-6">
            {/* Ride Requests */}
            <div className="bg-white rounded-xl shadow-sm p-6">
              <h2 className="text-gray-900 mb-4">
                {isOnline ? 'Incoming Ride Requests' : 'Go Online to Receive Requests'}
              </h2>
              {isOnline ? (
                <div className="space-y-4">
                  {mockRideRequests.map((request) => (
                    <div
                      key={request.id}
                      className={`border rounded-lg p-4 ${
                        acceptedRides.includes(request.id)
                          ? 'border-green-300 bg-green-50'
                          : 'border-gray-200'
                      }`}
                    >
                      <div className="flex items-start justify-between mb-3">
                        <div className="flex-1">
                          <div className="flex items-center gap-2 text-gray-900 mb-1">
                            <MapPin className="w-4 h-4" />
                            <span>{request.pickup}</span>
                          </div>
                          <div className="flex items-center gap-2 text-gray-600 mb-2">
                            <MapPin className="w-4 h-4" />
                            <span>{request.dropoff}</span>
                          </div>
                        </div>
                        <div className="text-right">
                          <div className="text-gray-900">${request.fare.toFixed(2)}</div>
                          <div className="flex items-center gap-1 text-yellow-600">
                            <Star className="w-3 h-3 fill-current" />
                            <span>{request.passengerRating}</span>
                          </div>
                        </div>
                      </div>

                      <div className="flex items-center gap-4 text-gray-600 mb-4">
                        <span>{request.distance}</span>
                        <span>•</span>
                        <span>{request.duration}</span>
                      </div>

                      {acceptedRides.includes(request.id) ? (
                        <div className="flex items-center justify-center gap-2 text-green-700 py-2">
                          <CheckCircle className="w-5 h-5" />
                          <span>Ride Accepted</span>
                        </div>
                      ) : (
                        <div className="flex gap-2">
                          <button
                            onClick={() => handleRejectRide(request.id)}
                            className="flex-1 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors focus:outline-none focus:ring-2 focus:ring-gray-500"
                          >
                            Decline
                          </button>
                          <button
                            onClick={() => handleAcceptRide(request.id)}
                            className="flex-1 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors focus:outline-none focus:ring-2 focus:ring-green-500"
                          >
                            Accept
                          </button>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              ) : (
                <div className="text-center py-12 text-gray-400">
                  <Clock className="w-12 h-12 mx-auto mb-3" />
                  <p>Toggle online to start receiving ride requests</p>
                </div>
              )}
            </div>

            {/* Schedule */}
            <div className="bg-white rounded-xl shadow-sm p-6">
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-gray-900">This Week's Schedule</h2>
                <Calendar className="w-5 h-5 text-gray-400" />
              </div>
              <div className="space-y-3">
                {['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'].map((day, idx) => (
                  <div key={day} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                    <span className="text-gray-900">{day}</span>
                    <span className="text-gray-600">
                      {idx < 5 ? '9:00 AM - 5:00 PM' : idx === 5 ? '10:00 AM - 8:00 PM' : 'Off'}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column */}
          <div className="space-y-6">
            {/* Weekly Earnings Chart */}
            <div className="bg-white rounded-xl shadow-sm p-6">
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-gray-900">Weekly Earnings</h2>
                <TrendingUp className="w-5 h-5 text-green-600" />
              </div>
              <ResponsiveContainer width="100%" height={250}>
                <BarChart data={earningsData}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
                  <XAxis dataKey="day" stroke="#666" />
                  <YAxis stroke="#666" />
                  <Tooltip
                    contentStyle={{
                      backgroundColor: '#fff',
                      border: '1px solid #e5e7eb',
                      borderRadius: '8px'
                    }}
                  />
                  <Bar dataKey="earnings" fill="#10b981" radius={[8, 8, 0, 0]} />
                </BarChart>
              </ResponsiveContainer>
              <div className="mt-4 p-4 bg-green-50 rounded-lg">
                <div className="flex items-center justify-between">
                  <span className="text-green-700">Total Weekly Earnings</span>
                  <span className="text-green-900">$2,499.00</span>
                </div>
              </div>
            </div>

            {/* Rating Trend */}
            <div className="bg-white rounded-xl shadow-sm p-6">
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-gray-900">Rating Trend</h2>
                <Star className="w-5 h-5 text-yellow-600" />
              </div>
              <ResponsiveContainer width="100%" height={200}>
                <LineChart data={ratingData}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
                  <XAxis dataKey="month" stroke="#666" />
                  <YAxis domain={[4.0, 5.0]} stroke="#666" />
                  <Tooltip
                    contentStyle={{
                      backgroundColor: '#fff',
                      border: '1px solid #e5e7eb',
                      borderRadius: '8px'
                    }}
                  />
                  <Line type="monotone" dataKey="rating" stroke="#f59e0b" strokeWidth={3} />
                </LineChart>
              </ResponsiveContainer>
            </div>

            {/* Compensation Info */}
            <div className="bg-white rounded-xl shadow-sm p-6">
              <h2 className="text-gray-900 mb-4">Compensation Breakdown</h2>
              <div className="space-y-3">
                <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                  <span className="text-gray-600">Base Fare</span>
                  <span className="text-gray-900">$1,850</span>
                </div>
                <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                  <span className="text-gray-600">Tips</span>
                  <span className="text-gray-900">$425</span>
                </div>
                <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                  <span className="text-gray-600">Bonuses</span>
                  <span className="text-gray-900">$224</span>
                </div>
                <div className="flex items-center justify-between p-3 bg-blue-50 border border-blue-200 rounded-lg">
                  <span className="text-blue-900">Total This Week</span>
                  <span className="text-blue-900">$2,499</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
