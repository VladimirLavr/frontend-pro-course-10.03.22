function imitateAsync(callback) {
  const timeout = Math.random() * 2000 + 500;
  console.warn(timeout);
  setTimeout(callback, timeout);
  return timeout;
}

// 1. vacancies
// 2. send-cv
// 3. interview
// 4. call-mom

function sendRequestToServer(url, params, callback) {
  const response = { status: 0, body: {} }; // 200 & 404

  switch (url) {
    case '/vacancies': {
      imitateAsync(() => {
        response.status = 200;
        response.body.vacancies = [
          { id: 1, title: "Front-end developer $400", skills: ['js', 'html', 'css'] },
          { id: 2, title: "React Developer $500", skills: ['js', 'html', 'css', 'react'] },
          { id: 3, title: "Angular Developer $500", skills: ['js', 'html', 'css', 'angular', 'typescript'] },
        ];

        callback(response);
      });
      break;
    }

    case '/send-cv': {
      imitateAsync(() => {
        response.status = 200;
        response.body.invitedToInterview = params.cv.skills.includes(params.vacancy.skills[3]);
        callback(response);
      });
      break;
    }

    case '/interview': {
      imitateAsync(() => {
        response.status = 200;
        response.body.interviewPassed = params.knowledge.includes('var/let difference');
        callback(response);
      });
      break;
    }

    case '/call-mom': {
      imitateAsync(() => {
        response.status = 200;
        response.body.momsReaction = "Ура! Ты молодец! 😸❤️🤠🤑";
        callback(response);
      });
      break;
    }

    default: {
      imitateAsync(() => {
        response.status = 404;
        response.body.message = "Content not found";
        callback(response);
      });
    }
  }
}
