<!--  SLIDER HTML  -->

<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <link type="text/css" rel="stylesheet" href="style.css">

</head>
<body>
  <div class="slides-container">
  <?php
  $n=4;
  for($i=0;$i<$n;$i++){
    if($i==1){
      echo '<div class="slides active" id="s'.$i.'"><div class="left last-slide" ></div><div class="right next-slide"></div></div>';
    }
    else {
      echo '<div class="slides" id="s'.$i.'"><div class="left last-slide" ></div><div class="right next-slide"></div></div>';
    }
  }
  ?><div style="width:100%;margin-top:500px;" class="text-center"><?php
  for($i=0;$i<$n;$i++){
    if($i==1){
      echo '<div class="slides-box active-box" id="s-box'.$i.'"></div>';
    }
    else {
      echo '<div class="slides-box" id="s-box'.$i.'"></div>';
    }
  }
  ?>
    </div>
  </div>
  <script src="http://code.jquery.com/jquery.js"></script>
  <script src='script.js'></script>
</body>
</html>
