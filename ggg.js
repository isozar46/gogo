   <script type="text/javascript">
          var sTime = new Date().getTime();

    var countDown = 10; // Number of seconds to count down from.        

    function UpdateCountDownTime() {
        var cTime = new Date().getTime();
        var diff = cTime - sTime;

    var seconds = countDown - Math.floor(diff / 1000);
        if (seconds >= 0) {
            var hours = Math.floor(seconds / 3600);
            var minutes = Math.floor( (seconds-(hours*3600)) / 60);
            seconds -= (hours*3600) + (minutes*60);
            if( hours < 10 ){
                timeStr = "0" + hours;
            }else{
                timeStr = hours;
            }
            if( minutes < 10 ){
                timeStr = timeStr + ":0" + minutes;
            }else{
                timeStr = timeStr + ":" + minutes;
            }
            if( seconds < 10){
                timeStr = timeStr + ":0" + seconds;
            }else{
                timeStr = timeStr + ":" + seconds;
            }
            document.getElementById("countdowntimertxt").innerHTML = timeStr;
        }else{
            document.getElementById("countdowntimertxt").style.display="none";
            clearInterval(counter);
        }
    }
    UpdateCountDownTime();
    var counter = setInterval(UpdateCountDownTime, 500);
      
      $(document).ready(function() {
  setTimeout(function() {
    $("#proceed").show();
  }, 11000);
});
      
      setTimeout(function(){
    document.getElementById('aap').className = 'waa';
}, 10000);
    </script>
