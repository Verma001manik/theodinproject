const companies = [
    {
        name:"GOOGLE",
        year:1998,
        valuation: 1000000000000
    },
    {
        name:"MICROSOFT",
        year:1980,
        valuation:2000000000000
    },
    {
        name:"APPLE",
        year:1972,
        valuation:3000000000000
    },
    {
        name:"META",
        year:2004,
        valuation:200000000000
    },

]
const good = companies.filter((company)=>{
    if (company.year >1960 && company.year<2005 ){
        
        return true;
    }
});

const trillion = companies.filter((company)=> {
    if (company.valuation >900000000000){
        return true;
    }
})

console.table(good);
console.table(trillion);