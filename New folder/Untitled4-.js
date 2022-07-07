<html>
    <body>
        <p id="demo"></p>
        <script>
            const number = [79,898,56,33,44,40,13];
            let text = "";
            number.forEach(myfunction); 
            document.getElementById("demo").innerHTML = text;

        function myfunction(value) {
            text += value + "<br>"
        }
        </script>
    </body>
</html>