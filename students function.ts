import students from "./students data.js";

export const getAllStudents = () => {
    return students;
}

export const getOnsiteStudents = () => {
    const result = students.filter((students) => students.isOnsite)
    return result;
}


//export default getOnsiteStudents;   // 1st method

export const getStudents = (rollNo: number) => {
    const foundUser = students.find((students) => students.rollNo === rollNo)
    return foundUser;
}

export const isOnsiteStudents = (rollNo: number) => {  // isOnsite may (is) is liye lagaya k typeScript or javaScript may koi kaam karwana h0 
    const foundUser = students.find((students) => students.rollNo === rollNo && students.isOnsite)  // jo boolean ho true ya false
    
    if(foundUser) {
        return true;
    }

    else{
        return false;
    }
}