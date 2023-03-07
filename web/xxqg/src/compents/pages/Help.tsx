import React, {Component} from "react";
import {getAbout} from "../../utils/api";

class Help extends Component<any, any> {

    constructor(props: any) {
        super(props);
        this.state = {
            about: ""
        };
    }

    componentDidMount() {
        getAbout().then((value)=>{
            this.setState({
                about:value.data

            })
        })

    }
    render() {
        return <>
            <h1 style={{color:"red",margin:10}}>感谢打开此页,不过没有什么帮助</h1><br/>
            <h2 style={{margin:10}}>求是网：<a href="http://m.qstheory.cn/">http://m.qstheory.cn/</a></h2>
			<h2 style={{margin:10}}>中国国家地理：<a href="http://download.dili360.com/">http://download.dili360.com/</a></h2>
            <br/><h2 style={{margin:10}}>{this.state.about}</h2>
        </>
    }
}

export default Help
