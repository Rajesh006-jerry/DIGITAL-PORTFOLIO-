const totalWaterInput = document.getElementById('total-water');
const calculateBtn = document.getElementById('calculate-btn');
const resultDiv = document.getElementById('result');

calculateBtn.addEventListener('click', (e) => {
    e.preventDefault();
    const totalWater = parseInt(totalWaterInput.value);
    if (isNaN(totalWater)) {
        resultDiv.innerHTML = 'Please enter a valid number';
        return;
    }
    const totalDrops = calculateTotalDrops(totalWater);
    resultDiv.innerHTML = `Total Drops: ${totalDrops.toLocaleString()}`;
});

function calculateTotalDrops(totalWater) {
    
    const dropsPerLiter = 20000;
    return totalWater * dropsPerLiter;
}


