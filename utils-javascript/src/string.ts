export const Greeter = (value: string) => {
  return replaceAll(value, '_', ' ')
    .toLowerCase().split(' ')
    .map((val: string) => val.charAt(0).toUpperCase() + val.slice(1))
    .join(' ');
};

export const replaceAll = (value: string, removeChar: string, substituteChar: string) =>
  value.split(removeChar).join(substituteChar);
