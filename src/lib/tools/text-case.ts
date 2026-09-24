export function toTitleCase(value: string): string {
  return value
    .toLocaleLowerCase()
    .replace(
      /(^|[\s\-_/]+)(\p{L})/gu,
      (_, separator: string, letter: string) => `${separator}${letter.toLocaleUpperCase()}`
    );
}

export function toSentenceCase(value: string): string {
  const text = value.toLocaleLowerCase().replace(/\s+/g, ' ').trim();
  return text ? text.charAt(0).toLocaleUpperCase() + text.slice(1) : '';
}

function words(value: string): string[] {
  return value
    .normalize('NFKC')
    .trim()
    .split(/[\s\-_/]+/)
    .filter(Boolean);
}

export function toCamelCase(value: string): string {
  return words(value)
    .map((word, index) =>
      index === 0
        ? word.toLocaleLowerCase()
        : word.charAt(0).toLocaleUpperCase() + word.slice(1).toLocaleLowerCase()
    )
    .join('');
}

export function toPascalCase(value: string): string {
  return words(value)
    .map((word) => word.charAt(0).toLocaleUpperCase() + word.slice(1).toLocaleLowerCase())
    .join('');
}

export function toKebabCase(value: string): string {
  return words(value)
    .map((word) => word.toLocaleLowerCase())
    .join('-');
}

export function toSnakeCase(value: string): string {
  return words(value)
    .map((word) => word.toLocaleLowerCase())
    .join('_');
}

export function toConstantCase(value: string): string {
  return toSnakeCase(value).toLocaleUpperCase();
}

export function toInverseCase(value: string): string {
  return [...value]
    .map((char) =>
      char === char.toLocaleUpperCase() ? char.toLocaleLowerCase() : char.toLocaleUpperCase()
    )
    .join('');
}
