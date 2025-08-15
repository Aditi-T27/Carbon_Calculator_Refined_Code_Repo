

// b_info_btn.addEventListener("click", () => {

//     const Bname = document.getElementById('b_name').value;
//     const size = document.getElementById('size_sqft').value;
//     const location = document.getElementById('location').value;
   
 
//     //fetch API
//     const myHeaders = new Headers();
// myHeaders.append("Content-Type", "application/json");

// const raw = JSON.stringify({
//   "building_name":Bname,
//   "size_sqft": size,
//   "location": location,
//   "user": name
// });

// const requestOptions = {
//   method: "POST",
//   headers: myHeaders,
//   body: raw,
//   redirect: "follow"
// };

// fetch("http://localhost:3000/createrow", requestOptions)
//   .then((response) => response.text())
//   .then((result) => 
//    console.log(result)
// )
//   .catch((error) => console.error(error));

//   window.location.href = `db_buildingfeatures.html?Bname=${encodeURIComponent(Bname)}`
// });


const b_info_btn = document.getElementById('b_info');

    const params = new URLSearchParams(window.location.search);
     const name = params.get('name'); // Match the parameter key
b_info_btn.addEventListener("click", async () => {
  const Bname = document.getElementById('b_name').value;
  const size = document.getElementById('size_sqft').value;
  const location = document.getElementById('location').value;

  const myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");

  const raw = JSON.stringify({
    "building_name": Bname,
    "size_sqft": size,
    "location": location,
    "user": name
  });

  const requestOptions = {
    method: "POST",
    headers: myHeaders,
    body: raw,
    redirect: "follow"
  };

  try {
    const response = await fetch("http://localhost:3000/createrow", requestOptions);
    const result = await response.text();
    console.log(result);

    // Redirect only after fetch completes
    window.location.href = `db_buildingfeatures.html?Bname=${encodeURIComponent(Bname)}`;
  } catch (error) {
    console.error("Error occurred during fetch:", error);
  }
});

