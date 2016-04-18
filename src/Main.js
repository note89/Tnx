import $ from "jquery";


var e = $.Event("keypress");
e.which = 13; //choose the one you want
e.keyCode = 13;

const replies =
  [ "Tack så mycket"
  , "Tack"
  , "Tack!, Ha en bra dag!"
  ]

$(window).on("scroll", () => {
  $('p:contains("Grattis")')
    .closest(".userContentWrapper")
    .each(function() {
      const shouldSayTnx = $(this).find(".UFIComment").length === 0;
      if(shouldSayTnx) {
        console.log("say tnx man!");
        const randomReply = replies[ Math.floor(Math.random() * replies.length) ];
        $(this).find("._1mf._1mj span")
              .html(`<span data-text="true">${randomReply}</span>`);
      }
    });
});
