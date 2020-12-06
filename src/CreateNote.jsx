import React, { useState }  from 'react';
import Button from '@material-ui/core/Button';
import AddIcon from '@material-ui/icons/Add';

const CreateNote =(props)=>{
    const[notes,setNote]= useState({
        title:"",
        content:""
    })
    const[expand,setExpand]=useState(false)
    const InputEvent=(event)=>{
        const{name,value}= event.target
        setNote((prevData)=>{
            return {
                    ...prevData,
                    [name]:value
                }
        }
        )
    }
    const addEvent=()=>{
        props.passNotes(notes);
        setNote({
            title:"",
            content:""
        })
    }
    const expandIt=()=>{
        setExpand(true)
    }
    const backToNormal=()=>{
        setExpand(false)
    }
    return(
    <>
        <div className="main_note" onDoubleClick={backToNormal}>
            <form>
                {expand?(
                <input type="text" name='title' value={notes.title} onChange={InputEvent} placeholder="Title" autoComplete="off"/>
                ):null}
                <textarea rows="" column ="" name='content' value={notes.content} onChange={InputEvent}  onClick= {expandIt} placeholder="Write a note..."/>
                {expand?(
                <Button className="btn_p" onClick={addEvent}>
                    <AddIcon className="plus_Sign"/>
                </Button>):null}
            </form>
        </div>
        
    </>
    )
}

export default CreateNote;