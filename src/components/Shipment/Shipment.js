import React, { useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import './Shipment.css'



const Shipment = () => {
    const [user] = useAuthState (auth);
    const [name, setName] = useState();
    const [email, setEmail] = useState();
    const [address, setAddress] = useState();
    const [phone, setPhone] = useState();
    const [error, setError] = useState();
    // const navigate = useNavigate ();

    const handleNameBlur = (event) => {
        setName (event.target.value);
    }

    const handleAddressBlur = (event) => {
        setAddress(event.target.value);
    }

    const handlePhoneBlur = (event) => {
        setPhone(event.target.value);
    }

    const handleCreateUser = (event) => {
        event.preventDefault();
        const shipping = {name, email, address, phone};
        console.log (shipping);
        
    }


    return (
        <div className='form-container'>
        <div>
            <h2 className='form-title'>Shipping Information</h2>
            <form onSubmit={handleCreateUser}>
                <div className="input-group">
                    <label htmlFor="name">Your Name</label>
                    <input onBlur={handleNameBlur} type="text" name="name" id="" required />
                </div>
                <div className="input-group">
                    <label htmlFor="email">Your Email</label>
                    <input readOnly value={user?.email} type="email" name="email" id="" required />
                </div>
                <div className="input-group">
                    <label htmlFor="address">Your Address</label>
                    <input onBlur={handleAddressBlur} type="text" name="text" id="" required />
                </div>
                <div className="input-group">
                    <label htmlFor="number">Your Number</label>
                    <input onBlur={handlePhoneBlur} type="number" name="number" id="" required />
                </div>
                <p style={{color: 'red'}}>
                    {error}
                </p>
                <input className='form-submit shipping' type="submit" value="Add Shipping" />
            </form>

        </div>
    </div>
    );
};

export default Shipment;