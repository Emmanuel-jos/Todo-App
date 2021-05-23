
import './Todos.css'
import {useState} from 'react'

function Todos() {
    const [str,setstr]=useState('')
    const [todo,setodo]=useState([])


    const handleSubmit=()=>{setodo([...todo,{text: str,id: Date.now(),status: false,deleted: false}]); setstr('')}

    const handleKeypress=e=>{
        if(e.key==="Enter"){
            handleSubmit();
        }
    }

    return (

        <div className="outer">
            <div className="inner">
                <div className="header">
                    <h2 className="title"> My Todo App </h2>
                </div>
                <div className="body">
                    <div className="insidebody">
                        <input value={str} id="myinput" onKeyPress={handleKeypress}  onChange={(e)=>{setstr(e.target.value)}} type="text" placeholder= "Add Items" />
                    
                        <i id="trigger" onClick={handleSubmit} className="fas fa-plus"></i>
                        {console.log(...todo)}
                    </div>
                    <div className="todos">   
                    {todo.map((obj)=>{
                        if(obj.status===false && obj.deleted===false)
                        return(
                        <div className="todo">
                        <div className="left">
                            <input onChange={(e)=>{
                                setodo(todo.filter((obj1)=>{
                                    if(obj.id===obj1.id)
                                    {
                                        obj1.status=true
                                    }
                                    return obj1;
                                }))
                            }} value={obj.status} type="checkbox" name="" id="" />
                            <p>{obj.text}</p>
                        </div>
                        <div className="right">
                            <i onClick={()=>{
                                setodo(todo.filter((obj1)=>{
                                    if(obj1.id===obj.id)
                                    {
                                        obj1.deleted=true
                                    }
                                    return obj1;
                                }))
                            }} className="fas fa-times" ></i>
                        </div>
                    </div>)
                    else return null;
                    })} 
                        
                    </div>         
                </div>
            </div>
                        <div id="container">
                            <div className="innerleft">
                                <h1 className="outsideh1">Active </h1>
                                {todo.map((obj)=>{
                                    if(obj.status===false && obj.deleted===false)
                                    return(
                                        <h1 className="insideh1">{obj.text}</h1>
                                    )
                                    else return null;
                                    
                                })}
                            </div>
                            <div className="innermiddle">
                            <h1 className="outsideh1">Deleted </h1>
                                {todo.map((obj)=>{
                                    if(obj.deleted===true)
                                    return(
                                        <h1 className="insideh1">{obj.text}</h1>
                                    )
                                    else return null
                                })}
                            </div>
                            <div className="innerright">
                            <h1 className="outsideh1">Completed </h1>
                                {todo.map((obj)=>{
                                    if(obj.status===true)
                                    return(
                                        <h1 className="insideh1">{obj.text}</h1>
                                    )
                                    else return null;
                                    
                                })}
                            </div>
                        </div>
                 
        </div>
    )
}

export default Todos

