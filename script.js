let lightOn = false;

function toggleLight() {
  const button = document.getElementById('toggleButton');

  if (lightOn) {
    button.classList.remove('on');
    button.classList.add('off');
    lightOn = false;
  } else {
    button.classList.remove('off');
    button.classList.add('on');
    lightOn = true;
  }
}
