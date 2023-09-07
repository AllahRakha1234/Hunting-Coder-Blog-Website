import React, { useState } from 'react'
import style from '../styles/Contact.module.css'

const Contact = () => {

    const [email, setEmail] = useState('');
    const [name, setName] = useState('');
    const [desc, setDesc] = useState('');
    const [phone, setPhone] = useState('');

    // SUMBIT HANDER FUNCTION
    const handleSubmit = (event) => {
        event.preventDefault();
        const userData = { email, phone, name, desc };

        if (name === '' || phone === '' || email === '' || desc === '') {
            alert("Fill All The Fields 🧾🧾🧾");
        }
        else {
            // SENDING DATA TO STORE TO CONTACT DIR
            fetch("http://localhost:3000/api/contact", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(userData)
            })
                .then((response) => { return response })
                .then((data) => {
                    if (data.status === 200) {
                        alert("Concern Has Been Sent ✅✅✅");
                        // MAING FIEDS EMPTY AFTER SENDING THE REQUEST
                        setName('');
                        setPhone('');
                        setEmail('');
                        setDesc('');
                    }
                    else if (data.status === 500) {
                        alert("Could Not Sent The Concern ❌❌❌");
                    }
                })
                .catch((error => { console.log("Error: ", error); }))
        }
    }


    // RENDERING CODE

    return (
        <>
            <main className={style.main}>
                <h1 className={style.titleContact}>Contact Us</h1>
                <div className="form">
                    <form className='' id="contact" method="POST">
                        <div className="form-row">
                            <div className="p-1 mt-5">
                                <input type="name" value={name} onChange={(e) => setName(e.target.value)} className={style.formControl} placeholder="Enter name" name="name" id="name" />
                            </div>
                            <div className="p-1 mt-5">
                                <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} className={style.formControl} placeholder="Enter email" name="email" id="email" />
                            </div>
                            <div className="p-1 mt-5">
                                <input type="phone" value={phone} onChange={(e) => setPhone(e.target.value)} className={style.formControl} placeholder="Enter phone number" name="phone" id="phoneNo" />
                            </div>
                            <div className="p-1 mt-5">
                                {/* <input type="textarea" value={desc} onChange={(e) => setDesc(e.target.value)} className={`${style.formControl} ${style.textArea}`} placeholder="Enter your concern" name="desc" id="desc" /> */}
                                <textarea value={desc} onChange={(e) => setDesc(e.target.value)} className={`${style.formControl} ${style.textArea}`} name="desc" id="concern" placeholder="Enter your concern" />
                            </div>
                            <button className={style.btn} onClick={handleSubmit}>Submit</button>
                        </div>
                    </form>
                </div>
            </main>
        </>
    )
}

export default Contact
