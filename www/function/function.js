function read(){
var action = 'read';
$.ajax({
        url: "http://iprime.my/dev/function/apps/function.php",
        type: "POST",
		data: {action},
        success: function(data) {
			alert(data);
        }
    });
}


