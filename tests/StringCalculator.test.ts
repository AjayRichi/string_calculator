import { Add } from '../src/StringCalculator';

test("returns 0 for an empty string", () => {
    expect(Add("")).toBe(0)
})

test("returns number itself for a single number input", () => {
    expect(Add("1")).toBe(1)
})