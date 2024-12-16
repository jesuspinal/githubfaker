import jsonfile from "jsonfile";
import moment from "moment";
import simpleGit from "simple-git";
import random from "random";

const path = "./data.json";

const markCommit = (x, y) => {
  const date = moment()
    .subtract(1, "y")
    .add(1, "d")
    .add(x, "w")
    .add(y, "d")
    .format();

  const data = {
    date: date,
  };

  // Write the date to the file
  jsonfile.writeFile(path, data, (err) => {
    if (err) {
      console.error("Error writing file", err);
      return;
    }
    // Commit and push to git
    simpleGit()
      .add([path])
      .commit(date, { "--date": date })
      .push()
      .catch((err) => console.error("Error pushing to repository", err));
  });
};

const makeCommits = (n) => {
  if (n === 0) {
    // If no more commits are left to make, just push any outstanding commits
    simpleGit().push().catch((err) => console.error("Error pushing to repository", err));
    return;
  }

  // Generate random week and day offsets
  const x = random.int(0, 54); // Random weeks
  const y = random.int(0, 6);  // Random days
  
  const date = moment()
    .subtract(1, "y")
    .add(1, "d")
    .add(x, "w")
    .add(y, "d")
    .format();

  const data = {
    date: date,
  };
  
  console.log(date); // Log the generated date

  // Write the date to the file
  jsonfile.writeFile(path, data, (err) => {
    if (err) {
      console.error("Error writing file", err);
      return;
    }
    // Commit and recursively call makeCommits with the new number
    simpleGit()
      .add([path])
      .commit(date, { "--date": date })
      .then(() => {
        makeCommits(n - 1);
      })
      .catch((err) => console.error("Error during commit", err));
  });
};

// Start creating 10 commits
makeCommits(10);
