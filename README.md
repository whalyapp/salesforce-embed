# salesforce-embed
This repository help you understand how to embed Whaly reports in a salesforce lightning component that can be exposed on any objects.

## Step 1
Go to the developer console and create a new apex controller and name it `WhalyEmbed`.
Copy and paste the code from `./src/whalyEmbed.apxc` in it.

# Step 2
Go to the developer console and create a new lightning component, name it `WhalyEmbed`
Copy and paste the content of `./src/whalyEmbed.cmp` in it.
Create a new controller from your component and copy and paste the content from `./src/whalyEmbedController.js`
Create a new design file and copy and paste the code from `./src/whalyEmbed.design`

# Step 3
Change the key in `whalyEmbed.apxc` by your client secret. You can find your secret by following [this guide](https://docs.whaly.io/data-management/reports/embed-a-report#setting-up-your-report-for-embedding).

# Step 4
Go to your home page and customize it to include the newly created content. You can find your credentials following [this guide](https://docs.whaly.io/data-management/reports/embed-a-report).