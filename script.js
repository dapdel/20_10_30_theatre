import './style.scss';
import $ from 'jquery';
// import axios from 'axios';
$('button').on('click', function () {
  $('#music')[0].play();
  $('h1, button, .annonce').fadeOut(2000);
  setTimeout(function () {
    $('.scene_fermee').css('background-color', 'transparent');
    $('.rideau').css('display', 'block');

    $('.rideau').animate(
      { width: '0%' },
      5000,
    );
    $('.scene').animate(
      { width: '100%' },
      5000,
    );
  }, 2000);

  setTimeout(function () {
    $('.dragon').animate(
      { right: '0px' },
      5000,
    );
    $('.personnage').animate(
      { left: '0px' },
      5000,
    );
  }, 8000);

  setTimeout(function () {
    $('.texte1').css('display', 'block');
  }, 13000);

  setTimeout(function () {
    $('.texte1').css('display', 'none');
    $('.texte2').css('display', 'block');
  }, 16000);

  setTimeout(function () {
    $('.texte2').css('display', 'none');
    $('.texte3').css('display', 'block');
  }, 20000);

  setTimeout(function () {
    $('.flamme').fadeIn();
    $('.texte3').css('display', 'none');
    $('.texte4').css('display', 'block');
  }, 23000);

  setTimeout(function () {
    $('.texte4').css('display', 'none');
    $('.flamme').fadeOut();
    $('.cendres').fadeIn();
    $('.personnage').css('display', 'none');
  }, 26000);
  setTimeout(function () {
    $('.texte5').css('display', 'block');
  }, 27000);
  setTimeout(function () {
    $('.texte5').css('display', 'none');
    $('.texte6').css('display', 'block');
  }, 30000);
});
