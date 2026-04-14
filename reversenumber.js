function reverseNumber(){
    const inputElement = document.getElementById('numberInput');
    let n = parseInt(inputElement.value);
    
    // Validate input
    if (isNaN(n)) {
        document.getElementById('result').textContent = 'Please enter a valid number';
        return;
    }
    
    // Store the original number to show with result
    const originalNum = n;
    
    // Handle negative numbers
    const isNegative = n < 0;
    n = Math.abs(n);
    
    let rev = 0;
    while(n != 0){
        //reverse a number
        rev = rev * 10 + n % 10;
        //remove last digit from the number
        n = Math.floor(n / 10);
    }
    
    // Apply negative sign if original was negative
    if (isNegative) {
        rev = -rev;
    }
    // Display the result using getElementById
    document.getElementById('result').textContent = `Reversed number: ${rev}`;
}