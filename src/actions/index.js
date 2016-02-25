var uniqueId = 0;

/**
 * @typedef {Object} Container
 * @property {number} id personal id of container
 * @property {number} parentId id of parent item
 * @property {string} type='container'
 * @property {number[]} content array of children item ids
 */

/**
 * @typedef {Object} Leaf
 * @property {number} id personal id of leaf
 * @property {number} parentId id of parent item
 * @property {string} type='leaf'
 */

export const addContainer = (parentId) => {
    return {
        type: 'ADD_CONTAINER',
        payload: {
            id: uniqueId++,
            parentId: parentId,
            type: 'container',
            content: []
        }
    }
};

export const addLeaf = (parentId) => {
    return {
        type: 'ADD_LEAF',
        payload: {
            id: uniqueId++,
            parentId: parentId,
            type: 'leaf'
        }
    }
};
