---
title: "useContext hook example"
publishedAt: 2023-09-05
description: "The useContext hook allows us to consume context values from a parent component."
slug: "use-context"
isPublish: true
---

## useContext hook example!

The `useContext` hook allows us to consume context values from a parent component.

01. Create a context.
```jsx
import React, { useContext } from 'react';

const MyContext = React.createContext();

const MyContextProvider = ({ children }) => {
  const [commonData, setCommonData] = useState('No color');

  return (
    <MyContext.Provider value={{ commonData, setCommonData }}>
      {children}
    </MyContext.Provider>
  );
}
```

02. Provide the context to the component tree.

```jsx
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import MyContextProvider from './MyContext';

ReactDOM.render(
  <MyContextProvider>
    <App />
  </MyContextProvider>,
  document.getElementById('root')
);
```

03. Consume the context value in a child component.

```jsx
import React, { useContext } from 'react';
import MyContext from './MyContext';

const ChildComponent = () => {
  const { commonData, setCommonData } = useContext(MyContext);

  return (
    <div>
      <p>Common data: {commonData}</p>
      <button onClick={() => setCommonData('Red')}>Red</button>
      <button onClick={() => setCommonData('Green')}>Green</button>
      <button onClick={() => setCommonData('Blue')}>Blue</button>
    </div>
  );
}
```

## Conclusion

In this article, we learned about the `useContext` hook and how it can be used to consume context values from a parent component. We also explored some common use cases for this hook, such as sharing state between components and managing global application state. If you found this article helpful, please share it with others who might find it useful as well!