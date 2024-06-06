import React, { useRef } from "react";
import './NewTodo.css';

type NewTodoProps = {
    onAddTodo: (text: string) => void;
};

const NewTodo: React.FC<NewTodoProps> = props => {
    const refInputRef = useRef<HTMLInputElement>(null);

    const todosSubmitHandler = (event: React.FormEvent) => {
        event.preventDefault();
        const enteredText = refInputRef.current!.value;
        props.onAddTodo(enteredText);
    };

    return (<form onSubmit={todosSubmitHandler}>
        <div className="form-control">
            <label htmlFor="todo-text">Todo Text</label>
            <input type="text" id="todo-text" ref={refInputRef} />
        </div>
        <button type="submit">ADD TODO</button>
    </form>);
};

export default NewTodo;