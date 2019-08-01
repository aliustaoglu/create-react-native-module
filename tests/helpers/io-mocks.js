module.exports = (mysnap) => ({
  fs: {
    outputFile: (name, content) => {
      mysnap.push(
        `* outputFile name: ${name}
content:
--------
${content}
<<<<<<<< ======== >>>>>>>>
`);

      return Promise.resolve();
    },

    ensureDir: (dir) => {
      mysnap.push(`* ensureDir dir: ${dir}\n`);
      return Promise.resolve();
    },
    readFileSync: (jsonPath) => {
      mysnap.push(
        `* fs readFileSync jsonPath: ${jsonPath}\n`);
      return `{ "name": "bogus", "scripts": {} }`;
    },
    writeFileSync: (path, json, options) => {
      mysnap.push(
        `* fs writeFileSync path: ${path} json ${json} options ${JSON.stringify(options)}\n`);
    },
  },
  execa: {
    commandSync: (command, options) => {
      mysnap.push(
        `* execa.commandSync command: ${command} options: ${JSON.stringify(options)}\n`);
    },
  },
});
