import { useNavigate, useLocation } from 'react-router-dom'

// SVG icons (simplified from Figma)
function HomeIcon({ active }) {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
      <path
        d="M3 9.5L12 3L21 9.5V20C21 20.55 20.55 21 20 21H15V15H9V21H4C3.45 21 3 20.55 3 20V9.5Z"
        fill={active ? 'white' : '#999'}
      />
    </svg>
  )
}

function MonitorIcon({ active }) {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
      <rect x="2" y="4" width="16" height="12" rx="2" stroke={active ? 'white' : '#999'} strokeWidth="1.5" fill="none"/>
      <path d="M6 20H14M10 16V20" stroke={active ? 'white' : '#999'} strokeWidth="1.5" strokeLinecap="round"/>
      <path d="M18 8L22 6V18L18 16" stroke={active ? 'white' : '#999'} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  )
}

function MaintainIcon({ active }) {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
      <rect x="4" y="3" width="12" height="16" rx="1.5" stroke={active ? 'white' : '#999'} strokeWidth="1.5" fill="none"/>
      <path d="M7 7H13M7 10H13M7 13H10" stroke={active ? 'white' : '#999'} strokeWidth="1.5" strokeLinecap="round"/>
    </svg>
  )
}

function ProfileIcon({ active }) {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
      <circle cx="12" cy="8" r="4" stroke={active ? 'white' : '#999'} strokeWidth="1.5" fill="none"/>
      <path d="M4 20C4 16.686 7.582 14 12 14C16.418 14 20 16.686 20 20" stroke={active ? 'white' : '#999'} strokeWidth="1.5" strokeLinecap="round"/>
    </svg>
  )
}

const tabs = [
  { path: '/home',    label: '首页', Icon: HomeIcon },
  { path: '/monitor', label: '监测', Icon: MonitorIcon },
  { path: '/maintain', label: '运维', Icon: MaintainIcon },
  { path: '/profile', label: '我的', Icon: ProfileIcon },
]

export default function BottomNav() {
  const navigate = useNavigate()
  const { pathname } = useLocation()

  return (
    <div className="flex-shrink-0 px-4 pb-4 pt-2 bg-white relative z-20" style={{ backgroundColor: '#ffffff' }}>
      <div
        className="rounded-[100px] bg-white"
        style={{ boxShadow: '4px 8px 8px 0px rgba(0,88,169,0.1)' }}
      >
        <div className="flex items-center justify-between px-4 h-[60px]">
          {tabs.map(({ path, label, Icon }) => {
            const active = pathname === path
            return (
              <button
                key={path}
                onClick={() => navigate(path)}
                className={`flex items-center gap-1 px-3 py-1 rounded-[100px] transition-all ${
                  active ? 'text-white' : 'text-[#999]'
                }`}
                style={active ? {
                  background: 'linear-gradient(90deg, #86C5FF 0%, #1890FF 50%, #1978FF 100%)'
                } : {}}
              >
                <Icon active={active} />
                {active && (
                  <span className="text-[12px] text-white whitespace-nowrap">{label}</span>
                )}
              </button>
            )
          })}
        </div>
      </div>
    </div>
  )
}
