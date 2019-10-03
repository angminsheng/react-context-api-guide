## React context api introduction
- Use const `xContext = React.createContext()` to create context.
- xContext is simply the name of the context for example AuthContext, ItemsContext that matches usually the value or state you are passing in the context.
- Pull xContext.Provider and xContext.Consumer out of xContext and export them together in one context file like the example.
- Wrap Provider around your parent component where you want to start passing the state or value.
- `A class component` can consume value from the provider with `static contextType = xContext`
- `A functional component` can consume the value from the provider with `const x = useContext(xContext)`
- You can also use object destructuring if the value is an object like `const{user, setUser} = useContext(userContext)`

We can try to seperate the context into different context provider so that the state or value of each context provider is not too big and messy.

Attention: In order to use multiple context provider, the class component has to wrapped with all the context consumer that you are using. The `static contextType = xContext` is only for class component accessing single context provider.


