import React, {Component} from 'react';
import Header from './components/header';
import Table from './components/table';
import User from "./components/user";
import PageSwitcher from './components/pageSwitcher'


class App extends Component {
    render() {
        return (
            <div>
                <Header/>
                <Table/>
                <User/>
                <PageSwitcher/>
            </div>
        );
    };
}

export default App;
