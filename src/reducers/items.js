const leaf = (state, action) => {
    switch (action.type) {
        case 'ADD_LEAF':
            return Object.assign({}, action.payload);
        default:
            return state;
    }
};

const container = (state, action) => {
    switch (action.type) {
        case 'ADD_CONTAINER':
            return Object.assign({}, action.payload);
        default:
            return state;
    }
};

/**
 * Add a new item in a parentItem and create a new sate
 * @param {Object} previousState previous state
 * @param {Container|Leaf} parentItem
 * @param {} childItem
 */
const addItemToContent = (previousState, parentItem, childItem) => {
    parentItem = Object.assign({}, parentItem, {
        content: [...parentItem.content, childItem.id]
    });

    return Object.assign({}, previousState, {
        [childItem.id]: childItem,
        [parentItem.id]: parentItem
    });
};

const items = (state = {}, action) => {
    let parentItem;
    let childItem;
    switch (action.type) {
        case 'ADD_LEAF':
            parentItem = state[action.payload.parentId];
            if (parentItem && parentItem.type === 'container') {
                childItem = leaf(undefined, action);
                return addItemToContent(state, parentItem, childItem);
            }
            return state;
        case 'ADD_CONTAINER':
            if (action.payload.parentId === undefined) {
                return {
                    '0': container(undefined, action)
                }
            }

            parentItem = state[action.payload.parentId];

            if (parentItem && parentItem.type === 'container') {
                childItem = container(undefined, action);
                return addItemToContent(state, parentItem, childItem);
            }

            return state;
        default:
            return state;
    }
};

export default items;
