// var db = [ { username : "admin0", password : "Admin@123#" }, { username : "admin1", password : "Admin@123#" }, { username : "admin2", password : "Admin@123#" }, { username : "admin3", password : "Admin@123#"	}, { username : "admin4", password : "Admin@123#" } ];
// var newsFeed = [ { username : "admin0", timeLine : "Hi it's me ADMIN 0" }, { username : "admin1", timeLine : "Hi it's me ADMIN 1" }, { username : "admin2", timeLine : "Hi it's me ADMIN 2" }, { username : "admin3", password : "Hi it's me ADMIN 3"	}, { username : "admin4", password : "Hi it's me ADMIN 4" } ];

// function isUserValid(username, password)
// {
// 	for (var i = 0 ; i < db.length ; i++)
// 	{
// 		if(db[i].username === username  && db[i].password === password)
// 		{
// 			return true;
// 		}
// 	}
// 	return false;
// }

// function signIn(username,password)
// {
// 	if (isUserValid(username, password))
// 	{
// 		for (var i = 0 ; i < newsFeed.length ; i++)
// 		{
// 			if ( newsFeed[i].username === username )
// 			{
// 				console.log(newsFeed[i]);
// 			}
// 		}
// 	}
// 	else
// 	{
// 		alert("Unable to Login. You are enter WRONG username & password.");
// 	}
// }

// var enter_username = prompt("Enter Your Username");
// var enter_password = prompt("Enter Your Password");

// signIn(enter_username,enter_password);

const a =100;

var ac = document.getElementsByClassName("same-page")[0];

ac.addEventListener("click", function()
	{
		alert("You are on same page!");
	}
);