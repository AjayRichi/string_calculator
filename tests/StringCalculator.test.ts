import { Add } from '../src/StringCalculator';

test("returns 0 for an empty string", () => {
    expect(Add("")).toBe(0)
})

test("returns number itself for a single number input", () => {
    expect(Add("1")).toBe(1)
})

test("returns sum of two comma-separated numbers", () => {
    expect(Add("1,2")).toBe(3)
})

test("returns sum of multiple comma-separated numbers", () => {
    expect(Add("1,2,3")).toBe(6)
})

test("handles new line character between numbers", () => {
    expect(Add("1\n2,3")).toBe(6)
})

test("handles different delimiters", () => {
    expect(Add("//;\n1;2")).toBe(3)
})

test("throws an exception for negative numbers", () => {
    expect(()=>Add("-1,-2")).toThrow("negative numbers not allowed -1, -2.")
})