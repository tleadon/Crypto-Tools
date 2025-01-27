---
layout: page
title: KolScan Scanner
permalink: /KolScanScanner/
---
<head>
    <link rel="stylesheet" href="{{ '/assets/css/styles.css' | relative_url }}">
</head>

# JSON Data
This is the results of the kolscan scanner:

<button id="copyButton">Copy Text</button>
<pre id ="textToCopy">

{% include results/names_and_addresses.json %}
</pre>

<script src="{{ '/assets/js/updateInclude.js' | relative_url }}"></script>
<script src="{{ '/assets/js/scripts.js' | relative_url }}"></script>