export function validateField(fieldType: string, fieldValue: string) {
    // if (fieldType === 'password' && fieldValue !== 'a24627DD4') {
    //     return {
    //         valid: false,
    //         errMsg: 'The password is wrong'
    //     };
    // }

    // if (fieldType === 'username' && fieldValue !== 'bobby') {
    //     return {
    //         valid: false,
    //         errMsg: "The username must be 'bobby'"
    //     };
    // }

    return {
        valid: true,
        errMsg: null
    };
}