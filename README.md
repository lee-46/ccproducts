# ccproducts
A case study for displaying Credit Cards product page using Angular, Angular Material, in-memory-api

# Deploying to Github-Pages

 ## install required
        npm install angular-cli-ghpages
 ## changes required before deploy into github pages
 Need to specify complete path as baseHref for routing to work
 
 If you are using angular cli, then in angular.json you need to add/update under **deploy options baseHref**
 
 **JsonPath:**
 
        projects.<YourProjectName>.architect.deploy.options.baseHref
 
  Format should be as below
  
       https://<YourUserId>.github.io/<RepositoryName>/
        
 ## next step 
        ng deploy
        
 For first time angular-cli-github pages will automatically create **gh-pages** and deploy
 
 Second time and forth, it updated and deploys automatically.
    

### someuseful if need
https://malcoded.com/posts/angular-reactive-form-validation/

https://malcoded.com/posts/angular-fundamentals-reactive-forms/

