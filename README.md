# To Do List Project

structure:
header
add task input bar
task 1
task 2
task 3

total completed

working:
add todo item to todos list

```
setTodos([...todos, todo]);
```

make todos list old items + new item we added.

set the input field to empty:

```
setTodo("");
```

# Styling using CSS stylesheet / modules

1.  inline-component

    ```
     <div>
      <h1 style={{ color: "blue", fontSize: "140px" }}>Inline Component</h1>
    </div>
    ```

    by passing in a CSS-like object with properties for this individual element. Properties are returned as camelCases.
    set as a variable:

    ```
    const header = { color: "blue", fontSize: "140px" };
    function InlineComponent() {
    return (
     <div>
       <h1 style={header}>Inline Component</h1>
     </div>
    );
    }
    ```

2.  Using separate CSS file
    when we have a file set up, to apply the styling onto the same component:
    CSS:

    ```

    .header {
    color: gray;
    background-color: yellow;
    font: 40px;
    }
    ```

    just apply the class name from css to the className field

    ```

    import "../css/styles.css";

         <div>
            <h1 className="header">Inline Component</h1>
          </div>

    ```

3.  CSS modules

    Essentially it's an individual file for styling a component, names are scoped for that component ONLY.

    ```
    import styles from "./inlinecomponent.module.css";
    ```

    inside CSS:

    ```
    .header {
    color: gray;
    background-color: yellow;
    font: 40px;
    }
    ```

    apply in jsx:

    ```
    <h1 className={styles.header}>Inline Component</h1>
    ```

        these 2 components both used .header as names, but still have different styling output.

# To Do Items Add & Displaying

1. Mapping

```
    {todos.map((item) => (
      <h3 key={item}>{item}</h3>
    ))}
```

essentially we map each item (word in the list) into a jsx and returns it.

so, it is better to return a component like:

```
function TodoItem({item}) {
  return <h3 key={item}>{item}</h3>;
}

export default TodoItem;

```

where each item accepts - item as a prop and display it,
so passing the prop to it from the parent component ToDo.jsx when calling it for display:

```
{todos.map((item) => (
      <TodoItem item={item} key={item} />
    ))}
```
