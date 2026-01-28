// AWHC Dashboard - A Way Home Canada
// React is loaded via CDN
const { useState } = React;

// ============================================================================
// MATERIAL ICON COMPONENT
// ============================================================================

const Icon = ({ name, size = 20, color = 'currentColor', style = {} }) => (
  <span 
    className="material-symbols-outlined" 
    style={{ 
      fontSize: `${size}px`, 
      color, 
      verticalAlign: 'middle',
      fontVariationSettings: "'FILL' 0, 'wght' 300, 'GRAD' 0, 'opsz' 24",
      ...style 
    }}
  >
    {name}
  </span>
);

// ============================================================================
// SAMPLE DATA
// ============================================================================

const sampleEvents = [
  {
    id: 'EVT-2026-001',
    name: 'Youth Homelessness Training - Vancouver',
    type: 'Training Event',
    status: 'Confirmed',
    startDate: '2026-03-15T09:00:00',
    endDate: '2026-03-15T16:00:00',
    description: 'Comprehensive training on youth homelessness prevention and evidence-based intervention strategies for frontline workers and community partners.',
    notes: ['Catering arranged', 'AV equipment confirmed', 'Parking passes distributed'],
    location: { name: 'Coast Hotel, Vancouver, BC', room: 'Main Conference Room A' },
    organizations: [
      { name: 'A Way Home Canada', role: 'Host' },
      { name: 'Calgary Youth Services', role: 'Partner' },
      { name: 'BC Housing Authority', role: 'Sponsor' }
    ],
    characteristics: ['In-Person Event', 'CEU Credits Available', 'Registration Required'],
    people: ['PER-001', 'PER-002', 'PER-003', 'PER-004', 'PER-005'],
    services: [
      { name: 'Youth Homelessness Prevention Training', type: 'Training', duration: '6 hours', description: 'Core training on youth homelessness prevention strategies and frameworks.' },
      { name: 'Trauma-Informed Care Workshop', type: 'Workshop', duration: '1 hour', description: 'Trauma-informed approaches to youth work and service delivery.' }
    ],
    measurements: [
      { name: 'Pre-Training Assessment', type: 'Assessment', date: '2026-03-14', value: 'Completed (45)' },
      { name: 'Post-Training Assessment', type: 'Assessment', date: '2026-03-15', value: 'Completed (42)' },
      { name: 'Satisfaction Survey', type: 'Survey', date: '2026-03-15', value: '4.8/5.0 avg' }
    ],
    outcomes: ['42 participants completed training', '95% reported increased confidence', '15 new partnerships formed'],
    cases: ['CASE-001', 'CASE-002'],
    peopleCount: 45,
    orgCount: 3,
    serviceCount: 2,
    outcomeCount: 5
  },
  {
    id: 'EVT-2026-002',
    name: 'Housing First Implementation Workshop',
    type: 'Workshop',
    status: 'Planning',
    startDate: '2026-04-22T10:00:00',
    endDate: '2026-04-22T15:00:00',
    description: 'Hands-on workshop for implementing Housing First principles in community programs.',
    notes: ['Venue TBD', 'Materials in development'],
    location: { name: 'Calgary Community Centre', room: 'Workshop Space B' },
    organizations: [
      { name: 'A Way Home Canada', role: 'Host' },
      { name: 'Alberta Housing Foundation', role: 'Partner' }
    ],
    characteristics: ['Hybrid Event', 'Materials Provided'],
    people: ['PER-006', 'PER-007'],
    services: [
      { name: 'Housing First Principles Training', type: 'Training', duration: '5 hours', description: 'Core principles and implementation strategies.' }
    ],
    measurements: [],
    outcomes: [],
    cases: ['CASE-003'],
    peopleCount: 28,
    orgCount: 2,
    serviceCount: 1,
    outcomeCount: 0
  },
  {
    id: 'EVT-2026-003',
    name: 'Annual Network Summit 2026',
    type: 'Conference',
    status: 'Confirmed',
    startDate: '2026-06-10T08:00:00',
    endDate: '2026-06-12T17:00:00',
    description: 'Three-day annual summit bringing together national stakeholders in youth homelessness prevention.',
    notes: ['Keynote speakers confirmed', 'Sponsorship packages available'],
    location: { name: 'Shaw Centre, Ottawa, ON', room: 'Grand Ballroom' },
    organizations: [
      { name: 'A Way Home Canada', role: 'Host' },
      { name: 'Government of Canada', role: 'Sponsor' }
    ],
    characteristics: ['In-Person Event', 'Multi-Day', 'CEU Credits Available'],
    people: ['PER-008', 'PER-009'],
    services: [
      { name: 'Keynote Sessions', type: 'Presentation', duration: '6 hours', description: 'Expert presentations on current research.' }
    ],
    measurements: [],
    outcomes: [],
    cases: ['CASE-004'],
    peopleCount: 250,
    orgCount: 4,
    serviceCount: 3,
    outcomeCount: 0
  }
];

const samplePeople = [
  {
    id: 'PER-001',
    name: 'John Smith',
    type: 'Staff',
    role: 'Senior Facilitator',
    status: 'Active',
    email: 'john.smith@awhc.ca',
    phone: '(604) 555-0101',
    organization: 'A Way Home Canada',
    location: 'Vancouver, BC',
    startDate: '2022-03-15',
    characteristics: ['Certified Trainer', 'Bilingual (EN/FR)', 'Trauma-Informed'],
    notes: ['Lead facilitator for youth programming', 'Available for travel'],
    events: ['EVT-2026-001', 'EVT-2026-003'],
    cases: ['CASE-001', 'CASE-002'],
    services: [
      { name: 'Youth Homelessness Training', date: '2026-03-15', role: 'Lead Facilitator' },
      { name: 'Trauma-Informed Care Workshop', date: '2026-03-15', role: 'Co-Facilitator' }
    ],
    measurements: [
      { name: 'Training Hours', type: 'Activity', value: '156 hours YTD' },
      { name: 'Participant Satisfaction', type: 'Metric', value: '4.9/5.0 avg' }
    ],
    outcomes: ['Trained 320 participants in 2025', 'Developed 3 new training modules']
  },
  {
    id: 'PER-002',
    name: 'Sarah Johnson',
    type: 'Participant',
    role: 'Frontline Worker',
    status: 'Active',
    email: 'sarah.j@calgaryservices.org',
    phone: '(403) 555-0202',
    organization: 'Calgary Youth Services',
    location: 'Calgary, AB',
    startDate: '2025-01-10',
    characteristics: ['Housing Specialist', 'Case Management Certified'],
    notes: ['Completing certification pathway'],
    events: ['EVT-2026-001'],
    cases: ['CASE-001'],
    services: [
      { name: 'Youth Homelessness Training', date: '2026-03-15', role: 'Participant' }
    ],
    measurements: [
      { name: 'Training Completed', type: 'Achievement', value: '3 modules' }
    ],
    outcomes: ['Certified in Housing First methodology']
  },
  {
    id: 'PER-003',
    name: 'Mike Chen',
    type: 'Participant',
    role: 'Program Coordinator',
    status: 'Active',
    email: 'mchen@bchousing.gov.bc.ca',
    phone: '(250) 555-0303',
    organization: 'BC Housing Authority',
    location: 'Victoria, BC',
    startDate: '2024-09-01',
    characteristics: ['Government Liaison', 'Policy Development'],
    notes: ['Key stakeholder for provincial initiatives'],
    events: ['EVT-2026-001'],
    cases: ['CASE-002'],
    services: [],
    measurements: [],
    outcomes: []
  },
  {
    id: 'PER-004',
    name: 'Emily Davis',
    type: 'Client',
    role: 'Program Participant',
    status: 'Active',
    email: null,
    phone: '(604) 555-0404',
    organization: null,
    location: 'Vancouver, BC',
    startDate: '2025-11-15',
    characteristics: ['Youth (18-24)', 'Housing Unstable'],
    notes: ['Connected through outreach program', 'Consent on file'],
    events: ['EVT-2026-001'],
    cases: ['CASE-001'],
    services: [
      { name: 'Housing Navigation', date: '2025-11-20', role: 'Recipient' },
      { name: 'Employment Coaching', date: '2025-12-05', role: 'Recipient' }
    ],
    measurements: [
      { name: 'Housing Stability', type: 'Assessment', value: 'Improving' },
      { name: 'Employment Status', type: 'Assessment', value: 'Part-time employed' }
    ],
    outcomes: ['Secured temporary housing', 'Enrolled in job training']
  },
  {
    id: 'PER-005',
    name: 'Alex Turner',
    type: 'Staff',
    role: 'Co-Facilitator',
    status: 'Active',
    email: 'alex.turner@awhc.ca',
    phone: '(416) 555-0505',
    organization: 'A Way Home Canada',
    location: 'Toronto, ON',
    startDate: '2023-06-01',
    characteristics: ['Lived Experience', 'Youth Advocate'],
    notes: ['Peer support specialist'],
    events: ['EVT-2026-001', 'EVT-2026-002'],
    cases: ['CASE-001'],
    services: [],
    measurements: [],
    outcomes: []
  },
  {
    id: 'PER-006',
    name: 'Lisa Park',
    type: 'Staff',
    role: 'Program Director',
    status: 'Active',
    email: 'lisa.park@awhc.ca',
    phone: '(403) 555-0606',
    organization: 'A Way Home Canada',
    location: 'Calgary, AB',
    startDate: '2020-01-15',
    characteristics: ['Executive Leadership', 'Strategic Planning'],
    notes: ['Oversees Western Canada operations'],
    events: ['EVT-2026-002'],
    cases: ['CASE-003'],
    services: [],
    measurements: [],
    outcomes: []
  },
  {
    id: 'PER-007',
    name: 'James Wilson',
    type: 'Participant',
    role: 'Community Partner',
    status: 'Registered',
    email: 'jwilson@albertahousing.org',
    phone: '(780) 555-0707',
    organization: 'Alberta Housing Foundation',
    location: 'Edmonton, AB',
    startDate: '2025-02-01',
    characteristics: ['Funding Partner', 'Board Member'],
    notes: [],
    events: ['EVT-2026-002'],
    cases: [],
    services: [],
    measurements: [],
    outcomes: []
  },
  {
    id: 'PER-008',
    name: 'Dr. Maria Santos',
    type: 'External',
    role: 'Keynote Speaker',
    status: 'Confirmed',
    email: 'msantos@university.edu',
    phone: '(613) 555-0808',
    organization: 'University of Ottawa',
    location: 'Ottawa, ON',
    startDate: '2026-01-15',
    characteristics: ['Researcher', 'Published Author'],
    notes: ['Speaking on youth homelessness research'],
    events: ['EVT-2026-003'],
    cases: [],
    services: [],
    measurements: [],
    outcomes: []
  },
  {
    id: 'PER-009',
    name: 'Robert Chang',
    type: 'External',
    role: 'Panelist',
    status: 'Confirmed',
    email: 'rchang@govcan.ca',
    phone: '(613) 555-0909',
    organization: 'Government of Canada',
    location: 'Ottawa, ON',
    startDate: '2026-02-01',
    characteristics: ['Policy Advisor', 'Federal Programs'],
    notes: ['Housing policy expert'],
    events: ['EVT-2026-003'],
    cases: ['CASE-004'],
    services: [],
    measurements: [],
    outcomes: []
  }
];

