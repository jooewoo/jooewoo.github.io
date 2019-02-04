'use strict'

$(() => {
  $('.navbar').hide()
  // console.log('hello gaby')
  $(() => {
    $(window).scroll(() => {
      if ($(this).scrollTop() > 100) {
        $('.navbar').fadeIn()
      } else {
        $('.navbar').fadeOut()
      }
    })
  })

  $(() => {
    $('navbar-nav li a').click(() => {
      $('#nav li').removeClass()
      $($(this).attr('href')).addClass('active')
    })
  })
})
