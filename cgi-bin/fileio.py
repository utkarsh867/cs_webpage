#!/usr/local/bin/python
print """Content-type: text/html\n

<html>
<head>
</head>
<title>Webpage</title>
<body>
<center>
<h1>This webpage has been accessed for</h1>
"""
n=0
count=0
with open("number.txt", "r") as f:
 count = f.read()
 n = int(count)
f.close()
with open("number.txt","w") as f:
 f.write(str(n+1))
f.close()
print "<h1>"+count+"</h1>"
print"""
<h1>times<h1>
</center>
</body>
</html>
"""
