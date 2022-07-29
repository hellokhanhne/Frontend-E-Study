export interface FileState {
  error: string;
  fileList: FileList | null;
}

export const handleFileStateError = (
  state: FileState,
  setState: React.Dispatch<React.SetStateAction<FileState>>,
) => {
  if (!state.fileList) {
    setState({ ...state, error: 'Avatar file is required !' });
    return false;
  }
  return true;
};
