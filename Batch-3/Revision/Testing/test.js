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