---
hide-navigation: true
---

# Frequently Asked Questions

We hope these answers will help you get the most out of the CryoET Data Portal!

:::{admonition} How do I get help with using the Data Portal? <a class="headerlink" href="#get-help" title="Permalink to this question">¶</a>
:class: czi-faq
:name: get-help
:collapsible:

Did you encounter a bug, error, or other issue while using the portal? [Submit an issue on Github](https://github.com/chanzuckerberg/cryoet-data-portal/issues/new?assignees=&labels=bug&projects=&template=bug.md&title=) to let us know!
:::

:::{admonition} How do I submit an issue on Github? <a class="headerlink" href="#submit-issue" title="Permalink to this question">¶</a>
:class: czi-faq
:name: submit-issue
:collapsible:
To submit an issue, you'll need to create a [free Github account](https://github.com/signup?ref_cta=Sign+up&ref_loc=header+logged+out&ref_page=%2F&source=header-home). This allows our team to follow up with you on Github if we have a question about the problem you encountered. Then, [fill out this form](https://github.com/chanzuckerberg/cryoet-data-portal/issues/new?assignees=&labels=bug&projects=&template=bug.md&title=). We suggest you use a descriptive title, paste an error messages using the `<>` icon on the form, and provide as many details as possible about the problem, including what you expected to happen and what type of machine you were using.

For more information about submiting issues on Github, please refer to [Github's documentation](https://docs.github.com/en/issues/tracking-your-work-with-issues/creating-an-issue#creating-an-issue-from-a-repository).
:::

:::{admonition} What are datasets, runs, and annotations in the Data Portal? <a class="headerlink" href="#data-schema" title="Permalink to this question">¶</a>
:class: czi-faq
:name: data-schema
:collapsible:

The CryoET Data Portal uses the following data schema:

1. A dataset is a community contributed set of image files for tilt series, reconstructed tomograms, and if available, cellular and/or subcellular annotation files. Every dataset contains only one sample type prepared and imaged with the same conditions. The dataset title, such as `S. pombe cryo-FIB lamellae acquired with defocus-only`, summarizes these conditions. Samples can be a cell, tissue or organism; intact organelle; in-vitro mixture of macromolecules or their complex; or in-silico synthetic data, where the experimental conditions are kept constant. Downloading a dataset downloads all files, including all available tilt series, tomograms, and annotations.
2. A run is one experiment, or replicate, associated with a dataset, where all runs in a dataset have the same sample and imaging conditions. Every run contains a collection of all tomography data and annotations related to imaging one physical location in a sample, and in many datasets, each run is a different region in the same sample. It typically contains one tilt series and all associated data (e.g. movie frames, tilt series image stack, tomograms, annotations, and metadata), but in some cases, it may be a set of tilt series that form a mosaic. When downloading a run from a Portal page, you may choose to download the tomogram or all available annotations. To download all data associated with a run (i.e. all available movie frames, tilt series image stack, tomograms, annotations, and associated metadata), please refer to the [API download guide](download-api).
3. An annotation is a point or segmentation indicating the location of a macromolecular complex in the tomogram. On the run page, you may choose to download tomograms with their annotations.

You can refer to a graphic of the [data schema here](cryoet_data_portal_docsite_data).
:::

:::{admonition} How do I download data using Amazon Web Services (AWS)? <a class="headerlink" href="#download-aws" title="Permalink to this question">¶</a>
:class: czi-faq
:name: download-aws
:collapsible:
**The Data Portal's S3 bucket is public**, so it can be accessed without creating an account with AWS, simply add `--no-sign-request` in your commands as shown below. Using the instructions below, you can get started downloading data in only a few minutes. For more detailed instructions, please refer to the documentation [here](cryoet_data_portal_docsite_aws).

1. Download the installer: [MacOS Installer Download](https://awscli.amazonaws.com/AWSCLIV2.pkg) / [Windows Installer Download](https://awscli.amazonaws.com/AWSCLIV2.msi)
2. Open the installer and complete installation following the prompts. (No further steps, since sign-in credentials ARE NOT needed to use the tool.)
3. Open terminal (MacOS) or command prompt (Windows).
4. Copy and paste the command from the download prompt for the desired data into terminal / command prompt and hit enter.
5. Alternatively, create a custom command inserting the S3 URL of the data and the desired download destination in the spaces provided.

To download a single file, use `cp`:
```
aws s3 cp --no-sign-request [S3 bucket URL] [Local destination path]
```
To download multiple files, use `sync`
```
aws s3 sync --no-sign-request [S3 bucket URL] [Local destination path]
```

For example, to download a particular JSON file of tomogram metadata into a folder called "Downloads" use:

```
aws s3 cp --no-sign-request s3://cryoet-data-portal-public/10162/ycw2012-03-12-3/Reconstructions/VoxelSpacing15.480/Tomograms/100/tomogram_metadata.json ~/Downloads/
```

In the above example, the download happened very quickly because the file was only about 1 kB in size. However, typical tomograms are multiple GB, so expect downloading to take 30-60 mins for a single tomogram for a given run, but downloading could take as long as days depending on the number and sizes of the files. To speed up download, you can follow [these instructions to optimize download speed](cryoet_data_portal_docsite_aws.md#optimize-download-speed).
:::

:::{admonition} How do I use Neuroglancer to visualize tomograms with their annotations? <a class="headerlink" href="#visualize-neuroglancer" title="Permalink to this question">¶</a>
:class: czi-faq
:name: visualize-neuroglancer
:collapsible:
All tomograms in the Data Portal are viewable in Neuroglancer along with their annotations. You can open a tomogram in Neuroglancer by clicking the blue `View Tomogram` button on any run page in the Portal. This will open an instance of Neuroglancer in a separate tab of your browser with the selected data along with their annotations already loaded. For more information about visualizing data with Neuroglancer, check out our [Quickstart guide](neuroglancer_quickstart) or the [documentation from Connectomics](https://connectomics.readthedocs.io/en/latest/external/neuroglancer.html#basic-usage), the team that develops Neuroglancer.
:::

:::{admonition} Which annotations are displayed with a tomogram in Neuroglancer? <a class="headerlink" href="#default-annotations" title="Permalink to this question">¶</a>
:class: czi-faq
:name: default-annotations
:collapsible:
Tomograms along with all annotations from the Portal come preloaded in Neuroglancer. Some annotations may not be displayed in the canvas by default, but those annotations can be viewed by clicking any layer name with strikethrough text. Check out this [Quickstart guide](neuroglancer_quickstart) for more information on using Neuroglancer.

There is no definitive rule for which annotations are displayed in the Neuroglancer canvas by default. The annotations are manually chosen to display as many annotations as possible without overlap or occlusion. For example, when the cytoplasm is annotated as a whole, it would occlude other annotations included within, such as protein picks. When there is a ground truth and predicted annotation, the ground truth annotation is displayed by default. Authors contributing data can specify the desired default annotations during the submission process.

The CryoET Data Portal napari plugin can be used to visualize tomograms, annotations, and metadata. Refer to [this documentation](https://github.com/chanzuckerberg/napari-cryoet-data-portal#usage) to learn about how to use the plugin and to [this page](cryoet_data_portal_docsite_napari) to learn more about napari and CryoET Data Portal.
:::

:::{admonition} How do I use napari to visualize tomograms with their annotations? <a class="headerlink" href="#visualize-napari" title="Permalink to this question">¶</a>
:class: czi-faq
:name: visualize-napari
:collapsible:
The CryoET Data Portal napari plugin can be used to visualize tomograms, annotations, and metadata. Refer to [this documentation](https://github.com/chanzuckerberg/napari-cryoet-data-portal#usage) to learn about how to use the plugin and to [this page](cryoet_data_portal_docsite_napari) to learn more about napari and CryoET Data Portal.
:::

:::{admonition} How do I download data using the Portal's API? <a class="headerlink" href="#download-api" title="Permalink to this question">¶</a>
:class: czi-faq
:name: download-api
:collapsible:
All classes containing data have methods for downloading all or a subset of their data. Below is a summary table of the classes and their download methods.

| **Class**                                                               | **Download Methods**                                                                     |
| ----------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- |
| {class}`Annotation <cryoet_data_portal.Annotation>`                     | `download`, `download_metadata`                                                          |
| {class}`Dataset <cryoet_data_portal.Dataset>`                           | `download_everything`                                                                    |
| {class}`Run <cryoet_data_portal.Run>`                                   | `download_everything`                                                                    |
| {class}`TiltSeries <cryoet_data_portal.TiltSeries>`                     | `download_alignment_file`, `download_angle_list`, `download_mrcfile`, `download_omezarr` |
| {class}`Tomogram <cryoet_data_portal.Tomogram>`                         | `download_all_annotations`, `download_mrcfile`, `download_omezarr`                       |
| {class}`TomogramVoxelSpacing <cryoet_data_portal.TomogramVoxelSpacing>` | `download_everything`                                                                    |

All of the download methods default to downloading the data to your current working directory, unless a destination path is provided. The general structure of these commands is `object.download_method(OPTIONAL DESTINATION PATH)`. For example, to download the entirety of dataset 10005 into your CWD use:

```
from cryoet_data_portal import Client, Dataset

# Instantiate a client, using the data portal GraphQL API by default
client = Client()

data_10005 = Dataset.get_by_id(client, 10005)
data_10005.download_everything()
```

For more examples of downloading data with the API, check out the [tutorial here](cryoet_data_portal_docsite_quick_start.md#api-methods-overview). The Data Portal API reference can be found [here](python-api).
:::

:::{admonition} How do I use the Portal's API to select data? <a class="headerlink" href="#select-api" title="Permalink to this question">¶</a>
:class: czi-faq
:name: select-api
:collapsible:
Every class in the Data Portal API has a <Function>`find`</Function> method which can be used to select all objects that match criteria provided in a query. The <Function>`find`</Function> method utilizes python comparison operators <Op>`==`</Op>, <Op>`!=`</Op>, <Op>`>`</Op>, <Op>`>=`</Op>, <Op>`<`</Op>, <Op>`<=`</Op>, as well as <Function>`like`</Function>, <Function>`ilike`</Function>, and <Function>`_in`</Function> methods used to search for strings that match a given pattern, to create queries.

- <Function>`like`</Function> is a partial match, with the % character being a wildcard
- <Function>`ilike`</Function> is similar to like but case-insensitive
- <Function>`_in`</Function> accepts a list of values that are acceptable matches.

The general structure of these commands is `class.find(client, query_filters=[LIST QUERIES HERE])`. For example, the script below will print the names of all runs that have "ts" in their name and more than 900 pixels in their "fast" axis. Notice how method operators are used like attributes and python operators are used in expressions.

```python
from cryoet_data_portal import Client, Run

# Instantiate a client, using the data portal GraphQL API by default
client = Client()

# Query the Run class for runs with "TS" (case-insensitive) in their name and x pixels > 900
runs_list = Run.find(client, query_filters=[Run.name.ilike("%TS%"), Run.tomograms.size_x > 900])

for run in runs_list:
  print(run.name)
```

For more examples of using the <Function>`find`</Function> operator, check out the [tutorial here](cryoet_data_portal_docsite_quick_start.md#examples). The Data Portal API reference can be found [here](python-api).
:::

:::{admonition} What is the meaning of the tilt series quality score? <a class="headerlink" href="#tilt-series-quality" title="Permalink to this question">¶</a>
:class: czi-faq
:name: tilt-series-quality
:collapsible:
The tilt series quality score/rating is a relative subjective scale meant for comparing tilt series within a dataset. The contributor of the dataset assigns quality scores to each of the tilt series to communicate their quality estimate to users. Below is an example scale based mainly on alignability and usefulness for the intended analysis.

| Rating | Quality   | Description                                                                                                                                                                          |
| :----: | :-------: | :----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 5      | Excellent | Full Tilt Series/Reconstructions could be used in publication ready figures.                                                                                                         |
| 4      | Good      | Full Tilt Series/Reconstructions are useful for analysis (subtomogram averaging, segmentation).                                                                                      |
| 3      | Medium    | Minor parts of the tilt series (projection images) need to be or have been discarded prior to reconstruction and analysis.                                                           |
| 2      | Marginal  | Major parts of the tilt series (projection images) need to be or have been discarded prior to reconstruction and analysis. Useful for analysis only after heavy manual intervention. |
| 1      | Low       | Not useful for analysis with current tools (not alignable), useful as a test case for problematic data only.                                                                         |
:::

:::{admonition} What is the dataset identifier and Portal ID? <a class="headerlink" href="#dataset-identifier" title="Permalink to this question">¶</a>
:class: czi-faq
:name: dataset-identifier
:collapsible:
The dataset identifier in the API refers to the Portal ID provided in the Portal. This number is assigned by the Data Portal as a unique identifier for a dataset and is used as the directory name in the data filetree. Note that when using the Portal API only the numeric part of the dataset ID should be used.

Descriptions of all terminology and metadata used in the Portal is provided [in the API Reference page](api_reference).
:::

:::{admonition} How do I contribute data to the Portal? <a class="headerlink" href="#contribute-data" title="Permalink to this question">¶</a>
:class: czi-faq
:name: contribute-data
:collapsible:
Thank you for considering submitting data to the Portal!

Contributions can be raw data (tilt series and movie frames) + resulting tomograms, a new tomogram for existing raw data in the Portal generated using a different algorithm, and/or annotations of existing tomograms. We encourage all contributions, including those which may be of lower quality than existing datasets on the Portal, as these datasets are useful for developing better annotation and data processing algorithms.

We will work with you to upload the data to the Portal. Please fill out [this contribution form](https://airtable.com/apppmytRJXoXYTO9w/shr5UxgeQcUTSGyiY?prefill_Event=Contribution+from+portal&hide_Event=true), which is also found through the `Tell Us More` button on the bottom of the Portal homepage. We will then reach out to you to start the process of uploading your data. We have a ~6 month release cycle, so please allow time for the data to become available through the portal.

In the future, we plan to implement a self-upload process so that users can add their data to the Portal on their own.
:::

:::{admonition} How do I cite the CryoET Data Portal and data used in my work? <a class="headerlink" href="#cite-portal" title="Permalink to this question">¶</a>
:class: czi-faq
:name: cite-portal
:collapsible:

Please refer to our citation guidance [found here](citing-the-cryoet-data-portal).
:::
