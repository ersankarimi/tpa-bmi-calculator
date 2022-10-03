// import modules
import { calculateBmiValue } from "./modules/calculateBmiValue.js";
import { getBmiCategory } from "./modules/getBmiCategory.js";

// Selection html elements
const formElement = document.querySelector("form");
const heightValueElement = document.querySelector("#height");
const weightValueElement = document.querySelector("#weight");
const headerResultElement = document.querySelector("#result").firstElementChild;
const bmiValueElement = document.querySelector("#bmi-value");
const bmiCategoryElement = document.querySelector("#bmi-category");

// Set submit event for calculate BMI value, get BMI category, and show them on the display
formElement.addEventListener("submit", (event) => {
	event.preventDefault();

	const [weight, height] = [weightValueElement.value, heightValueElement.value];
	const bmiValue = calculateBmiValue(weight, height);
	const bmiCategory = getBmiCategory(bmiValue);

	// Update content
	headerResultElement.classList.remove("hidden");
	bmiValueElement.textContent = bmiValue;
	bmiCategoryElement.textContent = bmiCategory;

	// Reset input field
	formElement.reset();
});
