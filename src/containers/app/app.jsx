import React from 'react';
import { connect } from 'react-redux';
import draggableMixin  from '../../mixins/draggable';
import Container from '../container';

/**
 * Draggable item for creating Container or Leaf
 * @class
 * @augments {React.Component}
 */
const ConstructorItem = React.createClass({
    mixins: [draggableMixin],

    render() {
        return (
            <div ref="draggable" className="constructor-item" draggable="true">
                {this.props.children}
            </div>
        )
    }
});

/**
 * Application Component
 * @param props
 * @param props.items hash list of containers and leafs
 * @returns {ReactElement}
 */
const App = (props) => {
    let content = null;
    if (props.items[0]) {
        content = <Container {...props.items[0]} items={props.items} key={props.items[0].id} />
    }
    return (
        <div className="app">
            <div className="app__left-panel">
                <ConstructorItem type="leaf">Create leaf</ConstructorItem>
                <ConstructorItem type="container">Create container</ConstructorItem>
            </div>
            <div className="app__content">
                {content}
            </div>
        </div>
    );
};


export default connect(
    state => state
)(App);
