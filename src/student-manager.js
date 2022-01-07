import "./student-manager.css"
import University from "./component/university";
import Department from "./component/department";
import Students from "./component/students";
import {useState} from "react";
function StudentManager(){
    const [universityinput,setuniversityInput]=useState({})
    const [departmentinput,setdepartmentinput]=useState({})
    const [inputstudent,settinputstudent]=useState({})


    //
    // // const [display,setDisplay]=useState([])
    // const [student,setstudent]=useState([])
    // const [department,setdepartment]=useState([])
    //
    // // const [arr,setarr]=useState([])
    // // function inputname(event){
    // //     setInput({...input,name:event.target.value})
    // // }
    // // function inputLocation(event){
    // //     setInput({...input,location:event.target.value})
    // // }
    // // // console.log(input)
    // // function handlesave(){
    // //     setDisplay([...display,input])
    // // }
    // // console.log(display)
    // function inputdepname(event){
    //     setdepartmentinput({...departmenttinput,depname:event.target.value})
    // }
    // function inputdeplocation(event){
    //     setdepartmentinput({...departmenttinput,deplocation:event.target.value})
    // }
    // // console.log(departmenttinput)
    // function inputstudentname(event){
    //    settinputstudent({...inputstudent,studentname:event.target.value})
    // }
    // function inputstudentaddress(event){
    //     settinputstudent({...inputstudent,studentlocation:event.target.value})
    // }
    // function addstudent(){
    //     setstudent([...student,inputstudent])
    // }
    //
    // function savestudent(){
    //     // let n = {...input,departmenttinput}
    //     // console.log(n)
    //     // setdepartment([{...input,n}])
    //     // setInput({n})
    //     setdepartment([...department,departmenttinput])
    //     setInput({...input,department})
    // }
    // console.log(input)
    // // console.log(department)
    //
    // function onclickUniversity(){
    // let n = {...input,departmenttinput}
    //     setInput({n})
    //
    //
    //     setdepartment([...department,departmenttinput])
    //     // let ar=display
    //     // const obj=JSON.parse(ar)
    //     // obj["department"].push(student)
    //     // ar= JSON.stringify(obj)
    //     //
    //     // setDisplay(ar)
    //     // display.department=[student]
    //     // setarr(display)
    // }
    // // console.log(input)
    // // console.log(department)
    //
    // function onclickdepartment(){
    //
    //     setstudent([...student,inputstudent])
    // }

    // console.log(display)
  return(
      <div className={"student-management"}>
      {/*<University inputname={inputname} inputLocation={inputLocation} handlesave={handlesave} display={display} handledepartment={onclickUniversity}/>*/}
      {/*     <Department inputdepname={inputdepname} inputdeplocation={inputdeplocation} savestudent={savestudent} student={department} arr={arr} onclickdepartment={onclickdepartment}/>}*/}
      {/*    <Students inputstudentname={inputstudentname} addstudent={addstudent} inputstudentaddress={inputstudentaddress} student={student} />*/}
<University universityinput={universityinput} setuniversityinput={setuniversityInput}/>
          <Department departmentinput={departmentinput} setdepartmentinput={setdepartmentinput} selecteduniversity={universityinput}/>
          <Students studentinput={inputstudent} setstudentinput={settinputstudent} departmentinput={departmentinput} universityinput={universityinput} />
      </div>
  )

}
 export default StudentManager