const sampleCases = [
  {
    id: 'CASE-001',
    name: 'Youth Outreach Initiative 2026',
    type: 'Program',
    status: 'Active',
    priority: 'High',
    startDate: '2026-01-01',
    endDate: '2026-12-31',
    description: 'Comprehensive outreach program targeting youth experiencing or at risk of homelessness in the Vancouver metropolitan area.',
    notes: ['Funded through BC Housing grant', 'Year 2 of 3-year initiative'],
    location: 'Vancouver, BC',
    organization: 'A Way Home Canada',
    people: ['PER-001', 'PER-002', 'PER-004', 'PER-005'],
    events: ['EVT-2026-001'],
    services: [
      { name: 'Street Outreach', type: 'Direct Service', frequency: 'Daily' },
      { name: 'Housing Navigation', type: 'Case Management', frequency: 'Weekly' },
      { name: 'Employment Support', type: 'Support Service', frequency: 'Bi-weekly' }
    ],
    measurements: [
      { name: 'Youth Contacted', type: 'Count', value: '234', period: 'Q1 2026' },
      { name: 'Housing Placements', type: 'Outcome', value: '45', period: 'Q1 2026' },
      { name: 'Service Hours', type: 'Activity', value: '1,240', period: 'Q1 2026' }
    ],
    outcomes: [
      '45 youth housed in Q1',
      '78% housing retention at 90 days',
      '23 youth enrolled in education/training',
      '15 youth gained employment'
    ],
    budget: { allocated: 450000, spent: 112500, remaining: 337500 },
    peopleCount: 4,
    eventCount: 1,
    outcomeCount: 4
  },
  {
    id: 'CASE-002',
    name: 'Calgary Housing Project',
    type: 'Project',
    status: 'Active',
    priority: 'Medium',
    startDate: '2025-09-01',
    endDate: '2026-08-31',
    description: 'Pilot project implementing Housing First model with intensive case management for chronically homeless youth.',
    notes: ['Partnership with Calgary Youth Services', 'Research component included'],
    location: 'Calgary, AB',
    organization: 'Calgary Youth Services',
    people: ['PER-001', 'PER-003'],
    events: ['EVT-2026-001'],
    services: [
      { name: 'Intensive Case Management', type: 'Case Management', frequency: 'Daily' },
      { name: 'Rapid Rehousing', type: 'Housing', frequency: 'As needed' }
    ],
    measurements: [
      { name: 'Participants Enrolled', type: 'Count', value: '32', period: 'YTD' },
      { name: 'Housing Stability Rate', type: 'Outcome', value: '84%', period: 'YTD' }
    ],
    outcomes: [
      '27 participants currently housed',
      '84% maintaining housing at 6 months',
      'Research findings published'
    ],
    budget: { allocated: 280000, spent: 168000, remaining: 112000 },
    peopleCount: 2,
    eventCount: 1,
    outcomeCount: 3
  },
  {
    id: 'CASE-003',
    name: 'Alberta Housing Initiative',
    type: 'Initiative',
    status: 'Planning',
    priority: 'High',
    startDate: '2026-04-01',
    endDate: '2028-03-31',
    description: 'Province-wide initiative to expand Housing First programming across Alberta municipalities.',
    notes: ['Provincial funding confirmed', 'Multi-stakeholder governance'],
    location: 'Alberta (Province-wide)',
    organization: 'Alberta Housing Foundation',
    people: ['PER-006', 'PER-007'],
    events: ['EVT-2026-002'],
    services: [
      { name: 'Technical Assistance', type: 'Capacity Building', frequency: 'Monthly' },
      { name: 'Training Delivery', type: 'Education', frequency: 'Quarterly' }
    ],
    measurements: [],
    outcomes: [],
    budget: { allocated: 2500000, spent: 0, remaining: 2500000 },
    peopleCount: 2,
    eventCount: 1,
    outcomeCount: 0
  },
  {
    id: 'CASE-004',
    name: 'National Prevention Strategy',
    type: 'Strategy',
    status: 'Active',
    priority: 'High',
    startDate: '2025-01-01',
    endDate: '2027-12-31',
    description: 'National coordination strategy to align youth homelessness prevention efforts across Canada.',
    notes: ['Federal-provincial collaboration', 'Annual summit component'],
    location: 'Canada (National)',
    organization: 'A Way Home Canada',
    people: ['PER-008', 'PER-009'],
    events: ['EVT-2026-003'],
    services: [
      { name: 'Policy Coordination', type: 'Advocacy', frequency: 'Ongoing' },
      { name: 'Research Dissemination', type: 'Knowledge Transfer', frequency: 'Quarterly' }
    ],
    measurements: [
      { name: 'Communities Engaged', type: 'Count', value: '47', period: 'YTD' },
      { name: 'Policy Briefs Published', type: 'Output', value: '8', period: 'YTD' }
    ],
    outcomes: [
      '47 communities adopted prevention framework',
      '3 provinces updated policy',
      'Federal funding increased by 15%'
    ],
    budget: { allocated: 1200000, spent: 480000, remaining: 720000 },
    peopleCount: 2,
    eventCount: 1,
    outcomeCount: 3
  }
];

const sampleOrganizations = [
  { id: 'ORG-001', name: 'A Way Home Canada', type: 'Non-Profit', location: 'National', peopleCount: 12, caseCount: 3, status: 'Active' },
  { id: 'ORG-002', name: 'Calgary Youth Services', type: 'Non-Profit', location: 'Calgary, AB', peopleCount: 8, caseCount: 1, status: 'Active' },
  { id: 'ORG-003', name: 'BC Housing Authority', type: 'Government', location: 'Victoria, BC', peopleCount: 3, caseCount: 1, status: 'Active' },
  { id: 'ORG-004', name: 'Alberta Housing Foundation', type: 'Foundation', location: 'Edmonton, AB', peopleCount: 2, caseCount: 1, status: 'Active' },
  { id: 'ORG-005', name: 'Government of Canada', type: 'Government', location: 'Ottawa, ON', peopleCount: 4, caseCount: 2, status: 'Active' }
];

const samplePrograms = [
  { id: 'PRG-001', name: 'Youth Homelessness Prevention', type: 'Core Program', status: 'Active', caseCount: 2, budget: 730000 },
  { id: 'PRG-002', name: 'Housing First Implementation', type: 'Pilot Program', status: 'Active', caseCount: 2, budget: 2780000 },
  { id: 'PRG-003', name: 'Training & Capacity Building', type: 'Support Program', status: 'Active', caseCount: 1, budget: 450000 }
];

const recentActivity = [
  { type: 'event', action: 'created', item: 'Youth Homelessness Training - Vancouver', user: 'Lisa Park', time: '2 hours ago' },
  { type: 'person', action: 'updated', item: 'Emily Davis', user: 'John Smith', time: '4 hours ago' },
  { type: 'case', action: 'milestone', item: 'Youth Outreach Initiative 2026', user: 'System', time: '1 day ago' },
  { type: 'measurement', action: 'recorded', item: 'Q1 Housing Placements: 45', user: 'Sarah Johnson', time: '2 days ago' },
  { type: 'event', action: 'confirmed', item: 'Annual Network Summit 2026', user: 'Lisa Park', time: '3 days ago' }
];

// ============================================================================
// SHARED COMPONENTS
// ============================================================================

const StatusBadge = ({ status }) => {
  const colors = {
    'Confirmed': { bg: '#E6F7F6', text: '#0FB9B1', dot: '#0FB9B1' },
    'Active': { bg: '#E6F7F6', text: '#0FB9B1', dot: '#0FB9B1' },
    'Planning': { bg: '#FFF3E0', text: '#E65100', dot: '#E65100' },
    'Registered': { bg: '#E3F2FD', text: '#1565C0', dot: '#1565C0' },
    'Completed': { bg: '#E8F5E9', text: '#2E7D32', dot: '#2E7D32' },
    'Cancelled': { bg: '#FFEBEE', text: '#C62828', dot: '#C62828' },
    'Inactive': { bg: '#F5F5F5', text: '#757575', dot: '#757575' }
  };
  const style = colors[status] || colors['Planning'];
  
  return (
    <span style={{
      display: 'inline-flex',
      alignItems: 'center',
      gap: '6px',
      padding: '4px 12px',
      borderRadius: '16px',
      backgroundColor: style.bg,
      color: style.text,
      fontSize: '13px',
      fontWeight: 400,
      fontFamily: 'Lato, sans-serif'
    }}>
      <span style={{ width: '6px', height: '6px', borderRadius: '50%', backgroundColor: style.dot }}></span>
      {status}
    </span>
  );
};

const PriorityBadge = ({ priority }) => {
  const colors = {
    'High': { bg: '#FFEBEE', text: '#C62828' },
    'Medium': { bg: '#FFF3E0', text: '#E65100' },
    'Low': { bg: '#E3F2FD', text: '#1565C0' }
  };
  const style = colors[priority] || colors['Medium'];
  
  return (
    <span style={{
      display: 'inline-flex',
      padding: '4px 10px',
      borderRadius: '4px',
      backgroundColor: style.bg,
      color: style.text,
      fontSize: '12px',
      fontWeight: 700,
      fontFamily: 'Lato, sans-serif',
      textTransform: 'uppercase',
      letterSpacing: '0.5px'
    }}>
      {priority}
    </span>
  );
};

const TypeBadge = ({ type }) => (
  <span style={{
    display: 'inline-flex',
    padding: '4px 12px',
    borderRadius: '4px',
    backgroundColor: '#F0F4F8',
    color: '#1E3A5F',
    fontSize: '13px',
    fontWeight: 400,
    fontFamily: 'Lato, sans-serif'
  }}>
    {type}
  </span>
);

const NavItem = ({ active, children, onClick, icon }) => (
  <button
    onClick={onClick}
    style={{
      padding: '10px 16px',
      border: 'none',
      background: active ? '#0FB9B1' : 'transparent',
      color: '#FFFFFF',
      fontSize: '14px',
      fontWeight: active ? 700 : 400,
      fontFamily: 'Lato, sans-serif',
      cursor: 'pointer',
      borderRadius: '6px',
      transition: 'all 0.2s ease',
      opacity: active ? 1 : 0.8,
      display: 'flex',
      alignItems: 'center',
      gap: '6px'
    }}
  >
    {icon && <Icon name={icon} size={18} />}
    {children}
  </button>
);

