import { Value } from "vfile";

export function restoreImg(input: Value): Value {
  if (typeof input === "string") {
    // 문자열인 경우 변환 수행
    return input.replace(/<p>&#x3C;img(.*?)\/><\/p>/g, (_, attributes) => {
      return `<img${attributes}/>`;
    });
  } else if (input instanceof Uint8Array) {
    // Uint8Array인 경우 변환 수행 후 다시 Uint8Array로 변환
    const stringInput = new TextDecoder().decode(input);
    const transformedString = stringInput.replace(
      /<p>&#x3C;img(.*?)\/><\/p>/g,
      (_, attributes) => `<img${attributes}/>`
    );
    return new TextEncoder().encode(transformedString);
  } else {
    // 다른 타입은 변환하지 않고 그대로 반환
    return input;
  }
}
