document.addEventListener('DOMContentLoaded', function() {
  const savedColor = localStorage.getItem('backgroundColor');
    if (savedColor == null) {
      applyColorScheme("#473D4D");
    }
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
  const links = document.querySelectorAll('a');
  links.forEach(function(link) {
    link.style.color = color;
  });
}

document.getElementById('toggleImage').addEventListener('click', function() {
  var img = document.getElementById('toggleImage');
  if (img.src.includes('1206977731859062824')) { // Use a unique part of the URL for comparison
    img.src = 'https://cdn.discordapp.com/attachments/549313004701876244/1206977825333317653/image.png?ex=65ddf8b2&is=65cb83b2&hm=d03510280095815c5a14591ff236727e9f8e83a554c5471480718bcbce409858&'; 
  } 
  else {
    img.src = 'https://cdn.discordapp.com/attachments/549313004701876244/1206977731859062824/image.png?ex=65ddf89b&is=65cb839b&hm=de43d8d2822d947978803a7e3bd86cd1aa604fb30690945a1596d113cdf3294d&'; 
  }
});  