## React Redux Notes

## STATE

globalized state

## ACTION

describes an action that's gonna be "activated" by the user when clicked

```javascript
const increment = () => {
  return {
    type: "INCREMENT",
  };
};
const decrement = () => {
  return {
    type: "DECREMENT",
  };
};
```

## REDUCER

```javascript
const counter = (state = 0, action) => {
  switch (action.type) {
    case "INCREMENT":
      return state + 1;
  }
};
```

let store = createStore(counter);

# Display in the console

```javascript
store.subscribe(() => console.log(store.getStore()));
```

## DISPATCH

```javascript
store.dispatch(increment());
```
