export const  timeConverter = itemDate => {
    const dateTime = new Date(itemDate);
    const dateOnly = dateTime.toUTCString();
  return dateOnly;
  };
