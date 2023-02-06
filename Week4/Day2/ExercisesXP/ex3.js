(function myfunc(children, name, location, job) {
    let sentence=`You will be a ${job} in ${location}, and married to ${name} with ${children} kids.`;
    let output=document.getElementById("output");
    output.innerHTML=sentence;
})(4, "Juan", "Costa Rica", "pilot")
