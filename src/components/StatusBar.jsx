export default function StatusBar({ dark = false }) {
  const color = dark ? '#333' : 'white'
  return (
    <div className="flex items-center justify-between px-5 h-[44px]">
      <span className="text-[14px] font-medium tracking-tight" style={{ color }}>9:41</span>
      <div className="flex items-center gap-1">
        {/* Signal bars */}
        <svg width="17" height="12" viewBox="0 0 17 12" fill="none">
          <rect x="0" y="8" width="3" height="4" rx="1" fill={color} opacity="0.5"/>
          <rect x="4.5" y="5" width="3" height="7" rx="1" fill={color} opacity="0.7"/>
          <rect x="9" y="2" width="3" height="10" rx="1" fill={color}/>
          <rect x="13.5" y="0" width="3" height="12" rx="1" fill={color}/>
        </svg>
        {/* Wifi */}
        <svg width="16" height="12" viewBox="0 0 16 12" fill="none">
          <path d="M8 9.5C8.55 9.5 9 9.95 9 10.5C9 11.05 8.55 11.5 8 11.5C7.45 11.5 7 11.05 7 10.5C7 9.95 7.45 9.5 8 9.5Z" fill={color}/>
          <path d="M3.9 6.5C5.1 5.3 6.97 4.5 8 4.5C9.03 4.5 10.9 5.3 12.1 6.5" stroke={color} strokeWidth="1.5" strokeLinecap="round" fill="none" opacity="0.7"/>
          <path d="M1.2 3.8C3.0 2.0 5.4 1 8 1C10.6 1 13 2.0 14.8 3.8" stroke={color} strokeWidth="1.5" strokeLinecap="round" fill="none" opacity="0.4"/>
        </svg>
        {/* Battery */}
        <div className="relative flex items-center">
          <div className="border rounded-[2px] w-[22px] h-[11px] flex items-center px-[2px]" style={{ borderColor: color, opacity: 0.6 }}>
            <div className="rounded-[1px] h-[7px] w-[16px]" style={{ background: color }}/>
          </div>
          <div className="absolute -right-[2px] w-[1.5px] h-[5px] rounded-[1px]" style={{ background: color, opacity: 0.4 }} />
        </div>
      </div>
    </div>
  )
}
