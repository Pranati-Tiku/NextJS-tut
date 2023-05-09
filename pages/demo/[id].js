export const getStaticPaths=async()=>{
    const res= await fetch('https://jsonplaceholder.typicode.com/users')
    const data=await res.json()
  
    const paths=data.map(person=>{
        return {
            params:{id:person.id.toString()}
        }
    })
    return {
       
        paths:paths,
        fallback:false
    }
}
export const getStaticProps=async(context)=>{
    const id=context.params.id;
    const res=await fetch('https://jsonplaceholder.typicode.com/users'+id)
    const data=await res.json()

    return {
        props:{persons:data}
    }
}
const  Details= ({persons}) => {
    return ( 
        <div className="flex flex-col items-center">
            <h1 className="font-bold text-lg">Details Page</h1>
      
            <p>{persons.name}</p>
            <p>{persons.email}</p>
            
          
        </div>
     );
}
 
export default Details ;