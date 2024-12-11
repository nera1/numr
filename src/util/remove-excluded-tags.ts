const excludedTags = [
  "script",
  "iframe",
  "object",
  "embed",
  "applet",
  "link",
  "style",
  "base",
  "meta",
];

function removeExcludedTags(
  htmlValue: string | Uint8Array
): string | Uint8Array {
  if (typeof htmlValue === "string") {
    return htmlValue.replace(
      new RegExp(
        `<(${excludedTags.join("|")})[^>]*>(.*?)</\\1>|<(${excludedTags.join(
          "|"
        )})[^>]*\\/?>`,
        "gi"
      ),
      ""
    );
  }

  // Uint8Array인 경우 처리
  const decoder = new TextDecoder("utf-8");
  const encoded = new TextEncoder();
  const htmlString = decoder.decode(htmlValue);
  const filteredString = htmlString.replace(
    new RegExp(
      `<(${excludedTags.join("|")})[^>]*>(.*?)</\\1>|<(${excludedTags.join(
        "|"
      )})[^>]*\\/?>`,
      "gi"
    ),
    ""
  );

  return encoded.encode(filteredString);
}

export default removeExcludedTags;
