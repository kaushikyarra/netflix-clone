import { Link, useNavigate } from 'react-router-dom';
import { useContext, useEffect, useState } from 'react';
import AuthContext from '../context/AuthContext';

const Navbar = () => {
    const { user, logout } = useContext(AuthContext);
    const navigate = useNavigate();
    const [show, setShow] = useState(false);

    const handleLogout = () => {
        logout();
        navigate('/login');
    };

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 100) {
                setShow(true);
            } else {
                setShow(false);
            }
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <div className={`navbar ${show && "scrolled"}`}>
            <Link to="/" className="logo">KODNEST</Link>

            <div className="nav-links">
                {user ? (
                    <>
                        <span style={{ marginRight: '15px' }}>Welcome, {user.username}</span>
                        <button onClick={handleLogout} className="btn btn-primary">Logout</button>
                    </>
                ) : (
                    <>
                        <Link to="/login" className="btn btn-primary" style={{ marginRight: '10px' }}>Sign In</Link>
                    </>
                )}
            </div>
        </div>
    );
};

export default Navbar;
