// filepath: /Users/mwebermendonca/projects/cryoet-data-portal/docs/_static/js/version-redirect.js
document.addEventListener("DOMContentLoaded", function () {
  const versionDropdown = document.querySelector(".md-version__list");
  if (versionDropdown) {
    versionDropdown.addEventListener("change", function (event) {
      const selectedVersion = event.target.value;
      const currentPage = window.location.pathname.replace(/^\//, "");
      const redirectUrl = selectedVersion.replace("{page}", currentPage);
      window.location.href = redirectUrl;
    });
  }
});
