==============================Index Page
Button for viewing tables // go to VIEW html - route 
Button for making reservations //go to ADD html - route

Link to view Table array in JSON format
	Once array hits 5 it should go to the waitlist array
	GET Method

Link to view Waitlist array in JSON format
	GET Method





=============================View Page
Panel for current reservations - GET Method from the JSON Array
Panel for waitlist reservations - GET method from the JSON Array


Link for clear tables
Link for API Tables
Link for API Wait List




===============================Add Page
Button to go view tables// - route to View Page
Button to go back home// - route to Index Page


Form with:
	Name
	Phone
	Email
	Unique ID
	METHOD: POST, ROLE: FORM



jQuery will take form submission and submit JSON object to array
	if statement for more than 5 or less than 5 to decide which array
		Message based upon which array they are added to
POST method used to add the table reservation form in JSON object to the server