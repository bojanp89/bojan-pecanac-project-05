import React from 'react';

// create a stateful component which will display the information based on which object(countries) in the array has been selected.
class Print extends React.Component {
    constructor(){
        super();
        this.state = {
            // name: {}
        }
        console.log(this.state)
    }
    
    // if user searches "Canada", print the information of the object that has a 'name property' of 'canada.'
    // map over countriesArray, if the text input equals the object that has a 'name property' of it, print it below.
    render() {
        return (
            <div>
                <h2></h2>
            </div>
        )
    }
}

export default Print