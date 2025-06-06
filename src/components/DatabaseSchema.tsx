
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Database, Table, Code2 } from "lucide-react";

const DatabaseSchema = () => {
  const ddlCode = `-- Global Solution 2025.1 - Earthquake Monitoring Database Schema
-- Oracle Database DDL for Disaster Management System

-- Main Events Table
CREATE TABLE earthquake_events (
    event_id NUMBER PRIMARY KEY,
    event_date TIMESTAMP NOT NULL,
    latitude NUMBER(10,7) NOT NULL,
    longitude NUMBER(10,7) NOT NULL,
    magnitude NUMBER(3,1) NOT NULL,
    depth_km NUMBER(6,2),
    location_name VARCHAR2(200),
    country_code CHAR(2),
    region VARCHAR2(100),
    source_agency VARCHAR2(50),
    alert_level VARCHAR2(20),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Satellite Data Table (from disasterscharter.org)
CREATE TABLE satellite_data (
    data_id NUMBER PRIMARY KEY,
    event_id NUMBER REFERENCES earthquake_events(event_id),
    image_url VARCHAR2(500),
    capture_date TIMESTAMP,
    satellite_name VARCHAR2(100),
    resolution_meters NUMBER(6,2),
    cloud_coverage NUMBER(3,1),
    damage_assessment CLOB,
    processed_by VARCHAR2(100),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Risk Assessment Table
CREATE TABLE risk_assessments (
    assessment_id NUMBER PRIMARY KEY,
    event_id NUMBER REFERENCES earthquake_events(event_id),
    population_at_risk NUMBER(12),
    infrastructure_risk VARCHAR2(20),
    economic_impact_usd NUMBER(15,2),
    casualty_estimate NUMBER(8),
    response_priority VARCHAR2(20),
    assessment_algorithm VARCHAR2(100),
    confidence_score NUMBER(3,2),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Community Alerts Table
CREATE TABLE community_alerts (
    alert_id NUMBER PRIMARY KEY,
    event_id NUMBER REFERENCES earthquake_events(event_id),
    community_name VARCHAR2(200),
    alert_type VARCHAR2(50),
    message_content CLOB,
    sent_at TIMESTAMP,
    delivery_method VARCHAR2(50),
    recipient_count NUMBER(8),
    status VARCHAR2(20),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Historical Patterns Table
CREATE TABLE seismic_patterns (
    pattern_id NUMBER PRIMARY KEY,
    region VARCHAR2(100),
    lat_min NUMBER(10,7),
    lat_max NUMBER(10,7),
    lng_min NUMBER(10,7),
    lng_max NUMBER(10,7),
    avg_magnitude NUMBER(3,1),
    frequency_per_year NUMBER(6,2),
    last_major_event DATE,
    trend_direction VARCHAR2(20),
    prediction_model VARCHAR2(100),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Indexes for Performance
CREATE INDEX idx_events_date ON earthquake_events(event_date);
CREATE INDEX idx_events_location ON earthquake_events(latitude, longitude);
CREATE INDEX idx_events_magnitude ON earthquake_events(magnitude);
CREATE INDEX idx_satellite_event ON satellite_data(event_id);
CREATE INDEX idx_risk_event ON risk_assessments(event_id);
CREATE INDEX idx_alerts_event ON community_alerts(event_id);

-- Sequences
CREATE SEQUENCE seq_event_id START WITH 1 INCREMENT BY 1;
CREATE SEQUENCE seq_data_id START WITH 1 INCREMENT BY 1;
CREATE SEQUENCE seq_assessment_id START WITH 1 INCREMENT BY 1;
CREATE SEQUENCE seq_alert_id START WITH 1 INCREMENT BY 1;
CREATE SEQUENCE seq_pattern_id START WITH 1 INCREMENT BY 1;`;

  const sampleQueries = `-- Sample Queries for Python Integration

-- 1. Get Recent High-Risk Earthquakes
SELECT e.event_id, e.event_date, e.latitude, e.longitude, 
       e.magnitude, e.location_name, r.population_at_risk
FROM earthquake_events e
JOIN risk_assessments r ON e.event_id = r.event_id
WHERE e.magnitude >= 5.0 
  AND e.event_date >= SYSDATE - 7
ORDER BY e.magnitude DESC;

-- 2. Community Alert Status
SELECT ca.community_name, ca.alert_type, ca.sent_at, 
       ca.recipient_count, e.magnitude
FROM community_alerts ca
JOIN earthquake_events e ON ca.event_id = e.event_id
WHERE ca.status = 'SENT'
  AND ca.sent_at >= SYSDATE - 1
ORDER BY ca.sent_at DESC;

-- 3. Seismic Pattern Analysis
SELECT sp.region, sp.avg_magnitude, sp.frequency_per_year,
       sp.last_major_event, sp.trend_direction
FROM seismic_patterns sp
WHERE sp.avg_magnitude >= 4.0
ORDER BY sp.frequency_per_year DESC;

-- 4. Satellite Data for Damage Assessment
SELECT sd.capture_date, sd.satellite_name, sd.resolution_meters,
       sd.damage_assessment, e.magnitude, e.location_name
FROM satellite_data sd
JOIN earthquake_events e ON sd.event_id = e.event_id
WHERE sd.capture_date >= SYSDATE - 30
  AND e.magnitude >= 6.0
ORDER BY sd.capture_date DESC;`;

  return (
    <div className="space-y-6">
      <Card className="bg-white shadow-lg">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Database className="h-5 w-5 text-blue-600" />
            Oracle Database Schema
          </CardTitle>
          <CardDescription>
            Complete DDL structure for earthquake monitoring and disaster management
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Tabs defaultValue="schema" className="w-full">
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger value="schema">Database Schema</TabsTrigger>
              <TabsTrigger value="tables">Table Structure</TabsTrigger>
              <TabsTrigger value="queries">Sample Queries</TabsTrigger>
            </TabsList>

            <TabsContent value="schema" className="space-y-4">
              <div className="bg-gray-900 rounded-lg p-4 overflow-x-auto">
                <pre className="text-green-400 text-sm font-mono whitespace-pre-wrap">
                  {ddlCode}
                </pre>
              </div>
            </TabsContent>

            <TabsContent value="tables" className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <Card>
                  <CardHeader className="pb-3">
                    <CardTitle className="text-lg flex items-center gap-2">
                      <Table className="h-4 w-4" />
                      earthquake_events
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="text-sm space-y-1">
                    <p><strong>event_id:</strong> Primary key</p>
                    <p><strong>event_date:</strong> Timestamp of earthquake</p>
                    <p><strong>latitude/longitude:</strong> Geographic coordinates</p>
                    <p><strong>magnitude:</strong> Richter scale measurement</p>
                    <p><strong>location_name:</strong> Human-readable location</p>
                    <p><strong>alert_level:</strong> Risk classification</p>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader className="pb-3">
                    <CardTitle className="text-lg flex items-center gap-2">
                      <Table className="h-4 w-4" />
                      satellite_data
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="text-sm space-y-1">
                    <p><strong>data_id:</strong> Primary key</p>
                    <p><strong>event_id:</strong> Links to earthquake event</p>
                    <p><strong>image_url:</strong> Satellite imagery from disasters charter</p>
                    <p><strong>damage_assessment:</strong> AI-processed analysis</p>
                    <p><strong>resolution_meters:</strong> Image quality metric</p>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader className="pb-3">
                    <CardTitle className="text-lg flex items-center gap-2">
                      <Table className="h-4 w-4" />
                      risk_assessments
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="text-sm space-y-1">
                    <p><strong>assessment_id:</strong> Primary key</p>
                    <p><strong>population_at_risk:</strong> Affected population count</p>
                    <p><strong>economic_impact_usd:</strong> Financial damage estimate</p>
                    <p><strong>confidence_score:</strong> Algorithm reliability (0-1)</p>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader className="pb-3">
                    <CardTitle className="text-lg flex items-center gap-2">
                      <Table className="h-4 w-4" />
                      community_alerts
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="text-sm space-y-1">
                    <p><strong>alert_id:</strong> Primary key</p>
                    <p><strong>community_name:</strong> Target community</p>
                    <p><strong>message_content:</strong> Alert text/instructions</p>
                    <p><strong>delivery_method:</strong> SMS, radio, app notification</p>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>

            <TabsContent value="queries" className="space-y-4">
              <div className="bg-gray-900 rounded-lg p-4 overflow-x-auto">
                <pre className="text-blue-400 text-sm font-mono whitespace-pre-wrap">
                  {sampleQueries}
                </pre>
              </div>
            </TabsContent>
          </Tabs>
        </CardContent>
      </Card>
    </div>
  );
};

export default DatabaseSchema;
