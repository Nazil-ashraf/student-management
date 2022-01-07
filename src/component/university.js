import './university.css'
import {useState} from "react";
import Inputs from "../input/inputs";
export function University({universityinput,setuniversityinput}){
    const [id,setid]=useState(1)
    const [university,setuniversity]=useState([])

    // const [input,setInput]=useState({name:'',location:''})
    // const [display,setDisplay]=useState([])
    // function inputname(event){
    //     setInput({...input,name:event.target.value})
    // }
    // function inputLocation(event){
    //     setInput({...input,location:event.target.value})
    // }
    // // console.log(input)
    // function handlesave(){
    //     setDisplay([...display,input])
    // }
    // function onclickUniversity(){
    //     // let n = {...input,departmenttinput}
    //     // setInput({n})
    //     //
    //     //
    //     // setdepartment([...department,departmenttinput])
    //     // let ar=display
    //     // const obj=JSON.parse(ar)
    //     // obj["department"].push(student)
    //     // ar= JSON.stringify(obj)
    //     //
    //     // setDisplay(ar)
    //     // display.department=[student]
    //     // setarr(display)
    // }
    function onselected(universityinput){
        setuniversityinput(universityinput)
    }
    console.log(universityinput)
function handlesave(){

     setuniversity([...university,{id}])
    setid(id+1)

}

function inputchange({id,name,location}){
 university.forEach((item,index)=>{
     if(item.id===id){
         university.splice(index,1,{...item,name,location})
     }
    })
}


    return(
        <div className={"container"}>
            <div className={"container--heading"}>University</div>
            <div className={"container--content"}>
                {/*<div className={"container--content--wrap"}>*/}
                {/*    <div className={"container--content--wrap--text"}>Name</div>*/}
                {/*    <input onChange={inputname} className={"container--content--wrap--input"} />*/}
                {/*    <div className={'container--content--wrap--text'}>Location</div>*/}
                {/*    <input onChange={inputLocation} className={"container--content--wrap--input"}/>*/}
                {/*</div>*/}
                {university.map((item)=><Inputs onselected={onselected} item={item} onchange={inputchange}/>
                    //         <div className={"container--content--wrap"}>
                    //     <div onClick={handledepartment}   className={"container--content--wrap--text"}>Name</div>
                    //     <input onChange={inputname} className={"container--content--wrap--input"} placeholder={item.name}/>
                    //     <div className={'container--content--wrap--text'}>Location</div>
                    //     <input onChange={inputLocation} className={"container--content--wrap--input"}  placeholder={item.location}/>
                    // </div>

                )}
            </div>
            <footer className={"container--footer"}>
            <button onClick={handlesave} className={"container--footer--button"}>Add</button>
                <button className={"container--footer--button"}>Edit</button>
                <button className={"container--footer--button"}>Delete</button>

            </footer>
        </div>
    )
}
 export default University