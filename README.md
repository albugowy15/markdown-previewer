# Simple Markdown Previewer

This is a React Project to automatically parses markdown text into HTML This is useful if you're writing markdown (ultimately targeting HTML) and want quick preview.

## Tech stack

- **ReactJs**
- **Redux** - To store some state so it can be used accros different components
- **Tailwind Css**
- **Marked.js** - Low-level markdown compiler for parsing markdown without caching or blocking for long periods of time. This will run the actual logic behind converting the markdown.

## What have I learned

In this project, I try to use a framework for state management, namely Redux. I save the markdown text entered in the editor into the store in redux. Then convert it to html element with Marked.js. The syntax is like this `marked(marker)` where `marker` is a state stored in the redux store. To display the HTML is by using `dangerouslySetInnerHTML` which is an attribute under DOM Elements in React. This means that if in React you have to set the HTML programmatically or from an external source, you will have to use `dangerouslySetInnerHTML` instead of traditional innerHTML in Javascript. While using `dangerouslySetInnerHTML`, you will have to pass an object with a `__html` key. (Note the key consists of two underscores.)

Here is how I will do that:

```html
<div
    className={
        isExpandPreviewer
        ? "bg-white w-full h-screen p-3 overflow-scroll"
        : "bg-white w-full h-[600px] p-3 overflow-scroll"
    }
    dangerouslySetInnerHTML={{
        __html: marked(marker),
    }}>
</div>
```
