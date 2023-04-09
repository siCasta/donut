import {
    brightCyan,
    brightYellow,
    rgb24
} from 'https://deno.land/std@0.182.0/fmt/colors.ts'
import { graphics } from './a.ts'

let a = 0
let b = 0
const height = 24
const width = 80

console.clear()

while (true) {
    const z = []
    const screen = []

    for (let i = 0; i < width * height; i++) {
        screen[i] = i % width === 79 ? '\n' : ' '
        z[i] = 0
    }

    for (let j = 0; j < 6.28; j += 0.07) {
        for (let i = 0; i < 6.28; i += 0.02) {
            const sinA = Math.sin(a)
            const cosA = Math.cos(a)
            const cosB = Math.cos(b)
            const sinB = Math.sin(b)

            const sinI = Math.sin(i)
            const cosI = Math.cos(i)
            const cosJ = Math.cos(j)
            const sinJ = Math.sin(j)

            const cosJ2 = cosJ + 2
            const d = 1 / (sinI * cosJ2 * sinA + sinJ * cosA + 5)
            const t = sinI * cosJ2 * cosA - sinJ * sinA

            const x = Math.round(40 + 30 * d * (cosI * cosJ2 * cosB - t * sinB))

            const y = Math.round(12 + 15 * d * (cosI * cosJ2 * sinB + t * cosB))

            const o = x + width * y
            const N = Math.round(
                8 *
                    ((sinJ * sinA - sinI * cosJ * cosA) * cosB -
                        sinI * cosJ * sinA -
                        sinJ * cosA -
                        cosI * cosJ * sinB)
            )

            if (0 <= y && y < height && 0 <= x && x < width && z[o] < d) {
                console.log(graphics)
                z[o] = d
                screen[o] = graphics[N > 0 ? N : 0]
            }
        }
    }

    await new Promise(resolve => setTimeout(resolve, 0.012 * 1000))

    console.clear()

    const foot = brightYellow('By siCasta')
    const encode = new TextEncoder().encode(
        `${brightCyan(screen.join(''))}\n${foot}`
    )

    await Deno.stdout.write(encode)

    a += 0.04
    b += 0.02
}
