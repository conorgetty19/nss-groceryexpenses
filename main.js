const monthlyExpenses = [ 201.43, 189.22, 132.09,  238.85, 195.41 ]
let totalExpense = 0

for (const total of monthlyExpenses) {
	totalExpense += total
}

// Calculate your average monthly food costs
const averageExpense = totalExpense / monthlyExpenses.length

// Make sure you use backticks for multi-line string output
console.log(`The total expense is ${totalExpense}. The average monthly expense is ${averageExpense}.`)