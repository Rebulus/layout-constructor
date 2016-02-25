import { expect } from 'chai';
import deepFreeze from 'deep-freeze';
import mlog from 'mocha-logger';
import items from '../../src/reducers';
import * as actions from '../../src/actions';

describe('items reducer', () => {

    beforeEach(function() {
        const addContainer = this.sinon.stub(actions, 'addContainer');
        addContainer.withArgs(0).returns({
            type: 'ADD_CONTAINER',
            payload: {
                id: 1,
                parentId: 0,
                type: 'container',
                content: []
            }
        });
        addContainer.withArgs(1).returns({
            type: 'ADD_CONTAINER',
            payload: {
                id: 2,
                parentId: 1,
                type: 'container',
                content: []
            }
        });
        addContainer.returns({
            type: 'ADD_CONTAINER',
            payload: {
                id: 0,
                parentId: undefined,
                type: 'container',
                content: []
            }
        });

        const addLeaf = this.sinon.stub(actions, 'addLeaf');
        addLeaf.withArgs(0).returns({
            type: 'ADD_LEAF',
            payload: {
                id: 1,
                parentId: 0,
                type: 'leaf'
            }
        });
        addLeaf.withArgs(1).returns({
            type: 'ADD_LEAF',
            payload: {
                id: 2,
                parentId: 1,
                type: 'leaf'
            }
        });
        addLeaf.returns({
            type: 'ADD_LEAF',
            payload: {
                id: 0,
                parentId: undefined,
                type: 'leaf'
            }
        });
    });

    it('should handle initial state', () => {
        expect(items(undefined, {})).to.be.deep.equal({
            items: {}
        })
    });

    it('should add a container, when handle ADD_CONTAINER', function() {
        expect(items(undefined, actions.addContainer())).to.be.deep.equal({
            items: {
                '0': {
                    id: 0,
                    parentId: undefined,
                    type: 'container',
                    content: []
                }
            }
        })
    });

    it('should push a container, when handle ADD_CONTAINER with parentId', function() {
        const newContainer = {
            id: 1,
            parentId: 0,
            type: 'container',
            content: []
        };
        const expectedItems = {
            '0': {
                id: 0,
                parentId: undefined,
                type: 'container',
                content: [newContainer.id]
            },
            '1': newContainer
        };
        let currentItems = {
            '0': {
                id: 0,
                parentId: undefined,
                type: 'container',
                content: []
            }
        };
        deepFreeze(currentItems);

        expect(items({ items: currentItems }, actions.addContainer(0))).to.be.deep.equal({
            items: expectedItems
        });
    });

    it('should push a leaf, when handle ADD_LEAF with parentId', function() {
        const newLeaf = {
            id: 1,
            parentId: 0,
            type: 'leaf'
        };
        const expectedItems = {
            '0': {
                id: 0,
                parentId: undefined,
                type: 'container',
                content: [newLeaf.id]
            },
            '1': newLeaf
        };
        let currentItems = {
            '0': {
                id: 0,
                parentId: undefined,
                type: 'container',
                content: []
            }
        };
        deepFreeze(currentItems);

        expect(items({ items: currentItems }, actions.addLeaf(0))).to.be.deep.equal({
            items: expectedItems
        });
    });

    it('shouldn\'t push a leaf, which the first item, when handle ADD_LEAF', function() {
        expect(items(undefined, actions.addLeaf())).to.be.deep.equal({
            items: {}
        })
    });

    it('shouldn\'t push a container, when handle ADD_CONTAINER with leaf\'s parentId', function() {
        const leaf = {
            id: 1,
            parentId: 0,
            type: 'leaf'
        };
        let currentItems = {
            '0': {
                id: 0,
                parentId: undefined,
                type: 'container',
                content: [leaf.id]
            },
            '1': leaf
        };
        deepFreeze(currentItems);

        expect(items({ items: currentItems }, actions.addContainer(1))).to.be.deep.equal({
            items: currentItems
        });
    });

    it('shouldn\'t push a leaf, when handle ADD_LEAF with leaf\'s parentId', function() {
        const leaf = {
            id: 1,
            parentId: 0,
            type: 'leaf'
        };
        let currentItems = {
            '0': {
                id: 0,
                parentId: undefined,
                type: 'container',
                content: [leaf.id]
            },
            '1': leaf
        };
        deepFreeze(currentItems);

        expect(items({ items: currentItems }, actions.addLeaf(1))).to.be.deep.equal({
            items: currentItems
        });
    });

});
