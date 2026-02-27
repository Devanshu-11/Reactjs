import './css/Error.css';

const Error = () => {
    return (
        <div className="error-container">
            <h1>404</h1>
            <p>Oops! The page you are looking for does not exist.</p>
            <a href="/">Go back to Home</a>
        </div>
    );
};

export default Error;