const TabButton = ({ active, children, onClick }) => (
  <button
    onClick={onClick}
    style={{
      padding: '12px 20px',
      border: 'none',
      borderBottom: active ? '2px solid #0FB9B1' : '2px solid transparent',
      background: 'transparent',
      color: active ? '#0FB9B1' : '#1E3A5F',
      fontSize: '14px',
      fontWeight: active ? 700 : 400,
      fontFamily: 'Lato, sans-serif',
      cursor: 'pointer',
      transition: 'all 0.2s ease'
    }}
  >
    {children}
  </button>
);

const ActionButton = ({ primary, children, onClick, small, fullWidth, icon }) => (
  <button
    onClick={onClick}
    style={{
      padding: small ? '6px 12px' : '10px 18px',
      border: primary ? 'none' : '1px solid #E5E7EB',
      background: primary ? '#0FB9B1' : '#FFFFFF',
      color: primary ? '#FFFFFF' : '#1E3A5F',
      fontSize: small ? '12px' : '14px',
      fontWeight: 400,
      fontFamily: 'Lato, sans-serif',
      cursor: 'pointer',
      borderRadius: '6px',
      transition: 'all 0.2s ease',
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      gap: '6px',
      width: fullWidth ? '100%' : 'auto'
    }}
  >
    {icon && <Icon name={icon} size={small ? 16 : 18} />}
    {children}
  </button>
);

const Card = ({ children, style: customStyle, onClick }) => (
  <div 
    onClick={onClick}
    style={{
      background: '#FFFFFF',
      borderRadius: '8px',
      border: '1px solid #E5E7EB',
      padding: '20px',
      cursor: onClick ? 'pointer' : 'default',
      transition: 'box-shadow 0.2s ease',
      ...customStyle
    }}
  >
    {children}
  </div>
);

const SectionHeader = ({ children, action, icon }) => (
  <div style={{
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: '16px',
    paddingBottom: '12px',
    borderBottom: '1px solid #E5E7EB'
  }}>
    <h3 style={{
      margin: 0,
      fontSize: '14px',
      fontWeight: 700,
      color: '#0B1F33',
      fontFamily: 'Lato, sans-serif',
      display: 'flex',
      alignItems: 'center',
      gap: '8px'
    }}>
      {icon && <Icon name={icon} size={18} color="#0FB9B1" />}
      {children}
    </h3>
    {action}
  </div>
);

const QuickStat = ({ icon, count, label }) => (
  <div style={{
    display: 'flex',
    alignItems: 'center',
    gap: '6px',
    color: '#64748B',
    fontSize: '13px',
    fontFamily: 'Lato, sans-serif',
    fontWeight: 300
  }}>
    <Icon name={icon} size={16} color="#64748B" />
    <span style={{ fontWeight: 400, color: '#1E3A5F' }}>{count}</span>
    <span>{label}</span>
  </div>
);

const DataField = ({ label, children, icon }) => (
  <div style={{ marginBottom: '12px' }}>
    <label style={{ fontSize: '12px', color: '#64748B', fontFamily: 'Lato, sans-serif', fontWeight: 300, display: 'flex', alignItems: 'center', gap: '4px', marginBottom: '4px' }}>
      {icon && <Icon name={icon} size={14} color="#64748B" />}
      {label}
    </label>
    <div style={{ fontSize: '14px', color: '#0B1F33', fontFamily: 'Lato, sans-serif' }}>
      {children}
    </div>
  </div>
);

const DataTable = ({ columns, data, onRowClick }) => (
  <table style={{ width: '100%', borderCollapse: 'collapse' }}>
    <thead>
      <tr style={{ borderBottom: '2px solid #E5E7EB' }}>
        {columns.map((col, i) => (
          <th key={i} style={{ 
            textAlign: col.align || 'left', 
            padding: '12px 8px', 
            fontSize: '12px', 
            fontWeight: 700, 
            color: '#64748B', 
            fontFamily: 'Lato, sans-serif', 
            textTransform: 'uppercase', 
            letterSpacing: '0.5px' 
          }}>
            {col.header}
          </th>
        ))}
      </tr>
    </thead>
    <tbody>
      {data.map((row, i) => (
        <tr 
          key={i} 
          style={{ borderBottom: '1px solid #F0F4F8', cursor: onRowClick ? 'pointer' : 'default' }}
          onClick={() => onRowClick && onRowClick(row)}
        >
          {columns.map((col, j) => (
            <td key={j} style={{ 
              padding: '14px 8px', 
              fontSize: '14px', 
              color: '#0B1F33', 
              fontFamily: 'Lato, sans-serif',
              textAlign: col.align || 'left'
            }}>
              {col.render ? col.render(row[col.key], row) : row[col.key]}
            </td>
          ))}
        </tr>
      ))}
    </tbody>
  </table>
);

const SearchFilter = ({ searchQuery, setSearchQuery, filters, placeholder }) => (
  <div style={{ display: 'flex', gap: '12px', alignItems: 'center', flexWrap: 'wrap' }}>
    <div style={{ flex: 1, minWidth: '250px', position: 'relative' }}>
      <span style={{ position: 'absolute', left: '14px', top: '50%', transform: 'translateY(-50%)' }}>
        <Icon name="search" size={18} color="#64748B" />
      </span>
      <input
        type="text"
        placeholder={placeholder}
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        style={{
          width: '100%',
          padding: '12px 14px 12px 42px',
          border: '1px solid #E5E7EB',
          borderRadius: '6px',
          fontSize: '14px',
          fontFamily: 'Lato, sans-serif',
          outline: 'none'
        }}
      />
    </div>
    {filters}
  </div>
);

const QuickActions = ({ actions, onAction }) => (
  <Card>
    <h3 style={{ margin: '0 0 16px', fontSize: '14px', fontWeight: 700, color: '#0B1F33', fontFamily: 'Lato, sans-serif' }}>
      Quick Actions
    </h3>
    <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
      {actions.map((action, i) => (
        <button
          key={i}
          onClick={() => onAction(action.label)}
          style={{
            padding: '10px 14px',
            border: '1px solid #E5E7EB',
            borderRadius: '6px',
            background: '#FFFFFF',
            color: '#1E3A5F',
            fontSize: '13px',
            fontFamily: 'Lato, sans-serif',
            cursor: 'pointer',
            textAlign: 'left',
            display: 'flex',
            alignItems: 'center',
            gap: '10px',
            transition: 'all 0.15s ease'
          }}
        >
          <Icon name={action.icon} size={18} color="#0FB9B1" />
          {action.label}
        </button>
      ))}
    </div>
  </Card>
);

// ============================================================================
// HOME PAGE COMPONENT
// ============================================================================

