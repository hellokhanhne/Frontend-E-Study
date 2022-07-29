const objectToFormdata = (objects: any): FormData => {
  const formdata = new FormData();
  for (let key in objects) {
    formdata.append(key, objects[key]);
  }

  return formdata;
};

export { objectToFormdata };
