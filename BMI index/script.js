const btn = document.querySelector('.btn');
const weight = document.querySelector('.size2');
const height = document.querySelector('.size3');
const show = document.querySelector('.size4');
const age = document.querySelector('.size1')

btn.addEventListener('click', function(e) {
    e.preventDefault();
    const w = weight.value.trim();
    const h = height.value.trim();
    if (!w || !h || w <= 0 || h <= 0) {
        alert("Please enter valid weight and height.");
        return;
    }
    const bmi = calculateBMI(w, h);
    show.value = bmi.toFixed(2);
    weight.value = '';
    height.value = '';
    age.value = '';
});

function calculateBMI(weight, height) {
    return weight / (height * height);
}
