/**
 * Test the signup method
 */

let req , res;

const { mockRequest , mockResponse } = require("../interceptor");
const { signin , signup } = require("../../../controller/auth.controller");
const { user , role } = require("../../../model");
const userWithRoles = require("../mockData/newUserWithRoles.json");
const userWithoutRoles = require("../mockData/newUserWithoutRoles.json");
const userSigninDetals = require("../mockData/signIn.json");
const bcrypt = require("bcryptjs");

beforeEach(()=>{
    /**
     * whatever i write here will be executed before every test 
     */
    req = mockRequest();
    res = mockResponse();
});


describe("Testing signup method",()=>{

    afterEach(() => {
        //it will clear all the mock that we have
        //created within each test block
        jest.clearAllMocks();
    });

    /**
     * 1.   Signup is successful
     */
    /**
     * 1.1. when user providing the roles
     */
    it("successful signup,when we provide the roles ",async ()=>{
        req.body = userWithRoles;
        /**
         * Mock 
         * 
         * user.create() 
         * role.findAll()
         */
        const roles = req.body.roles;
        const resFromCreate = {
            id : req.body.id,
            username : req.body.usermae,
            email : req.body.email,
            password : req.body.password,
            setRoles : async () => Promise.resolve()
        }

        let spyOnCreate = jest.spyOn(user,"create").mockImplementation(()=>Promise.resolve(resFromCreate));
        let spyOnFindAll = jest.spyOn(role,"findAll").mockImplementation(()=>Promise.resolve(roles));
        await signup(req,res);
        expect(spyOnCreate).toHaveBeenCalled();
        expect(spyOnFindAll).toHaveBeenCalled();
        expect(user.create).toHaveBeenCalled();
        expect(role.findAll).toHaveBeenCalled();
        expect(res.status).toHaveBeenCalledWith(201);
        expect(res.send).toHaveBeenCalledWith({"message" : "User added successfully"});
    })

    /**
     * 1.2. when user did't provide any roles
     */
    it("successful signup,when we don't provide the roles ",async ()=>{
        req.body = userWithoutRoles;
        const resFromCreate = {
            id : req.body.id,
            username : req.body.usermae,
            email : req.body.email,
            password : req.body.password,
            setRoles : async () => Promise.resolve(),
            getRoles : async () => Promise.resolve()
        }
        //mock the required functions
        let spyOnCreate = jest.spyOn(user,'create').mockImplementation(()=>Promise.resolve(resFromCreate));
        
        await signup(req,res);
        expect(spyOnCreate).toHaveBeenCalled();
        expect(user.create).toHaveBeenCalled();
        expect(res.status).toHaveBeenCalledWith(201);
        expect(res.send).toHaveBeenCalledWith({
            message : "User added successfully"
        });
    })

    /**
     * 2.   Signup failed
     */
    it("signup failed", async ()=>{
        req.body = userWithoutRoles;
        /**
         * Mock the required functions
         */
        let spyOnCreate = jest.spyOn(user,'create').mockImplementation(()=>Promise.reject("Error"));
        let spyOnFindAll = jest.spyOn(role,'findAll').mockImplementation(()=>Promise.resolve());

        await signup(req,res);
        
        expect(spyOnCreate).toHaveBeenCalled();
        expect(user.create).toHaveBeenCalled();
        //this function did't called because we have terminated the executation in the user-creation itself.
        expect(spyOnFindAll).not.toHaveBeenCalled();
        expect(role.findAll).not.toHaveBeenCalled();
        expect(res.status).toHaveBeenCalledWith(500);
        expect(res.send).toHaveBeenCalledWith({
            message : "some internal error"
        });
    });
})


/**
 * Test the signin method
 */


describe("Testing signin method",()=>{
    /**
     * Successful signup
     */
    it("signup successful",async ()=>{
        /**
         * set the request body
         */
        req.body = userSigninDetals;
        /**
         * result from finding the user
         */
        const userReturned = {
            id : userWithRoles.id,
            email : userWithRoles.email,
            username : userWithRoles.username,
            password : bcrypt.hashSync(userWithRoles.password,8),
            setRoles : async ()=> Promise.resolve(),
            getRoles : async ()=> Promise.resolve(userWithRoles.roles)
        }
        /**
         * mock the functions
         */

        /**
         * mocking user.findOne()
         */
        const spyOnUserFind = jest.spyOn(user,'findOne').mockImplementation(()=>Promise.resolve(userReturned));

        /**
         * mocking bcrypt.compare()
         */
        const spyOnBcyptCompare = jest.spyOn(bcrypt,'compare').mockImplementation(()=>Promise.resolve(true));
        await signin(req,res);

        expect(bcrypt.compare).toHaveBeenCalled();
        expect(spyOnBcyptCompare).toHaveBeenCalled();
    })

    /**
     * signup failed due to wrong password of the user.
     */

    it("signup failed,wrong password provided",()=>{

    })

    /**
     * signup failed due to some internal error
     */

    it("signup failed due to internal issue",()=>{

    })
})