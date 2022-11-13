const encodeQuery = (obj) => {
    var str = [];
    for (var p in obj)
        if (obj.hasOwnProperty(p)) {
            str.push(encodeURIComponent(p) + "=" + encodeURIComponent(obj[p]));
        }
    return str.join("&");
};

const fetcher = async ({ url, params = {}, json = null }) => {
    if (localStorage.TOKEN) {
        params.token = localStorage.TOKEN;
    }
    let options = {};
    let fetchurl = "http://localhost:3001" + url + "?" + encodeQuery(params);
    if (json) {
        options.method = "POST";
        options.body = JSON.stringify(json);
        options.headers = {
            "Content-Type": "application/json",
        };
    }
    return await fetch(fetchurl, options).then(async (res) => {
        if (res.ok) {
            return await res.json();
        }
        if (res.status === 401) {
            window.location.href = "/";
        } else {
            throw new Error((await res.json()).message);
        }
    });
};

export default fetcher;
