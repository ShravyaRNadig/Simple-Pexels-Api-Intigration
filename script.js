$(document).ready(function(){
	var api_key = "563492ad6f9170000100000148e99cdca6ba40418773bacfd56f241c"
	var image = ''
	
	$("#form").submit(function(event){
		event.preventDefault()
		
		var search = $("#search").val()
		
		imagesearch()
	})
	
	function imagesearch(){
		$.ajax({
			method: 'GET',
			beforeSend: function (xhr) {
				xhr.setRequestHeader ("Authorization", api_key);
			},
			url:"https://api.pexels.com/v1/search?query="+search+"&per_page=8&page=1",
			success: function(data){
				console.log(data)
				
				data.photos.forEach(photo => {
					image =`
					
					<img src="${photo.src.original}" width="400" height = "300" />
					
					`
					$("#images").append(image)
				});
			},
			error:function(error){
				console.log(error)
			}
			
		})
	}
})