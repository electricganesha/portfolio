
switchPoetryLink(1); //default poem

/* Link Interaction for Social Icons */
$( "#cvLink" ).mouseover(function() {
  $('#cvImg').attr('src','img/cvpink.png');
});
$( "#cvLink" ).mouseout(function() {
  $('#cvImg').attr('src','img/cv.png');
});

$( "#facebookLink" ).mouseover(function() {
  $('#facebookImg').attr('src','img/fbpink.png');
});
$( "#facebookLink" ).mouseout(function() {
  $('#facebookImg').attr('src','img/facebook.png');
});

$( "#linkedinLink" ).mouseover(function() {
  $('#linkedinImg').attr('src','img/linkedinpink.png');
});
$( "#linkedinLink" ).mouseout(function() {
  $('#linkedinImg').attr('src','img/linkedin.png');
});

$( "#youtubeLink" ).mouseover(function() {
  $('#youtubeImg').attr('src','img/youtubepink.png');
});
$( "#youtubeLink" ).mouseout(function() {
  $('#youtubeImg').attr('src','img/youtube.png');
});

$( "#soundcloudLink" ).mouseover(function() {
  $('#soundcloudImg').attr('src','img/soundcloudpink.png');
});
$( "#soundcloudLink" ).mouseout(function() {
  $('#soundcloudImg').attr('src','img/soundcloud.png');
});

$( "#bandcampLink" ).mouseover(function() {
  $('#bandcampImg').attr('src','img/bandcamppink.png');
});
$( "#bandcampLink" ).mouseout(function() {
  $('#bandcampImg').attr('src','img/bandcamp.png');
});

$( "#gitHubLink" ).mouseover(function() {
  $('#gitHubImg').attr('src','img/github_pink.png');
});
$( "#gitHubLink" ).mouseout(function() {
  $('#gitHubImg').attr('src','img/github.png');
});

$( "#instagramLink" ).mouseover(function() {
  $('#instagramImg').attr('src','img/instagrampink.png');
});
$( "#instagramLink" ).mouseout(function() {
  $('#instagramImg').attr('src','img/instagram.png');
});

/* Link Interaction for NavBar*/

$("#homeLink").mouseover(function() {
    $('#homeQuote').fadeIn('slow');
});
$("#homeLink").mouseout(function() {
    $('#homeQuote').fadeOut('slow');
});

$("#engineeringLink").mouseover(function() {
    $('#engineeringQuote').fadeIn('slow');
});
$("#engineeringLink").mouseout(function() {
    $('#engineeringQuote').fadeOut('slow');
});

$("#musicLink").mouseover(function() {
    $('#musicQuote').fadeIn('slow');
});
$("#musicLink").mouseout(function() {
    $('#musicQuote').fadeOut('slow');
});

$("#photographyLink").mouseover(function() {
    $('#photographyQuote').fadeIn('slow');
});
$("#photographyLink").mouseout(function() {
    $('#photographyQuote').fadeOut('slow');
});

$("#poetryLink").mouseover(function() {
    $('#poetryQuote').fadeIn('slow');
});
$("#poetryLink").mouseout(function() {
    $('#poetryQuote').fadeOut('slow');
});

$("#aboutLink").mouseover(function() {
    $('#aboutQuote').fadeIn('slow');
});
$("#aboutLink").mouseout(function() {
    $('#aboutQuote').fadeOut('slow');
});

$("#contactLink").mouseover(function() {
    $('#contactQuote').fadeIn('slow');
});
$("#contactLink").mouseout(function() {
    $('#contactQuote').fadeOut('slow');
});

var formSpreeVariable = "https://formspree.io/" + "christian"+"."+"marques"+"@"+"gmail"+"."+"com";

/* VIS Scripts */

// DOM element where the Timeline will be attached
var container = document.getElementById('visualization');

