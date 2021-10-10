function Home() {
    return (
    <div>
       <h1>Welcome to The Medications And Complications Registry!</h1>
       <img src={process.env.PUBLIC_URL+"/pano_oralmedications.jpg"}/>
       <h3 id="use-line" >Use Of This Site</h3>
       <h3>Anyone can view the list of medications and related complications</h3>
       <h3>without having to sign up or log in.</h3>
       <h3>----------------------------------------------------------------------------------------</h3>
       <h3>A person who signs up if it is their first time or logs in if they have signed up previously</h3>
       <h3>can view the list of medications and related complications,</h3>
       <h3>add new medications and complications, as well as edit or delete</h3>
       <h3>any complications that they have entered. </h3>
    </div>
    )
}
     
export default Home;