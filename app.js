function countToNumber(content, dataAttribute) {
  const totalDuration = 15000;
  const intervalDuration = 100;
  const numberOfIntervals = totalDuration / intervalDuration;
  const increment = dataAttribute / numberOfIntervals;

  let currentNumber = (dataAttribute / 100) * 80;
  content.innerHTML = Math.ceil(currentNumber) + "<sup>+</sup>";

  const interval = setInterval(() => {
    currentNumber += increment;
    if (currentNumber >= dataAttribute) {
      currentNumber = dataAttribute;
      clearInterval(interval);
    }
    content.innerHTML = Math.ceil(currentNumber) + "<sup>+</sup>";
  }, intervalDuration);
}
const section = document.getElementById("vct_content");
const counter = document.querySelectorAll(".counter");
console.log(counter);
const observer = new IntersectionObserver((entries, observer) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      counter.forEach((content, index) => {
        const dataAttribute = content.getAttribute("data-example");
        countToNumber(content, dataAttribute);
        observer.unobserve(entry.target);
      });
    }
  });
});

observer.observe(section);
