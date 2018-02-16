$(document).ready(function() {

// Filling in the tags by ajax by getting info from JsON
  $.ajax({

    /**
      Getting the json file
    */
    type: "GET",
    url: "TwitterTweets17.json",
    dataType: "json",

    /**
      if the file's successfully read fill in the html with all tweets
    */
    success: function(responseData, status){

      /**
        putting all the tweets
      */
      var output = "<ul>";
      $.each(responseData, function(i, item) {
        if (item.entities) 
        {
          for (var j = 0; j < item.entities.hashtags.length; j++)
          {
            output += '<li><div>';
            output += item.entities.hashtags[j].text;
            output += '</div></li>';
          }
        }
      });
      output += "</ul>";
      $('#tags').html(output);

    }, error: function(msg) {
            // there was a problem alert this
      alert("There was a problem: " + msg.status + " " + msg.statusText);
    }
  });

// Filling in the tweets by ajax by getting info from JsON
  $.ajax({

    /**
      Getting the json file
    */
    type: "GET",
    url: "TwitterTweets17.json",
    dataType: "json",

    /**
      if the file's successfully read fill in the html with all tweets
    */
    success: function(responseData, status){

      /**
        putting all the tweets
      */
      var output = "<ul>";
      $.each(responseData, function(i, item) {
        output += '<li><div>';
        if (item.user) 
        {
          output +='<img src="';
          output += item.user.profile_background_image_url;
          output += '"alt="">';
          output += item.user.name;
          output += ': <br/>';
        }
        output += item.text;

        output += '</div></li>';
      });
      output += "</ul>";
      $('#tweets').html(output);

    }, error: function(msg) {
            // there was a problem alert this
      alert("There was a problem: " + msg.status + " " + msg.statusText);
    }
  });
});

// Callinng ticker functions to scroll tags and tweetss
$(function(){
  $('#tags').vTicker({ 
    speed: 500,
    pause: 3000,
    animation: 'fade',
    mousePause: false,
    showItems: 5
  });
});
$(function(){
  $('#tweets').vTicker({ 
    speed: 500,
    pause: 3000,
    animation: 'fade',
    mousePause: false,
    showItems: 5
  });
});

