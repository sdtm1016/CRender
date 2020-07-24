import { deepClone } from '../../../es/utils/common'

export default function (render) {
  const {
    area: [w, h],
  } = render

  const top = h / 3
  const bottom = (h / 3) * 2
  const gap = w / 10

  const beginX = w / 2 - gap * 2

  const points = new Array(5).fill('').map((t, i) => [beginX + gap * i, i % 2 === 0 ? top : bottom])

  points[2][1] += top * 1.3

  return {
    name: 'Polyline',
    animationCurve: 'easeOutBack',
    hover: true,
    drag: true,
    shape: {
      points,
      close: true,
    },
    style: {
      fill: '#9ce5f4',
      shadowBlur: 0,
      lineWidth: 10,
      shadowColor: '#66eece',
      hoverCursor: 'pointer',
    },
    onMouseEnter() {
      this.animation('style', { shadowBlur: 20 }, true)
      const pointsCloned = deepClone(this.shape.points)
      pointsCloned[2][1] += top * 0.3
      this.animation('shape', { points: pointsCloned })
    },
    onMouseOuter() {
      this.animation('style', { shadowBlur: 0 }, true)
      const pointsCloned = deepClone(this.shape.points)
      pointsCloned[2][1] -= top * 0.3
      this.animation('shape', { points: pointsCloned })
    },
  }
}
