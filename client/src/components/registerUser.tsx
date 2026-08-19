import { type ChangeEvent, useState } from "react";

function RegisterUser() {


    const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
        console.log(e.target.value + "\n" + e.target.name + "\n\n");
        setUser((prev) => ({
            ...prev, [e.target.name]: e.target.value
        }));
    }

    const handleSubmit = async () => {
        event?.preventDefault();
        const url = "https://smt-labs-machinetest.onrender.com/api/users/registerUser";
        const responce = await fetch(url, {
            method: "POST",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(user)
        })

        if (responce.ok) {
            console.log("Registration successfull");
        } else {
            console.log("cannot create user");

        }
    }



    const [user, setUser] = useState({
        name: "",
        dateOfBirth: "",
        password: "",
        email: ""
    });

    const [register, setRegister] = useState("false");
    return (
        <>
            <form>
                <input name="name" placeholder="name" onChange={handleInputChange} value={user.name} />
                <input name="dateOfBirth" type="date" placeholder="date of birth" onChange={handleInputChange} value={user.dateOfBirth} />
                <input name="password" placeholder="password" onChange={handleInputChange} value={user.password} />
                <input name="email" placeholder="email" onChange={handleInputChange} value={user.email} />
                <button onClick={handleSubmit}>submit</button>
            </form>
        </>
    );
}

export default RegisterUser;