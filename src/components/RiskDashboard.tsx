
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { TrendingUp, AlertTriangle, Shield, Users } from "lucide-react";

const RiskDashboard = () => {
  const riskMetrics = [
    {
      region: "Pacific Ring of Fire",
      riskLevel: 85,
      color: "bg-red-500",
      status: "high",
      lastEvent: "2 days ago",
      populationAtRisk: "12.5M"
    },
    {
      region: "Mediterranean",
      riskLevel: 65,
      color: "bg-orange-500",
      status: "moderate",
      lastEvent: "1 week ago",
      populationAtRisk: "8.2M"
    },
    {
      region: "Mid-Atlantic Ridge",
      riskLevel: 30,
      color: "bg-yellow-500",
      status: "low",
      lastEvent: "3 weeks ago",
      populationAtRisk: "2.1M"
    },
    {
      region: "Stable Continental",
      riskLevel: 15,
      color: "bg-green-500",
      status: "minimal",
      lastEvent: "2 months ago",
      populationAtRisk: "500K"
    }
  ];

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "high": return <AlertTriangle className="h-4 w-4 text-red-600" />;
      case "moderate": return <TrendingUp className="h-4 w-4 text-orange-600" />;
      case "low": return <Shield className="h-4 w-4 text-yellow-600" />;
      case "minimal": return <Shield className="h-4 w-4 text-green-600" />;
      default: return <Shield className="h-4 w-4" />;
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case "high": return "destructive";
      case "moderate": return "secondary";
      case "low": return "outline";
      case "minimal": return "outline";
      default: return "outline";
    }
  };

  return (
    <Card className="bg-white shadow-lg">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <TrendingUp className="h-5 w-5 text-red-600" />
          Risk Assessment Dashboard
        </CardTitle>
        <CardDescription>
          Real-time seismic risk analysis across monitored regions
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        {/* Overall Statistics */}
        <div className="grid grid-cols-2 gap-4 mb-6">
          <div className="bg-blue-50 p-4 rounded-lg">
            <div className="flex items-center gap-2 mb-1">
              <Users className="h-4 w-4 text-blue-600" />
              <span className="text-sm font-medium text-blue-900">Total Population Monitored</span>
            </div>
            <p className="text-2xl font-bold text-blue-900">23.3M</p>
          </div>
          <div className="bg-green-50 p-4 rounded-lg">
            <div className="flex items-center gap-2 mb-1">
              <Shield className="h-4 w-4 text-green-600" />
              <span className="text-sm font-medium text-green-900">Active Alert Systems</span>
            </div>
            <p className="text-2xl font-bold text-green-900">127</p>
          </div>
        </div>

        {/* Regional Risk Analysis */}
        <div className="space-y-4">
          <h4 className="font-semibold text-gray-900">Regional Risk Levels</h4>
          {riskMetrics.map((region, index) => (
            <div key={index} className="space-y-2">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  {getStatusIcon(region.status)}
                  <span className="font-medium text-gray-900">{region.region}</span>
                  <Badge variant={getStatusColor(region.status) as any} className="text-xs">
                    {region.status}
                  </Badge>
                </div>
                <span className="text-sm font-bold text-gray-700">{region.riskLevel}%</span>
              </div>
              
              <Progress value={region.riskLevel} className="h-2" />
              
              <div className="flex justify-between text-xs text-gray-600">
                <span>Population at risk: {region.populationAtRisk}</span>
                <span>Last event: {region.lastEvent}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Risk Factors */}
        <div className="mt-6 p-4 bg-gray-50 rounded-lg">
          <h4 className="font-semibold text-gray-900 mb-2">Key Risk Factors</h4>
          <div className="grid grid-cols-2 gap-2 text-sm">
            <div>
              <span className="font-medium">Tectonic Activity:</span>
              <span className="text-orange-600 ml-1">Increasing</span>
            </div>
            <div>
              <span className="font-medium">Volcanic Correlation:</span>
              <span className="text-red-600 ml-1">High</span>
            </div>
            <div>
              <span className="font-medium">Historical Frequency:</span>
              <span className="text-blue-600 ml-1">Above Average</span>
            </div>
            <div>
              <span className="font-medium">Prediction Confidence:</span>
              <span className="text-green-600 ml-1">87%</span>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default RiskDashboard;
