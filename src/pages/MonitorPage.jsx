import StatusBar from '../components/StatusBar'
import BottomNav from '../components/BottomNav'

// Figma image assets
const imgWarehouse   = 'https://www.figma.com/api/mcp/asset/b75274af-5484-4599-a434-a9e7c080d940'
const imgRoof1       = 'https://www.figma.com/api/mcp/asset/60699a62-eba2-49d1-a079-cd34bdc1e7fe'
const imgRoof2       = 'https://www.figma.com/api/mcp/asset/721a8a78-27b4-45bb-89d0-0b20e1a0328c'
const imgStation4    = 'https://www.figma.com/api/mcp/asset/4fa60002-d400-478c-b933-337e907a700b'
const imgStation5    = 'https://www.figma.com/api/mcp/asset/f94fb0a4-31e0-4a3d-9e06-39fb28f81371'

const stations = [
  {
    id: 1,
    name: '祥鑫科技分布式光伏电站',
    capacity: '1279.365 kWp',
    energy: '247.32 kWh',
    power: '120.19 kW',
    devices: 14,
    status: 'Alarm',
    img: imgWarehouse,
  },
  {
    id: 2,
    name: 'Lor Tian Sang',
    capacity: '6.6 kWp',
    energy: '6.01 kWh',
    power: '4.80 kW',
    devices: 3,
    status: 'Alarm',
    img: imgRoof1,
  },
  {
    id: 3,
    name: 'Kipmall Melaka',
    capacity: '1101.11 kWp',
    energy: '3.73 MWh',
    power: '1260.00 kW',
    devices: 124,
    status: 'Online',
    img: imgRoof2,
  },
  {
    id: 4,
    name: '聚德园屋顶光伏电站',
    capacity: '54.4 kWp',
    energy: '54.4 kWh',
    power: '121.80 kW',
    devices: 44,
    status: 'Offline',
    img: imgStation4,
  },
  {
    id: 5,
    name: '电站名称',
    capacity: '装机总量 kWp',
    energy: '日发电量数',
    power: '实时功率数',
    devices: '设备总数',
    status: 'Offline',
    img: imgStation5,
  },
]

const statusColor = {
  Alarm:   '#FF3141',
  Online:  '#00B578',
  Offline: '#999999',
}

function StationCard({ station }) {
  const color = statusColor[station.status] || '#999'
  return (
    <div className="bg-white rounded-2xl overflow-hidden shadow-sm">
      <div className="flex gap-3 p-3">
        {/* Thumbnail */}
        <div className="w-16 h-16 rounded-xl bg-[#E6EBF2] overflow-hidden flex-shrink-0 relative">
          <img
            src={station.img}
            alt={station.name}
            className="w-full h-full object-cover"
            onError={e => { e.target.style.display = 'none' }}
          />
        </div>

        {/* Info */}
        <div className="flex-1 min-w-0 relative">
          {/* Status badge top-right */}
          <span
            className="absolute top-0 right-0 text-[10px] font-medium"
            style={{ color }}
          >
            {station.status}
          </span>

          {/* Name */}
          <p className="text-[15px] font-semibold text-[#333] pr-12 leading-tight mb-1 truncate">
            {station.name}
          </p>

          {/* Capacity badge */}
          <div className="inline-flex items-center bg-[#FDF7EF] rounded px-1.5 py-0.5 mb-2">
            <span className="text-[11px] font-medium text-[#9B5F22]">{station.capacity}</span>
          </div>

          {/* Data row */}
          <div className="flex flex-wrap gap-3">
            <span className="flex items-center gap-1 text-[12px] text-[#7D889C]">
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                <circle cx="7" cy="7" r="5.5" stroke="#7D889C" strokeWidth="1.2"/>
                <path d="M7 4V7L9 9" stroke="#7D889C" strokeWidth="1.2" strokeLinecap="round"/>
              </svg>
              {station.energy}
            </span>
            <span className="flex items-center gap-1 text-[12px] text-[#7D889C]">
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                <path d="M8 2L5 7.5H8.5L6 12L11 5.5H7.5L10 2H8Z" stroke="#7D889C" strokeWidth="1.1" strokeLinejoin="round" fill="none"/>
              </svg>
              {station.power}
            </span>
            <span className="flex items-center gap-1 text-[12px] text-[#7D889C]">
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                <rect x="1" y="3" width="9" height="7" rx="1" stroke="#7D889C" strokeWidth="1.2" fill="none"/>
                <path d="M10 5.5L13 4.5V9.5L10 8.5" stroke="#7D889C" strokeWidth="1.2" strokeLinecap="round" fill="none"/>
              </svg>
              {station.devices}
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default function MonitorPage() {
  return (
    <div className="flex flex-col bg-[#F5F5F5]" style={{ height: '812px' }}>

      {/* Blue gradient header background */}
      <div
        className="absolute top-0 left-0 right-0 h-[212px] z-0"
        style={{ background: 'linear-gradient(180deg, #1890FF 0%, #63B3FF 60%, #F5F5F5 100%)' }}
      />

      {/* Status bar */}
      <div className="relative z-10 flex-shrink-0">
        <StatusBar dark={false} />
      </div>

      {/* Title */}
      <div className="relative z-10 flex-shrink-0 px-4 pb-2">
        <p className="text-[20px] font-semibold text-black">监测</p>
      </div>

      {/* Search bar */}
      <div className="relative z-10 flex-shrink-0 px-4 mb-3">
        <div className="flex items-center bg-white rounded-xl px-3 h-9 gap-2 shadow-sm">
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
            <circle cx="6.5" cy="6.5" r="5" stroke="#999" strokeWidth="1.4"/>
            <path d="M10.5 10.5L14 14" stroke="#999" strokeWidth="1.4" strokeLinecap="round"/>
          </svg>
          <span className="flex-1 text-[15px] text-[#999]">Plant Name / ID / Device SN</span>
          <div className="w-px h-5 bg-[#eee]" />
          <span className="text-[15px] text-[#1890FF]">Search</span>
        </div>
      </div>

      {/* Statistics */}
      <div className="relative z-10 flex-shrink-0 px-4 mb-3">
        <div className="grid grid-cols-4 gap-2">
          {[
            { label: 'Total',   val: 99,  color: '#333',    active: true },
            { label: 'Online',  val: 96,  color: '#00B578', active: false },
            { label: 'Alarm',   val: 2,   color: '#FF3141', active: false },
            { label: 'Offline', val: 1,   color: '#999',    active: false },
          ].map(({ label, val, color, active }) => (
            <div
              key={label}
              className="flex flex-col items-center py-1.5 rounded-2xl"
              style={{
                background: active
                  ? 'linear-gradient(90deg, rgba(24,144,255,0.2) 0%, rgba(24,144,255,0.2) 100%), white'
                  : 'rgba(255,255,255,0.5)',
                border: active ? '1px solid #1890FF' : 'none',
              }}
            >
              <p className="text-[20px] font-bold" style={{ color }}>{val}</p>
              <p className="text-[12px] text-[#333]">{label}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Station list — scrollable */}
      <div className="relative z-10 flex-1 overflow-y-auto page-scroll px-4 flex flex-col gap-3 pb-4">
        {stations.map(s => <StationCard key={s.id} station={s} />)}
      </div>

      <BottomNav />
    </div>
  )
}
