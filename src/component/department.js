import './department.css'
import {useState} from "react";
import Inputs from "../input/inputs";
export function Department({departmentinput,setdepartmentinput,selecteduniversity}){
    const [id,setid]=useState(1)
    const [department,setdepartment]=useState([])
    // function inputdepname(event){
    //     setdepartmentinput({...departmenttinput,depname:event.target.value})
    // }
    // function inputdeplocation(event){
    //     setdepartmentinput({...departmenttinput,deplocation:event.target.value})
    // }
function onselected(departmentinput){
    setdepartmentinput(departmentinput)
}
function savestudent(){
if(selecteduniversity.id){
    setdepartment([...department,{id,universityid:selecteduniversity.id}])
    setid(id+1)
}
}
function inputchange({id,name,location}){
        department.forEach(function (item,index){
        if(item.id===id){
            department.splice(index,1,{...item,name,location})
        }
        })
    }
    console.log(department)

    return(
        <div className={"container"}>
            <div className={"container--heading"}>Department</div>
            <div className={"container--content"}>



                {department.filter((data)=>{return data.universityid === selecteduniversity.id }).map((item)=><Inputs item={item} onselected={onselected} onchange={inputchange}/>

                )}
            </div>
            <footer className={"container--footer"}>
                <button onClick={savestudent} className={"container--footer--button"}>Add</button>
                <button className={"container--footer--button"}>Edit</button>
                <button className={"container--footer--button"}>Delete</button>

            </footer>
        </div>
    )
}export default Department