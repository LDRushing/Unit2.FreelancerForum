const freelancers = [

]
const names = [ "Dr. Stan" , "Dr. Heff" , "Prof. Ozzy", "Prof. Strut", "Dr. Waul", "Prof. Chula", "Dr. Pilgrim" , "Prof. Frenchie"];
const occupations = ["gardener", "teacher", "teacher", "teacher", "programmer", "teacher" , "driver"];
const prices = [51, 43, 81, 43, 76, 47, 72]; //Don't add dollar signs to price arrays. The console is inspecting just numbers. 

  console.log("freelancers array:", freelancers)
//setInterval will always set out a Number. 
  // Function to display the list of freelancers
  function displayFreelancers() {
      //freelancers.innerHTML = ''; // Clear the list
      const tableBody = document.querySelector("tbody");
      console.log(tableBody);
      const newElements = freelancers.map(freelancer => { //Map will loop over array and return information. Set to a variable because it's a new array and there needs to be a reference to it. 
          const freelancerDiv = document.createElement("tr");
         freelancerDiv.classList.add("freelancer");
        freelancerDiv.innerHTML = `
            <td>Name: ${freelancer.name}</td>
            <td>Occupation: ${freelancer.occupation}</td>
            <td>Starting Price: $${freelancer.price}</td>`;
          return freelancerDiv
      });
      tableBody.replaceChildren(...newElements);
      //tableBody.replaceChildren(...newElement); //... << Replaces the whole array; Spread Operator: To say that it's copying the contents of the array as individual elements.
      updateAveragePrice();
  }
  const averagePriceSpan = document.getElementById("average-price");

  // Function to calculate and update the average starting price. 
  function updateAveragePrice() {
      const totalPrice = freelancers.reduce((sum, freelancer) => sum + freelancer.price, 0);
      const averagePrice = totalPrice / freelancers.length;
      console.log("Average price: ", averagePrice, totalPrice);
      console.log("Freelancers", freelancers);
      averagePriceSpan.textContent = "$" + averagePrice.toFixed(2);
  }

  // I can call the function to display the initial list of freelancers
  displayFreelancers();

  // You can add code to update the list and average price as new freelancers are added.
  // I might be able to periodically call displayFreelancers() and updateAveragePrice().
   // This should cause new freelancers being added every few seconds
   //In arrays, make collections plural, but if functions are pushing a single thing, make it singular:
   function addFreelancer() {
    const name = names[Math.floor(Math.random() * names.length)];
    const occupation = occupations[Math.floor(Math.random() * occupations.length)];
    const price = prices[Math.floor(Math.random() * prices.length)];
    freelancers.push({name, occupation, price});
    updateAveragePrice
    displayFreelancers()  }

// Add a new freelancer every 5 seconds
//Set Interval render every 5 seconds. 5000 = 5 milliseconds. 
const addFreelancersIntervalId = setInterval(addFreelancer, 5000);
