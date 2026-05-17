const base = import.meta.env.BASE_URL.replace(/\/$/, '')

export function assetUrl(path) {
  return `${base}${path}`
}
