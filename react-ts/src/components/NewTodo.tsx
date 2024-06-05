import React, { useRef } from "react";

const NewTodo: React.FC = () => {
    const refInputRef = useRef<HTMLInputElement>(null);

    const todosSubmitHandler = (event: React.FormEvent) => {
        event.preventDefault();
        const enteredText = refInputRef.current!.value;
        console.log(enteredText);
    };

    return (<form onSubmit={todosSubmitHandler}>
        <div>
            <label htmlFor="todo-text">Todo Text</label>
            <input type="text" id="todo-text" ref={refInputRef} />
        </div>
        <button type="submit">ADD TODO</button>
    </form>);
};

export default NewTodo;