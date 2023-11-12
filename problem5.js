function gemsToDiamond(gems1, gems2, gems3) {
    // Each friend's power
    const power1 = 21;
    const power2 = 32;
    const power3 = 43;
  
    // Calculate the total diamonds
    const totalDiamond = (gems1 * power1) + (gems2 * power2) + (gems3 * power3);
  
    // If the total diamonds are greater than 1000
    if (totalDiamond > 1000) {
      const extraDiamond = totalDiamond - 2000;
      return 2000 + extraDiamond;
    } else {
      return totalDiamond;
    }
  }
  
  // Example usage:
  const result = gemsToDiamond( 1,1,1);
  const result1 = gemsToDiamond(20, 200, 50);
  const result2 = gemsToDiamond( 100, 5, 1);

  console.log(result); // This will print 2690 to the console
  console.log(result1); // This will print 2690 to the console
  console.log(result2); // This will print 2690 to the console
  