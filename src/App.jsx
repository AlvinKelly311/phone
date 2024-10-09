import React, { useState } from 'react'



const App = () => {
  const [surname, setSurname] = useState("");
  const [firstname, setFirstname] = useState("");
  const [username, setUsername] = useState("");
  const [password,  setPassword] = useState("");
  const [email,  setEmail] = useState("");

  const handSumbmit = (e) => {
    e.preventDefault();
   

    const newData = {
      surname,
      firstname,
      username,
      password,
      email,
      id: Date.now()
    }
    
    // Send the data to a server or store it somewhere

    console.log(newData);
    setSurname("")
    setFirstname("")
    setUsername("")
    setPassword("")
    setEmail("")
    
  }

  return (
    <div className='container'>
      <div className='glass'>
        <div className='profile'>
          <img src='./Screenshot_20-9-2024_125020_www.instagram.com - Copy (2).jpeg' />
          <h2>Al Vin💀</h2>
          <p>:</p>
        </div>
       <form action="" onSubmit={handSumbmit}>
          <div>
          <input type="text" placeholder='ArmStrong' id='name' value={surname} onChange={(e) => setSurname(e.target.value)} required />
          <label htmlFor="surname">Surname</label>
          </div>
      
          <div>
          <input type="text" placeholder='Rebecca' id='name1' value={firstname}onChange={(e)=>setFirstname(e.target.value)} required />
          <label htmlFor="firstname">First Name</label>
          </div>
         
          <div>
          <input type="text" placeholder='@Becca' id='name2' value={username} onChange={(e)=>setUsername (e.target.value)} required />
          <label htmlFor="username">Username</label>
          </div>
          
          <div>
          <input type="password" placeholder='May8@2003' id='password' value={password} onChange={(e)=> setPassword (e.target.value)} required />
          <label htmlFor="password">Password</label>
          </div>
         
          <div>
          <input type="email" placeholder='Rebecca133@gmail.com' id='email' value={email}onChange={(e)=> setEmail (e.target.value)}  required />
          <label htmlFor="email">@Email</label>

          </div>
        

          <button type='submit'>Sign in</button>
        </form>

      

        
      </div>
       
    </div>
  )
}

export default App