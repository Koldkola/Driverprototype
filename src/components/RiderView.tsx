import { useState } from 'react';
import { ArrowLeft, MapPin, Navigation, Clock, DollarSign, Shield, Star, X, Check } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

interface RiderViewProps {
  onBack: () => void;
}

interface Ride {
  id: string;
  driver: string;
  rating: number;
  vehicle: string;
  plate: string;
  eta: string;
  price: number;
  distance: string;
  duration: string;
  category: 'economy' | 'comfort' | 'premium';
}

const mockRides: Ride[] = [
  {
    id: '1',
    driver: 'John Smith',
    rating: 4.9,
    vehicle: 'Toyota Camry',
    plate: 'ABC-1234',
    eta: '3 min',
    price: 12.50,
    distance: '4.2 mi',
    duration: '15 min',
    category: 'economy'
  },
  {
    id: '2',
    driver: 'Sarah Johnson',
    rating: 4.8,
    vehicle: 'Honda Accord',
    plate: 'XYZ-5678',
    eta: '5 min',
    price: 15.75,
    distance: '4.2 mi',
    duration: '15 min',
    category: 'comfort'
  },
  {
    id: '3',
    driver: 'Michael Chen',
    rating: 5.0,
    vehicle: 'Tesla Model 3',
    plate: 'EV-9012',
    eta: '7 min',
    price: 22.00,
    distance: '4.2 mi',
    duration: '15 min',
    category: 'premium'
  }
];

