import axios from "axios";
axios.defaults.withCredentials = true;

export async function onRegistration(registrationData) {
  return await axios.post(
    "http://localhost:8000/api/register",
    registrationData
  );
}

export async function onLogin(LoginData) {
  return await axios.post("http://localhost:8000/api/login", LoginData);
}
export async function onLogout() {
  return await axios.get("http://localhost:8000/api/logout");
}

export async function fetchProtectedInfo() {
  return await axios.get("http://localhost:8000/api/protected");
}
