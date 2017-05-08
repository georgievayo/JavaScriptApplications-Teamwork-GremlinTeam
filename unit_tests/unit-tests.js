"use strict";

const expect = require('chai').expect;
const should = require('chai').should();
const sinon = require('sinon');
const requesterModule = require('../public/scripts/requester.js')[0];
const templaterModule = require('../public/scripts/templater.js')[0];
const dataModule = require('../public/scripts/data.js')[0];
const usersControllersModule = require('../public/scripts/controllers/usersControllers.js')[0];

let sinonSandbox = sinon.sandbox.create();

describe('unit testing with mocha, chai and sinon', () => {
  describe('public/', () => {
    describe('scripts/', () => {
      describe('requester.js', () => {                
        it('expect `requester` to be an object', () => {
          expect(requesterModule).to.be.a('object');
        });

        it('expect `requester` not to be null', () => {
          expect(requesterModule).not.to.be.null;           
        });

        describe('requester.get', () => {
          beforeEach(() => {
            sinonSandbox = sinon.stub(requesterModule, 'get');
            this.server = sinon.fakeServer.create();
          });

          afterEach(() => {
            sinonSandbox.restore();
            this.server.restore();
          });

          it('expect `requester.get` to be a function', () => {
            expect(requesterModule.get).to.be.a('function');          
          });

          it('expect `requester.get` not to be null', () => {
            expect(requesterModule.get).not.to.be.null;           
          });

          it('expect sinon stub of `requester.get` to have been called once', function() {
            let stubParameter = 'foo',
              expectedReturn = 'bar';

            sinonSandbox.returns(expectedReturn);

            let stubReturn = sinonSandbox(stubParameter);

            expect(requesterModule.get).to.have.been.calledOnce;
            expect(stubReturn).to.equal(expectedReturn);
          });

          it('expect `requester.get()` to have been called once with sinon fake server', () => {
            let testParameter = 'foo',
              expectedReturn = 'bar',
              callback = sinon.spy();

            sinonSandbox.returns(expectedReturn);

            this.server.respondWith("GET", testParameter, [200, { "Content-Type": "text/HTML" }, expectedReturn]);

            sinonSandbox(testParameter, callback);

            this.server.respond();
            expect(sinonSandbox).to.have.been.calledOnce;
          });
        });

        describe('requester.putJSON', () => {
          beforeEach(() => {
            sinonSandbox = sinon.stub(requesterModule, 'putJSON');
            this.server = sinon.fakeServer.create();
          });

          afterEach(() => {
            sinonSandbox.restore();
            this.server.restore();
          });

          it('expect `requester.putJSON` to be a function', () => {
            expect(requesterModule.putJSON).to.be.a('function');
          });

          it('expect `requester.putJSON` not to be null', () => {
            expect(requesterModule.putJSON).not.to.be.null;           
          });

          it('expect sinon stub of `requester.putJSON` to have been called once', function() {
            let stubParameter = 'foo',
              expectedReturn = 'bar';

            sinonSandbox.returns(expectedReturn);

            let stubReturn = sinonSandbox(stubParameter);

            expect(requesterModule.putJSON).to.have.been.calledOnce;
            expect(stubReturn).to.equal(expectedReturn);
          });

          it('expect `requester.putJSON()` to have been called once with sinon fake server', () => {
            let testParameter = 'foo',
              expectedReturn = 'bar',
              callback = sinon.spy();

            sinonSandbox.returns(expectedReturn);

            this.server.respondWith("GET", testParameter, [200, { "Content-Type": "text/HTML" }, expectedReturn]);

            sinonSandbox(testParameter, callback);

            this.server.respond();
            expect(sinonSandbox).to.have.been.calledOnce;
          });
        });

        describe('requester.postJSON', () => {
          beforeEach(() => {
            sinonSandbox = sinon.stub(requesterModule, 'postJSON');
            this.server = sinon.fakeServer.create();
          });

          afterEach(() => {
            sinonSandbox.restore();
            this.server.restore();
          });

          it('expect `requester.postJSON` to be a function', () => {
            expect(requesterModule.postJSON).to.be.a('function');
          });

          it('expect `requester.postJSON` not to be null', () => {
            expect(requesterModule.postJSON).not.to.be.null;           
          });

          it('expect sinon stub of `requester.postJSON` to have been called once', function() {
            let stubParameter = 'foo',
              expectedReturn = 'bar';

            sinonSandbox.returns(expectedReturn);

            let stubReturn = sinonSandbox(stubParameter);

            expect(requesterModule.postJSON).to.have.been.calledOnce;
            expect(stubReturn).to.equal(expectedReturn);
          });

          it('expect `requester.postJSON()` to have been called once with sinon fake server', () => {
            let testParameter = 'foo',
              expectedReturn = 'bar',
              callback = sinon.spy();

            sinonSandbox.returns(expectedReturn);

            this.server.respondWith("GET", testParameter, [200, { "Content-Type": "text/HTML" }, expectedReturn]);

            sinonSandbox(testParameter, callback);

            this.server.respond();
            expect(sinonSandbox).to.have.been.calledOnce;
          });
        });

        describe('requester.getJSON', () => {
          beforeEach(() => {
            sinonSandbox = sinon.stub(requesterModule, 'getJSON');
            this.server = sinon.fakeServer.create();
          });

          afterEach(() => {
            sinonSandbox.restore();
            this.server.restore();
          });

          it('expect `requester.getJSON` to be a function', () => {
            expect(requesterModule.getJSON).to.be.a('function');
          });

          it('expect `requester.getJSON` not to be null', () => {
            expect(requesterModule.getJSON).not.to.be.null;           
          });

          it('expect sinon stub of `requester.getJSON` to have been called once', function() {
            let stubParameter = 'foo',
              expectedReturn = 'bar';

            sinonSandbox.returns(expectedReturn);

            let stubReturn = sinonSandbox(stubParameter);

            expect(requesterModule.getJSON).to.have.been.calledOnce;
            expect(stubReturn).to.equal(expectedReturn);
          });

          it('expect `requester.getJSON()` to have been called once with sinon fake server', () => {
            let testParameter = 'foo',
              expectedReturn = 'bar',
              callback = sinon.spy();

            sinonSandbox.returns(expectedReturn);

            this.server.respondWith("GET", testParameter, [200, { "Content-Type": "text/HTML" }, expectedReturn]);

            sinonSandbox(testParameter, callback);

            this.server.respond();
            expect(sinonSandbox).to.have.been.calledOnce;
          });
        });
      }); ////endOf requester.js tests

      describe('templater.js', () => {
        it('expect `templater` to be an object', () => {
          expect(templaterModule).to.be.a('object');
        });

        it('expect `templater` not to be null', () => {
          expect(templaterModule).not.to.be.null;           
        });

        describe('templater.get', () => {
          beforeEach(() => {
            sinonSandbox = sinon.stub(templaterModule, 'get');
            this.server = sinon.fakeServer.create();
          });

          afterEach(() => {
            sinonSandbox.restore();
            this.server.restore();
          });

          it('expect `templater.get` to be a function', () => {
            expect(templaterModule.get).to.be.a('function');
          });

          it('expect `templater.get` not to be null', () => {
            expect(templaterModule.get).not.to.be.null;           
          });

          it('expect sinon stub of `templater.get` to have been called once', function() {
            let stubParameter = 'foo',
              expectedReturn = 'bar';

            sinonSandbox.returns(expectedReturn);

            let stubReturn = sinonSandbox(stubParameter);

            expect(templaterModule.get).to.have.been.calledOnce;
            expect(stubReturn).to.equal(expectedReturn);
          });

          it('expect `templater.get()` to have been called once with sinon fake server', () => {
            let testParameter = 'foo',
              expectedReturn = 'bar',
              callback = sinon.spy();

            sinonSandbox.returns(expectedReturn);

            this.server.respondWith("GET", testParameter, [200, { "Content-Type": "text/HTML" }, expectedReturn]);

            sinonSandbox(testParameter, callback);

            this.server.respond();
            expect(sinonSandbox).to.have.been.calledOnce;
          });
        });
      }); ////endOf templater.js tests

      describe('data.js', () => {
        it('expect `data` to be an object', () => {
          expect(dataModule).to.be.a('object');
        });

        it('expect `data` not to be null', () => {
          expect(dataModule).not.to.be.null;           
        });

        describe('data.create', () => {
          beforeEach(() => {
            sinonSandbox = sinon.stub(dataModule, 'create');
            this.server = sinon.fakeServer.create();
          });

          afterEach(() => {
            sinonSandbox.restore();
            this.server.restore();
          });

          it('expect `data.create` to be a function', () => {
            expect(dataModule.create).to.be.a('function');
          });

          it('expect `data.create` not to be null', () => {
            expect(dataModule.create).not.to.be.null;           
          });

          it('expect sinon stub of `data.create` to have been called once', function() {
            let stubParameter = 'foo',
              expectedReturn = 'bar';

            sinonSandbox.returns(expectedReturn);

            let stubReturn = sinonSandbox(stubParameter);

            expect(dataModule.create).to.have.been.calledOnce;
            expect(stubReturn).to.equal(expectedReturn);
          });

          it('expect `data.create()` to have been called once with sinon fake server', () => {
            let testParameter = 'foo',
              expectedReturn = 'bar',
              callback = sinon.spy();

            sinonSandbox.returns(expectedReturn);

            this.server.respondWith("GET", testParameter, [200, { "Content-Type": "text/HTML" }, expectedReturn]);

            sinonSandbox(testParameter, callback);

            this.server.respond();
            expect(sinonSandbox).to.have.been.calledOnce;
          });
        });

        describe('data.register', () => {
          beforeEach(() => {
            sinonSandbox = sinon.stub(dataModule, 'register');
            this.server = sinon.fakeServer.create();
          });

          afterEach(() => {
            sinonSandbox.restore();
            this.server.restore();
          });

          it('expect `data.register` to be a function', () => {
            expect(dataModule.register).to.be.a('function');
          });

          it('expect `data.register` not to be null', () => {
            expect(dataModule.register).not.to.be.null;           
          });

          it('expect sinon stub of `data.register` to have been called once', function() {
            let stubParameter = 'foo',
              expectedReturn = 'bar';

            sinonSandbox.returns(expectedReturn);

            let stubReturn = sinonSandbox(stubParameter);

            expect(dataModule.register).to.have.been.calledOnce;
            expect(stubReturn).to.equal(expectedReturn);
          });

          it('expect `data.register()` to have been called once with sinon fake server', () => {
            let testParameter = 'foo',
              expectedReturn = 'bar',
              callback = sinon.spy();

            sinonSandbox.returns(expectedReturn);

            this.server.respondWith("GET", testParameter, [200, { "Content-Type": "text/HTML" }, expectedReturn]);

            sinonSandbox(testParameter, callback);

            this.server.respond();
            expect(sinonSandbox).to.have.been.calledOnce;
          });
        });

        describe('data.login', () => {
          beforeEach(() => {
            sinonSandbox = sinon.stub(dataModule, 'login');
            this.server = sinon.fakeServer.create();
          });

          afterEach(() => {
            sinonSandbox.restore();
            this.server.restore();
          });

          it('expect `data.login` to be a function', () => {
            expect(dataModule.login).to.be.a('function');
          });

          it('expect `data.login` not to be null', () => {
            expect(dataModule.login).not.to.be.null;           
          });

          it('expect sinon stub of `data.login` to have been called once', function() {
            let stubParameter = 'foo',
              expectedReturn = 'bar';

            sinonSandbox.returns(expectedReturn);

            let stubReturn = sinonSandbox(stubParameter);

            expect(dataModule.login).to.have.been.calledOnce;
            expect(stubReturn).to.equal(expectedReturn);
          });

          it('expect `data.login()` to have been called once with sinon fake server', () => {
            let testParameter = 'foo',
              expectedReturn = 'bar',
              callback = sinon.spy();

            sinonSandbox.returns(expectedReturn);

            this.server.respondWith("GET", testParameter, [200, { "Content-Type": "text/HTML" }, expectedReturn]);

            sinonSandbox(testParameter, callback);

            this.server.respond();
            expect(sinonSandbox).to.have.been.calledOnce;
          });
        });

        describe('data.logout', () => {
          beforeEach(() => {
            sinonSandbox = sinon.stub(dataModule, 'logout');
            this.server = sinon.fakeServer.create();
          });

          afterEach(() => {
            sinonSandbox.restore();
            this.server.restore();
          });

          it('expect `data.logout` to be a function', () => {
            expect(dataModule.logout).to.be.a('function');
          });

          it('expect `data.logout` not to be null', () => {
            expect(dataModule.logout).not.to.be.null;
          });

          it('expect sinon stub of `data.logout` to have been called once', function() {
            let stubParameter = 'foo',
              expectedReturn = 'bar';

            sinonSandbox.returns(expectedReturn);

            let stubReturn = sinonSandbox(stubParameter);

            expect(dataModule.logout).to.have.been.calledOnce;
            expect(stubReturn).to.equal(expectedReturn);
          });

          it('expect `data.logout()` to have been called once with sinon fake server', () => {
            let testParameter = 'foo',
              expectedReturn = 'bar',
              callback = sinon.spy();

            sinonSandbox.returns(expectedReturn);

            this.server.respondWith("GET", testParameter, [200, { "Content-Type": "text/HTML" }, expectedReturn]);

            sinonSandbox(testParameter, callback);

            this.server.respond();
            expect(sinonSandbox).to.have.been.calledOnce;
          });
        });

        describe('data.hasLoggedUser', () => {
          beforeEach(() => {
            sinonSandbox = sinon.stub(dataModule, 'hasLoggedUser');
            this.server = sinon.fakeServer.create();
          });

          afterEach(() => {
            sinonSandbox.restore();
            this.server.restore();
          });

          it('expect `data.hasLoggedUser` to be a function', () => {
            expect(dataModule.hasLoggedUser).to.be.a('function');
          });

          it('expect `data.hasLoggedUser` not to be null', () => {
            expect(dataModule.hasLoggedUser).not.to.be.null;
          });

          it('expect sinon stub of `data.hasLoggedUser` to have been called once', function() {
            let stubParameter = 'foo',
              expectedReturn = 'bar';

            sinonSandbox.returns(expectedReturn);

            let stubReturn = sinonSandbox(stubParameter);

            expect(dataModule.hasLoggedUser).to.have.been.calledOnce;
            expect(stubReturn).to.equal(expectedReturn);
          });

          it('expect `data.hasLoggedUser()` to have been called once with sinon fake server', () => {
            let testParameter = 'foo',
              expectedReturn = 'bar',
              callback = sinon.spy();

            sinonSandbox.returns(expectedReturn);

            this.server.respondWith("GET", testParameter, [200, { "Content-Type": "text/HTML" }, expectedReturn]);

            sinonSandbox(testParameter, callback);

            this.server.respond();
            expect(sinonSandbox).to.have.been.calledOnce;
          });
        });     
      });
    });////endOf data.js tests

    describe('controllers/', () => {
      describe('usersControllers.js', () => {
        it('expect `usersControllers` to be an object', () => {
          expect(usersControllersModule).to.be.a('object');
        });

        it('expect `usersControllers` not to be null', () => {
          expect(usersControllersModule).not.to.be.null;
        });

        describe('usersControllers.register', () => {
          beforeEach(() => {
            sinonSandbox = sinon.stub(usersControllersModule, 'register');
            this.server = sinon.fakeServer.create();
          });

          afterEach(() => {
            sinonSandbox.restore();
            this.server.restore();
          });

          it('expect `usersControllers.register` to be a function', () => {
            expect(usersControllersModule.register).to.be.a('function');
          });

          it('expect `usersControllers.register` not to be null', () => {
            expect(usersControllersModule.register).not.to.be.null;
          });

          it('expect sinon stub of `usersControllers.register` to have been called once', function() {
            let stubParameter = 'foo',
              expectedReturn = 'bar';

            sinonSandbox.returns(expectedReturn);

            let stubReturn = sinonSandbox(stubParameter);

            expect(usersControllersModule.register).to.have.been.calledOnce;
            expect(stubReturn).to.equal(expectedReturn);
          });

          it('expect `usersControllers.register()` to have been called once with sinon fake server', () => {
            let testParameter = 'foo',
              expectedReturn = 'bar',
              callback = sinon.spy();

            sinonSandbox.returns(expectedReturn);

            this.server.respondWith("GET", testParameter, [200, { "Content-Type": "text/HTML" }, expectedReturn]);

            sinonSandbox(testParameter, callback);

            this.server.respond();
            expect(sinonSandbox).to.have.been.calledOnce;
          });
        });

        describe('usersControllers.login', () => {
          beforeEach(() => {
            sinonSandbox = sinon.stub(usersControllersModule, 'login');
            this.server = sinon.fakeServer.create();
          });

          afterEach(() => {
            sinonSandbox.restore();
            this.server.restore();
          });

          it('expect `usersControllers.login` to be a function', () => {
            expect(usersControllersModule.login).to.be.a('function');
          });

          it('expect `usersControllersModule.login` not to be null', () => {
            expect(usersControllersModule.login).not.to.be.null;
          });

          it('expect sinon stub of `usersControllers.login` to have been called once', function() {
            let stubParameter = 'foo',
              expectedReturn = 'bar';

            sinonSandbox.returns(expectedReturn);

            let stubReturn = sinonSandbox(stubParameter);

            expect(usersControllersModule.login).to.have.been.calledOnce;
            expect(stubReturn).to.equal(expectedReturn);
          });

          it('expect `usersControllers.login()` to have been called once with sinon fake server', () => {
            let testParameter = 'foo',
              expectedReturn = 'bar',
              callback = sinon.spy();

            sinonSandbox.returns(expectedReturn);

            this.server.respondWith("GET", testParameter, [200, { "Content-Type": "text/HTML" }, expectedReturn]);

            sinonSandbox(testParameter, callback);

            this.server.respond();
            expect(sinonSandbox).to.have.been.calledOnce;
          });
        });

        describe('usersControllers.logout', () => {
          beforeEach(() => {
            sinonSandbox = sinon.stub(usersControllersModule, 'logout');
            this.server = sinon.fakeServer.create();
          });

          afterEach(() => {
            sinonSandbox.restore();
            this.server.restore();
          });

          it('expect `usersControllers.logout` to be a function', () => {
            expect(usersControllersModule.logout).to.be.a('function');
          });

          it('expect `usersControllers.logout` not to be null', () => {
            expect(usersControllersModule.logout).not.to.be.null;
          });

          it('expect sinon stub of `usersControllers.logout` to have been called once', function() {
            let stubParameter = 'foo',
              expectedReturn = 'bar';

            sinonSandbox.returns(expectedReturn);

            let stubReturn = sinonSandbox(stubParameter);

            expect(usersControllersModule.logout).to.have.been.calledOnce;
            expect(stubReturn).to.equal(expectedReturn);
          });

          it('expect `usersControllers.logout()` to have been called once with sinon fake server', () => {
            let testParameter = 'foo',
              expectedReturn = 'bar',
              callback = sinon.spy();

            sinonSandbox.returns(expectedReturn);

            this.server.respondWith("GET", testParameter, [200, { "Content-Type": "text/HTML" }, expectedReturn]);

            sinonSandbox(testParameter, callback);

            this.server.respond();
            expect(sinonSandbox).to.have.been.calledOnce;
          });
        });

        describe('usersControllers.all', () => {
          beforeEach(() => {
            sinonSandbox = sinon.stub(usersControllersModule, 'all');
            this.server = sinon.fakeServer.create();
          });

          afterEach(() => {
            sinonSandbox.restore();
            this.server.restore();
          });

          it('expect `usersControllers.all` to be a function', () => {
            expect(usersControllersModule.all).to.be.a('function');
          });

          it('expect `usersControllers.all` not to be null', () => {
            expect(usersControllersModule.all).not.to.be.null;
          });

          it('expect sinon stub of `usersControllers.all` to have been called once', function() {
            let stubParameter = 'foo',
              expectedReturn = 'bar';

            sinonSandbox.returns(expectedReturn);

            let stubReturn = sinonSandbox(stubParameter);

            expect(usersControllersModule.all).to.have.been.calledOnce;
            expect(stubReturn).to.equal(expectedReturn);
          });

          it('expect `usersControllers.all()` to have been called once with sinon fake server', () => {
            let testParameter = 'foo',
              expectedReturn = 'bar',
              callback = sinon.spy();

            sinonSandbox.returns(expectedReturn);

            this.server.respondWith("GET", testParameter, [200, { "Content-Type": "text/HTML" }, expectedReturn]);

            sinonSandbox(testParameter, callback);

            this.server.respond();
            expect(sinonSandbox).to.have.been.calledOnce;
          });
        });
      });
    });
  });
});
