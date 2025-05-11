export function validateEmail(email: string) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    throw new Error("Email not valid");
  }
}

export function validateBirthday(birthday: string) {
  const birthdayRegex = /^\d{2}-\d{2}-\d{4}$/;
  if (!birthdayRegex.test(birthday)) {
    throw new Error("birday not valid");
  }
}

export function validateAge(age: number) {
  if (isNaN(age) || age <= 14) {
    throw new Error("age not valid");
  }
  return;
}

export function checkInput(
  email: string,
  password: string,
  age: number,
  birthday: string,
  name: string
) {
  if (!email || !password || !age || !birthday || !name) {
    throw new Error("Complete all inputs");
  }
}
