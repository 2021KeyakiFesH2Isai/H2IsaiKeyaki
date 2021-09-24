
Scene1 = { //最初の画面
    "SceneType":"IntroductionContent",
    "Link": 2,
}
Scene2={ //一問目
    "SceneType":"Quiz",
    "Topic":"まずは肩慣らし...?",
    "Title":"第一問",
    "ImageSrc":"QuizImages/step1 1.jpg",
    "Answer":["11111","１１１１１","一万千百十一"],
    "Hint1":"A~Eには数字が入る",
    "Hint2":"A→B→C→D→Eと10倍になっていく",
    "CorrectLink":4,
    "WrongLink":3
}
Scene3={ //一問目間違い
    "SceneType":"Incorrect",
    "Link":2
}
Scene4={ //一問目正解
    "SceneType":"Correct",
    "Description":"それぞれ「一生」,「十分」,「百葉箱」,「千秋楽」,「万歳」となり、数字を全部足すと11111になります。",
    "Link":5
}
Scene5={ //二問目
    "SceneType":"Quiz",
    "Topic":"謎の等式",
    "Title":"第二問",
    "ImageSrc":"QuizImages/step1 2.jpg",
    "Answer":["とり","トリ","鳥","酉"],
    "Hint1":"すべて十二支に登場する動物",
    "Hint2":"十二支の番号ー足の数になっている",
    "CorrectLink":7,
    "WrongLink":6
}
Scene6={ //二問目間違い
    "SceneType":"Incorrect",
    "Link":5
}
Scene7={ //二問目正解
    "SceneType":"Correct",
    "Description":"酉(とり)は十二支で10番目で脚が2本あります。ですから10-2で8になり、等式が成立します。",
    "Link":8
}
Scene8={//4個選択その1
    "SceneType":"FourQuiz",
    "Topic":"下のA,B,C,Dから好きな問題を選んでください",
    "WrongLink":9,
    "CorrectLink":[10,11,12,13],
    "Title":["第三問A","第三問B","第三問C","第三問D"],
    "ImageSrc":["QuizImages/step2 1-A.jpg","QuizImages/step2 1-B.jpg","QuizImages/step1.C.jpg","QuizImages/step1.D .jpg"],
    "Hint1":["一番上と一番下は擬音が入る","上の漢字の部首に注目","どこかで見たことがある順番...?","アルファベットは月の英語"],
    "Hint2":["かたつむりはでんでん虫","漢字の下の時刻は部首を表す","一般的なキーボードの配列になっている","出現する数列に規則性がある"],
    "Answer":[["蓄電池","ちくでんち","チクデンチ"],["気化熱","キカネツ","きかねつ"],["YOUKAIDO","Youkaido","溶解度","ようかいど"],["F"]]
}
Scene9={ //3間違い
    "SceneType":"Incorrect",
    "Link":8
}
Scene10={ //3A正解
    "SceneType":"Correct",
    "Description":"針はちくちく、かたつむりはでんでん、太陽はさんさん。記号に対応するところに文字を当てはめると、ちくでんちになります。『蓄電池とは、充電を行うことで繰り返し使うことができる電池のことで､二次電池とも呼ばれる。代表的なものは鉛蓄電池やリチウムイオン電池がある。参考：卜部吉庸　化学の新研究』",
    "Link":14
}
Scene11={ //3B正解
    "SceneType":"Correct",
    "Description":"松の部首は「キ」、助の部首は「カ」、社の部首は「ネ」、営の部首からは「ツ」を持ってくると、キカネツと読めます。『液体が気体に変化する時吸収する熱のことを気化熱という。エアコンや打ち水はこれを利用したものである。参考：卜部吉庸　化学の新研究』",
    "Link":14
}
Scene12={ //3C正解
    "SceneType":"Correct",
    "Description":"キーボードの対応する部分をあてはめて読むと、YOUKAIDOと読めます。『溶解度とは､ある溶質が溶媒に溶ける限界量のことをいう。溶解度は溶媒や溶質の種類と温度によって変化する。参考：卜部吉庸　化学の新研究』",
    "Link":14
}
Scene13={ //3D正解
    "SceneType":"Correct",
    "Description":"1月はJanuaryだからJといったように、文字を数字に置き換えていくと、1,1,?,3,5,8,13,21という並びになっています。ここから推理して、空白部分は2と見抜けば、Fが答えだと分かります。『フィボナッチ数列とは初項と第二項が1であり､その後の項が直前の二項を足したものになっている数列である。参考：佐藤修一　自然にひそむ数学　自然と数学の不思議な関係』",
    "Link":14
}
Scene14={//4個選択その2
    "SceneType":"FourQuiz",
    "Topic":"下のA,B,C,Dから好きな問題を選んでください",
    "WrongLink":15,
    "CorrectLink":[16,17,18,19],
    "Title":["第四問A","第四問B","第四問C","第四問D"],
    "ImageSrc":["QuizImages/step2 2-A.jpg","QuizImages/step2 2-B.jpg","QuizImages/step2 2-C.jpg","QuizImages/step2 2-D.jpg"],
    "Hint1":["漢字であるかどうかは関係ない","漢字の形に注目","平仮名を時計回り一周させて書くと...?","アルファベットは数字の英語表記の真ん中"],
    "Hint2":["後ろに同じ言葉が来れる","後ろに共通の漢字が来る...?","五十音表を見てみよう","数字の山として見ると規則性がある"],
    "Answer":[["時計","とけい","どけい"],["炭素","たんそ"],["転写","てんしゃ"],["e","E"]]
}
Scene15={ //3間違い
    "SceneType":"Incorrect",
    "Link":14
}
Scene16={ //3A正解
    "SceneType":"Correct",
    "Description":"各言葉の後に時計を入れて読んでも言葉が成立します。『日時計は､木や棒の影を利用して時間を測る時計である。ちなみに､日本で日時計を使う場合は兵庫県明石市の時刻に調整する必要がある。参考：正確に読める日時計』",
    "Link":20
}
Scene17={ //3B正解
    "SceneType":"Correct",
    "Description":"暗からは音色、横からは黄色といったように、漢字の一部分を抜き出すと色の種類になっています。ですから灰色が成立する炭素が〇に属します。『炭素は原子番号6､元素記号Cで表される元素である。共有結合によってダイヤモンドや黒鉛などの幅広い形態をつくることができる。参考：卜部吉庸　化学の新研究』",
    "Link":20
}
Scene18={ //3C正解
    "SceneType":"Correct",
    "Description":"横に書かれているひらがなは全て、五十音表で特定のひらがなの周りに書かれているものです。上から、「て」、「ん」、「し」、「や」ですから、答えはてんしゃになります。『転写とは、DNAの遺伝子情報をRNAポリメラーゼという酵素によってRNAへとうつしとる過程のことを言う。参考：広島大学　分子遺伝学研究室』",
    "Link":20
}
Scene19={ //3D正解
    "SceneType":"Correct",
    "Description":"各マスに入る数字は上にある二つの数字の合計ですから、空白部分に入るのは10を表すeです。『パスカルの三角形とは二項定理展開を記述したもので、具体的には一段目と両端に1､それ以外には右上と左上の数の和が入る。参考：関西学院高等部数理科学部2017』",
    "Link":20
}
Scene20={ //五問目
    "SceneType":"Quiz",
    "Topic":"3,3,7...?",
    "Title":"第五問",
    "ImageSrc":"QuizImages/step3 2.jpg",
    "Answer":["2","２","二"],
    "Hint1":"H₂は「すいそ」O₂は「さんそ」を表す",
    "Hint2":"H₂O₂は「かさんかすいそ」",
    "CorrectLink":22,
    "WrongLink":21
}
Scene21={ //五問目間違い
    "SceneType":"Incorrect",
    "Link":20
}
Scene22={ //五問目正解
    "SceneType":"Correct",
    "Description":"数字が表していたのは、ひらがなで書いた時の文字数です。「みず」は2文字ですから、2が答えです。『燃料電池は水素などの燃料と外部から供給された酸素によって電気エネルギーを取り出す電池を指す。発電時のエネルギー効率が高く、水しか生成されないため、クリーンなエネルギーとして注目されている。参考：卜部吉庸　化学の新研究』",
    "Link":23
}
Scene23={ //六問目
    "SceneType":"Quiz",
    "Topic":"少し簡単かな...?",
    "Title":"第六問",
    "ImageSrc":"QuizImages/step.3 3.jpg",
    "Answer":["酸化分解"],
    "Hint1":"上から連想される文字は...?",
    "Hint2":"連想された文字を漢字に穴埋めしてみる",
    "CorrectLink":25,
    "WrongLink":24
}
Scene24={ //六問目間違い
    "SceneType":"Incorrect",
    "Link":23
}
Scene25={ //六問目正解
    "SceneType":"Correct",
    "Description":"←、火、将棋のコマはそれぞれ、「西」、「ヒ」、「角」を表しています。あてはめると、「酸化分解」となります。『光触媒とは光が当たるとそのもの自身は変化しないが、化学反応の速度を変化させる物質のことを言う。光触媒は汚れや有機物を酸化分解することができ、身の回りの環境問題などに利用できる。また、水素の新しい発生手段としても注目されている。参考：水を分解して水素を製造する光触媒の研究に関するおはなし 前田 和彦』",
    "Link":26
}
Scene26={ //七問目
    "SceneType":"Quiz",
    "Topic":"最終問題です",
    "Title":"第七問",
    "ImageSrc":"QuizImages/step3 4.jpg",
    "Answer":["午"],
    "Hint1":"王冠、①、➁は左の絵を輪っかにしたもの",
    "Hint2":"E,S,Wは方角を表す",
    "CorrectLink":28,
    "WrongLink":27
}
Scene27={ //七問目間違い
    "SceneType":"Incorrect",
    "Link":26
}
Scene28={ //七問目正解
    "SceneType":"Correct",
    "Description":"1は折り曲げて輪にすると、時計の目盛りを表していることがわかります。2も同様にすると、太陽を表していることがわかります。太陽がEからWつまり東から西に変化するとき、時計は午前→正午→午後となりますから、答えは午となります。『地球は1日1回西から東へ自転しているそのため、太陽や星は東から昇るように見える。参考：国立科学博物館』",
    "Link":29
}
Scene29 = { //クリアの画面
    "SceneType":"Success"
}
SceneManager=[Scene1,Scene2,Scene3,Scene4,Scene5,Scene6,Scene7,Scene8,Scene9,Scene10,Scene11,Scene12,Scene13,Scene14,Scene15,Scene16,Scene17,Scene18,Scene19,Scene20,Scene21,Scene22,Scene23,Scene24,Scene25,Scene26,Scene27,Scene28,Scene29];
ABCDNum=0; //0A 1B 2C 3D

