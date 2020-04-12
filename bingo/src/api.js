//Login
export const AuthLogin = async (email, password) => {
  try {
    //Query
    var raw = `{\n	\"username\": \"${email}\",\n	\"password\": \"${password}\"\n}`;

    //Header
    var requestOptions = {
      method: "POST",
      body: raw,
      redirect: "follow",
      withCredentials: true,
      credentials: "include",
      headers: {
        "Content-type": "application/json",
      },
    };

    //Fetching URL
    const req = await fetch(
      "http://staging.bingored.co:8080/userweb-0.0.1-SNAPSHOT/auth",
      requestOptions
    );
    //response
    const res = await req.json();
    return await res;
  } catch (error) {
    console.log(error);
  }
};

//GET PROFILE
export const getProfile = async () => {
  var token = localStorage.getItem("Token");
  var requestOptions = {
    method: "GET",
    redirect: "follow",
    withCredentials: true,
    credentials: "include",
    headers: {
      Authorization: token,
      "Content-type": "application/json",
    },
  };

  const req = await fetch(
    "http://staging.bingored.co:8080/userweb-0.0.1-SNAPSHOT/myprofile",
    requestOptions
  );
  const res = await req.json();
  /* userContext.getUserData(res.data.names, res.data.lastNames);
        setUser(res.data);
        setLoading(false); */
  return res;
};

//GET FIGURE LIST

export const getFigures = async () => {
  var token = localStorage.getItem("Token");
  var requestOptions = {
    method: "GET",
    redirect: "follow",
    withCredentials: true,
    credentials: "include",
    headers: {
      Authorization: token,
      "Content-type": "application/json",
    },
  };

  const req = await fetch(
    "http://staging.bingored.co:8080/gameweb-0.0.1-SNAPSHOT/figure",
    requestOptions
  );
  const res = await req.json();
  return res;
  /*     console.log("Lista de figuras", res);
    setFigures(res.data);
    setLoadingFigure(false); */
};

//Get the Figure Modalities

export const getModalities = async () => {
  var token = localStorage.getItem("Token");
  var requestOptions = {
    method: "GET",
    redirect: "follow",
    withCredentials: true,
    credentials: "include",
    headers: {
      Authorization: token,
      "Content-type": "application/json",
    },
  };

  const req = await fetch(
    "http://staging.bingored.co:8080/gameweb-0.0.1-SNAPSHOT/groupfigure",
    requestOptions
  );
  const res = await req.json();
  return res;
  /*     setModalities(res.data);
    setLoadingModality(false);
    console.log("Modality", res); */
};
