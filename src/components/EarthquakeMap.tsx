
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { MapPin, Activity } from "lucide-react";

const EarthquakeMap = () => {
  const recentEvents = [
    { id: 1, location: "California, USA", magnitude: 4.2, time: "2 hours ago", severity: "moderate" },
    { id: 2, location: "Japan", magnitude: 3.8, time: "5 hours ago", severity: "low" },
    { id: 3, location: "Chile", magnitude: 5.1, time: "1 day ago", severity: "high" },
    { id: 4, location: "Turkey", magnitude: 4.0, time: "2 days ago", severity: "moderate" },
  ];

  const getSeverityColor = (severity: string) => {
    switch (severity) {
      case "high": return "destructive";
      case "moderate": return "secondary";
      case "low": return "outline";
      default: return "outline";
    }
  };

  return (
    <Card className="bg-white shadow-lg">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <MapPin className="h-5 w-5 text-green-600" />
          Seismic Activity Monitor
        </CardTitle>
        <CardDescription>
          Real-time earthquake detection and risk assessment
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {/* Simulated Map Area */}
          <div className="h-64 bg-gradient-to-br from-blue-100 to-green-100 rounded-lg border-2 border-dashed border-gray-300 flex items-center justify-center relative overflow-hidden">
            <div className="text-center">
              <MapPin className="h-12 w-12 text-blue-600 mx-auto mb-2" />
              <p className="text-gray-600 font-medium">Global Seismic Activity Map</p>
              <p className="text-sm text-gray-500">Real-time monitoring of 15 high-risk regions</p>
            </div>
            
            {/* Simulated earthquake markers */}
            <div className="absolute top-4 left-8 w-3 h-3 bg-red-500 rounded-full animate-pulse"></div>
            <div className="absolute top-12 right-12 w-2 h-2 bg-yellow-500 rounded-full animate-pulse"></div>
            <div className="absolute bottom-8 left-16 w-4 h-4 bg-orange-500 rounded-full animate-pulse"></div>
          </div>

          {/* Recent Events */}
          <div className="space-y-2">
            <h4 className="font-semibold text-gray-900 flex items-center gap-2">
              <Activity className="h-4 w-4" />
              Recent Seismic Events
            </h4>
            <div className="space-y-2">
              {recentEvents.map((event) => (
                <div key={event.id} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                  <div>
                    <p className="font-medium text-gray-900">{event.location}</p>
                    <p className="text-sm text-gray-600">{event.time}</p>
                  </div>
                  <div className="text-right">
                    <p className="font-bold text-lg">{event.magnitude}</p>
                    <Badge variant={getSeverityColor(event.severity) as any} className="text-xs">
                      {event.severity}
                    </Badge>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default EarthquakeMap;
