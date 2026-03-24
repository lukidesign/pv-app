import { useState } from 'react'
import StatusBar from '../components/StatusBar'
import BottomNav from '../components/BottomNav'

const typeTabs = [
  { key: 'defect', label: '消缺', count: 14, color: '#1890FF', gradient: 'linear-gradient(135deg, #1890FF, #63B3FF)' },
  { key: 'hazard', label: '隐患', count: 3, color: '#FF7A00', gradient: 'linear-gradient(135deg, #FF7A00, #FFB347)' },
  { key: 'inspect', label: '巡检', count: 3, color: '#5B8DEF', gradient: 'linear-gradient(135deg, #5B8DEF, #89AAFF)' },
]

const statusTabs = ['未完成', '已完成', '已取消']

const tasks = [
  { id: 1, title: '润建光伏测试电站：设备告警（远程工单）', status: '处理中', assignee: '张润建', brand: '阳光', deadline: '2025-01-21 10:00', overdue: false },
  { id: 2, title: '电站名称：设备离线（远程工单）', status: '处理中', assignee: '张润建', brand: '锦浪', deadline: '2025-01-22 10:00', overdue: true },
  { id: 3, title: '润建光伏测试电站：设备告警', status: '待验收', assignee: '张验收', brand: '逆变器厂商', deadline: '2025-01-22 10:00', overdue: true },
  { id: 4, title: '电站名称：低效预警', status: '复验不通过', assignee: '张验收', brand: '逆变器厂商', deadline: '2025-03-01 10:00', overdue: false },
  { id: 5, title: '润建楼顶分布式光伏电站：临时工单', status: '待验收', assignee: '张润建', brand: '', deadline: '2025-03-01 10:00', overdue: false },
  { id: 6, title: '润建楼顶分布式光伏电站：清洗工单', status: '验收不通过', assignee: '张润建', brand: '', deadline: '2025-03-01 10:00', overdue: false },
]

const statusColor = {
  '处理中': '#999999',
  '待验收': '#FF7A00',
  '复验不通过': '#FF3141',
  '验收不通过': '#FF3141',
}

export default function MaintainPage() {
  const [activeType, setActiveType] = useState('defect')
  const [activeStatus, setActiveStatus] = useState('未完成')

  return (
    <div className="flex flex-col bg-[#F5F5F5]" style={{ height: '812px' }}>
      {/* Blue gradient header bg */}
      <div
        className="absolute top-0 left-0 right-0 h-[180px] z-0"
        style={{ background: 'linear-gradient(180deg, #1890FF 0%, #63B3FF 60%, #F5F5F5 100%)' }}
      />

      {/* Status bar */}
      <div className="relative z-10 flex-shrink-0">
        <StatusBar dark={false} />
      </div>

      {/* Title row */}
      <div className="relative z-10 flex-shrink-0 px-4 pb-3 flex items-center gap-2">
        <span className="text-white font-semibold text-[17px]">全部电站</span>
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
          <path d="M2 6C2 4 4 2 8 2C11 2 13 3.5 14 5" stroke="white" strokeWidth="1.5" strokeLinecap="round"/>
          <path d="M14 10C14 12 12 14 8 14C5 14 3 12.5 2 11" stroke="white" strokeWidth="1.5" strokeLinecap="round"/>
          <path d="M12 3.5L14 5.5L16 3.5" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M4 12.5L2 10.5L0 12.5" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </div>

      {/* Type tab pills */}
      <div className="relative z-10 flex-shrink-0 px-4 pb-3 flex gap-2">
        {typeTabs.map(({ key, label, count, gradient }) => {
          const active = activeType === key
          return (
            <button
              key={key}
              onClick={() => setActiveType(key)}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-full text-[13px] font-medium"
              style={active
                ? { background: gradient, color: 'white' }
                : { background: 'rgba(255,255,255,0.85)', color: '#666' }
              }
            >
              <span>{label}</span>
              <span
                className="text-[11px] px-1.5 py-0.5 rounded-full leading-none"
                style={active
                  ? { background: 'rgba(255,255,255,0.3)', color: 'white' }
                  : { background: '#eee', color: '#999' }
                }
              >
                {count}
              </span>
            </button>
          )
        })}
      </div>

      {/* Scrollable content */}
      <div className="relative z-10 flex-1 overflow-y-auto">
        {/* Search bar */}
        <div className="px-4 pb-2">
          <div className="flex items-center bg-white rounded-full px-3 h-[36px] gap-2">
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <circle cx="7" cy="7" r="5" stroke="#CCC" strokeWidth="1.5"/>
              <path d="M11 11L14 14" stroke="#CCC" strokeWidth="1.5" strokeLinecap="round"/>
            </svg>
            <input
              className="flex-1 text-[13px] text-[#333] outline-none bg-transparent placeholder-[#CCC]"
              placeholder="电站 / 工单编号"
            />
            <span className="text-[13px] text-[#1890FF] font-medium">搜索</span>
          </div>
        </div>

        {/* Status tabs */}
        <div className="px-4 pb-0 bg-white">
          <div className="flex border-b border-[#F0F0F0]">
            {statusTabs.map((tab) => {
              const active = activeStatus === tab
              return (
                <button
                  key={tab}
                  onClick={() => setActiveStatus(tab)}
                  className="flex-1 py-3 text-[14px] relative"
                  style={{ color: active ? '#1890FF' : '#666' }}
                >
                  {tab}
                  {active && (
                    <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-8 h-[2px] bg-[#1890FF] rounded-full" />
                  )}
                </button>
              )
            })}
          </div>
        </div>

        {/* Filter bar */}
        <div className="px-4 py-2 bg-white flex items-center gap-3 text-[12px] text-[#999]">
          <span>▼ New Today</span>
          <span>▼ All Status</span>
          <span>● View Mine</span>
          <span>▼ Descending</span>
        </div>

        {/* Task list */}
        <div className="px-4 pt-2 pb-4 flex flex-col gap-2">
          {tasks.map(({ id, title, status, assignee, brand, deadline, overdue }) => (
            <div key={id} className="bg-white rounded-2xl p-4">
              <div className="flex items-start justify-between gap-2 mb-1.5">
                <span className="text-[14px] font-semibold text-[#333] leading-snug flex-1">{title}</span>
                <span
                  className="text-[12px] flex-shrink-0 mt-0.5"
                  style={{ color: statusColor[status] || '#999' }}
                >
                  {status}
                </span>
              </div>
              <div className="text-[12px] text-[#666] mb-1">
                {assignee}{brand ? ` | ${brand}` : ''}
              </div>
              <div className="flex items-center gap-2 text-[12px] text-[#999]">
                <span>截止：{deadline}</span>
                {overdue && (
                  <span className="px-1.5 py-0.5 rounded text-[11px] text-white bg-[#FF3141] leading-none">
                    已逾期
                  </span>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom nav */}
      <BottomNav />
    </div>
  )
}
