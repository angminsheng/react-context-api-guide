- Use const `xContext = React.createContext()` to create context.
- xContext is simply the name of the context for example AuthContext, ItemsContext that matches usually the value or state you are passing in the context.
- Pull xContext.Provider and xContext.Consumer out of xContext and export them together in one context file like the example.
- Wrap Provider around your parent component where you want to start passing the state or value.
- `A class component` can consume value from the provider with `static contextType = xContext`
- `A functional component` can consume the value from the provider with `const x = useContext(xContext)`
- You can also use object destructuring if the value is an object like `const{user, setUser} = useContext(userContext)`
