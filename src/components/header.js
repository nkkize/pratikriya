import React from "react";

export default class Header extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <ul>
                    {/* TODO: Add routes */ }
                    <li><a href="https://www.google.com">Home</a></li>
                    <li>Contact</li>
                </ul>
            </div>
        );
    }

}