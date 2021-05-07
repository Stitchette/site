const counter = document.getElementById('counter');



const updateCounter = async () => {
   const data = await fetch('https://api.countapi.xyz/hit/tiffanytestvisits/counter')
   const count = await data.json()
   counter.innerHTML = count.value
   counter.style.filter = 'blur(0)'
};

updateCounter();

