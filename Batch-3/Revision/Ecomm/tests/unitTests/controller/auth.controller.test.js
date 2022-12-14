/**
 * Test the signup method
 */

let req , res;

const { mockRequest , mockResponse } = require("../interceptor");
const { signin , signup } = require("../../../controller/auth.controller");
const { user , role } = require("../../../model");
const userWithRoles = require("../mockData/newUserWithRoles.json");
const userWithoutRoles = require("../mockData/newUserWithoutRoles.json");

beforeEach(()=>{
    /**
     * whatever i write here will be executed before every describe test 
     */
    req = mockRequest();
    res = mockResponse();
});


describe("Testing signup method",()=>{
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
            ...req.body,
            setRoles : async () => Promise.resolve()
        }

        const spyOnCreate = jest.spyOn(user,"create").mockImplementation((userWithRoles)=>Promise.resolve(resFromCreate));
        const spyOnFindAll = jest.spyOn(role,"findAll").mockImplementation((roles)=>Promise.resolve(roles));
        await signup(req,res);
        await expect(spyOnCreate).toHaveBeenCalled();
        await expect(spyOnFindAll).toHaveBeenCalled();
        await expect(role.findAll).toHaveBeenCalled();
        expect(res.status).toHaveBeenCalledWith(201);
        expect(res.send).toHaveBeenCalledWith({"message" : "User added successfully"});
    })

    /**
     * 1.2. when user did't provide any roles
     */
    // it("successful signup,when we don't provide the roles ",()=>{

    // })

    /**
     * 2.   Signup failed
     */
    // it("signup failed",()=>{

    // });
})


/**
 * Test the signin method
 */