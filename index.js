function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function image(){
	randomico =  getRandomIntInclusive(1, 421);
	console.log(randomico);
	estyle.style.backgroundImage = "linear-gradient(to bottom right, rgba(0, 0, 0, 0.65), rgba(0, 0, 0, 1)), url('https://raw.githubusercontent.com/DIEGOHORVATTI/wallpaper/main/" + randomico + ".png')";
	estyle.style.backgroundRepeat = "no-repeat";
	estyle.style.backgroundPosition = "top";
	estyle.style.backgroundAttachment = "fixed";
	estyle.style.backgroundSize = "cover";
}

var estyle = document.body;
image();

setInterval(
	()=> {
		image();
	}, 60000
)