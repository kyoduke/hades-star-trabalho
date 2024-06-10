const text_elements = document.querySelectorAll('.text');
text_elements.forEach(element => {
  element.addEventListener('mouseover', event => {
    element.style.backgroundColor = '#402880';
    element.style.color = 'white';
  });
  element.addEventListener('mouseout', event => {
    element.style.backgroundColor = '#f4f4f4';
    element.style.color = 'black';
  });
});
