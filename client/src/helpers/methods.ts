export const validateEmail = (email: string) => {
  return email.match(
    /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
  );
};

export const validatePassword = (password: string) => {
  return password.match(
    /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,16}$/
  );
};

export const fetchData = async (
  url: string,
  method: string,
  headers?: any,
  body?: any
) => {
  try {
    const requestOptions: any = {
      method: method,
      headers: {
        Authorization: "Basic " + btoa("user:user"),
      },
      body: body && JSON.stringify(body),
    };

    if (headers) {
      Object.assign(requestOptions.headers, headers);
    }

    const response = await fetch(url, requestOptions);
    const data = await response.json();
    return data;
  } catch (e: any) {
    throw e;
  }
};
