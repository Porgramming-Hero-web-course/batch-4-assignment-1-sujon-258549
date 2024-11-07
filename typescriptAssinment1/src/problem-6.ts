{
    // Define an interface Profile with properties name, age, and email. Create a function updateProfile that accepts an object of type Profile and an object of type Partial representing the updates. The function should return the updated profile.
    interface Profile {
        name: string;
        age: number;
        email: string
    }

    const updateProfile = (input: Profile, updates: Partial<Profile>) => {
        const upfateData = { ...input, ...updates }
        return `Profile Name ${upfateData.name} Age ${upfateData.age} Email: ${upfateData.email}`
    }

    const myProfile = { name: "Alice", age: 25, email: "alice@example.com" };
    // console.log(updateProfile(myProfile, {age:26})); // updata name email and age 
    //
    // 
    // 
    // 
}