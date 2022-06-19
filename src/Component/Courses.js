import { useState } from 'react'
function Courses() {
  const [select, setSelect] = useState("BCA");
  const [arrayData, setArrayData] = useState([]);

  const handleChange = (e) => {
    const value = e.target.value
    // console.log(value);
    setSelect(value)
  }
  

  const submit = () => {
    const list = arrayData;
    list.push(select);
    // console.log(list);
    setArrayData([...list])
  }
  console.log(select);

  return (

    <div>
      <h2>Courses</h2>
      <label style={{ marginRight: "5px" }}>Choose a Course:</label>
      <select onChange={(e) => handleChange(e)}>
        <option value="BCA">BCA</option>
        <option value="B.Tech.">B.Tech.</option>
        <option value="BBA">BBA</option>
        <option value="BSc">BSc</option>
        <option value="B.Com">B.Com</option>
        <option value="BA">BA</option>
      </select>
      <button onClick={submit}>Submit</button>

      <ul>
        {
          arrayData.length > 0 ? (
            <>{
              arrayData.map((item, i) => (
                <li className='list'>{item}</li>
              )
              )
            }</>
          ) : null

        }
      </ul>
    </div>
  )
}

export default Courses;