// Create a DataSet (allows two way data-binding)
var items = new vis.DataSet([
  {id: 1, content: 'B.Sc. na Faculdade de Ciências da Universidade de Lisboa', start: '2003-09-01'},
  {id: 2, content: 'M.Sc. na Faculdade de Ciências da Universidade de Lisboa', start: '2007-09-01'},
  {id: 3, type:'point', content: 'Programa Erasmus na Universitat Politécnica de Catalunya', start: '2009-09-01', style:'background-color:black; color:white; border-radius: 25px; font-size:10px;'},
  {id: 4, content: 'Marsh & McLennan', start: '2008-03-01'},
  {id: 5, content: 'Projecto de Investigação NAADIR', start: '2010-09-15'},
  {id: 6, content: 'Panic Plane', start: '2011-02-01'},
  {id: 7, content: 'Servidor de Pagamentos Amadeus', start: '2012-02-01'},
  {id: 8, content: 'Sabática / Um Poema Errante', start: '2015-02-01'},
  {id: 9, content: 'Co-Fundador da PUSH::Interactive', start: '2015-11-01'},
  {id: 10, type:'point', content: 'Voluntariado na VolNepal', start: '2015-06-01', style:'background-color:black; color:white; border-radius: 25px; font-size:10px;'},
  {id: 11, type:'point', content: 'Artigo Publicado na CAAD Futures 13', start: '2013-06-03', style:'background-color:black; color:white; border-radius: 25px; font-size:10px;'},
  {id: 12, type:'point', content: 'Artigo Publicado na Interação 2013', start: '2013-10-01', style:'background-color:black; color:white; border-radius: 25px; font-size:10px;'},
  {id: 13, type:'point', content: 'Worskshop Live Media & FLOSS', start: '2012-01-12', style:'background-color:black; color:white; border-radius: 25px; font-size:10px;'},
  {id: 14, type:'point', content: 'Curso de Conceitos Avançados C++', start: '2012-06-22', style:'background-color:black; color:white; border-radius: 25px; font-size:10px;'},
  {id: 15, type:'point', content: 'Workshop de Optimização Oracle', start: '2013-06-07', style:'background-color:black; color:white; border-radius: 25px; font-size:10px;'},
  {id: 16, type:'point', content: 'Curso Avançado de Python', start: '2014-03-03', style:'background-color:black; color:white; border-radius: 25px; font-size:10px;'},
  {id: 17, type:'point', content: 'Primeira Publicação em Antologia', start: '2016-10-23', style:'background-color:black; color:white; border-radius: 25px; font-size:10px;'},
  {id: 18, content: 'Engenheiro Sénior na Plataforma Global', start: '2016-10-01'},
  {id: 19, type:'point', content: 'Conferencista na Conferência Creativity Rocks', start: '2016-10-14', style:'background-color:black; color:white; border-radius: 25px; font-size:10px;'},
  {id: 20, type:'point', content: 'Hipponaut no Global Game Jam 17', start: '2017-01-22', style:'background-color:black; color:white; border-radius: 25px; font-size:10px;'},
  {id: 21, type:'point', content: 'Conferencista no Artec 27', start: '2017-04-21', style:'background-color:black; color:white; border-radius: 25px; font-size:10px;'},
  {id: 22, type:'point', content: 'Publicado "Um Poema Errante / A Wandering Poem"', start: '2017-06-03', style:'background-color:black; color:white; border-radius: 25px; font-size:10px;'},
]);

// Configuration for the Timeline
var options = {
  height: '230px',
  timeAxis: {scale: 'month', step: 1},
  margin: { item: 5  },
  start: '2012-04-01',
  stack: true,
  align: 'right',
  format: {
    minorLabels: {
    millisecond:'SSS',
    second:     's',
    minute:     'HH:mm',
    hour:       'HH:mm',
    weekday:    'ddd D',
    day:        'D',
    month:      '',
    year:       'YYYY'
  },}
};

// Create a Timeline
var timeline = new vis.Timeline(container, items, options);

timeline.on('select', function (properties) {

  switch(properties.items[0])
  {
    case(1):
      hideAllItemContainers(1);
    break;
    case(2):
      hideAllItemContainers(2);
    break;
    case(3):
      hideAllItemContainers(3);
    break;
    case(4):
      hideAllItemContainers(4);
    break;
    case(5):
      hideAllItemContainers(5);
    break;
    case(6):
      hideAllItemContainers(6);
    break;
    case(7):
      hideAllItemContainers(7);
    break;
    case(8):
      hideAllItemContainers(8);
    break;
    case(9):
      hideAllItemContainers(9);
    break;
    case(10):
      hideAllItemContainers(10);
    break;
    case(11):
      hideAllItemContainers(11);
    break;
    case(12):
      hideAllItemContainers(12);
    break;
    case(13):
      hideAllItemContainers(13);
    break;
    case(14):
      hideAllItemContainers(14);
    break;
    case(15):
      hideAllItemContainers(15);
    break;
    case(16):
      hideAllItemContainers(16);
    break;
    case(17):
      hideAllItemContainers(17);
    break;
    case(18):
      hideAllItemContainers(18);
    break;
    case(19):
      hideAllItemContainers(19);
    break;
    case(20):
      hideAllItemContainers(20);
    break;
    case(21):
      hideAllItemContainers(21);
    break;
    case(22):
      hideAllItemContainers(22);
    break;
    default:
    break;
  }

});

function hideAllItemContainers(id)
{
  $('#item1Container').fadeOut('slow');
  $('#item2Container').fadeOut('slow');
  $('#item3Container').fadeOut('slow');
  $('#item4Container').fadeOut('slow');
  $('#item5Container').fadeOut('slow');
  $('#item6Container').fadeOut('slow');
  $('#item7Container').fadeOut('slow');
  $('#item8Container').fadeOut('slow');
  $('#item9Container').fadeOut('slow');
  $('#item10Container').fadeOut('slow');
  $('#item11Container').fadeOut('slow');
  $('#item12Container').fadeOut('slow');
  $('#item13Container').fadeOut('slow');
  $('#item14Container').fadeOut('slow');
  $('#item15Container').fadeOut('slow');
  $('#item16Container').fadeOut('slow');
  $('#item17Container').fadeOut('slow');
  $('#item18Container').fadeOut('slow');
  $('#item19Container').fadeOut('slow');
  $('#item20Container').fadeOut('slow');
  $('#item21Container').fadeOut('slow');
  $('#item22Container').fadeOut('slow');

  setTimeout(function(){
    $('#item'+id+'Container').fadeIn('slow');

  }, 500);
}

