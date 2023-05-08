export function checkPasswordStrength(password) {
  // Define regular expressions for different strength levels
  const weakRegex = /^(?=.*[a-z]).{6,}$/; // At least one lowercase letter and minimum 6 characters
  const mediumRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/; // At least one lowercase letter, one uppercase letter, one digit, and minimum 8 characters
  const strongRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()-=_+?<>/]).{10,}$/; // At least one lowercase letter, one uppercase letter, one digit, one special character, and minimum 10 characters
  
  if (strongRegex.test(password)) {
    return "strong";
  } else if (mediumRegex.test(password)) {
    return "medium";
  } else if (weakRegex.test(password)) {
    return "weak";
  } else {
    return "weak";
  }
}

