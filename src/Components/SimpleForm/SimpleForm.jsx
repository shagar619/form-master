

const SimpleForm = () => {

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('form submitted');
        console.log(e.target.name.value);
        console.log(e.target.email.value);
        console.log(e.target.phone.value);
    }


    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input type="text" name="name" />
                <br />
                <input type="email" name="email" />
                <br />
                <input type="number" name="phone" />
                <br />
                <input type="submit" value="Submit" />
            </form>
        </div>
    );
};

export default SimpleForm;