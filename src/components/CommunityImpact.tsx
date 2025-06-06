
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Users, Radio, Smartphone, Volume2, MapPin } from "lucide-react";

const CommunityImpact = () => {
  const communityProfiles = [
    {
      name: "Remote Mountain Villages (Chile)",
      population: 2500,
      connectivity: "Limited",
      primaryAlertMethod: "Radio",
      riskLevel: "High",
      lastDrillDate: "2024-03-15",
      preparednessScore: 78,
      challenges: ["Limited cell coverage", "Seasonal road access", "Language barriers"]
    },
    {
      name: "Coastal Fishing Communities (Japan)",
      population: 8200,
      connectivity: "Good",
      primaryAlertMethod: "Mobile App",
      riskLevel: "Very High",
      lastDrillDate: "2024-05-20",
      preparednessScore: 92,
      challenges: ["Tsunami risk", "Elderly population", "Tourist influx"]
    },
    {
      name: "Rural Agricultural Areas (Turkey)",
      population: 12000,
      connectivity: "Moderate",
      primaryAlertMethod: "SMS + Radio",
      riskLevel: "Moderate",
      lastDrillDate: "2024-02-28",
      preparednessScore: 65,
      challenges: ["Scattered settlements", "Infrastructure age", "Economic constraints"]
    },
    {
      name: "Urban Suburbs (California)",
      population: 45000,
      connectivity: "Excellent",
      primaryAlertMethod: "Multi-channel",
      riskLevel: "High",
      lastDrillDate: "2024-04-10",
      preparednessScore: 85,
      challenges: ["High-rise buildings", "Traffic congestion", "Power dependencies"]
    }
  ];

  const implementationSteps = [
    {
      phase: "Phase 1: Infrastructure Assessment",
      duration: "2-3 months",
      activities: [
        "Survey existing communication infrastructure",
        "Map vulnerable population centers",
        "Assess local government readiness",
        "Identify community leaders and resources"
      ]
    },
    {
      phase: "Phase 2: System Deployment",
      duration: "4-6 months",
      activities: [
        "Install Oracle database servers with satellite backup",
        "Deploy Python monitoring applications",
        "Establish multi-channel alert infrastructure",
        "Train local operators and emergency responders"
      ]
    },
    {
      phase: "Phase 3: Community Integration",
      duration: "6-12 months",
      activities: [
        "Conduct community education programs",
        "Establish volunteer network for alert distribution",
        "Implement feedback mechanisms",
        "Regular evacuation drills and system testing"
      ]
    }
  ];

  const getRiskColor = (risk: string) => {
    switch (risk.toLowerCase()) {
      case "very high": return "destructive";
      case "high": return "destructive";
      case "moderate": return "secondary";
      case "low": return "outline";
      default: return "outline";
    }
  };

  const getMethodIcon = (method: string) => {
    if (method.includes("Radio")) return <Radio className="h-4 w-4" />;
    if (method.includes("Mobile") || method.includes("SMS")) return <Smartphone className="h-4 w-4" />;
    if (method.includes("Multi")) return <Volume2 className="h-4 w-4" />;
    return <Radio className="h-4 w-4" />;
  };

  return (
    <div className="space-y-6">
      <Card className="bg-white shadow-lg">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Users className="h-5 w-5 text-purple-600" />
            Community Impact & Implementation
          </CardTitle>
          <CardDescription>
            How the Global Solution 2025.1 system serves isolated communities and local governments
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-6">
            {/* Community Profiles */}
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Target Community Profiles</h3>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                {communityProfiles.map((community, index) => (
                  <Card key={index} className="border border-gray-200">
                    <CardHeader className="pb-3">
                      <CardTitle className="text-base flex items-center gap-2">
                        <MapPin className="h-4 w-4 text-blue-600" />
                        {community.name}
                      </CardTitle>
                      <div className="flex gap-2">
                        <Badge variant={getRiskColor(community.riskLevel) as any} className="text-xs">
                          {community.riskLevel} Risk
                        </Badge>
                        <Badge variant="outline" className="text-xs">
                          {community.population.toLocaleString()} people
                        </Badge>
                      </div>
                    </CardHeader>
                    <CardContent className="space-y-3">
                      <div className="flex items-center justify-between text-sm">
                        <span className="flex items-center gap-2">
                          {getMethodIcon(community.primaryAlertMethod)}
                          Primary Alert Method:
                        </span>
                        <span className="font-medium">{community.primaryAlertMethod}</span>
                      </div>
                      
                      <div>
                        <div className="flex justify-between text-sm mb-1">
                          <span>Preparedness Score:</span>
                          <span className="font-bold">{community.preparednessScore}%</span>
                        </div>
                        <Progress value={community.preparednessScore} className="h-2" />
                      </div>
                      
                      <div>
                        <span className="text-sm font-medium text-gray-700">Key Challenges:</span>
                        <ul className="text-xs text-gray-600 mt-1 space-y-1">
                          {community.challenges.map((challenge, idx) => (
                            <li key={idx}>• {challenge}</li>
                          ))}
                        </ul>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            {/* Implementation Timeline */}
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Implementation Roadmap</h3>
              <div className="space-y-4">
                {implementationSteps.map((phase, index) => (
                  <Card key={index} className="border-l-4 border-l-blue-500">
                    <CardHeader className="pb-3">
                      <CardTitle className="text-base text-blue-900">{phase.phase}</CardTitle>
                      <CardDescription>Duration: {phase.duration}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <ul className="text-sm space-y-1">
                        {phase.activities.map((activity, idx) => (
                          <li key={idx} className="flex items-start gap-2">
                            <span className="text-blue-600 mt-1">•</span>
                            <span>{activity}</span>
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            {/* Benefits for Local Governments */}
            <Card className="bg-green-50 border-green-200">
              <CardHeader>
                <CardTitle className="text-lg text-green-900">Benefits for Local Governments</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                  <div>
                    <h4 className="font-semibold text-green-800 mb-2">Operational Benefits:</h4>
                    <ul className="space-y-1 text-green-700">
                      <li>• Automated early warning systems</li>
                      <li>• Real-time population risk assessment</li>
                      <li>• Coordinated multi-agency response</li>
                      <li>• Evidence-based resource allocation</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-green-800 mb-2">Economic Benefits:</h4>
                    <ul className="space-y-1 text-green-700">
                      <li>• Reduced disaster response costs</li>
                      <li>• Lower insurance premiums</li>
                      <li>• Protected critical infrastructure</li>
                      <li>• Improved emergency preparedness funding</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Community Action Examples */}
            <Card className="bg-blue-50 border-blue-200">
              <CardHeader>
                <CardTitle className="text-lg text-blue-900">Preventive Actions Based on System Data</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3 text-sm">
                  <div className="border-l-4 border-l-red-500 pl-3">
                    <h4 className="font-semibold text-red-800">High Risk Alert (Magnitude 6.0+ predicted)</h4>
                    <p className="text-red-700">→ Immediate evacuation of vulnerable structures, activate emergency shelters, deploy rescue teams to remote areas</p>
                  </div>
                  <div className="border-l-4 border-l-orange-500 pl-3">
                    <h4 className="font-semibold text-orange-800">Moderate Risk Alert (Magnitude 4.5-6.0)</h4>
                    <p className="text-orange-700">→ Alert community leaders, check emergency supplies, secure loose objects, review evacuation routes</p>
                  </div>
                  <div className="border-l-4 border-l-yellow-500 pl-3">
                    <h4 className="font-semibold text-yellow-800">Elevated Activity (Increased frequency)</h4>
                    <p className="text-yellow-700">→ Conduct community drills, inspect critical infrastructure, update emergency contact lists</p>
                  </div>
                  <div className="border-l-4 border-l-green-500 pl-3">
                    <h4 className="font-semibold text-green-800">Normal Conditions</h4>
                    <p className="text-green-700">→ Routine maintenance of alert systems, community education programs, data collection and analysis</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default CommunityImpact;
