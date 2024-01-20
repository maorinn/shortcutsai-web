"use client"

import { Component } from "react";

import { Crisp } from "crisp-sdk-web";

class CrispChat extends Component {
    componentDidMount() {
        Crisp.configure("64a2dd69-bdb2-4cea-b25d-421e8cfcb39b");
    }

    render() {
        return null;
    }
}
export default CrispChat