import students from "./students data.js";
export const getAllStudents = () => {
    return students;
};
export const getOnsiteStudents = () => {
    const result = students.filter((students) => students.isOnsite);
    return result;
};
//export default getOnsiteStudents;   // 1st method
export const getStudents = (rollNo) => {
    const foundUser = students.find((students) => students.rollNo === rollNo);
    return foundUser;
};
export const isOnsiteStudents = (rollNo) => {
    const foundUser = students.find((students) => students.rollNo === rollNo && students.isOnsite); // jo boolean ho true ya false
    if (foundUser) {
        return true;
    }
    else {
        return false;
    }
};
