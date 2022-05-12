const functions=require('../functions')
// beforeEach(()=> initDatabase());
// afterEach(()=> closeDatabase());

// beforeAll(()=> initDatabase());
// afterAll(()=> closeDatabase());
// const initDatabase=()=> console.log('Database Initialisation')
// const closeDatabase=()=> console.log('Database Close')
const nameCheck=()=> console.log('Checking name');
describe('Checking names',()=>{
  beforeEach(()=>nameCheck());
  test('User is kerie',()=>{
        const user='kerie';
        expect(user).toBe('kerie');
    });
  test('User is izere',()=>{
        const user='izere';
        expect(user).toBe('izere');
    })
});

test('Adds 2 + 2  to equal 4',()=>{
expect(functions.add(2,2)).toBe(4)

});
test('Adds 2 + 2  to not equal 6',()=>{
    expect(functions.add(2,2)).not.toBe(5);
    
    });
test('Division 4 / 2 to equal 2 ',()=>{
    expect(functions.division(4,2)).toBe(2);
})

test("should be null",()=>{
    expect(functions.isNull()).toBeNull();
})
test("should falsy",()=>{
    expect(functions.checkValue(null)).toBeFalsy();
})
test("should falsy",()=>{
    expect(functions.checkValue(2)).not.toBeFalsy();
})

test("user should be kerie izere object",()=>{
    expect(functions.createUser()).toEqual({firstName:'kerie',lastName:'izere'})
})
//less and greater than
test("should be under 1600",()=>{
    const load1=800;
    const load2=800;
    expect(load1+load2).toBeLessThanOrEqual(1600);
    expect(load1+load2).toBe(1600);

})
//regex
test("There is no I or i in team",()=>{
    expect('team').not.toMatch(/I/i);
})
test("There is  I or i in team",()=>{
    expect('hint').toMatch(/I/i);
})

//Arrays

test("marie shoud be in usernames",()=>{
    usernames=['kerie','izere','claire','marie']
    expect(usernames).toContain('marie');
});

// //promises
// test('user fetched should be Leanne Graham',() => {
//   expect.assertions(1);// test is called at least 1 time
//    return functions.fetchUser().then(data=>{
//        expect(data.name).toEqual('Leanne Graham');
//    }
//    )
// });
// working with async  await
test('user fetched should be Leanne Graham',async() => {
    expect.assertions(1);
    const data=await functions.fetchUser();
    expect(data.name).toEqual('Leanne Graham');
     
     
  });
