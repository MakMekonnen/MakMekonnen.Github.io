document.addEventListener('DOMContentLoaded', function() {
    const savedColor = localStorage.getItem('backgroundColor');
    if (savedColor) {
      applyColorScheme(savedColor);
    }
  });
  
  document.getElementById('colorPicker').addEventListener('input', function(e) {
    const color = e.target.value;
    applyColorScheme(color);
    localStorage.setItem('backgroundColor', color);
  });
  
  function applyColorScheme(color) {
    document.body.style.backgroundColor = color;
    adjustTextColor(color);
    document.getElementById('colorPicker').value = color;
  }
  
  function adjustTextColor(bgColor) {
    const color = (parseInt(bgColor.substr(1), 16) > 0xffffff/2) ? 'black' : 'white';
    document.body.style.color = color;
    const links = document.querySelectorAll('.menu-bar a');
    links.forEach(function(link) {
      link.style.color = color;
    });
  }
  