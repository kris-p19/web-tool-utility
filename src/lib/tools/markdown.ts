function escapeHtml(value: string): string {
  return value
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
}

function safeUrl(value: string): string | null {
  const url = value.trim();
  if (/^(https?:|mailto:)/i.test(url)) return url;
  return null;
}

function inlineMarkdown(value: string): string {
  let output = escapeHtml(value);
  output = output.replace(/`([^`]+)`/g, '<code>$1</code>');
  output = output.replace(/\*\*([^*]+)\*\*/g, '<strong>$1</strong>');
  output = output.replace(/__([^_]+)__/g, '<strong>$1</strong>');
  output = output.replace(/\*([^*]+)\*/g, '<em>$1</em>');
  output = output.replace(/_([^_]+)_/g, '<em>$1</em>');
  output = output.replace(/\[([^\]]+)\]\(([^)]+)\)/g, (_, label: string, href: string) => {
    const decoded = href.replace(/&amp;/g, '&').replace(/&quot;/g, '"');
    const safe = safeUrl(decoded);
    return safe ? `<a href="${escapeHtml(safe)}" rel="noopener noreferrer">${label}</a>` : label;
  });
  return output;
}

export function markdownToHtml(markdown: string): string {
  const lines = markdown.replace(/\\r\\n|\\n/g, '\n').replace(/\r\n/g, '\n').split('\n');
  const output: string[] = [];
  let listType: 'ul' | 'ol' | null = null;
  let codeLines: string[] | null = null;
  let paragraph: string[] = [];
  const closeList = () => {
    if (listType) output.push(`</${listType}>`);
    listType = null;
  };
  const closeParagraph = () => {
    if (paragraph.length) output.push(`<p>${paragraph.map(inlineMarkdown).join('<br>')}</p>`);
    paragraph = [];
  };
  for (const line of lines) {
    if (/^\s*```/.test(line)) {
      if (codeLines) {
        output.push(`<pre><code>${escapeHtml(codeLines.join('\n'))}</code></pre>`);
        codeLines = null;
      } else {
        closeParagraph();
        closeList();
        codeLines = [];
      }
      continue;
    }
    if (codeLines) {
      codeLines.push(line);
      continue;
    }
    const heading = line.match(/^(#{1,6})\s+(.+)$/);
    const unordered = line.match(/^\s*[-*+]\s+(.+)$/);
    const ordered = line.match(/^\s*\d+[.)]\s+(.+)$/);
    if (heading) {
      closeParagraph();
      closeList();
      const level = heading[1]?.length ?? 1;
      output.push(`<h${level}>${inlineMarkdown(heading[2] ?? '')}</h${level}>`);
    } else if (unordered || ordered) {
      closeParagraph();
      const type = unordered ? 'ul' : 'ol';
      if (listType !== type) {
        closeList();
        output.push(`<${type}>`);
        listType = type;
      }
      output.push(`<li>${inlineMarkdown((unordered ?? ordered)?.[1] ?? '')}</li>`);
    } else if (/^\s*---+\s*$/.test(line)) {
      closeParagraph();
      closeList();
      output.push('<hr>');
    } else if (!line.trim()) {
      closeParagraph();
      closeList();
    } else {
      closeList();
      paragraph.push(line);
    }
  }
  if (codeLines) output.push(`<pre><code>${escapeHtml(codeLines.join('\n'))}</code></pre>`);
  closeParagraph();
  closeList();
  return output.join('');
}
