export const isEmpty = (stringArrayOrObject) => {
  const type = typeof stringArrayOrObject;

  if (type === "string") {
    return stringArrayOrObject === "" || false;
  } else {
    return (
      stringArrayOrObject === [] ||
      Object.keys(stringArrayOrObject).length === 0 ||
      false
    );
  }
};

//object
const Person = { name: "code coach", surname: "whatever" };
console.log(Object.entries(Person));
