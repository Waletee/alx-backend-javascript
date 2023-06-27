import signUpUser from "./4-user-promise";
import uploadPhoto from "./5-photo-reject";

function handleProfileSignup(firstName, lastName, fileName) {
  const promises = [signUpUser(firstName, lastName), uploadPhoto(fileName)];

  return Promise.allSettled(promises).then((res) =>
    res.map((res) => ({
      status: res.status,
      value: res.status === "fulfilled" ? res.value : `${res.reason}`,
    }))
  );
}

export default handleProfileSignup;
