// Solutions
// 1. Timeout ❌
// 2. Callbacks ❌
// 3. Promise 💖💖💖

const cv = {
    name: "Andrii",
    age: 25,
    skills: ['js', 'react'],
};

const knowledge = ['coma operator', 'types in js', 'var/let difference'];

function findVacancies() {
  return new Promise((resolve, reject) => {
    sendRequestToServer('/vacancies', null, (vacanciesResponse) => {
      const vacancy = vacanciesResponse.body.vacancies
          .find(vacancy => vacancy.skills.includes(cv.skills[1]));

      !vacancy ? resolve(vacancy) : reject(new Error('No vacancies by your request...'));
    });
  });
}

function sendCV(vacancy) {
  return new Promise((resolve, reject) => {
      sendRequestToServer('/send-cv', { cv, vacancy }, (sendCvResponse) => {
        sendCvResponse.body.invitedToInterview
          ? resolve(sendCvResponse.body.invitedToInterview)
          : reject(sendCvResponse.body.invitedToInterview);
      });
  });
}

function passInterview() {
  return new Promise((resolve, reject) => {
    sendRequestToServer('/interview', { knowledge }, (interviewResponse) => {
      if (interviewResponse.body.interviewPassed) {
        resolve(interviewResponse.body.interviewPassed);
      } else {
        reject(new Error('Interview not passed...'));
      }
    });
  });
}

function callToMom() {
  return new Promise(() => {
    // TODO: add implementation
  });
}

findVacancies()
  .then(sendCV)
  .then(passInterview)
  .then(callToMom)
  .catch((error) => console.error(error));

// --------------------------------------------------------

const giveMeNumberPromise = Promise.resolve(100);

function add100(num) {
  return num + 100;
}

function add200(num) {
  null.toString();
}

function logValue(value) {
  console.log(value);
  return value;
}

giveMeNumberPromise
  .then(add100)
  .then(logValue)
  .then(add100)
  .then(logValue)
  .then(add200)
  .catch((errValue) => {
    console.warn(errValue);
    return 0;
  })
  .then(add100)
  .then(logValue)
  .then(add100)
  .then(add100)
  .then(logValue);

// --------------------------------------------------------

function get5AsyncPromises() {
  const result = [];

  for (let index = 1; index < 6; index++) {
    const promise = new Promise((resolve) => {
      const time = imitateAsync(() => {
        (time > 700) ? resolve(time) : reject('too fast');
      });
    });
    result.push(promise);
  }

  return result;
}


Promise.all([Promise.resolve(1),Promise.reject(2),Promise.resolve(3),Promise.resolve(4),Promise.resolve(5)])
.then(logValue);

Promise.allSettled([Promise.resolve(1),Promise.reject(2),Promise.resolve(3),Promise.resolve(4),Promise.resolve(5)])
.then(logValue);

Promise.any([Promise.reject(1),Promise.reject(2),Promise.resolve(3),Promise.reject(4),Promise.reject(5)])
.then(logValue);

Promise.race(get5AsyncPromises()).then(logValue);

// --------------------------------------------------------

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
