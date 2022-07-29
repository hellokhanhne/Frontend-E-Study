export const clearInputFile = (id: string): void => {
  const input = window.document.getElementById(id) as HTMLInputElement;
  input.value = '';
};
