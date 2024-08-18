$(function () {
  // ボタンアニメーション
  $('.button-more').on('mouseover', function () {
    $(this).animate({
      opacity: 0.5,
      marginLeft: 20,
    }, 100);
  });
  $('.button-more').on('mouseout', function () {
      $(this).animate({
        opacity: 1.0,
        marginLeft: 0
      }, 100);
    });
    // カルーセル
    $('.carousel').slick({
      autoplay: true,
      dots: true,
      infinite: true,
      autoplaySpeed: 5000,
      arrows: false,
    });

    // 送信ボタンクリック時の処理
    $('#submit').on('click', function(event){
      event.preventDefault();

      // 入力チェックをした結果をresultに格納
      let result = inputCheck();

      // ＃５　なぜこの段落に入力する理由

      // エラー判定とメッセージを取得
      let error = result.error;
      let message = result.message;

      // エラーがなかったらフォーム送信する
      if(error == false) {
        // フォーム送信は実際には行わず、送信成功メッセージのみ表示する
        alert('お問い合わせを送信しました。');
      } else {
        // エラーメッセージを表示する
        alert(message);
      }
      


    });
    


    // フォーカスが外れた時（blue）にフォームの入力をチェックをする
    $('#name').blur(function() {
      inputCheck();
    });
    $('#furigana').blur(function() {
      inputCheck();
    });
    $('#email').blur(function(){
      inputCheck();
    });
    $('#tel').blur(function(){
      inputCheck();
    });
    $('#message').blur(function(){
      inputCheck();
    });
    $('#agree').click(function(){
      inputCheck();
    });
    

      // 都道府県が選択されていない　メッセージを表示させる。
      $('#prefecture').blur(function() {
        inputCheck();
      });
      


    // お問い合わせのフォームの入力チェック
    function inputCheck() {
      // エラーのチェック結果
      let result;

      // エラーのメッセージのテキスト
      let message = '';
      // エラーがなければfalse,エラーがあればtrue
      let error = false;
    
    // お名前のチェック
    if($('#name').val() == '') {
      // エラーあり
      $('#name').css('background-color', '#f79999');
     error = true;
     message += 'お名前を入力してください。\n';
    } else {
      // エラーなし
      $('#name').css('background-color', '#fafafa');
    }

    // フリガナのチェック
    if($('#furigana').val() == '') {
      //エラーあり
      $('#furigana').css('background-color', '#f79999');
      error = true;
      message += 'フリガナを入力してください。\n';
    } else {
      // エラーなし
      $('#furigana').css('background-color', '#fafafa');
    }

    // お問い合わせのチェック
    if($('#message').val() == '') {
      // エラーあり
      $('#message').css('background-color', '#f79999');
      error = true;
      message += 'お問い合わせ内容を入力してください。\n';
    }else {
      // エラーなし
      $('#message').css('background-color', '#fafafa');
    }
    
    // メールアドレスのチェック
   if ($('#email').val() == '' || $('#email').val().indexOf('@') == -1 || $('#email').val().indexOf('.') == -1) {
    // エラーあり
    $('#email').css('background-color', '#f79999');
    error = true;
    message += 'メールアドレスが未記入、または「@」「.」が含まれていません。\n';
  } else {
    // エラーなし
    $('#email').css('background-color', '#fafafa');
  }

  if ($('#tel').val() != '' && $('#tel').val().indexOf('-') == -1) {
    // エラーあり
    $('#tel').css('background-color', '#f79999');
    error = true;
    message += '電話番号に「-」が含まれていません。\n';
  } else {
    // エラーなし
    $('#tel').css('background-color', '#fafafa');
  }



      
         // 都道府県のチェック
         if ($('#prefecture').val() == '') {
          // エラーあり
          $('#prefecture').css('background-color', '#f79999');
          error = true;
          message += '都道府県を選択してください。\n';
        } else {
          // エラーなし
          $('#prefecture').css('background-color', '#fafafa');
        }
      
      
  

  // 個人情報のチェックボックスのチェック
  if($('#agree').prop('checked') == false) {
    error =true;
    message += '個人情報の取り扱いについてご同意いただける場合は、チェックボックスにチェックしてください。\n';
  }
  if(error == true){
    $('#submit').attr('src', 'images/button-submit.png');
   } else {
     $('#submit').attr('src', 'images/button-submit-blue.png');
   }
  // オブジェクトでエラー判定とメッセージを返す
  result = {
    error: error,
    message: message
  }

  // 戻り値としてエラーがあるかどうかを返す
  return result;

    }
});
