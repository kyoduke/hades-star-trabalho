const text_elements = document.querySelectorAll('.text');
const title = document.querySelector('h1');
const header = document.querySelector('header');

title.addEventListener('click', event => {
  const color = header.style.backgroundColor;
  console.log(color);
  if(color == 'rgb(64, 40, 128)' || color == '#402880') {
    header.style.backgroundColor = '#f4f4f4';
    header.style.color = 'black';
  } else {
    header.style.backgroundColor = '#402880';
    header.style.color = 'white';
  }
});

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


