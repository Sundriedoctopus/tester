<script src="https://ajax.googleapis.com/ajax/libs/jquery/2.1.1/jquery.min.js"></script>
<div id="colorpad" style="width:300px;height:300px;background-color:#000">

</div>
<button onclick="setRandomColor()">Random Color</button>


<script>
jQuery(document).ready(function(){
  setRandomColor();
});


function getRandomColor() {
  var letters = '0123456789ABCDEF';
  var color = '#';
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}



function setRandomColor() {
  $("#colorpad").css("background-color", getRandomColor());
}
</script>
