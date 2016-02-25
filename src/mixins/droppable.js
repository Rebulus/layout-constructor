/**
 * @mixin Droppable
 * @desc
 * Needs to have:
 *  - ref="droppable"
 *  - addContainer and addLeaf props
 */
export default {
    componentDidMount() {
        var droppable = this.refs.droppable;

        this.dragEnterCount = 0;

        droppable.addEventListener('dragenter', this.handleDragEnter);
        droppable.addEventListener('dragleave', this.handleDragLeave);
        droppable.addEventListener('dragover', this.handleDragOver);
        droppable.addEventListener('drop', this.handleDrop);
    },

    componentWillUnmount() {
        var droppable = this.refs.droppable;

        this.dragEnterCount = 0;

        droppable.removeEventListener('dragenter', this.handleDragEnter);
        droppable.removeEventListener('dragleave', this.handleDragLeave);
        droppable.removeEventListener('dragover', this.handleDragOver);
        droppable.removeEventListener('drop', this.handleDrop);
    },

    handleDragEnter(event) {
        event.preventDefault();
        event.stopPropagation();

        this.dragEnterCount++;
        this.refs.droppable.classList.add('drag-enter');
    },

    handleDragLeave(event) {
        event.preventDefault();
        event.stopPropagation();

        this.dragEnterCount--;

        if (this.dragEnterCount === 0) {
            this.refs.droppable.classList.remove('drag-enter');
        }
    },

    handleDragOver(event) {
        event.preventDefault();
    },

    handleDrop(event) {
        if (event.stopPropagation) {
            event.stopPropagation();
        }

        this.dragEnterCount = 0;
        this.refs.droppable.classList.remove('drag-enter');

        switch (event.dataTransfer.getData('text/plain')) {
            case 'container':
                this.props.addContainer(this.props.id);
                break;
            case 'leaf':
                this.props.addLeaf(this.props.id);
                break;
        }
    }
}
