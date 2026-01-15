document.querySelector(".post-btn").addEventListener("click", () => {
  const tweetText = `$P
9PPuYAse4mJhKHVjVUhXtX49TRn2WzTyp9taddnbpump`;

  const url =
    "https://twitter.com/intent/tweet?text=" +
    encodeURIComponent(tweetText);

  window.open(url, "_blank");
});