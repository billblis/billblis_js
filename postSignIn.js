import { postWithToken } from "https://jscroot.github.io/api/croot.js";
import { setInner, getValue } from "https://jscroot.github.io/element/croot.js";

const PostSignIn = () => {
    const target_url = "https://asia-southeast2-xenon-hawk-402203.cloudfunctions.net/Billblis";
    // const tokenkey = "token";
    // const tokenvalue = "5f2dcd0e6f39ad4515c8397819a04a22bd6ff03d63b0eaa5913c9e93a217c33b";
    const datainjson = {
        name: getValue("name"),
        password: getValue("password")
    };

    // postWithToken(target_url, tokenkey, tokenvalue, datainjson, responseData);
    postWithToken(target_url, datainjson, responseData);
};

const responseData = (result) => {
    if (result.message === "Selamat Datang") {
        setCookieWithExpireHour("token", result.token, 2);
        alert(`Berhasil Masuk ${result.message}`);
        window.location.href = "dashboard.html";
    } else {
        alert(`Gagal Masuk password atau username salah`);
        console.log(result.message);
    }
};

const setCookieWithExpireHour = (cname, cvalue, exhour) => {
    const d = new Date();
    d.setTime(d.getTime() + exhour * 60 * 60 * 1000);
    const expires = `expires=${d.toUTCString()}`;
    document.cookie = `${cname}=${cvalue};${expires};path=/`;
};

window.PostSignIn = PostSignIn;