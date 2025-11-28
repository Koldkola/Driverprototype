import { useState } from 'react';
import { ArrowLeft, Users, Car, TrendingUp, AlertCircle, MapPin, Clock, Star, CheckCircle } from 'lucide-react';
import { LineChart, Line, BarChart, Bar, PieChart, Pie, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

interface ManagerViewProps {
  onBack: () => void;
}

const performanceData = [
  { time: '00:00', rides: 45, satisfaction: 4.2 },
  { time: '04:00', rides: 23, satisfaction: 4.5 },
  { time: '08:00', rides: 145, satisfaction: 4.6 },
  { time: '12:00', rides: 189, satisfaction: 4.4 },
  { time: '16:00', rides: 234, satisfaction: 4.7 },
  { time: '20:00', rides: 198, satisfaction: 4.5 }
];

const matchingEfficiency = [
  { hour: '6 AM', avgWait: 2.3, matches: 89 },
  { hour: '9 AM', avgWait: 3.1, matches: 245 },
  { hour: '12 PM', avgWait: 2.8, matches: 198 },
  { hour: '3 PM', avgWait: 2.5, matches: 167 },
  { hour: '6 PM', avgWait: 3.5, matches: 312 },
  { hour: '9 PM', avgWait: 2.2, matches: 156 }
];

const issueDistribution = [
  { name: 'Payment Issues', value: 12, color: '#ef4444' },
  { name: 'Driver Complaints', value: 8, color: '#f59e0b' },
  { name: 'Route Problems', value: 15, color: '#3b82f6' },
  { name: 'App Bugs', value: 6, color: '#8b5cf6' },
  { name: 'Other', value: 4, color: '#6b7280' }
];

const recentIssues = [
  {
    id: '1',
    type: 'Payment Issue',
    description: 'Customer charged twice for ride #12345',
    priority: 'high',
    status: 'investigating',
    time: '5 min ago'
  },
  {
    id: '2',
    type: 'Driver Complaint',
    description: 'Driver reported aggressive passenger behavior',
    priority: 'medium',
    status: 'in-progress',
    time: '12 min ago'
  },
  {
    id: '3',
    type: 'Route Problem',
    description: 'App suggested route through closed street',
    priority: 'low',
    status: 'resolved',
    time: '1 hour ago'
  }
];

export function ManagerView({ onBack }: ManagerViewProps) {
  const [activeTab, setActiveTab] = useState<'overview' | 'matching' | 'issues'>('overview');

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white border-b border-gray-200 px-6 py-4">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-4">
            <button
              onClick={onBack}
              className="p-2 hover:bg-gray-100 rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-purple-500"
            >
              <ArrowLeft className="w-5 h-5" />
            </button>
            <h1 className="text-gray-900">Platform Manager Dashboard</h1>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
            <span className="text-gray-600">Live Monitoring</span>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto p-6">
        {/* KPI Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
          <div className="bg-white rounded-xl shadow-sm p-6">
            <div className="flex items-center justify-between mb-2">
              <span className="text-gray-600">Active Rides</span>
              <Car className="w-5 h-5 text-blue-600" />
            </div>
            <div className="text-gray-900">1,234</div>
            <div className="text-green-600">+18% vs last hour</div>
          </div>

          <div className="bg-white rounded-xl shadow-sm p-6">
            <div className="flex items-center justify-between mb-2">
              <span className="text-gray-600">Active Drivers</span>
              <Users className="w-5 h-5 text-green-600" />
            </div>
            <div className="text-gray-900">3,456</div>
            <div className="text-gray-600">89% utilization</div>
          </div>

          <div className="bg-white rounded-xl shadow-sm p-6">
            <div className="flex items-center justify-between mb-2">
              <span className="text-gray-600">Avg Satisfaction</span>
              <Star className="w-5 h-5 text-yellow-600" />
            </div>
            <div className="text-gray-900">4.6/5.0</div>
            <div className="text-green-600">+0.2 this week</div>
          </div>

          <div className="bg-white rounded-xl shadow-sm p-6">
            <div className="flex items-center justify-between mb-2">
              <span className="text-gray-600">Avg Match Time</span>
              <Clock className="w-5 h-5 text-purple-600" />
            </div>
            <div className="text-gray-900">2.8 min</div>
            <div className="text-green-600">-0.3 min vs target</div>
          </div>
        </div>

        {/* Tabs */}
        <div className="bg-white rounded-xl shadow-sm mb-6">
          <div className="border-b border-gray-200">
            <div className="flex gap-8 px-6">
              <button
                onClick={() => setActiveTab('overview')}
                className={`py-4 border-b-2 transition-colors focus:outline-none ${
                  activeTab === 'overview'
                    ? 'border-purple-600 text-purple-600'
                    : 'border-transparent text-gray-600 hover:text-gray-900'
                }`}
              >
                Overview
              </button>
              <button
                onClick={() => setActiveTab('matching')}
                className={`py-4 border-b-2 transition-colors focus:outline-none ${
                  activeTab === 'matching'
                    ? 'border-purple-600 text-purple-600'
                    : 'border-transparent text-gray-600 hover:text-gray-900'
                }`}
              >
                Matching Efficiency
              </button>
              <button
                onClick={() => setActiveTab('issues')}
                className={`py-4 border-b-2 transition-colors focus:outline-none ${
                  activeTab === 'issues'
                    ? 'border-purple-600 text-purple-600'
                    : 'border-transparent text-gray-600 hover:text-gray-900'
                }`}
              >
                Issues & Support
              </button>
            </div>
          </div>

          <div className="p-6">
            {activeTab === 'overview' && (
              <div className="space-y-6">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                  {/* Performance Chart */}
                  <div>
                    <h2 className="text-gray-900 mb-4">Today's Performance</h2>
                    <ResponsiveContainer width="100%" height={300}>
                      <LineChart data={performanceData}>
                        <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
                        <XAxis dataKey="time" stroke="#666" />
                        <YAxis yAxisId="left" stroke="#666" />
                        <YAxis yAxisId="right" orientation="right" stroke="#666" />
                        <Tooltip
                          contentStyle={{
                            backgroundColor: '#fff',
                            border: '1px solid #e5e7eb',
                            borderRadius: '8px'
                          }}
                        />
                        <Legend />
                        <Line yAxisId="left" type="monotone" dataKey="rides" stroke="#3b82f6" strokeWidth={2} name="Rides" />
                        <Line yAxisId="right" type="monotone" dataKey="satisfaction" stroke="#10b981" strokeWidth={2} name="Satisfaction" />
                      </LineChart>
                    </ResponsiveContainer>
                  </div>

                  {/* Regional Activity */}
                  <div>
                    <h2 className="text-gray-900 mb-4">Regional Activity</h2>
                    <div className="space-y-3">
                      {[
                        { region: 'Downtown', rides: 456, demand: 'high' },
                        { region: 'Midtown', rides: 342, demand: 'high' },
                        { region: 'Uptown', rides: 234, demand: 'medium' },
                        { region: 'Suburbs', rides: 123, demand: 'low' },
                        { region: 'Airport', rides: 89, demand: 'medium' }
                      ].map((area) => (
                        <div key={area.region} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                          <div className="flex items-center gap-3">
                            <MapPin className="w-5 h-5 text-gray-400" />
                            <div>
                              <div className="text-gray-900">{area.region}</div>
                              <div className="text-gray-600">{area.rides} active rides</div>
                            </div>
                          </div>
                          <span
                            className={`px-3 py-1 rounded-full ${
                              area.demand === 'high'
                                ? 'bg-red-100 text-red-700'
                                : area.demand === 'medium'
                                ? 'bg-yellow-100 text-yellow-700'
                                : 'bg-green-100 text-green-700'
                            }`}
                          >
                            {area.demand}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'matching' && (
              <div className="space-y-6">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                  {/* Matching Efficiency Chart */}
                  <div>
                    <h2 className="text-gray-900 mb-4">Matching Efficiency by Hour</h2>
                    <ResponsiveContainer width="100%" height={300}>
                      <BarChart data={matchingEfficiency}>
                        <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
                        <XAxis dataKey="hour" stroke="#666" />
                        <YAxis yAxisId="left" stroke="#666" />
                        <YAxis yAxisId="right" orientation="right" stroke="#666" />
                        <Tooltip
                          contentStyle={{
                            backgroundColor: '#fff',
                            border: '1px solid #e5e7eb',
                            borderRadius: '8px'
                          }}
                        />
                        <Legend />
                        <Bar yAxisId="left" dataKey="avgWait" fill="#8b5cf6" name="Avg Wait (min)" radius={[8, 8, 0, 0]} />
                        <Bar yAxisId="right" dataKey="matches" fill="#10b981" name="Matches" radius={[8, 8, 0, 0]} />
                      </BarChart>
                    </ResponsiveContainer>
                  </div>

                  {/* Efficiency Metrics */}
                  <div>
                    <h2 className="text-gray-900 mb-4">Efficiency Metrics</h2>
                    <div className="space-y-4">
                      <div className="p-4 bg-green-50 border border-green-200 rounded-lg">
                        <div className="flex items-center justify-between mb-2">
                          <span className="text-green-900">Success Rate</span>
                          <CheckCircle className="w-5 h-5 text-green-600" />
                        </div>
                        <div className="text-green-900">98.4%</div>
                        <div className="text-green-700">Above target of 95%</div>
                      </div>

                      <div className="p-4 bg-blue-50 border border-blue-200 rounded-lg">
                        <div className="flex items-center justify-between mb-2">
                          <span className="text-blue-900">Avg Response Time</span>
                          <Clock className="w-5 h-5 text-blue-600" />
                        </div>
                        <div className="text-blue-900">12 seconds</div>
                        <div className="text-blue-700">2s faster than average</div>
                      </div>

                      <div className="p-4 bg-purple-50 border border-purple-200 rounded-lg">
                        <div className="flex items-center justify-between mb-2">
                          <span className="text-purple-900">Peak Efficiency</span>
                          <TrendingUp className="w-5 h-5 text-purple-600" />
                        </div>
                        <div className="text-purple-900">6:00 PM</div>
                        <div className="text-purple-700">312 matches per hour</div>
                      </div>

                      <div className="p-4 bg-gray-50 rounded-lg">
                        <div className="text-gray-900 mb-2">Driver-to-Rider Ratio</div>
                        <div className="flex items-center gap-2">
                          <div className="flex-1 bg-gray-200 h-2 rounded-full overflow-hidden">
                            <div className="bg-green-600 h-full" style={{ width: '73%' }} />
                          </div>
                          <span className="text-gray-600">1:2.8</span>
                        </div>
                        <div className="text-gray-600 mt-1">Optimal range</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'issues' && (
              <div className="space-y-6">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                  {/* Issue Distribution */}
                  <div>
                    <h2 className="text-gray-900 mb-4">Issue Distribution</h2>
                    <ResponsiveContainer width="100%" height={300}>
                      <PieChart>
                        <Pie
                          data={issueDistribution}
                          cx="50%"
                          cy="50%"
                          labelLine={false}
                          label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                          outerRadius={100}
                          fill="#8884d8"
                          dataKey="value"
                        >
                          {issueDistribution.map((entry, index) => (
                            <Cell key={`cell-${index}`} fill={entry.color} />
                          ))}
                        </Pie>
                        <Tooltip />
                      </PieChart>
                    </ResponsiveContainer>
                  </div>

                  {/* Recent Issues */}
                  <div>
                    <h2 className="text-gray-900 mb-4">Recent Issues</h2>
                    <div className="space-y-3">
                      {recentIssues.map((issue) => (
                        <div key={issue.id} className="p-4 border border-gray-200 rounded-lg">
                          <div className="flex items-start justify-between mb-2">
                            <div className="flex items-center gap-2">
                              <AlertCircle
                                className={`w-5 h-5 ${
                                  issue.priority === 'high'
                                    ? 'text-red-600'
                                    : issue.priority === 'medium'
                                    ? 'text-yellow-600'
                                    : 'text-blue-600'
                                }`}
                              />
                              <span className="text-gray-900">{issue.type}</span>
                            </div>
                            <span className="text-gray-500">{issue.time}</span>
                          </div>
                          <p className="text-gray-600 mb-2">{issue.description}</p>
                          <div className="flex items-center gap-2">
                            <span
                              className={`px-2 py-1 rounded text-white ${
                                issue.priority === 'high'
                                  ? 'bg-red-600'
                                  : issue.priority === 'medium'
                                  ? 'bg-yellow-600'
                                  : 'bg-blue-600'
                              }`}
                            >
                              {issue.priority}
                            </span>
                            <span
                              className={`px-2 py-1 rounded ${
                                issue.status === 'resolved'
                                  ? 'bg-green-100 text-green-700'
                                  : issue.status === 'in-progress'
                                  ? 'bg-blue-100 text-blue-700'
                                  : 'bg-yellow-100 text-yellow-700'
                              }`}
                            >
                              {issue.status}
                            </span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
