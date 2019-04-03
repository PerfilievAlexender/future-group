import React, {Component} from 'react';
import Header from './components/header';
import Table from './components/table';
import User from "./components/user";

class App extends Component {
    render() {
        return (
            <div>
                <Header/>
                <Table/>
                <User/>
            </div>
        );
    };
}

export default App;
