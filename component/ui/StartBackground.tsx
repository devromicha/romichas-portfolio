'use client'

import { useEffect, useRef } from 'react'

const COLORS: [number, number, number][] = [
  [255, 255, 255],
  [200, 220, 255],
  [255, 240, 200],
  [180, 210, 255],
  [255, 255, 220],
  [220, 200, 255],
]

function drawStarShape(
  ctx: CanvasRenderingContext2D,
  x: number,
  y: number,
  spikes: number,
  outerR: number,
  innerR: number,
  rot: number
) {
  const step = Math.PI / spikes
  let angle = rot
  ctx.beginPath()
  for (let i = 0; i < spikes * 2; i++) {
    const r = i % 2 === 0 ? outerR : innerR
    ctx.lineTo(x + Math.cos(angle) * r, y + Math.sin(angle) * r)
    angle += step
  }
  ctx.closePath()
}

class Star {
  x = 0; y = 0; maxR = 0; isStar = false
  spikes = 5; rot = 0; rotSpeed = 0
  phase = 0; speed = 0; baseAlpha = 0; ampAlpha = 0
  fadeIn = false; fadeAlpha = 1
  r = 255; g = 255; b = 255
  w = 0; h = 0

  constructor(w: number, h: number, init = true) {
    this.w = w; this.h = h
    this.reset(init)
  }

  reset(init: boolean) {
    this.x = Math.random() * this.w
    this.y = Math.random() * this.h

    const roll = Math.random()
    if (roll < 0.6) this.maxR = Math.random() * 0.8 + 0.2
    else if (roll < 0.88) this.maxR = Math.random() * 1.2 + 0.8
    else if (roll < 0.97) this.maxR = Math.random() * 1.8 + 1.5
    else this.maxR = Math.random() * 2.5 + 2.5

    this.isStar = this.maxR > 1.8
    this.spikes = Math.random() > 0.5 ? 4 : 5
    this.rot = Math.random() * Math.PI * 2
    this.rotSpeed = (Math.random() - 0.5) * 0.008
    this.phase = init ? Math.random() * Math.PI * 2 : 0
    this.speed = Math.random() * 0.018 + 0.006
    this.baseAlpha = Math.random() * 0.5 + 0.3
    this.ampAlpha = Math.random() * 0.35 + 0.1
    this.fadeIn = true
    this.fadeAlpha = init ? 1 : 0

    const col = COLORS[Math.floor(Math.random() * COLORS.length)]
    this.r = col[0]; this.g = col[1]; this.b = col[2]
  }

  update() {
    this.phase += this.speed
    this.rot += this.rotSpeed

    if (this.fadeIn) {
      this.fadeAlpha = Math.min(1, this.fadeAlpha + 0.008)
      if (this.fadeAlpha >= 1) this.fadeIn = false
    }

    if (Math.random() < 0.00008) this.reset(false)
  }

  draw(ctx: CanvasRenderingContext2D) {
    // 🌟 STRONG TWINKLE + FLICKER
    const twinkle =
      this.baseAlpha +
      Math.sin(this.phase * 2) * this.ampAlpha

    const flicker = Math.random() * 0.2

    const alpha = Math.max(
      0,
      Math.min(1, (twinkle + flicker) * this.fadeAlpha)
    )

    ctx.globalAlpha = alpha

    // ✨ GLOW EFFECT
    ctx.shadowBlur = this.isStar ? 10 : 5
    ctx.shadowColor = `rgb(${this.r},${this.g},${this.b})`

    if (this.isStar) {
      const grd = ctx.createRadialGradient(
        this.x, this.y, 0,
        this.x, this.y, this.maxR * 4
      )
      grd.addColorStop(0, `rgba(${this.r},${this.g},${this.b},0.35)`)
      grd.addColorStop(1, `rgba(${this.r},${this.g},${this.b},0)`)

      ctx.fillStyle = grd
      ctx.beginPath()
      ctx.arc(this.x, this.y, this.maxR * 4, 0, Math.PI * 2)
      ctx.fill()

      ctx.fillStyle = `rgb(${this.r},${this.g},${this.b})`
      drawStarShape(ctx, this.x, this.y, this.spikes, this.maxR, this.maxR * 0.42, this.rot)
      ctx.fill()

      ctx.fillStyle = 'rgba(255,255,255,0.9)'
      ctx.beginPath()
      ctx.arc(this.x, this.y, this.maxR * 0.3, 0, Math.PI * 2)
      ctx.fill()
    } else {
      if (this.maxR > 1) {
        const grd = ctx.createRadialGradient(
          this.x, this.y, 0,
          this.x, this.y, this.maxR * 3
        )
        grd.addColorStop(0, `rgba(${this.r},${this.g},${this.b},0.2)`)
        grd.addColorStop(1, `rgba(${this.r},${this.g},${this.b},0)`)

        ctx.fillStyle = grd
        ctx.beginPath()
        ctx.arc(this.x, this.y, this.maxR * 3, 0, Math.PI * 2)
        ctx.fill()
      }

      ctx.fillStyle = `rgb(${this.r},${this.g},${this.b})`
      ctx.beginPath()
      ctx.arc(this.x, this.y, this.maxR, 0, Math.PI * 2)
      ctx.fill()
    }

    ctx.shadowBlur = 0
    ctx.globalAlpha = 1
  }
}

