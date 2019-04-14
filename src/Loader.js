import React, {Component} from "react";
export default class Spinner extends Component {
    state = {
        loading: false
    };
    fetchData = () => {
        this.setState({loading: true});
        setTimeout(() => {
            this.setState({loading: false});
        }, 500);
    };
    render() {
        const {loading} = this.state;

        return (
            <div>
                <button className="button" onClick={this.fetchData} disabled={loading}>
                    {loading && (<i className="fa fa-refresh fa-spin" style = {{marginRight: "10px"}}/>)}
                    {loading && <span>Loading</span>}
                    {!loading && <span>Click</span>}
                </button>
            </div>
        );
    }
}
