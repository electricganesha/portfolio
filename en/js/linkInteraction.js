
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
  {id: 1, content: 'B.Sc. at Faculdade de Ciências da Universidade de Lisboa', start: '2003-09-01'},
  {id: 2, content: 'M.Sc. at Faculdade de Ciências da Universidade de Lisboa', start: '2007-09-01'},
  {id: 3, type:'point', content: 'Erasmus Programme at Universitat Politécnica de Catalunya', start: '2009-09-01', style:'background-color:black; color:white; border-radius: 25px; font-size:10px;'},
  {id: 4, content: 'Marsh & McLennan', start: '2008-03-01'},
  {id: 5, content: 'NAADIR Research Project', start: '2010-09-15'},
  {id: 6, content: 'Panic Plane', start: '2011-02-01'},
  {id: 7, content: 'Amadeus Payment Server', start: '2012-02-01'},
  {id: 8, content: 'Sabbatical / A Wandering Poem', start: '2015-02-01'},
  {id: 9, content: 'Co-Founder of PUSH::Interactive', start: '2015-11-01'},
  {id: 10, type:'point', content: 'Volunteered at VolNepal', start: '2015-06-01', style:'background-color:black; color:white; border-radius: 25px; font-size:10px;'},
  {id: 11, type:'point', content: 'Published Paper at CAAD Futures 13', start: '2013-06-03', style:'background-color:black; color:white; border-radius: 25px; font-size:10px;'},
  {id: 12, type:'point', content: 'Published Paper at Interação 2013', start: '2013-10-01', style:'background-color:black; color:white; border-radius: 25px; font-size:10px;'},
  {id: 13, type:'point', content: 'Live Media & FLOSS Workshop', start: '2012-01-12', style:'background-color:black; color:white; border-radius: 25px; font-size:10px;'},
  {id: 14, type:'point', content: 'Advanced C++ Concepts Course', start: '2012-06-22', style:'background-color:black; color:white; border-radius: 25px; font-size:10px;'},
  {id: 15, type:'point', content: 'Oracle Tuning Workshop', start: '2013-06-07', style:'background-color:black; color:white; border-radius: 25px; font-size:10px;'},
  {id: 16, type:'point', content: 'Advanced Python Course', start: '2014-03-03', style:'background-color:black; color:white; border-radius: 25px; font-size:10px;'},
  {id: 17, type:'point', content: 'First Publishing in an Anthology', start: '2016-10-23', style:'background-color:black; color:white; border-radius: 25px; font-size:10px;'},
  {id: 18, content: 'Chief Engineer at Plataforma Global', start: '2016-10-01'},
  {id: 19, type:'point', content: 'Speaker at Conference Creativity Rocks', start: '2016-10-14', style:'background-color:black; color:white; border-radius: 25px; font-size:10px;'},
  {id: 20, type:'point', content: 'Hipponaut at Global Game Jam 17', start: '2017-01-22', style:'background-color:black; color:white; border-radius: 25px; font-size:10px;'},
  {id: 21, type:'point', content: 'Speaker at Artec 27', start: '2017-04-21', style:'background-color:black; color:white; border-radius: 25px; font-size:10px;'},
  {id: 22, type:'point', content: 'Published "Um Poema Errante / A Wandering Poem"', start: '2017-06-03', style:'background-color:black; color:white; border-radius: 25px; font-size:10px;'},
]);


var timeAxis = {scale: 'month', step: 1};

if(detectmob())
{
  timeAxis = {};
}

