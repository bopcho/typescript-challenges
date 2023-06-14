// Taken from mission Acceptable Password I
import assert from "assert";
function isAcceptablePassword(password: string): boolean {
   {
    return password.length > 6 && /\d/.test(password);
}


    return password.length > 6;
}
