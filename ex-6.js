// Exercise #6: Reverse the String
let companyName = "TechUp Thailand";
let reversedCompanyName = "";

// Start coding here
for (let i = companyName.length - 1; i >= 0; i-- ) {
    console.log(i)
    reversedCompanyName += companyName[i];
    console.log(reversedCompanyName)
}

console.log(reversedCompanyName);
