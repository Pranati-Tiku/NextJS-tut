import Link from "next/link";

//fecth data inside fun.async fun runs at built time and component rendered
export const getStaticProps= async()=>{

    const res=await fetch('https://jsonplaceholder.typicode.com/users');
    const data=await res.json();
     
    return {
        props:{persons:data}
    }
}
//runs before comp render.
//fetch data wait for data and puts into comp so render with data inside.
//useEffect in browser ..prerender till they reach B so fetch datta before render so rendered components have data in it before

const Demo = ({persons}) => {
    return ( <div className="flex flex-col items-center p-4">
        <h1 className="p-4 font-bold text-lg">ALL USERS</h1>
        {persons.map(person=>{
            return(
                <Link key={person.id} href={'/demo/'+ person.id} className="p-4">
                    
                        <h3>{person.name}</h3>
                 
                </Link>
            )
        })}
    </div> );
}
 
export default Demo;