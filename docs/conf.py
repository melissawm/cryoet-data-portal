# Configuration file for the Sphinx documentation builder.
#
# For the full list of built-in configuration values, see the documentation:
# https://www.sphinx-doc.org/en/master/usage/configuration.html

# -- Project information -----------------------------------------------------
# https://www.sphinx-doc.org/en/master/usage/configuration.html#project-information

project = "cryoet-data-portal"
copyright = "2022-2023 Chan Zuckerberg Initiative"
author = "Chan Zuckerberg Initiative"

import cryoet_data_portal

version = cryoet_data_portal.__version__

# -- General configuration ---------------------------------------------------
# https://www.sphinx-doc.org/en/master/usage/configuration.html#general-configuration

extensions = [
    "sphinx.ext.autodoc",
    "sphinx.ext.intersphinx",
    "sphinx.ext.napoleon",
    "myst_nb",
    "sphinx_immaterial",
]

napoleon_custom_sections = ["Lifecycle"]

tiledb_version = "latest"

intersphinx_mapping = {
    "python": ("https://docs.python.org/3", None),
    "numpy": ("https://numpy.org/doc/stable", None),
    "scipy": ("https://docs.scipy.org/doc/scipy", None),
}

templates_path = ["_templates"]
exclude_patterns = ["_build", "Thumbs.db", ".DS_Store", "README.md"]

source_suffix = [".rst", ".md"]


# -- Options for HTML output -------------------------------------------------
# https://www.sphinx-doc.org/en/master/usage/configuration.html#options-for-html-output

# Inject custom css files in `/_static/css/*`
#html_static_path = ["_static"]

html_theme = "sphinx_immaterial"
object_description_options = [
    ("py:.*", dict(include_fields_in_toc=False)),
]
html_theme_options = {
    "globaltoc_collapse": False,
    "features": [
        "navigation.expand",
        "toc.follow",
        "toc.sticky",
    ],
    "palette": [
        {
            "media": "(prefers-color-scheme: light)",
            "scheme": "default",
            "primary": "light-green",
            "accent": "light-blue",
            "toggle": {
                "icon": "material/lightbulb-outline",
                "name": "Switch to dark mode",
            },
        },
        {
            "media": "(prefers-color-scheme: dark)",
            "scheme": "slate",
            "primary": "deep-orange",
            "accent": "lime",
            "toggle": {
                "icon": "material/lightbulb",
                "name": "Switch to light mode",
            },
        },
    ],
    # "analytics": {"provider": "google", "property": "G-XXXXXXXXXX"},
}


# html_js_files = [
#     (
#         "https://plausible.io/js/script.js",
#         {"data-domain": "chanzuckerberg.github.io/cryoet-data-portal", "defer": "defer"},
#     ),
# ]

# -- Options for myst -------------------------------------------------
myst_enable_extensions = ['colon_fence']
myst_heading_anchors = 4
