document.getElementById("quoteForm")?.addEventListener("submit", function (e) {
    e.preventDefault();
    document.getElementById("formMessage").textContent =
        "Thank you! We’ll contact you shortly.";
});