function setupMusicLinks()
{
  cleanAllMusicLinks();
  $('#wolfboyLink').css("color","#FF1D8E");

  /*$('#wolfboyLink').hover(function(){
    $('#wolfboyLink').css("color","#FF1D8E");
  }, function(){
    $('#wolfboyLink').css("color","black");
  });

  $('#joeLink').hover(function(){
    $('#joeLink').css("color","#FF1D8E");
  }, function(){
    $('#joeLink').css("color","black");
  });

  $('#alteredLink').hover(function(){
    $('#alteredLink').css("color","#FF1D8E");
  }, function(){
    $('#alteredLink').css("color","black");
  });

  $('#tbonbLink').hover(function(){
    $('#tbonbLink').css("color","#FF1D8E");
  }, function(){
    $('#tbonbLink').css("color","black");
  });

  $('#monolithLink').hover(function(){
    $('#monolithLink').css("color","#FF1D8E");
  }, function(){
    $('#monolithLink').css("color","black");
  });

  $('#recycleLink').hover(function(){
    $('#recycleLink').css("color","#FF1D8E");
  }, function(){
    $('#recycleLink').css("color","black");
  });

  $('#t4pLink').hover(function(){
    $('#t4pLink').css("color","#FF1D8E");
  }, function(){
    $('#t4pLink').css("color","black");
  });

  $('#photophobicLink').hover(function(){
    $('#photophobicLink').css("color","#FF1D8E");
  }, function(){
    $('#photophobicLink').css("color","black");
  });*/
}

