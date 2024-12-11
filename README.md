![sumr](/public/images/1/2.png)

## Template

```markdown
---
filename: filename.md
tags:
  - sumr
  - notice
category: sumr
created: Mon, 09 Dec 2021 07:19:09 GMT
title: Title
preview: images/1/1.jpg
---
```

The top of the markdown file requires YAML configuration.

- Enter the file name in the `filename` field.
- Add tags to the `tags` field.
- Specify the category in the `category` field.
- The `created` field is optional and will automatically set the current time if omitted.
- Write the title of the post in the `title` field.
- If the `preview` field is not specified, the icon of the corresponding category will be used as a substitute.

## Image

```markdown
<img src="/images/1/1.svg" width="100%" alt="image"/>
![sumr](/images/1/1.svg)
```

Both the `<img>` HTML tag and Markdown image syntax are supported.

## Search

- Click on the tag buttons within a post to search for posts with the same tag.
- Select a category to view posts under that category.
- Use the search bar in the header to search for post titles.
- Sorting results in ascending or descending order is supported for all searches.
