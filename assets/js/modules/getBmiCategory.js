export const getBmiCategory = (bmiValue) => {
	const bmiCategories = {
		Underweight: bmiValue < 18.5,
		Normal: bmiValue >= 18.5 && bmiValue <= 24.9,
		Overweight: bmiValue >= 25 && bmiValue <= 29.9,
		Obesity: bmiValue >= 30,
	};

	return Object.keys(bmiCategories).find((key) => bmiCategories[key]);
};
