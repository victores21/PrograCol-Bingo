/* export const Auth = async (data) => {
  try {
    //Query
    var raw = `{\n	\"username\": \"${data.email}\",\n	\"password\": \"${data.password}\"\n}`;

    //Header
    var requestOptions = {
      method: "POST",
      body: raw,
      redirect: "follow",
    };

    //Fetching URL
    const req = await fetch(
      "http://186.147.125.7:8080/user-0.0.1-SNAPSHOT/auth",
      requestOptions
    );
    const res = await req.json();
    if (res.Authorization) {
      return await res;
    } else {
      return console.log("Error");
    }
    /*     //Token Const
    setToken(res.Authorization);
    setLoggedIn(true);
    Auth();

    //Putting the Token in Localstorage
    localStorage.setItem("Bearer Token", res.Authorization); */
/*   } catch (error) {
    console.log(error);
  }
}; */
