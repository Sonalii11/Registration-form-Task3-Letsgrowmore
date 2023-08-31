function getParameterByName(name, url) {
    if (!url) url = window.location.href;
    name = name.replace(/[\[\]]/g, "\\$&");
    const regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
      results = regex.exec(url);
    if (!results) return null;
    if (!results[2]) return "";
    return decodeURIComponent(results[2].replace(/\+/g, " "));
  }

  const formData = {
    "First Name": getParameterByName("FirstName"),
    "Last Name": getParameterByName("LastName"),
    "Email ID": getParameterByName("EmailID"),
    "Mobile Number": getParameterByName("MobileNumber"),
    "Gender": getParameterByName("Gender"),
    "Date of Birth(DOB)": getParameterByName("BirthdayDay") + "-" + getParameterByName("BirthdayMonth") + "-" + getParameterByName("BirthdayYear"),
    "Address": getParameterByName("Address"),
    "City": getParameterByName("City"),
    "Pin Code": getParameterByName("PinCode"),
    "State": getParameterByName("State"),
    "Country": getParameterByName("Country"),
    "Hobbies": getParameterByName("HobbyDrawing") + ", " + getParameterByName("HobbySinging") + ", " + getParameterByName("HobbyDancing") + ", " + getParameterByName("HobbyCooking") + ", " + getParameterByName("HobbyOther") + ": " + getParameterByName("Other_Hobby"),
    "Qualification": getParameterByName("HighSchool") + ", " + getParameterByName("HigherSchool") + ", " + getParameterByName("Graduation") + ", " + getParameterByName("PostGraduation") + ", " + getParameterByName("Phd"),
    "Courses Applied For": getParameterByName("CourseBCA") + ", " + getParameterByName("CourseBCom") + ", " + getParameterByName("CourseBSc") + ", " + getParameterByName("CourseBA") + ", " + getParameterByName("CourseMCA") + ", " + getParameterByName("CourseMCom") + ", " + getParameterByName("CourseMSc") + ", " + getParameterByName("CourseMA"),
    "CGPA": getParameterByName("cgpa")
  };

  const firstNameSpan = document.getElementById("firstName");
  const lastNameSpan = document.getElementById("lastName");
  const emailSpan = document.getElementById("email");
  const mobileNumberSpan = document.getElementById("mobileNumber");
  const genderSpan = document.getElementById("gender");
  const dobSpan = document.getElementById("dob");
  const addressSpan = document.getElementById("address");
  const citySpan = document.getElementById("city");
  const pinCodeSpan = document.getElementById("pinCode");
  const stateSpan = document.getElementById("state");
  const countrySpan = document.getElementById("country");
  const hobbiesSpan = document.getElementById("hobbies");
  const qualificationSpan = document.getElementById("qualification");
  const coursesSpan = document.getElementById("courses");

  const selectedHobbies = [];
  if (getParameterByName("HobbyDrawing")) selectedHobbies.push("Drawing");
  if (getParameterByName("HobbySinging")) selectedHobbies.push("Singing");
  if (getParameterByName("HobbyDancing")) selectedHobbies.push("Dancing");
  if (getParameterByName("HobbyCooking")) selectedHobbies.push("Cooking");
  if (getParameterByName("HobbyOther")) {
    const otherHobby = getParameterByName("Other_Hobby");
    if (otherHobby) selectedHobbies.push("Other: " + otherHobby);
  }

  const selectedQualifications = [];
  if (getParameterByName("HighSchool")) selectedQualifications.push("High School (10th)");
  if (getParameterByName("HigherSchool")) selectedQualifications.push("Higher School (12th)");
  if (getParameterByName("Graduation")) selectedQualifications.push("Graduation (Bachelors)");
  if (getParameterByName("PostGraduation")) selectedQualifications.push("Post Graduation (Masters)");
  if (getParameterByName("Phd")) selectedQualifications.push("Phd");


  const selectedCourses = [];
  if (getParameterByName("CourseBCA")) selectedCourses.push("BCA (Bachelor of Computer Applications)");
  if (getParameterByName("CourseBCom")) selectedCourses.push("B.Com (Bachelor of Commerce)");
  if (getParameterByName("CourseBSc")) selectedCourses.push("B.Sc (Bachelor of Science)");
  if (getParameterByName("CourseBA")) selectedCourses.push("BA (Bachelor of Arts)");
  if (getParameterByName("CourseMCA")) selectedCourses.push("MCA (Master of Computer Applications)");
  if (getParameterByName("CourseMCom")) selectedCourses.push("M.Com (Master of Commerce)");
  if (getParameterByName("CourseMSc")) selectedCourses.push("M.Sc (Master of Science)");
  if (getParameterByName("CourseMA")) selectedCourses.push("MA (Master of Arts)");

  const cgpaSpan = document.getElementById("cgpa");

  firstNameSpan.textContent = formData["First Name"];
  lastNameSpan.textContent = formData["Last Name"];
  emailSpan.textContent = formData["Email ID"];
  mobileNumberSpan.textContent = formData["Mobile Number"];
  genderSpan.textContent = formData["Gender"];
  dobSpan.textContent = formData["Date of Birth(DOB)"];
  addressSpan.textContent = formData["Address"];
  citySpan.textContent = formData["City"];
  pinCodeSpan.textContent = formData["Pin Code"];
  stateSpan.textContent = formData["State"];
  countrySpan.textContent = formData["Country"];
  hobbiesSpan.textContent = selectedHobbies.join(", ");
  qualificationSpan.textContent = selectedQualifications.join(", ");
  coursesSpan.textContent = selectedCourses.join(", ");
  cgpaSpan.textContent = formData["CGPA"];