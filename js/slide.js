        var images = [];
        for (var i = 1; i < 6; i++) {
            images[i] = new Image();
            images[i].src = "images/slide" + i + ".png";
        }

        var index = 1;
        var anh = document.getElementById("anh");

        function Start() {
            index++;
            if (index > images.length - 1) {
                index = 1;
            }
            anh.src = images[index].src;
            t = setTimeout("Start()", 1000);
        }

        function Prev() {
            index--;
            if (index < 1) {
                index = images.length - 1;
            }
            anh.src = images[index].src;
        }

        function Next() {
            index++;
            if (index > images.length - 1) {
                index = 1;
            }
            anh.src = images[index].src;
        }

        function Stop() {
            clearTimeout(t);
        }
          setInterval(Next, 1000);
