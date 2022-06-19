import { useState } from 'react'

function Student() {

    const [studentList, setStudentList] = useState([
        {
            id: 1,
            name: "Prerna",
            email: "prerna@gmail.com",

        },
        {
            id: 2,
            name: "Neha",
            email: "neha@gmail.com",

        },
        {
            id: 3,
            name: "Sunny",
            email: "sunny@gmail.com",

        }


    ]);

    const [errors, setErrors] = useState({
        nameErr: "",
        emailErr: ""
    })

    const [isForm, setIsForm] = useState(false)


    const [isUpdate, setIsUpdate] = useState(false)
    const [updateIndex, setUpdateIndex] = useState(-1);

    //to access data from form we will make another state 


    const [studentDetail, setStudentDetail] = useState({
        name: "",
        email: ""
    })

    const handleChange = (e, fieldType) => {
        // e is an event in  javascript  to accept values and so many things
        setErrors({
            ...errors,
            nameErr: "",
            emailErr: ""
        })
        let temp = studentDetail;
        temp[fieldType] = e.target.value;
        setStudentDetail({
            ...temp
        })


    }

    // console.log("studentDetail", studentDetail)

    const validation = () => {
        let flag = true;


        if (!studentDetail.email.trim().length) {
            console.log("email err")
            setErrors({
                ...errors,
                emailErr: "Email can not be empty"
            })
            flag = false

        }

        if (!studentDetail.name.trim().length) {

            console.log("name err")
            setErrors({
                ...errors,
                nameErr: "Name can not be empty"
            })

            flag = false
        }




        return flag;

    }



    console.log("errors", errors)

    const handleSubmitForm = () => {
        //assign studentList state into temp varibale 

        const isValid = validation();
        console.log("isValid", isValid)

        if (isValid) {
            const temp = studentList;
            temp.push({
                id: studentList.length + 1,
                name: studentDetail.name,
                email: studentDetail.email
            })

            console.log("temp", temp)

            setStudentList([...temp])

            setIsForm(false)
            setStudentDetail({
                ...studentDetail,
                email:"",
                name:""
            })
        }


    }

    const deleteStudent = (index) => {
        console.log("index del", index);

        const temp = studentList;
        console.log("temp", temp);
        temp.splice(index, 1);

        setStudentList([...temp])
    }



    const updateStudent = (index) => {
        const tempStudent = studentList[index]
        console.log(tempStudent);

        setStudentDetail({
            ...studentDetail,
            name: tempStudent.name,
            email: tempStudent.email
        })

        setIsForm(true);
        setIsUpdate(true);
        setUpdateIndex(index);
    }


    const updateStudentSubmit = () => {
        const temp = studentList;
        temp[updateIndex]["name"] = studentDetail.name;
        temp[updateIndex]["email"] = studentDetail.email;

        console.log("temp", temp)
        setStudentList([...temp]);
        setIsUpdate(false);
        setIsForm(false)
    }




    return (
        <div>
            <h2>Students Page</h2>
            <button onClick={() => {
                setIsForm(true)
                setStudentDetail({
                    name: "",
                    email: ""
                })
                setIsUpdate(false)
            }} >Add Student</button>
            <table className='data-table'>
                <tr>
                    <th>ID</th>
                    <th>NAME</th>
                    <th>EMAIL</th>
                    <th>ACTION</th>
                    <th>Action</th>
                </tr>

                {
                    studentList.map((studentItem, i) => (
                        <tr>
                            <td>{studentItem.id}</td>
                            <td>{studentItem.name}</td>
                            <td>{studentItem.email}</td>
                            <td><button onClick={() => deleteStudent(i)}>DELETE</button></td>
                            <td><button onClick={() => updateStudent(i)}>Update</button></td>
                        </tr>

                    ))
                }
            </table>

            {
                isForm ? (
                    <div>
                        <label style={{ marginRight: "5px" }}>Name:</label>
                        <input value={studentDetail.name} onChange={(e) => handleChange(e, "name")} type="text" />
                        <br />
                        <p style={{ color: "red" }}>
                            {
                                errors.nameErr
                            }
                        </p>

                        <label style={{ marginRight: "5px" }}>Email:</label>
                        <input value={studentDetail.email} onChange={(e) => handleChange(e, "email")} type="email" />
                        <br />
                        <p style={{ color: "red" }}>
                            {
                                errors.emailErr
                            }
                        </p>

                        {
                            isUpdate ? <button onClick={updateStudentSubmit}>Update</button> : <button onClick={handleSubmitForm}>Submit</button>
                        }


                        <button onClick={() => {
                            setIsForm(false)
                            setStudentDetail({
                                name: "",
                                email: ""
                            })
                            setErrors({
                                ...errors,
                                emailErr: "",
                                nameErr: ""
                            })
                        }}>Cancel</button>
                    </div>
                ) : null

            }

        </div >
    )
}

// value means input m dikhanae ke liye nahi denge to input m jayega 
// e javascript ka event h kisi bhi event par e lag sakta h e bhot intsering chiz h wo input m e ki value dege , button par aur kuch , checkbox par check h ya nahi wo dega 

export default Student