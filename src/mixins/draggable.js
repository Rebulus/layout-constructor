/**
 * @mixin Droppable
 * @desc
 * Needs to have:
 *  - ref="draggable"
 */
export default {
    componentDidMount() {
        var draggable = this.refs.draggable;

        draggable.addEventListener('dragstart', this.handleDragStart);
        draggable.addEventListener('dragend', this.handleDragEnd);
    },

    componentWillUnmount() {
        var draggable = this.refs.draggable;

        draggable.removeEventListener('dragstart', this.handleDragStart);
        draggable.removeEventListener('dragend', this.handleDragEnd);
    },

    handleDragStart(event) {
        event.dataTransfer.effectAllowed = 'move';
        event.dataTransfer.setData('text/plain', this.props.type);

        this.refs.draggable.classList.add('drag-start');
    },

    handleDragEnd() {
        this.refs.draggable.classList.remove('drag-start');
    }
}
