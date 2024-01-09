# dom-events-quiz-notes

## Quiz Questions

After completing this exercise, you should be able to discuss or answer the following questions:

- Why do we log things to the console?
  to display the output which helps debug our code

- What is the purpose of events and event handling?
  the system you are programming produces a signal when an events occurs & provides a mechanism when the event occurs.
  an events handler is a block of code that runs when the event fires

- Are all possible parameters required to use a JavaScript method or function?
  no, bc we don't need to use the event in the code

- What method of element objects lets you set up a function to be called when a specific type of event occurs?
  addEventListener()

- What is a callback function?
  a function passed into another function as an argument, which is then invoked inside the outer function to complete some kind of routine or action

- What object is passed into an event listener callback when the event fires?
  a specialized Event object with a key property that tells you which key was pressed

- What is the `event.target`? If you weren't sure, how would you check? Where could you get more information about it?
  it's a property of an event object that refers to the element that triggered the event
  MDN

- What is the difference between these two snippets of code?
  `js
    element.addEventListener('click', handleClick)
    `
  `js
    element.addEventListener('click', handleClick())
    `
  1st - reference, triggers action
  2nd - is calling function, triggers immediately

## Notes

All student notes should be written here.

How to write `Code Examples` in markdown

for JS:

```javascript
const data = 'Howdy';
```

for HTML:

```html
<div>
  <p>This is text content</p>
</div>
```

for CSS:

```css
div {
  width: 100%;
}
```
