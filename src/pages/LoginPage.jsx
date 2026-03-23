import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

// Figma assets (valid for 7 days)
const bgTexture = 'https://www.figma.com/api/mcp/asset/5fbbc05b-eda1-44a7-b337-c56c7fef5f1e'
const bgImage   = 'https://www.figma.com/api/mcp/asset/d0d7fd18-1749-4d5a-ba83-b1c89a4c1a80'

export default function LoginPage() {
  const navigate = useNavigate()
  const [account, setAccount] = useState('188****8888')
  const [password, setPassword] = useState('············')
  const [showPwd, setShowPwd] = useState(false)
  const [remember, setRemember] = useState(false)
  const [agreed, setAgreed] = useState(true)

  const handleLogin = () => {
    navigate('/home')
  }

  return (
    <div className="relative w-full h-full bg-white overflow-hidden" style={{ minHeight: 812 }}>

      {/* Background gradient header */}
      <div className="absolute top-0 left-0 w-full h-[184px] overflow-hidden">
        <div
          className="absolute inset-0 opacity-30"
          style={{
            backgroundImage: `url('${bgTexture}')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center top',
          }}
        />
        <img
          src={bgImage}
          alt=""
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div
          className="absolute inset-0"
          style={{
            background: 'linear-gradient(180deg, rgba(24,144,255,0.15) 0%, rgba(255,255,255,0) 100%)',
          }}
        />
      </div>

      {/* Language switcher */}
      <div className="absolute top-[50px] right-[32px] flex items-center gap-1">
        <span className="text-[14px] text-[#1677FF]">🌐</span>
        <span className="text-[14px] text-[#1677FF]">简体中文</span>
      </div>

      {/* Form */}
      <div className="absolute top-[120px] left-[20px] right-[20px] flex flex-col gap-5">

        {/* Account field */}
        <div className="flex flex-col">
          <span className="text-[14px] text-black px-3 mb-1">账号</span>
          <div className="flex items-center border-b border-[#eee] px-3 py-3 bg-white">
            <input
              className="flex-1 text-[17px] text-black outline-none bg-transparent"
              value={account}
              onChange={e => setAccount(e.target.value)}
              placeholder="请输入账号"
            />
            {account && (
              <button
                onClick={() => setAccount('')}
                className="ml-2 text-[#ccc] text-[18px] leading-none"
              >
                ✕
              </button>
            )}
          </div>
        </div>

        {/* Password field */}
        <div className="flex flex-col">
          <span className="text-[14px] text-black px-3 mb-1">密码</span>
          <div className="flex items-center border-b border-[#1890FF] px-3 py-3 bg-white">
            <input
              className="flex-1 text-[17px] text-black outline-none bg-transparent"
              type={showPwd ? 'text' : 'password'}
              value={password}
              onChange={e => setPassword(e.target.value)}
              placeholder="请输入密码"
            />
            <span className="text-[#1890FF] text-[17px] ml-1">|</span>
            <button
              onClick={() => setShowPwd(!showPwd)}
              className="ml-2 text-[#ccc] text-[16px]"
            >
              {showPwd ? '👁' : '🙈'}
            </button>
          </div>
        </div>

        {/* Remember password */}
        <div className="flex items-center justify-end gap-1 px-3">
          <button
            onClick={() => setRemember(!remember)}
            className={`w-4 h-4 rounded-full border flex items-center justify-center transition-colors ${
              remember ? 'bg-[#1890FF] border-[#1890FF]' : 'border-[#ccc]'
            }`}
          >
            {remember && <span className="text-white text-[10px]">✓</span>}
          </button>
          <span className="text-[14px] text-[#999]">记住密码</span>
        </div>

        {/* Login button */}
        <div className="flex flex-col gap-4 items-center mt-2">
          <button
            onClick={handleLogin}
            className="w-[311px] py-3 bg-[#1890FF] text-white text-[17px] rounded-[100px] text-center font-medium active:opacity-80 transition-opacity"
          >
            登录
          </button>

          {/* Agreement */}
          <div className="flex items-center gap-1">
            <button
              onClick={() => setAgreed(!agreed)}
              className={`w-4 h-4 rounded-full border flex items-center justify-center transition-colors ${
                agreed ? 'bg-[#1890FF] border-[#1890FF]' : 'border-[#ccc]'
              }`}
            >
              {agreed && <span className="text-white text-[10px]">✓</span>}
            </button>
            <span className="text-[14px] text-[#999]">
              已阅读并同意
              <span className="text-[#1890FF]">《用户协议及隐私政策》</span>
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}
