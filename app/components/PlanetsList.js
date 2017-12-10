import React from 'react';
import { withRouter, NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import NewPlanetEntry from './NewPlanetEntry'
import { GridList, GridTile } from 'material-ui/GridList';
import IconButton from 'material-ui/IconButton';
import Subheader from 'material-ui/Subheader';
import StarBorder from 'material-ui/svg-icons/toggle/star-border';

function PlanetsList(props) {
    const { planets } = props;
    const tilesData = planets
    const styles = {
        root: {
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'space-around',
        },
        gridList: {
            display: 'flex',
            overflowY: 'auto',
        },
    };
    return (
        <div>
            <div style={styles.root}>
                <GridList
                    cellHeight={600}
                    style={styles.gridList}>
                    {tilesData && tilesData.map((tile) => (
                        <NavLink to={`/PlanetsList/${tile.id}`} key={tile.id}>
                            < GridTile
                                key={tile.imgURL}
                                title={tile.name}
                                subtitle={<span><b>{tile.description}</b></span>}
                                actionIcon={<IconButton><StarBorder color="white" /></IconButton>}
                            >
                                <img src={tile.imgURL} />
                            </GridTile>
                        </NavLink>
                    ))}
                </GridList>
            </div>
            <NewPlanetEntry />
        </div>
    )
}

const mapStateToProps = function (state) {
    return {
        planets: state.planets
    };
};

export default withRouter(connect(mapStateToProps)(PlanetsList));


// 
