import {
  lowerCaseLetters,
  upperCaseLetters,
  specialChars,
  numbers,
} from "./character-sets.js";

// password configuration
const mustHaveUpperCaseLetters: boolean = true;
const mustHaveLowerCaseLetters: boolean = true;
const mustHaveNumbers: boolean = true;
const mustHaveSpecialCharacters: boolean = true;
const passwordLength: number = 20;

// get all characters that are allowed according to our setup
function getAllowedCharacters(): (string | number)[] {
  const allowedCharacters: (string | number)[] = [];

  if (mustHaveLowerCaseLetters) allowedCharacters.push(...lowerCaseLetters);
  if (mustHaveUpperCaseLetters) allowedCharacters.push(...upperCaseLetters);
  if (mustHaveSpecialCharacters) allowedCharacters.push(...specialChars);
  if (mustHaveNumbers) allowedCharacters.push(...numbers);

  return allowedCharacters;
}

const result_1 = getAllowedCharacters();
// console.log(result_1);

// given an array, return a random item from it
function getRandomItemFromArray(array: string | number[]): string | number {
  const randomIndex: number = Math.floor(Math.random() * array.length);

  return array[randomIndex];
}
// const result_2 = getRandomItemFromArray(array);
// console.log(result_2);

// make sure at least one of the required characters is present, to pass a potential validator
function getMandatoryCharacters(): string | number[] {
  const result = [];

  if (mustHaveLowerCaseLetters) {
    const character: string[] = getRandomItemFromArray(lowerCaseLetters);
    result.push(character);
  }
  if (mustHaveUpperCaseLetters) {
    const character: string[] = getRandomItemFromArray(upperCaseLetters);
    result.push(character);
  }
  if (mustHaveSpecialCharacters) {
    const character: string[] = getRandomItemFromArray(specialChars);
    result.push(character);
  }
  if (mustHaveNumbers) {
    const number: number[] = getRandomItemFromArray(numbers);
    result.push(number);
  }

  return result;
}

const result_3 = getMandatoryCharacters();
console.log(result_3);

// fill the rest of the password with whatever is allowed
function getRandomCharacters(numberOfCharacters: any): string | number[] {
  const randomCharacters = [];
  const allowedCharacters = getAllowedCharacters();

  for (let i = 1; i <= numberOfCharacters; i++) {
    const randomChar: string | number =
      getRandomItemFromArray(allowedCharacters);
    randomCharacters.push(randomChar);
  }
  return randomCharacters;
}
console.log(getRandomCharacters(5));

// randomize the order of items in the array
function shuffleArray(array: (string | number)[]): (string | number)[] {
  return array.sort(() => 0.5 - Math.random());
}
console.log(shuffleArray([3, "f", 5, 7, "g"]));

// generate the final result
function generatePassword(): void {
  const requiredCharacters = getMandatoryCharacters();
  const remainingCharacters = getRandomCharacters(
    passwordLength - requiredCharacters.length
  );

  const generatedCharacters = [...requiredCharacters, ...remainingCharacters];
  const shuffledChars = shuffleArray(generatedCharacters);

  const password = shuffledChars.join("");
  if (!password.length) {
    console.log("Please set at least one condition to generate password");
  } else {
    console.log("Here's your password:  ", password);
  }
}

// init, essentially.
export default generatePassword;
