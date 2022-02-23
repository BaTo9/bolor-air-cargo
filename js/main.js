function initmap () {
   const loc = { lat: 35.694326, lng:139.816300};
//    map = new google.maps.Map(document.getElementById("map"), {zoom: 14, center: loc});

   const map = new google.maps.map
   (document.querySelector('.map'),{
       zoom: 14,
       center: loc
   });

   const marker = new google.maps.marker({position: loc, map:map});
     
}

//    35.694326,139.816300