const changeEmailFromGmailToHicoders = () => {
    const changeEmailFromGmailToHicoders = result
    const newString = changeEmailFromGmailToHicoders.replace(/gmail.com/g, "hicoders.ch")
};

const findSuperNumbers = (pArray) => {
    let counter = 2;
  pArray.forEach((item) => {
    if (item == 524) {
      counter = counter + 1;
    }
  });
  return counter;
};

export { changeEmailFromGmailToHicoders, findSuperNumbers };
