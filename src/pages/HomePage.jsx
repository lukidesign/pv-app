import StatusBar from '../components/StatusBar'
import BottomNav from '../components/BottomNav'

// Bar chart data (energy generation by day in Feb 2026)
const barData = [
  480, 460, 420, 400, 390, 370, 350, 380, 410, 430,
  450, 470, 440, 420, 400, 380, 360, 390, 420, 481,
  410, 390, 370, 350
]
const maxBar = Math.max(...barData)

const tabs = ['Day', 'Month', 'Year', 'Lifetime']

export default function HomePage() {
  return (
    <div className="flex flex-col h-full bg-[#F5F5F5]">

      {/* Blue gradient header (fixed background) */}
      <div
        className="absolute top-0 left-0 right-0 h-[180px] z-0"
        style={{ background: 'linear-gradient(180deg, #1890FF 0%, #56AEFF 100%)' }}
      />

      {/* Status Bar */}
      <div className="relative z-10 flex-shrink-0">
        <StatusBar dark={false} />
      </div>

      {/* Header content */}
      <div className="relative z-10 flex-shrink-0 px-4 pb-3">
        <p className="text-white text-[18px] font-semibold">Welcome, Zhang Runjian</p>
        <p className="text-white/70 text-[12px] mt-0.5">Thursday, March 12, 2026</p>
      </div>

      {/* Scrollable body */}
      <div
        className="relative z-10 flex-1 overflow-y-auto page-scroll px-4 flex flex-col gap-4"
        style={{ paddingBottom: 16 }}
      >
        {/* Capacity overview card */}
        <div className="bg-white rounded-2xl p-4 shadow-sm mt-2">
          <div className="flex justify-between items-start mb-3">
            <div>
              <p className="text-[22px] font-bold text-[#333]">12.5 <span className="text-[14px] font-normal text-[#999]">MWp</span></p>
              <p className="text-[12px] text-[#999]">Total Capacity</p>
            </div>
            <div className="text-right">
              <p className="text-[22px] font-bold text-[#00B578]">98.2%</p>
              <p className="text-[12px] text-[#999]">Health Rate</p>
            </div>
          </div>
          {/* Progress bar */}
          <div className="h-2 rounded-full bg-[#F0F0F0] mb-4">
            <div className="h-full rounded-full bg-[#00B578]" style={{ width: '98.2%' }} />
          </div>
          {/* Stats row */}
          <div className="grid grid-cols-4 gap-2 text-center">
            {[
              { label: 'Total',   val: '124', color: '#333' },
              { label: 'Normal',  val: '106', color: '#00B578' },
              { label: 'Alarm',   val: '12',  color: '#FF3141' },
              { label: 'Offline', val: '6',   color: '#999' },
            ].map(({ label, val, color }) => (
              <div key={label}>
                <p className="text-[18px] font-bold" style={{ color }}>{val}</p>
                <p className="text-[11px] text-[#999]">{label}</p>
              </div>
            ))}
          </div>
        </div>

        {/* To Do card */}
        <div className="bg-white rounded-2xl p-4 shadow-sm">
          <div className="flex justify-between items-center mb-3">
            <p className="text-[16px] font-semibold text-[#333]">To Do</p>
            <p className="text-[12px] text-[#999] flex items-center gap-1">👁 My Tasks</p>
          </div>

          {/* Overdue alert */}
          <div className="flex items-center justify-between bg-[#FFF8F0] rounded-xl px-3 py-2 mb-4">
            <div className="flex items-center gap-2">
              <span className="text-[#FF3141] text-[16px]">⚠️</span>
              <div>
                <p className="text-[13px] font-medium text-[#FF3141]">10 Overdue Tasks</p>
                <p className="text-[11px] text-[#999]">Requires immediate attention</p>
              </div>
            </div>
            <button className="bg-[#FF3141] text-white text-[12px] font-medium px-3 py-1.5 rounded-full whitespace-nowrap">
              GO TO TASK
            </button>
          </div>

          {/* Defect / Hazard / Inspection */}
          <div className="grid grid-cols-3 gap-3">
            {[
              { label: 'Defect',     val: 2,  add: '+4', color: '#FF3141' },
              { label: 'Hazard',     val: 5,  add: '+8', color: '#FF8C00' },
              { label: 'Inspection', val: 1,  add: '+2', color: '#1890FF' },
            ].map(({ label, val, add, color }) => (
              <div key={label} className="text-center">
                <p className="text-[20px] font-bold" style={{ color }}>{val}</p>
                <p className="text-[11px] text-[#999]">Pending</p>
                <p className="text-[11px] text-[#999]">Today: {add}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Energy Generation card */}
        <div className="bg-white rounded-2xl p-4 shadow-sm">
          <p className="text-[16px] font-semibold text-[#333] mb-3">Energy Generation</p>

          {/* Tabs */}
          <div className="flex gap-1 mb-3">
            {tabs.map((t, i) => (
              <button
                key={t}
                className={`flex-1 py-1 rounded-full text-[12px] font-medium ${
                  i === 0 ? 'bg-[#1890FF]/10 text-[#1890FF]' : 'text-[#999]'
                }`}
              >
                {t}
              </button>
            ))}
          </div>

          {/* Date navigator */}
          <div className="flex items-center justify-between mb-3">
            <button className="text-[#999] text-[16px]">‹</button>
            <span className="text-[13px] text-[#333] flex items-center gap-1">
              2026-02 <span className="text-[10px] text-[#999]">▾</span>
            </span>
            <button className="text-[#999] text-[16px]">›</button>
          </div>

          {/* Date label */}
          <div className="flex items-center gap-2 mb-2">
            <div className="w-2 h-2 rounded-full bg-[#F5A623]" />
            <span className="text-[12px] text-[#333]">02-21</span>
            <span className="text-[12px] font-semibold text-[#333] ml-auto">480.99 MWh</span>
          </div>

          {/* Bar chart */}
          <div className="flex items-end gap-[2px] h-[100px]">
            {barData.map((v, i) => (
              <div
                key={i}
                className="flex-1 rounded-t-sm"
                style={{
                  height: `${(v / maxBar) * 100}%`,
                  background: i === 19 ? '#F5A623' : '#F5A623',
                  opacity: i === 19 ? 1 : 0.5 + (v / maxBar) * 0.4,
                  minWidth: 6,
                }}
              />
            ))}
          </div>
          {/* X axis labels */}
          <div className="flex justify-between mt-1 px-1">
            {['01','03','05','07','09','11','13','15','17','19','21','23','25'].map(d => (
              <span key={d} className="text-[8px] text-[#ccc]">{d}</span>
            ))}
          </div>
        </div>

        {/* Social Contribution card */}
        <div
          className="rounded-2xl p-4 shadow-sm"
          style={{
            background: 'linear-gradient(135deg, #E8F4FF 0%, #D0E8FF 100%)',
          }}
        >
          <div className="flex justify-between items-center mb-4">
            <p className="text-[16px] font-semibold text-[#333]">Social Contribution</p>
            <span className="text-[12px] text-[#999] flex items-center gap-1">2026 ▾</span>
          </div>
          <div className="grid grid-cols-3 gap-2 text-center">
            {[
              { emoji: '⚡', label: 'Coal Saved\n(tec)',      val: '9999.99' },
              { emoji: '🌿', label: 'CO₂ Saved\n(tonne)',    val: '9999.99' },
              { emoji: '🌳', label: 'Trees Planted\n(trees)', val: '9999.99' },
            ].map(({ emoji, label, val }) => (
              <div key={label} className="flex flex-col items-center gap-1">
                <span className="text-[28px]">{emoji}</span>
                <p className="text-[14px] font-bold text-[#333]">{val}</p>
                <p className="text-[10px] text-[#999] whitespace-pre-line leading-tight">{label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <BottomNav />
    </div>
  )
}
