$(function () {
    var newscontent = [
        {
            title : 'MD5ハッシュ関数の導入',
            date : '2019-12-4',
            content : '本日の更新にて、より安心してご利用いただくためMD5ハッシュ関数を導入しました。' +
                '            <br>' +
                '            この関数により、対局毎に牌山のデータが文字列として暗号化かつ加工不可の状態となります。' +
                '            <br>' +
                '            また、対局ごとのMD5ゴートはドラ表示牌をタップすることで確認することが可能です。'
        }
    ]
    for (var i = 0 ; i < newscontent.length ; i++){
        var content = '<div class="mbody_cnewscontent">' +
            '                        <div>' +
            '                            <span>' + newscontent[i].title + '</span>' +
            '                            <span>' + newscontent[i].date + '</span>' +
            '                        </div>' +
            '                        <div>' + newscontent[i].content +
            '                        </div>' +
            '                    </div>';
        $('.mbody_cnews').append(content);
    }
    $('.mbody_cnewscontent').on('click',function (e) {
        var a = document.getElementById('news');
        a.style.display = 'block';
        document.body.style.overflow = 'hidden';// 通过overflow来禁用滚动条滑动
        var content = '<div class="newscontent">' +
            '        <span style="cursor: pointer" class="closene"></span>' +
            '        <div>' + newscontent[$(this).index()].title + '</div>' +
            '        <div>' + newscontent[$(this).index()].date + '</div>' +
            '        <div class="news_c">' + newscontent[$(this).index()].content +
            '        </div>' +
            '    </div>';
        a.innerHTML = content;
        $('.closene').on('click',function (e) {
            var a = document.getElementById('news');
            a.style.display = 'none';
            document.body.style.overflow = 'visible';
        })
    });
    var character_data = [{
        nick: "女将",
        cv: "佐藤 利奈",
        desc: "大人の魅力に溢れる。ずぼらでいたずら好き。食いしん坊。打牌（だはい）のマナーが悪い。",
    }, {
        nick: "佐々木 紗夜",
        cv: "種﨑 敦美",
        desc: "大学の麻雀同好会の部長を務める。物静かで繊細な文学少女。近寄りがたい優等生に見えるが、麻雀に対する熱意は人一倍。普段は柔らかい性格に対して、麻雀対局中の彼女はやや冷たく感じる。",
    }, {
        nick: "アンジェリーナ",
        cv: "佐藤 利奈",
        desc: "時々腹話術を使ってぬいぐるみのウサギに喋らせることがある。そのしゃべり口調は若干イラっとする。",
    }, {
        nick: "陳",
        cv: "杉田 智和",
        desc: "立ち振る舞いから気品を感じられる。リラックスしている時でも、ベテラン感を醸し出す。",
    }, {
        nick: "ドーラ",
        cv: "種﨑 敦美",
        desc: "騒がしいぐらい明るい性格の持ち主。すぐ調子に乗る。",
    }, {
        nick: "小棠",
        cv: "桑原 由気",
        desc: "植物と自然を愛している純真な少女。とても優しい。ちょっと天然ボケ。よく笑うと泣く。負けた時は涙ぐむ。大負けの時は泣き崩れる。緑色が好き。",
    }, {
        nick: "小楓",
        cv: "五十嵐 裕美",
        desc: "休憩のためにはカジュアルゲームをやる。最近はネット麻雀といういいものを発見し、そのため訓練の効率が大幅にアップした（速く訓練を終われば、麻雀をやる時間が増えられる）。プロ選手のため、麻雀をやるのは楽で、暢気な気持ちを持って、気ままに遊ぶ。長所は反応スピードが速くて冷静。短所は算数が下手。",
    }, {
        nick: "孟青（もうせい）",
        cv: "杉田 智和",
        desc: "優男。優しくてカッコいい。麻雀初心者だが、頑張っている。",
    }, {
        nick: "南宮 唯",
        cv: "桑原 由気",
        desc: "麻雀名門の一人娘。小さいから受けた教育は「君の相手に敬意を持って」、「牌に負けても人に負けてはいけない」、「己の欲せざる所は人に施すこと勿れ」。そのため、精神と振る舞いは旧貴族の感じが溢れている。日常生活ではちょっと高慢だが、麻雀をやる時は、振る舞いが優雅で、古風の感じがする。祖父からプレイの礼儀を学んだと自称した。",
    }, ];
    $(".swiper-wrapper").empty();
    for (var i = 1 ; i <= character_data.length ; i++){
        var data = character_data[i-1];
        var data_html = '<div class="swiper-slide">' +
            '                                <div>' +
            '                                    <img src="https://queji-jp-1259794192.file.myqcloud.com/majiang_jp_yy/images/c' + i +'.png" alt="">' +
            '                                </div>' +
            '                                <p class="c-nick">' + data.nick + '</p>' +
            '                                <p class="c-name">CV : ' + data.cv + '</p>' +
            '                                <div></div>' +
            '                                <p class="c-content">' + data.desc +
            '                                </p>' +
            '                            </div>';
        $('.swiper-wrapper').append(data_html);
    }
    var mySwiper = new Swiper('.swiper-container', {
        navigation: {
            nextEl: '.c-left',
            prevEl: '.c-right',
        },
        autoplay: {
            delay: 10 * 1000,
            disableOnInteraction: false,
        },
        loop : true,
    });
})