const HomePage = ({ onNavigate, showNotification }) => {
  const upcomingEvents = sampleEvents.filter(e => new Date(e.startDate) > new Date()).slice(0, 3);
  const activeClients = samplePeople.filter(p => p.type === 'Client' && p.status === 'Active').length;
  const activeCases = sampleCases.filter(c => c.status === 'Active').length;

  return (
    <div>
      {/* Welcome Section */}
      <div style={{ marginBottom: '32px' }}>
        <h2 style={{ margin: '0 0 8px', fontSize: '28px', fontWeight: 700, color: '#0B1F33', fontFamily: 'Lato, sans-serif' }}>
          Welcome to AWHC Dashboard
        </h2>
        <p style={{ margin: 0, fontSize: '16px', color: '#64748B', fontFamily: 'Lato, sans-serif', fontWeight: 300 }}>
          A Way Home Canada · Event, Case & Client Management System
        </p>
      </div>

      {/* Key Metrics Row */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(5, 1fr)', gap: '16px', marginBottom: '32px' }}>
        {[
          { label: 'Active Events', value: sampleEvents.filter(e => e.status === 'Confirmed').length, icon: 'event', color: '#0FB9B1', onClick: () => onNavigate('events') },
          { label: 'Total People', value: samplePeople.length, icon: 'group', color: '#1E3A5F', onClick: () => onNavigate('people') },
          { label: 'Active Cases', value: activeCases, icon: 'folder_open', color: '#4FD1C5', onClick: () => onNavigate('cases') },
          { label: 'Organizations', value: sampleOrganizations.length, icon: 'corporate_fare', color: '#0B1F33', onClick: () => onNavigate('organizations') },
          { label: 'Active Clients', value: activeClients, icon: 'person_check', color: '#0FB9B1', onClick: () => onNavigate('people') }
        ].map((metric, i) => (
          <Card key={i} onClick={metric.onClick} style={{ cursor: 'pointer' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
              <div>
                <p style={{ margin: '0 0 4px', fontSize: '12px', color: '#64748B', fontFamily: 'Lato, sans-serif', fontWeight: 300, textTransform: 'uppercase', letterSpacing: '0.5px' }}>
                  {metric.label}
                </p>
                <p style={{ margin: 0, fontSize: '32px', fontWeight: 700, color: metric.color, fontFamily: 'Lato, sans-serif' }}>
                  {metric.value}
                </p>
              </div>
              <Icon name={metric.icon} size={28} color={metric.color} />
            </div>
          </Card>
        ))}
      </div>

      {/* Module Cards */}
      <div style={{ marginBottom: '32px' }}>
        <h3 style={{ margin: '0 0 16px', fontSize: '16px', fontWeight: 700, color: '#0B1F33', fontFamily: 'Lato, sans-serif' }}>
          Modules
        </h3>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(5, 1fr)', gap: '16px' }}>
          {[
            { key: 'events', label: 'Events', icon: 'event', desc: 'Training, workshops, conferences', count: sampleEvents.length, color: '#0FB9B1' },
            { key: 'people', label: 'People', icon: 'group', desc: 'Staff, participants, clients', count: samplePeople.length, color: '#1E3A5F' },
            { key: 'cases', label: 'Cases', icon: 'folder_open', desc: 'Programs, projects, initiatives', count: sampleCases.length, color: '#4FD1C5' },
            { key: 'organizations', label: 'Organizations', icon: 'corporate_fare', desc: 'Partners, sponsors, agencies', count: sampleOrganizations.length, color: '#0B1F33' },
            { key: 'programs', label: 'Programs', icon: 'assignment', desc: 'Funding streams, portfolios', count: samplePrograms.length, color: '#1E3A5F' }
          ].map((module) => (
            <Card 
              key={module.key} 
              onClick={() => onNavigate(module.key)}
              style={{ 
                cursor: 'pointer',
                borderTop: `3px solid ${module.color}`,
                transition: 'transform 0.2s ease, box-shadow 0.2s ease'
              }}
            >
              <div style={{ textAlign: 'center', padding: '12px 0' }}>
                <Icon name={module.icon} size={40} color={module.color} style={{ display: 'block', margin: '0 auto 12px' }} />
                <h4 style={{ margin: '0 0 4px', fontSize: '16px', fontWeight: 700, color: '#0B1F33', fontFamily: 'Lato, sans-serif' }}>
                  {module.label}
                </h4>
                <p style={{ margin: '0 0 12px', fontSize: '12px', color: '#64748B', fontFamily: 'Lato, sans-serif', fontWeight: 300 }}>
                  {module.desc}
                </p>
                <span style={{ 
                  display: 'inline-block',
                  padding: '4px 12px', 
                  backgroundColor: '#F0F4F8', 
                  borderRadius: '12px',
                  fontSize: '13px',
                  fontWeight: 700,
                  color: module.color,
                  fontFamily: 'Lato, sans-serif'
                }}>
                  {module.count} records
                </span>
              </div>
            </Card>
          ))}
        </div>
      </div>

      {/* Two Column Layout */}
      <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr', gap: '24px', marginBottom: '32px' }}>
        {/* Upcoming Events */}
        <Card>
          <SectionHeader icon="event" action={<ActionButton small onClick={() => onNavigate('events')} icon="arrow_forward">View All</ActionButton>}>
            Upcoming Events
          </SectionHeader>
          {upcomingEvents.map((event, i) => (
            <div 
              key={event.id} 
              style={{ 
                padding: '16px 0', 
                borderBottom: i < upcomingEvents.length - 1 ? '1px solid #F0F4F8' : 'none',
                cursor: 'pointer'
              }}
              onClick={() => { onNavigate('events'); }}
            >
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '8px' }}>
                <h4 style={{ margin: 0, fontSize: '15px', fontWeight: 700, color: '#0B1F33', fontFamily: 'Lato, sans-serif' }}>
                  {event.name}
                </h4>
                <StatusBadge status={event.status} />
              </div>
              <div style={{ display: 'flex', gap: '16px', alignItems: 'center' }}>
                <span style={{ fontSize: '13px', color: '#64748B', fontFamily: 'Lato, sans-serif', fontWeight: 300, display: 'flex', alignItems: 'center', gap: '4px' }}>
                  <Icon name="calendar_today" size={14} color="#64748B" />
                  {new Date(event.startDate).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}
                </span>
                <span style={{ fontSize: '13px', color: '#64748B', fontFamily: 'Lato, sans-serif', fontWeight: 300, display: 'flex', alignItems: 'center', gap: '4px' }}>
                  <Icon name="location_on" size={14} color="#64748B" />
                  {event.location.name.split(',')[0]}
                </span>
                <span style={{ fontSize: '13px', color: '#64748B', fontFamily: 'Lato, sans-serif', fontWeight: 300, display: 'flex', alignItems: 'center', gap: '4px' }}>
                  <Icon name="group" size={14} color="#64748B" />
                  {event.peopleCount} people
                </span>
              </div>
            </div>
          ))}
        </Card>

        {/* Recent Activity */}
        <Card>
          <SectionHeader icon="schedule">Recent Activity</SectionHeader>
          {recentActivity.map((activity, i) => (
            <div key={i} style={{ padding: '12px 0', borderBottom: i < recentActivity.length - 1 ? '1px solid #F0F4F8' : 'none' }}>
              <p style={{ margin: '0 0 4px', fontSize: '13px', color: '#0B1F33', fontFamily: 'Lato, sans-serif', display: 'flex', alignItems: 'center', gap: '6px' }}>
                <Icon 
                  name={
                    activity.type === 'event' ? 'event' :
                    activity.type === 'person' ? 'person' :
                    activity.type === 'case' ? 'folder' :
                    'analytics'
                  } 
                  size={16} 
                  color="#0FB9B1" 
                />
                <strong>{activity.item}</strong>
              </p>
              <p style={{ margin: 0, fontSize: '12px', color: '#64748B', fontFamily: 'Lato, sans-serif', fontWeight: 300 }}>
                {activity.action} by {activity.user} · {activity.time}
              </p>
            </div>
          ))}
        </Card>
      </div>

      {/* Active Cases Row */}
      <Card style={{ marginBottom: '32px' }}>
        <SectionHeader icon="folder_open" action={<ActionButton small onClick={() => onNavigate('cases')} icon="arrow_forward">View All</ActionButton>}>
          Active Cases & Programs
        </SectionHeader>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '16px' }}>
          {sampleCases.filter(c => c.status === 'Active').slice(0, 4).map((caseItem) => {
            const budgetPercent = Math.round((caseItem.budget.spent / caseItem.budget.allocated) * 100);
            return (
              <div 
                key={caseItem.id} 
                style={{ 
                  padding: '16px', 
                  backgroundColor: '#F9FAFB', 
                  borderRadius: '8px',
                  cursor: 'pointer'
                }}
                onClick={() => onNavigate('cases')}
              >
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '8px' }}>
                  <h4 style={{ margin: 0, fontSize: '14px', fontWeight: 700, color: '#0B1F33', fontFamily: 'Lato, sans-serif' }}>
                    {caseItem.name}
                  </h4>
                  <PriorityBadge priority={caseItem.priority} />
                </div>
                <p style={{ margin: '0 0 12px', fontSize: '12px', color: '#64748B', fontFamily: 'Lato, sans-serif', fontWeight: 300 }}>
                  {caseItem.organization} · {caseItem.location}
                </p>
                <div style={{ marginBottom: '8px' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '4px' }}>
                    <span style={{ fontSize: '11px', color: '#64748B', fontFamily: 'Lato, sans-serif', fontWeight: 300 }}>Budget</span>
                    <span style={{ fontSize: '11px', color: '#0FB9B1', fontFamily: 'Lato, sans-serif', fontWeight: 700 }}>{budgetPercent}% used</span>
                  </div>
                  <div style={{ height: '4px', backgroundColor: '#E5E7EB', borderRadius: '2px', overflow: 'hidden' }}>
                    <div style={{ height: '100%', width: `${budgetPercent}%`, backgroundColor: '#0FB9B1', borderRadius: '2px' }}></div>
                  </div>
                </div>
                <div style={{ display: 'flex', gap: '16px' }}>
                  <QuickStat icon="group" count={caseItem.peopleCount} label="" />
                  <QuickStat icon="trending_up" count={caseItem.outcomeCount} label="outcomes" />
                </div>
              </div>
            );
          })}
        </div>
      </Card>

      {/* Quick Actions Grid */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '16px' }}>
        {[
          { icon: 'add_circle', label: 'New Event', action: () => showNotification('New event form') },
          { icon: 'person_add', label: 'Add Person', action: () => showNotification('Add person form') },
          { icon: 'create_new_folder', label: 'Create Case', action: () => showNotification('Create case form') },
          { icon: 'add_chart', label: 'Record Measurement', action: () => showNotification('Record measurement form') }
        ].map((action, i) => (
          <ActionButton key={i} onClick={action.action} fullWidth icon={action.icon}>
            {action.label}
          </ActionButton>
        ))}
      </div>
    </div>
  );
};

// ============================================================================
// EVENT COMPONENTS
// ============================================================================

const EventCard = ({ event, onClick }) => (
  <Card style={{ marginBottom: '12px' }} onClick={onClick}>
    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '12px' }}>
      <h3 style={{ margin: 0, fontSize: '16px', fontWeight: 700, color: '#0B1F33', fontFamily: 'Lato, sans-serif', display: 'flex', alignItems: 'center', gap: '8px' }}>
        <Icon name="event" size={20} color="#0FB9B1" />
        {event.name}
      </h3>
      <StatusBadge status={event.status} />
    </div>
    <div style={{ display: 'flex', gap: '16px', marginBottom: '16px', flexWrap: 'wrap', alignItems: 'center' }}>
      <TypeBadge type={event.type} />
      <span style={{ color: '#64748B', fontSize: '13px', fontFamily: 'Lato, sans-serif', fontWeight: 300, display: 'flex', alignItems: 'center', gap: '4px' }}>
        <Icon name="location_on" size={14} color="#64748B" />
        {event.location.name.split(',')[0]}
      </span>
      <span style={{ color: '#64748B', fontSize: '13px', fontFamily: 'Lato, sans-serif', fontWeight: 300, display: 'flex', alignItems: 'center', gap: '4px' }}>
        <Icon name="calendar_today" size={14} color="#64748B" />
        {new Date(event.startDate).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}
      </span>
    </div>
    <div style={{ display: 'flex', gap: '24px', paddingTop: '12px', borderTop: '1px solid #F0F4F8' }}>
      <QuickStat icon="group" count={event.peopleCount} label="People" />
      <QuickStat icon="corporate_fare" count={event.orgCount} label="Orgs" />
      <QuickStat icon="work" count={event.serviceCount} label="Services" />
      <QuickStat icon="trending_up" count={event.outcomeCount} label="Outcomes" />
    </div>
  </Card>
);

