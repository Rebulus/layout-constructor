import { expect } from 'chai';
import * as actions from '../../src/actions';

describe('actions', () => {
    it('should create an action to add a container', () => {
        const expectedAction = {
            type: 'ADD_CONTAINER',
            payload: {
                id: 0,
                parentId: 123,
                type: 'container',
                content: []
            }
        };
        expect(actions.addContainer(123)).to.be.deep.equal(expectedAction);
    });

    it('should create an action to add a leaf', () => {
        const expectedAction = {
            type: 'ADD_LEAF',
            payload: {
                id: 1,
                parentId: 123,
                type: 'leaf'
            }
        };
        expect(actions.addLeaf(123)).to.be.deep.equal(expectedAction);
    });
});