class ShootingStar {
  x = 0; y = 0; len = 0; speed = 0
  angle = 0; alpha = 0; life = 0
  active = false; timer = 0
  w = 0; h = 0

  constructor(w: number, h: number) {
    this.w = w; this.h = h
    this.reset()
  }

  reset() {
    this.x = Math.random() * this.w * 0.7
    this.y = Math.random() * this.h * 0.4
    this.len = Math.random() * 120 + 60
    this.speed = Math.random() * 8 + 6
    this.angle = Math.random() * Math.PI * 2
    this.alpha = 0
    this.life = 1
    this.active = false
    this.timer = Math.random() * 400 + 200
  }

  update() {
    if (!this.active) {
      this.timer--
      if (this.timer <= 0) {
        this.active = true
        this.alpha = 0
        this.life = 1
      }
      return
    }

    this.x += Math.cos(this.angle) * this.speed
    this.y += Math.sin(this.angle) * this.speed

    this.life -= 0.018
    this.alpha = this.life > 0.8 ? (1 - this.life) * 5 : this.life

    if (this.life <= 0) this.reset()
  }

  draw(ctx: CanvasRenderingContext2D) {
    if (!this.active) return

    const tx = this.x - Math.cos(this.angle) * this.len
    const ty = this.y - Math.sin(this.angle) * this.len

    const grd = ctx.createLinearGradient(tx, ty, this.x, this.y)
    grd.addColorStop(0, 'rgba(255,255,255,0)')
    grd.addColorStop(1, `rgba(255,255,255,${this.alpha})`)

    ctx.strokeStyle = grd
    ctx.lineWidth = 1.5
    ctx.beginPath()
    ctx.moveTo(tx, ty)
    ctx.lineTo(this.x, this.y)
    ctx.stroke()

    ctx.fillStyle = '#fff'
    ctx.beginPath()
    ctx.arc(this.x, this.y, 1.5, 0, Math.PI * 2)
    ctx.fill()
  }
}

export default function StarBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current!
    const ctx = canvas.getContext('2d')!

    let raf: number
    let stars: Star[] = []
    let shooters: ShootingStar[] = []

    const init = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight

      stars = Array.from(
        { length: window.innerWidth < 768 ? 150 : 320 },
        () => new Star(canvas.width, canvas.height, true)
      )

      shooters = Array.from(
        { length: 3 },
        () => new ShootingStar(canvas.width, canvas.height)
      )
    }

    const handleResize = () => init()

    init()
    window.addEventListener('resize', handleResize)

    const loop = () => {
      ctx.fillStyle = 'rgba(4,5,15,0.2)'
      ctx.fillRect(0, 0, canvas.width, canvas.height)

      stars.forEach(s => {
        s.update()
        s.draw(ctx)
      })

      shooters.forEach(s => {
        s.update()
        s.draw(ctx)
      })

      raf = requestAnimationFrame(loop)
    }

    loop()

    return () => {
      cancelAnimationFrame(raf)
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 z-0 pointer-events-none"
    />
  )
}