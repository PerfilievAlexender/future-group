import React, {Component} from 'react';
import './style.css';
import {allRows, loadingData} from '../../selectors';
import {connect} from 'react-redux';
import {newPage} from '../../action-creators'

class PageSwitcher extends Component {

    state = {
        activePage: 1,
        maxRowsPage: 50,
        begin: null,
        end: null
    };

    render() {

        const {loadingTable} = this.props;

        if (loadingTable) return null

        return (
            <div className='pages'>
                <button
                    className='pages__page btn'
                    onClick={this.onHandleClickPrev}
                >prev
                </button>
                <button
                    className='pages__page btn'
                    onClick={this.onHandleClickNext}
                >next
                </button>
            </div>

        );
    };

    onHandleClickPrev = () => {
        const {newPage} = this.props;
        const rowsCounts = {
            begin: null,
            end: null
        };

        if (this.state.activePage > 1) {
            this.setState({
                activePage: this.state.activePage - 1
            });

            setTimeout(() => {
                rowsCounts.begin = (rowsCounts.begin - this.state.maxRowsPage <= 0) ? this.state.activePage * this.state.maxRowsPage - this.state.maxRowsPage : 0;
                rowsCounts.end = rowsCounts.begin + this.state.maxRowsPage;
                newPage(rowsCounts);
            }, 0);
        }

    };

    onHandleClickNext = () => {
        const {newPage, rows} = this.props;
        const rowsCounts = {
            begin: null,
            end: null
        };

        const pages = Math.floor(rows.length / this.state.maxRowsPage);

        if (this.state.activePage < pages) {
            this.setState({
                activePage: this.state.activePage + 1
            });

            setTimeout(() => {
                rowsCounts.begin = this.state.activePage * this.state.maxRowsPage - this.state.maxRowsPage - 1;
                rowsCounts.end = rowsCounts.begin + this.state.maxRowsPage;
                newPage(rowsCounts);
            }, 0);
        }


    };
}

export default connect(
    (state) => ({
        rows: allRows(state),
        loadingTable: loadingData(state)
    }),
    {newPage}
)(PageSwitcher);