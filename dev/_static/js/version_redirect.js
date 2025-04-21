window.addEventListener("DOMContentLoaded", function () {
  versions = document.querySelectorAll(".md-version__list");
  // Change every item in the list to point to the current page's url with the proper version
  versions.forEach((version) => {
    const currentVersion = window.location.href.split("/").slice(-2, -1)[0];
    console.log("Current version=", currentVersion);
    const selectedVersion = version.querySelector(".md-version__item").value;
    console.log("Selected version=", selectedVersion);
    const redirectUrl = window.location.href.replace(
      `/${currentVersion}/`,
      `/${selectedVersion}/`
    );
    version.querySelector(".md-version__item").setAttribute("href", redirectUrl);
    // version.querySelector(".md-version__item").addEventListener("click", function () {
    //   console.log("Redirecting to=", redirectUrl);
    //   window.location.href = redirectUrl;
    // });
  });
  //document.querySelector(".md-version__item") = function () {
  //const selectedVersion = this.value;
  //console.log("Selected version=", selectedVersion);
  // const currentVersion = window.location.href.split("/").slice(-2, -1)[0];
  // console.log(currentVersion);
  // console.log("Current URL=", window.location.href);
  // const redirectUrl = window.location.href.replace(
  //   `/${currentVersion}/`,
  //   `/${selectedVersion}/`
  // );
  // console.log("Redirecting to=", redirectUrl)
  //window.location.href = redirectUrl;
});
