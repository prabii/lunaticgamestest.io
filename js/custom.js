var x = document.getElementById("myAudio");
var pic2 = document.getElementsByClassName("icons");
var v = 0;

function playAudio() {
  if (v == 0) {
    x.play();
    $(".icons").show();
    $(".iconss").hide();
    v = 1;
  }else{
    x.pause();
    $(".icons").hide();
    $(".iconss").show();
    v = 0;
  }
}

function productModal (img,title,desc) {
            var a = $(".neoh_fn_modal.product_modal");
            var b = $(this).closest(".item"),
                        e = b.data("modal-image"),
                        f = b.data("modal-title"),
                        g = b.data("modal-description"),
                        c = b.data("modal-opensea-url"),
                        d = b.data("modal-discord-url"),
                        h = b.data("included");
                    return (
                        "on" === h
                            ? a.find(".neoh_fn_product_modal").html(b.find(".hidden_info").html())
                            : (c || (c = ""),
                              d || (d = ""),
                              a.find(".buttons a").removeClass("disable"),
                              "" === c ? a.find(".opensea").addClass("disable") : a.find(".opensea").attr("href", c),
                              "" === d ? a.find(".discord").addClass("disable") : a.find(".discord").attr("href", d),
                              a.find(".img_item").html('<img src="' + img + '" />'),
                              a.find(".neoh_fn_title .fn_title").text(title),
                              a.find(".desc p").text(desc)),
                        a.addClass("opened"),
                        !1
                    );
        }


// ***********************loader*********************************

    
    $(document).ready(function() {
  var counter = 0;

  // Start the changing images
  setInterval(function() {
    if(counter == 9) { 
      counter = 0; 
    }

    changeImage(counter);
    counter++;
  }, 3000);

  // Set the percentage off
  loading();
});

function changeImage(counter) {
  var images = [
    '<i class="fa fa-fighter-jet"></i>',
    '<i class="fa fa-gamepad"></i>',
    '<i class="fa fa-headphones"></i>',
    '<i class="fa fa-cubes"></i>',
    '<i class="fa fa-paw"></i>',
    '<i class="fa fa-rocket"></i>',
    '<i class="fa fa-ticket"></i>',
    '<i class="fa fa-pie-chart"></i>',
    '<i class="fa fa-codepen"></i>'
  ];

  $(".loader .image").html(""+ images[counter] +"");
}

function loading(){
  var num = 0;

  for(i=0; i<=30; i++) {
    setTimeout(function() { 
      $('.loader span').html(num+'...');

      if(num == 30) {
        $('.loader').hide();
        $('.neoh_fn_main').show();
      }
      num++;
    },i*115);
  };

}