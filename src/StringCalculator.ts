export function Add(numbers: string): number {
    if (numbers === "") {
        return 0
    }
    return numbers.split(",").reduce((acc, current) => (acc + parseInt(current)), 0)
}