const EventDetail = ({ event, onBack, showNotification, people }) => {
  const [activeTab, setActiveTab] = useState('overview');
  const eventPeople = people.filter(p => event.people.includes(p.id));

  return (
    <div style={{ display: 'grid', gridTemplateColumns: '1fr 280px', gap: '24px' }}>
      <div>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px' }}>
          <button onClick={onBack} style={{ background: 'none', border: 'none', color: '#0FB9B1', fontSize: '14px', fontFamily: 'Lato, sans-serif', cursor: 'pointer', padding: '8px 0', display: 'flex', alignItems: 'center', gap: '4px' }}>
            <Icon name="arrow_back" size={18} color="#0FB9B1" /> Back to Events
          </button>
          <div style={{ display: 'flex', gap: '8px' }}>
            <ActionButton onClick={() => showNotification('Edit mode')} icon="edit">Edit</ActionButton>
            <ActionButton onClick={() => showNotification('Delete confirmation')} icon="delete">Delete</ActionButton>
          </div>
        </div>
        
        <Card style={{ marginBottom: '24px' }}>
          <h2 style={{ margin: '0 0 8px', fontSize: '24px', fontWeight: 700, color: '#0B1F33', fontFamily: 'Lato, sans-serif', display: 'flex', alignItems: 'center', gap: '10px' }}>
            <Icon name="event" size={28} color="#0FB9B1" />
            {event.name}
          </h2>
          <p style={{ margin: '0 0 16px', fontSize: '13px', color: '#64748B', fontFamily: 'Lato, sans-serif', fontWeight: 300 }}>
            Event ID: {event.id}
          </p>
          <div style={{ display: 'flex', gap: '16px', alignItems: 'center' }}>
            <StatusBadge status={event.status} />
            <TypeBadge type={event.type} />
          </div>
        </Card>
        
        <div style={{ borderBottom: '1px solid #E5E7EB', marginBottom: '24px', display: 'flex', gap: '4px' }}>
          {['Overview', 'People', 'Services', 'Measurements', 'More'].map((tab) => (
            <TabButton key={tab} active={activeTab === tab.toLowerCase()} onClick={() => setActiveTab(tab.toLowerCase())}>
              {tab}
            </TabButton>
          ))}
        </div>
        
        {activeTab === 'overview' && (
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '24px' }}>
            <Card>
              <SectionHeader icon="info">Event Details</SectionHeader>
              <DataField label="Name">{event.name}</DataField>
              <DataField label="Type"><TypeBadge type={event.type} /></DataField>
              <DataField label="Status"><StatusBadge status={event.status} /></DataField>
            </Card>
            <Card>
              <SectionHeader icon="schedule">Dates & Timeline</SectionHeader>
              <DataField label="Start Date" icon="calendar_today">
                {new Date(event.startDate).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })} {new Date(event.startDate).toLocaleTimeString('en-US', { hour: 'numeric', minute: '2-digit' })}
              </DataField>
              <DataField label="End Date" icon="calendar_today">
                {new Date(event.endDate).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })} {new Date(event.endDate).toLocaleTimeString('en-US', { hour: 'numeric', minute: '2-digit' })}
              </DataField>
              <DataField label="Duration" icon="timelapse">
                {Math.round((new Date(event.endDate) - new Date(event.startDate)) / (1000 * 60 * 60))} hours
              </DataField>
            </Card>
            <Card style={{ gridColumn: '1 / -1' }}>
              <SectionHeader icon="description">Description</SectionHeader>
              <p style={{ margin: 0, fontSize: '14px', color: '#0B1F33', fontFamily: 'Lato, sans-serif', lineHeight: 1.6 }}>{event.description}</p>
            </Card>
            <Card>
              <SectionHeader icon="location_on">Location</SectionHeader>
              <p style={{ margin: 0, fontSize: '14px', color: '#0B1F33', fontFamily: 'Lato, sans-serif' }}>{event.location.name}</p>
              <p style={{ margin: '4px 0 0', fontSize: '13px', color: '#64748B', fontFamily: 'Lato, sans-serif', fontWeight: 300 }}>{event.location.room}</p>
            </Card>
            <Card>
              <SectionHeader icon="corporate_fare">Organizations</SectionHeader>
              {event.organizations.map((org, i) => (
                <div key={i} style={{ padding: '8px 0', borderBottom: i < event.organizations.length - 1 ? '1px solid #F0F4F8' : 'none', display: 'flex', justifyContent: 'space-between' }}>
                  <span style={{ fontSize: '14px', color: '#0B1F33', fontFamily: 'Lato, sans-serif' }}>{org.name}</span>
                  <span style={{ fontSize: '12px', color: '#64748B', fontWeight: 300 }}>({org.role})</span>
                </div>
              ))}
            </Card>
          </div>
        )}
        
        {activeTab === 'people' && (
          <Card>
            <SectionHeader icon="group" action={<ActionButton primary small icon="person_add">Add Person</ActionButton>}>
              Event Attendees ({eventPeople.length} people)
            </SectionHeader>
            <DataTable
              columns={[
                { key: 'name', header: 'Name' },
                { key: 'type', header: 'Type' },
                { key: 'role', header: 'Role' },
                { key: 'status', header: 'Status', render: (val) => <StatusBadge status={val} /> }
              ]}
              data={eventPeople}
            />
          </Card>
        )}
        
        {activeTab === 'services' && (
          <div>
            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '16px', alignItems: 'center' }}>
              <h3 style={{ margin: 0, fontSize: '14px', fontWeight: 700, color: '#0B1F33', fontFamily: 'Lato, sans-serif', display: 'flex', alignItems: 'center', gap: '8px' }}>
                <Icon name="work" size={18} color="#0FB9B1" /> Services ({event.services.length})
              </h3>
              <ActionButton primary small icon="add">Add Service</ActionButton>
            </div>
            {event.services.map((service, i) => (
              <Card key={i} style={{ marginBottom: '12px' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '12px' }}>
                  <h4 style={{ margin: 0, fontSize: '15px', fontWeight: 700, color: '#0B1F33', fontFamily: 'Lato, sans-serif' }}>{service.name}</h4>
                  <TypeBadge type={service.type} />
                </div>
                <p style={{ margin: '0 0 8px', fontSize: '13px', color: '#64748B', fontFamily: 'Lato, sans-serif', fontWeight: 300, display: 'flex', alignItems: 'center', gap: '4px' }}>
                  <Icon name="timelapse" size={14} color="#64748B" /> Duration: {service.duration}
                </p>
                <p style={{ margin: 0, fontSize: '14px', color: '#1E3A5F', fontFamily: 'Lato, sans-serif' }}>{service.description}</p>
              </Card>
            ))}
          </div>
        )}
        
        {activeTab === 'measurements' && (
          <Card>
            <SectionHeader icon="analytics" action={<ActionButton primary small icon="add">Add</ActionButton>}>Measurements</SectionHeader>
            {event.measurements.length > 0 ? (
              <DataTable
                columns={[
                  { key: 'name', header: 'Measurement' },
                  { key: 'type', header: 'Type', render: (val) => <TypeBadge type={val} /> },
                  { key: 'date', header: 'Date' },
                  { key: 'value', header: 'Value', render: (val) => <span style={{ color: '#0FB9B1', fontWeight: 700 }}>{val}</span> }
                ]}
                data={event.measurements}
              />
            ) : (
              <p style={{ textAlign: 'center', color: '#64748B', padding: '40px' }}>No measurements recorded yet.</p>
            )}
          </Card>
        )}
        
        {activeTab === 'more' && (
          <Card>
            <SectionHeader icon="trending_up" action={<ActionButton primary small icon="add">Add</ActionButton>}>Outcomes</SectionHeader>
            {event.outcomes.length > 0 ? (
              event.outcomes.map((outcome, i) => (
                <div key={i} style={{ padding: '12px 0', borderBottom: i < event.outcomes.length - 1 ? '1px solid #F0F4F8' : 'none', display: 'flex', gap: '12px', alignItems: 'center' }}>
                  <Icon name="check_circle" size={18} color="#0FB9B1" />
                  <span style={{ fontSize: '14px', color: '#0B1F33', fontFamily: 'Lato, sans-serif' }}>{outcome}</span>
                </div>
              ))
            ) : (
              <p style={{ textAlign: 'center', color: '#64748B', padding: '24px' }}>No outcomes recorded yet.</p>
            )}
          </Card>
        )}
      </div>
      
      <QuickActions
        actions={[
          { icon: 'person_add', label: 'Add Person' },
          { icon: 'add_box', label: 'Add Service' },
          { icon: 'add_chart', label: 'Add Measurement' },
          { icon: 'domain_add', label: 'Add Organization' },
          { icon: 'emoji_events', label: 'Record Outcome' },
          { icon: 'download', label: 'Export Report' }
        ]}
        onAction={(action) => showNotification(`${action} triggered`)}
      />
    </div>
  );
};

// ============================================================================
// PERSON COMPONENTS
// ============================================================================

const PersonCard = ({ person, onClick }) => (
  <Card style={{ marginBottom: '12px' }} onClick={onClick}>
    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '12px' }}>
      <div>
        <h3 style={{ margin: 0, fontSize: '16px', fontWeight: 700, color: '#0B1F33', fontFamily: 'Lato, sans-serif', display: 'flex', alignItems: 'center', gap: '8px' }}>
          <Icon name="person" size={20} color="#0FB9B1" />
          {person.name}
        </h3>
        <p style={{ margin: '4px 0 0', fontSize: '13px', color: '#64748B', fontFamily: 'Lato, sans-serif', fontWeight: 300 }}>
          {person.role} {person.organization && `· ${person.organization}`}
        </p>
      </div>
      <StatusBadge status={person.status} />
    </div>
    <div style={{ display: 'flex', gap: '16px', marginBottom: '16px', flexWrap: 'wrap', alignItems: 'center' }}>
      <TypeBadge type={person.type} />
      <span style={{ color: '#64748B', fontSize: '13px', fontFamily: 'Lato, sans-serif', fontWeight: 300, display: 'flex', alignItems: 'center', gap: '4px' }}>
        <Icon name="location_on" size={14} color="#64748B" />
        {person.location}
      </span>
    </div>
    <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap', paddingTop: '12px', borderTop: '1px solid #F0F4F8' }}>
      {person.characteristics.slice(0, 3).map((char, i) => (
        <span key={i} style={{ padding: '4px 10px', backgroundColor: '#F0F4F8', borderRadius: '4px', fontSize: '12px', color: '#1E3A5F', fontFamily: 'Lato, sans-serif' }}>
          {char}
        </span>
      ))}
    </div>
  </Card>
);

