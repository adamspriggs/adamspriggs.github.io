import React, { Component } from 'react'
import { Link } from 'gatsby'
const { Component } = require("react");

const StyledContainer = styled.header`
    position: fixed;
    top: 0;
    padding: 0px 50px;
    z-index: 11;
    width: 100%;
`;

class Nav extends Component {

    render() {
        return (
            <StyledContainer>
                <Link
                    to="/"
                >
                    Home
                </Link>
            </StyledContainer>
        )
    }
}