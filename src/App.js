import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button'
import { Component } from 'react'

class App extends Component {
    state = {
        person: {
            fullName: "Old Guy Harold",
            bio: "Aliquam in nisi elit. Morbi sit amet dui in enim rutrum efficitur. Sed magna diam, fermentum nec faucibus eleifend, feugiat eget justo. Sed vitae ante nec orci porttitor scelerisque. Etiam eget massa malesuada, vestibulum mi at, posuere velit. Sed a volutpat ex, in sollicitudin dolor.",
            imgSrc: "https://i.chzbgr.com/full/8334924288/hCFACD046/stock-photo-of-hide-the-pain-harold-looking-at-the-camera-with-a-pained-expression",
            profession: "Electrical Engineer"
        },
        isShown: false,
        timerValue: 0,
    }

    timerInterval = null

    componentDidMount() {
        // Start the timer when the component is mounted
        this.timerInterval = setInterval(() => {
        // Update the timer value every second
        this.setState((prevState) => ({
            timerValue: prevState.timerValue + 1,
        }));
        }, 1000);
    }
    componentWillUnmount() {
        // Clear the interval when the component is about to unmount
        clearInterval(this.timerInterval);
    }
    

    render() {
        return (
            <div className='page'>
                <Button 
                    variant='primary' 
                    onClick={() => this.setState({ isShown: !this.state.isShown })}
                >
                    {this.state.isShown ? "Hide" : "Show"}

                </Button>

                {(
                    this.state.isShown ?

                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={this.state.person.imgSrc} />
                        <Card.Body>
                            <Card.Title>{this.state.person.fullName}</Card.Title>
                            <Card.Text>
                                <h3>{this.state.person.profession}</h3>
                                <h6>Bio: {this.state.person.bio}</h6>
                            </Card.Text>
                        </Card.Body>
                    </Card>

                    : ""
                )}

                <Button variant='warning'>Timer: {this.state.timerValue} </Button>
            </div>
        )
    }
}

export default App