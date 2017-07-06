# js2-1-angular2-todo

If anyone wants to download and run our project, they can run $ npm install and $ bower install to retrieve their own local versions of dependencies. For this reason, we should always ignore the dependency files.


### Create initial files
0. folder: app
1. index.html
2. package.json
3. > npm install bower -g (if not already)
4. > bower init
5. .gitignore
6. folder: resources
7. styles.css in styles folder
8. tsconfig.json
9. gulpfile.js
10. Root component (already in body of HTML)
11. In the project directory, create a folder called app and a app.component.ts file inside it. This is the standard file name for root components.
12. app/app.module.ts
13. app/main.ts
14. systemjs.config.js to top level of directory

### Run commands
15. > npm install
16. > bower install
17. > gulp build
18. > gulp serve
  (Should see stuff at localhost:3000)
19. > bower install bootstrap --save
20. RUN GULP AND SERVE



### Folder structure:
I. angular2-todo
  A. bower.json
     index.html
     package.json
  B. resources
      images
      js  (any js that is NOT part of Angular)
      styles

###
