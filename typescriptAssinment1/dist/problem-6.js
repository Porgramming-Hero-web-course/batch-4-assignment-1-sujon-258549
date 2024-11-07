"use strict";
{
    const updateProfile = (input, updates) => {
        const upfateData = Object.assign(Object.assign({}, input), updates);
        return `Profile Name ${upfateData.name} Age ${upfateData.age} Email: ${upfateData.email}`;
    };
    const myProfile = { name: "Alice", age: 25, email: "alice@example.com" };
    // console.log(updateProfile(myProfile, {age:26})); // updata name email and age 
    //
    // 
    // 
    // 
}
