const TIME_IN_DAYS = (1000 * 3600 * 24);

const dateDifference = (prevDate) => {
    const dateOne = new Date(prevDate);
    const dateTwo = new Date();

    const differenceInTime = dateTwo.getTime() - dateOne.getTime(); 
  
    return differenceInTime / TIME_IN_DAYS; 
};

export default dateDifference;