function switchMusicLink(id)
{
  switch(id)
  {
    case(1):
    cleanAllMusicLinks();
    $('#musicText').html("Wolfboy é o meu projecto mais recente. Inspirado por um estado emocional pesado, e pela música de Simon & Garfunkle, Leonard Cohen, Nick Drake, e mais recentemente Sufjan Stevens, procuro criar um alter-ego cantor/cantautor com canções folk suaves e pastorais que contam a história auto-biográfica de wolfboy, uma criança selvagem que tenta compreender os seus sentimentos e o seu lugar no mundo. Neste projecto toco guitarra, melódica, concertina inglesa e vários instrumentos midi. Também tento cantar. Nos finais de 2012 juntei-me a outros músicos e formámos a banda Wolfboy & The Pack, uma extensão do projecto Wolfboy. Fizemos várias performances ao vivo na cena musical independente de Nice (França).");
    $('#wolfboyLink').css("color","#FF1D8E");
    $('#musicImage').css("background-image","url('img/wolfboy.jpg')");
    $('#musicMedia').html('<object height="81" width="100%" id="yourPlayerId" classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000"><iframe width="100%" height="100%" scrolling="no" frameborder="no" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/playlists/253571939&amp;color=ff69b4&amp;auto_play=false&amp;hide_related=false&amp;show_comments=true&amp;show_user=true&amp;show_reposts=false"></iframe></object>');
    $('#musicLinks').html('<a href="https://wolfboymusic.bandcamp.com/">Wolfboy & The Pack @ Bandcamp</a><br><a href="https://wolfboymusic.bandcamp.com/album/the-clearing">Wolfboy & The Pack - The Clearing (Álbum Completo)</a><br><a href="https://www.youtube.com/watch?v=CCKCGxvjoT4">Wolfboy & The Pack - Conference of The Wolves (Video)</a><br><a href="https://www.youtube.com/watch?v=9oyqCVOUXCI">Wolfboy & The Pack - Live @ CCM (Video)</a><br><a href="https://www.youtube.com/watch?v=58_ykjMdSSA">Wolfboy & The Pack - Living Room Concert (Video)</a>');
    break;
    case(2):
    cleanAllMusicLinks();
    $('#musicText').html("Em Julho de 2013, trabalhei com o guitarrista <a href='http://javiersalcedoblog.web44.net/'> Javier Salcedo</a> numa colaboração com o objectivo de sonorizar a curta metragem de animação JOE da artista/animadora <a href='http://www.sarafranco.net/'> Sara Franco</a>. Este pequeno filme foi o seu projecto final para a Vancouver Film School onde se formou em animação clássica com distinção. Compusemos esta música baseando-nos na composição de Javier's para guitarra eléctrica, que foi posteriormente re-composta e harmonizada com outros instrumentos. A composição final foi apelidada 'My Little Monster' e pode ser ouvida no vídeo à direita.");
    $('#joeLink').css("color","#FF1D8E");
    $('#musicImage').css("background-image","url('img/joe.jpg')");
    $('#musicMedia').html('<iframe src="https://player.vimeo.com/video/72568380" width="100%" height="100%" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>');
    $('#musicLinks').html('<br><a href="https://vimeo.com/72568380">JOE @ Vimeo</a><br><a href="https://sarafrancoanimation.com">Página Oficial de Sara Franco</a>');
    break;
    case(3):
    cleanAllMusicLinks();
    $('#musicText').html("Motivado com meu fascínio pelo som e música experimental, o projecto 'Altered States' surge da curiosidade e vontade de experimentar. Estas composições são puramente experiências electro-acústicas com ruído, textura e ambientes, criadas com guitarras, trompete, percurssão e software. Pela primeira vez utilizei o <a href='http://puredata.info/'> Pure Data</a>  para criar alguns dos sons, especificamente um patch de Pure Data chamado VirtualDroneLab para os drones. 'Altered States' recebe o seu nome inspirado no cientista <a href='http://en.wikipedia.org/wiki/John_C._Lilly'> John C.Lily</a> que investigou drogas psicotrópicas em tanques de isolamento sensorial, e consequentemente no filme sobre ele, com o mesmo nome. O filme de ficção científica explora as consequências da retro-evolução fisíca e da regressão temporal causada por estas experiências, tal como o conceito deste projecto também explora a ideia de regressão, permitindo ao improviso transportar-me para estados mentais primitivos e em última instância descobrir uma 'besta interior'. As canções tomam os nomes de doenças genéticas. A canção 'The Clown is Dead' é uma colaboração com Pedro Silva. A canção 'Project DOR' resultou de uma jam-session improvisada em Yerevan, na Arménia, com Necrostillet (PT), Arash Azadi (Irão) e Anahita Gasemi (Irão).");
    $('#alteredLink').css("color","#FF1D8E");
    $('#musicImage').css("background-image","url('img/alteredstates.jpg')");
    $('#musicMedia').html('<iframe width="100%" height="100%" scrolling="yes" frameborder="no" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/playlists/1238214&amp;color=ff5500&amp;auto_play=false&amp;hide_related=false&amp;show_comments=true&amp;show_user=true&amp;show_reposts=false"></iframe>');
    $('#musicLinks').html('<br><a href="https://soundcloud.com/christianmarques/sets/altered-states">Altered States @ Soundcloud</a>');
    break;
    case(4):
    cleanAllMusicLinks();
    $('#musicText').html("'The Beauty of not Breathing é a minha tentativa de produzir pós-rock. Sendo um dos meus géneros musicais favoritos, sou apaixonado pela música de Mogwai, Sigur R&oacute;s, Explosions in the Sky e muitos outros. Através da minha guitarra tentei criar ambientes simples e envolventes, com profundidade emocional e propriedades oníricas. Aparte das referências musicais, inspirei-me também no oceano, tendo este sido um elemento constante na minha vida, obrigando-me a reflectir sobre a sua importância conceptual como um meio que é relativamente desconhecido, misterioso, poderoso e cheio de vida. Ainda assim, alivia a nossa ansiedade, alimenta a nossa mente com beleza e poesia e impõe respeito.");
    $('#tbonbLink').css("color","#FF1D8E");
    $('#musicImage').css("background-image","url('img/bonb.png')");
    $('#musicMedia').html('<iframe style="border: 0; width: 100%; height: 100%;" src="http://bandcamp.com/EmbeddedPlayer/album=3312607162/size=large/bgcol=ffffff/linkcol=f171a2/artwork=small/transparent=true/" seamless><a href="http://thebeautyofnotbreathing.bandcamp.com/album/the-beauty-of-not-breathing">the beauty of not breathing by The Beauty of Not Breathing</a></iframe>');
    $('#musicLinks').html('<br><a href="https://thebeautyofnotbreathing.bandcamp.com/album/the-beauty-of-not-breathing">The Beauty of Not Breathing @ Bandcamp </a>');
    break;
    case(5):
    cleanAllMusicLinks();
    $('#musicText').html("Este projecto começou como consequência da leitura de <a href='http://en.wikipedia.org/wiki/Italo_Calvino'> Italo Calvino's</a> <a href='http://en.wikipedia.org/wiki/Invisible_Cities'> 'As Cidades Invisivéis'</a>, tendo ficado deslumbrado com as descrições de Calvino destas cidades imaginárias. O foco do projecto era de criar uma 'banda sonora imaginária' para cada uma das cidades de Calvino. Inspirado por compositores de clássica contemporânea como Phillip Glass, &Auml;rvo Paart, Max Richter or Johan Johanesson, tentei criar paisagens sonoras ambientais para cada uma das cidades. Mais tarde, a artista Sara Franco ao ouvir as composições e ler a descrição de cada cidade, contribuíu para o project, criando as suas interpretações gráficas de cada cidade.");
    $('#monolithLink').css("color","#FF1D8E");
    $('#musicImage').css("background-image","url('img/monolithlandscapes.jpg')");
    $('#musicMedia').html('<iframe style="border: 0; width: 100%; height: 100%;" src="http://bandcamp.com/EmbeddedPlayer/album=3827626579/size=large/bgcol=ffffff/linkcol=f171a2/artwork=small/transparent=true/" seamless><a href="http://monolithlandscapes.bandcamp.com/album/the-invisible-cities">The Invisible Cities by Monolith Landscapes</a></iframe>');
    $('#musicLinks').html('<br><a href="https://monolithlandscapes.bandcamp.com/album/the-invisible-cities">Monolith Landscapes @ Bandcamp </a>');
    break;
    case(6):
    cleanAllMusicLinks();
    $('#musicText').html("Recycle! foi uma banda de ska/rock de Lisboa, conceptualizada por Rui Figueiredo (guitarra) e Jo&atilde;o Wang (bateria), que se focaram na escrita cuidada e eficiente de canções que pudessem gerar um poderoso concerto ao vivo. Juntei-me à banda nas suas actuações, tocando trompete.");
    $('#recycleLink').css("color","#FF1D8E");
    $('#musicImage').css("background-image","url('img/recycle.jpg')");
    $('#musicMedia').html('<iframe width="100%" height="100%" src="https://www.youtube.com/embed/uQvIDViqvVo" frameborder="0" allowfullscreen></iframe>');
    $('#musicLinks').html('<br><a href="https://www.youtube.com/channel/UCWo4Hj9YCcJPGwoP_dWD8iA">Recycle @ Youtube</a>');
    break;
    case(7):
    cleanAllMusicLinks();
    $('#musicText').html("'The Four Psicadelics' foi a minha primeira banda. Começou como uma jam session entre amigos na cave de um dos membros, e rapidamente se tornou numa banda de jam com muita actividade. Das várias jam sessions, resultaram várias gravações de música experimental/psicadélica/jam, que nos surpreenderam com o resultado cómico e interessante que geraram. Nos álbuns finais convidámos outra pessoas para colaborações e lançámos as nossas gravações de baixa fidelidade na internet. Foram sem dúvida momentos divertidos. 'The Four Psicadelics' foram : eu (guitarra, sintetizadores), Francisco Gaspar (baixo/guitarra), Jo&atilde;o Wang (bateria) e Ricardo Rodrigues (guitarra, sintetizadores).");
    $('#t4pLink').css("color","#FF1D8E");
    $('#musicImage').css("background-image","url('img/4p.jpg')");
    $('#musicMedia').html('<iframe width="100%" height="100%" scrolling="yes" frameborder="no" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/playlists/1670815&amp;color=ff5500&amp;auto_play=false&amp;hide_related=false&amp;show_comments=true&amp;show_user=true&amp;show_reposts=false"></iframe>');
    $('#musicLinks').html('<br><a href="https://soundcloud.com/thefourpsicadelics">The Four Psicadelics - Os Primeiros 3 Álbuns</a><br><a href="https://soundcloud.com/thefourpsicadelics2">The Four Psicadelics - Os Últimos 3 Álbuns</a>');

    break;
    case(8):
    cleanAllMusicLinks();
    $('#musicText').html("'Photophobic Gnome' foi o meu primeiro projecto. É música experimental/ambiente, muito amadora, com algumas boas ideias. Foi o meu primeiro contacto com composição/improvisação, que me permitiu começar a aprender a tocar guitarra e teclas. ");
    $('#photophobicLink').css("color","#FF1D8E");
    $('#musicImage').css("background-image","url('img/gnome.jpg')");
    $('#musicMedia').html('<iframe width="100%" height="100%" scrolling="yes" frameborder="no" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/playlists/259460607&amp;color=ff5500&amp;auto_play=false&amp;hide_related=false&amp;show_comments=true&amp;show_user=true&amp;show_reposts=false"></iframe>');
    $('#musicLinks').html('<br><a href="https://soundcloud.com/christianmarques/sets/photophobic-gnome">Photophobic Gnome @ Soundcloud</a>');
    break;
  }
}

