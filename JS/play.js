// JavaScript Document

window.onload = function() {

    var angle = 0;
    var timeout;
    //var bott=document.getElementById("kongjian");
    //var box=document.getElementById("allkj");
    var audio = document.getElementById("audio");
    var play = document.getElementById("play");
    var progress = document.getElementById("progress");
    var bar = document.getElementById("bar");
    var control = document.getElementById("control");
    var sound = document.getElementById("sound");
    var volume = document.getElementById("volume");
    var volumecontrol = document.getElementById("volume-control");
    var oText = document.getElementById("text");
    var oCon = document.getElementById("content");
    var text00;  //

    var t1 = "[00:00.00]起风了 (原曲： 高桥优 -《ヤキモチ》) - 买辣椒也用券[00:03.71]词：米果[00:04.41]曲：高桥优[00:28.86]这一路上走走停停[00:31.92]顺着少年漂流的痕迹[00:35.10]迈出车站的前一刻[00:38.19]竟有些犹豫[00:41.34]不禁笑这近乡情怯[00:44.45]仍无可避免[00:46.73]而长野的天[00:48.28]依旧那么暖[00:49.48]风吹起了从前[00:52.20]从前初识这世间[00:55.19]万般流连[00:56.84]看着天边似在眼前[00:59.64]也甘愿赴汤蹈火去走它一遍[01:04.66]如今走过这世间[01:07.69]万般流连[01:09.36]翻过岁月不同侧脸[01:12.10]措不及防闯入你的笑颜[01:18.03]我曾难自拔于世界之大[01:21.77]也沉溺于其中梦话[01:24.95]不得真假 不做挣扎 不惧笑话[01:30.40]我曾将青春翻涌成她[01:33.93]也曾指尖弹出盛夏[01:37.02]心之所动 且就随缘去吧[01:42.85]逆着光行走 任风吹雨打[01:59.31]短短的路走走停停[02:02.28]也有了几分的距离[02:05.49]不知抚摸的是故事 还是段心情[02:11.71]也许期待的不过是 与时间为敌[02:17.17]再次看到你[02:18.74]微凉晨光里[02:20.26]笑的很甜蜜[02:22.59]从前初识这世间[02:25.68]万般流连[02:27.14]看着天边似在眼前[02:30.03]也甘愿赴汤蹈火去走它一遍[02:35.00]如今走过这世间[02:38.01]万般流连[02:39.71]翻过岁月不同侧脸[02:42.46]措不及防闯入你的笑颜[02:48.36]我曾难自拔于世界之大[02:52.13]也沉溺于其中梦话[02:55.35]不得真假 不做挣扎 不惧笑话[03:00.82]我曾将青春翻涌成她[03:04.35]也曾指尖弹出盛夏[03:07.36]心之所动 且就随缘去吧[03:38.30]晚风吹起你鬓间的白发[03:42.03]抚平回忆留下的疤[03:45.24]你的眼中 明暗交杂 一笑生花[03:50.76]暮色遮住你蹒跚的步伐[03:54.58]走进床头藏起的画[03:57.67]画中的你 低着头说话[04:03.17]我仍感叹于世界之大[04:06.72]也沉醉于儿时情话[04:09.76]不剩真假 不做挣扎 无谓笑话[04:15.65]我终将青春还给了她[04:19.14]连同指尖弹出的盛夏[04:22.60]心之所动 就随风去了[04:28.05]以爱之名 你还愿意吗";

    var t2 = "[00:00.00]《不染》[00:10.00]作词：海　雷[00:20.00]作曲：简弘亦[00:30.00]演唱：毛不易[00:39.67]不愿染是与非[00:43.09]怎料事与愿违[00:46.62]心中的花枯萎[00:49.26]时光它去不回[00:53.53]但愿洗去浮华[00:57.21]掸去一身尘灰[01:00.74]再与你一壶清酒[01:03.87]话一世沉醉[01:07.81]不愿染是与非[01:11.34]怎料事与愿违[01:14.72]心中的花枯萎[01:17.51]时光它去不回[01:22.04]回忆辗转来回[01:25.37]痛不过这心扉[01:29.11]愿只愿余生无悔[01:31.89]随花香远飞[01:36.47]一壶清酒一身尘灰[01:43.39]一念来回度余生无悔[01:50.41]一场春秋[01:53.09]生生灭灭浮华是非[01:57.57]待花开之时再醉一回[02:32.56]不愿染是与非[02:35.89]怎料事与愿违[02:39.33]心中的花枯萎[02:42.01]时光它去不回[02:46.24]回忆辗转来回[02:50.03]痛不过这心扉[02:53.71]愿只愿余生无悔[02:56.54]随花香远飞[03:00.97]一壶清酒一身尘灰[03:08.29]一念来回度余生无悔[03:15.26]一场春秋[03:17.75]生生灭灭浮华是非[03:22.22]待花开之时再醉一回[03:29.49]愿这生生的时光不再枯萎[03:36.21]待花开之时再醉一回[03:43.53]愿这生生的时光不再枯萎[03:50.39]再回首浅尝心酒余味[03:57.71]一壶清酒一身尘灰[04:04.83]一念来回度余生无悔[04:11.94]一场春秋[04:14.43]生生灭灭浮华是非[04:18.81]待花开之时再醉一回[04:26.23]一壶清酒一身尘灰[04:33.04]一念来回度余生无悔[04:40.06]一场回忆[04:42.70]生生灭灭了了心扉[04:47.13]再回首浅尝心酒余味[04:54.04]一场回忆[04:56.63]生生灭灭了了心扉[05:01.11]再回首浅尝心酒余味";

    var t3 = "[00:02.00]怀念青春[00:08.00]作词：高进[00:11.00]作曲：高进[00:14.00]演唱：刘刚[00:37.43]那时的我们拥有[00:41.09]没有污染过的清晨[00:45.14]嘀嘀嗒嗒的秒针[00:48.88]却留不住一个黄昏 [00:53.79]曾经的爱很简单[00:57.03]不需要费力的眼神[01:01.02]牵手走过无人山岗[01:04.67]想时间再慢几分[01:10.27]怀念啊我们的青春啊[01:14.43]昨天在记忆里生根发芽[01:18.47]爱情滋养心中那片土地[01:22.32]绽放出美丽不舍的泪花[01:26.37]怀念啊我们的青春啊[01:30.43]留下的脚印拼成一幅画[01:34.32]最美的风景是你的笑容[01:38.02]那一句再见有太多的放不下[02:19.99]那时的我们拥有[02:22.84]没有污染过的清晨[02:27.19]嘀嘀嗒嗒的秒针[02:30.75]却留不住一个黄昏 [02:35.59]曾经的爱很简单[02:39.00]不需要费力的眼神[02:43.04]牵手走过无人山岗[02:46.68]想时间再慢几分[02:52.13]怀念啊我们的青春啊[02:56.37]昨天在记忆里生根发芽[03:00.16]爱情滋养心中那片土地[03:04.12]绽放出美丽不舍的泪花[03:08.30]怀念啊我们的青春啊[03:12.19]留下的脚印拼成一幅画[03:16.24]最美的风景是你的笑容[03:19.97]那一句再见有太多的放不下[03:28.64]怀念啊我们的青春啊[03:32.44]昨天在记忆里生根发芽[03:36.10]爱情滋养心中那片土地[03:39.95]绽放出美丽不舍的泪花[03:44.03]怀念啊我们的青春啊[03:47.93]留下的脚印拼成一幅画[03:52.04]最美的风景是你的笑容[03:55.98]那一句再见有太多的放不下";

    var text;   //接收第一次切割后的歌词的数组变量
    var html;	//接收加好标签后和属性的歌词变量

    var songs = "买辣椒也用券 - 起风了,不染 - 毛不易,怀念青春--刘刚";
    var songname = songs.split(",");
    update();

	
	//全局更新函数，执行时检测"data-num"的啊属性值，根据属性值播放不同的歌曲，并更改相应样式
    function update() {
        if ($("#audio").attr("data-num") == "1") {
            text00 = t1;
            $("#audio").attr("src", 'mp3/' + songname[0] + '.mp3');

            $(".yuan").css({
                "background": 'url("images/qifengle.png")'
            });
            $(".musicName").html(songname[0]);
            $("#ge").find("strong").find("marquee").html(songname[0]);
            $(".one").addClass("color");
            $(".two").removeClass("color");
            $(".three").removeClass("color");

            $(".first").addClass("bg");
            $(".second").removeClass("bg");
            $(".third").removeClass("bg");
        }

        else if ($("#audio").attr("data-num") == "2") {
            text00 = t2;
            $("#audio").attr("src", 'mp3/' + songname[1] + '.mp3');

            $(".yuan").css({
                "background": 'url("images/buran.png")'
            });
            $(".musicName").html(songname[1]);
            $("#ge").find("strong").find("marquee").html(songname[1]);
            $(".two").addClass("color");
            $(".one").removeClass("color");
            $(".three").removeClass("color");

            $(".second").addClass("bg");
            $(".first").removeClass("bg");
            $(".third").removeClass("bg");
        }

        else if ($("#audio").attr("data-num") == "3") {
            text00 = t3;
            $("#audio").attr("src", 'mp3/' + songname[2] + '.mp3');

            $(".yuan").css({
                "background": 'url("images/hnqc.png")'
            });
            $(".musicName").html(songname[2]);
            $("#ge").find("strong").find("marquee").html(songname[2]);
            $(".three").addClass("color");
            $(".one").removeClass("color");
            $(".two").removeClass("color");

            $(".third").addClass("bg");
            $(".second").removeClass("bg");
            $(".first").removeClass("bg");

        }
        angle = 0;
        $(".yuan").rotate(angle);
        clearInterval(timeout);

        timeout = setInterval(function() {
            angle += 3;
            $(".yuan").rotate(angle);
        },
        50);
		 //添加歌词内容
        html = '';  
        text = text00.split("[");

        for (var i = 0; i < text.length; i++) {
            var lrc = text[i].split("]");
            var time = lrc[0].split("."); //去掉毫秒
            var times1 = time[0].split(":"); //把分钟和秒钟分隔开
            var ms = times1[0] * 60 + times1[1] * 1; //把分钟和秒钟合并成秒钟
            if (lrc[1]) {
                html += "<p id=" + ms + " data-id=" + i + ">" + lrc[1] + "</p>";
            }
        }
        oCon.innerHTML = html;  
        aP = document.getElementsByTagName("p");
        num = 0;

    }

    audio.load();  //音频加载
    audio.oncanplay = function() {
        $('#alltime').html(transTime(audio.duration));  //等音频加载完毕且能播放时获取时间
    };

    audio.volume = 1;  //初始音量

	
	//播放停止按钮点击事件
    play.onclick = function() {
        if (audio.paused) {
            play.className = "pause";
            audio.play();
            timeout = setInterval(function() {
                angle += 3;
                $(".yuan").rotate(angle);
            },
            50);
        } 
		else {
            play.className = "play";
            audio.pause();
            clearInterval(timeout);
            timeout = null;
        }
    };
	
	//监听播放完成事件
    audio.addEventListener('ended',
    function() {
        audioEnded();
    },
    false);
	
	//监听时间更新事件
    audio.addEventListener('timeupdate',
    function() {
        updateProgress(audio);

    },
    false);

    // 播放完成函数
    function audioEnded() {
        clearInterval(timeout);
        timeout = null;
        play.className = "play";
        bar.style.width = 0 + "%";
        control.style.left = 0 + "%";
        $('#nowtime').html(transTime(0));
        oCon.style.top = "0px";
        num = 0;
    }

    //时间更新函数
    function updateProgress(audio) {

        var scales = audio.currentTime / audio.duration;
        bar.style.width = scales * 100 + "%";
        control.style.left = scales * 100 + "%";
        $('#nowtime').html(transTime(audio.currentTime));
        //console.log(transTime(audio.currentTime));
    }
    /**
 * 音频播放时间换算
 * @param {number} value - 音频当前播放时间，单位秒
 */
    function transTime(value) {
        var time = "";
        var h = parseInt(value / 3600);
        value %= 3600;
        var m = parseInt(value / 60);
        var s = parseInt(value % 60);
        if (h > 0) {
            time = formatTime(h + ":" + m + ":" + s);
        } else {
            time = formatTime(m + ":" + s);
        }
        return time;
    }

    /**
 * 格式化时间显示，补零对齐
 * eg：2:4  -->  02:04
 * @param {string} value - 形如 h:m:s 的字符串 
 */
    function formatTime(value) {
        var time = "";
        var s = value.split(':');
        var i = 0;
        for (; i < s.length - 1; i++) {
            time += s[i].length === 1 ? ("0" + s[i]) : s[i];
            time += ":";
        }
        time += s[i].length === 1 ? ("0" + s[i]) : s[i];

        return time;
    }
//进度条拖动点击事件
    $('#progress').on('mousedown',
    function(e) {
        // 只有音乐开始播放后才可以调节，已经播放过但暂停了的也可以
        if (!audio.paused || audio.currentTime != 0) {
            var pgsWidth = $('#progress').width();
            var rate = e.offsetX / pgsWidth;
            audio.currentTime = audio.duration * rate;
            updateProgress(audio);
        }
    });

    // 鼠标拖动进度点时可以调节进度
    // 只有音乐开始播放后才可以调节，已经播放过但暂停了的也可以
    // 鼠标按下时
    control.onmousedown = function(event) {
        if (audio.play) {
            audio.pause();
            play.className = "play";
        } else {}
        if (!audio.paused || audio.currentTime !== 0) {
            var oriLeft = control.offsetLeft;
            var mouseX = event.clientX;
            var maxLeft = oriLeft; // 向左最大可拖动距离
            var maxRight = progress.offsetWidth - oriLeft; // 向右最大可拖动距离
            // 禁止默认的选中事件（避免鼠标拖拽进度点的时候选中文字）
            if (event && event.preventDefault) {
                event.preventDefault();
            } else {
                event.returnValue = false;
            }

            // 禁止事件冒泡
            if (event && event.stopPropagation) {
                event.stopPropagation();
            } else {
                window.event.cancelBubble = true;
            }

            // 开始拖动
            document.onmousemove = function(event) {
                var length = event.clientX - mouseX;
                if (length > maxRight) {
                    length = maxRight;
                } else if (length < -maxLeft) {
                    length = -maxLeft;
                }
                var pgsWidth = $('#progress').width();
                var rate = (oriLeft + length) / pgsWidth;
                audio.currentTime = audio.duration * rate;
                updateProgress(audio);
            };

            // 拖动结束
            document.onmouseup = function() {
                play.className = "pause";
                audio.play();
                document.onmousemove = null;
                document.onmouseup = null;
            };
        }
    };

	
	//喇叭点击事件
    sound.onclick = function() {
        if (audio.muted) {
            audio.muted = false;
            sound.className = "soundon";
        } else {
            audio.muted = true;
            sound.className = "soundoff";
        }
    };

	
	//声音进度条拖动事件
    volumecontrol.onmousedown = function() {
        var oriLeft = volumecontrol.offsetLeft;
        var mouseX = event.clientX;
        var maxLeft = oriLeft; // 向左最大可拖动距离
        var maxRight = volume.offsetWidth - oriLeft - 13; // 向右最大可拖动距离
        // 禁止默认的选中事件（避免鼠标拖拽进度点的时候选中文字）
        if (event && event.preventDefault) {
            event.preventDefault();
        } else {
            event.returnValue = false;
        }

        // 禁止事件冒泡
        if (event && event.stopPropagation) {
            event.stopPropagation();
        } else {
            window.event.cancelBubble = true;
        }

        // 开始拖动
        document.onmousemove = function(event) {
            var length = event.clientX - mouseX;
            if (length > maxRight) {
                length = maxRight;
            } else if (length < -maxLeft) {
                length = -maxLeft;
            }
            volumecontrol.style.left = oriLeft + length + "px";

        };

        // 拖动结束
        document.onmouseup = function() {
            var scales = volumecontrol.offsetLeft / volume.offsetWidth;

            audio.volume = scales;
            document.onmousemove = null;
            document.onmouseup = null;
        };

    };

   

   

    //歌词同步
    audio.addEventListener("timeupdate",
    function() {

        var curT = parseInt(this.currentTime);
        if (document.getElementById(curT)) {
            for (var i = 0; i < aP.length; i++) {
                aP[i].style.color = "#ffffff";
                aP[i].style.fontSize = "18px";
            }
            document.getElementById(curT).style.color = "#00FF36";
            document.getElementById(curT).style.fontSize = "21px";

            if (document.getElementById(curT)) {
                //var sign=parseInt(aP[5].id);
                var sign = parseInt(aP[6].id);
                var pp = parseInt(aP[num + 6].id);

                if (curT < sign) {
                    oCon.style.top = "0px";
                }
                if (curT === pp) {
                    oCon.style.top = -36 * num + "px";
                    num++;
                } else if (pp < curT) {
                    for (; pp !== curT; num++) {
                        pp = parseInt(aP[num + 6].id);
                    }
                    oCon.style.top = -36 * (num - 1) + "px";
                } else if (pp > curT && curT > sign) {
                    for (; pp !== curT; num--) {
                        pp = parseInt(aP[num + 6].id);
                    }
                    oCon.style.top = -36 * (num + 1) + "px";
                }

            }

        }

    });
	
	//喜欢按钮点击事件

    $(".like").click(function() {

        if ($(this).attr("data-key") == "like") {
            $(this).addClass("liking");
            $(this).attr("data-key", "");
        } else {
            $(this).removeClass("liking");
            $(this).attr("data-key", "like");
        }
    });
	
	//左侧列表图标点击事件
    $(".liebiao0").click(function() {

        if ($(this).attr("data-key") == "on") {
            $(this).find("div").addClass("left");
            $("#liebiao").fadeIn("slow");
            $(this).attr("data-key", "");
        } else {
            $(this).find("div").removeClass("left");
            $("#liebiao").fadeOut("slow");
            $(this).attr("data-key", "on");
        }
    });
	
	
	//上一首点击事件
    $(".up").click(function() {

        if ($("#audio").attr("data-num") == "1") {
            $("#audio").attr("data-num", "3");
        }

        else if ($("#audio").attr("data-num") == "2") {
            $("#audio").attr("data-num", "1");
        }

        else if ($("#audio").attr("data-num") == "3") {
            $("#audio").attr("data-num", "2");
        }
        play.className = "pause";

        update();
    });
	
	//下一首点击事件
    $(".down").click(function() {

        if ($("#audio").attr("data-num") == "1") {
            $("#audio").attr("data-num", "2");
        }

        else if ($("#audio").attr("data-num") == "2") {
            $("#audio").attr("data-num", "3");
        }

        else if ($("#audio").attr("data-num") == "3") {
            $("#audio").attr("data-num", "1");
        }
        play.className = "pause";
        update();
    });

	
	//左侧列表项点击事件
    $(".one").click(function() {
        $("#audio").attr("data-num", "1");
        play.className = "pause";
        update();
    });

    $(".two").click(function() {
        $("#audio").attr("data-num", "2");
        play.className = "pause";
        update();
    });

    $(".three").click(function() {
        $("#audio").attr("data-num", "3");
        play.className = "pause";
        update();
    });

};