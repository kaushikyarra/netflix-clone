import { useState, useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import AuthContext from '../context/AuthContext';
import Footer from '../components/Footer';

const Register = () => {
    const [formData, setFormData] = useState({
        username: '',
        email: '',
        password: '',
        phone: '',
        name: ''
    });
    const [error, setError] = useState('');
    const { register } = useContext(AuthContext);
    const navigate = useNavigate();

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError('');

        // Basic Validation
        if (!formData.username || !formData.email || !formData.password || !formData.phone || !formData.name) {
            setError('All fields are required');
            return;
        }

        const res = await register(formData);
        if (res.success) {
            navigate('/login');
        } else {
            setError(res.message);
        }
    };

    return (
        <div className="app-container">
            <div className="auth-container">
                <form className="auth-form" onSubmit={handleSubmit}>
                    <h1>Sign Up</h1>
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
                            type="text"
                            name="name"
                            placeholder="Full Name"
                            className="form-input"
                            value={formData.name}
                            onChange={handleChange}
                        />
                    </div>
                    <div className="form-group">
                        <input
                            type="email"
                            name="email"
                            placeholder="Email Address"
                            className="form-input"
                            value={formData.email}
                            onChange={handleChange}
                        />
                    </div>
                    <div className="form-group">
                        <input
                            type="tel"
                            name="phone"
                            placeholder="Phone Number"
                            className="form-input"
                            value={formData.phone}
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
                        Sign Up
                    </button>

                    <div style={{ marginTop: '20px', color: '#737373' }}>
                        Already have an account? <Link to="/login" style={{ color: 'white' }}>Sign In now</Link>.
                    </div>
                </form>
            </div>
            <Footer />
        </div>
    );
};

export default Register;
