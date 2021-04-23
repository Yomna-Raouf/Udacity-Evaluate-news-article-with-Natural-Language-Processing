const urlChecker = (submitedUrl) => {

    // Regular Expression to validate url
    let RegEx = /https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,4}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/g;
    const url = submitedUrl;
    
    if (RegEx.test(url)) return true;
    return false;

}

export { urlChecker } 