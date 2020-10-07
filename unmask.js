function unmask()
{
    var first = "joe";
    var lastFirst = "rinaldi";
    var lastSecond = "johnson";
    var mailServer = "gmail.com"
    document.querySelector('#eml').innerHTML = '<a hr' + 'ef' + '="ma' + 'ilto' + ':' + first + lastFirst + lastSecond + '@' + mailServer + '">' + first + lastFirst + lastSecond + '@' + mailServer + '</' + 'a>';
    document.querySelector('#btn').style.visibility = 'hidden';
}