$(function(){
    //見せる画面を取得

    Scenes = {
        "IntroductionContent" : $("#IntroductionContent"),
        "Quiz":$("#Quiz"),
        "Correct": $("#Correct"),
        "Incorrect": $("#Incorrect"),
        "FourQuiz": $("#FourQuiz"),
        "Success":$("#Success"),
    }

    //見せる画面を切り替え
    CurrentScene = Scene1;
    SetScene(CurrentScene);


})



//ヒントを表示
function ShowHint(num){
    if(CurrentScene.SceneType == "FourQuiz"){
        if(num == 1){
            parentObj.children(".Hint1").text(CurrentScene.Hint1[ABCDNum]);
        }else if(num == 2){
            parentObj.children(".Hint2").text(CurrentScene.Hint2[ABCDNum]);
        }
    }else{
        if(num == 1){
            parentObj.children(".Hint1").text(CurrentScene.Hint1);
        }else if(num == 2){
            parentObj.children(".Hint2").text(CurrentScene.Hint2);
        }
    }
}

// 答え合わせ
function checkAnswer(){
    //console.log(CurrentScene);
    let a = document.getElementById(CurrentScene.SceneType).getElementsByClassName("AnswerTextArea")[0].value;
    //aは入力値
    //console.log(a == CurrentScene.Answer);

    if(CurrentScene.SceneType == "FourQuiz"){
        if($.inArray(a,CurrentScene.Answer[ABCDNum]) !== -1 || a === "skip"){
            SetScene(SceneManager[CurrentScene.CorrectLink[ABCDNum] -1]);
            CurrentScene = SceneManager[CurrentScene.CorrectLink[ABCDNum] -1];

        }else{
            SetScene(SceneManager[CurrentScene.WrongLink -1]);
            CurrentScene = SceneManager[CurrentScene.WrongLink -1];
        }
        return;
    }

    //通常a == CurrentScene.Answer
    if($.inArray(a,CurrentScene.Answer) !== -1  || a === "skip"){
        //console.log("Reading" + String(CurrentScene.CorrectLink -1));
        SetScene(SceneManager[CurrentScene.CorrectLink -1]);
        CurrentScene = SceneManager[CurrentScene.CorrectLink -1];
    }else{
        //console.log("Reading" + String(CurrentScene.WrongLink -1));
        SetScene(SceneManager[CurrentScene.WrongLink -1]);
        CurrentScene = SceneManager[CurrentScene.WrongLink -1];
    }

}

