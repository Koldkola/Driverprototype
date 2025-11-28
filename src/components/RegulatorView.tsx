import { useState } from 'react';
import { ArrowLeft, Shield, Leaf, AlertTriangle, TrendingDown, Activity, FileText, CheckCircle, XCircle } from 'lucide-react';
import { LineChart, Line, BarChart, Bar, AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

interface RegulatorViewProps {
  onBack: () => void;
}

const safetyMetrics = [
  { month: 'Jan', incidents: 12, rate: 0.08 },
  { month: 'Feb', incidents: 8, rate: 0.06 },
  { month: 'Mar', incidents: 10, rate: 0.07 },
  { month: 'Apr', incidents: 6, rate: 0.05 },
  { month: 'May', incidents: 5, rate: 0.04 },
  { month: 'Jun', incidents: 4, rate: 0.03 }
];

const environmentalData = [
  { month: 'Jan', emissions: 145, evAdoption: 15 },
  { month: 'Feb', emissions: 138, evAdoption: 18 },
  { month: 'Mar', emissions: 132, evAdoption: 22 },
  { month: 'Apr', emissions: 125, evAdoption: 26 },
  { month: 'May', emissions: 118, evAdoption: 31 },
  { month: 'Jun', emissions: 108, evAdoption: 35 }
];

const trafficData = [
  { hour: '6 AM', congestion: 25, rides: 89 },
  { hour: '9 AM', congestion: 68, rides: 245 },
  { hour: '12 PM', congestion: 45, rides: 198 },
  { hour: '3 PM', congestion: 52, rides: 167 },
  { hour: '6 PM', congestion: 78, rides: 312 },
  { hour: '9 PM', congestion: 35, rides: 156 }
];

const complianceItems = [
  {
    id: '1',
    category: 'Driver Background Checks',
    status: 'compliant',
    lastAudit: '2 weeks ago',
    completion: 100
  },
  {
    id: '2',
    category: 'Vehicle Inspections',
    status: 'compliant',
    lastAudit: '1 week ago',
    completion: 98
  },
  {
    id: '3',
    category: 'Insurance Coverage',
    status: 'warning',
    lastAudit: '3 days ago',
    completion: 94
  },
  {
    id: '4',
    category: 'Data Privacy',
    status: 'compliant',
    lastAudit: '1 month ago',
    completion: 100
  },
  {
    id: '5',
    category: 'Accessibility Standards',
    status: 'warning',
    lastAudit: '2 weeks ago',
    completion: 92
  }
];

export function RegulatorView({ onBack }: RegulatorViewProps) {
  const [activeTab, setActiveTab] = useState<'safety' | 'environment' | 'traffic' | 'compliance'>('safety');

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white border-b border-gray-200 px-6 py-4">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-4">
            <button
              onClick={onBack}
              className="p-2 hover:bg-gray-100 rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-orange-500"
            >
              <ArrowLeft className="w-5 h-5" />
            </button>
            <h1 className="text-gray-900">Regulatory Compliance Dashboard</h1>
          </div>
          <div className="flex items-center gap-2 px-4 py-2 bg-green-50 rounded-full">
            <CheckCircle className="w-4 h-4 text-green-600" />
            <span className="text-green-700">96% Compliance</span>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto p-6">
        {/* Overview Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
          <div className="bg-white rounded-xl shadow-sm p-6">
            <div className="flex items-center justify-between mb-2">
              <span className="text-gray-600">Safety Score</span>
              <Shield className="w-5 h-5 text-green-600" />
            </div>
            <div className="text-gray-900">9.7/10</div>
            <div className="text-green-600">+0.4 this quarter</div>
          </div>

          <div className="bg-white rounded-xl shadow-sm p-6">
            <div className="flex items-center justify-between mb-2">
              <span className="text-gray-600">CO₂ Reduction</span>
              <Leaf className="w-5 h-5 text-emerald-600" />
            </div>
            <div className="text-gray-900">25.5%</div>
            <div className="text-emerald-600">vs last year</div>
          </div>

          <div className="bg-white rounded-xl shadow-sm p-6">
            <div className="flex items-center justify-between mb-2">
              <span className="text-gray-600">Traffic Impact</span>
              <Activity className="w-5 h-5 text-blue-600" />
            </div>
            <div className="text-gray-900">-3.2%</div>
            <div className="text-blue-600">congestion reduction</div>
          </div>

          <div className="bg-white rounded-xl shadow-sm p-6">
            <div className="flex items-center justify-between mb-2">
              <span className="text-gray-600">Active Alerts</span>
              <AlertTriangle className="w-5 h-5 text-yellow-600" />
            </div>
            <div className="text-gray-900">3</div>
            <div className="text-gray-600">2 resolved today</div>
          </div>
        </div>

        {/* Tabs */}
        <div className="bg-white rounded-xl shadow-sm mb-6">
          <div className="border-b border-gray-200">
            <div className="flex gap-8 px-6">
              <button
                onClick={() => setActiveTab('safety')}
                className={`py-4 border-b-2 transition-colors focus:outline-none ${
                  activeTab === 'safety'
                    ? 'border-orange-600 text-orange-600'
                    : 'border-transparent text-gray-600 hover:text-gray-900'
                }`}
              >
                Public Safety
              </button>
              <button
                onClick={() => setActiveTab('environment')}
                className={`py-4 border-b-2 transition-colors focus:outline-none ${
                  activeTab === 'environment'
                    ? 'border-orange-600 text-orange-600'
                    : 'border-transparent text-gray-600 hover:text-gray-900'
                }`}
              >
                Environmental
              </button>
              <button
                onClick={() => setActiveTab('traffic')}
                className={`py-4 border-b-2 transition-colors focus:outline-none ${
                  activeTab === 'traffic'
                    ? 'border-orange-600 text-orange-600'
                    : 'border-transparent text-gray-600 hover:text-gray-900'
                }`}
              >
                Traffic Impact
              </button>
              <button
                onClick={() => setActiveTab('compliance')}
                className={`py-4 border-b-2 transition-colors focus:outline-none ${
                  activeTab === 'compliance'
                    ? 'border-orange-600 text-orange-600'
                    : 'border-transparent text-gray-600 hover:text-gray-900'
                }`}
              >
                Compliance
              </button>
            </div>
          </div>

          <div className="p-6">
            {activeTab === 'safety' && (
              <div className="space-y-6">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                  {/* Safety Incidents Chart */}
                  <div>
                    <h2 className="text-gray-900 mb-4">Safety Incidents Trend</h2>
                    <ResponsiveContainer width="100%" height={300}>
                      <LineChart data={safetyMetrics}>
                        <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
                        <XAxis dataKey="month" stroke="#666" />
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
                        <Line yAxisId="left" type="monotone" dataKey="incidents" stroke="#ef4444" strokeWidth={2} name="Incidents" />
                        <Line yAxisId="right" type="monotone" dataKey="rate" stroke="#f59e0b" strokeWidth={2} name="Rate per 1000" />
                      </LineChart>
                    </ResponsiveContainer>
                    <div className="mt-4 p-4 bg-green-50 rounded-lg">
                      <div className="flex items-center gap-2 text-green-700">
                        <TrendingDown className="w-5 h-5" />
                        <span>67% reduction in incidents over 6 months</span>
                      </div>
                    </div>
                  </div>

                  {/* Safety Metrics */}
                  <div>
                    <h2 className="text-gray-900 mb-4">Safety Compliance Metrics</h2>
                    <div className="space-y-4">
                      <div className="p-4 bg-gray-50 rounded-lg">
                        <div className="flex items-center justify-between mb-2">
                          <span className="text-gray-700">Background Checks</span>
                          <span className="text-green-600">100%</span>
                        </div>
                        <div className="w-full bg-gray-200 h-2 rounded-full overflow-hidden">
                          <div className="bg-green-600 h-full" style={{ width: '100%' }} />
                        </div>
                      </div>

                      <div className="p-4 bg-gray-50 rounded-lg">
                        <div className="flex items-center justify-between mb-2">
                          <span className="text-gray-700">Vehicle Inspections</span>
                          <span className="text-green-600">98%</span>
                        </div>
                        <div className="w-full bg-gray-200 h-2 rounded-full overflow-hidden">
                          <div className="bg-green-600 h-full" style={{ width: '98%' }} />
                        </div>
                      </div>

                      <div className="p-4 bg-gray-50 rounded-lg">
                        <div className="flex items-center justify-between mb-2">
                          <span className="text-gray-700">Driver Training</span>
                          <span className="text-yellow-600">94%</span>
                        </div>
                        <div className="w-full bg-gray-200 h-2 rounded-full overflow-hidden">
                          <div className="bg-yellow-600 h-full" style={{ width: '94%' }} />
                        </div>
                      </div>

                      <div className="p-4 bg-gray-50 rounded-lg">
                        <div className="flex items-center justify-between mb-2">
                          <span className="text-gray-700">Insurance Coverage</span>
                          <span className="text-green-600">97%</span>
                        </div>
                        <div className="w-full bg-gray-200 h-2 rounded-full overflow-hidden">
                          <div className="bg-green-600 h-full" style={{ width: '97%' }} />
                        </div>
                      </div>

                      <div className="p-4 bg-blue-50 border border-blue-200 rounded-lg">
                        <div className="text-blue-900 mb-1">Emergency Response Time</div>
                        <div className="text-blue-900">2.3 minutes</div>
                        <div className="text-blue-700">Below 3-minute target</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'environment' && (
              <div className="space-y-6">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                  {/* Environmental Impact Chart */}
                  <div>
                    <h2 className="text-gray-900 mb-4">Environmental Sustainability</h2>
                    <ResponsiveContainer width="100%" height={300}>
                      <AreaChart data={environmentalData}>
                        <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
                        <XAxis dataKey="month" stroke="#666" />
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
                        <Area yAxisId="left" type="monotone" dataKey="emissions" stroke="#ef4444" fill="#fee2e2" name="CO₂ Emissions (tons)" />
                        <Area yAxisId="right" type="monotone" dataKey="evAdoption" stroke="#10b981" fill="#d1fae5" name="EV Adoption %" />
                      </AreaChart>
                    </ResponsiveContainer>
                  </div>

                  {/* Environmental Metrics */}
                  <div>
                    <h2 className="text-gray-900 mb-4">Sustainability Metrics</h2>
                    <div className="space-y-4">
                      <div className="p-4 bg-emerald-50 border border-emerald-200 rounded-lg">
                        <div className="flex items-center justify-between mb-2">
                          <span className="text-emerald-900">EV Fleet Percentage</span>
                          <Leaf className="w-5 h-5 text-emerald-600" />
                        </div>
                        <div className="text-emerald-900">35%</div>
                        <div className="text-emerald-700">Target: 50% by year-end</div>
                      </div>

                      <div className="p-4 bg-gray-50 rounded-lg">
                        <div className="text-gray-900 mb-1">Carbon Offset Programs</div>
                        <div className="text-gray-900">12,450 tons</div>
                        <div className="text-gray-600">Offset this quarter</div>
                      </div>

                      <div className="p-4 bg-gray-50 rounded-lg">
                        <div className="text-gray-900 mb-1">Avg Emissions per Ride</div>
                        <div className="text-gray-900">0.42 kg CO₂</div>
                        <div className="text-green-600">-18% vs last year</div>
                      </div>

                      <div className="p-4 bg-gray-50 rounded-lg">
                        <div className="text-gray-900 mb-1">Ride Pooling Rate</div>
                        <div className="text-gray-900">38%</div>
                        <div className="text-green-600">+5% this quarter</div>
                      </div>

                      <div className="p-4 bg-blue-50 border border-blue-200 rounded-lg">
                        <div className="text-blue-900 mb-1">Green Miles Driven</div>
                        <div className="text-blue-900">2.4M miles</div>
                        <div className="text-blue-700">Zero-emission vehicles</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'traffic' && (
              <div className="space-y-6">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                  {/* Traffic Impact Chart */}
                  <div>
                    <h2 className="text-gray-900 mb-4">Traffic Congestion Impact</h2>
                    <ResponsiveContainer width="100%" height={300}>
                      <BarChart data={trafficData}>
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
                        <Bar yAxisId="left" dataKey="congestion" fill="#f59e0b" name="Congestion Index" radius={[8, 8, 0, 0]} />
                        <Bar yAxisId="right" dataKey="rides" fill="#3b82f6" name="Active Rides" radius={[8, 8, 0, 0]} />
                      </BarChart>
                    </ResponsiveContainer>
                  </div>

                  {/* Traffic Metrics */}
                  <div>
                    <h2 className="text-gray-900 mb-4">Traffic Management</h2>
                    <div className="space-y-4">
                      <div className="p-4 bg-blue-50 border border-blue-200 rounded-lg">
                        <div className="flex items-center justify-between mb-2">
                          <span className="text-blue-900">Avg Trip Efficiency</span>
                          <Activity className="w-5 h-5 text-blue-600" />
                        </div>
                        <div className="text-blue-900">87%</div>
                        <div className="text-blue-700">Route optimization active</div>
                      </div>

                      <div className="p-4 bg-gray-50 rounded-lg">
                        <div className="text-gray-900 mb-1">Peak Hour Congestion</div>
                        <div className="text-gray-900">68/100</div>
                        <div className="text-yellow-600">Moderate impact</div>
                      </div>

                      <div className="p-4 bg-gray-50 rounded-lg">
                        <div className="text-gray-900 mb-1">Restricted Zone Compliance</div>
                        <div className="text-gray-900">99.2%</div>
                        <div className="text-green-600">Above 95% requirement</div>
                      </div>

                      <div className="p-4 bg-gray-50 rounded-lg">
                        <div className="text-gray-900 mb-1">Idle Time Reduction</div>
                        <div className="text-gray-900">42%</div>
                        <div className="text-green-600">vs previous quarter</div>
                      </div>

                      <div className="p-4 bg-green-50 border border-green-200 rounded-lg">
                        <div className="text-green-900 mb-1">Public Transit Integration</div>
                        <div className="text-green-900">23% of rides</div>
                        <div className="text-green-700">First/last mile connections</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'compliance' && (
              <div className="space-y-6">
                <h2 className="text-gray-900">Regulatory Compliance Status</h2>
                <div className="space-y-4">
                  {complianceItems.map((item) => (
                    <div key={item.id} className="bg-gray-50 border border-gray-200 rounded-lg p-6">
                      <div className="flex items-start justify-between mb-4">
                        <div className="flex items-center gap-3">
                          {item.status === 'compliant' ? (
                            <CheckCircle className="w-6 h-6 text-green-600" />
                          ) : (
                            <AlertTriangle className="w-6 h-6 text-yellow-600" />
                          )}
                          <div>
                            <div className="text-gray-900">{item.category}</div>
                            <div className="text-gray-600">Last audit: {item.lastAudit}</div>
                          </div>
                        </div>
                        <span
                          className={`px-3 py-1 rounded-full ${
                            item.status === 'compliant'
                              ? 'bg-green-100 text-green-700'
                              : 'bg-yellow-100 text-yellow-700'
                          }`}
                        >
                          {item.status}
                        </span>
                      </div>
                      <div className="flex items-center gap-4">
                        <div className="flex-1 bg-gray-200 h-2 rounded-full overflow-hidden">
                          <div
                            className={`h-full ${
                              item.status === 'compliant' ? 'bg-green-600' : 'bg-yellow-600'
                            }`}
                            style={{ width: `${item.completion}%` }}
                          />
                        </div>
                        <span className="text-gray-600">{item.completion}%</span>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-6">
                  <div className="bg-white border border-gray-200 rounded-xl p-6">
                    <div className="flex items-center gap-3 mb-4">
                      <FileText className="w-6 h-6 text-blue-600" />
                      <h3 className="text-gray-900">Audit Reports</h3>
                    </div>
                    <div className="space-y-3">
                      {[
                        { name: 'Q2 2024 Safety Audit', date: 'Jun 15, 2024', status: 'approved' },
                        { name: 'Q1 2024 Environmental Report', date: 'Mar 20, 2024', status: 'approved' },
                        { name: 'Annual Compliance Review', date: 'Jan 10, 2024', status: 'approved' }
                      ].map((report, idx) => (
                        <div key={idx} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                          <div>
                            <div className="text-gray-900">{report.name}</div>
                            <div className="text-gray-600">{report.date}</div>
                          </div>
                          <span className="px-3 py-1 bg-green-100 text-green-700 rounded-full">
                            {report.status}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="bg-white border border-gray-200 rounded-xl p-6">
                    <div className="flex items-center gap-3 mb-4">
                      <AlertTriangle className="w-6 h-6 text-yellow-600" />
                      <h3 className="text-gray-900">Action Items</h3>
                    </div>
                    <div className="space-y-3">
                      {[
                        { task: 'Complete accessibility audit', due: 'Due in 5 days', priority: 'medium' },
                        { task: 'Update insurance certificates', due: 'Due in 12 days', priority: 'low' },
                        { task: 'Schedule Q3 safety review', due: 'Due in 20 days', priority: 'low' }
                      ].map((item, idx) => (
                        <div key={idx} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                          <div>
                            <div className="text-gray-900">{item.task}</div>
                            <div className="text-gray-600">{item.due}</div>
                          </div>
                          <span
                            className={`px-3 py-1 rounded-full ${
                              item.priority === 'medium'
                                ? 'bg-yellow-100 text-yellow-700'
                                : 'bg-blue-100 text-blue-700'
                            }`}
                          >
                            {item.priority}
                          </span>
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
