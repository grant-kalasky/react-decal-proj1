# Answers!
Keep your answers to each checkoff question here for safe keeping. You will need to copy them over to the submission form at the end of the project. 

####1.1 
Here, `ReactDOM.render()` is rendering a React component into the DOM container, both arguments we pass into this function. Specifically, we are rendering the Cart component into the root DOM.

####1.2
The advantage of using Semantic UI is that it allows us to quickly build good-looking components without worrying about styling. The disadvatnage, however, of using this CSS library is that we are limited to their styles and behaviors of their components. If we want to devlop a component that doesn't exactly look or behave like one of the components in Semantic UI, this will be difficult. Also, if we wish to modify the behavior of a Semantic UI component such as a different hover effect, it might be difficult to do so since we're constrained to the styles of the Semantic UI library.

####1.3
We need to wrap `addToCart` with another function because we want to pass an argument into `addToCart` but cannot directly do that when we pass the function into the `onClick` property of the button div. 

####1.4
1.4a) Our ability to map over the dictionary of products from `ProductData` allows us to only have to write one Product component in the Cart's render function. 

1.4b) We don't write a fixed number of Product components because the number of products we may display on our site will not always be the same. Aside from code cleanliness, pulling data from an object allows our website to be dynamic. As data may change on our backend (e.g. the number of products in stock), our app can reflect these changes on the frontend without us having to change the code itself.