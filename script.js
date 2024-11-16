// script.js
const questionPool = [
    { question: "What is the derivative of x²?", answer: "2x" },
    { question: "What is the integral of 1/x dx?", answer: "ln|x| or ln x" },
    { question: "Simplify: sin²(x) + cos²(x).", answer: "1" },
    { question: "Evaluate ∫ 3x dx from x = 1 to x = 3.", answer: "12" },
    { question: "What is the limit of (x² - 1)/(x - 1) as x approaches 1?", answer: "2" },
    { question: "What is the derivative of sin(x)?", answer: "cos(x)" },
    { question: "What is the derivative of ln(x)?", answer: "1/x" },
  { question: "Find the derivative of e^x.", answer: "e^x" },
  { question: "Evaluate ∫ x³ dx.", answer: "x^4/4 + C" },
  { question: "Find the derivative of tan(x).", answer: "sec^2(x)" },
  { question: "What is the integral of cos(x) dx?", answer: "sin(x) + C" },
  { question: "Evaluate ∫ (2x + 3) dx.", answer: "x^2 + 3x + C" },
  { question: "What is the derivative of x⁵?", answer: "5x^4" },
  { question: "Find the derivative of 3x² + 4x + 7.", answer: "6x + 4" },
  { question: "What is the integral of x dx?", answer: "x^2/2 + C" },
  { question: "Evaluate ∫ (1/x²) dx.", answer: "-1/x + C" },
  { question: "What is the limit of (x³ - 8)/(x - 2) as x approaches 2?", answer: "12" },
  { question: "Simplify: (d/dx)(x² ln(x)).", answer: "2x ln(x) + x" },
  { question: "Find the derivative of cos²(x).", answer: "-2cos(x)sin(x)" },
  { question: "What is the second derivative of x³?", answer: "6x" },
  { question: "Evaluate the definite integral ∫₀² (2x dx).", answer: "4" },
  { question: "What is the derivative of arctan(x)?", answer: "1/(1 + x^2)" },
  { question: "Find the derivative of e^(2x).", answer: "2e^(2x)" },
  { question: "What is the integral of sin(x) dx?", answer: "-cos(x) + C" },
  { question: "Evaluate ∫₁³ (3x² dx).", answer: "26" },
  { question: "What is the derivative of ln(x²)?", answer: "2/x" },
  { question: "Find the integral of 5e^(3x) dx.", answer: "5e^(3x)/3 + C" },
  { question: "Evaluate ∫ (3x⁴ - x³) dx.", answer: "3x^5/5 - x⁴/4 + C" },
  { question: "What is the derivative of log₁₀(x)?", answer: "1/(x ln(10))" },
  { question: "Find the derivative of 2sin(x)cos(x).", answer: "2cos^2(x) - 2sin^2(x)" },
  { question: "Simplify the derivative of (1/x) + x.", answer: "-1/x^2 + 1" },
  { question: "What is the integral of 1/(1 + x²) dx?", answer: "arctan(x) + C" },
  { question: "Find the limit of sin(x)/x as x approaches 0.", answer: "1" },
  { question: "What is the derivative of sqrt(x)?", answer: "1/(2sqrt(x))" },
  { question: "Evaluate the definite integral ∫₀¹ (x³ dx).", answer: "1/4" },
  { question: "Find the derivative of ln(e^x).", answer: "1" },
  { question: "What is the limit of (1 + 1/n)^n as n approaches infinity?", answer: "e" },
  { question: "Evaluate ∫ (2x - 1) dx.", answer: "x^2 - x + C" },
  { question: "Find the derivative of 1/(x²).", answer: "-2/x^3" },
  { question: "What is the integral of sec²(x) dx?", answer: "tan(x) + C" },
  { question: "Find the derivative of x^x.", answer: "x^x (ln(x) + 1)" },
  { question: "Evaluate ∫ e^(x²) dx.", answer: "Cannot be expressed"},
  { question: "Solve: d²y/dx² + y = 0.", answer: "y = C1 cos(x) + C2 sin(x)" },
  { question: "Evaluate the definite integral ∫₀¹ ln(x) dx.", answer: "-1" },
  { question: "What is the derivative of arccos(x)?", answer: "-1/sqrt(1 - x^2)" },
  { question: "Find the limit of (sin(x)/x)^x as x approaches 0.", answer: "1" },
  { question: "Simplify: (d/dx)(x² e^x).", answer: "x^2 e^x + 2x e^x" },
  { question: "Find the integral of 1/(x² + 1) dx.", answer: "arctan(x) + C" },
  { question: "Solve the differential equation: dy/dx = y tan(x).", answer: "y = C sec(x)" },
  { question: "Evaluate ∫₀∞ (x e^(-x²) dx).", answer: "1/2" },
  { question: "What is the derivative of a constant?", answer: "0" },
  { question: "What is the derivative of x³?", answer: "3x^2" },
  { question: "Evaluate ∫ x dx.", answer: "x^2/2 + C" },
  { question: "Simplify: d/dx(x + 2).", answer: "1" },
  { question: "What is the integral of a constant c?", answer: "c * x + C" },
  { question: "Find the derivative of x⁵.", answer: "5x^4" },
  { question: "What is the value of the derivative of sin(x) at x = 0?", answer: "1" },
  { question: "Evaluate ∫ 0 dx.", answer: "C" },
  { question: "What is the derivative of cos(x)?", answer: "-sin(x)" },
  { question: "Find the derivative of e^x.", answer: "e^x" },
  { question: "What is the integral of 2x dx?", answer: "x^2 + C" },
  { question: "What is the limit of x/x as x approaches infinity?", answer: "1" },
  { question: "Simplify: d/dx(x² + 3x).", answer: "2x + 3" },
  { question: "What is the derivative of -x?", answer: "-1" },
  { question: "What is the integral of x^0 dx?", answer: "x + C" },
  { question: "What is the limit of (x² - 1)/(x - 1) as x approaches 1?", answer: "2" },
  { question: "If y = x^x, find dy/dx.", answer: "x^x (ln(x) + 1)" },
  { question: "Evaluate the limit lim(x→0) (1 + x)^(1/x).", answer: "e" },
  { question: "Find the maximum value of f(x) = sin(x) + cos(x).", answer: "sqrt(2)" },
  { question: "Evaluate ∫ 1/(x² + 4) dx.", answer: "1/2 * arctan(x/2) + C" },
  { question: "Solve: d²y/dx² + 4y = 0.", answer: "y = C1 cos(2x) + C2 sin(2x)" },
  { question: "If y = e^(x²), find dy/dx.", answer: "2x e^(x^2)" },
  { question: "Evaluate ∫₀π/2 ln(sin(x)) dx.", answer: "-π ln(2)/2" },
  { question: "Find the radius of curvature of y = x³ at x = 1.", answer: "sqrt(178)/27" },
  { question: "Evaluate the limit lim(x→∞) (x - sqrt(x² + 1)).", answer: "-1/2" },
  { question: "If f(x) = |x - 1| + |x + 1|, find the value of f'(x) at x = 0.", answer: "0" },
  { question: "Evaluate lim(x→0) (e^x - e^(-x) - 2x)/(x²).", answer: "1/3" },
  { question: "Find the area enclosed by one loop of the curve r = a(1 + cos(θ)) in polar coordinates.", answer: "3πa²/2" },
  { question: "If f(x) = ∫₀ˣ t²/(t² + 1) dt, find f'(1).", answer: "1/2" },
  { question: "Find the sum of the series ∑₁^∞ (n/(n² + 1)).", answer: "π/2 - 1" },
  { question: "Find the local minimum value of f(x) = x² - 4ln(x), x > 0.", answer: "4" },
];
  
  
  const motivationalQuotes = [
    "Mistakes are the portals of discovery.",
    "Success is not final, failure is not fatal: It is the courage to continue that counts.",
    "Every great achievement was once considered impossible.",
    "Stay positive, work hard, make it happen.",
  ];
  
  // Select a random question for the day
  const todayQuestion = questionPool[Math.floor(Math.random() * questionPool.length)];
  document.getElementById("question").innerText = todayQuestion.question;
  
  // Countdown timer logic
  const nextDay = new Date();
  nextDay.setHours(24, 0, 0, 0); // Midnight
  function updateCountdown() {
    const now = new Date();
    const timeDiff = nextDay - now;
    const hours = Math.floor((timeDiff / (1000 * 60 * 60)) % 24);
    const minutes = Math.floor((timeDiff / (1000 * 60)) % 60);
    const seconds = Math.floor((timeDiff / 1000) % 60);
    document.getElementById("countdown").innerText = `${hours}h ${minutes}m ${seconds}s`;
  }
  setInterval(updateCountdown, 1000);
  
  // Check answer function
  function checkAnswer() {
    const userAnswer = document.getElementById("answer").value.trim();
    const correctAnswer = todayQuestion.answer.trim();
    const messageBox = document.getElementById("message");
  
    if (userAnswer.toLowerCase() === correctAnswer.toLowerCase()) {
      messageBox.style.color = "green";
      messageBox.innerText = "Congrats! That's the correct answer! 🎉";
    } else {
      const randomQuote =
        motivationalQuotes[Math.floor(Math.random() * motivationalQuotes.length)];
      messageBox.style.color = "red";
      messageBox.innerText = `Oops! The correct answer is "${correctAnswer}". ${randomQuote}`;
    }
  }
  