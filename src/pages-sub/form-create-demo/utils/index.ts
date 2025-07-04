/**
 * 格式化JSON显示
 */
export function formatJson(obj: unknown): string {
  return JSON.stringify(obj, null, 2)
}
