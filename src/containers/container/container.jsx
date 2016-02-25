import React from 'react';
import Leaf from '../../components/leaf';
import { connect } from 'react-redux';
import droppableMixin  from '../../mixins/droppable';
import { addContainer, addLeaf } from '../../actions';

/**
 * Container component
 * @desc
 * Connected with actions addContainer and addLeaf
 * @class
 * @augments {React.Component}
 */
let Container = React.createClass({
    mixins: [droppableMixin],

    propTypes: {
        items: React.PropTypes.object.isRequired,
        id: React.PropTypes.number.isRequired,
        parentId: React.PropTypes.number,
        type: React.PropTypes.string,
        content: React.PropTypes.array.isRequired,
        addContainer: React.PropTypes.func.isRequired,
        addLeaf: React.PropTypes.func.isRequired
    },

    render() {
        const items = this.props.items;

        return (
            <div ref="droppable" className="container">
                <h4 className="container__title">{'Container ' + this.props.id}</h4>
                <div className="container__content">
                    {
                        this.props.content.map(function(childIndex) {
                            const child = items[childIndex];
                            switch (child.type) {
                                case 'container':
                                    return (
                                        <Container items={items} {...child} key={child.id} />
                                    );
                                case 'leaf':
                                    return (
                                        <Leaf {...child} key={child.id} />
                                    );
                            }
                        })
                    }
                </div>
            </div>
        )
    }
});

Container = connect(
    null,
    { addContainer, addLeaf }
)(Container);

export default Container;
