import { calculateInvestmentResults, formatter } from "../util/investment";

export default function Results({userInput}){
    const resultsData = calculateInvestmentResults({...userInput})
    if(resultsData.length===0)
        return
    const initialInvestment = resultsData[0].valueEndOfYear - resultsData[0].interest - resultsData[0].annualInvestment
    return (
     <div>   
    { (resultsData.length > 0) && <table id="result">
        <thead>
            <tr>
                <th>Year</th>
                <th>Investment Value</th>
                <th>Interest (year)</th>
                <th>Total Interest</th>
                <th>Applied Capital</th>
            </tr>
        </thead>
        <tbody>
            {resultsData.map((row) => {
                const totalInterest = row.valueEndOfYear - row.year*row.annualInvestment - initialInvestment
                const appliedCapital = row.valueEndOfYear - totalInterest
                return (<tr key={row.year}>
                    <td>{row.year}</td>
                    <td>{formatter.format(row.valueEndOfYear)}</td>
                    <td>{formatter.format(row.interest)}</td>
                    <td>{formatter.format(totalInterest)}</td>
                    <td>{formatter.format(appliedCapital)}</td>
                </tr>)
            })}
        </tbody>
    </table>
    }
</div>
)}