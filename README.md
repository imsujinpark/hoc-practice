# Playing with React
This is a repository I created to play with different React APIs and patterns.

## HOC

### Why use HOC?
* Instead of creating new components called `DogListWithSearch` and `CatListWithSearch`, 
I created an HOC called `withSearch` that wraps around a component that needs a search feature added (which are `DogList` and `CatList` in this case).
* This helped me remove duplucate codes.

### Where to find the examples
* `App`
    * `src/components/withSearch` - HOC
        * `src/components/DogList`
            * `src/components/AnimalCard`
    * `src/components/withSearch` - HOC
        * `src/components/CatList`
            * `src/components/AnimalCard`

## React Hooks

### Where to find the examples
* You can find the files under `src/TheseAreForPractisingHooks`. 

### Why use `useContext`?
* I prevented props-drilling via `context` and prevented unnecessary rerender through the usage of `React.memo`.
* But bear in  mind, `context` is not a state managing tool!

#### Reference
https://flexiple.com/react/introduction-to-higher-order-components-in-react-by-example/