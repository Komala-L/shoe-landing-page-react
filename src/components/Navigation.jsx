const Navigation = () => {
    return (
        <nav className='flex items-center justify-between h-16 w-full px-8 bg-gray-100 relative'>
            <div className='h-16 w-16 flex items-center'>
                <img src='https://t3.ftcdn.net/jpg/03/65/42/00/360_F_365420014_xjsSDkKzrhq4gr9GFzP6S97H7MJyNI5B.jpg' alt='logo' />
            </div>

            <ul className='flex items-center justify-center gap-32'>
            <li> <a href='#'>Menu</a></li>
            <li> <a href='#'>Location</a></li>
            <li> <a href='#'>About</a></li>
            <li> <a href='#'>Contact</a></li>
            </ul>

            <button className='px-5 py-2 bg-red-800 rounded-lg flex items-center justify-center text-white'>Login</button>
        </nav>
    );
};

export default Navigation;