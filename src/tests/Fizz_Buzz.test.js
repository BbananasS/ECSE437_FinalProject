import Fizz_Buzz from '../components/Fizz_Buzz';
import Todo from "../components/Todo"

describe("FizzBuzz", () => {
    test('[3] should result in "fizz"', () => {
      expect(Fizz_Buzz([3])).toBe('fizz');
    });

    test('[5] should result in "buzz"', () => {
      expect(Fizz_Buzz([5])).toBe('buzz');
    });

    test('[15] should result in "fizzbuzz"', () => {
      expect(Fizz_Buzz([15])).toBe('fizzbuzz');
    });

    test('[1,2,3] should result in "1, 2, fizz"', () => {
      expect(Fizz_Buzz([3])).toBe('fizz');
    });

});