const Contact = () => {
    return(
        <div>
        <div className="border-2 flex-col">
            <h3>Thanks For Contacting us..!</h3>
            <form className="">
                <input type="text" placeholder="Name"></input>
                <input type="text" placeholder="Email"></input>
                {/* <input type="button" value={"Submit"}></input> */}
                <button>Submit</button>

            </form>
        </div>
    </div>
    )
};

export default Contact;