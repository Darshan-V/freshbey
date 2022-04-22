const app =require('../backend/server')
const  mongoose = require("mongoose");
const User = require('../backend/models/userModel');
const chai = require ('chai');
const chaiHttp = require ('chai-http');
const expect = chai.expect
chai.use(chaiHttp);
chai.should();


describe('USERS', () => {
    beforeEach((done) => { 
        User.deleteMany({}, (err) => { 
           done();           
        });        
    });
    describe('/POST user', () => {
        it('it should  register user', (done) => {
            let user = {
                name: 'Felex onyango',
                email: "felexonyango@gmail.com",
                password: '@Felex2020'
               
            }
            
          chai.request(app)
              .post('/api/users')
              .send(user)
              .end((err, res) => {
                    res.should.have.status(201);
                    res.should.have.a('object')
       
                done();
              });
        });
  
    });

})