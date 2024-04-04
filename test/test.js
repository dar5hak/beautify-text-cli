const test = require("ava");
const nixt = require("nixt");

test.cb("stdin via pipe", (t) => {
  nixt()
    .run('echo "Hello world" | beautify')
    .stdout("“Hello world”")
    .end(() => {
      t.end();
    });
});

test.cb("interactive stdin", (t) => {
  nixt()
    .run("beautify")
    .stdin('"Hello world"')
    .stdout("“Hello world”")
    .end(() => {
      t.end();
    });
});

test.cb("single file", (t) => {
  nixt()
    .run("beautify test1.txt")
    .stdout("“Hello world”")
    .end(() => {
      t.end();
    });
});

test.cb("glob", (t) => {
  nixt()
    .run("beautify test*.txt")
    .stdout("“Hello world\nWait — ermm…”")
    .end(() => {
      t.end();
    });
});
