# M01W01 - The Dev Workflow

### To Do
- [] Introduction
- [] Curriculum Overview
- [] Logistics
- [] Tools
- [] Advice
- [] Exercise

### Curriculum Overview

- These [slides](https://docs.google.com/presentation/d/1_NWYcPhS6Q3hQKXnh09Eufl7hs45yBLbUBZhWyvqeSc/) contain a high-level overview of the Lighthouse Labs web development curriculum

### Approach to Lecture
  * Zoom link will be posted on Discord 10 minutes before lecture time
  * 2-hour long, 10-minute break in the middle
  * Ask questions in chat, or raise your hand (`Alt + Y`)
  * Video on if you can
  * Don't code along (feel free to take short notes or run small experiments)
  * Lecture notes and recording will be accessible on Compass afterwards
  * Don't expect to understand 100% of the covered content immediately. Some concepts and patterns takes a lot of time and practice to click.
  * Get in the habit of coming back to working examples (in-class or your own experiments) when working on exercises or new problems
  * Review lecture projects and videos
  * Ask questions (during lectures, assistance requests)

### Tools
  * Aware of your environment (native Mac or Windows, virtual machines e.g., WSL, Vagrant/Virtual Box)
  * Integrated Development Environment: VS Code highly recommended. Useful addons -- Ex. Better Comments,ESLint, Prettier, GitLens
  * Terminal: [a crash course](https://www.youtube.com/watch?v=uwAqEzhyjtw)
  * Git/GitHub
    * [Mental model](https://dsinecos.github.io/blog/Git-basics)
    * Most common commands: [a simple guide](https://up1.github.io/git-guide/index.html)
      * `git init`
      * `git add PATH/FILE.EXT` will add a file to the stage
        * Can instead use `--all`, `-A`, or `.` to represent all
      * `.gitignore` is a file you can list files / folders to never include in your `--all` adds... think files like `.DS_Store` on Mac
      * `git branch` shows current branch
      * `git branch -M main` renames your current branch to `main`
      * `git commit -m "message"` commits staged (added) files to a snapshot
      * `git remote -v` checks for remotes (places to pull/push to) set up locally
      * `git remote add origin ORIGIN_URL` add a new remote (named `origin` in this example)
      * `git push origin branch-name` sends your commits to your remote location
    * Workflow
      * To create a git repository in a directory, run `git init`
      * `git status` will show you which files have been changed in the working directory
      * To add files to the staging area, use `git add <filename>` or `git add .` to add all changes
      * Commit your changes using `git commit -m 'a meaningful commit message'`
      * Finally, push your code to github using `git push origin master` or `git push origin main`
      * **NOTE:** This workflow is good for solo projects. When you work as part of a team (such as during mid-terms and finals), you will likely need a different workflow.

#### VSCode
* Get familiar with your IDE (UI, features, keyboard shortcuts)
  * Go to Help-->Keyboard Shortcuts Reference
  * Note they may vary from OS to OS, so use this link in your own VSCode for accurate shortcuts
    * [MacOS](https://code.visualstudio.com/shortcuts/keyboard-shortcuts-macos.pdf)
    * [Linux](https://code.visualstudio.com/shortcuts/keyboard-shortcuts-linux.pdf)
    * [Windows](https://code.visualstudio.com/shortcuts/keyboard-shortcuts-windows.pdf)
* Do not use GitHub co-pilot or strong tools that predict and write code for you
  * When learning, it is crucial that you understand the code you're writing, and write things with intent
  * Think about your code, plan it, and try something!
  * Writing line-by-line will help your typing speed
  * Writing line-by-line helps you memorize common keywords and methods
  * Writing line-by-line gets you more familiar with the language's syntax
  * Writing line-by-line builds habits and muscle memory

### Problem solving
* Work incrementally: write and execute small changes
  * Break the problem down into a series of smaller (and easier to understand) steps
  * Small changes allow us to more easily see where errors/bugs are in our code
* Use proper indentation
  * Indentation helps us to see how our code is nested (eg. which lines of code are inside the function or if statement)

  ```js
  // no indentation
  const printArray = function (arr) {
  arr.forEach(function(element) {
  console.log(element);
  });
  };
  console.log('All done!');

  // proper indentation
  const printArray = function (arr) {
    arr.forEach(function(element) {
      console.log(element);
    });
  };
  console.log('All done!');
  ```

* Try to avoid copy/pasting code; type it out for yourself and try to understand what you are typing
* Errors are your friends
  * Try to decipher the error message before you Google it
  * Errors help to show us where we made a mistake and being able to read them is a valuable skill

#### Asking For Help
* Struggle on your own for a while (15-30 minutes), but not too long
* Tell mentors what is not working and what you've tried
* **Google** the error message/what you want to accomplish; make sure to add the programming language (e.g., JavaScript) or runtime (e.g., nodejs) to your search term (eg. "remove elements from array javascript")
* **StackOverflow** is useful for seeing multiple possible solutions to a problem (DO NOT copy and paste)
* **Mozilla Developer Network (MDN)** is the `de facto` official JavaScript and web platform documentation

### Advice
* Be curious
* Be disciplined
* Connect with people
* Be kind to yourself

### Useful Links
- [Mozilla Developer Network](https://developer.mozilla.org/en-US/)
- [Node Documentation](https://nodejs.org/en/docs/)
- [JS Tutor](http://pythontutor.com/javascript.html#mode=edit)
