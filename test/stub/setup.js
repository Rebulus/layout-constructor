import sinon from 'sinon';
import chai from 'chai';
import sinonChai from 'sinon-chai';

chai.use(sinonChai);

beforeEach(function() {
    this.sinon = sinon.sandbox.create();

});

afterEach(function() {
    this.sinon.restore();

    // Очистка контекста тестов от созданных в нём, в процессе выполнения, элементов
    for (var key in this) {
        if (this.hasOwnProperty(key)) {
            delete this[key];
        }
    }
});
