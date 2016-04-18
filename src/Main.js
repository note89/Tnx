import $ from "jquery";

const replies =
  [ "Tack så mycket"
  , "Tack"
  , "Tack!, Ha en bra dag!"
  , "Tack, hoppas allt är bra"
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
              .text(`<span data-text="true">${randomReply}</span>`);
      }
    });
});
