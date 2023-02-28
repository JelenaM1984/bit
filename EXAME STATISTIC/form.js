function validate(program, name, grade) {
    if (program == "Choose...") {
        return "Please select a valid subject";
    } else if (!name || !name.includes(" ")) {
        return "Please enter a valid student name, include one space between first and last name";
    } else if (!grade) {
        return "Please select a valid grade between 1 and 10";
    }

    return null;
}

export {validate};