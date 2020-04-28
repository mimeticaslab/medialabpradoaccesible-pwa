

  function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]

  function(){ (i[r].q=i[r].q||[]).
  push(arguments)},i[r].l=1*new Date();a=s.createElement(o), m=s.
  getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m) }


  window,document,'script','//www.google-analytics.com/analytics.js','ga';
  ga('create', 'UA-83979019-1','auto'); 
  ga('send', 'pageview');

  function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]
  function(){ (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.
  createElement(o), m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m) }

  window,document,'script','//www.google-analytics.com/analytics.js','ga'
  ga('create', 'UA-83979019-1','auto'); ga('send', 'pageview');



//codigo necesario para la PWA

  if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('./sw.js')
    .then(reg => console.log('Registro de SW exitoso', reg))
    .catch(err => console.warn('Error al tratar de registrar el sw', err))
}