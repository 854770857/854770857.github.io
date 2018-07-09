/*
 * Magazine sample
*/
var randomArr = [
    '人工智能和生物科技，正让人类拥有重塑和重新设计生命的能力。',
    '恐怖分子是控制人心的大师。他们就像一只想要大闹瓷器店的苍蝇。苍蝇力气这么小，连只茶杯都动不了，该怎样才能做到？最好就是找头公牛，飞进它的耳朵嗡嗡作响，让公牛因恐惧和愤怒而发狂，在瓷器店里横冲直撞。——世界上像这样容易发怒的公牛实在不少',
    '恐怖分子所做的任何事都不可能打败我们。唯一可能打败我们的，就是我们自己因为恐怖主义的挑衅而过度反应。 如；如果我们把自己的想象力从恐怖份子手中救出来、并以安定冷静的态度来面对恐惧，恐怖主义就会失败',
    '恐慌其实是一种傲慢，是自以为完全知道世界正在走向毁灭；困惑则是比较谦逊的态度，也就能看得比较清楚。如果你现在觉得想跑到大街上大喊：“世界末日来了！”那么你要告诉自己：“不，不是这样。我其实只是不知道世界究竟发生了什么事而已。”',
    '在那个属于征服者的伟大年代，战争是一种低损害、高利润的事业。然而，21世纪很难再重现这样的盛况。现在，核战和网络战是高损害、低利润的科技。这些工具虽然能让你摧毁整个国家，但自己却无利可图。',
    '人类与其想赢过AI，不如把重点放在AI的维修和运用。2050年的就业市场特色很可能在于人类与AI的合作、而非竞争。',
    '不远的未来，我们可能两面不讨好：一方面许多人找不到工作，另一方面也有许多雇主找不到有技能的雇员。这有点儿像19 世纪汽车取代马车时的情景，当时有许多马车夫转为出租车司机——只是我们可能不是那些马车夫，而是被淘汰的马。',
    '所有的公投和选举，永远诉诸的是人类的“感觉”，而不是人类的理性。也就是说，重点并不在于我们怎么“想”，而是在于我们怎么“感觉”。',
    '过去，神的权威是靠宗教神话建立的，人的权威是靠自由主义这套故事建立的。至于即将到来的技术革命，则可能建立起大数据算法的权威，同时完全推翻关于个人自由的信念。',
    '随着权威从人类转向算法，整个宇宙可能就将变成一个数据流，人类的任务则是打造一套数据处理系统，然后与系统融为一体。其实，我们现在就已经像一个又一个小小的芯片，装在一个大到没有人真正理解的数据处理系统之中。',
    '我们是该害怕机器人，但原因是在于它们永远只会服从主人、绝不反抗。——机器人真正的问题不在于它们的人工智能，而在于它们的人类主人天生的愚蠢和残酷。',
    '实际上，并没有理由相信人工智能会获得意识，因为智能和意识是天差地别的两种概念。如果我们太注重发展AI、但又太不注意发展人类的意识，那么计算机有了极先进的人工智能之后，可能只会把人类的“自然愚蠢”更加增强。',
    '数据龙头企业真正的目标其实远超过以往的注意力商人，他们真正的业务不是销售广告，而是靠着吸引我们的注意力，取得了大量关于我们的资料；这些资料远比任何广告收入都更有价值。我们不是他们的顾客，而是产品。',
    '只要取得足够的数据和运算能力，数据龙头企业就能破解生命最深层的秘密，不仅能够为我们做选择或操纵我们，甚至可能重新设计生物或无机的生命形式。',
    '就算你还没想清楚怎么用某批数据来赚钱，最好也先有了再说，因为这可能就是控制和塑造未来生活的关键。',
    '该由谁拥有数据数据？关于我的DNA、我的大脑和我的生命，这些数据数据到底是属于我、属于政府、属于企业、或是属于人类全体？该如何规范数据的所有权？这可能是这个时代最重要的政治问题。',
    '脸书致力于“持续改进我们的工具，让您能够分享您的体验。”但我们真正需要的，可能是好好感受一下自己的体验。',
    '人类一旦与身体、感官和真实环境愈来愈疏离，很可能就会感觉孤单、迷失方向。很多权威评论人会把这种疏离感归咎于宗教和国家的凝聚力式微，但或许其实和你的身体失去联系是个更重要的原因。',
    '完全放弃国际组织，退回到国族主义强权政治，会是一种不负责任的赌博行为。',
    '如果说整套现代经济就像一栋大楼，宗教对它唯一的改变大概就是重新油漆，再在屋顶加个大大的十字架、新月、戴维之星或「唵」的标志。',
    '许多宗教都一边赞颂谦逊，一边却也想象自己是全宇宙最重要的东西；一边要求着个人要谦和，一边又展现出集体的傲慢。不论任何信仰的人，如果能更认真思考「谦逊」的概念，都能获益良多。',
    '如果你相信是有某种超越一切的力量、会揭示出绝对的真理，就无法允许自己承认任何错误，因为这会让你所相信的整套故事轰然倾颓。然而，如果你相信一切就是充满缺点的人类试着想要追寻真相，就能够坦然承认过程中可能失误。',
    '人类很少真的自己思考，而是以群体为单位来思考。虽然每个人其实懂得很少，但我们以为自己懂得很多，而原因就在于我们把存在于他人脑中的知识也看做自己的知识。',
    '巨大的权力就像一个黑洞，会让周遭的空间扭曲，而且愈接近、扭曲程度就愈大。如果你真的想要真相，就需要逃出权力这个黑洞，允许自己浪费许多时间在其周边四处游荡。',
    '我们生活在一个可怕的后真相时代；会被伪造的不只是某些特定的事件，就连整个历史和国家都可能被伪造。事实上，人类一直活在后真相的时代。智人就是一种后真相的物种，创造并相信虚构故事的能力越高、就越能发挥更多的能力。智人从来就不是那么在意真相。人类合作的力量取决于真相与虚构之间的微妙平衡。',
    '如果只有1000个人，相信某个编造的故事，相信一个月，这是假新闻；但如果是10亿人，相信某个编造的故事、相信1000年，这就成了宗教信仰。',
    '无论好坏，虚构故事都是人类威力最强大的一项工具。',
    '如果你都是免费得到信息，有可能你才是整个商业行为里的产品。假设有个神秘的亿万富翁向你提议“我每个月给你30 美元，而你要让我每天给你洗脑一小时，在你心中放进我想放的各种政治和商业偏见”，有理智的人大概都会拒绝。但这个神秘的亿万富翁稍微改了一下提议：“你让我每天给你洗脑一小时，而我为你提供的这项服务完全免费！”忽然之间，全球就有几亿人觉得这真是个好主意了。',
    '“真实”本身就是一种虚幻。人类害怕被困在一个盒子里，但没意识到自己早就被困在一个盒子里（也就是人类的大脑），而且这个盒子外面还有一个更大的盒子，也就是人类社会，充满各种虚构的故事。你逃离了母体，来到了一个更大的母体。',
    '21世纪，我们被大量的信息淹没。这时，老师最不需要教给学生的，就是更多的信息。学生需要的是能够理解信息、判断哪些信息才重要，而且最重要的是能够结合这点点滴滴的信息，组成一个整体的世界观。',
    '不要太依赖大人。多数的大人都是一片好意，但他们就是不懂现在这个世界了。在过去，“听大人的话”会是个相对安全的选项，因为在当时，他们确实懂那个世界，而且世界的变化并不快。但21世纪不一样。变化的脚步愈来愈快，你永远无法知道，大人告诉你的到底是永恒的智慧、还是过时的偏见。',
    '其实我们并不了解自己，打算倾听自己内心的声音的时候，很容易遭到外部的操纵。我们脑中的那些声音绝不值得信赖，因为这些声音反映的总是国家的政治宣传、意识型态的洗脑手段、商业广告的殷殷召唤，更别提人体生化机制本来就有缺陷。',
    '随着生物技术和机器学习不断进步，要操纵人类最深层的情绪和欲望只会变得更简单，于是“跟着你的心走”就会越来越危险。'
]
function setArrows() {	
	/*var width = $(window).width();

	//alert("chushihua"+width);		
	var height = $(window).height();
	var bookWidth = $(".magazine").width();
	var bookHeight = $(".magazine").height();
	//alert("chushihua"+bookWidth);		
	var arrowSize = $(".next-button").width();
	//alert(arrowSize);
   alert($(".magazine").offset().left+"\n"+$('.next-button').offset().left);

	var LeftArrowLeft = - ( width - bookWidth ) / 4 + 'px' ;
	//alert(LeftArrowLeft);
	var RightArrowLeft = - ( width - bookWidth+ arrowSize*2) / 4 + 'px' ;
	//alert(RightArrowLeft); 
	//alert(RightArrowLeft);
		//alert("zhihou"+bookWidth);	
		
	$('.next-button').css( "right",RightArrowLeft );
	$('.previous-button').css( "left", LeftArrowLeft );*/
	setTimeout(function(){
	var width = $(window).width();
	var bookWidth = $(".magazine").width();
	var arrowSize = $(".next-button").width();
	var magaLeft=$(".magazine").offset().left;
	var nextLeft= (width-bookWidth-magaLeft-60)/2;
	//alert("width "+width +"\nbookWidth :"+bookWidth +"\nmagaLeft:"+magaLeft+"\nnextLeft:"+nextLeft);
	$('.next-button').animate({ "right":nextLeft},300);
	
	$('.previous-button').animate({ "left":nextLeft},300);
	},100);

		 	
		
}




