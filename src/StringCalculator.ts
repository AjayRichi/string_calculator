export function Add(numbers: string): number {
    if (numbers === "") {
        return 0
    } else {
        let delimiter = /,|\n/
        if (numbers.startsWith("//")) {
            delimiter = new RegExp(numbers[2])
            numbers = numbers.split("\n")[1]
        }
        return numbers.split(delimiter).reduce((acc, current) => (acc + parseInt(current)), 0)
    }
}