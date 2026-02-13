// Impact Dashboard - A Way Home Canada
// React is loaded via CDN
const { useState } = React;

const ImpactDashboard = () => {
  const [activeView, setActiveView] = useState('theory');
  const [selectedOrg, setSelectedOrg] = useState(null);
  const [hoveredCity, setHoveredCity] = useState(null);

  const navItems = [
    { id: 'theory', label: 'Theory of Change', icon: 'account_tree' },
    { id: 'waterfall', label: 'Outcome Waterfall', icon: 'waterfall_chart' },
    { id: 'network', label: 'Network Ripple', icon: 'hub' },
    { id: 'policy', label: 'Policy Changes', icon: 'gavel' },
    { id: 'capacity', label: 'Org Capacity', icon: 'trending_up' },
    { id: 'stories', label: 'Stories', icon: 'auto_stories' },
    { id: 'geographic', label: 'Geographic', icon: 'map' },
    { id: 'cohort', label: 'Cohort Analysis', icon: 'groups' }
  ];

  const Icon = ({ name, size = 20, color = '#0FB9B1' }) => (
    <span
      className="material-symbols-outlined"
      style={{ fontSize: size, color, verticalAlign: 'middle' }}
    >
      {name}
    </span>
  );

  const MetricCard = ({ icon, value, label, change }) => (
    <div style={{
      background: '#FFFFFF',
      border: '1px solid #E5E7EB',
      borderRadius: 8,
      padding: 20,
      display: 'flex',
      flexDirection: 'column',
      gap: 8
    }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
        <Icon name={icon} size={24} />
        <span style={{ fontSize: 28, fontWeight: 700, color: '#0A0A0A' }}>{value}</span>
      </div>
      <span style={{ fontSize: 14, fontWeight: 300, color: '#1E3A5F' }}>{label}</span>
      {change && (
        <span style={{ fontSize: 12, color: '#0FB9B1', fontWeight: 400 }}>
          <Icon name="arrow_upward" size={14} /> {change}
        </span>
      )}
    </div>
  );

  const FlowArrow = () => (
    <div style={{
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      color: '#4FD1C5',
      padding: '0 8px'
    }}>
      <Icon name="arrow_forward" size={24} color="#4FD1C5" />
    </div>
  );

  const FlowBox = ({ title, items, color = '#1E3A5F' }) => (
    <div style={{
      background: '#FFFFFF',
      border: `2px solid ${color}`,
      borderRadius: 8,
      padding: 16,
      minWidth: 180,
      flex: 1
    }}>
      <div style={{
        fontSize: 12,
        fontWeight: 700,
        color: color,
        marginBottom: 12,
        textTransform: 'uppercase',
        letterSpacing: '0.5px'
      }}>
        {title}
      </div>
      {items.map((item, i) => (
        <div key={i} style={{
          fontSize: 14,
          color: '#0A0A0A',
          marginBottom: 6,
          fontWeight: 400
        }}>
          {item}
        </div>
      ))}
    </div>
  );

  const ProgressBar = ({ label, value, maxValue = 100 }) => (
    <div style={{ marginBottom: 16 }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 4 }}>
        <span style={{ fontSize: 14, color: '#0A0A0A' }}>{label}</span>
        <span style={{ fontSize: 14, color: '#1E3A5F', fontWeight: 400 }}>{value}%</span>
      </div>
      <div style={{
        height: 8,
        background: '#E5E7EB',
        borderRadius: 4,
        overflow: 'hidden'
      }}>
        <div style={{
          width: `${(value / maxValue) * 100}%`,
          height: '100%',
          background: '#0FB9B1',
          borderRadius: 4
        }} />
      </div>
    </div>
  );

  const StatusBadge = ({ status }) => {
    const styles = {
      adopted: { bg: '#D1FAE5', color: '#065F46', icon: 'check_circle' },
      progress: { bg: '#FEF3C7', color: '#92400E', icon: 'pending' },
      blocked: { bg: '#FEE2E2', color: '#991B1B', icon: 'cancel' }
    };
    const s = styles[status] || styles.progress;
    return (
      <span style={{
        display: 'inline-flex',
        alignItems: 'center',
        gap: 4,
        padding: '4px 8px',
        background: s.bg,
        color: s.color,
        borderRadius: 4,
        fontSize: 12,
        fontWeight: 400
      }}>
        <Icon name={s.icon} size={14} color={s.color} />
        {status.charAt(0).toUpperCase() + status.slice(1)}
      </span>
    );
  };

  const TheoryOfChangeView = () => (
    <div>
      <div style={{ marginBottom: 24 }}>
        <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
          <select style={{
            padding: '8px 12px',
            border: '1px solid #E5E7EB',
            borderRadius: 4,
            fontSize: 14,
            fontFamily: 'Lato, sans-serif',
            color: '#0A0A0A',
            background: '#FFFFFF'
          }}>
            <option>All Programs</option>
            <option>Youth Homelessness</option>
            <option>Housing First</option>
          </select>
          <select style={{
            padding: '8px 12px',
            border: '1px solid #E5E7EB',
            borderRadius: 4,
            fontSize: 14,
            fontFamily: 'Lato, sans-serif',
            color: '#0A0A0A',
            background: '#FFFFFF'
          }}>
            <option>2025-2026</option>
            <option>2024-2025</option>
          </select>
          <select style={{
            padding: '8px 12px',
            border: '1px solid #E5E7EB',
            borderRadius: 4,
            fontSize: 14,
            fontFamily: 'Lato, sans-serif',
            color: '#0A0A0A',
            background: '#FFFFFF'
          }}>
            <option>All Regions</option>
            <option>Alberta</option>
            <option>British Columbia</option>
          </select>
        </div>
      </div>

      <div style={{
        display: 'flex',
        alignItems: 'stretch',
        gap: 0,
        marginBottom: 32,
        overflowX: 'auto',
        paddingBottom: 8
      }}>
        <FlowBox
          title="Activities"
          color="#1E3A5F"
          items={['45 Events', '12 Training Sessions', '18 Consultations', '15 Technical Assists']}
        />
        <FlowArrow />
        <FlowBox
          title="Outputs"
          color="#0FB9B1"
          items={['1,247 People Trained', '89 Organizations Reached']}
        />
        <FlowArrow />
        <FlowBox
          title="Outcomes"
          color="#4FD1C5"
          items={['156 Policy Changes', '67 New Programs Created']}
        />
        <FlowArrow />
        <FlowBox
          title="Impact"
          color="#0B1F33"
          items={['23% ↓ Youth Homelessness', '12 Cities Improved']}
        />
      </div>

      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
        gap: 16
      }}>
        <MetricCard icon="event" value="45" label="Training Events" change="+12 this quarter" />
        <MetricCard icon="people" value="1,247" label="People Trained" change="+340 this quarter" />
        <MetricCard icon="business" value="89" label="Organizations" change="+23 this quarter" />
        <MetricCard icon="policy" value="156" label="Policy Changes" change="+45 this quarter" />
      </div>
    </div>
  );

  const WaterfallView = () => (
    <div>
      <h3 style={{ fontSize: 18, fontWeight: 700, color: '#0A0A0A', marginBottom: 24 }}>
        Outcome Progression: Youth Homelessness Training Series
      </h3>

      <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
        {[
          {
            phase: 'Immediate (0-3 months)',
            source: 'Tracked via event_outcome',
            icon: 'bolt',
            items: [
              { text: '95% participants rated training "excellent"', done: true },
              { text: '88% confidence in applying prevention strategies ↑42%', done: true },
              { text: '67% committed to policy change advocacy', done: true },
              { text: '156 connections made between participants', done: true }
            ]
          },
          {
            phase: 'Short-Term (3-6 months)',
            source: 'Tracked via case_outcome',
            icon: 'schedule',
            items: [
              { text: '45 organizations implemented new screening tools', done: true },
              { text: '23 policy changes initiated', done: true },
              { text: '12 communities formed youth homelessness working groups', done: true },
              { text: '34 participants trained others in their organizations', done: true }
            ]
          },
          {
            phase: 'Medium-Term (6-12 months)',
            source: 'Tracked via case_outcome',
            icon: 'event_upcoming',
            items: [
              { text: '18 new youth housing programs launched', done: true },
              { text: '8 municipalities adopted Housing First policies', done: true },
              { text: '$2.3M in new funding secured by trained organizations', done: true },
              { text: '12 policy changes in progress', done: false }
            ]
          },
          {
            phase: 'Long-Term Impact (12+ months)',
            source: 'Community-Level Change',
            icon: 'emoji_events',
            items: [
              { text: '23% reduction in youth homelessness (Calgary)', done: true },
              { text: '67% of youth housed within 30 days (Vancouver)', done: true },
              { text: '5 peer training programs self-sustaining', done: true }
            ]
          }
        ].map((phase, idx) => (
          <div key={idx} style={{
            background: '#FFFFFF',
            border: '1px solid #E5E7EB',
            borderRadius: 8,
            padding: 20,
            position: 'relative'
          }}>
            {idx < 3 && (
              <div style={{
                position: 'absolute',
                bottom: -16,
                left: '50%',
                transform: 'translateX(-50%)',
                zIndex: 1
              }}>
                <Icon name="arrow_downward" size={20} color="#4FD1C5" />
              </div>
            )}
            <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 12 }}>
              <Icon name={phase.icon} size={24} />
              <div>
                <div style={{ fontSize: 16, fontWeight: 700, color: '#0A0A0A' }}>{phase.phase}</div>
                <div style={{ fontSize: 12, fontWeight: 300, color: '#1E3A5F' }}>{phase.source}</div>
              </div>
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 8 }}>
              {phase.items.map((item, i) => (
                <div key={i} style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: 8,
                  fontSize: 14,
                  color: '#0A0A0A'
                }}>
                  <Icon
                    name={item.done ? 'check_circle' : 'pending'}
                    size={16}
                    color={item.done ? '#0FB9B1' : '#FCD34D'}
                  />
                  {item.text}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  const NetworkView = () => (
    <div>
      <h3 style={{ fontSize: 18, fontWeight: 700, color: '#0A0A0A', marginBottom: 8 }}>
        Knowledge Network: Vancouver Training (March 15, 2026)
      </h3>
      <p style={{ fontSize: 14, fontWeight: 300, color: '#1E3A5F', marginBottom: 24 }}>
        Tracking: person_event → person_organization → case
      </p>

      <div style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: 24
      }}>
        <div style={{
          background: '#0B1F33',
          color: '#FFFFFF',
          padding: '16px 32px',
          borderRadius: 8,
          textAlign: 'center'
        }}>
          <div style={{ fontSize: 18, fontWeight: 700 }}>Original Training</div>
          <div style={{ fontSize: 14, fontWeight: 300 }}>45 people attended</div>
        </div>

        <Icon name="arrow_downward" size={32} color="#4FD1C5" />

        <div style={{ display: 'flex', gap: 24, flexWrap: 'wrap', justifyContent: 'center' }}>
          {[
            { icon: 'business', title: '15 Organizations', sub: 'trained others', result: '127 people reached 2°' },
            { icon: 'person', title: '23 Individuals', sub: 'changed practice', result: 'Policy changes implemented' },
            { icon: 'rocket_launch', title: '7 Initiatives', sub: 'launched', result: 'Community-wide improvements' }
          ].map((item, i) => (
            <div key={i} style={{
              background: '#FFFFFF',
              border: '2px solid #1E3A5F',
              borderRadius: 8,
              padding: 20,
              textAlign: 'center',
              minWidth: 180
            }}>
              <Icon name={item.icon} size={32} color="#1E3A5F" />
              <div style={{ fontSize: 16, fontWeight: 700, color: '#0A0A0A', marginTop: 8 }}>{item.title}</div>
              <div style={{ fontSize: 12, fontWeight: 300, color: '#1E3A5F' }}>{item.sub}</div>
              <div style={{
                marginTop: 12,
                paddingTop: 12,
                borderTop: '1px solid #E5E7EB',
                fontSize: 13,
                color: '#0FB9B1',
                fontWeight: 400
              }}>
                {item.result}
              </div>
            </div>
          ))}
        </div>

        <Icon name="arrow_downward" size={32} color="#4FD1C5" />

        <div style={{ display: 'flex', gap: 24, flexWrap: 'wrap', justifyContent: 'center' }}>
          {[
            { value: '340+', label: 'people reached 3°' },
            { value: '56', label: 'youth served better outcomes' },
            { value: '$890K', label: 'funding secured' }
          ].map((item, i) => (
            <div key={i} style={{
              background: '#F9FAFB',
              border: '1px solid #E5E7EB',
              borderRadius: 8,
              padding: 16,
              textAlign: 'center',
              minWidth: 140
            }}>
              <div style={{ fontSize: 24, fontWeight: 700, color: '#0FB9B1' }}>{item.value}</div>
              <div style={{ fontSize: 12, fontWeight: 300, color: '#1E3A5F' }}>{item.label}</div>
            </div>
          ))}
        </div>
      </div>

      <div style={{
        marginTop: 32,
        background: '#0B1F33',
        borderRadius: 8,
        padding: 20,
        display: 'flex',
        justifyContent: 'space-around',
        flexWrap: 'wrap',
        gap: 16
      }}>
        <div style={{ textAlign: 'center' }}>
          <div style={{ color: '#4FD1C5', fontSize: 14, fontWeight: 300 }}>Multiplier Effect</div>
          <div style={{ color: '#FFFFFF', fontSize: 20, fontWeight: 700 }}>1 training → 512 people impacted</div>
        </div>
        <div style={{ textAlign: 'center' }}>
          <div style={{ color: '#4FD1C5', fontSize: 14, fontWeight: 300 }}>ROI</div>
          <div style={{ color: '#FFFFFF', fontSize: 20, fontWeight: 700 }}>$10,000 → $890,000 (89x)</div>
        </div>
      </div>
    </div>
  );

  const PolicyView = () => (
    <div>
      <div style={{ display: 'flex', gap: 24, marginBottom: 24, flexWrap: 'wrap' }}>
        <div style={{
          background: '#FFFFFF',
          border: '1px solid #E5E7EB',
          borderRadius: 8,
          padding: 20,
          flex: 1,
          minWidth: 200
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 8 }}>
            <Icon name="account_balance" size={24} />
            <span style={{ fontSize: 14, fontWeight: 300, color: '#1E3A5F' }}>Policy Changes (Municipal/Provincial)</span>
          </div>
          <div style={{ fontSize: 36, fontWeight: 700, color: '#0A0A0A' }}>23</div>
        </div>
        <div style={{
          background: '#FFFFFF',
          border: '1px solid #E5E7EB',
          borderRadius: 8,
          padding: 20,
          flex: 1,
          minWidth: 200
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 8 }}>
            <Icon name="corporate_fare" size={24} />
            <span style={{ fontSize: 14, fontWeight: 300, color: '#1E3A5F' }}>Organizational Practice Changes</span>
          </div>
          <div style={{ fontSize: 36, fontWeight: 700, color: '#0A0A0A' }}>67</div>
        </div>
      </div>

      <div style={{ marginBottom: 24 }}>
        <h4 style={{ fontSize: 16, fontWeight: 700, color: '#0A0A0A', marginBottom: 16, display: 'flex', alignItems: 'center', gap: 8 }}>
          <Icon name="gavel" size={20} color="#1E3A5F" />
          Policy Changes
        </h4>

        {[
          {
            status: 'adopted',
            title: 'City of Calgary - Housing First Policy',
            trained: '12 city staff (Feb 2026)',
            outcome: 'Policy adopted June 2026',
            impact: '450 youth eligible for immediate housing',
            case: 'case_45_calgary_housing_policy'
          },
          {
            status: 'adopted',
            title: 'Vancouver - Youth Rapid Rehousing Protocol',
            trained: '8 housing workers (Jan 2026)',
            outcome: 'Protocol implemented March 2026',
            impact: '67% housed within 30 days (was 23%)',
            case: 'case_67_van_rapid_rehousing'
          },
          {
            status: 'progress',
            title: 'Edmonton - Youth Homelessness Prevention Strategy',
            trained: 'Draft policy under review',
            outcome: 'Next milestone: Council vote Sept 2026',
            impact: 'Pending',
            case: 'case_89_edm_prevention_strategy'
          }
        ].map((policy, i) => (
          <div key={i} style={{
            background: '#FFFFFF',
            border: '1px solid #E5E7EB',
            borderRadius: 8,
            padding: 16,
            marginBottom: 12
          }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 12 }}>
              <div style={{ fontSize: 15, fontWeight: 700, color: '#0A0A0A' }}>{policy.title}</div>
              <StatusBadge status={policy.status} />
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: 12 }}>
              <div>
                <div style={{ fontSize: 11, fontWeight: 300, color: '#1E3A5F', textTransform: 'uppercase' }}>Trained</div>
                <div style={{ fontSize: 14, color: '#0A0A0A' }}>{policy.trained}</div>
              </div>
              <div>
                <div style={{ fontSize: 11, fontWeight: 300, color: '#1E3A5F', textTransform: 'uppercase' }}>Outcome</div>
                <div style={{ fontSize: 14, color: '#0A0A0A' }}>{policy.outcome}</div>
              </div>
              <div>
                <div style={{ fontSize: 11, fontWeight: 300, color: '#1E3A5F', textTransform: 'uppercase' }}>Impact</div>
                <div style={{ fontSize: 14, color: '#0A0A0A' }}>{policy.impact}</div>
              </div>
            </div>
            <div style={{ marginTop: 12, fontSize: 12, color: '#1E3A5F', fontWeight: 300 }}>
              <Icon name="link" size={14} color="#1E3A5F" /> {policy.case}
            </div>
          </div>
        ))}
      </div>

      <div style={{
        background: '#F9FAFB',
        border: '1px solid #E5E7EB',
        borderRadius: 8,
        padding: 20
      }}>
        <h4 style={{ fontSize: 14, fontWeight: 700, color: '#0A0A0A', marginBottom: 16, display: 'flex', alignItems: 'center', gap: 8 }}>
          <Icon name="bar_chart" size={20} color="#1E3A5F" />
          Aggregate Impact
        </h4>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: 16 }}>
          <div>
            <div style={{ fontSize: 24, fontWeight: 700, color: '#0FB9B1' }}>23</div>
            <div style={{ fontSize: 13, color: '#1E3A5F', fontWeight: 300 }}>policy/practice changes from 45 training events</div>
          </div>
          <div>
            <div style={{ fontSize: 24, fontWeight: 700, color: '#0FB9B1' }}>51%</div>
            <div style={{ fontSize: 13, color: '#1E3A5F', fontWeight: 300 }}>conversion rate (events → policy change)</div>
          </div>
          <div>
            <div style={{ fontSize: 24, fontWeight: 700, color: '#0FB9B1' }}>4.2 mo</div>
            <div style={{ fontSize: 13, color: '#1E3A5F', fontWeight: 300 }}>average time to adoption</div>
          </div>
          <div>
            <div style={{ fontSize: 24, fontWeight: 700, color: '#0FB9B1' }}>8,234</div>
            <div style={{ fontSize: 13, color: '#1E3A5F', fontWeight: 300 }}>youth directly impacted</div>
          </div>
        </div>
      </div>
    </div>
  );

  const CapacityView = () => {
    const timeline = [
      { date: 'Jan 2026', icon: 'school', title: 'Staff Training Event', items: ['8 staff trained in Housing First', 'Assessment: Capacity Score 2.5/5'] },
      { date: 'Mar 2026', icon: 'description', title: 'Policy Adoption', items: ['Trauma-informed intake implemented', 'New partnership with BC Housing'] },
      { date: 'Apr 2026', icon: 'payments', title: 'Funding Secured', items: ['$450K provincial grant awarded', 'Cited AWHC training as key factor'] },
      { date: 'Jun 2026', icon: 'record_voice_over', title: 'Became Trainer', items: ['Trained 23 peer organizations', 'Knowledge dissemination'] },
      { date: 'Aug 2026', icon: 'insights', title: 'Outcome Measurement', items: ['Youth housed: 156 (was 67)', 'Time to housing: 18 days (was 45)', 'Capacity Score: 4.2/5 ⬆'] },
      { date: 'Nov 2026', icon: 'military_tech', title: 'Systems Leadership', items: ['Leading regional coalition', 'Influencing provincial policy'] }
    ];

    const capacityMetrics = [
      { dimension: 'Staff Training', before: 2.0, current: 4.5, change: '+125%' },
      { dimension: 'Policies', before: 1.5, current: 4.0, change: '+167%' },
      { dimension: 'Partnerships', before: 3.0, current: 4.8, change: '+60%' },
      { dimension: 'Service Quality', before: 2.5, current: 4.2, change: '+68%' },
      { dimension: 'Youth Outcomes', before: 2.8, current: 4.5, change: '+61%' }
    ];

    return (
      <div>
        <h3 style={{ fontSize: 18, fontWeight: 700, color: '#0A0A0A', marginBottom: 8 }}>
          Calgary Youth Services - Capacity Growth Timeline
        </h3>
        <p style={{ fontSize: 14, fontWeight: 300, color: '#1E3A5F', marginBottom: 24 }}>
          Tracked via: organization_case + event_organization + outcomes
        </p>

        <div style={{ display: 'flex', gap: 32, flexWrap: 'wrap' }}>
          <div style={{ flex: 1, minWidth: 300 }}>
            <h4 style={{ fontSize: 14, fontWeight: 700, color: '#1E3A5F', marginBottom: 16 }}>Timeline</h4>
            <div style={{ position: 'relative', paddingLeft: 24 }}>
              <div style={{
                position: 'absolute',
                left: 7,
                top: 0,
                bottom: 0,
                width: 2,
                background: '#E5E7EB'
              }} />
              {timeline.map((event, i) => (
                <div key={i} style={{
                  position: 'relative',
                  marginBottom: 24,
                  paddingLeft: 24
                }}>
                  <div style={{
                    position: 'absolute',
                    left: -17,
                    top: 0,
                    width: 16,
                    height: 16,
                    borderRadius: '50%',
                    background: '#0FB9B1',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                  }}>
                    <div style={{ width: 8, height: 8, borderRadius: '50%', background: '#FFFFFF' }} />
                  </div>
                  <div style={{ fontSize: 12, fontWeight: 300, color: '#1E3A5F', marginBottom: 4 }}>{event.date}</div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 8 }}>
                    <Icon name={event.icon} size={18} />
                    <span style={{ fontSize: 15, fontWeight: 700, color: '#0A0A0A' }}>{event.title}</span>
                  </div>
                  {event.items.map((item, j) => (
                    <div key={j} style={{ fontSize: 13, color: '#0A0A0A', marginBottom: 2 }}>• {item}</div>
                  ))}
                </div>
              ))}
            </div>
          </div>

          <div style={{ flex: 1, minWidth: 300 }}>
            <h4 style={{ fontSize: 14, fontWeight: 700, color: '#1E3A5F', marginBottom: 16 }}>Capacity Metrics</h4>
            <div style={{
              background: '#FFFFFF',
              border: '1px solid #E5E7EB',
              borderRadius: 8,
              overflow: 'hidden'
            }}>
              <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: 14 }}>
                <thead>
                  <tr style={{ background: '#F9FAFB' }}>
                    <th style={{ padding: 12, textAlign: 'left', fontWeight: 400, color: '#1E3A5F' }}>Dimension</th>
                    <th style={{ padding: 12, textAlign: 'center', fontWeight: 400, color: '#1E3A5F' }}>Before</th>
                    <th style={{ padding: 12, textAlign: 'center', fontWeight: 400, color: '#1E3A5F' }}>Current</th>
                    <th style={{ padding: 12, textAlign: 'right', fontWeight: 400, color: '#1E3A5F' }}>Change</th>
                  </tr>
                </thead>
                <tbody>
                  {capacityMetrics.map((row, i) => (
                    <tr key={i} style={{ borderTop: '1px solid #E5E7EB' }}>
                      <td style={{ padding: 12, color: '#0A0A0A' }}>{row.dimension}</td>
                      <td style={{ padding: 12, textAlign: 'center', color: '#1E3A5F' }}>{row.before}/5</td>
                      <td style={{ padding: 12, textAlign: 'center', color: '#0A0A0A', fontWeight: 700 }}>{row.current}/5</td>
                      <td style={{ padding: 12, textAlign: 'right', color: '#0FB9B1' }}>{row.change}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div style={{
              marginTop: 16,
              background: '#0B1F33',
              borderRadius: 8,
              padding: 16,
              textAlign: 'center'
            }}>
              <div style={{ color: '#4FD1C5', fontSize: 12, fontWeight: 300, marginBottom: 4 }}>Overall Capacity</div>
              <div style={{ color: '#FFFFFF', fontSize: 24, fontWeight: 700 }}>
                2.5/5 → 4.4/5 <span style={{ color: '#0FB9B1' }}>(+76%)</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };

  const StoriesView = () => (
    <div>
      <h3 style={{ fontSize: 18, fontWeight: 700, color: '#0A0A0A', marginBottom: 24 }}>
        Stories of Systems Change
      </h3>

      <div style={{
        background: '#FFFFFF',
        border: '1px solid #E5E7EB',
        borderRadius: 8,
        overflow: 'hidden'
      }}>
        <div style={{
          background: 'linear-gradient(to right, #0B1F33, #0FB9B1)',
          padding: 20
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 8 }}>
            <Icon name="emoji_events" size={28} color="#FFFFFF" />
            <span style={{ fontSize: 20, fontWeight: 700, color: '#FFFFFF' }}>Calgary Housing First Implementation</span>
          </div>
          <div style={{ display: 'flex', gap: 16, flexWrap: 'wrap' }}>
            <span style={{ fontSize: 13, color: '#4FD1C5' }}>Type: Municipal Policy Change</span>
            <span style={{ fontSize: 13, color: '#4FD1C5' }}>Timeline: Jan 2026 - Present</span>
          </div>
        </div>

        <div style={{ padding: 24 }}>
          <blockquote style={{
            margin: 0,
            padding: '16px 20px',
            background: '#F9FAFB',
            borderLeft: '4px solid #0FB9B1',
            fontSize: 15,
            fontStyle: 'italic',
            color: '#0A0A0A',
            lineHeight: 1.6
          }}>
            "After AWHC's training in February, our housing team completely transformed our approach. Within 3 months, we had City Council approval for a Housing First policy. 450 youth are now eligible for immediate housing without pre-conditions. We're seeing 67% of youth housed within 30 days, compared to 23% before. This isn't just program change - this is systems change."
          </blockquote>
          <p style={{ fontSize: 14, color: '#1E3A5F', marginTop: 8, marginBottom: 24 }}>
            — Sarah Johnson, Director, Calgary Housing Authority
          </p>

          <h4 style={{ fontSize: 14, fontWeight: 700, color: '#1E3A5F', marginBottom: 12, display: 'flex', alignItems: 'center', gap: 8 }}>
            <Icon name="analytics" size={18} color="#1E3A5F" />
            Key Impact Metrics
          </h4>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))', gap: 12, marginBottom: 24 }}>
            {[
              { value: '450', label: 'youth newly eligible' },
              { value: '67%', label: 'housed within 30 days (was 23%)' },
              { value: '$2.1M', label: 'budget allocation approved' },
              { value: '5', label: 'cities replicating model' }
            ].map((m, i) => (
              <div key={i} style={{
                background: '#F9FAFB',
                padding: 12,
                borderRadius: 6,
                textAlign: 'center'
              }}>
                <div style={{ fontSize: 22, fontWeight: 700, color: '#0FB9B1' }}>{m.value}</div>
                <div style={{ fontSize: 12, color: '#1E3A5F', fontWeight: 300 }}>{m.label}</div>
              </div>
            ))}
          </div>

          <h4 style={{ fontSize: 14, fontWeight: 700, color: '#1E3A5F', marginBottom: 12, display: 'flex', alignItems: 'center', gap: 8 }}>
            <Icon name="link" size={18} color="#1E3A5F" />
            Linked Data
          </h4>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
            {[
              { icon: 'event', label: 'evt_2026_002_calgary_training' },
              { icon: 'folder', label: 'case_45_calgary_housing_policy' },
              { icon: 'people', label: '12 trained staff' },
              { icon: 'business', label: 'Calgary Housing Authority, City of Calgary' },
              { icon: 'check_circle', label: '8 documented outcomes' }
            ].map((link, i) => (
              <span key={i} style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: 4,
                padding: '6px 10px',
                background: '#F9FAFB',
                border: '1px solid #E5E7EB',
                borderRadius: 4,
                fontSize: 12,
                color: '#1E3A5F'
              }}>
                <Icon name={link.icon} size={14} color="#1E3A5F" />
                {link.label}
              </span>
            ))}
          </div>
        </div>

        <div style={{
          borderTop: '1px solid #E5E7EB',
          padding: 16,
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center'
        }}>
          <button style={{
            background: 'none',
            border: 'none',
            display: 'flex',
            alignItems: 'center',
            gap: 4,
            color: '#1E3A5F',
            cursor: 'pointer',
            fontSize: 14,
            fontFamily: 'Lato, sans-serif'
          }}>
            <Icon name="arrow_back" size={18} color="#1E3A5F" />
            Previous Story
          </button>
          <span style={{ fontSize: 14, color: '#1E3A5F' }}>3 of 23</span>
          <button style={{
            background: 'none',
            border: 'none',
            display: 'flex',
            alignItems: 'center',
            gap: 4,
            color: '#1E3A5F',
            cursor: 'pointer',
            fontSize: 14,
            fontFamily: 'Lato, sans-serif'
          }}>
            Next Story
            <Icon name="arrow_forward" size={18} color="#1E3A5F" />
          </button>
        </div>
      </div>
    </div>
  );

  const GeographicView = () => {
    const [hoveredCity, setHoveredCity] = useState(null);

    const cities = [
      { id: 'vancouver', name: 'Vancouver, BC', trainings: 23, housed: '67%', policy: 'Adopted', youthServed: 890, funding: '$1.8M', cx: 82, cy: 195 },
      { id: 'victoria', name: 'Victoria, BC', trainings: 8, housed: '54%', policy: 'In Progress', youthServed: 234, funding: '$420K', cx: 65, cy: 215 },
      { id: 'calgary', name: 'Calgary, AB', trainings: 12, housed: '67%', policy: 'Adopted', youthServed: 450, funding: '$890K', cx: 205, cy: 205 },
      { id: 'edmonton', name: 'Edmonton, AB', trainings: 10, housed: '45%', policy: 'In Progress', youthServed: 312, funding: '$670K', cx: 210, cy: 155 },
      { id: 'regina', name: 'Regina, SK', trainings: 6, housed: '38%', policy: 'Piloting', youthServed: 156, funding: '$280K', cx: 320, cy: 200 },
      { id: 'winnipeg', name: 'Winnipeg, MB', trainings: 5, housed: '32%', policy: 'Planning', youthServed: 98, funding: '$140K', cx: 430, cy: 195 }
    ];

    const getColor = (policy) => {
      if (policy === 'Adopted') return '#0FB9B1';
      if (policy === 'In Progress') return '#4FD1C5';
      return '#1E3A5F';
    };

    return (
      <div>
        <h3 style={{ fontSize: 18, fontWeight: 700, color: '#0A0A0A', marginBottom: 8 }}>
          Geographic Impact: Youth Homelessness Prevention
        </h3>
        <p style={{ fontSize: 14, fontWeight: 300, color: '#1E3A5F', marginBottom: 24 }}>
          Source: event_geography + case_geography + outcomes
        </p>

        <div style={{ display: 'flex', gap: 24, flexWrap: 'wrap' }}>
          <div style={{ flex: 2, minWidth: 500 }}>
            <div style={{
              background: '#F9FAFB',
              borderRadius: 8,
              padding: 24,
              border: '1px solid #E5E7EB'
            }}>
              <svg viewBox="0 0 520 280" style={{ width: '100%', height: 'auto' }}>
                {/* Province shapes - simplified Western Canada */}
                <g fill="#E5E7EB" stroke="#FFFFFF" strokeWidth="2">
                  {/* British Columbia */}
                  <path d="M40,80 L120,60 L140,120 L130,180 L100,220 L60,230 L40,200 L30,140 Z" />
                  {/* Alberta */}
                  <path d="M140,70 L230,70 L230,230 L140,230 L140,120 Z" />
                  {/* Saskatchewan */}
                  <path d="M230,70 L350,70 L350,230 L230,230 Z" />
                  {/* Manitoba */}
                  <path d="M350,70 L480,70 L480,230 L350,230 Z" />
                </g>

                {/* Province labels */}
                <text x="85" y="150" fontSize="11" fill="#1E3A5F" fontFamily="Lato" fontWeight="300" textAnchor="middle">BC</text>
                <text x="185" y="130" fontSize="11" fill="#1E3A5F" fontFamily="Lato" fontWeight="300" textAnchor="middle">AB</text>
                <text x="290" y="130" fontSize="11" fill="#1E3A5F" fontFamily="Lato" fontWeight="300" textAnchor="middle">SK</text>
                <text x="415" y="130" fontSize="11" fill="#1E3A5F" fontFamily="Lato" fontWeight="300" textAnchor="middle">MB</text>

                {/* City markers */}
                {cities.map((city) => (
                  <g
                    key={city.id}
                    onMouseEnter={() => setHoveredCity(city.id)}
                    onMouseLeave={() => setHoveredCity(null)}
                    style={{ cursor: 'pointer' }}
                  >
                    {/* Pulse animation ring */}
                    <circle
                      cx={city.cx}
                      cy={city.cy}
                      r={city.trainings + 8}
                      fill={getColor(city.policy)}
                      opacity={hoveredCity === city.id ? 0.2 : 0.1}
                    />
                    {/* Main marker */}
                    <circle
                      cx={city.cx}
                      cy={city.cy}
                      r={Math.max(8, city.trainings * 0.8)}
                      fill={getColor(city.policy)}
                      stroke="#FFFFFF"
                      strokeWidth="2"
                    />
                    {/* Training count */}
                    <text
                      x={city.cx}
                      y={city.cy + 4}
                      fontSize="10"
                      fill="#FFFFFF"
                      fontFamily="Lato"
                      fontWeight="700"
                      textAnchor="middle"
                    >
                      {city.trainings}
                    </text>
                    {/* City label */}
                    <text
                      x={city.cx}
                      y={city.cy + Math.max(18, city.trainings * 0.8 + 12)}
                      fontSize="10"
                      fill="#0A0A0A"
                      fontFamily="Lato"
                      fontWeight="400"
                      textAnchor="middle"
                    >
                      {city.name.split(',')[0]}
                    </text>
                  </g>
                ))}

                {/* Legend */}
                <g transform="translate(20, 250)">
                  <circle cx="8" cy="0" r="6" fill="#0FB9B1" />
                  <text x="20" y="4" fontSize="10" fill="#1E3A5F" fontFamily="Lato">Adopted</text>
                  <circle cx="88" cy="0" r="6" fill="#4FD1C5" />
                  <text x="100" y="4" fontSize="10" fill="#1E3A5F" fontFamily="Lato">In Progress</text>
                  <circle cx="188" cy="0" r="6" fill="#1E3A5F" />
                  <text x="200" y="4" fontSize="10" fill="#1E3A5F" fontFamily="Lato">Early Stage</text>
                </g>
              </svg>
            </div>

            {/* City detail cards */}
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
              gap: 12,
              marginTop: 16
            }}>
              {cities.map((city) => (
                <div
                  key={city.id}
                  style={{
                    background: hoveredCity === city.id ? '#F9FAFB' : '#FFFFFF',
                    border: `1px solid ${hoveredCity === city.id ? getColor(city.policy) : '#E5E7EB'}`,
                    borderRadius: 8,
                    padding: 16,
                    transition: 'all 0.2s'
                  }}
                  onMouseEnter={() => setHoveredCity(city.id)}
                  onMouseLeave={() => setHoveredCity(null)}
                >
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 12 }}>
                    <div>
                      <div style={{ fontSize: 15, fontWeight: 700, color: '#0A0A0A' }}>{city.name}</div>
                      <div style={{
                        fontSize: 11,
                        color: getColor(city.policy),
                        fontWeight: 400,
                        marginTop: 2
                      }}>
                        {city.policy}
                      </div>
                    </div>
                    <div style={{
                      width: 32,
                      height: 32,
                      borderRadius: '50%',
                      background: getColor(city.policy),
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: '#FFFFFF',
                      fontSize: 13,
                      fontWeight: 700
                    }}>
                      {city.trainings}
                    </div>
                  </div>
                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 8 }}>
                    <div>
                      <div style={{ fontSize: 11, color: '#1E3A5F', fontWeight: 300 }}>Housed &lt;30d</div>
                      <div style={{ fontSize: 16, fontWeight: 700, color: '#0A0A0A' }}>{city.housed}</div>
                    </div>
                    <div>
                      <div style={{ fontSize: 11, color: '#1E3A5F', fontWeight: 300 }}>Youth Served</div>
                      <div style={{ fontSize: 16, fontWeight: 700, color: '#0A0A0A' }}>{city.youthServed}</div>
                    </div>
                    <div style={{ gridColumn: '1 / -1' }}>
                      <div style={{ fontSize: 11, color: '#1E3A5F', fontWeight: 300 }}>Funding Secured</div>
                      <div style={{ fontSize: 16, fontWeight: 700, color: '#0FB9B1' }}>{city.funding}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div style={{ flex: 1, minWidth: 280 }}>
            <div style={{
              background: '#0B1F33',
              borderRadius: 8,
              padding: 24,
              color: '#FFFFFF',
              marginBottom: 16
            }}>
              <div style={{ fontSize: 14, fontWeight: 300, color: '#4FD1C5', marginBottom: 16 }}>Regional Summary</div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
                {[
                  { value: '64', label: 'training events', icon: 'school' },
                  { value: '15', label: 'policy changes', icon: 'gavel' },
                  { value: '2,140', label: 'youth served', icon: 'people' },
                  { value: '89', label: 'organizations', icon: 'business' },
                  { value: '$4.2M', label: 'funding secured', icon: 'payments' }
                ].map((s, i) => (
                  <div key={i} style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
                    <Icon name={s.icon} size={20} color="#4FD1C5" />
                    <div style={{ flex: 1 }}>
                      <div style={{ fontSize: 24, fontWeight: 700 }}>{s.value}</div>
                      <div style={{ fontSize: 12, fontWeight: 300, color: '#4FD1C5' }}>{s.label}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div style={{
              background: '#FFFFFF',
              border: '1px solid #E5E7EB',
              borderRadius: 8,
              padding: 20
            }}>
              <div style={{ fontSize: 14, fontWeight: 700, color: '#0A0A0A', marginBottom: 16 }}>Policy Adoption Progress</div>
              {[
                { label: 'Adopted', count: 2, total: 6 },
                { label: 'In Progress', count: 2, total: 6 },
                { label: 'Early Stage', count: 2, total: 6 }
              ].map((item, i) => (
                <div key={i} style={{ marginBottom: 12 }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 4 }}>
                    <span style={{ fontSize: 13, color: '#1E3A5F' }}>{item.label}</span>
                    <span style={{ fontSize: 13, color: '#0A0A0A', fontWeight: 700 }}>{item.count} cities</span>
                  </div>
                  <div style={{ height: 6, background: '#E5E7EB', borderRadius: 3 }}>
                    <div style={{
                      width: `${(item.count / item.total) * 100}%`,
                      height: '100%',
                      background: i === 0 ? '#0FB9B1' : i === 1 ? '#4FD1C5' : '#1E3A5F',
                      borderRadius: 3
                    }} />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  };

  const CohortView = () => {
    const timePoints = ['Pre-Training', 'Post-Training', '3 Month', '6 Month', '12 Month'];
    const metrics = [
      { label: 'Knowledge', values: [45, 88, 84, 86, 89], color: '#1E3A5F' },
      { label: 'Confidence', values: [32, 76, 81, 87, 91], color: '#0FB9B1' },
      { label: 'Practice', values: [null, null, 67, 78, 82], color: '#4FD1C5' },
      { label: 'Sustained', values: [null, null, null, 56, 73], color: '#102A43' }
    ];

    const cascadeData = [
      { value: '89', percent: '70%', label: 'Trained others in their organization', result: '340 people reached', icon: 'record_voice_over' },
      { value: '45', percent: '35%', label: 'Changed organizational policy', result: 'Policy adoption', icon: 'policy' },
      { value: '23', percent: '18%', label: 'Launched new programs', result: 'New services', icon: 'rocket_launch' },
      { value: '67', percent: '53%', label: 'Secured new funding', result: '$2.3M total', icon: 'payments' }
    ];

    return (
      <div>
        <h3 style={{ fontSize: 18, fontWeight: 700, color: '#0A0A0A', marginBottom: 8 }}>
          Cohort Analysis: Jan-Mar 2026 Training Participants
        </h3>
        <p style={{ fontSize: 14, fontWeight: 300, color: '#1E3A5F', marginBottom: 24 }}>
          Following 127 people across 45 organizations
        </p>

        <div style={{ marginBottom: 32 }}>
          <h4 style={{ fontSize: 14, fontWeight: 700, color: '#1E3A5F', marginBottom: 16, display: 'flex', alignItems: 'center', gap: 8 }}>
            <Icon name="show_chart" size={18} color="#1E3A5F" />
            Knowledge & Practice Adoption Over Time
          </h4>

          <div style={{
            background: '#FFFFFF',
            border: '1px solid #E5E7EB',
            borderRadius: 8,
            overflow: 'hidden'
          }}>
            {/* Header row */}
            <div style={{
              display: 'grid',
              gridTemplateColumns: '140px repeat(5, 1fr)',
              background: '#F9FAFB',
              borderBottom: '1px solid #E5E7EB'
            }}>
              <div style={{ padding: '12px 16px', fontSize: 12, fontWeight: 700, color: '#1E3A5F' }}>Metric</div>
              {timePoints.map((tp, i) => (
                <div key={i} style={{
                  padding: '12px 8px',
                  fontSize: 11,
                  fontWeight: 400,
                  color: '#1E3A5F',
                  textAlign: 'center',
                  borderLeft: '1px solid #E5E7EB'
                }}>
                  {tp}
                </div>
              ))}
            </div>

            {/* Data rows */}
            {metrics.map((metric, rowIdx) => (
              <div
                key={rowIdx}
                style={{
                  display: 'grid',
                  gridTemplateColumns: '140px repeat(5, 1fr)',
                  borderBottom: rowIdx < metrics.length - 1 ? '1px solid #E5E7EB' : 'none'
                }}
              >
                <div style={{
                  padding: '16px',
                  fontSize: 14,
                  fontWeight: 400,
                  color: '#0A0A0A',
                  display: 'flex',
                  alignItems: 'center',
                  gap: 8
                }}>
                  <div style={{ width: 12, height: 12, borderRadius: 2, background: metric.color }} />
                  {metric.label}
                </div>
                {metric.values.map((val, colIdx) => (
                  <div
                    key={colIdx}
                    style={{
                      padding: '12px 8px',
                      borderLeft: '1px solid #E5E7EB',
                      display: 'flex',
                      flexDirection: 'column',
                      alignItems: 'center',
                      justifyContent: 'center',
                      gap: 6
                    }}
                  >
                    {val !== null ? (
                      <>
                        <div style={{
                          width: '100%',
                          maxWidth: 100,
                          height: 8,
                          background: '#E5E7EB',
                          borderRadius: 4,
                          overflow: 'hidden'
                        }}>
                          <div style={{
                            width: `${val}%`,
                            height: '100%',
                            background: metric.color,
                            borderRadius: 4,
                            transition: 'width 0.3s ease'
                          }} />
                        </div>
                        <span style={{
                          fontSize: 14,
                          fontWeight: 700,
                          color: '#0A0A0A'
                        }}>
                          {val}%
                        </span>
                      </>
                    ) : (
                      <span style={{ fontSize: 13, color: '#E5E7EB' }}>—</span>
                    )}
                  </div>
                ))}
              </div>
            ))}
          </div>

          {/* Trend summary */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))',
            gap: 12,
            marginTop: 16
          }}>
            {[
              { label: 'Knowledge Retention', from: 88, to: 89, trend: 'stable' },
              { label: 'Confidence Growth', from: 32, to: 91, trend: 'up' },
              { label: 'Practice Adoption', from: 67, to: 82, trend: 'up' },
              { label: 'Sustainability Rate', from: 56, to: 73, trend: 'up' }
            ].map((item, i) => (
              <div key={i} style={{
                background: '#F9FAFB',
                border: '1px solid #E5E7EB',
                borderRadius: 6,
                padding: 12
              }}>
                <div style={{ fontSize: 12, color: '#1E3A5F', fontWeight: 300, marginBottom: 4 }}>{item.label}</div>
                <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                  <span style={{ fontSize: 18, fontWeight: 700, color: '#0A0A0A' }}>{item.to}%</span>
                  <span style={{
                    fontSize: 12,
                    color: item.trend === 'up' ? '#0FB9B1' : '#1E3A5F',
                    display: 'flex',
                    alignItems: 'center',
                    gap: 2
                  }}>
                    {item.trend === 'up' && <Icon name="trending_up" size={14} color="#0FB9B1" />}
                    {item.trend === 'up' ? `+${item.to - item.from}%` : 'stable'}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        <h4 style={{ fontSize: 14, fontWeight: 700, color: '#1E3A5F', marginBottom: 16, display: 'flex', alignItems: 'center', gap: 8 }}>
          <Icon name="share" size={18} color="#1E3A5F" />
          Cascading Impact
        </h4>

        <div style={{ display: 'flex', gap: 24, flexWrap: 'wrap' }}>
          <div style={{ flex: 1, minWidth: 300 }}>
            <div style={{
              background: 'linear-gradient(to right, #0B1F33, #1E3A5F)',
              borderRadius: 8,
              padding: 24,
              textAlign: 'center',
              marginBottom: 16
            }}>
              <div style={{ fontSize: 56, fontWeight: 700, color: '#FFFFFF' }}>127</div>
              <div style={{ fontSize: 14, color: '#4FD1C5', fontWeight: 300 }}>Direct Participants</div>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
              {cascadeData.map((item, i) => (
                <div key={i} style={{
                  background: '#FFFFFF',
                  border: '1px solid #E5E7EB',
                  borderRadius: 8,
                  padding: 16,
                  display: 'flex',
                  alignItems: 'center',
                  gap: 16
                }}>
                  <div style={{
                    width: 48,
                    height: 48,
                    borderRadius: 8,
                    background: '#F9FAFB',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                  }}>
                    <Icon name={item.icon} size={24} color="#1E3A5F" />
                  </div>
                  <div style={{ flex: 1 }}>
                    <div style={{ display: 'flex', alignItems: 'baseline', gap: 8, marginBottom: 4 }}>
                      <span style={{ fontSize: 22, fontWeight: 700, color: '#0A0A0A' }}>{item.value}</span>
                      <span style={{ fontSize: 14, color: '#0FB9B1', fontWeight: 400 }}>({item.percent})</span>
                    </div>
                    <div style={{ fontSize: 13, color: '#1E3A5F' }}>{item.label}</div>
                  </div>
                  <div style={{
                    fontSize: 12,
                    color: '#0FB9B1',
                    fontWeight: 400,
                    textAlign: 'right'
                  }}>
                    {item.result}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div style={{ flex: 1, minWidth: 300 }}>
            <div style={{
              background: '#FFFFFF',
              border: '1px solid #E5E7EB',
              borderRadius: 8,
              padding: 20,
              height: '100%'
            }}>
              <h5 style={{ fontSize: 14, fontWeight: 700, color: '#0A0A0A', marginBottom: 16 }}>Ripple Effect Calculation</h5>

              <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
                  <div style={{
                    width: 32,
                    height: 32,
                    borderRadius: '50%',
                    background: '#0B1F33',
                    color: '#FFFFFF',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: 14,
                    fontWeight: 700
                  }}>1°</div>
                  <div style={{ flex: 1 }}>
                    <div style={{ fontSize: 13, color: '#1E3A5F' }}>Direct participants</div>
                    <div style={{ fontSize: 18, fontWeight: 700, color: '#0A0A0A' }}>127 people</div>
                  </div>
                </div>

                <div style={{
                  borderLeft: '2px dashed #E5E7EB',
                  marginLeft: 15,
                  height: 20
                }} />

                <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
                  <div style={{
                    width: 32,
                    height: 32,
                    borderRadius: '50%',
                    background: '#1E3A5F',
                    color: '#FFFFFF',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: 14,
                    fontWeight: 700
                  }}>2°</div>
                  <div style={{ flex: 1 }}>
                    <div style={{ fontSize: 13, color: '#1E3A5F' }}>Secondary reach (trained by participants)</div>
                    <div style={{ fontSize: 18, fontWeight: 700, color: '#0A0A0A' }}>340 people</div>
                  </div>
                </div>

                <div style={{
                  borderLeft: '2px dashed #E5E7EB',
                  marginLeft: 15,
                  height: 20
                }} />

                <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
                  <div style={{
                    width: 32,
                    height: 32,
                    borderRadius: '50%',
                    background: '#0FB9B1',
                    color: '#FFFFFF',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: 14,
                    fontWeight: 700
                  }}>∞</div>
                  <div style={{ flex: 1 }}>
                    <div style={{ fontSize: 13, color: '#1E3A5F' }}>Total reach estimate</div>
                    <div style={{ fontSize: 18, fontWeight: 700, color: '#0FB9B1' }}>467+ people</div>
                  </div>
                </div>
              </div>

              <div style={{
                marginTop: 24,
                padding: 16,
                background: '#F9FAFB',
                borderRadius: 6,
                textAlign: 'center'
              }}>
                <div style={{ fontSize: 12, color: '#1E3A5F', fontWeight: 300, marginBottom: 4 }}>Training Multiplier</div>
                <div style={{ fontSize: 28, fontWeight: 700, color: '#0B1F33' }}>3.7x</div>
                <div style={{ fontSize: 12, color: '#1E3A5F' }}>average reach per participant</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };

  const views = {
    theory: TheoryOfChangeView,
    waterfall: WaterfallView,
    network: NetworkView,
    policy: PolicyView,
    capacity: CapacityView,
    stories: StoriesView,
    geographic: GeographicView,
    cohort: CohortView
  };

  const ActiveView = views[activeView];

  return (
    <div style={{
      fontFamily: "'Lato', sans-serif",
      background: '#FFFFFF',
      minHeight: '100vh'
    }}>
      <link
        href="https://fonts.googleapis.com/css2?family=Lato:wght@300;400;700&display=swap"
        rel="stylesheet"
      />
      <link
        href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200"
        rel="stylesheet"
      />

      <header style={{
        background: 'linear-gradient(to right, #0B1F33, #0FB9B1)',
        padding: '20px 24px'
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
          <Icon name="insights" size={28} color="#FFFFFF" />
          <h1 style={{
            margin: 0,
            fontSize: 22,
            fontWeight: 700,
            color: '#FFFFFF'
          }}>
            Systems Change & Impact Dashboard
          </h1>
        </div>
      </header>

      <nav style={{
        background: '#F9FAFB',
        borderBottom: '1px solid #E5E7EB',
        padding: '0 24px',
        overflowX: 'auto'
      }}>
        <div style={{ display: 'flex', gap: 0 }}>
          {navItems.map(item => (
            <button
              key={item.id}
              onClick={() => setActiveView(item.id)}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: 6,
                padding: '14px 16px',
                background: 'none',
                border: 'none',
                borderBottom: activeView === item.id ? '2px solid #0FB9B1' : '2px solid transparent',
                color: activeView === item.id ? '#0FB9B1' : '#1E3A5F',
                fontSize: 13,
                fontWeight: activeView === item.id ? 700 : 400,
                cursor: 'pointer',
                fontFamily: "'Lato', sans-serif",
                whiteSpace: 'nowrap',
                transition: 'all 0.2s'
              }}
            >
              <Icon
                name={item.icon}
                size={18}
                color={activeView === item.id ? '#0FB9B1' : '#1E3A5F'}
              />
              {item.label}
            </button>
          ))}
        </div>
      </nav>

      <main style={{ padding: 24 }}>
        <ActiveView />
      </main>

      <footer style={{
        borderTop: '1px solid #E5E7EB',
        padding: '16px 24px',
        fontSize: 12,
        fontWeight: 300,
        color: '#1E3A5F',
        textAlign: 'center'
      }}>
        Data source: event_outcome + case_outcome | HelpSeeker Technologies © 2026
      </footer>
    </div>
  );
};
