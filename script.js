document.addEventListener('DOMContentLoaded', () => {
  const canvas = document.getElementById('canvas')

  canvas.width = window.innerWidth
  canvas.height = window.innerHeight
  
  const ctx = canvas.getContext('2d')
  ctx.fillStyle = 'white'

  let stars = []

  for (let i = 0; i < 150; i++) {
    const size = Math.round(Math.random() + 1) * 2;
  
    stars.push({
      x: Math.round(Math.random(4) * canvas.width),
      y: Math.round(Math.random(4) * canvas.height),
      size: size,
      speed: size == 2 ? 1 : 0.5
    })
  }

  const draw = () => {
    stars.forEach((star) => {
      ctx.fillRect(star.x, star.y, star.size, star.size)
    })
  }

  const update = () => {
    stars = stars.map((star) => {
      console.log(star.speed)
      const newY = star.y - star.speed;

      return {
        ...star,
        y: newY <= 0 ? canvas.height : newY
      }
    })
  }
  setInterval(() => {
    ctx.clearRect(0, 0, canvas.width, canvas.height)
    draw()
    update()
    

  }, 1000/60) //60 FPS
})

