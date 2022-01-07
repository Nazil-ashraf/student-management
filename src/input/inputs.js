import {useEffect, useState} from "react";

export function Inputs({item,onselected,onchange}){
const[id,setid]=useState(1)
const [name,setname]=useState('')
    const [location,setlocation]=useState('')

    useEffect(() => {
     setname(item.name)
        setid(item.id)
        setlocation(item.location)
    },[item.id]);

    function inputname(event){
    setname(event.target.value)
        onchange({id,name:event.target.value,location})
        onselected({id,name:event.target.value,location})
    }
    function inputlocation(event){
        setlocation(event.target.value)
        onchange({id,name,location:event.target.value})
        onselected({id,name,location:event.target.value})
}
    return(
        <div onClick={()=>onselected({id,name,location})}  className={"container--content--wrap"}>
            <div  className={"container--content--wrap--text"}>Name</div>
            <input onChange={inputname} className={"container--content--wrap--input"}
                   placeholder={item.name} />
            <div className={'container--content--wrap--text'}>Location</div>
            <input onChange={inputlocation} className={"container--content--wrap--input"} placeholder={item.location}/>
        </div>
    )
}
export default Inputs