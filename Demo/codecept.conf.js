const { setHeadlessWhen } = require("@codeceptjs/configure");
require('./heal.js');
setHeadlessWhen(process.env.HEADLESS);


exports.config = {
  tests: "./*_test.js",
  output: "./output",
  helpers: {
    Playwright: {
      browser: "chromium",
      url: "http://localhost:3000",
      show: true,
    },
  },
  include: {
    I: "./steps_file.js",
  },
  plugins: {
    screenshotOnFail: { enabled: true },
    retryFailedStep: { enabled: true },
    tryTo: { enabled: false },
    pauseOnFail: {},
    htmlReporter: { enabled: true },
    heal: { enabled: true },
  },
  ai: {
    request: async (messages) => {
      const OpenAI = require("openai");
      const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });

      const completion = await openai.chat.completions.create({
        model: "gpt-4o",
        messages,
      });

      return completion?.choices[0]?.message?.content;
    },
  },
  name: "Date-Time-Checker-SWT301",
};
