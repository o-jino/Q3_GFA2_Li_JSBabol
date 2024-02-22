let text = "Do you wish to share your personal information?";

var nickname = "Jino";
var height = 126;
var weight = 202.2;


if (confirm(text) == true)
{
    alert
    (
        "Name: " + nickname + "\n" +
        "Height: " + height*0.45 + "\n" +
        "Weight: " + weight*0.45 + " lbs"
    );
}
else
{
    console.log ("“User does not wish to share his/her information.");
}