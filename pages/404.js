import Link from "next/link";

const NotFound = () => {
    return ( 
        <div>
            <h1>Not Found</h1>
            <p>Go back to <Link href='/'>Homepage</Link></p>
        </div>
     );
}
 
export default NotFound;