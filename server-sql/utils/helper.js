export const validateFields = (param, needParam) => {
  return needParam.map(item => {
    if ((param[item] !== null) && (param[item] !== undefined)) {
      return item;
    }
  });
}