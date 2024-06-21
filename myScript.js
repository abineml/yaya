function myFunction() {
    document.getElementById("demo").innerHTML="Never gonna give you up never gonna let you down.";
}

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>GIF Button Example</title>
    <style>
        .gif-button {
            background-size: cover;
            width: 200px;
            height: 100px;
            border: none;
        }
    </style>
</head>
<body>
    <button id="gifButton" onclick="setGif()">Click Me</button>

    <script>
        function setGif() {
            const button = document.getElementById('gifButton');
            button.classList.add('gif-button');
            button.style.backgroundImage = 'url("https://images.app.goo.gl/JyXVxkn7kozM63467")';
        }
    </script>
</body>
</html>
