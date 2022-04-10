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
    return 'Пользователь, ты не прав!';
  }
}
