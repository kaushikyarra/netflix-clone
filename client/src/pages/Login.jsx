import { useState, useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import AuthContext from '../context/AuthContext';
import Footer from '../components/Footer';

const Login = () => {
    const [formData, setFormData] = useState({
        username: '',
        password: ''
    });
    const [error, setError] = useState('');
    const { login } = useContext(AuthContext);
    const navigate = useNavigate();

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError('');

        const res = await login(formData.username, formData.password);
        if (res.success) {
            navigate('/');
        } else {
            setError(res.message);
        }
    };

    return (
        <div className="app-container">
            <div className="auth-container">
                <form className="auth-form" onSubmit={handleSubmit}>
                    <h1>Sign In</h1>
                    {error && <div className="error-msg">{error}</div>}

                    <div className="form-group">
                        <input
                            type="text"
                            name="username"
                            placeholder="Username"
                            className="form-input"
                            value={formData.username}
                            onChange={handleChange}
                        />
                    </div>
                    <div className="form-group">
                        <input
                            type="password"
                            name="password"
                            placeholder="Password"
                            className="form-input"
                            value={formData.password}
                            onChange={handleChange}
                        />
                    </div>

                    <button type="submit" className="btn btn-primary" style={{ width: '100%', padding: '16px' }}>
                        Sign In
                    </button>

                    <div style={{ marginTop: '20px', color: '#737373' }}>
                        New to Kodnest? <Link to="/register" style={{ color: 'white' }}>Sign up now</Link>.
                    </div>
                </form>
            </div>
            <Footer />
        </div>
    );
};

export default Login;
