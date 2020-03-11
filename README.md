Demo how to use git.

Git command usually use:

git init                              : initialize git repo
git config --global user.name ""      : set username
git config --global user.email ""     : set user email

git status                            : check working directory status
git add [filename] or .               : add file to staging area
git commit [-m] ""                    : commit to git repo /w message
git log                               : show history
git show <obj name>                   : show git commit /w obj name (get it from git log)
git diff                              : compare modified files in working area to files in git repo

git checkout -- <filename>            : discard changes in working directory
git restore <filename>

git reset HEAD <filename>             : remove file from staging area
git restore --staged <filename>

git branch                            : list all branches and highlight current branch

git checkout <branch>                 : switch to branch
git switch <branch>

git checkout -b <branch>              : create branch and switch to branch
git switch -c <branch>

git merge <branch>                    : merge branch to the current branch

git branch -D <branch>                : force delete branch