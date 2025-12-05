export default defineNuxtPlugin(() => {
  const script = document.createElement('script')
  script.src = 'https://use.typekit.net/xxv3ubw.js'
  script.async = true
  script.onload = () => {
    try {
      // @ts-ignore
      Typekit.load()
    } catch (e) {
      console.error('Typekit load failed', e)
    }
  }
  document.head.appendChild(script)
})