const PersonDetail = ({ person, onBack, showNotification, events, cases }) => {
  const [activeTab, setActiveTab] = useState('overview');
  const personEvents = events.filter(e => person.events.includes(e.id));
  const personCases = cases.filter(c => person.cases.includes(c.id));

  return (
    <div style={{ display: 'grid', gridTemplateColumns: '1fr 280px', gap: '24px' }}>
      <div>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px' }}>
          <button onClick={onBack} style={{ background: 'none', border: 'none', color: '#0FB9B1', fontSize: '14px', fontFamily: 'Lato, sans-serif', cursor: 'pointer', padding: '8px 0', display: 'flex', alignItems: 'center', gap: '4px' }}>
            <Icon name="arrow_back" size={18} color="#0FB9B1" /> Back to People
          </button>
          <div style={{ display: 'flex', gap: '8px' }}>
            <ActionButton onClick={() => showNotification('Edit mode')} icon="edit">Edit</ActionButton>
            <ActionButton onClick={() => showNotification('Delete confirmation')} icon="delete">Delete</ActionButton>
          </div>
        </div>
        
        <Card style={{ marginBottom: '24px' }}>
          <div style={{ display: 'flex', gap: '20px', alignItems: 'flex-start' }}>
            <div style={{ 
              width: '80px', 
              height: '80px', 
              borderRadius: '50%', 
              backgroundColor: '#1E3A5F', 
              display: 'flex', 
              alignItems: 'center', 
              justifyContent: 'center',
              color: '#FFFFFF',
              fontSize: '28px',
              fontWeight: 700,
              fontFamily: 'Lato, sans-serif'
            }}>
              {person.name.split(' ').map(n => n[0]).join('')}
            </div>
            <div style={{ flex: 1 }}>
              <h2 style={{ margin: '0 0 4px', fontSize: '24px', fontWeight: 700, color: '#0B1F33', fontFamily: 'Lato, sans-serif' }}>
                {person.name}
              </h2>
              <p style={{ margin: '0 0 12px', fontSize: '14px', color: '#64748B', fontFamily: 'Lato, sans-serif', fontWeight: 300 }}>
                {person.role} · {person.organization || 'Independent'}
              </p>
              <div style={{ display: 'flex', gap: '12px', alignItems: 'center' }}>
                <StatusBadge status={person.status} />
                <TypeBadge type={person.type} />
              </div>
            </div>
          </div>
        </Card>
        
        <div style={{ borderBottom: '1px solid #E5E7EB', marginBottom: '24px', display: 'flex', gap: '4px' }}>
          {['Overview', 'Events', 'Cases', 'Services', 'Measurements'].map((tab) => (
            <TabButton key={tab} active={activeTab === tab.toLowerCase()} onClick={() => setActiveTab(tab.toLowerCase())}>
              {tab}
            </TabButton>
          ))}
        </div>
        
        {activeTab === 'overview' && (
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '24px' }}>
            <Card>
              <SectionHeader icon="contact_mail">Contact Information</SectionHeader>
              <DataField label="Email" icon="mail">{person.email || 'Not provided'}</DataField>
              <DataField label="Phone" icon="phone">{person.phone}</DataField>
              <DataField label="Location" icon="location_on">{person.location}</DataField>
            </Card>
            <Card>
              <SectionHeader icon="badge">Affiliation</SectionHeader>
              <DataField label="Organization">{person.organization || 'Independent'}</DataField>
              <DataField label="Role">{person.role}</DataField>
              <DataField label="Start Date">{new Date(person.startDate).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}</DataField>
            </Card>
            <Card style={{ gridColumn: '1 / -1' }}>
              <SectionHeader icon="sell">Characteristics</SectionHeader>
              <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
                {person.characteristics.map((char, i) => (
                  <span key={i} style={{ padding: '6px 12px', backgroundColor: '#F0F4F8', borderRadius: '4px', fontSize: '13px', color: '#1E3A5F', fontFamily: 'Lato, sans-serif' }}>
                    {char}
                  </span>
                ))}
              </div>
            </Card>
          </div>
        )}
        
        {activeTab === 'events' && (
          <Card>
            <SectionHeader icon="event" action={<ActionButton primary small icon="link">Link Event</ActionButton>}>Events ({personEvents.length})</SectionHeader>
            {personEvents.length > 0 ? (
              <DataTable
                columns={[
                  { key: 'name', header: 'Event' },
                  { key: 'type', header: 'Type', render: (val) => <TypeBadge type={val} /> },
                  { key: 'startDate', header: 'Date', render: (val) => new Date(val).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' }) },
                  { key: 'status', header: 'Status', render: (val) => <StatusBadge status={val} /> }
                ]}
                data={personEvents}
              />
            ) : (
              <p style={{ textAlign: 'center', color: '#64748B', padding: '40px' }}>No events linked.</p>
            )}
          </Card>
        )}
        
        {activeTab === 'cases' && (
          <Card>
            <SectionHeader icon="folder" action={<ActionButton primary small icon="link">Link Case</ActionButton>}>Cases ({personCases.length})</SectionHeader>
            {personCases.length > 0 ? (
              <DataTable
                columns={[
                  { key: 'name', header: 'Case' },
                  { key: 'type', header: 'Type', render: (val) => <TypeBadge type={val} /> },
                  { key: 'status', header: 'Status', render: (val) => <StatusBadge status={val} /> },
                  { key: 'priority', header: 'Priority', render: (val) => <PriorityBadge priority={val} /> }
                ]}
                data={personCases}
              />
            ) : (
              <p style={{ textAlign: 'center', color: '#64748B', padding: '40px' }}>No cases linked.</p>
            )}
          </Card>
        )}
        
        {activeTab === 'services' && (
          <Card>
            <SectionHeader icon="work" action={<ActionButton primary small icon="add">Add Service</ActionButton>}>Services ({person.services.length})</SectionHeader>
            {person.services.length > 0 ? (
              <DataTable
                columns={[
                  { key: 'name', header: 'Service' },
                  { key: 'date', header: 'Date' },
                  { key: 'role', header: 'Role', render: (val) => <TypeBadge type={val} /> }
                ]}
                data={person.services}
              />
            ) : (
              <p style={{ textAlign: 'center', color: '#64748B', padding: '40px' }}>No services recorded.</p>
            )}
          </Card>
        )}
        
        {activeTab === 'measurements' && (
          <Card>
            <SectionHeader icon="analytics" action={<ActionButton primary small icon="add">Add</ActionButton>}>Measurements ({person.measurements.length})</SectionHeader>
            {person.measurements.length > 0 ? (
              <DataTable
                columns={[
                  { key: 'name', header: 'Measurement' },
                  { key: 'type', header: 'Type', render: (val) => <TypeBadge type={val} /> },
                  { key: 'value', header: 'Value', render: (val) => <span style={{ color: '#0FB9B1', fontWeight: 700 }}>{val}</span> }
                ]}
                data={person.measurements}
              />
            ) : (
              <p style={{ textAlign: 'center', color: '#64748B', padding: '40px' }}>No measurements recorded.</p>
            )}
          </Card>
        )}
      </div>
      
      <QuickActions
        actions={[
          { icon: 'event', label: 'Link Event' },
          { icon: 'folder', label: 'Link Case' },
          { icon: 'work', label: 'Add Service' },
          { icon: 'analytics', label: 'Add Measurement' },
          { icon: 'note_add', label: 'Add Note' },
          { icon: 'download', label: 'Export Profile' }
        ]}
        onAction={(action) => showNotification(`${action} triggered`)}
      />
    </div>
  );
};

// ============================================================================
// CASE COMPONENTS
// ============================================================================

const CaseCard = ({ caseItem, onClick }) => (
  <Card style={{ marginBottom: '12px' }} onClick={onClick}>
    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '12px' }}>
      <div>
        <h3 style={{ margin: 0, fontSize: '16px', fontWeight: 700, color: '#0B1F33', fontFamily: 'Lato, sans-serif', display: 'flex', alignItems: 'center', gap: '8px' }}>
          <Icon name="folder_open" size={20} color="#0FB9B1" />
          {caseItem.name}
        </h3>
        <p style={{ margin: '4px 0 0', fontSize: '13px', color: '#64748B', fontFamily: 'Lato, sans-serif', fontWeight: 300 }}>
          {caseItem.organization} · {caseItem.location}
        </p>
      </div>
      <div style={{ display: 'flex', gap: '8px' }}>
        <PriorityBadge priority={caseItem.priority} />
        <StatusBadge status={caseItem.status} />
      </div>
    </div>
    <p style={{ margin: '0 0 16px', fontSize: '14px', color: '#1E3A5F', fontFamily: 'Lato, sans-serif', lineHeight: 1.5 }}>
      {caseItem.description.substring(0, 150)}...
    </p>
    <div style={{ display: 'flex', gap: '24px', paddingTop: '12px', borderTop: '1px solid #F0F4F8' }}>
      <QuickStat icon="group" count={caseItem.peopleCount} label="People" />
      <QuickStat icon="event" count={caseItem.eventCount} label="Events" />
      <QuickStat icon="trending_up" count={caseItem.outcomeCount} label="Outcomes" />
    </div>
  </Card>
);

