# COM458-Assignment2

## This repo is for use in the development of Assignment 2 - COM458

Responsibilites:
- Harry: Booking Page
- David: Membership Page
- Therese: Contact Page
- Ross: Private Hire Page

---

# Git Commits Step-By-Step

## Uploading changes to your working branch
1. git status
2. git add . (or git add <specific file path>)
3. git commit -m 'your commit message'
4. git push
  
## Uploading changes from your working branch to develop (when ready for others to use your code)
  1. git status (make sure there are no outstanding changes left to commit to your working branch)
  2. git checkout develop
  3. git merge <your name with capital first letter>
  4. git push
  5. git checkout <your name with capital first letter>
  6. git merge develop
  
## Checking that your working branch is up to date with any changes made (should be done daily at a minimum)
  1. git fetch
  2. git merge develop
  3. git push
