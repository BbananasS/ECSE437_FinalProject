function Fizz_Buzz(numbers) {
    let result = []
    let number = 0
    
    for (number of numbers) {
        if (number % 15 === 0) {
            result.push('fizzbuzz')
        } else if (number % 3 === 0) {
            result.push('fizz')
        } else if (number % 5 === 0) {
            result.push('buzz')
        } else {
            result.push(number)
        }
    }
    
    return result.join(', ')
}

export default Fizz_Buzz;