$("#submit-score").submit(function(event){
    event.preventDefault();

    var unindexed_array = $(this).serializeArray();
    var data = {}
    
    $.map(unindexed_array, function(n, i){
        data[n['name']] = n['value']
    })

    var url_string = window.location.href;
    var url = new URL(url_string);
    var c = document.getElementById("_id").value;
    console.log(c);
    var request = {
        "url" : `http://localhost:3000/api/items/`+c,
        "method" : "PUT",
        "data" : data
    }

    $.ajax(request).done(function(response){
        alert("Data Updated Successfully!");
    })
    window.open("http://localhost:3000/scoreboard","_self")
})

// $("#data").submit((event)=>{
//     var val = document.getElementById("name").value;
//     console.log(val);
//     window.open("http://localhost:3000/scoreboard/val","_self")
// })