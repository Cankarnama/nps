

const express = require('express')
const app = express()
const port = 3000
const personell =[
    {
        "IVAN":{
        id:0,
        fullName:"Ivan Saso",
        Age:24,
        dob:"20-may-1998",
        complexion:"chocolate",
        maritalStatus:"single",

    },
    
        "Karen":{
            id:1,
            occupation:"Software Engineering",
            gender:"female",
            maritalStatus:"single",
            complexion:"chocolate",
        },
        
        "Dennis":{
            height: 1.9,
            weight:8.2,
         }

            

        },



    ]



app.get('/', (req, res) => {
  res.send('Hello World!')

});
app.get('/nsp',(req,res) =>{
    res.json(personell
        )}),

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