function cleanAllMusicLinks()
{
  $('#wolfboyLink').css("color","black");
  $('#joeLink').css("color","black");
  $('#alteredLink').css("color","black");
  $('#tbonbLink').css("color","black");
  $('#monolithLink').css("color","black");
  $('#recycleLink').css("color","black");
  $('#t4pLink').css("color","black");
  $('#photophobicLink').css("color","black");
}


function switchPoetryLink(id)
{
  switch(id)
  {
    case(1):
      $('#poemText').html("<img width='100%' style='-webkit-box-shadow: 10px 1px 36px -12px rgba(0,0,0,0.75); -moz-box-shadow: 10px 1px 36px -12px rgba(0,0,0,0.75); box-shadow: 10px 1px 36px -12px rgba(0,0,0,0.75); margin-bottom:20px;' src='img/awp/acknowledgement.png'></img><img width='100%' style='-webkit-box-shadow: 10px 1px 36px -12px rgba(0,0,0,0.75); -moz-box-shadow: 10px 1px 36px -12px rgba(0,0,0,0.75); box-shadow: 10px 1px 36px -12px rgba(0,0,0,0.75); margin-bottom:20px;' src='img/awp/camionista.png'></img><img width='100%' style='-webkit-box-shadow: 10px 1px 36px -12px rgba(0,0,0,0.75); -moz-box-shadow: 10px 1px 36px -12px rgba(0,0,0,0.75); box-shadow: 10px 1px 36px -12px rgba(0,0,0,0.75); margin-bottom:20px;' src='img/awp/camionista-en.png'></img><img width='100%' style='-webkit-box-shadow: 10px 1px 36px -12px rgba(0,0,0,0.75); -moz-box-shadow: 10px 1px 36px -12px rgba(0,0,0,0.75); box-shadow: 10px 1px 36px -12px rgba(0,0,0,0.75); margin-bottom:20px;' src='img/awp/city.png'></img><img width='100%' style='-webkit-box-shadow: 10px 1px 36px -12px rgba(0,0,0,0.75); -moz-box-shadow: 10px 1px 36px -12px rgba(0,0,0,0.75); box-shadow: 10px 1px 36px -12px rgba(0,0,0,0.75); margin-bottom:20px;' src='img/awp/decomposicao.png'></img><img width='100%' style='-webkit-box-shadow: 10px 1px 36px -12px rgba(0,0,0,0.75); -moz-box-shadow: 10px 1px 36px -12px rgba(0,0,0,0.75); box-shadow: 10px 1px 36px -12px rgba(0,0,0,0.75); margin-bottom:20px;' src='img/awp/eppur.png'></img><img width='100%' style='-webkit-box-shadow: 10px 1px 36px -12px rgba(0,0,0,0.75); -moz-box-shadow: 10px 1px 36px -12px rgba(0,0,0,0.75); box-shadow: 10px 1px 36px -12px rgba(0,0,0,0.75); margin-bottom:20px;' src='img/awp/expresso.png'></img><img width='100%' style='-webkit-box-shadow: 10px 1px 36px -12px rgba(0,0,0,0.75); -moz-box-shadow: 10px 1px 36px -12px rgba(0,0,0,0.75); box-shadow: 10px 1px 36px -12px rgba(0,0,0,0.75); margin-bottom:20px;' src='img/awp/expresso-en.png'></img><img width='100%' style='-webkit-box-shadow: 10px 1px 36px -12px rgba(0,0,0,0.75); -moz-box-shadow: 10px 1px 36px -12px rgba(0,0,0,0.75); box-shadow: 10px 1px 36px -12px rgba(0,0,0,0.75); margin-bottom:20px;' src='img/awp/muchloved.png'></img><img width='100%' style='-webkit-box-shadow: 10px 1px 36px -12px rgba(0,0,0,0.75); -moz-box-shadow: 10px 1px 36px -12px rgba(0,0,0,0.75); box-shadow: 10px 1px 36px -12px rgba(0,0,0,0.75); margin-bottom:20px;' src='img/awp/petanque.png'></img><img width='100%' style='-webkit-box-shadow: 10px 1px 36px -12px rgba(0,0,0,0.75); -moz-box-shadow: 10px 1px 36px -12px rgba(0,0,0,0.75); box-shadow: 10px 1px 36px -12px rgba(0,0,0,0.75); margin-bottom:20px;' src='img/awp/petanque-en.png'></img><img width='100%' style='-webkit-box-shadow: 10px 1px 36px -12px rgba(0,0,0,0.75); -moz-box-shadow: 10px 1px 36px -12px rgba(0,0,0,0.75); box-shadow: 10px 1px 36px -12px rgba(0,0,0,0.75); margin-bottom:20px;' src='img/awp/shadows.png'></img><img width='100%' style='-webkit-box-shadow: 10px 1px 36px -12px rgba(0,0,0,0.75); -moz-box-shadow: 10px 1px 36px -12px rgba(0,0,0,0.75); box-shadow: 10px 1px 36px -12px rgba(0,0,0,0.75); margin-bottom:20px;' src='img/awp/sulphurbaths.png'></img><img width='100%' style='-webkit-box-shadow: 10px 1px 36px -12px rgba(0,0,0,0.75); -moz-box-shadow: 10px 1px 36px -12px rgba(0,0,0,0.75); box-shadow: 10px 1px 36px -12px rgba(0,0,0,0.75); margin-bottom:20px;' src='img/awp/sulphurbaths-en.png'></img><img width='100%' style='-webkit-box-shadow: 10px 1px 36px -12px rgba(0,0,0,0.75); -moz-box-shadow: 10px 1px 36px -12px rgba(0,0,0,0.75); box-shadow: 10px 1px 36px -12px rgba(0,0,0,0.75); margin-bottom:20px;' src='img/awp/veils.png'></img>");
      $('#whitePage').css("background-color","lightgrey");
      $('#whitePage').css("margin-bottom","0px");
    break;
    case(2):
      $('#poemText').html("<div style='padding-left:25px;'> <br><br><h1> Opiário </h1> <br><br> <p>Da pouca luz que entra pela pequena janela,</p><p>sei dizer que é fim-de-tarde.</p><br><br><p>Os minúsculos raios que atravessam o fumo </p><p>espalhado pela escura sala,</p><p>transformam tudo em dourado, quente, hipnótico.</p><br><br><p>Horizontalmente e inerte, poluo-me de sonhos.</p><br><br><p>O mundo colapsa perante os meus olhos,</p><p>a geometria diverge,</p><p>e o kemençe e o saz que tocam lá fora,</p><p>parecem desfazer-se a cada escala arabesca,</p><p>melodias místicas de impérios caídos.</p><br><br><p>Enquanto o tempo se estica, elástico, </p><p>a eternindade coagula. </p><br><br><p>Neste instante infinito, onde deuses e demónios</p><p>travam épicos combates,</p><p>apenas tu, me ocupas a ébria mente,</p><p>com a doçura de outrora.</p><br><br><p>O odor floral que cobre a sala,</p><p>lentamente se transmuta na tua fragrância,</p><p>e começo a confundir ópio e desejo,</p><p>entrelaçados na esmagadora dança dos sentidos.</p><br><br><p>O fumo que toca a minha cara, lembra-me os teus cabelos,</p><p>negros com linhas de branco, e serpenteia no ar,</p><p>como da ultima vez que estivemos juntos, </p><p>e o vento fazia da tua cabeça uma onda negra, borrão suave de noite.</p><br><br><p>A minha compreensão é desafiada com uma breve visão da tua cara,</p><p>que brutalmente se quebra em mil pedaços, estala, explode,</p><p>e num turbilhão, surgem padrões, antigas tapeçarias,</p><p>alvenarias, estruturas, fibras coloridas que se abraçam.</p><br><br><p>Imagens de um oriente que eu não conheço, </p><p>e nunca vou conhecer, mas que me invadem a mente oculta,</p><p>me fascinam, e me fazem apaixonar, vezes e vezes sem conta.</p><br><br><p>E tu estás sempre lá, a sombra no minarete,</p><p>o vento na palmeira, a areia que bate gentilmente na minha pele.</p><br><br><p>Por muito gentilmente que bata, o tempo torna-a incómoda,</p><p>a palmeira acaba por secar,</p><p>e a sombra dissolve-se no pôr-do-sol, misturando-se com o anoitecer.</p><br><br><p>Já não sei quem me faz mal, o ópio, ou tu.</p><br><br><p>Acordo, o sonho cessa, agora vem o pior.</p><br><br></div>");
      $('#whitePage').css("background-color","white");
      $('#whitePage').css("margin-bottom","20px");
    break;
    case(3):
      $('#poemText').html("<div style='padding-left:25px'><br><br><h1>Imigrante</h1><br><br><p>Quem é esta sombra,</p><p>que vejo reflectida</p><p>no infinito espelhado dos mares,</p><p>transparente e inerte,</p><p>que se deixa derivar sem rumo,</p><p>sem verdadeira consistência?</p><br><br><p>Filha de mil especiarias,</p><p>das areias desertas, pagodes,</p><p>frutos multi-coloridos,</p><p>sestas de incenso,</p><p>de volátil açafrão,</p><p>amarelo, cyan, magenta,</p><p>línguas balbuciadas,</p><p>palavras encarceradas no mistério,</p><p>do tudo e do nada.</p><br><br><p>Todos os espelhos do mundo,</p><p>em todas as possíveis combinações posicionados,</p><p>não seriviram para reflectir uma presença,</p><p>fragmentada em reflexos tão ínfimos,</p><p>tão diferentes, que poderiam ser universos por si só.</p><br><br><p>As culturas, como tintas, dissolvem-se,</p><p>e tingem os sonhos com borrões.</p><p>Identidade, quem és tu,</p><p>por trás do lenço desfocado que te cobre a cara?</p><br><br><p>Não saberás decerto, nem tu, nem eu, nem ninguém.</p><br><br><p>Quebro o reflexo, liberto-me de ti, e fundo-me,</p><p>já não sou milhares, mas apenas um, eterno.</p><br><br></div>");
      $('#whitePage').css("background-color","white");
      $('#whitePage').css("margin-bottom","20px");
    break;
    case(4):
      $('#poemText').html("<div style='padding-left:25px'><br><br><h1>O Pardal </h1><br><br><p>Os pneus rodam gentilmente,</p><p>sobre o asfalto molhado,</p><p>e sinto-me invadido por</p><p>um anacronismo.</p><br><br><p>Do outro lado da estrada,</p><p>trabalhadores esticam os braços para o céu,</p><p>e uma nuvem de pássaros negros,</p><p>surge por detrás,</p><p>como que invocados para contrastar</p><p>com o melancólico céu de outono.</p><br><br><p>Oiço sintetizadores perdidos no tempo,</p><p>sobreposições de notas indistinguíveis, constantes,</p><p>ambientes que negam a própria realização do meu ser,</p><p>neste instante, neste período, neste espaço.</p><br><br><p>A nuvem de pássaros dissipa,</p><p>e o movimento dos trabalhadores prossegue,</p><p>numa coreografia tão natural,</p><p>que poderia ser um ritual pagão,</p><p>um tributo à Natureza,</p><p>uma oferta à Mãe.</p><br><br><p>Já prestei menos atenção aos detalhes,</p><p>mas hoje, os meus olhos são lentes cósmicas,</p><p>Tenho sorte,</p><p>a beleza do mundano, invade-me, uma vez mais.</p><br><br><p>E aos sentimentos alienígenas, não resisto,</p><p>deixo-me ir, na onda indistinta e uniforme,</p><p>deitado de costas, navego, qual Caravela de exploração sensorial.</p><br><br><p>Tocam três notas de piano reverberadas,</p><p>durante alguns segundos,</p><p>e dou por mim sentado num banco de jardim,</p><p>sem saber quanto tempo passou.</p><br><br><p>A poucos passos, um pardal ergue-se elegante,</p><p>e mais três notas de piano tocam.</p><br><br><p>Suspiro.</p><br><br></div>");
      $('#whitePage').css("background-color","white");
      $('#whitePage').css("margin-bottom","20px");
    break;
    case(5):
      $('#poemText').html("<div style='padding-left:25px'><br><br><h1> Subterfúgio </h1><br><br><p>Um quarto vazio,</p><p>duas cadeiras, frente a frente.</p><br><br><p>Tu e eu, sentados.</p><br><br><p>Este é o nosso universo.</p><br><br><p>Quero medir a passagem do tempo, e para isso, contemplo-te.</p><br><br><p>Os teus cabelos negros,</p><p>são raízes ancestrais da árvore primordial,</p><p>que lentamente se esticam, como tentáculos,</p><p>envolvendo o teu escalpe nú,</p><p>e deixam-se cair, lentamente,</p><p>sobre os teus ombros,</p><p>numa cascata de escuridão,</p><p>ritual de fogo nocturno.</p><br><br><p>Há algo nos teus olhos,</p><p>um misticismo oculto,</p><p>um poder xamânico,</p><p>uma força antiga,</p><p>que me escraviza,</p><p>e me rende voluntariamente aos teus pés,</p><p>vergonhosamente servil.</p><br><br><p>À distância, desço pelas tuas costas nuas,</p><p>deserto sem fim, areia eterna,</p><p>onde a luz reflecte, refracta,</p><p>e com o calro que provém do teu interior,</p><p>provoca a miragem que me convida,</p><p>a seguir caminho através da tua pele dourada.</p><br><br><p>No horizonte,</p><p>os teus humildes seios, frágeis dunas,</p><p>em constante transformação, incessante novidade,</p><p>adaptando-se ao meu toque,</p><p>e às subtis mudanças de clima,</p><p>à gota de água,</p><p>à brisa fresca,</p><p>à respiração ofegante.</p><br><br><p>O teu ventre, oásis, perdido,</p><p>na imensidão insuficiente da escultura intemporal que é o teu corpo.</p><p>Nele, satisfaço a minha sede, a minha luxúria,</p><p>a minha lascívia interminável e primitiva.</p><p>Nele, edifico, pedra a pedra o meu templo sagrado,</p><p>a faísca da minha imaculada divindade.</p><br><br><p>Ah, a tua presença é lacónica, de que servem as minhas palavras ?</p><br><br><p>Acabei por não medir o tempo.</p><br><br><p>Contemplar-te, tornou-se imensurável, colossal, eterno.</p><br><br><p>De que serve o tempo, quando não o podemos medir ?</p><br><br></div>");
      $('#whitePage').css("background-color","white");
      $('#whitePage').css("margin-bottom","20px");
    break;
    case(6):
      $('#poemText').html("<div style='padding-left:25px'><br><br><h1> Leviatã </h1><br><br><p>﻿Sonhei que a minha vida</p><p>era o sonho de um deus-leviatã</p><p>em três partes.</p><br><br><p>Na primeira</p><p>a infância desenrolava-se</p><p>como uma festa de máscaras</p><p>com convidados desconhecidos</p><p>faunos</p><p>carantonhas grotescas</p><p>e caveiras coloridas</p><p>em danças pagãs</p><p>em círculo</p><p>os seus cânticos</p><p>lembravam</p><p>tradições perdidas</p><p>e tudo parecia extremo</p><p>extremamente bom</p><p>e extremamente mau.</p><br><br><p>Depois,</p><p>na segunda,</p><p>a vontade de metamorfose</p><p>levava-me a percorrer o mundo</p><p>cidades invisíveis</p><p>minaretes dourados</p><p>especiarias intoxicantes</p><p>deuses misteriosos</p><p>e o desejo insaciável</p><p>de devorar tudo</p><p>uma gula imparável</p><p>como um exército de gafanhotos</p><p>á beira do abismo.</p><br><br><p>Na terceira,</p><p>rodeado de filósofos do hermetismo</p><p>óraculos, ilusionistas do conhecimento</p><p>em rituais alquímicos</p><p>em busca da consolidação</p><p>da paz</p><p>de transcendência</p><p>até ao leito de morte</p><p>onde sem nada ter descoberto</p><p>ainda esboçava um sorriso</p><p>e com ele, o último fôlego de vida.</p><br><br><p>Fecho os olhos ao mesmo tempo </p><p>que o deus-leviatã abre os dele</p><p>e por momentos deixo de ser sonho</p><p>e passo a ser uma memória fugidia</p><p>para então desaparecer,</p><p>na eternidade.</p><br><br></div>");
      $('#whitePage').css("background-color","white");
      $('#whitePage').css("margin-bottom","20px");
    break;
    case(7):
      $('#poemText').html("<div style='padding-left:25px;'><br><br><h1> Catedral </h1> <br><br><p>Sob a cúpula,</p><p>a enorme catedral de pedra,</p><p>coloca-nos no lugar.</p><br><br><p>As dimensões e o frio que preenche o espaço vazio</p><p>simulam um cosmos concebido,</p><p>onde a paz mascara o caos,</p><p>e o frágil silêncio é interrompido,</p><p>ocasionalmente,</p><p>pelas vibrações graves de um monge barítono.</p><br><br><p>Está sozinho, veste negro, </p><p>e os seus cânticos soturnos,</p><p>lamentam o desaparecimento de todos os profetas,</p><p>que foram, são e hão de ser,</p><p>rasgos de lucidez na loucura colectiva.</p><br><br><p>Desta catedral não se escapa,</p><p>é monolítica e infinita,</p><p>nela somos, nós. </p><br><br><p>Escuro e frio, não vos temo.</p><br><br></div>");
      $('#whitePage').css("background-color","white");
      $('#whitePage').css("margin-bottom","20px");
    break;
    case(8):
      $('#poemText').html("<div style='padding-left:25px;'><br><br><h1> Sem-Título </h1> <br><br><p>E, afinal, não era tudo sobre mim,</p><p>mas sim, sobre todas as outras almas flutuantes,</p><p>e esse misticismo ubíquo e pervasivo,</p><p>que unifica a consciência de ser.</p><br><br><p>Essa monstruosidade transcendental a que chamam amor.</p><br><br></div>");
      $('#whitePage').css("background-color","white");
      $('#whitePage').css("margin-bottom","20px");
    break;

  }
}
