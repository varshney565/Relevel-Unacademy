/**
 * How to define a test ??
 * 
 * ------test also as a function
 *          1. Name of the test.
 *          2. Callback function.
 */


test("First test in JS",()=>{
    console.log("Hello Shivam!!");
});

test("second test in JS",()=>{
    console.log("Hello Shivam again!!");
})

/**
 * Test to compare two objects.
 */

test("Testing two objects",()=>{
    //Actual object
    const data = {
        one : 1,
        two : 2
    };

    //check actual with expected
    /**
     * only checks the value of both the objects.
     */
    expect(data).toEqual({two : 2,one : 1});
    /**
     * only pass if both the objects are same or not.
     * 
     * expect(data).toBe({one : 1,two : 2});
     */
});


/**
 * Test the function defined in file1
 */

const sum = require('./file1');

test("Testing the sum method",()=>{
    //expectation vs actuals
    expect(sum(5,6)).toBe(11);
    expect(sum(1,2)).not.toBe(11);
});


/**
 * Testing the Null.
 */

test("null",()=>{
    const t = null;
    expect(t).toBeNull(); //Matchers
})

/**
 * Testing undefined.
 */


test("undefined",()=>{
    let n = undefined;
    expect(n).toBeUndefined();  //Matchers
})


/**
 * Testing for something properly defined.
 */

test("properly defined",()=>{
    let n = 22;
    expect(n).toBeDefined();    //Matchers
});

/**
 * Testing the boolean values
 */


test("Testing the boolean values",()=>{
    let a = 7;
    let b = true;
    let c = undefined;
    expect(a).toBeTruthy();
    expect(b).toBeTruthy();
    expect(c).toBeFalsy();
})

/**
 * Scenarios to test the numbers.
 */

test("Testing Numbers",()=>{
    const num = 4;
    expect(num).toBe(4);
    expect(num).toBeGreaterThan(3);
    expect(num).toBeGreaterThanOrEqual(4);
    expect(num).toBeLessThan(5);
    expect(num).toBeLessThanOrEqual(4);
});


/**
 * Scenarios with strings.
 */


test("Testing strings",()=>{
    //checking whether 'shw' present is 'vishwa' or not
    expect("Vishwa").toMatch(/shw/);        //string matching.
    expect("Vishwa").not.toMatch(/abc/);    
});

/**
 * Handling Arrays or collection of elements.
 */


test("arrays",()=>{
    const person = [
        "vishwa",
        "Mohan",
        "Shivani",
        "Shivam"
    ];
    expect(person).toContain("vishwa");
    expect(person).not.toContain("Abcd");
});

/**
 * How test for the expections.
 */
function expectationThrower(){
    throw new Error("Exception, is what you have been looking for");
}

test("Testing exception",()=>{
    expect(()=>expectationThrower()).toThrow();
    expect(()=>expectationThrower()).toThrow(Error);
    expect(()=>expectationThrower()).toThrow(Error("Exception, is what you have been looking for"));
    expect(()=>expectationThrower()).toThrow(/looking/);
});