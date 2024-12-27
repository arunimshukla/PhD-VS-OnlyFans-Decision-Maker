document.getElementById('decisionForm').addEventListener('submit', function (e) {
    e.preventDefault(); // Prevent the form from submitting

    // Get answers from the form
    const q1 = parseInt(document.getElementById('q1').value);
    const q2 = parseInt(document.getElementById('q2').value);
    const q3 = parseInt(document.getElementById('q3').value);
    const q4 = parseInt(document.getElementById('q4').value);
    const q5 = parseInt(document.getElementById('q5').value);
    const q6 = parseInt(document.getElementById('q6').value);
    const q7 = parseInt(document.getElementById('q7').value);
    const q8 = parseInt(document.getElementById('q8').value);

    // Calculate scores for each path
    const phdScore = q1 + q5 + q7; // Questions related to PhD
    const onlyFansScore = q2 + q3 + q4 + q6; // Questions related to OnlyFans

    // Get result elements
    const result = document.getElementById('result');
    const outcome = document.getElementById('outcome');
    const phdIcon = document.getElementById('phdIcon');
    const onlyFansIcon = document.getElementById('onlyFansIcon');

    // Determine the outcome
    if (phdScore > onlyFansScore) {
        outcome.textContent = "You should continue your PhD in Computer Science!";
        phdIcon.classList.remove('hidden');
        onlyFansIcon.classList.add('hidden');
    } else {
        outcome.textContent = "You should consider pursuing content creation on OnlyFans!";
        onlyFansIcon.classList.remove('hidden');
        phdIcon.classList.add('hidden');
    }

    // Show the result section
    result.classList.remove('hidden');
});
