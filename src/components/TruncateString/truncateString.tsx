interface strProp{
    str: string;
}

export const TruncateString = ({ str } : strProp) => {
  if (str.length > 24) {
    return `${str.slice(0, 24)}...`;
  }
  return str;
};
