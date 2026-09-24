export function isHeicFile(file: File): boolean {
  return (
    file.type === 'image/heic' || file.type === 'image/heif' || /\.(heic|heif)$/i.test(file.name)
  );
}

export function isBrowserDecodableImage(file: File): boolean {
  return file.type.startsWith('image/') && !isHeicFile(file);
}
