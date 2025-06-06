
import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { AlertTriangle, Database, Code, Globe, TrendingUp, MapPin } from "lucide-react";
import EarthquakeMap from "@/components/EarthquakeMap";
import DatabaseSchema from "@/components/DatabaseSchema";
import PythonGuide from "@/components/PythonGuide";
import RiskDashboard from "@/components/RiskDashboard";
import CommunityImpact from "@/components/CommunityImpact";

const Index = () => {
  const [activeAlert, setActiveAlert] = useState(true);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold text-gray-900 flex items-center gap-3">
                <Globe className="text-blue-600" />
                Global Solution 2025.1
              </h1>
              <p className="text-lg text-gray-600 mt-2">
                Earthquake Prediction & Monitoring System
              </p>
            </div>
            <Badge variant="outline" className="text-sm px-3 py-1">
              Academic Project
            </Badge>
          </div>
        </div>
      </header>

      {/* Alert Banner */}
      {activeAlert && (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <Alert className="border-orange-200 bg-orange-50">
            <AlertTriangle className="h-4 w-4 text-orange-600" />
            <AlertTitle className="text-orange-800">System Active</AlertTitle>
            <AlertDescription className="text-orange-700">
              Monitoring seismic activity across 15 high-risk regions. Last update: 2 minutes ago.
              <Button 
                variant="ghost" 
                size="sm" 
                className="ml-2 text-orange-600 hover:text-orange-800"
                onClick={() => setActiveAlert(false)}
              >
                Dismiss
              </Button>
            </AlertDescription>
          </Alert>
        </div>
      )}

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <Tabs defaultValue="overview" className="space-y-6">
          <TabsList className="grid w-full grid-cols-5 bg-white rounded-lg shadow-sm">
            <TabsTrigger value="overview" className="flex items-center gap-2">
              <TrendingUp className="h-4 w-4" />
              Overview
            </TabsTrigger>
            <TabsTrigger value="database" className="flex items-center gap-2">
              <Database className="h-4 w-4" />
              Database
            </TabsTrigger>
            <TabsTrigger value="python" className="flex items-center gap-2">
              <Code className="h-4 w-4" />
              Python Guide
            </TabsTrigger>
            <TabsTrigger value="monitoring" className="flex items-center gap-2">
              <MapPin className="h-4 w-4" />
              Monitoring
            </TabsTrigger>
            <TabsTrigger value="impact" className="flex items-center gap-2">
              <Globe className="h-4 w-4" />
              Community Impact
            </TabsTrigger>
          </TabsList>

          <TabsContent value="overview" className="space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <Card className="bg-white shadow-lg">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Globe className="h-5 w-5 text-blue-600" />
                    Project Overview
                  </CardTitle>
                  <CardDescription>
                    Real-impact earthquake prediction and monitoring solution
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <h4 className="font-semibold text-gray-900">Key Features:</h4>
                    <ul className="space-y-1 text-sm text-gray-600">
                      <li>• Oracle database integration with disaster charter data</li>
                      <li>• Python-based prediction algorithms</li>
                      <li>• Real-time seismic monitoring</li>
                      <li>• Community alert systems</li>
                      <li>• Risk assessment and visualization</li>
                    </ul>
                  </div>
                  <div className="pt-4 border-t">
                    <h4 className="font-semibold text-gray-900 mb-2">Data Sources:</h4>
                    <Badge variant="secondary" className="mr-2">DisastersCharter.org</Badge>
                    <Badge variant="secondary" className="mr-2">Satellite Imagery</Badge>
                    <Badge variant="secondary">Historical Records</Badge>
                  </div>
                </CardContent>
              </Card>

              <RiskDashboard />
            </div>
            
            <EarthquakeMap />
          </TabsContent>

          <TabsContent value="database">
            <DatabaseSchema />
          </TabsContent>

          <TabsContent value="python">
            <PythonGuide />
          </TabsContent>

          <TabsContent value="monitoring">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <EarthquakeMap />
              <RiskDashboard />
            </div>
          </TabsContent>

          <TabsContent value="impact">
            <CommunityImpact />
          </TabsContent>
        </Tabs>
      </main>
    </div>
  );
};

export default Index;
