ScrollReveal({
  reset: true,
  distance: '60px',
  duration: 2500,
  delay: 400,
})

ScrollReveal().reveal('.main-title, .section-title', {
  delay: 500,
  origin: 'left',
})
ScrollReveal().reveal('.sec-01 .image', { delay: 600, origin: 'bottom' })

const smallDevice = window.matchMedia('(min-width: 361px)')

function handleDeviceChange(e) {
  if (e.matches) {
    ScrollReveal().reveal('.text-box', { delay: 700, origin: 'right' })
    ScrollReveal().reveal(' .info', { delay: 600, origin: 'bottom' })
  }
}

handleDeviceChange(smallDevice)

const titleChange = window.matchMedia('(max-width: 360px)')
function titleChangFun(e) {
  if (e.matches) {
    let title2 = document.querySelector('.main-title')
    title2.innerHTML = 'Modern Art <br> Photography'
  }
}

titleChangFun(titleChange)

ScrollReveal().reveal('.media-icons i', {
  delay: 500,
  origin: 'bottom',
  interval: 200,
})
ScrollReveal().reveal('.sec-02 .image, .sec-03 .image', {
  delay: 500,
  origin: 'top',
})
ScrollReveal().reveal('.media-info li', {
  delay: 500,
  origin: 'left',
  interval: 200,
})
