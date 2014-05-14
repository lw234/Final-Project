$(document).ready(function()
{	
	var total = 0;
	
	function calcTotal()
	{
		$("input:checked").each(function()
		{
			//This happens for each checked input field
			var Price = $(this).attr("Price");
			total += parseInt(Price); 
		});
	}

	//This happens when the page loads
	calcTotal();	
	$("form").before('<p class="total">Total: <strong>' + total + '</strong></p>');
	$(":submit").before('<p class="total">Total: <strong>' + total + '</strong></p>');
		
	$("input:checkbox, input:radio").click(function()
	{
		total = 0;
		calcTotal();
		$("p.total").html("Total: <strong>" + total + "</strong>");
	});
});
