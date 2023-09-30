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