//シーン遷移 
function transitButton(){
    //console.log("Reading" + String(CurrentScene.Link -1));
    console.log(CurrentScene);
    SetScene(SceneManager[CurrentScene.Link -1]);
    CurrentScene = SceneManager[CurrentScene.Link -1];

    if(CurrentScene.SceneType == "FourQuiz"){
        ABCDNum = 0;
        SwitchABCD(0);
    }

}

//シーンセットアップ
function SetScene(sceneData){
    console.log(CurrentScene.SceneType + "から" + sceneData.SceneType);
    //表示切り替え
    $.each( Scenes, function( index, value ) {
        if(index == sceneData.SceneType){
            value.show();
        }else{
            value.hide();
        }
    });

    //内容設定
    switch (sceneData.SceneType){
        case "Quiz": //クイズ表示
            parentObj = Scenes.Quiz;
            parentObj.children("h3").text(sceneData.Topic);
            parentObj.children("h1").text(sceneData.Title);
            parentObj.children(".Hint1").text("ヒント1");
            parentObj.children(".Hint2").text("ヒント2");
            document.getElementById("Quiz").getElementsByClassName("QuizImage")[0].src = sceneData.ImageSrc;
            
            break;
        case "Correct":
            parentObj = Scenes.Correct;
            parentObj.children(".DescroptionText").text(sceneData.Description);
            break;
        case "Incorrect":
            parentObj = Scenes.Incorrect;
            break;
        case "FourQuiz":
            parentObj = Scenes.FourQuiz;
            parentObj.children(".Topic").text(sceneData.Topic);
            parentObj.children("h1").text(sceneData.Title[0]);
            document.getElementById("FourQuiz").getElementsByClassName("QuizImage")[0].src = sceneData.ImageSrc[ABCDNum];
            parentObj.children(".Hint1").text("ヒント1");
            parentObj.children(".Hint2").text("ヒント2");
            break;
        case "IntroductionContent":
            parentObj = Scenes.IntroductionContent;
            break;
        case "Success":
            parentObj = Scenes.Success;
            break;
        }

}

function SwitchABCD(num){

    ABCDNum = num;
    parentObj.children("h1").text(CurrentScene.Title[ABCDNum]);
    document.getElementById("FourQuiz").getElementsByClassName("QuizImage")[0].src = CurrentScene.ImageSrc[ABCDNum];
    parentObj.children(".Hint1").text("ヒント1");
    parentObj.children(".Hint2").text("ヒント2");
    fourButtons=[$("#A"),$("#B"),$("#C"),$("#D")];
    fourButtons.forEach(function(elem, index) {
        if(index === ABCDNum){
            elem.css('background-color','#6263f1')
        }else{
            elem.css('background-color','#9b9bf7')
        }
    });
}