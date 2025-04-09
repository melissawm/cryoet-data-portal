document.addEventListener("DOMContentLoaded", function () {
  const versionDropdown = document.querySelector(".md-version__list");
  if (versionDropdown) {
    versionDropdown.addEventListener("change", function (event) {
      const selectedVersion = event.target.value;
      const currentPage = window.location.pathname.replace(/^\//, "");
      console.log("currentpage: ", currentPage)
      console.log("selectedVersion: ", selectedVersion)
      const redirectUrl = selectedVersion.replace("{page}", currentPage);
      window.location.href = redirectUrl;
    });
  }
});
