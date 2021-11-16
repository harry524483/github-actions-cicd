const core = require('@actions/core');
const github = require('@actions/github');

try {
  // throw new Error('Boom!');
  const name = core.getInput('who-to-greet');

  console.log(`Hello ${name}`);

  const time = new Date().toISOString();

  core.setOutput('time', time);

  console.log(JSON.stringify(github, null, '\t'));
} catch (error) {
  core.setFailed(error.message);
}
