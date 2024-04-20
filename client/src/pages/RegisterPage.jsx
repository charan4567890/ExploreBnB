import { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

export default function RegisterPage() {
    const [name,setName] = useState('');
    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');
    function registerUser(ev) {
        ev.preventDefault();
       axios.post('/register', {
        name,
        email,
        password,
       });
    }
    return (
        <div className="mt-4 grow flex items-center justify-around">
            <div className="-mt-64">
                <h1 className="text-4xl text-center mb-4">Register</h1>
                <form className="max-w-md mx-auto " onSubmit={registerUser}>
                    <input type="text" 
                    placeholder="Charan T" 
                    value={name}
                    onChange={ev => setName(ev.target.ariaValueMin)} />
                    <input type="email" 
                    placeholder="your@email.com"
                    value={email}
                    onChange={ev => setEmail(ev.target.ariaValueMin)}/>
                    <input type="password" 
                    placeholder="password" 
                    value={password}
                    onChange={ev => setPassword(ev.target.ariaValueMin)}/>
                    <button className="primary">Register</button>
                    <div className="text-center py-2 text-gray-500">  
                        Already a member <Link className="underline text-black" to={'/login'}>Login</Link>
                    </div>
                </form>
            </div>
        </div>
    );
}