export function RiderView({ onBack }: RiderViewProps) {
  const [pickup, setPickup] = useState('123 Main St, Downtown');
  const [dropoff, setDropoff] = useState('456 Oak Ave, Uptown');
  const [selectedRide, setSelectedRide] = useState<Ride | null>(null);
  const [isBooked, setIsBooked] = useState(false);

  const handleBookRide = (ride: Ride) => {
    setSelectedRide(ride);
    setIsBooked(true);
  };

  const handleCancelRide = () => {
    setSelectedRide(null);
    setIsBooked(false);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white border-b border-gray-200 px-6 py-4">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-4">
            <button
              onClick={onBack}
              className="p-2 hover:bg-gray-100 rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <ArrowLeft className="w-5 h-5" />
            </button>
            <h1 className="text-gray-900">Rider Dashboard</h1>
          </div>
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2 px-4 py-2 bg-green-50 rounded-full">
              <Shield className="w-4 h-4 text-green-600" />
              <span className="text-green-700">Safety Verified</span>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto p-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Left: Map and Booking */}
          <div className="space-y-6">
            {/* Map Preview */}
            <div className="bg-white rounded-xl shadow-sm overflow-hidden">
              <div className="relative h-96">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1758578484467-52d57a339904?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaXR5JTIwc3RyZWV0JTIwbWFwfGVufDF8fHx8MTc2NDMyMTE5Nnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                  alt="City map"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                <div className="absolute bottom-4 left-4 right-4 space-y-2">
                  <div className="flex items-center gap-2 text-white">
                    <MapPin className="w-5 h-5" />
                    <span>{pickup}</span>
                  </div>
                  <div className="flex items-center gap-2 text-white">
                    <Navigation className="w-5 h-5" />
                    <span>{dropoff}</span>
                  </div>
                </div>
              </div>

              {/* Location Input */}
              <div className="p-6 space-y-4">
                <div>
                  <label className="block text-gray-700 mb-2">Pickup Location</label>
                  <div className="relative">
                    <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                    <input
                      type="text"
                      value={pickup}
                      onChange={(e) => setPickup(e.target.value)}
                      className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-gray-700 mb-2">Dropoff Location</label>
                  <div className="relative">
                    <Navigation className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                    <input
                      type="text"
                      value={dropoff}
                      onChange={(e) => setDropoff(e.target.value)}
                      className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Safety Features */}
            <div className="bg-white rounded-xl shadow-sm p-6">
              <h2 className="text-gray-900 mb-4">Safety Features</h2>
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                    <Shield className="w-5 h-5 text-blue-600" />
                  </div>
                  <div>
                    <div className="text-gray-900">Driver Verification</div>
                    <div className="text-gray-600">Background checked & licensed</div>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
                    <Check className="w-5 h-5 text-green-600" />
                  </div>
                  <div>
                    <div className="text-gray-900">Real-time Tracking</div>
                    <div className="text-gray-600">Share trip with trusted contacts</div>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-purple-100 rounded-full flex items-center justify-center">
                    <Star className="w-5 h-5 text-purple-600" />
                  </div>
                  <div>
                    <div className="text-gray-900">Ratings System</div>
                    <div className="text-gray-600">Transparent driver reviews</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Available Rides */}
          <div className="space-y-6">
            {isBooked && selectedRide ? (
              <div className="bg-white rounded-xl shadow-sm p-6">
                <div className="flex items-center justify-between mb-6">
                  <h2 className="text-gray-900">Ride Confirmed</h2>
                  <button
                    onClick={handleCancelRide}
                    className="p-2 hover:bg-gray-100 rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-red-500"
                  >
                    <X className="w-5 h-5 text-gray-600" />
                  </button>
                </div>

                <div className="space-y-6">
                  <div className="flex items-center gap-4">
                    <ImageWithFallback
                      src="https://images.unsplash.com/photo-1610205296127-02e7366806e4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBkcml2ZXJ8ZW58MXx8fHwxNzY0MzI2MTMzfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                      alt={selectedRide.driver}
                      className="w-16 h-16 rounded-full object-cover"
                    />
                    <div className="flex-1">
                      <div className="text-gray-900">{selectedRide.driver}</div>
                      <div className="flex items-center gap-1 text-yellow-600">
                        <Star className="w-4 h-4 fill-current" />
                        <span>{selectedRide.rating}</span>
                      </div>
                    </div>
                  </div>

                  <div className="bg-gray-50 rounded-lg p-4 space-y-2">
                    <div className="flex justify-between">
                      <span className="text-gray-600">Vehicle</span>
                      <span className="text-gray-900">{selectedRide.vehicle}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Plate</span>
                      <span className="text-gray-900">{selectedRide.plate}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">ETA</span>
                      <span className="text-gray-900">{selectedRide.eta}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Distance</span>
                      <span className="text-gray-900">{selectedRide.distance}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Duration</span>
                      <span className="text-gray-900">{selectedRide.duration}</span>
                    </div>
                  </div>

                  <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                    <div className="flex items-center justify-between">
                      <span className="text-blue-900">Total Fare</span>
                      <span className="text-blue-900">${selectedRide.price.toFixed(2)}</span>
                    </div>
                  </div>

                  <button
                    onClick={handleCancelRide}
                    className="w-full py-3 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors focus:outline-none focus:ring-2 focus:ring-red-500"
                  >
                    Cancel Ride
                  </button>
                </div>
              </div>
            ) : (
              <>
                <h2 className="text-gray-900">Available Rides</h2>
                <div className="space-y-4">
                  {mockRides.map((ride) => (
                    <div key={ride.id} className="bg-white rounded-xl shadow-sm p-6 hover:shadow-md transition-shadow">
                      <div className="flex items-start justify-between mb-4">
                        <div className="flex items-center gap-3">
                          <ImageWithFallback
                            src="https://images.unsplash.com/photo-1616932321030-16411c3a6489?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBjYXJ8ZW58MXx8fHwxNzY0MzQzODUxfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                            alt={ride.vehicle}
                            className="w-12 h-12 rounded-lg object-cover"
                          />
                          <div>
                            <div className="text-gray-900">{ride.driver}</div>
                            <div className="flex items-center gap-1 text-gray-600">
                              <Star className="w-3 h-3 fill-yellow-400 text-yellow-400" />
                              <span>{ride.rating}</span>
                            </div>
                          </div>
                        </div>
                        <div className="text-right">
                          <div className="text-gray-900">${ride.price.toFixed(2)}</div>
                          <div className="text-gray-600 capitalize">{ride.category}</div>
                        </div>
                      </div>

                      <div className="grid grid-cols-3 gap-4 mb-4">
                        <div className="flex items-center gap-2 text-gray-600">
                          <Clock className="w-4 h-4" />
                          <span>{ride.eta}</span>
                        </div>
                        <div className="flex items-center gap-2 text-gray-600">
                          <Navigation className="w-4 h-4" />
                          <span>{ride.distance}</span>
                        </div>
                        <div className="flex items-center gap-2 text-gray-600">
                          <Clock className="w-4 h-4" />
                          <span>{ride.duration}</span>
                        </div>
                      </div>

                      <div className="text-gray-600 mb-4">
                        {ride.vehicle} • {ride.plate}
                      </div>

                      <button
                        onClick={() => handleBookRide(ride)}
                        className="w-full py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500"
                      >
                        Book Ride
                      </button>
                    </div>
                  ))}
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
