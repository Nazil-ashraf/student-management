import "./student.css"
import Inputs from "../input/inputs";
import {useState} from "react";
export function Students({studentinput,setstudentinput,universityinput,departmentinput}){
const[student,setstudent]=useState([])
    const [id,setid]=useState(1)



    function onselected(studentinput){
        setstudentinput(studentinput)
    }
    function addstudent(){
        if(departmentinput.id && universityinput.id){
            setstudent([...student,{id,universityid:universityinput.id,departmentid:departmentinput.id}])
            setid(id+1)
        }
    }
    function inputchange({id,name,location}){
    student.forEach((item,index)=>{
        if(item.id==id){
            student.splice(index,1,{...item,name,location})
        }
    })
    }

    return(
        <div className={"container"}>
            <div className={"container--heading"}>Student</div>
            <div className={"container--content"}>

                {/*<div className={"container--content--wrap"}>*/}
                {/*    <div className={"container--content--wrap--text"}>Name</div>*/}
                {/*    <input onChange={inputdepname} className={"container--content--wrap--input"} />*/}
                {/*    <div className={'container--content--wrap--text'}>Location</div>*/}
                {/*    <input onChange={inputdeplocation} className={"container--content--wrap--input"}/>*/}
                {/*</div>*/}


                {student.filter((data)=>{return data.departmentid === departmentinput.id}).map((item)=>
                    <Inputs onselected={onselected} item={item} onchange={inputchange}/>
                    // <div className={"container--content--wrap"}>
                    //     <div className={"container--content--wrap--text"}>Name</div>
                    //     <input onChange={inputstudentname} className={"container--content--wrap--input"}
                    //            placeholder={i tem.studentname} />
                    //     <div className={'container--content--wrap--text'}>Location</div>
                    //     <input onChange={inputstudentaddress} className={"container--content--wrap--input"} placeholder={item.deplocation}/>
                    // </div>

                )}
            </div>
            <footer className={"container--footer"}>
                <button onClick={addstudent} className={"container--footer--button"}>Add</button>
                <button className={"container--footer--button"}>Edit</button>
                <button className={"container--footer--button"}>Delete</button>

            </footer>
        </div>
    )
} export default Students