const CaseDetail = ({ caseItem, onBack, showNotification, people, events }) => {
  const [activeTab, setActiveTab] = useState('overview');
  const casePeople = people.filter(p => caseItem.people.includes(p.id));
  const caseEvents = events.filter(e => caseItem.events.includes(e.id));
  const budgetPercent = Math.round((caseItem.budget.spent / caseItem.budget.allocated) * 100);

  return (
    <div style={{ display: 'grid', gridTemplateColumns: '1fr 280px', gap: '24px' }}>
      <div>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px' }}>
          <button onClick={onBack} style={{ background: 'none', border: 'none', color: '#0FB9B1', fontSize: '14px', fontFamily: 'Lato, sans-serif', cursor: 'pointer', padding: '8px 0', display: 'flex', alignItems: 'center', gap: '4px' }}>
            <Icon name="arrow_back" size={18} color="#0FB9B1" /> Back to Cases
          </button>
          <div style={{ display: 'flex', gap: '8px' }}>
            <ActionButton onClick={() => showNotification('Edit mode')} icon="edit">Edit</ActionButton>
            <ActionButton onClick={() => showNotification('Delete confirmation')} icon="delete">Delete</ActionButton>
          </div>
        </div>
        
        <Card style={{ marginBottom: '24px' }}>
          <h2 style={{ margin: '0 0 8px', fontSize: '24px', fontWeight: 700, color: '#0B1F33', fontFamily: 'Lato, sans-serif', display: 'flex', alignItems: 'center', gap: '10px' }}>
            <Icon name="folder_open" size={28} color="#0FB9B1" />
            {caseItem.name}
          </h2>
          <p style={{ margin: '0 0 16px', fontSize: '13px', color: '#64748B', fontFamily: 'Lato, sans-serif', fontWeight: 300 }}>
            Case ID: {caseItem.id} · {caseItem.organization}
          </p>
          <div style={{ display: 'flex', gap: '12px', alignItems: 'center' }}>
            <PriorityBadge priority={caseItem.priority} />
            <StatusBadge status={caseItem.status} />
            <TypeBadge type={caseItem.type} />
          </div>
        </Card>
        
        <div style={{ borderBottom: '1px solid #E5E7EB', marginBottom: '24px', display: 'flex', gap: '4px' }}>
          {['Overview', 'People', 'Events', 'Services', 'Measurements', 'Outcomes'].map((tab) => (
            <TabButton key={tab} active={activeTab === tab.toLowerCase()} onClick={() => setActiveTab(tab.toLowerCase())}>
              {tab}
            </TabButton>
          ))}
        </div>
        
        {activeTab === 'overview' && (
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '24px' }}>
            <Card>
              <SectionHeader icon="info">Case Details</SectionHeader>
              <DataField label="Type"><TypeBadge type={caseItem.type} /></DataField>
              <DataField label="Organization">{caseItem.organization}</DataField>
              <DataField label="Location">{caseItem.location}</DataField>
            </Card>
            <Card>
              <SectionHeader icon="date_range">Timeline</SectionHeader>
              <DataField label="Start Date">{new Date(caseItem.startDate).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}</DataField>
              <DataField label="End Date">{new Date(caseItem.endDate).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}</DataField>
            </Card>
            <Card style={{ gridColumn: '1 / -1' }}>
              <SectionHeader icon="description">Description</SectionHeader>
              <p style={{ margin: 0, fontSize: '14px', color: '#0B1F33', fontFamily: 'Lato, sans-serif', lineHeight: 1.6 }}>{caseItem.description}</p>
            </Card>
            <Card style={{ gridColumn: '1 / -1' }}>
              <SectionHeader icon="payments">Budget</SectionHeader>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '24px', marginBottom: '16px' }}>
                <div>
                  <p style={{ margin: 0, fontSize: '12px', color: '#64748B', fontFamily: 'Lato, sans-serif', fontWeight: 300 }}>Allocated</p>
                  <p style={{ margin: '4px 0 0', fontSize: '20px', fontWeight: 700, color: '#0B1F33', fontFamily: 'Lato, sans-serif' }}>${caseItem.budget.allocated.toLocaleString()}</p>
                </div>
                <div>
                  <p style={{ margin: 0, fontSize: '12px', color: '#64748B', fontFamily: 'Lato, sans-serif', fontWeight: 300 }}>Spent</p>
                  <p style={{ margin: '4px 0 0', fontSize: '20px', fontWeight: 700, color: '#0FB9B1', fontFamily: 'Lato, sans-serif' }}>${caseItem.budget.spent.toLocaleString()}</p>
                </div>
                <div>
                  <p style={{ margin: 0, fontSize: '12px', color: '#64748B', fontFamily: 'Lato, sans-serif', fontWeight: 300 }}>Remaining</p>
                  <p style={{ margin: '4px 0 0', fontSize: '20px', fontWeight: 700, color: '#1E3A5F', fontFamily: 'Lato, sans-serif' }}>${caseItem.budget.remaining.toLocaleString()}</p>
                </div>
              </div>
              <div style={{ height: '8px', backgroundColor: '#E5E7EB', borderRadius: '4px', overflow: 'hidden' }}>
                <div style={{ height: '100%', width: `${budgetPercent}%`, backgroundColor: '#0FB9B1', borderRadius: '4px' }}></div>
              </div>
              <p style={{ margin: '8px 0 0', fontSize: '12px', color: '#64748B', fontFamily: 'Lato, sans-serif', fontWeight: 300 }}>{budgetPercent}% utilized</p>
            </Card>
          </div>
        )}
        
        {activeTab === 'people' && (
          <Card>
            <SectionHeader icon="group" action={<ActionButton primary small icon="person_add">Add Person</ActionButton>}>People ({casePeople.length})</SectionHeader>
            {casePeople.length > 0 ? (
              <DataTable
                columns={[
                  { key: 'name', header: 'Name' },
                  { key: 'type', header: 'Type', render: (val) => <TypeBadge type={val} /> },
                  { key: 'role', header: 'Role' },
                  { key: 'status', header: 'Status', render: (val) => <StatusBadge status={val} /> }
                ]}
                data={casePeople}
              />
            ) : (
              <p style={{ textAlign: 'center', color: '#64748B', padding: '40px' }}>No people linked.</p>
            )}
          </Card>
        )}
        
        {activeTab === 'events' && (
          <Card>
            <SectionHeader icon="event" action={<ActionButton primary small icon="link">Link Event</ActionButton>}>Events ({caseEvents.length})</SectionHeader>
            {caseEvents.length > 0 ? (
              <DataTable
                columns={[
                  { key: 'name', header: 'Event' },
                  { key: 'type', header: 'Type', render: (val) => <TypeBadge type={val} /> },
                  { key: 'startDate', header: 'Date', render: (val) => new Date(val).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' }) },
                  { key: 'status', header: 'Status', render: (val) => <StatusBadge status={val} /> }
                ]}
                data={caseEvents}
              />
            ) : (
              <p style={{ textAlign: 'center', color: '#64748B', padding: '40px' }}>No events linked.</p>
            )}
          </Card>
        )}
        
        {activeTab === 'services' && (
          <Card>
            <SectionHeader icon="work" action={<ActionButton primary small icon="add">Add Service</ActionButton>}>Services ({caseItem.services.length})</SectionHeader>
            {caseItem.services.length > 0 ? (
              <DataTable
                columns={[
                  { key: 'name', header: 'Service' },
                  { key: 'type', header: 'Type', render: (val) => <TypeBadge type={val} /> },
                  { key: 'frequency', header: 'Frequency' }
                ]}
                data={caseItem.services}
              />
            ) : (
              <p style={{ textAlign: 'center', color: '#64748B', padding: '40px' }}>No services recorded.</p>
            )}
          </Card>
        )}
        
        {activeTab === 'measurements' && (
          <Card>
            <SectionHeader icon="analytics" action={<ActionButton primary small icon="add">Add</ActionButton>}>Measurements ({caseItem.measurements.length})</SectionHeader>
            {caseItem.measurements.length > 0 ? (
              <DataTable
                columns={[
                  { key: 'name', header: 'Measurement' },
                  { key: 'type', header: 'Type', render: (val) => <TypeBadge type={val} /> },
                  { key: 'value', header: 'Value', render: (val) => <span style={{ color: '#0FB9B1', fontWeight: 700 }}>{val}</span> },
                  { key: 'period', header: 'Period' }
                ]}
                data={caseItem.measurements}
              />
            ) : (
              <p style={{ textAlign: 'center', color: '#64748B', padding: '40px' }}>No measurements recorded.</p>
            )}
          </Card>
        )}
        
        {activeTab === 'outcomes' && (
          <Card>
            <SectionHeader icon="trending_up" action={<ActionButton primary small icon="add">Add</ActionButton>}>Outcomes ({caseItem.outcomes.length})</SectionHeader>
            {caseItem.outcomes.length > 0 ? (
              caseItem.outcomes.map((outcome, i) => (
                <div key={i} style={{ padding: '12px 0', borderBottom: i < caseItem.outcomes.length - 1 ? '1px solid #F0F4F8' : 'none', display: 'flex', gap: '12px', alignItems: 'center' }}>
                  <Icon name="check_circle" size={18} color="#0FB9B1" />
                  <span style={{ fontSize: '14px', color: '#0B1F33', fontFamily: 'Lato, sans-serif' }}>{outcome}</span>
                </div>
              ))
            ) : (
              <p style={{ textAlign: 'center', color: '#64748B', padding: '40px' }}>No outcomes recorded.</p>
            )}
          </Card>
        )}
      </div>
      
      <QuickActions
        actions={[
          { icon: 'person_add', label: 'Add Person' },
          { icon: 'event', label: 'Link Event' },
          { icon: 'work', label: 'Add Service' },
          { icon: 'analytics', label: 'Add Measurement' },
          { icon: 'emoji_events', label: 'Record Outcome' },
          { icon: 'download', label: 'Export Report' }
        ]}
        onAction={(action) => showNotification(`${action} triggered`)}
      />
    </div>
  );
};

// ============================================================================
// ORGANIZATIONS & PROGRAMS
// ============================================================================

const OrganizationsList = ({ showNotification }) => (
  <div>
    <Card style={{ marginBottom: '24px' }}>
      <SearchFilter searchQuery="" setSearchQuery={() => {}} placeholder="Search organizations..." filters={
        <ActionButton primary onClick={() => showNotification('New organization form')} icon="add">New Organization</ActionButton>
      } />
    </Card>
    {sampleOrganizations.map((org) => (
      <Card key={org.id} style={{ marginBottom: '12px', cursor: 'pointer' }} onClick={() => showNotification(`${org.name} detail view`)}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '12px' }}>
          <div>
            <h3 style={{ margin: 0, fontSize: '16px', fontWeight: 700, color: '#0B1F33', fontFamily: 'Lato, sans-serif', display: 'flex', alignItems: 'center', gap: '8px' }}>
              <Icon name="corporate_fare" size={20} color="#0FB9B1" />
              {org.name}
            </h3>
            <p style={{ margin: '4px 0 0', fontSize: '13px', color: '#64748B', fontFamily: 'Lato, sans-serif', fontWeight: 300 }}>{org.location}</p>
          </div>
          <StatusBadge status={org.status} />
        </div>
        <div style={{ display: 'flex', gap: '16px' }}>
          <TypeBadge type={org.type} />
          <QuickStat icon="group" count={org.peopleCount} label="People" />
          <QuickStat icon="folder" count={org.caseCount} label="Cases" />
        </div>
      </Card>
    ))}
  </div>
);

const ProgramsList = ({ showNotification }) => (
  <div>
    <Card style={{ marginBottom: '24px' }}>
      <SearchFilter searchQuery="" setSearchQuery={() => {}} placeholder="Search programs..." filters={
        <ActionButton primary onClick={() => showNotification('New program form')} icon="add">New Program</ActionButton>
      } />
    </Card>
    {samplePrograms.map((program) => (
      <Card key={program.id} style={{ marginBottom: '12px', cursor: 'pointer' }} onClick={() => showNotification(`${program.name} detail view`)}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '12px' }}>
          <div>
            <h3 style={{ margin: 0, fontSize: '16px', fontWeight: 700, color: '#0B1F33', fontFamily: 'Lato, sans-serif', display: 'flex', alignItems: 'center', gap: '8px' }}>
              <Icon name="assignment" size={20} color="#0FB9B1" />
              {program.name}
            </h3>
            <p style={{ margin: '4px 0 0', fontSize: '13px', color: '#64748B', fontFamily: 'Lato, sans-serif', fontWeight: 300 }}>{program.type}</p>
          </div>
          <StatusBadge status={program.status} />
        </div>
        <div style={{ display: 'flex', gap: '16px' }}>
          <QuickStat icon="folder" count={program.caseCount} label="Cases" />
          <span style={{ fontSize: '13px', color: '#0FB9B1', fontFamily: 'Lato, sans-serif', fontWeight: 700, display: 'flex', alignItems: 'center', gap: '4px' }}>
            <Icon name="payments" size={14} color="#0FB9B1" />
            ${(program.budget / 1000).toFixed(0)}K budget
          </span>
        </div>
      </Card>
    ))}
  </div>
);

// ============================================================================
// MAIN APP
// ============================================================================

