import { useState } from 'react'
function Teacher() {

    // useEffect(() => {
    //     //first time when component is mounted 
    // }, [])

    // useEffect(() => {
    //     //it will be called when teacherlist will be updated 
    // }, [teacherList])


    const [teacherList, setTeacherList] = useState([
        {
            id: 1,
            name: "Deepesh",
            email: "deepesh@gmail.com",
            subject: "physics"
        },
        {
            id: 2,
            name: "Ajay",
            email: "ajay@gmail.com",
            subject: "chemistry"
        },
        {
            id: 3,
            name: "Neemisha",
            email: "neemisha@gmail.com",
            subject: "biology"
        }

    ]);

    const [errors, setErrors] = useState({
        nameErr: "",
        emailErr: "",
        subjectErr: ""
    })

    const [isForm, setIsForm] = useState(false);
    const [isUpdate, setIsUpdate] = useState(false);
    const [updateIndex, setUpdateIndex] = useState(-1);

    const [teacherDetail, setTeacherDetail] = useState({
        name: "",
        email: "",
        subject: ""
    })



    const handleChange = (e, fieldType) => {
        setErrors({
            ...errors,
            nameErr: "",
            emailErr: "",
            subjectErr: ""
        })
        let temp = teacherDetail;
        temp[fieldType] = e.target.value;
        setTeacherDetail({
            ...temp
        })

    }
    // console.log("teacherDetail", teacherDetail);


    const validation = () => {
        let flag = true;
        if (!teacherDetail.name.trim().length) {
            console.log("name err");
            flag = false;
            setErrors({
                ...errors,
                nameErr: "Name can not be empty"
            })
        }

        else if (!teacherDetail.email.trim().length) {
            console.log("email err");
            flag = false;
            setErrors({
                ...errors,
                emailErr: "Email can not be empty"
            })
        }

        else if (!teacherDetail.subject.trim().length) {
            console.log("subject err");
            flag = false;
            setErrors({
                ...errors,
                subjectErr: "Subject can not be empty"
            })
        }

        return flag

    }


    // console.log("errors", errors);


    const handleSubmitForm = () => {

        const isValid = validation();
        console.log("isValid", isValid);

        if (isValid) {
            const temp = teacherList;
            temp.push({
                id: teacherList.length + 1,
                name: teacherDetail.name,
                email: teacherDetail.email,
                subject: teacherDetail.subject
            })

            console.log("temp", temp);

            setTeacherList([...temp])

        }
    }

    const deleteTeacher = (index) => {
        console.log("index del", index);

        const temp = teacherList;
        console.log("temp", temp)
        temp.splice(index, 1);

        setTeacherList([...temp])
    }
    const updateTeacher = (index) => {
        const tempTeacher = teacherList[index];
        //  console.log(tempTeacher);

        setTeacherDetail({
            ...teacherDetail,
            name: teacherDetail.name,
            email: teacherDetail.email,
            subject: teacherDetail.subject
        })
        setIsForm(true);
        setIsUpdate(true);
        setUpdateIndex(index)

    }

    const updateTeacherSubmit = () => {
        const temp = teacherList;
        temp[updateIndex]["name"] = teacherDetail.name;
        temp[updateIndex]["email"] = teacherDetail.email;
        temp[updateIndex]["subject"] = teacherDetail.subject;
    // console.log(temp);

    setIsUpdate(false);
    setIsForm(false)

}

return (
    <div>
        <h2>Teachers Page</h2>
        <button onClick={() => (
            setIsForm(true)
        )}>Add Teacher</button>

        <table className='data-table'>
            <tr>
                <th>ID</th>
                <th>NAME</th>
                <th>EMAIL</th>
                <th>SUBJECT</th>
                <th>ACTION</th>
            </tr>

            {
                teacherList.map((teacherItem, i) => (
                    <tr>
                        <td>{teacherItem.id}</td>
                        <td>{teacherItem.name}</td>
                        <td>{teacherItem.email}</td>
                        <td>{teacherItem.subject}</td>
                        <td><button onClick={() => deleteTeacher(i)}>DELETE</button></td>
                    </tr>
                )
                )
            }
        </table>
        {

            isForm ? (
                <div>
                    <label style={{ marginRight: "5px" }}>Name:</label>
                    <input onChange={(e) => handleChange(e, "name")} type=" text" />
                    <br />
                    <p style={{ color: "red" }}>
                        {
                            errors.nameErr
                        }

                    </p>
                    <label style={{ marginRight: "5px" }}>Email:</label>
                    <input onChange={(e) => handleChange(e, "email")} type="email" />
                    <br />
                    <p style={{ color: "red" }}>
                        {
                            errors.emailErr
                        }

                    </p>
                    <label style={{ marginRight: "5px" }}>Subject:</label>
                    <input onChange={(e) => handleChange(e, "subject")} type="text" />
                    <br />
                    <p style={{ color: "red" }}>
                        {
                            errors.subjectErr
                        }

                    </p>
                    {
                        isUpdate ? <button onClick={{ updateTeacherSubmit }}>Update</button> : <button onClick={handleSubmitForm}>Submit</button> 
                    }
                    <button onClick={() => (
                        setIsForm(false)
                    )}>Cancel</button>
                </div>
            ) : null


        }



    </div>

)
    }

export default Teacher