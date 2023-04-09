import { rgb24 } from 'https://deno.land/std@0.182.0/fmt/colors.ts'

export const graphics = `${rgb24('▉', { r: 0, g: 0, b: 0 })}${rgb24('▉', {
    r: 21,
    g: 21,
    b: 21
})}${rgb24('▉', { r: 42, g: 42, b: 42 })}${rgb24('▉', {
    r: 63,
    g: 63,
    b: 63
})}${rgb24('▉', { r: 84, g: 84, b: 84 })}${rgb24('▉', {
    r: 105,
    g: 105,
    b: 105
})}${rgb24('▉', { r: 126, g: 126, b: 126 })}${rgb24('▉', {
    r: 147,
    g: 147,
    b: 147
})}${rgb24('▉', { r: 168, g: 168, b: 168 })}${rgb24('▉', {
    r: 189,
    g: 189,
    b: 189
})}${rgb24('▉', { r: 210, g: 210, b: 210 })}${rgb24('▉', {
    r: 231,
    g: 231,
    b: 231
})}`
console.log(graphics)
