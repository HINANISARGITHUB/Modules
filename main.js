/*import getOnsiteStudents, { getAllStudents as wholeClass} from "./students function.js";     // method 1
     //  default export           export
                            // hum name bhi change kar saktay h (as) kar k is ko hum alias bhi kahtay h.
// 1 hi line may hum (export default) or (export) dono  kar sakhtay h

const result = wholeClass();
// console.log("result: ", result);   // is say saray students k naam or id aye gy.

const onsiteStudents = getOnsiteStudents();
console.log('onsitestudents: ', onsiteStudents);   // is say sirf onsite walo k id aye gy.*/
///////////////////////////////////////////////////////////////////////////////////////
/*import * as students from "./students function.js";  // method 2 with *

const result = students.getAllStudents();
console.log("result: ", result);

const onsiteStudents = students.getOnsiteStudents();
console.log("onsiteStudents: ", onsiteStudents);

* ka matlab everythings yani dono function 1 saath import karna.getAllStudents, or getOnsiteStudents dono 1 saath.
ya bhi hamaray pass alias h. */
import { getAllStudents, getOnsiteStudents, getStudents, isOnsiteStudents } from "./students function.js";
const result = getAllStudents();
// console.log('result: ' , result);
const onsitestudents = getOnsiteStudents();
// console.log("isOnsiteStudents: ", onsitestudents);
const result1 = getStudents(2005);
// console.log('result1: ' , result1);  // yaha sirf just 2005 id walay student ka result aye ga.
const result2 = isOnsiteStudents(2008);
console.log('result2: ', result2);
const result3 = isOnsiteStudents(2003);
console.log('result2: ', result3);
