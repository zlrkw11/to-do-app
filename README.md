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

    import "../css/styles.css";

         <div>
            <h1 className="header">Inline Component</h1>
          </div>

    ```


    ```
