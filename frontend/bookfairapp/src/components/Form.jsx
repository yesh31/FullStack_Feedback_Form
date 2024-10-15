import { React, useState } from 'react';
import axios from 'axios';

function Form() {
    let [username, setUsername] = useState('');
    let [note, setNote] = useState('');
    const handleSubmit = async () => {
        try {
            axios.post('http://localhost:7000/addfeedback', { username, note });
            alert(`Thanks ${username} for the feedback!!!!`);
            setUsername('');
            setNote('');
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <h1>Feedback Form</h1>
                <div className='ms-2 my-2'>
                    <label>
                        Name <br></br>
                        <input type="text" className="form-control" value={username} onChange={(e) => setUsername(e.target.value)} placeholder="Name of the user" required />
                    </label>
                    <br></br>
                    <label>
                        Feedback <br></br>
                        <input type="text" className='form-control' value={note} onChange={(e) => setNote(e.target.value)} placeholder="Feedback" required />
                    </label>
                    <br></br>
                </div>
                <button className="btn btn-primary" type="submit">Submit</button>
            </form>
        </div>
    )
}

export default Form;