function addPage(page, book) {
    var id, pages = book.turn('pages');

    // Create a new element for this page
    var element = $('<div />', {}),
        text = randomArr[Math.floor(Math.random() * 33)];

    // Add the page to the flipbook
    if (book.turn('addPage', element, page) && page > 1) {
        // Add the initial HTML
        // It will contain a loader indicator and a gradient
        element.html(`<div class="gradient"><p>${text}</p><span class="page-number">${page}</span></div>`);
        // Load the page
        // loadPage(page, element);
    }

}

/* function loadPage(page, pageElement) {
    // $.ajax({ url: 'pages/page' + page + '.html' }).
    $.ajax({ url: 'pages/page2.html'}).
    done(function (pageHtml) {
        pageElement.append(`${pageHtml}<span class="page-number">${page}</span>`)
    });
} */



// Load large page
function loadLargePage(page, pageElement) {

    var img = $('<img />');

    img.load(function() {

        var prevImg = pageElement.find('img');
        $(this).css({
            width: '100%',
            height: '100%'
        });
        $(this).appendTo(pageElement);
        prevImg.remove();

    });

    // Loadnew page
    img.attr('src', 'pages/' + page + '-large.png');
}

// Load small page
function loadSmallPage(page, pageElement) {

    var img = pageElement.find('img');

    img.css({
        width: '100%',
        height: '100%'
    });

    img.unbind('load');
    // Loadnew page
    img.attr('src', 'pages/' + page + '.png');
}

