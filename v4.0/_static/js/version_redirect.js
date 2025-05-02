window.addEventListener("DOMContentLoaded", function () {
  versions = document.querySelectorAll(".md-version__item");
  var ABS_BASE_URL = document.baseURI;
  var currentVersion = ABS_BASE_URL.match(/\d+\.\d+\.\d+(\-?rc\d+)?|dev/g)[0];
  var splitUrl = ABS_BASE_URL.split(currentVersion);
  console.log("splitUrl=", splitUrl);
  versions.forEach((version) => {
    var url = version.querySelector(".md-version__item a").getAttribute("href")
    const redirectUrl = splitUrl[0] + currentVersion + "/" + url;
    console.log("redirectUrl=", redirectUrl);
    version.querySelector(".md-version__item").setAttribute("href", redirectUrl);
    console.log("changed item ", version)
  });
});
