interface strProp{
    str: string;
    num: number;
}

export const TruncateString = ({ str,num } : strProp) => {
  if (str.length > num) {
    return `${str.slice(0, 20)}...`;
  }
  return str;
};
