export type DataListItem = string | number | { value: string | number, text: string }

/**
 * Rounds a number to the closest multiple of the specified multiple.
 *
 * For example if the multiple is 0.5 and the input is 1.25 the number will be
 * rounded to 1.5
 */
export function roundToMultiple (num: number, multiple: number): number {
  const resto = num % multiple
  if (resto <= multiple / 2) {
    return num - resto
  } else {
    return num + multiple - resto
  }
}

/**
 * Clamps a number to within the specified max and min,
 * if a step size is provided, the number will be rounded to the closest
 * multiple of this step size.
 */
export function clampNumber (n: number, { min, max, step }: { min?: number, max?: number, step?: number }) {
  let num = n
  if (typeof min === 'number' && num < min) num = min
  if (typeof max === 'number' && num > max) num = max
  if (typeof step === 'number') num = roundToMultiple(num, step)
  return num
}
