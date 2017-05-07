const expect = require('chai').expect;
const should = require('chai').should();
const sinon = require('sinon');
const requesterModule = require('../public/scripts/requester.js')[0];
const templaterModule = require('../public/scripts/templater.js')[0];
const dataModule = require('../public/scripts/data.js')[0];
const usersControllersModule = require('../public/scripts/controllers/usersControllers.js')[0];

describe('unit testing with mocha, chai and sinon', () => {
    describe('public/', () => {
        describe('scripts/', () => {
            describe('requester.js', () => {                
                it('expect `requester` to be an object', () => {
                    expect(requesterModule).to.be.a('object');
                });

                it('`requester` should be an object', () => {
                    requesterModule.should.be.a('object');                    
                });

                describe('requester.get', () => {                    
                    it('expect `requester.get` to be a function', () => {
                        expect(requesterModule.get).to.be.a('function');          
                    });

                    it('`requester.get` should be a function', () => {
                        requesterModule.get.should.be.a('function');
                    });

                    it('expect sinon stub of `requester.get` to have been called once', function() {
                        let stubParameter = 'stub parameter',
                            expectedReturn = 'requester.get stub return-value',
                            stub = sinon.stub(requesterModule, 'get');

                        stub.returns(expectedReturn);

                        let stubReturn = requesterModule.get(stubParameter);

                        expect(requesterModule.get).to.have.been.calledOnce;
                        expect(stubReturn).to.equal(expectedReturn);

                        stub.restore();
                    });
                });

                describe('requester.putJSON', () => {
                    it('expect `requester.putJSON` to be a function', () => {
                        expect(requesterModule.get).to.be.a('function');
                    });

                    it('`requesterModule.get` should be a function', () => {
                        requesterModule.get.should.be.a('function');
                    });

                    it('expect sinon stub of `requester.putJSON` to have been called once', function() {
                        let stubParameter = 'stub parameter',
                            expectedReturn = 'requester.putJSON stub return-value',
                            stub = sinon.stub(requesterModule, 'putJSON');

                        stub.returns(expectedReturn);

                        let stubReturn = requesterModule.putJSON(stubParameter);

                        expect(requesterModule.putJSON).to.have.been.calledOnce;
                        expect(stubReturn).to.equal(expectedReturn);

                        stub.restore();
                    });
                });

                describe('requester.postJSON', () => {
                    it('expect `requester.postJSON` to be a function', () => {
                        expect(requesterModule.postJSON).to.be.a('function');
                    });

                    it('`requester.postJSON` should be a function', () => {
                        requesterModule.postJSON.should.be.a('function');
                    });

                    it('expect sinon stub of `requester.postJSON` to have been called once', function() {
                        let stubParameter = 'stub parameter',
                            expectedReturn = 'requester.postJSON stub return-value',
                            stub = sinon.stub(requesterModule, 'postJSON');

                        stub.returns(expectedReturn);

                        let stubReturn = requesterModule.postJSON(stubParameter);

                        expect(requesterModule.postJSON).to.have.been.calledOnce;
                        expect(stubReturn).to.equal(expectedReturn);

                        stub.restore();
                    });
                });

                describe('requester.getJSON', () => {
                    it('expect `requester.getJSON` to be a function', () => {
                        expect(requesterModule.getJSON).to.be.a('function');
                    });

                    it('`requester.getJSON` should be a function', () => {
                        requesterModule.getJSON.should.be.a('function');
                    });

                    it('expect sinon stub of `requester.getJSON` to have been called once', function() {
                        let stubParameter = 'stub parameter',
                            expectedReturn = 'requester.getJSON stub return-value',
                            stub = sinon.stub(requesterModule, 'getJSON');

                        stub.returns(expectedReturn);

                        let stubReturn = requesterModule.getJSON(stubParameter);

                        expect(requesterModule.getJSON).to.have.been.calledOnce;
                        expect(stubReturn).to.equal(expectedReturn);

                        stub.restore();
                    });
                });
            }); ////endOf requester.js tests

            describe('templater.js', () => {
                it('expect `templater` to be an object', () => {
                    expect(templaterModule).to.be.a('object');
                });

                it('`templater` should be a object', () => {
                    templaterModule.should.be.a('object');
                });

                describe('templater.get', () => {
                    it('expect `templater.get` to be a function', () => {
                        expect(templaterModule.get).to.be.a('function');
                    });

                    it('`templater.get` should be an object', () => {
                        templaterModule.should.be.a('object');
                    });

                    it('expect sinon stub of `templater.get` to have been called once', function() {
                        let stubParameter = 'stub parameter',
                            expectedReturn = 'templater.get stub return-value',
                            stub = sinon.stub(templaterModule, 'get');

                        stub.returns(expectedReturn);

                        let stubReturn = templaterModule.get(stubParameter);

                        expect(templaterModule.get).to.have.been.calledOnce;
                        expect(stubReturn).to.equal(expectedReturn);

                        stub.restore();
                    });
                });
            }); ////endOf templater.js tests

            describe('data.js', () => {
                it('expect `data` to be an object', () => {
                    expect(dataModule).to.be.a('object');
                });

                it('`data` should be an object', () => {
                    dataModule.should.be.a('object');
                });

                describe('data.create', () => {
                    it('expect `data.create` to be a function', () => {
                        expect(dataModule.create).to.be.a('function');
                    });

                    it('`data.create` should be a function', () => {
                        dataModule.create.should.be.a('function');
                    });

                    it('expect sinon stub of `data.create` to have been called once', function() {
                        let stubParameter = 'stub parameter',
                            expectedReturn = 'data.create stub return-value',
                            stub = sinon.stub(dataModule, 'create');

                        stub.returns(expectedReturn);

                        let stubReturn = dataModule.create(stubParameter);

                        expect(dataModule.create).to.have.been.calledOnce;
                        expect(stubReturn).to.equal(expectedReturn);

                        stub.restore();
                    });
                });

                describe('data.register', () => {
                    it('expect `data.register` to be a function', () => {
                        expect(dataModule.register).to.be.a('function');
                    });

                    it('`data.register` should be a function', () => {
                        dataModule.register.should.be.a('function');
                    });

                    it('expect sinon stub of `data.register` to have been called once', function() {
                        let stubParameter = 'stub parameter',
                            expectedReturn = 'data.register stub return-value',
                            stub = sinon.stub(dataModule, 'register');

                        stub.returns(expectedReturn);

                        let stubReturn = dataModule.register(stubParameter);

                        expect(dataModule.register).to.have.been.calledOnce;
                        expect(stubReturn).to.equal(expectedReturn);

                        stub.restore();
                    });
                });

                describe('data.login', () => {
                    it('expect `data.login` to be a function', () => {
                        expect(dataModule.login).to.be.a('function');
                    });

                    it('`data.login` should be a function', () => {
                        dataModule.login.should.be.a('function');
                    });

                    it('expect sinon stub of `data.login` to have been called once', function() {
                        let stubParameter = 'stub parameter',
                            expectedReturn = 'data.login stub return-value',
                            stub = sinon.stub(dataModule, 'login');

                        stub.returns(expectedReturn);

                        let stubReturn = dataModule.login(stubParameter);

                        expect(dataModule.login).to.have.been.calledOnce;
                        expect(stubReturn).to.equal(expectedReturn);

                        stub.restore();
                    });
                });

                describe('data.logout', () => {
                    it('expect `data.logout` to be a function', () => {
                        expect(dataModule.logout).to.be.a('function');
                    });

                    it('`data.logout` should be a function', () => {
                        dataModule.logout.should.be.a('function');
                    });

                    it('expect sinon stub of `data.logout` to have been called once', function() {
                        let stubParameter = 'stub parameter',
                            expectedReturn = 'data.logout stub return-value',
                            stub = sinon.stub(dataModule, 'logout');

                        stub.returns(expectedReturn);

                        let stubReturn = dataModule.logout(stubParameter);

                        expect(dataModule.logout).to.have.been.calledOnce;
                        expect(stubReturn).to.equal(expectedReturn);

                        stub.restore();
                    });
                });

                describe('data.hasLoggedUser', () => {
                    it('expect `data.hasLoggedUser` to be a function', () => {
                        expect(dataModule.hasLoggedUser).to.be.a('function');
                    });

                    it('`data.hasLoggedUser` should be a function', () => {
                        dataModule.hasLoggedUser.should.be.a('function');
                    });

                    it('expect sinon stub of `data.hasLoggedUser` to have been called once', function() {
                        let stubParameter = 'stub parameter',
                            expectedReturn = 'data.hasLoggedUser stub return-value',
                            stub = sinon.stub(dataModule, 'hasLoggedUser');

                        stub.returns(expectedReturn);

                        let stubReturn = dataModule.hasLoggedUser(stubParameter);

                        expect(dataModule.hasLoggedUser).to.have.been.calledOnce;
                        expect(stubReturn).to.equal(expectedReturn);

                        stub.restore();
                    });
                });     
            });
        });	

        describe('controllers/', () => {
            describe('usersControllers.js', () => {
                it('expect `usersControllers` to be an object', () => {
                    expect(usersControllersModule).to.be.a('object');
                });

                it('`usersControllers` should be an object', () => {
                    usersControllersModule.should.be.a('object');
                });

                describe('usersControllers.register', () => {
                    it('expect `usersControllers.register` to be a function', () => {
                        expect(usersControllersModule.register).to.be.a('function');
                    });

                    it('`usersControllers.register` should be a function', () => {
                        usersControllersModule.register.should.be.a('function');
                    });

                    it('expect sinon stub of `usersControllers.register` to have been called once', function() {
                        let stubParameter = 'stub parameter',
                            expectedReturn = 'usersControllers.register stub return-value',
                            stub = sinon.stub(usersControllersModule, 'register');

                        stub.returns(expectedReturn);

                        let stubReturn = usersControllersModule.register(stubParameter);

                        expect(usersControllersModule.register).to.have.been.calledOnce;
                        expect(stubReturn).to.equal(expectedReturn);

                        stub.restore();
                    });
                });

                describe('usersControllers.login', () => {
                    it('expect `usersControllers.login` to be a function', () => {
                        expect(usersControllersModule.login).to.be.a('function');
                    });

                    it('`usersControllersModule.login` should be a function', () => {
                        usersControllersModule.login.should.be.a('function');
                    });

                    it('expect sinon stub of `usersControllers.login` to have been called once', function() {
                        let stubParameter = 'stub parameter',
                            expectedReturn = 'usersControllers.login stub return-value',
                            stub = sinon.stub(usersControllersModule, 'login');

                        stub.returns(expectedReturn);

                        let stubReturn = usersControllersModule.login(stubParameter);

                        expect(usersControllersModule.login).to.have.been.calledOnce;
                        expect(stubReturn).to.equal(expectedReturn);

                        stub.restore();
                    });
                });

                describe('usersControllers.logout', () => {
                    it('expect `usersControllers.logout` to be a function', () => {
                        expect(usersControllersModule.logout).to.be.a('function');
                    });

                    it('`usersControllers.logout` should be a function', () => {
                        usersControllersModule.logout.should.be.a('function');
                    });

                    it('expect sinon stub of `usersControllers.logout` to have been called once', function() {
                        let stubParameter = 'stub parameter',
                            expectedReturn = 'usersControllers.logout stub return-value',
                            stub = sinon.stub(usersControllersModule, 'logout');

                        stub.returns(expectedReturn);

                        let stubReturn = usersControllersModule.logout(stubParameter);

                        expect(usersControllersModule.logout).to.have.been.calledOnce;
                        expect(stubReturn).to.equal(expectedReturn);

                        stub.restore();
                    });
                });

                describe('usersControllers.all', () => {
                    it('expect `usersControllers.all` to be a function', () => {
                        expect(usersControllersModule.all).to.be.a('function');
                    });

                    it('`usersControllers.all` should be a function', () => {
                        usersControllersModule.all.should.be.a('function');
                    });

                    it('expect sinon stub of `usersControllers.all` to have been called once', function() {
                        let stubParameter = 'stub parameter',
                            expectedReturn = 'usersControllers.all stub return-value',
                            stub = sinon.stub(usersControllersModule, 'all');

                        stub.returns(expectedReturn);

                        let stubReturn = usersControllersModule.all(stubParameter);

                        expect(usersControllersModule.all).to.have.been.calledOnce;
                        expect(stubReturn).to.equal(expectedReturn);

                        stub.restore();
                    });
                });
            });
        });
    });
});
