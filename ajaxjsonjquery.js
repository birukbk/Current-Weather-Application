 $(document).ready(function() {
    $.ajax( {
        url:'weather.json',
		type: 'GET',
        dataType: 'json', // Returns JSON
		success: function(response){
			var output = '';
			var unitForTemp='°C';
			var unitForSpeed='mph';
			for (var i = 0; i < response.length;i++) {
				output+= '<tr><td>'+ response[i].city.cityName+ '</td>';
				output+= '<td>'+ response[i].currentConditions+ '</td>';
				output+= '<td>'+ response[i].temperature+unitForTemp+ '</td>';
				output+= '<td>'+ response[i].wind.windSpeed+ unitForSpeed+'</td>';
				output+= '<td>'+ response[i].wind.windDirection+ '</td>';
				output+= '<td>'+ response[i].wind.windChillFactor+ '</td></tr>';
			}
			$('#citylist').append(output);
		},	
		error: function() {
			$('#info').html('<p>An error has occurred</p>');
       }
    });      
});