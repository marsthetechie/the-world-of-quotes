$(document).ready(function () {
  $.getJSON(
    "https://gist.githubusercontent.com/marsthetechie/3172b4f732eb8970fefa9ebd16149cfb/raw/17a539f37fcaf5b47547e6ea5a0a85e674ca1e09/quotes.json",
    function (data) {
      $("#bquote").on("click", function () {
        var randomNum = Math.floor(Math.random() * data.length);

        $("#quote").html(data[randomNum].quote);
        $("#author").html(data[randomNum].author);

        var tweetQuote = '"' + data[randomNum].quote + '" - ' + data[randomNum].author;
        tweetQuote = tweetQuote.split(" ").join("%20");
        tweetQuote = "https://twitter.com/intent/tweet?text=" + tweetQuote;

        $("#btweet").attr("href", tweetQuote);
      });
    }
  );
});