function readTextFile(file)
{
    var rawFile = new XMLHttpRequest();
    var allText="";
    rawFile.open("GET", file, false);
    rawFile.onreadystatechange = function ()
    {
        if(rawFile.readyState === 4)
        {
            if(rawFile.status === 200 || rawFile.status == 0)
            {
                allText = rawFile.responseText;

            }
        }
    };
    rawFile.send(null);
    return allText;
}

$(".infolist").click(function() {
    window.location = $(this).find("a").attr("href");
    return false;
});

var summary = readTextFile('js/summary.txt');
document.getElementById('summary').innerText = summary;

