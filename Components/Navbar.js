import Link from 'next/link';
const Navbar = () => {
    return ( <nav className='w-full bg-white border-gray-200 dark:bg-gray-900'>
        <div className='max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4'>
            <h1>Logo</h1>
            <Link href='/'>Home</Link>
        <Link href='/about'>About</Link>
        <Link href='/demo'>List</Link>
        </div>
        
        
    </nav> );
}
 
export default Navbar;