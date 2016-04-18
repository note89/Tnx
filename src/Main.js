import $ from "jquery";

$(window).on("scroll", () => {
  $('p:contains("Grattis")')
    .closest(".userContentWrapper")
    .each(function() {
      console.log ($(this).find(".UFIComment").length)
    });
  // const commentField = arrayOfPotentialTnx.find(".UFIAddCommentInput");
  // commentField.text("Herp");
});
