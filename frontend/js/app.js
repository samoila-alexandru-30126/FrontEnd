



var infoArray;
var info={

  "id": 0,
  "Title": "",
  "Description": "",
  "Created_at": "",
  "Modified_at": ""

}

function deletebyId()
{
  var serverPath="http://localhost:8080/categories";
  var Id1="";
  Id1=document.getElementById("Id1").value;
  serverPath=serverPath.concat("/",Id1);
  
  axios.delete(serverPath).then(
    console.log("Ser")
    // Observe the data keyword this time. Very important
    // payload is the request body
    // Do something;
  );
}
  function AddCategory()
  {
    var TitleAdd="",DescriptionAdd="";
    TitleAdd=document.getElementById("TitleAdd").value;
    DescriptionAdd=document.getElementById("DescriptionAdd").value;

    var category={
      Title: TitleAdd,
      Description:DescriptionAdd
    }

    axios.post("http://localhost:8080/categories", {
    Title: "TitleAdd",
      Description: "DescriptionAdd"
    })
    .then((response) => {
      console.log(response);
    }, (error) => {
      console.log(error);
    });

  }




function ShowCategories()
{
  axios.get("http://localhost:8080/categories").then((response) => {infoArray=response.data
})



.catch(err =>{
  console.error(err);
}

  
  )
  console.log(infoArray);
  
  var h = document.getElementById("Show_Category");
  document.getElementById("Show_Category").innerHTML = "";
  var i=0;
  for(i=0;i<infoArray.length;i++)
  {
    info=infoArray[i];
  h.insertAdjacentHTML('afterbegin', "<div class='card'> <div class='container'> <h4>Title: <b id='Title'></h4> Description: <p id='Description'> </div> </div> ");    
  document.getElementById("Title").innerHTML=info.Title;
  document.getElementById("Description").innerHTML=info.Description;

  }
  h.insertAdjacentHTML('beforeend',"<button class='Button_Show' onclick='ShowCategories()'>Show</button>");

  
  // <script >
  //   <h3>Afisare</h3>
  // </script>


}
function openPage(pageName, elmnt, color) {
  // Hide all elements with class="tabcontent" by default */
  var i, tabcontent, tablinks;
  tabcontent = document.getElementsByClassName("tabcontent1");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }

  // Remove the background color of all tablinks/buttons
  tablinks = document.getElementsByClassName("tablink");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].style.backgroundColor = "";
  }

  // Show the specific tab content
  document.getElementById(pageName).style.display = "block";

  // Add the specific color to the button used to open the tab content
  elmnt.style.backgroundColor = color;
}

// Get the element with id="defaultOpen" and click on it
document.getElementById("defaultOpen").click();
function openCity(evt, cityName) {
  // Declare all variables
  var i, tabcontent, tablinks;

  // Get all elements with class="tabcontent" and hide them
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }

  // Get all elements with class="tablinks" and remove the class "active"
  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }

  // Show the current tab, and add an "active" class to the link that opened the tab
  document.getElementById(cityName).style.display = "block";
  evt.currentTarget.className += " active";
}