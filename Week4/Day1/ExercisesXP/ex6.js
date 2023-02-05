let bankAmount=1000;
const VAT= 1.17;
const details = ["+200", "-100", "+146", "+167", "-2900"];


details.forEach((expense,i) => {
    totalExpense=(parseInt(expense)*VAT).toFixed(2);
    bankAmount+=parseFloat(totalExpense);
});

console.log(`bank balance ${bankAmount}`);
