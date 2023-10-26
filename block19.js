const names = [ "Dr.Stan" , "Dr. Heff" , "Prof. Ozzy", "Prof. Strut", "Dr. Waul", "Prof. Chula", "Dr. Pilgrim" , "Prof. Frenchie"];
const occupation = ["gardener". "teacher", "teacher", "teacher", "programmer", "teacher" , "driver"];
const prices = ["$51", "$43", "$81", "$43", "$76", "$47", "$72"];

  console.log.apply("freelancers array:", freelancers)
//setInterval will always set out a Number. 
  // Function to display the list of freelancers
  function displayFreelancers() {
      //freelancers.innerHTML = ''; // Clear the list
      const tableBody = document.querySelector("td");
      console.log(tableBody);
      const newElement = freelancer.map(freelancer => { //Map will loop over array and return information. Set to a variable because it's a new array and there needs to be a reference to it. 
          const freelancerDiv = document.createElement("tbody");
         freelancerDiv.classList.add("freelancer");
        freelancerDiv.innerHTML = `
            <td>Name: ${freelancer.name}</td>
            <td>Occupation: ${freelancer.occupation}</td>
            <td>Starting Price: $${freelancer.price}</td>`;
          return freelancerDiv
      });
      tableBody.replaceChildren(...newElement); //... << Spread Operator: To say that it's copying the contents of the array as individual elements.
      updateAveragePrice();
  }
  const averagePriceSpan = document.getElementById("average-price");

  // Function to calculate and update the average starting price
  function updateAveragePrice() {
      const totalPrice = freelancer.reduce((sum, freelancers) => sum + freelancer.price, 0);
      const averagePrice = totalPrice / freelancers.length;
      averagePriceSpan.textContent = "$" + averagePrice.toFixed(2);
  }

  // I can call the function to display the initial list of freelancers
  displayFreelancer();

  // You can add code to update the list and average price as new freelancers are added.
  // I might be able to periodically call displayFreelancers() and updateAveragePrice().
   // This should cause new freelancers being added every few seconds:
   function addFreelancer() {
    // ...
    if (freelancer.length >= maxFreelancer) {
      clearInterval(addFreelancerIntervalId);
    }
  }
// Add a new freelancer every 5 seconds
//Set Interval render every 5 seconds. 

 