import { ImageResponse } from 'next/og'

export const alt = 'Drink Free — wallet gains and calorie gains'
export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

export default function OgImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          padding: 64,
          background: 'linear-gradient(135deg, #F6F8F7 0%, #E6F9E7 55%, #F6F8F7 100%)',
          color: '#0B0E11',
          fontFamily: 'system-ui, sans-serif',
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
          <div
            style={{
              width: 64,
              height: 64,
              borderRadius: 18,
              background: '#0B0E11',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: '#00C805',
              fontSize: 32,
              fontWeight: 800,
            }}
          >
            DF
          </div>
          <div style={{ display: 'flex', fontSize: 36, fontWeight: 800, letterSpacing: -1 }}>
            Drink Free
          </div>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              fontSize: 72,
              fontWeight: 800,
              letterSpacing: -3,
              lineHeight: 1.05,
            }}
          >
            <span style={{ display: 'flex' }}>Watch your</span>
            <span style={{ display: 'flex', color: '#00C805' }}>drink-free gains</span>
          </div>
          <div style={{ display: 'flex', fontSize: 28, color: '#5C6570', maxWidth: 720 }}>
            Money saved · calories not added · missions for points
          </div>
        </div>
        <div
          style={{
            display: 'flex',
            gap: 24,
            fontSize: 22,
            fontWeight: 700,
            color: '#5C6570',
          }}
        >
          <span style={{ display: 'flex' }}>Free forever core</span>
          <span style={{ display: 'flex' }}>Pro $7.99/mo</span>
          <span style={{ display: 'flex' }}>iOS waitlist</span>
        </div>
      </div>
    ),
    { ...size },
  )
}
