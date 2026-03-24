import StatusBar from '../components/StatusBar'
import BottomNav from '../components/BottomNav'

const menuItems = [
  { icon: '🏠', label: '电站管理', right: null },
  { icon: '⚙️', label: '设备管理', right: null },
  { icon: '✍️', label: '电子签名', right: null },
  { icon: '🔒', label: '修改密码', right: null },
  { icon: '🌐', label: '语言设置', right: '简体中文' },
  { icon: '🔄', label: '检查更新', right: 'v1.0.0' },
]

const quickActions = [
  {
    label: '操作票',
    gradient: 'linear-gradient(135deg, #2298ed, #d3cefd)',
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
        <rect x="4" y="6" width="20" height="16" rx="2" fill="white" fillOpacity="0.9"/>
        <rect x="7" y="10" width="14" height="1.5" rx="0.75" fill="#2298ed"/>
        <rect x="7" y="13" width="10" height="1.5" rx="0.75" fill="#2298ed" fillOpacity="0.6"/>
        <rect x="7" y="16" width="8" height="1.5" rx="0.75" fill="#2298ed" fillOpacity="0.4"/>
      </svg>
    ),
  },
  {
    label: '工作票',
    gradient: 'linear-gradient(135deg, #30bf78, #2ed0cf)',
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
        <rect x="4" y="4" width="20" height="20" rx="3" fill="white" fillOpacity="0.9"/>
        <path d="M9 14l3 3 7-7" stroke="#30bf78" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
  },
  {
    label: '两票审查',
    gradient: 'linear-gradient(135deg, #5f0ffc, #9762ff)',
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
        <circle cx="10" cy="14" r="6" fill="white" fillOpacity="0.6"/>
        <circle cx="18" cy="14" r="6" fill="white" fillOpacity="0.6"/>
        <path d="M14 10.5a6 6 0 010 7" fill="white" fillOpacity="0.4"/>
      </svg>
    ),
  },
]

function ChevronRight() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
      <path d="M6 4l4 4-4 4" stroke="#CCCCCC" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  )
}

export default function ProfilePage() {
  return (
    <div className="flex flex-col bg-[#f0f8fa]" style={{ height: '812px' }}>
      {/* Blue gradient header bg */}
      <div
        className="absolute top-0 left-0 right-0 h-[160px] z-0"
        style={{ background: 'linear-gradient(180deg, #1890FF 0%, #63B3FF 60%, #f0f8fa 100%)' }}
      />

      {/* Status bar */}
      <div className="relative z-10 flex-shrink-0">
        <StatusBar dark={false} />
      </div>

      {/* Scrollable content */}
      <div className="relative z-10 flex-1 overflow-y-auto">
        {/* Profile header */}
        <div className="px-4 pb-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              {/* Avatar */}
              <div
                className="w-16 h-16 rounded-full border-2 overflow-hidden flex-shrink-0 bg-blue-100"
                style={{ borderColor: '#1890ff' }}
              >
                <div className="w-full h-full flex items-center justify-center bg-gradient-to-b from-blue-300 to-blue-500">
                  <svg width="36" height="36" viewBox="0 0 36 36" fill="none">
                    <circle cx="18" cy="13" r="7" fill="white" fillOpacity="0.9"/>
                    <path d="M4 34c0-7.7 6.3-14 14-14s14 6.3 14 14" fill="white" fillOpacity="0.7"/>
                  </svg>
                </div>
              </div>
              {/* Name & title */}
              <div>
                <div className="text-white font-semibold text-[20px] leading-tight">张润建</div>
                <div className="text-white text-[14px] opacity-80 mt-0.5">运维主管</div>
              </div>
            </div>
            {/* Right side: badge + gear */}
            <div className="flex items-center gap-2">
              <div
                className="px-2 py-1 rounded-full text-[11px] font-medium text-white flex items-center gap-1"
                style={{ background: 'linear-gradient(90deg, #FF8C00, #FFA940)' }}
              >
                <span>润建新能.</span>
              </div>
              <button className="w-8 h-8 flex items-center justify-center rounded-full bg-white bg-opacity-20">
                <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                  <path d="M9 11.5a2.5 2.5 0 100-5 2.5 2.5 0 000 5z" stroke="white" strokeWidth="1.5"/>
                  <path d="M7.5 2h3l.5 1.5 1.5.87 1.5-.5 2.12 2.12-.5 1.5.87 1.5L17.5 9v3l-1.5.5-.87 1.5.5 1.5-2.12 2.12-1.5-.5-1.5.87L10.5 17h-3l-.5-1.5-1.5-.87-1.5.5L1.88 12.63l.5-1.5-.87-1.5L.5 9V6l1.5-.5.87-1.5-.5-1.5L4.5 2.38l1.5.5 1.5-.87L7.5 2z" stroke="white" strokeWidth="1.3" strokeLinejoin="round"/>
                </svg>
              </button>
            </div>
          </div>
        </div>

        {/* Quick action cards */}
        <div className="mx-4 mb-3 bg-white rounded-2xl p-4">
          <div className="grid grid-cols-3 gap-2">
            {quickActions.map(({ label, gradient, icon }) => (
              <button key={label} className="flex flex-col items-center gap-2">
                <div
                  className="w-14 h-14 rounded-2xl flex items-center justify-center"
                  style={{ background: gradient }}
                >
                  {icon}
                </div>
                <span className="text-[13px] text-[#333]">{label}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Settings menu */}
        <div className="mx-4 mb-3 bg-white rounded-2xl overflow-hidden">
          {menuItems.map(({ icon, label, right }, i) => (
            <button
              key={label}
              className="w-full flex items-center justify-between px-4 h-[52px] text-left"
              style={{ borderTop: i > 0 ? '1px solid #EEEEEE' : 'none' }}
            >
              <div className="flex items-center gap-3">
                <span className="text-[18px]">{icon}</span>
                <span className="text-[15px] text-[#333]">{label}</span>
              </div>
              <div className="flex items-center gap-1">
                {right && <span className="text-[13px] text-[#999]">{right}</span>}
                <ChevronRight />
              </div>
            </button>
          ))}
        </div>

        {/* Logout button */}
        <div className="mx-4 mb-3">
          <button className="w-full h-[44px] rounded-full border border-[#EEEEEE] bg-white text-[15px] text-[#333]">
            注销
          </button>
        </div>

        {/* ICP footer */}
        <div className="text-center text-[12px] text-[#999] pb-4">
          桂CP备10005040号-13A
        </div>
      </div>

      {/* Bottom nav */}
      <BottomNav />
    </div>
  )
}
