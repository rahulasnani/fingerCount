
	var left_ring=0;
	var right_ring=0;
	var right_middle = 0;
	var left_middle = 0;
	var right_index = 0;
	var left_index=0;
	var left_small=0;
	var right_small=0;
	var thumb = 0;
	var time_left_ring = 0;
	var time_right_middle = 0;
	var time_right_ring = 0;
	var time_left_middle = 0;
	var time_right_index = 0;
	var time_left_index = 0;
	var time_right_small = 0;
	var time_left_small = 0;
	var time_thumb =0;
	var start = 0;
	var end = 0;
	start = new Date().getTime();

	function myFunction(event) {
	    var x = event.which || event.keyCode;    

	    if(x==50 || x==119 || x==115 || x==120 || x==64){
	    	left_ring++;
			end = new Date().getTime();
			time_left_ring = (end - start)/1000;
			console.log(1/time_left_ring);
			start = new Date().getTime();	

	    }else if(x==56 || x==105 || x==107 || x==44 || x==60 || x==42){
	    	right_middle++;
	    	end = new Date().getTime();
			time_right_middle = (end - start)/1000;
			console.log(1/time_right_middle);
			start = new Date().getTime();	

	   	}else if(x==57 || x==111 || x==108 || x==46 || x==62 || x==40){
	    	right_ring++;
	    	end = new Date().getTime();
			time_right_ring = (end - start)/1000;
			console.log(1/time_right_ring);
			start = new Date().getTime();	
	   	}

	    else if(x==51 || x==35 || x==101 || x==100 || x==99){
	    	left_middle++;
	    	end = new Date().getTime();
			time_left_middle = (end - start)/1000;
			console.log(1/time_left_middle);
			start = new Date().getTime();	
	    }

	    else if(x==54 || x==94 || x==55 || x==38 || x==121 || x==117 || x==104 || x==106 || x==110 || x==109){
	    	right_index++;
	    	end = new Date().getTime();
			time_right_index = (end - start)/1000;
			console.log(1/time_right_index);
			start = new Date().getTime();	
	    }
		 else if(x==52 || x==36 || x==53 || x==37 || x==114 || x==116 || x==102 || x==103 || x==118|| x==98){
	    	left_index++; 
	    	end = new Date().getTime();
			time_left_index = (end - start)/1000;
			console.log(1/time_left_index);
			start = new Date().getTime();	

	    }else if(x==48 || x== 41 || x==45 || x==95 || x== 80 || x==112 || x==91 || x== 123 || x==125 || x==93 || x==59 || x==58 || x==34 || x== 39 || x==13 || x==47 || x==63){
	    	right_small++;
	    	end = new Date().getTime();
			time_right_small = (end - start)/1000;
			console.log(1/right_small);
			start = new Date().getTime();	
	    }

	    else if(x==113 || x== 81 || x==97 || x==65 || x== 122 || x==90 || x==49 || x== 33){
		    left_small++;
		    end = new Date().getTime();
			time_left_small = (end - start)/1000;
			console.log(1/time_left_small);
			start = new Date().getTime();	

	    }else if(x == 32){
	    	thumb++;	
	    	end = new Date().getTime();
			time_thumb = (end - start)/1000;
			console.log(1/time_thumb);
			start = new Date().getTime();		 
	    }

	}

	$("#btn").on('click',function(){

		$("#demo").html("Left-Ring = " + left_ring + "<br>Right-Ring = " + right_ring +	"<br>Right-Middle = " + right_middle +
			 "<br>Left-Middle = " + left_middle +
			 "<br>Right-Index = " + right_index +
			 "<br>Left-Index = " + left_index +
			 "<br>Right-Small = " + right_index +
			 "<br>Left-Small = " + left_index +
			 "<br> Thumb = "  + thumb
			);

		 left_ring=0;
		 right_ring=0;
		 right_middle = 0;
		 left_middle = 0;
		 right_index = 0;
		 left_index=0;
		 left_small=0;
		 right_small=0;
		 thumb = 0;
		 $(".text").val('');
	})

	$("#prospects_form").submit(function(e) {
	    e.preventDefault();
	});

