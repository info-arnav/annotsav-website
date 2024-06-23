# annotsav-website

# Info

1) tailwind.config.js file has been updated with all the necessary colors that we will use.

2) all the images are present in assets/image folder.

3) components folder will contain all the components.

# Instructions for collaborator 
- `main` is the production branch. Don't make changes into it.
- `dev` is the  development branch. All the collaborator will push their codes to this branch.

# How to collaborate
1) Clone the repo locally: 
- `git clone <repo_url>`
2) Every collaborator must create a separate branch
- `git branch checkout -b <dev-your_name>`. eg: git branch checkout -b dev-amaan
3) Before coding a new feature, it is advised to pull the code from remote `dev` branch to prevent any type of conflict.
- move to <dev-your_name> branch  : `git checkout <dev-your_name>`
- pull the remote branch : `git pull origin dev`
4) Commit the changes 
- `git add <changed_files>`
- `git commit -m "your message"`
5) Push the changes to remote 
- If you are pushing for the first time : `git push --set-upstream origin <dev-your_name>`
- If not : `git push`
6) Create a pull 
- Create a pull request to merge **dev-your_name** branch to **dev** branch. 
- Add **amaan** as a reviewer. 
