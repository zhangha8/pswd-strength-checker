export function passwordStrengthSuggestion(strength) {
  switch (strength) {
    case "weak":
      return "This password is weak, try adding at least one lowercase letter, one uppercase letter, one digit, and have a minimum of 8 characters."
      break;

    case "medium":
      return "This password can be stronger, try adding at least one special character and have a minimum of 10 characters."

    case "strong":
      return "Nice, this is a strong password.";
      break;

    default:
      return "The password strength is invalid.";
      break;
  }
}
