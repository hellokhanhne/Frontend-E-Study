const objectToFormdata = (objects: any): FormData => {
  const formdata = new FormData();
  for (let key in objects) {
    formdata.append(key, objects[key]);
  }

  return formdata;
};

const formatVideoTime = (seconds: number) => {
  try {
    const date = new Date(0);
    date.setSeconds(seconds);
    const time = date.toISOString().slice(11, 19);
    const result = time.startsWith('00:0')
      ? time.slice(4)
      : time.startsWith('00')
      ? time.slice(3)
      : time.length === 8 && time.startsWith('0')
      ? time.slice(1)
      : time;
    return result;
  } catch (error) {
    return '0:00';
  }
};

export { objectToFormdata, formatVideoTime };
