'use strict';
const progress = document.getElementById('progress');
const prevBtn = document.getElementById('prev');
const nextBtn = document.getElementById('next');
const circles = document.querySelectorAll('.circle');
const container = document.querySelector('.container');

let currentActive = 1;

function update() {
  circles.forEach((circle, i) => {
    if (i < currentActive) {
      circle.classList.add('active');
    } else {
      circle.classList.remove('active');
    }
  });

  const actives = document.querySelectorAll('.active');
  progress.style.width = `${
    ((actives.length - 1) / (circles.length - 1)) * 100
  }%`;

  if (currentActive === 1) {
    prevBtn.disabled = true;
  } else if (currentActive === circles.length) {
    nextBtn.disabled = true;
  } else {
    prevBtn.disabled = false;
    nextBtn.disabled = false;
  }
}

function nextStep() {
  currentActive++;

  if (currentActive > circles.length) {
    currentActive = circles.length;
  }
}

function prevStep() {
  currentActive--;

  if (currentActive === 0) {
    currentActive = 1;
  }
}

nextBtn.addEventListener('click', () => {
  nextStep();
  update();
});

prevBtn.addEventListener('click', () => {
  prevStep();
  update();
});

document.addEventListener('keydown', (e) => {
  console.log(e);
  if (e.key === 'ArrowRight') {
    nextStep();
    update();
  }
});

document.addEventListener('keydown', (e) => {
  console.log(e);
  if (e.key === 'ArrowLeft') {
    prevStep();
    update();
  }
});

circles.forEach((circle, i) => {
  circle.addEventListener('click', () => {
    currentActive = i + 1;
    update();
  });
});


// Added keypad navigation, made the circles clickable