function AWHCDashboard() {
  const [activeModule, setActiveModule] = useState('home');
  const [view, setView] = useState('list');
  const [selectedItem, setSelectedItem] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [statusFilter, setStatusFilter] = useState('all');
  const [typeFilter, setTypeFilter] = useState('all');
  const [notification, setNotification] = useState(null);

  const showNotification = (message) => {
    setNotification(message);
    setTimeout(() => setNotification(null), 3000);
  };

  const handleNavClick = (module) => {
    setActiveModule(module);
    setView('list');
    setSelectedItem(null);
    setSearchQuery('');
    setStatusFilter('all');
    setTypeFilter('all');
  };

  const handleItemClick = (item) => {
    setSelectedItem(item);
    setView('detail');
  };

  const handleBack = () => {
    setView('list');
    setSelectedItem(null);
  };

  const getFilteredItems = () => {
    let items = [];
    if (activeModule === 'events') items = sampleEvents;
    else if (activeModule === 'people') items = samplePeople;
    else if (activeModule === 'cases') items = sampleCases;

    return items.filter(item => {
      const matchesSearch = item.name.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesStatus = statusFilter === 'all' || item.status === statusFilter;
      const matchesType = typeFilter === 'all' || item.type === typeFilter;
      return matchesSearch && matchesStatus && matchesType;
    });
  };

  const getStatusOptions = () => {
    if (activeModule === 'events') return ['Confirmed', 'Planning', 'Completed', 'Cancelled'];
    if (activeModule === 'people') return ['Active', 'Registered', 'Confirmed', 'Inactive'];
    if (activeModule === 'cases') return ['Active', 'Planning', 'Completed'];
    return [];
  };

  const getTypeOptions = () => {
    if (activeModule === 'events') return ['Training Event', 'Workshop', 'Conference'];
    if (activeModule === 'people') return ['Staff', 'Participant', 'Client', 'External'];
    if (activeModule === 'cases') return ['Program', 'Project', 'Initiative', 'Strategy'];
    return [];
  };

  return (
    <div style={{ minHeight: '100vh', backgroundColor: '#F9FAFB', fontFamily: 'Lato, sans-serif' }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Lato:wght@300;400;700&display=swap');
        @import url('https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200');
        * { box-sizing: border-box; }
        body { margin: 0; }
        button:hover { opacity: 0.9; }
        input:focus, select:focus { border-color: #0FB9B1 !important; }
        tr:hover { background-color: #F9FAFB; }
        .material-symbols-outlined {
          font-variation-settings: 'FILL' 0, 'wght' 300, 'GRAD' 0, 'opsz' 24;
        }
        @keyframes slideIn {
          from { transform: translateX(100px); opacity: 0; }
          to { transform: translateX(0); opacity: 1; }
        }
      `}</style>
      
      {notification && (
        <div style={{
          position: 'fixed',
          top: '20px',
          right: '20px',
          padding: '14px 24px',
          background: '#0FB9B1',
          color: '#FFFFFF',
          borderRadius: '8px',
          fontSize: '14px',
          fontFamily: 'Lato, sans-serif',
          fontWeight: 400,
          boxShadow: '0 4px 12px rgba(15, 185, 177, 0.3)',
          zIndex: 1000,
          animation: 'slideIn 0.3s ease',
          display: 'flex',
          alignItems: 'center',
          gap: '8px'
        }}>
          <Icon name="check_circle" size={18} color="#FFFFFF" />
          {notification}
        </div>
      )}
      
      {/* Header */}
      <header style={{
        background: 'linear-gradient(to right, #0B1F33, #1E3A5F)',
        padding: '16px 32px',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center'
      }}>
        <h1 
          onClick={() => handleNavClick('home')}
          style={{
            margin: 0,
            fontSize: '20px',
            fontWeight: 700,
            color: '#FFFFFF',
            fontFamily: 'Lato, sans-serif',
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'center',
            gap: '10px'
          }}
        >
          <Icon name="dashboard" size={24} color="#0FB9B1" />
          AWHC Dashboard
        </h1>
        <div style={{ display: 'flex', gap: '8px' }}>
          {[
            { key: 'home', label: 'Home', icon: 'home' },
            { key: 'events', label: 'Events', icon: 'event' },
            { key: 'people', label: 'People', icon: 'group' },
            { key: 'cases', label: 'Cases', icon: 'folder_open' },
            { key: 'organizations', label: 'Organizations', icon: 'corporate_fare' },
            { key: 'programs', label: 'Programs', icon: 'assignment' }
          ].map((item) => (
            <NavItem
              key={item.key}
              active={activeModule === item.key}
              onClick={() => handleNavClick(item.key)}
              icon={item.icon}
            >
              {item.label}
            </NavItem>
          ))}
        </div>
      </header>
      
      <main style={{ padding: '24px 32px', maxWidth: '1400px', margin: '0 auto' }}>
        {activeModule === 'home' && (
          <HomePage onNavigate={handleNavClick} showNotification={showNotification} />
        )}

        {activeModule === 'events' && view === 'list' && (
          <>
            <Card style={{ marginBottom: '24px' }}>
              <SearchFilter
                searchQuery={searchQuery}
                setSearchQuery={setSearchQuery}
                placeholder="Search events..."
                filters={
                  <>
                    <select value={statusFilter} onChange={(e) => setStatusFilter(e.target.value)} style={{ padding: '12px 14px', border: '1px solid #E5E7EB', borderRadius: '6px', fontSize: '14px', fontFamily: 'Lato, sans-serif', background: '#FFFFFF', color: '#1E3A5F', cursor: 'pointer', minWidth: '150px' }}>
                      <option value="all">All Status</option>
                      {getStatusOptions().map(s => <option key={s} value={s}>{s}</option>)}
                    </select>
                    <select value={typeFilter} onChange={(e) => setTypeFilter(e.target.value)} style={{ padding: '12px 14px', border: '1px solid #E5E7EB', borderRadius: '6px', fontSize: '14px', fontFamily: 'Lato, sans-serif', background: '#FFFFFF', color: '#1E3A5F', cursor: 'pointer', minWidth: '150px' }}>
                      <option value="all">All Types</option>
                      {getTypeOptions().map(t => <option key={t} value={t}>{t}</option>)}
                    </select>
                    <ActionButton primary onClick={() => showNotification('New event form')} icon="add">New Event</ActionButton>
                  </>
                }
              />
            </Card>
            {getFilteredItems().length > 0 ? (
              getFilteredItems().map((item) => <EventCard key={item.id} event={item} onClick={() => handleItemClick(item)} />)
            ) : (
              <Card style={{ textAlign: 'center', padding: '60px' }}>
                <p style={{ margin: 0, color: '#64748B', fontSize: '16px', fontFamily: 'Lato, sans-serif' }}>No events found.</p>
              </Card>
            )}
          </>
        )}
        {activeModule === 'events' && view === 'detail' && selectedItem && (
          <EventDetail event={selectedItem} onBack={handleBack} showNotification={showNotification} people={samplePeople} />
        )}

        {activeModule === 'people' && view === 'list' && (
          <>
            <Card style={{ marginBottom: '24px' }}>
              <SearchFilter
                searchQuery={searchQuery}
                setSearchQuery={setSearchQuery}
                placeholder="Search people..."
                filters={
                  <>
                    <select value={statusFilter} onChange={(e) => setStatusFilter(e.target.value)} style={{ padding: '12px 14px', border: '1px solid #E5E7EB', borderRadius: '6px', fontSize: '14px', fontFamily: 'Lato, sans-serif', background: '#FFFFFF', color: '#1E3A5F', cursor: 'pointer', minWidth: '150px' }}>
                      <option value="all">All Status</option>
                      {getStatusOptions().map(s => <option key={s} value={s}>{s}</option>)}
                    </select>
                    <select value={typeFilter} onChange={(e) => setTypeFilter(e.target.value)} style={{ padding: '12px 14px', border: '1px solid #E5E7EB', borderRadius: '6px', fontSize: '14px', fontFamily: 'Lato, sans-serif', background: '#FFFFFF', color: '#1E3A5F', cursor: 'pointer', minWidth: '150px' }}>
                      <option value="all">All Types</option>
                      {getTypeOptions().map(t => <option key={t} value={t}>{t}</option>)}
                    </select>
                    <ActionButton primary onClick={() => showNotification('New person form')} icon="person_add">Add Person</ActionButton>
                  </>
                }
              />
            </Card>
            {getFilteredItems().length > 0 ? (
              getFilteredItems().map((item) => <PersonCard key={item.id} person={item} onClick={() => handleItemClick(item)} />)
            ) : (
              <Card style={{ textAlign: 'center', padding: '60px' }}>
                <p style={{ margin: 0, color: '#64748B', fontSize: '16px', fontFamily: 'Lato, sans-serif' }}>No people found.</p>
              </Card>
            )}
          </>
        )}
        {activeModule === 'people' && view === 'detail' && selectedItem && (
          <PersonDetail person={selectedItem} onBack={handleBack} showNotification={showNotification} events={sampleEvents} cases={sampleCases} />
        )}

        {activeModule === 'cases' && view === 'list' && (
          <>
            <Card style={{ marginBottom: '24px' }}>
              <SearchFilter
                searchQuery={searchQuery}
                setSearchQuery={setSearchQuery}
                placeholder="Search cases..."
                filters={
                  <>
                    <select value={statusFilter} onChange={(e) => setStatusFilter(e.target.value)} style={{ padding: '12px 14px', border: '1px solid #E5E7EB', borderRadius: '6px', fontSize: '14px', fontFamily: 'Lato, sans-serif', background: '#FFFFFF', color: '#1E3A5F', cursor: 'pointer', minWidth: '150px' }}>
                      <option value="all">All Status</option>
                      {getStatusOptions().map(s => <option key={s} value={s}>{s}</option>)}
                    </select>
                    <select value={typeFilter} onChange={(e) => setTypeFilter(e.target.value)} style={{ padding: '12px 14px', border: '1px solid #E5E7EB', borderRadius: '6px', fontSize: '14px', fontFamily: 'Lato, sans-serif', background: '#FFFFFF', color: '#1E3A5F', cursor: 'pointer', minWidth: '150px' }}>
                      <option value="all">All Types</option>
                      {getTypeOptions().map(t => <option key={t} value={t}>{t}</option>)}
                    </select>
                    <ActionButton primary onClick={() => showNotification('New case form')} icon="create_new_folder">New Case</ActionButton>
                  </>
                }
              />
            </Card>
            {getFilteredItems().length > 0 ? (
              getFilteredItems().map((item) => <CaseCard key={item.id} caseItem={item} onClick={() => handleItemClick(item)} />)
            ) : (
              <Card style={{ textAlign: 'center', padding: '60px' }}>
                <p style={{ margin: 0, color: '#64748B', fontSize: '16px', fontFamily: 'Lato, sans-serif' }}>No cases found.</p>
              </Card>
            )}
          </>
        )}
        {activeModule === 'cases' && view === 'detail' && selectedItem && (
          <CaseDetail caseItem={selectedItem} onBack={handleBack} showNotification={showNotification} people={samplePeople} events={sampleEvents} />
        )}

        {activeModule === 'organizations' && (
          <OrganizationsList showNotification={showNotification} />
        )}

        {activeModule === 'programs' && (
          <ProgramsList showNotification={showNotification} />
        )}
      </main>
      
      <footer style={{
        padding: '16px 32px',
        borderTop: '1px solid #E5E7EB',
        textAlign: 'center',
        color: '#64748B',
        fontSize: '12px',
        fontFamily: 'Lato, sans-serif',
        fontWeight: 300
      }}>
        AWHC Dashboard · Phase 1 Implementation · HelpSeeker Technologies © 2026
      </footer>
    </div>
  );
}