// http://code.google.com/p/chromium/issues/detail?id=128488
function isChrome() {

    return navigator.userAgent.indexOf('Chrome') != -1;

}

// Set the width and height for the viewport
function resizeViewport() {

    var width = $(window).width(),
    height = $(window).height(),
    options = $('.magazine').turn('options');

    $('.magazine').removeClass('animated');

    $('.magazine-viewport').css({
        width: width,
        height: height
    }).zoom('resize');
    setArrows() ;

    if ($('.magazine').turn('zoom') == 1) {
        var bound = calculateBound({
            width: options.width,
            height: options.height,
            boundWidth: Math.min(options.width, width),
            boundHeight: Math.min(options.height, height)
        });

        if (bound.width % 2 !== 0) bound.width -= 1;

        if (bound.width != $('.magazine').width() || bound.height != $('.magazine').height()) {

            $('.magazine').turn('size', bound.width, bound.height);

            if ($('.magazine').turn('page') == 1) $('.magazine').turn('peel', 'br'); 
            

        }

        $('.magazine').css({
            top: -bound.height / 2,
            left: -bound.width / 2
        });
    }

    var magazineOffset = $('.magazine').offset(),
    boundH = height - magazineOffset.top - $('.magazine').height(),
    marginTop = (boundH - $('.thumbnails > div').height()) / 2;

    if (marginTop < 0) {
        $('.thumbnails').css({
            height: 1
        });
    } else {
        $('.thumbnails').css({
            height: boundH
        });
        $('.thumbnails > div').css({
            marginTop: marginTop
        });
    }

    if (magazineOffset.top < $('.made').height()) $('.made').hide();
    else $('.made').show();

    $('.magazine').addClass('animated');

}

// Number of views in a flipbook
function numberOfViews(book) {
    return book.turn('pages') / 2 + 1;
}

// Current view in a flipbook
function getViewNumber(book, page) {
    return parseInt((page || book.turn('page')) / 2 + 1, 10);
}

// Width of the flipbook when zoomed in
function largeMagazineWidth() {
    return 2214;
}

// decode URL Parameters
function decodeParams(data) {
    var parts = data.split('&'),
    d,
    obj = {};
    for (var i = 0; i < parts.length; i++) {
        d = parts[i].split('=');
        obj[decodeURIComponent(d[0])] = decodeURIComponent(d[1]);
    }
    return obj;
}

// Calculate the width and height of a square within another square
function calculateBound(d) {
    var bound = {
        width: d.width,
        height: d.height
    };
    if (bound.width > d.boundWidth || bound.height > d.boundHeight) {
        var rel = bound.width / bound.height;
        if (d.boundWidth / rel > d.boundHeight && d.boundHeight * rel <= d.boundWidth) {
            bound.width = Math.round(d.boundHeight * rel);
            bound.height = d.boundHeight;
        } else {
            bound.width = d.boundWidth;
            bound.height = Math.round(d.boundWidth / rel);
        }
    }
    return bound;
}