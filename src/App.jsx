import React  from 'react';
import  Header from  "./Header";
import  Footer from  "./Footer";
import CreateNote from "./CreateNote";
import  Notes from  "./Notes";
import './index';
import { useState } from 'react';

const App =()=>{
const[addItem,setDataItem]=useState([]);
    const addNote=(notes)=>{
        setDataItem((prevData)=>{
            return[...prevData, notes]
    
        })
    }
    const onDelete=(id)=>{
        setDataItem((oldData)=>
         oldData.filter((currdata,indx)=>{
            return indx !== id;
        }))
    }
    return ( 
    <>
        <Header/>
        <CreateNote passNotes={addNote}/>
    

       { addItem.map((val,index) =>{
            return (
                <Notes
                key={index}
                id={index}
                title={val.title}
                content={val.content}
                deleteItem={onDelete}
                />
            )
        })
    }
        <Footer/>
    </>
    )
}

export default App;