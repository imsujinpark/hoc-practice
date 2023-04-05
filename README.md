# Practicing React HOC

## Purpose of the HOC Usage
* Instead of creating new components called `DogListWithSearch` and `CatListWithSearch`, 
I created an HOC called `withSearch` that wraps around a component that needs a search feature added (which are `DogList` and `CatList` in this case).
* This helped me remove duplucate codes.

## Structure
* `App`
    * `src/components/withSearch` - HOC
        * `src/components/DogList`
            * `src/components/AnimalCard`
    * `src/components/withSearch` - HOC
        * `src/components/CatList`
            * `src/components/AnimalCard`

### Reference
https://flexiple.com/react/introduction-to-higher-order-components-in-react-by-example/