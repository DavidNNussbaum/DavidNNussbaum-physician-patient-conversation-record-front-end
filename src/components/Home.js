function Home() {
    return (
    <div>
       <h1>Welcome to The Physician Patient Conversation Record!</h1>
       <img src={process.env.PUBLIC_URL+"/doctor_on_phone.jpg"}/>
       <h3 id="use-line" >Use Of This Site</h3>
       <h3>Once you have signed up or logged in you can create or choose a patient and add, edit, or delete a conversation. </h3>
    </div>
    )
}
     
export default Home;