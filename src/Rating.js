import React, { Component } from 'react'

class Rating extends Component {
    constructor(props) {
        super(props)
        this.state = {
        }
    }

    render() {
        let stars = []
        for (let i = 0; i < 5; i++) {
            if (this.props.rating > i) {
                stars.push(<i onClick={() => this.props.setRate(i + 1)} className="fas fa-star"></i>)
            } else {
                stars.push(<i onClick={() => this.props.setRate(i + 1)} className="far fa-star"></i>)
            }
        }
        return (
            <div>
                {stars}
            </div>
        )
    }
}

export default Rating