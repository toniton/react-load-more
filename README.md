# React Load More Hook
This is a react hook for loading more content on scroll to bottom of an element or window.

## Setup Instructions
 - With [React](http://nodejs.org) [installed](http://nodejs.org/en/download), add `react-load-more` dependency to your project.
    ```sh
    $ npm install react-load-more-hook
    ```

## Usage
Import the library in the file you want to use it
```js 
    import { useLoadMore } from 'react-load-more-hook';
```

Create a reference to the container that will trigger the load more when it is scrolled to the bottom
```js
    const { ref } = useRef(null)
    // Add load more hook here
    
    return (<ul ref={ref}>
        ...
    </ul>)
```

Instantiate your load more hook here
```js
    const [isLoadingMore, setIsLoadingMore] = useLoadMore(callback , ref)
```

| Args             | Type          | Default    | Description|
|:----             |:----          |:----       |:----|
| callback| Function| | This is the function you want the hook to call when the element/window is scrolled to the bottom.|
|ref| React useRef| null | This is the reference to the container element.|

`isLoadingMore` is `true` when the container with the window scroll has reached the bottom of the container with the `ref`.

Also you need to manually call `setIsLoadingMore(false)` to tell the hook to notify you of the next scroll to bottom because there is no way the hook can know when you have updated the views or when your `async` call has been completed.


### TLDR;
[Try out demo here](https://stackblitz.com/edit/react-t3y4pd?file=use-load-more.js)

```js
    import { useLoadMore } from 'react-load-more-hook';

    const SampleComponent = () => {
        const loadMoreLogic = () => {
            ...
        }
        const { ref } = useRef(null)
        const [isLoadingMore, setIsLoadingMore] = useLoadMore(()=>loadMoreLogic() , ref)
        useEffect(() => {
            if (isLoadingMore && loadMoreLogicComplete) {
                setIsLoadingMore(false)
            }
        }, [isLoadingMore])
        return (<ul ref={ref}>
            ...
        </ul>)
    }

```


> Cheers, I hope you like what you see.


## Contribute?

Yes sure! There's a playground for you.

* Clone the project

* Install dependencies
```sh
$ npm install
```

* Run the playground
```sh
$ npm run playground
```

* You should see a message like
```sh
[1]  --------------------------------------
[1]        Local: http://localhost:3000
```
> Goto http://localhost:3000 on your computer.

* Code away directly on the source files.

* Test usages in the playground when you think you're finished
```
<project_root_folder>/playground
```
* Build by running

```sh
$ npm run build 
```

* Create a pull request, voila!
