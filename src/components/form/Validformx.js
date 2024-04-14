export default  function Validform(value){
    const error = {}

    const email_pattern = /^[^\s@]+@[^\s@]+\.[^\s@]{2,6}$/
  if(value.name = ""){
    error.name = "Name is Required"
  }
  if(value.message === ""){
    error.name ="Message is Required"
  }
  if(value.subject=== ""){
    error.name ="Subject is Required"
  }
  if(value.email === ""){
    error.name ="Email is Required"
  }
  if(!email_pattern.test(value.email)){
    error.email = "Email is not correct"
  }
  else(!email_pattern.test(value.email))
  {
    error.email = "Email did'nt match"}
}