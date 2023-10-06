# nextjs-13-dave

Redoing all nextjs-13 projects from dave cray

next-02:

- Doing some simple experiments using the routing system in Next.js,
  the linking is very similar to react router.
- Create an about page and a layout file specific to both the home and the about page.
- create links to go back and forth to the about page.
- css styles can be created global, per page, or per layout meaning page and children. So the same file and styles name at multiple levels is possible.
- next has a cool automatic function for loading states, that applies react suspense under the hood.
- You can also make cool local error states, so that an error does not crash the rest of the application.

next-03

- This project has a home page, a page that shows the users and a page that shows individual user info.
- In the new next there is no pages folder anymore everything files from this are now in the app directory.
- there is now a metadata type that you can specify to a layout or an individual page.
- The metadata can be specified dynamically, and because duplicate requests are deduplicated you can just do the request again when constructing the metadata.
- Also, react.suspense can be usefull when you have multiple fetch requests because you can do one fetch and then show that and suspense the rest, make a loading state till the second fetch is finished.
- The userPosts component is a good example of this, it gets a promise as props and they only show when the promise is resolved.

next-04

- Here we transformed the ssr page, because it had a link with an id, to a SSG page by providing the potential id's to the server. Using the build command, it can be checked whether a page is statically, ssr, or ssg, or client generated.
- ssg is recommended when possible therefore you do provide these arguments when possible.
- It also includes incremental static regeneration, so the data is first loaded and then updated on the server with a defined timer and then the statically served pages change.

next-05

- In this project we are combining client and server side rendering, we are doing client side searching. So created a client side search bar.
- We are creating a search component that shows uses the wikipedia. This has form when we sumbit, we dynamically create a new page with the search results.
  This has to be SSR component, because dont know beforehand what the url with the search parameter will be.

next-06
-adding tailwind again and add a tailwind typography plugin that can style md files without applying classes.

- showing a profile picture, and using some font-awesome icons.

next-07

- In this project, Im exploring route handling. Route handlers in next js are really cool. You have api functionalities inside next, and you can use hidden api keys to do requests and then show the results in your app without hosting a seperate backend.
- Just making some simple routes, handling requests and returning responses.