// Configuration for the Timeline
var options = {
  height: '230px',
  timeAxis: timeAxis,
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
    $('#musicText').html("wolfboy is my most recent project. inspired by a heavy emotional state, and the music of simon & garfunkle, leonard cohen, nick drake, and more recently bon iver, i'm looking to create a singer/songwriter persona with smooth and pastoral folk songs that tell the self-biographic story of wolfboy, a feral kid trying to understand his feelings and his place in the world. in this project I play guitar, melodica, anglo-concertina and several midi instruments. I also try to sing. In late 2012 I got together with other musicians and we formed the band Wolfboy & The Pack, an extension of the wolfboy project. We have performed live several times in the Nice (France) indie scene.");
    $('#wolfboyLink').css("color","#FF1D8E");
    $('#musicImage').css("background-image","url('img/wolfboy.jpg')");
    $('#musicMedia').html('<object height="81" width="100%" id="yourPlayerId" classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000"><iframe width="100%" height="100%" scrolling="no" frameborder="no" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/playlists/253571939&amp;color=ff69b4&amp;auto_play=false&amp;hide_related=false&amp;show_comments=true&amp;show_user=true&amp;show_reposts=false"></iframe></object>');
    $('#musicLinks').html('<br><a href="https://wolfboymusic.bandcamp.com/">Wolfboy & The Pack @ Bandcamp</a><br><a href="https://wolfboymusic.bandcamp.com/album/the-clearing">Wolfboy & The Pack - The Clearing (Full Album)</a><br><a href="https://www.youtube.com/watch?v=CCKCGxvjoT4">Wolfboy & The Pack - Conference of The Wolves (Video)</a><br><a href="https://www.youtube.com/watch?v=9oyqCVOUXCI">Wolfboy & The Pack - Live @ CCM (Video)</a><br><a href="https://www.youtube.com/watch?v=58_ykjMdSSA">Wolfboy & The Pack - Living Room Concert (Video)</a>');
    break;
    case(2):
    cleanAllMusicLinks();
    $('#musicText').html("In July 2013, I worked with guitarist <a href='http://javiersalcedoblog.web44.net/'> Javier Salcedo</a> in a collaboration meant to give sound to the short animation movie of artist/animator <a href='http://www.sarafranco.net/'> Sara Franco</a>, JOE. This movie was her final project for the Vancouver Film School where she finished her animation major with honours. We composed this music based on Javier's composition for electric guitar, which was then re-arranged and harmonized with other instruments. The final song was called 'My Little Monster' and can be heard in the video on the right.");
    $('#joeLink').css("color","#FF1D8E");
    $('#musicImage').css("background-image","url('img/joe.jpg')");
    $('#musicMedia').html('<iframe src="https://player.vimeo.com/video/72568380" width="100%" height="100%" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>');
    $('#musicLinks').html('<br><a href="https://vimeo.com/72568380">JOE @ Vimeo</a><br><a href="https://sarafrancoanimation.com">Sara Franco\'s Official Website</a>');
    break;
    case(3):
    cleanAllMusicLinks();
    $('#musicText').html("motivated by my fascination about experimental music and sound, the altered states project arises from the curiosity and will to experiment. these are purely electro-acoustic experiments with noise, texture and moods, created with guitars, trumpet, percussion and software. for the first time, I use <a href='http://puredata.info/'> Pure Data</a>  to create some of the sounds and specially a PD patch called VirtualDroneLab for the drone. altered states takes its name from scientist <a href='http://en.wikipedia.org/wiki/John_C._Lilly'> John C.Lily</a> who experimented with hallucinogenic drugs in sensory deprivation tanks, and subsequently from the movie about him, with the same name. the science-fiction movie explores the consequence of physical de-evolution and regression from these sensorial deprivation experiments, and the concept for my project also explores the idea of regression, letting the improvisation transport me to primitive states of mind and ultimately discover a 'beast within'. the songs are named after genetic disorders.");
    $('#alteredLink').css("color","#FF1D8E");
    $('#musicImage').css("background-image","url('img/alteredstates.jpg')");
    $('#musicMedia').html('<iframe width="100%" height="100%" scrolling="yes" frameborder="no" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/playlists/1238214&amp;color=ff5500&amp;auto_play=false&amp;hide_related=false&amp;show_comments=true&amp;show_user=true&amp;show_reposts=false"></iframe>');
    $('#musicLinks').html('<br><a href="https://soundcloud.com/christianmarques/sets/altered-states">Altered States @ Soundcloud</a>');
    break;
    case(4):
    cleanAllMusicLinks();
    $('#musicText').html("the beauty of not breathing is my attempt at post-rock. as one of my favourite genres of music, I am obsessed with Mogwai, Sigur R&oacute;s, Explosions in the Sky and many others. I picked up my guitar and tried to create simple, absorbing environments, with emotional depth and oniric properties. apart from the musical references, i gathered inspiration in the ocean, as this has been a constant element in my life, and i reflected about its conceptual importance as a medium which is mildly unknown, mysterious, powerful and full of life. and still it soothes our anxiety, feeds our mind with beauty and poetry and induces respect. the beauty of not breathing is right now undergoing serious refactoring, all songs are being re-recorded, with Tiago Lopes working on the drums and Pedro Silva working on production. ");
    $('#tbonbLink').css("color","#FF1D8E");
    $('#musicImage').css("background-image","url('img/bonb.png')");
    $('#musicMedia').html('<iframe style="border: 0; width: 100%; height: 100%;" src="http://bandcamp.com/EmbeddedPlayer/album=3312607162/size=large/bgcol=ffffff/linkcol=f171a2/artwork=small/transparent=true/" seamless><a href="http://thebeautyofnotbreathing.bandcamp.com/album/the-beauty-of-not-breathing">the beauty of not breathing by The Beauty of Not Breathing</a></iframe>');
    $('#musicLinks').html('<br><a href="https://thebeautyofnotbreathing.bandcamp.com/album/the-beauty-of-not-breathing">The Beauty of Not Breathing @ Bandcamp </a>');
    break;
    case(5):
    cleanAllMusicLinks();
    $('#musicText').html("this project started as a consequence of <a href='http://en.wikipedia.org/wiki/Italo_Calvino'> Italo Calvino's</a> <a href='http://en.wikipedia.org/wiki/Invisible_Cities'> 'The Invisible Cities'</a> , as I became fascinated with Calvino's description of these imaginary cities. the focus of the project was to create an 'imaginary soundtrack' to Calvino's cities. inspired by modern classical composers as phillip glass, &auml;rvo paart, max richter or johan johanesson, i tried to create ambient soundscapes for each of Calvino's cities. I was later joined by artist Sara Franco, who reading the description of each city and listening to my music, created her graphical interpretations of each city.");
    $('#monolithLink').css("color","#FF1D8E");
    $('#musicImage').css("background-image","url('img/monolithlandscapes.jpg')");
    $('#musicMedia').html('<iframe style="border: 0; width: 100%; height: 100%;" src="http://bandcamp.com/EmbeddedPlayer/album=3827626579/size=large/bgcol=ffffff/linkcol=f171a2/artwork=small/transparent=true/" seamless><a href="http://monolithlandscapes.bandcamp.com/album/the-invisible-cities">The Invisible Cities by Monolith Landscapes</a></iframe>');
    $('#musicLinks').html('<br><a href="https://monolithlandscapes.bandcamp.com/album/the-invisible-cities">Monolith Landscapes @ Bandcamp </a>');
    break;
    case(6):
    cleanAllMusicLinks();
    $('#musicText').html("recycle! was a rock/ska band from lisbon, portugal, conceptualized by Rui Figueiredo (guitar) and Jo&atilde;o Wang (drums), which focused on effective and well-written songs to deliver a powerful live act. i joined the band on their live performances, playing the trumpet.");
    $('#recycleLink').css("color","#FF1D8E");
    $('#musicImage').css("background-image","url('img/recycle.jpg')");
    $('#musicMedia').html('<iframe width="100%" height="100%" src="https://www.youtube.com/embed/uQvIDViqvVo" frameborder="0" allowfullscreen></iframe>');
    $('#musicLinks').html('<br><a href="https://www.youtube.com/channel/UCWo4Hj9YCcJPGwoP_dWD8iA">Recycle @ Youtube</a>');
    break;
    case(7):
    cleanAllMusicLinks();
    $('#musicText').html("the four psicadelics was my first band. it started with a friends' jam session in the basement of one of the members, and soon turned into a jam band with lots of activity. we jammed several times, always recording our experimental/psychedelic/jam music, and becoming amazed with the funny and interesting results. in the final albums we invited other people to jam with us and released our low quality recordings to the general public on the internet. these were fun times. the four psicadelics were : me (guitar, synths), francisco gaspar (bass), jo&atilde;o wang (drums) and ricardo rodrigues (guitar, synths).");
    $('#t4pLink').css("color","#FF1D8E");
    $('#musicImage').css("background-image","url('img/4p.jpg')");
    $('#musicMedia').html('<iframe width="100%" height="100%" scrolling="yes" frameborder="no" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/playlists/1670815&amp;color=ff5500&amp;auto_play=false&amp;hide_related=false&amp;show_comments=true&amp;show_user=true&amp;show_reposts=false"></iframe>');
    $('#musicLinks').html('<br><a href="https://soundcloud.com/thefourpsicadelics">The Four Psicadelics - First 3 Albums</a><br><a href="https://soundcloud.com/thefourpsicadelics2">The Four Psicadelics - Last 3 Albums</a>');

    break;
    case(8):
    cleanAllMusicLinks();
    $('#musicText').html("photophobic gnome was my first project. it is experimental/dark ambient music, very amateurish, but with some good ideas. it was my first contact with improvisation/composition and I was just learning how to play the guitar and the keyboards. ");
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
      $('#poemText').html("<div id='poemSubText'> <br><br><h1> Opiarium </h1> <br><br> <p>From the little light that comes through the window,</p><p>I can tell dusk is coming.</p><br><br><p>The tiny sunbeams that traverse the smoke,</p><p>spread throughout the dark room,</p><p>transforming everything in gold, warm, hypnotic.</p><br><br><p>Horizontal and lifeless, I'm polluted with dreams.</p><br><br><p>The world collapses before my eyes,</p><p>geometry diverges,</p><p>and the kemençe and the saz that play outside,</p><p>seem to dissolve to each arabesque scale,</p><p>mystical melodies of fallen empires.</p><br><br><p>While time is stretching, elastic,</p><p>eternity coagulates.</p><br><br><p>In this infinite instant, where gods and demons</p><p>wage epic combats,</p><p>only you, occupy the inebriated mind,</p><p>with the sweetness of yore.</p><br><br><p>The floral odor which covers the room,</p><p>slowly transmutes into your fragrance,</p><p>and I start to confuse opium and desire,</p><p>entwined in the overwhelming dance of the senses.</p><br><br><p>The smoke that touches my face, reminds me of your hair,</p><p>black with white lines, and weaves in the air,</p><p>like the last time we were together,</p><p>and the wind turned your head into a black wave, soft smudge of night.</p><br><br><p>My understanding is challenged by a brief vision of your face,</p><p>that brutally breaks into a thousand pieces, shatters, explodes,</p><p>and in a whirlwind, patterns arise, ancient tapestries,</p><p>masonries, structures, colored fibers hugging each other.</p><br><br><p>Images of an orient that I do not know,</p><p>and I will never know, but that invade my concealed mind,</p><p>fascinate me, and make me fall in love, time and time again.</p><br><br><p>And you are always there, the shadow in the minaret,</p><p>the wind on the palmtree, the sand that gently hits my skin.</p><br><br><p>As gently as it may hit, time makes her uncomfortable,</p><p>the palmtree eventually dries,</p><p>and the shadow dissolves into the sunset, mixing with the dusk.</p><br><br><p>I no longer know who's hurting me, the opium, or you.</p><br><br><p>I wake up, the dream ceases, now comes the worst.</p><br><br></div>");
      $('#whitePage').css("background-color","white");
      $('#whitePage').css("margin-bottom","20px");
    break;
    case(3):
      $('#poemText').html("<div id='poemSubText'><br><br><h1>Immigrant</h1><br><br><p>Who is this shadow,</p><p>that I see reflected</p><p>in the infinite mirror of the seas,</p><p>transparent and lifeless,</p><p>that lets itself drift aimlessly,</p><p>without a true consistency?</p><br><br><p>Daughter of a thousand spices,</p><p>of desert sands, pagodas,</p><p>multicolored fruits,</p><p>incense naps,</p><p>of volatile saffron,</p><p>yellow, cyan, magenta,</p><p>mumbled tongues,</p><p>words imprisoned in the mystery,</p><p>of the everything and of the nothing.</p><br><br><p>All the mirrors in the world,</p><p>in all possible combinations of position,</p><p>wouldn't be enough to reflect a presence,</p><p>fragmented in such tiny reflections,</p><p>so different, that they could be universes by themselves.</p><br><br><p>Cultures, like paint, dissolve,</p><p>and dye dreams with blots.</p><p>identity, who are you,</p><p>behind the blurred scarf that covers your face?</p><br><br><p>You won't know for sure, neither you, nor me, nor anyone.</p><br><br><p>I break the reflection, i free myself from you, and I merge,</p><p>I am no longer thousands, but one, eternal.</p><br><br></div>");
      $('#whitePage').css("background-color","white");
      $('#whitePage').css("margin-bottom","20px");
    break;
    case(4):
      $('#poemText').html("<div id='poemSubText'><br><br><h1> Sparrow </h1><br><br><p>The tires spin gently</p><p>over the wet asphalt,</p><p>and I feel invaded by</p><p>an anachronism.</p><br><br><p>On the other side of the road,</p><p>workers stretch their arms up,</p><p>and a cloud of dark birds,</p><p>comes from behind,</p><p>as if invoked to contrast</p><p>with the melancholic autumn sky.</p><br><br><p>I hear synthesizers lost in time,</p><p>overlaps of undistinguishable, constant notes</p><p>ambiances that deny the realization of my own self,</p><p>at this instant, at this period, in this space.</p><br><br><p>The cloud of birds dispels,</p><p>and the movement of the workers proceeds,</p><p>in such a natural choreography,</p><p>that it could be a pagan ritual,</p><p>a tribute to nature,</p><p>an offering to the mother.</p><br><br><p>In other times, I have paid less attention to details,</p><p>but today, my eyes are cosmic lenses,</p><p>I am lucky,</p><p>the beauty of the mundane, invades me, once again.</p><br><br><p>And to the alien feelings, I offer no resistance,</p><p>I let myself go, in the dim and uniform wave,</p><p>lying on my back, sailing, like a caravel of sensory exploration.</p><br><br><p>Three reverbed piano notes play,</p><p>for some seconds,</p><p>and I find myself sitting on a park bench.</p><p>I don't know how much time has passed.</p><br><br><p>A few steps ahead, a sparrow stands in elegance,</p><p>and three more notes of piano play.</p><br><br><p>I sigh.</p><br><br></div>");
      $('#whitePage').css("background-color","white");
      $('#whitePage').css("margin-bottom","20px");
    break;
    case(5):
      $('#poemText').html("<div id='poemSubText'><br><br><h1> Subterfuge </h1><br><br><p>An empty room,</p><p>two chairs, face to face.</p><br><br><p>You and I, sitting.</p><br><br><p>This is our universe.</p><br><br><p>I want to measure the passing of time, and for that, I contemplate you.</p><br><br><p>Your black hair,</p><p>are ancient roots of the primordial tree,</p><p>slowly stretching, like tentacles,</p><p>wrapping your naked scalp,</p><p>and letting themselves fall, slowly,</p><p>over your shoulders,</p><p>in a cascade of darkness,</p><p>rite of nocturnal fire.</p><br><br><p>There is something in your eyes,</p><p>an occult mysticism,</p><p>a shamanic power,</p><p>an archaic force,</p><p>that enslaves me,</p><p>and voluntarily renders me at your feet,</p><p>shamefully subservient.</p><br><br><p>In the distance, I climb down your bare back,</p><p>endless desert, eternal sand,</p><p>where light reflects, refracts,</p><p>and with the heat that comes from your interior,</p><p>provokes the mirage that invites me,</p><p>to proceed through your golden skin.</p><br><br><p>In the horizon,</p><p>your humble breasts, fragile dunes,</p><p>constantly changing, incessant novelty,</p><p>adapting to my touch,</p><p>and to the subtle climate change,</p><p>to the drop of water,</p><p>to the fresh breeze,</p><p>to the panting breath.</p><br><br><p>Your womb, an oasis, lost,</p><p>in the insufficient immensity of the timeless sculpture that is your body.</p><p>in it, I satisfy my thirst, my lust,</p><p>my endless and primitive lasciviousness.</p><p>in it, I edify, stone by stone, my sacred temple,</p><p>the spark of my imaculate divinity.</p><br><br><p>Ah, your presence is laconic, what are my words worth ?</p><br><br><p>I ended up not measuring time.</p><br><br><p>To contemplate you, has become immeasurable, colossal, eternal.</p><br><br><p>What good is time, when we can not measure it ?</p><br><br></div>");
      $('#whitePage').css("background-color","white");
      $('#whitePage').css("margin-bottom","20px");
    break;
    case(6):
      $('#poemText').html("<div id='poemSubText'><br><br><h1> Leviathan </h1><br><br><p>I dreamt that my life</p><p>was the dream of a leviathan-god</p><p>in three parts.</p><br><br><p>In the first</p><p>my childhood unfolded</p><p>like a masquerade party</p><p>with unknown guests</p><p>fauns</p><p>grotesque faces</p><p>and colored skulls</p><p>in pagan dances</p><p>in circle</p><p>their chants</p><p>reminding of</p><p>lost traditions</p><p>and everything seemed extreme</p><p>extremely good</p><p>and extremely bad.</p><br><br><p>Then,</p><p>in the second,</p><p>the will to metamorphose</p><p>led me to travel the world</p><p>invisible cities</p><p>golden minarets</p><p>intoxicating spices</p><p>mysterious gods</p><p>and the insatiable desire</p><p>of devouring everything</p><p>an unstoppable gluttony</p><p>like an army of locusts</p><p>on the edge of the abyss.</p><br><br><p>In the third,</p><p>surrounded by hermetic philosophers</p><p>oracles, illusionists of knowledge</p><p>in alchemic rituals</p><p>searching for consolidation</p><p>for peace</p><p>for transcendency</p><p>to the deathbed</p><p>where, without having discovered anything</p><p>I still outlined a smile</p><p>and with it, the last breath of life.</p><br><br><p>I close my eyes at the same time</p><p>that the leviathan-god opens his</p><p>and for an instant I cease to be a dream</p><p>and become a fleeting memory</p><p>only to then disappear,</p><p>into eternity.</p><br><br></div>");
      $('#whitePage').css("background-color","white");
      $('#whitePage').css("margin-bottom","20px");
    break;
    case(7):
      $('#poemText').html("<div id='poemSubText'><br><br><h1> Cathedral </h1> <br><br><p>Under the dome,</p><p>the enormous stone cathedral,</p><p>puts us in place.</p><br><br><p>The dimensions and the cold that fill the empty space,</p><p>simulate a conceived cosmos,</p><p>where peace masks chaos,</p><p>and the fragile silence is interrupted,</p><p>ocasionally,</p><p>by the bass vibrations of a baritone monk.</p><br><br><p>He's alone, he dresses black,</p><p>and his gloomy chants,</p><p>mourn the disappearance of all the prophets,</p><p>that were, are and shall be,</p><p>rips of lucidity in the collective madness.</p><br><br><p>From this cathedral, one does not escape,</p><p>it is monolithic and infinite,</p><p>in it we are, us.</p><br><br><p>Darkness and cold, I fear you not.</p><br><br></div>");
      $('#whitePage').css("background-color","white");
      $('#whitePage').css("margin-bottom","20px");
    break;
    case(8):
      $('#poemText').html("<div id='poemSubText'><br><br><h1> Untitled </h1> <br><br><p>And, after all, it was not all about me,</p><p>but about all the other floating souls,</p><p>and that ubiquitous and pervasive mysticism,</p><p>that unifies the consciousness of being.</p><br><br><p>That transcendental monstrosity they call love.</p><br><br></div>");
      $('#whitePage').css("background-color","white");
      $('#whitePage').css("margin-bottom","20px");
    break;

  }
}

function detectmob() {
 if( navigator.userAgent.match(/Android/i)
 || navigator.userAgent.match(/webOS/i)
 || navigator.userAgent.match(/iPhone/i)
 || navigator.userAgent.match(/iPad/i)
 || navigator.userAgent.match(/iPod/i)
 || navigator.userAgent.match(/BlackBerry/i)
 || navigator.userAgent.match(/Windows Phone/i)
 ){
    return true;
  }
 else {
    return false;
  }
}
