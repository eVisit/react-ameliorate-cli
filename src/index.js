require('colors');

function printUsageAndExit() {
  console.log('Usage: react-ameliorate-cli init {project_name}'.yellow);
  process.exit(1);
}

function parseArgs(argv) {
  if (argv[2] !== 'init')
    printUsageAndExit();

  if (!argv[3] || !(argv[3] + '').trim())
    printUsageAndExit();

  return {
    command: argv[2],
    projectName: argv[3]
  };
}

const options = parseArgs(process.argv);

console.log(options);
