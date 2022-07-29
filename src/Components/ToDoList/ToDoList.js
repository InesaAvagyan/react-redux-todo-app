import { useCallback, useRef} from "react";
import { useDispatch, useSelector } from "react-redux"
import { addTodos, checked, remove } from "../../store/TodoSlice/TodoSlice";

import './ToDoList.css'

const ToDoList = () => {

    const inputRef = useRef(null)

    const dispatch = useDispatch()

    const todos = useSelector((state) => {return state.todos})

    const onSubmitHandler = useCallback((e) => {
        e.preventDefault()
        dispatch(addTodos(inputRef.current.value))
        inputRef.current.value = ''
    },[])

    const handleChangeChecked = useCallback((todos) => {
        dispatch(checked({complete: todos.complete, id: todos.id}))
    })

    const deleteHandler = useCallback((todos) => {
        dispatch(remove(todos.id))
    })

    return(
        <>
                <form onSubmit={(e) => onSubmitHandler(e)} className='form'>
                    <input 
                        type="text"
                        ref={inputRef}
                        placeholder = 'Create new task...'
                    />
                    <button className="btn" type="submit">Add Todo</button>
                </form>

                <ul>
                {
                    todos.length !== 0 ? todos.map((el, index) => (
                      <>  
                      <div className="todo" key={index}>
                            <li  className="list"  key={el.id} style ={{textDecoration : el.complete ? 'line-through' : ''}}>
                                {el.title}  

                                <label className="container">
                                    <input 
                                        type="checkbox" 
                                        checked={el.complete}
                                        onChange = {() => handleChangeChecked(el)}
                                    />
                                    <button className="btn"
                                        onClick={()=> deleteHandler(el)}>Delete</button>
                                    <span className="checkmark"></span>                                
                                </label>               
                            </li>
                        </div>
                        </>
                    )) : <h1 style={{color: 'rgb(75, 75, 189)'}}>You have no tasks</h1>
                }
                </ul>   
        </>

    )
}


export default ToDoList