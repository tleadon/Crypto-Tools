document.getElementById('copyButton').addEventListener('click', function() {
    // Get the text to copy
    var textToCopy = document.getElementById('textToCopy').innerText;

    // Create a temporary textarea element
    var tempTextArea = document.createElement('textarea');
    tempTextArea.value = textToCopy;
    document.body.appendChild(tempTextArea);

    // Select the text in the textarea
    tempTextArea.select();
    tempTextArea.setSelectionRange(0, 99999); // For mobile devices

    // Copy the text to the clipboard
    document.execCommand('copy');

    // Remove the temporary textarea element
    document.body.removeChild(tempTextArea);

    // Optionally, show a message to the user that the text was copied
    alert('Text copied to clipboard!');
});