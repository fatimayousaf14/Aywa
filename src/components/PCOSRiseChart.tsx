import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Label, Legend } from 'recharts@2.15.2';

const data = [
  { year: 1990, global: 7, us: 3.2 },
  { year: 1995, global: 9, us: 3.8 },
  { year: 2000, global: 11, us: 4.2 },
  { year: 2005, global: 13, us: 4.6 },
  { year: 2010, global: 15, us: 5.0 },
  { year: 2015, global: 16.5, us: 5.3 },
  { year: 2021, global: 18, us: 5.6 },
];

export function PCOSRiseChart() {
  return (
    <ResponsiveContainer width="100%" height={320}>
      <LineChart 
        data={data}
        margin={{ top: 20, right: 30, left: 20, bottom: 40 }}
      >
        <defs>
          <linearGradient id="globalGradient" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor="#9AA17C" stopOpacity={0.92} />
            <stop offset="100%" stopColor="#7F8564" stopOpacity={0.92} />
          </linearGradient>
          <linearGradient id="usGradient" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor="#D6BFA7" stopOpacity={0.85} />
            <stop offset="100%" stopColor="#CBBBA0" stopOpacity={0.85} />
          </linearGradient>
        </defs>
        
        <CartesianGrid strokeDasharray="3 3" stroke="#CBBBA0" opacity={0.5} />
        
        <XAxis 
          dataKey="year" 
          stroke="#6E6A5B"
          tick={{ fill: '#6E6A5B', fontSize: 12, fontFamily: "'Inter', sans-serif" }}
          tickLine={{ stroke: '#CBBBA0' }}
        >
          <Label 
            value="Year" 
            position="insideBottom" 
            offset={-10}
            style={{ fill: '#6E6A5B', fontSize: 13, fontFamily: "'Inter', sans-serif" }}
          />
        </XAxis>
        
        <YAxis 
          stroke="#6E6A5B"
          tick={{ fill: '#6E6A5B', fontSize: 12, fontFamily: "'Inter', sans-serif" }}
          tickLine={{ stroke: '#CBBBA0' }}
          domain={[0, 20]}
          ticks={[0, 5, 10, 15, 20]}
          tickFormatter={(value) => `${value}%`}
        >
          <Label 
            value="Prevalence (%)" 
            angle={-90} 
            position="insideLeft"
            style={{ fill: '#6E6A5B', fontSize: 13, fontFamily: "'Inter', sans-serif", textAnchor: 'middle' }}
          />
        </YAxis>
        
        <Tooltip 
          contentStyle={{
            backgroundColor: 'rgba(234, 228, 219, 0.98)',
            border: '1px solid #CBBBA0',
            borderRadius: '10px',
            padding: '10px 14px',
            fontFamily: "'Inter', sans-serif",
            fontSize: '13px',
            boxShadow: '0 4px 12px rgba(28, 25, 22, 0.12)'
          }}
          labelStyle={{ color: '#2A241E', fontWeight: 600 }}
          formatter={(value: number, name: string) => {
            if (name === 'global') {
              return [`${value}% prevalence`, 'Global'];
            }
            return [`${value}M women`, 'U.S.'];
          }}
        />
        
        <Legend 
          verticalAlign="top" 
          height={36}
          wrapperStyle={{
            fontFamily: "'Inter', sans-serif",
            fontSize: '12px',
            paddingBottom: '10px'
          }}
          formatter={(value) => {
            if (value === 'global') return 'Global Prevalence';
            return 'U.S. Cases (millions)';
          }}
        />
        
        <Line 
          type="monotone" 
          dataKey="global" 
          stroke="url(#globalGradient)"
          strokeWidth={3}
          dot={{ fill: '#9AA17C', r: 4 }}
          activeDot={{ r: 6, fill: '#9AA17C' }}
          name="global"
        />
        
        <Line 
          type="monotone" 
          dataKey="us" 
          stroke="url(#usGradient)"
          strokeWidth={2.5}
          strokeDasharray="5 5"
          dot={{ fill: '#D6BFA7', r: 3 }}
          activeDot={{ r: 5, fill: '#D6BFA7' }}
          name="us"
        />
        
        {/* Annotation bubble for U.S. data */}
        <g>
          {/* Background bubble */}
          <rect
            x="72%"
            y="55%"
            width="90"
            height="50"
            rx="8"
            fill="#EAE4DB"
            stroke="#9AA17C"
            strokeWidth="1.5"
            opacity="0.98"
          />
          {/* Text inside bubble */}
          <text 
            x="77%" 
            y="62%" 
            textAnchor="middle" 
            style={{ 
              fill: '#2A241E', 
              fontSize: 11, 
              fontFamily: "'Inter', sans-serif",
              fontWeight: 600 
            }}
          >
            U.S. (2021)
          </text>
          <text 
            x="77%" 
            y="70%" 
            textAnchor="middle" 
            style={{ 
              fill: '#9AA17C', 
              fontSize: 13, 
              fontFamily: "'Inter', sans-serif",
              fontWeight: 700 
            }}
          >
            5–6M
          </text>
          <text 
            x="77%" 
            y="77%" 
            textAnchor="middle" 
            style={{ 
              fill: '#6E6A5B', 
              fontSize: 10, 
              fontFamily: "'Inter', sans-serif"
            }}
          >
            women
          </text>
        </g>
      </LineChart>
    </ResponsiveContainer>
  );
}