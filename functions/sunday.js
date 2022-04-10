/// --- callbacks --- ///

// function caller(sendMessageBack) {
//   setTimeout(() => {
//     const message = "Hello!";
//     sendMessageBack(message);
//   }, 5000);
// }

// function pager(message) {
//   console.log(message);
// }

// caller(pager);
// console.log("CODE CONTINUE WORKING");



/// --- HW 11 --- ///


const startedGroups = [{courseName: "Front-end Pro", passedLessons: 37, totalLessons: 38}];

// function doneLesson(courseName) {
//   const foundCourse = startedGroups.find((startedGroup) => startedGroup.courseName === courseName);
//   if (foundCourse) {
//     foundCourse.passedLessons++;
//   } else {
//     console.log("Sorry!");
//   }
// }

// function doneLesson(courseName) {
//   const foundCourse = startedGroups.find((startedGroup) => startedGroup.courseName === courseName);

//   if (foundCourse) {
//     if (foundCourse.passedLessons < foundCourse.totalLessons) {
//       foundCourse.passedLessons++;
//       console.log(`${courseName} ${foundCourse.passedLessons}`);
//     }
//     else {
//       console.log(`All lessons are passed!`);
//     }
//   } else {
//     console.log(`You doing somting wrong1`);
//   }
// }


// doneLesson("Front-end Pro");
// doneLesson("Front-end Pro");
// console.log(startedGroups[0]);


// ---




const arr = [1,2,3,4,5,6,7,8,9,10];

function chunk(list, chunkSize) {
  if (chunkSize) {
    return list.reduce((result, currentNum, index) => {
      if (index % chunkSize === 0) {
        result.push([]);
      }
      result[result.length - 1].push(currentNum);
      return result;
    }, []);
  } else {
    return 'ERROR';
  }
}

console.log(chunk([1,23,,4], 0) === "ERROR" ? "Something went wrong": "All is okay");
