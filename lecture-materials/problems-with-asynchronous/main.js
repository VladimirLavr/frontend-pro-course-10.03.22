// Solutions
// 1. Timeout ❌
// 2. Callbacks ❌
// 3. Promise 💖

const cv = {
  name: "Andrii",
  age: 25,
  skills: ['js', 'react'],
};

const knowledge = ['coma operator', 'types in js', 'var/let difference'];

sendRequestToServer('/vacancies', null, (vacanciesResponse) => {
  console.log(vacanciesResponse);
  const vacancy = vacanciesResponse.body.vacancies
    .find(vacancy => vacancy.skills.includes(cv.skills[1]));

  sendRequestToServer('/send-cv', { cv, vacancy }, (sendCvResponse) => {
    console.log(sendCvResponse);
    if (sendCvResponse.body.invitedToInterview) {

      sendRequestToServer('/interview', { knowledge }, (interviewResponse) => {
        console.log(interviewResponse);
        if (interviewResponse.body.interviewPassed) {

          sendRequestToServer('/call-mom', null, (momsResponse) => {
            console.log(momsResponse);
            document.getElementById('output').innerText = momsResponse.body.momsReaction;
          });
        }
      });
    }
  });
});

const promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    const response = false;
    response ? resolve(123) : reject("Sorry!");
  }, 1000);
});

console.log(promise);

promise
  .then((result) => console.log(result))
  .catch((reason) => console.warn(reason))
  .finally(() => console.log('😒'));
