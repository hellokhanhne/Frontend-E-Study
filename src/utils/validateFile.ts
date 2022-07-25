export const validateImage = (file: any) => {
  let err = null;
  if (!file) err = 'Not found file to upload !';
  if (file[0].size > 1020 * 1024) err = 'File must be smaller than 1mb !';
  if (!['image/png', 'image/jpeg', 'image/jpg'].includes(file[0].type))
    err = 'Image format is incorrect !';
  return err;
};
