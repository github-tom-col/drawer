(function drawer(drawerId) {
  const drawer = document.getElementById(drawerId);

  function toggleOpen(buttonId) {
    const toggleButton = document.getElementById(buttonId);

    toggleButton.addEventListener('click', function() {
      if(drawer.classList.contains('open')){
        drawer.classList.remove('open')
      } else {
        drawer.classList.add('open')
        // setTimeout(() => {
        //   document.body.addEventListener('click', onOutside)
        // },1)
      }
    });
  }

  function closeDrawer(buttonId, overlayId){
    const closeButton = document.getElementById(buttonId);
    const overlay = document.getElementById(overlayId);

    closeButton.addEventListener('click', function() {
      drawer.classList.toggle('open');
      overlay.classList.toggle('open');
    });
  }

  function toggleChangeSide(buttonId, overlayId){
    const toggleButton = document.getElementById(buttonId);
    const overlay = document.getElementById(overlayId);
    
    drawer.classList.add('ltr');

    toggleButton.addEventListener('click', function(e) {
      if (drawer.classList.contains('ltr')) {
        drawer.classList.remove('ltr');
        drawer.classList.add('rtl');
      } else  {
        drawer.classList.remove('rtl');
        drawer.classList.add('ltr');
      }
    });

    overlay.classList.add('ltr');

    toggleButton.addEventListener('click', function(e) {
      if (overlay.classList.contains('ltr')) {
        overlay.classList.remove('ltr');
        overlay.classList.add('rtl');
      } else  {
        overlay.classList.remove('rtl');
        overlay.classList.add('ltr');
      }
    });
  }

  // function onOutside (e) {
  //   if(e.target.id != drawerId){
  //     drawer.classList.remove('open')
  //     document.body.removeEventListener('click', onOutside)
  //   }
  // }

  function addOverlay(buttonId, overlayId) {
    const overlay = document.getElementById(overlayId);
    const toggleButton = document.getElementById(buttonId);

    toggleButton.addEventListener('click', function(e) {
      if(overlay.classList.contains('open')){
        overlay.classList.remove('open')
      } else {
        overlay.classList.add('open')
    }
  })
}

  toggleOpen('toggleOpen');
  closeDrawer('closeDrawer', 'overlay');
  toggleChangeSide('toggleSide', 'overlay');
  addOverlay('toggleOpen', 'overlay');
})('drawer');