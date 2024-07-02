export function Add(numbers: string): number {
    if (numbers === "") {
        return 0
    } else {
        let delimiter = /,|\n/
        if (numbers.startsWith("//")) {
            delimiter = new RegExp(numbers[2])
            numbers = numbers.split("\n")[1]
        }
        const negative_numbers = numbers.split(delimiter).filter(number => parseInt(number) < 0)
        if (negative_numbers.length > 0) {
            throw new Error(`negative numbers not allowed ${negative_numbers.join(", ")}.`)
        }
        return numbers.split(delimiter).reduce((acc, current) => (acc + parseInt(current)), 0)
    }
}