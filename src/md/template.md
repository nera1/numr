---
filename: template.md
tags:
  - sumr
  - notice
category: sumr
created: Mon, 09 Dec 2024 07:19:09 GMT
title: 마크다운 템플릿
preview: images/1/1.svg
---

# 포스트 템플릿

## BlockQuote

> 첫번째
>
> > 두번째
> >
> > > 세번째

```markdown
> 첫번째
>
> > 두번째
> >
> > > 세번째
```

## Image

<p style="display:flex;justify-content:center">
  <img src="../images/1/1.svg" width="50%" alt="image"/>
</p>

![pool](../images/1/1.svg)

```Markdown title="Image"
<p style="display:flex;justify-content:center">
  <img src="../images/1/1.svg" width="50%" alt="image"/>
</p>

![pool](../images/1/1.svg)
```

## 코드블럭

````Markdown
---
filename: first.md
tags:
  - sumr
  - notice
category: sumr
title: 제목
preview: images/1/3.svg
created: Mon, 09 Dec 2024 07:19:09 GMT
---

# Template

## Codeblock

```Javascript title="Code"
console.log("Hello");
```

````

```javascript
console.log("Test");
```

<script>window.alert("Hello")</script>

## Table

| 제목     |       내용 |   설명   |
| :------- | ---------: | :------: |
| 왼쪽정렬 | 오른쪽정렬 | 중앙정렬 |
| 왼쪽정렬 | 오른쪽정렬 | 중앙정렬 |
| 왼쪽정렬 | 오른쪽정렬 | 중앙정렬 |

```Markdown title="Table"
|제목|내용|설명|
|:---|---:|:---:|
|왼쪽정렬|오른쪽정렬|중앙정렬|
|왼쪽정렬|오른쪽정렬|중앙정렬|
|왼쪽정렬|오른쪽정렬|중앙정렬|
```

| 제목         |     내용     |            설명 |
| :----------- | :----------: | --------------: |
|              | 중앙에서확장 |                 |
|              |              | 오른쪽에서 확장 |
| 왼쪽에서확장 |              |

```Markdown title="Table"
|제목|내용|설명|
|:---|:---:|---:|
||중앙에서확장||
|||오른쪽에서 확장|
|왼쪽에서확장||
```