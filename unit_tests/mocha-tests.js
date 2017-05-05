const expect = require("chai").expect;
const requesterModule = require("../public/scripts/requester.js")[0];
const templaterModule = require("../public/scripts/templater.js")[0];
const dataModule = require("../public/scripts/data.js")[0];
const usersControllersModule = require("../public/scripts/controllers/usersControllers.js")[0];

describe('unit testing with mocha and chai', () => {
  describe('> public', () => {
    describe('> scripts', () => {
      describe('[requester]', () => {
        it('expect `requester` to be an object', () => {
          expect(requesterModule).to.be.a('object');
        });

        it('expect `requester.get` to be a function', () => {
          expect(requesterModule.get).to.be.a('function');
        });

        it('expect `requester.putJSON` to be a function', () => {
          expect(requesterModule.get).to.be.a('function');
        });

        it('expect `requester.postJSON` to be a function', () => {
          expect(requesterModule.postJSON).to.be.a('function');
        });

        it('expect `requester.getJSON` to be a function', () => {
          expect(requesterModule.getJSON).to.be.a('function');
        });
      });

      describe('[templater]', () => {
        it('expect `templater` to be an object', () => {
          expect(templaterModule).to.be.a('object');
        });

        it('expect `templater.get` to be an object', () => {
          expect(templaterModule.get).to.be.a('function');
        });
      });

      describe('[data]', () => {
        it('expect `data` to be an object', () => {
          expect(dataModule).to.be.a('object');
        });

        it('expect `data.create` to be a function', () => {
          expect(dataModule.create).to.be.a('function');
        });

        it('expect `data.register` to be a function', () => {
          expect(dataModule.register).to.be.a('function');
        });

        it('expect `data.login` to be a function', () => {
          expect(dataModule.login).to.be.a('function');
        });

        it('expect `data.logout` to be a function', () => {
          expect(dataModule.logout).to.be.a('function');
        });

        it('expect `data.hasLoggedUser` to be a function', () => {
          expect(dataModule.hasLoggedUser).to.be.a('function');
        });        
      });
    });	

    describe('> controllers', () => {
      describe('[usersControllers]', () => {
        it('expect `usersControllers` to be an object', () => {
          expect(usersControllersModule).to.be.a('object');
        });

        it('expect `usersControllers.register` to be a function', () => {
          expect(usersControllersModule.register).to.be.a('function');
        });

        it('expect `usersControllers.login` to be a function', () => {
          expect(usersControllersModule.login).to.be.a('function');
        });

        it('expect `usersControllers.logout` to be a function', () => {
          expect(usersControllersModule.logout).to.be.a('function');
        });

        it('expect `usersControllers.all` to be a function', () => {
          expect(usersControllersModule.all).to.be.a('function');
        });
      });
    });
  });
});
