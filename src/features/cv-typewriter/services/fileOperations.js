export function downloadJson(jsonText, fileName = 'CV') {
  const blob = new Blob([jsonText], { type: 'application/json;charset=utf-8' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = `${fileName || 'CV'}.json`;

  document.body.appendChild(a);
  a.click();
  a.remove();
  URL.revokeObjectURL(url);
}

export function getSampleJson(sample) {
  return JSON.stringify(sample, null, 2);
}
