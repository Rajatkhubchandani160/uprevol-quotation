const currency=(number)=>{
    const formater =new Intl.NumberFormat('en-US',{
        style:"currency",
        currency:"INR",
        minimumFractionDigits:2
    })
    return formater.format(number)
}
// export default currency


// const currency = (amountInINR) => {
//     const exchangeRateINRtoUSD = 1/83.6 // Example exchange rate (1 INR = 0.013 USD)
//     if (typeof amountInINR !== 'number' || amountInINR < 0) {
//         throw new Error('Please provide a valid positive number for the amount in INR');
//     }
//     const amountInUSD = amountInINR * exchangeRateINRtoUSD;
//     const formater =new Intl.NumberFormat('en-US',{
//                 style:"currency",
//                 currency:"USD",
//                 minimumFractionDigits:2
//             })
//             return formater.format(amountInUSD)
//     }


export default currency;
