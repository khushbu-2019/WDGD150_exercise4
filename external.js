var link = new Array ();
link['linkName']="W3Schools";
link['linkLogo']="https://www.w3schools.com/images/w3schools.png";
link['linkURL']="https://www.w3schools.com";
link['linkDescription']="W3Schoools is a web developer information website, with tutorials and references relating to web development topics such as HTML, CSS, Javascropt and PHP.";
document.write ("<h1>" + link['linkName'] + "</h1>" + "<img src= " + link['linkLogo'] + ">" + "<br>" + "<a href=" + link['linkURL'] + ">" + link['linkName'] + "</a>" + "<br>" + "<p>" + link['linkDescription'] + "</p>");