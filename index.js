import { checkPasswordStrength } from "./pswd-strength-checker.js";
import { passwordStrengthSuggestion } from "./pswd-strength-suggestions.js";

import express from "express";
const app = express();
const PORT = 8080;

// apply express json middleware
app.use(express.json());

app.listen(PORT, () => console.log(`api is live on http://localhost:${PORT}`));

app.post("/pswd/strength", (req, res) => {
  const { password } = req.body;
  const { returnSuggestion } = req.body;

  if (!password) {
    res
      .status(418)
      .send({ message: "A password is required to check its strength" });
  }

  // get password strength
  const strength = checkPasswordStrength(password);
  const suggestion = passwordStrengthSuggestion(strength);

  if (returnSuggestion) {
    res.status(200).send({
      strength: `${strength}`,
      suggestion: `${suggestion}`,
    });
  } else {
    res.status(200).send({
      strength: `${strength}`,
    });
  }
});
