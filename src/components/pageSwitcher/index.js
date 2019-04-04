import React, {Component} from 'react';
import './style.css';
import {allRows} from '../../selectors';
import {connect} from 'react-redux';

class PageSwitcher extends Component {

    state = {
        activePage: 1
    }

    render(){
        const {rows} = this.props;
        const {activePage} = this.state;
        const maxRowsPage = 50;
        const pageCount = Math.ceil(rows.length / maxRowsPage);
        
        const arrPages = []; 
        for (let i = 1; i <= pageCount; i++) {
            arrPages.push(i)
        };

        const canPrevious = activePage !== 1;
        const canNext = activePage !== pageCount;
        const firsPage = activePage === 1;
        const lastPage = activePage === pageCount;
        const previousPage = activePage - 1;
        const nextpage = activePage + 1;



        const Pageslist = arrPages.map((page, index) => {
            return (
                <button 
                    className = 'pages__page'
                    key = {index}
                    onClick = {this.onHandleClick}
                    value = {page}               
                >{page}</button>
            )
        });




        return (
          <div className = 'pages'>
              {Pageslist}
          </div>

      );  
    };

    onHandleClick = (evt) => {
        this.setState({
        activePage: evt.target.value,
        
        })
    };
}

export default connect(
    (state) => ({
        rows: allRows(state) 
    })
    )(PageSwitcher);