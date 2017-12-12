import React from 'react';
import { connect } from 'react-redux';
import Paper from 'material-ui/Paper';

function Home() {
    const style = {
        img: {
            width: '100%',
            display: 'block'
        }
    }


    return (<div>
        <h1><center>Margaret Hamilton Interplanetary Academy</center></h1>
        <img style={style.img}
            src="http://anotherimg.dazedgroup.netdna-cdn.com/1050/azure/another-prod/350/6/356573.jpg" />
    </div >
    );
}

export default Home