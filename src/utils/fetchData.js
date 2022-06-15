export default function httpGet(url, body, headers){
    try {
        var xmlHttp = new XMLHttpRequest();
        xmlHttp.open('GET', url, false); // false for synchronous request
        xmlHttp.setRequestHeader('Accept', 'application/json');
        xmlHttp.setRequestHeader('Content-Type', 'application/json');
        for (var key in headers) {
            xmlHttp.setRequestHeader(key, headers[key]);
        }

        xmlHttp.send(JSON.stringify(body));
        return xmlHttp.responseText;
    } catch (e) {
        return null;
    }
}