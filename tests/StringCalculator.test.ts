import { Add } from '../src/StringCalculator';

test("returns 0 for an empty string", () => {
    expect(Add("")).toBe(0)
})

test("returns number itself for a single number input", () => {
    expect(Add("1")).toBe(1)
})

test("returns sum of the two comma-separated numbers", () => {
    expect(Add("1,2")).toBe(3)
})