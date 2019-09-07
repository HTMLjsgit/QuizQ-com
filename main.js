(function(){
$(function(){
	'use strict';
	var p1;

	$('#pp').click(function(){
		$('#pp').fadeOut('slow');
		$('#html').text('HTML CSSはどんなものが作れるか').css('color' , 'red').fadeIn('slow');
		$('#html2').html('<button>1.　そうゆう歌</button>');
		$('#html3').html('<button>2.　webサイトの見た目をつくれる</button>');
		$('#html4').html('<button>3.　人工知能を作れる！</button>')
	
	});
	$('#html2').click(function(){
		$('#batu').text('不正解！　正解は２でした！').css('color', 'blue');
		$('#tugi1').html('<button>次に進む</button>');

	});
	$('#html3').click(function(){
		$('#batu').text('正解！ 正解は２でした！').css('color', 'blue');
		$('#tugi1').html('<button>次に進む</button>');
	});
	$('#html4').click(function(){
		$('#batu').text('不正解！　正解は２でした！').css('color', 'blue');
		$('#tugi1').html('<button>次に進む</button>');
	});
	$('#tugi1').click(function(){
		$('#html').fadeOut('slow');
		$('#html2').fadeOut('slow');
		$('#html3').fadeOut('slow');
		$('#html4').fadeOut('slow');
		$('#batu').fadeOut('slow');
		$('#tugi1').fadeOut('slow');
		$('#mondai2').text('javascriptとは？').css('color', 'red');
		$('#js').html('<button>1.　Webサイトに動きを付け加える言語</button>');
		$('#js2').html('<button>2.　そうゆうゲーム</button>');
		$('#js3').html('<button>3.　食べ物を作れる言語</button>');
		
	});
	$('#js').click(function(){
		$('#batu1').text('正解 正解は１でした！').css('color', 'blue');
		$('#tugi2').html('<button>次に進む</button>');
	});	
	$('#js2').click(function(){
		$('#batu1').text('不正解 正解は２でした！').css('color', 'blue');
		$('#tugi2').html('<button>次に進む</button>');

	});	
	$('#js3').click(function(){
		$('#batu1').text('不正解 正解は２でした！').css('color', 'blue');
		$('#tugi2').html('<button>次に進む</button>');
	});
	$('#tugi2').click(function(){
		$('#mondai2').fadeOut('slow');
		$('#js').fadeOut('slow');
		$('#js2').fadeOut('slow');
		$('#js3').fadeOut('slow');
		$('#batu1').fadeOut('slow');
		$('#tugi2').fadeOut('slow');
		$('#mondai3').text('HTML5で最初に書くべきコードは？').css('color', 'red');
		$('#htmlm1').html('<button>1.　!DOCTYPE html</button>');
		$('#htmlm2').html('<button>2.　document.getElementById("HTML")</button>');
		$('#htmlm3').html('<button>3.　html5 start</button>');
	});
	$('#htmlm1').click(function(){
		$('#batu2').text('正解！ 正解は１でした！').css('color', 'blue');
		$('#tugi3').html('<button>次へ進む</button>')
	});
	$('#htmlm2').click(function(){
		$('#batu2').text('不正解！ 正解は１でした！').css('color', 'blue');
		$('#tugi3').html('<button>次へ進む</button>')
	});
	$('#htmlm3').click(function(){
		$('#batu2').text('不正解！ 正解は１でした！').css('color', 'blue');
		$('#tugi3').html('<button>次へ進む</button>');
	});	
	$('#tugi3').click(function(){
		$('#mondai3').fadeOut('slow');
		$('#htmlm1').fadeOut('slow');
		$('#htmlm2').fadeOut('slow');
		$('#htmlm3').fadeOut('slow');
		$('#batu2').fadeOut('slow');
		$('#tugi3').fadeOut('slow');

		$('#mondai4').text('C言語のint main(void)は何の役割？').css('color', 'red');
		$('#js_1').html('<button>1.　便利に計算するうえで大切である</button>');
		$('#js_2').html('<button>2.　繰り返し文である</button>');
		$('#js_3').html('<button>3.　コンパイルや実行するときに必要</button>');
	});
	$('#js_1').click(function(){
		$('#batu3').text('不正解！正解は３でした！').css('color', 'blue');
		$('#tugi4').html('<button>次へ進む</button>');
	});
	$('#js_2').click(function(){
		$('#batu3').text('不正解！正解は３でした！').css('color', 'blue');
		$('#tugi4').html('<button>次へ進む</button>');
	});
	$('#js_3').click(function(){
		$('#batu3').text('正解！正解は３でした！').css('color', 'blue');
		$('#tugi4').html('<button>次へ進む</button>');
	});
	$('#tugi4').click(function(){
		$('#batu3').fadeOut('slow');
		$('#tugi4').fadeOut('slow');
		$('#js_1').fadeOut('slow');
		$('#js_2').fadeOut('slow');
		$('#js_3').fadeOut('slow');
		$('#mondai4').fadeOut('slow');
		$('#mondai5').text('ruby on railsとはなにか').css('color', 'red');
		$('#rails').html('<button>1.　rubyのフレームワーク</button>');
		$('#rails2').html('<button>2.　rubyggononpprailsというプログラミング言語を省略した言葉</button>');
		$('#rails3').html('<button>3.　PHPというプログラミング言語の進化系言語</button>');
	});
		$('#rails').click(function(){
			$('#batu4').text('正解！ 正解は１でした！').css('color' , 'blue');
			$('#tugi5').html('<button>次へ進む</button>');
		});
		$('#rails2').click(function(){
			$('#batu4').text('不正解！ 正解は１でした！').css('color', 'blue');
			$('#tugi5').html('<button>次へ進む</button>');
	});
		$('#rails3').click(function(){
			$('#batu4').text('不正解！ 正解は１でした！').css('color', 'blue');
			$('#tugi5').html('<button>次へ進む</button>');
		});
			$('#tugi5').click(function(){
				$('#batu4').fadeOut('slow');
				$('#tugi5').fadeOut('slow');
				$('#rails').fadeOut('slow');
				$('#rails2').fadeOut('slow');
				$('#rails3').fadeOut('slow');
				$('#mondai5').fadeOut('slow');
				$('#mondai6').text('げきむず(かも？)最終問題！(最後は三択ではありません)').css('color', 'red');
				$('#tikatika').html('<button>行くぞお！</button>');
				$('#mondai6').fadeOut('slow');
				$('#mondai6').fadeIn('slow');
				$('#mondai6').fadeOut('slow');
				$('#mondai6').fadeIn('slow');
			});

					$('#tikatika').click(function(){
						$('#mondai6').fadeOut('slow');
						$('#mondai7').text('javascriptのドキュメントゲットエレメントバイアイディーはどのようにかく？(大文字と小文字一文字も間違えずにかきなさい)').css('color', 'red');
						$('#text').css('display','flex');
						$('#tikatika').fadeOut('slow');
						$('#pp1').html('<button>決定</button>');
					});


						$('#pp1').click(function(){
							var p1 = document.getElementById('text').value;
							$('#mondai6').fadeOut('slow');

						if(p1 == "document.getElementById"){
						$('#p').text('正解！ナイスgood!').css('color', 'blue');
						$('#pp2').html('<button>おめでとう！！</button>');
					}else{
						$('#p').text('不正解！頑張って下さい').css('color', 'blue');
						
					}
					});	
					
					$('#pp2').click(function(){
						$('#mondai7').fadeOut('slow');
						$('#pp1').fadeOut('slow');
						$('#text').fadeOut('slow');
						$('#p').fadeOut('slow');
						$('#pp2').fadeOut('slow');
						$('#pp3').text('すごい！君は天才だ！').css('color','blue');
						$('#pp4').html('<P>↓もっと勉強したいと言う方々におすすめする生放送者！twitch　　にこなまどっちでも放送しています！<br>放送日は基本　月　水　金　日　です<br>僕の人生を変えてくれました。</P>').css('color', 'black');
						$('#nikonama').css('display', 'flex');
						$('#twitch').css('display', 'flex');
					});
			
				});
				}());
