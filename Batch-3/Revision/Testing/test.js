/**
 * --save-dev it wll add the dependencies only when we are developing not on the production machine.
 */


test("First Test",()=>{
    console.log("Hello World");
});

test("checking Both Objects",()=>{
    const obj = {
        one : 1,
        two : 2
    }
    expect(obj).toEqual({one : 1,two : 2});
    // expect(obj).toBe({one : 1,two : 2});
})

const Calculator = require("./Calculator");

test.only("testing SpyOn Method",()=>{
    const mockCallback = jest.spyOn(Calculator,"add");
    
    /**
     * By default mockCallback use the default implementation of the function
     * that we have mocked
     */
    mockCallback.mockImplementation(()=>"Shivam");
    const res = mockCallback(1,3);
    expect(mockCallback).toHaveBeenCalledTimes(1);
    expect(res).toBe("Shivam");
});