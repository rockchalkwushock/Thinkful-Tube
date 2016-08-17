// Stack Overflow Functions

function showStackOverflow()
{
  $("#results").hide();
  $("#stackoverflow-results").on("click",
  function()
  {
    $("#stackoverflow").show();
    $("#stackoverflow-tab").show();
    $("#w3s").hide();
    $("#w3s-tab").hide();
    $("#jquery").hide();
    $("#jquery-tab").hide();
    $("#youtube").hide();
    $("#youtube-tab").hide();
    $("#w3s-results").removeClass("active");
    $("#jquery-results").removeClass("active");
    $("#youtube-results").removeClass("active");
    $("#stackoverflow-results").addClass("active");
  });
};

function stackoverflowApiCall(userSearchTerm)
{
  $.getJSON('',
      {
        part: 'snippet',
        maxResults: 10,
        key: 'AIzaSyCBhfcGXz-nQp2zFEHSdVKAb9lYd3d6WHs',                         // need to check if I need a key
        q: userSearchTerm,
        type: blog,
      },
          function(receivedApiData)
          {
            console.log(receivedApiData);
            if (receivedApiData.pageInfo.totalResults == 0)
            {
                alert('No results found.');
            }
            else
            {
                displayStackOverflowResults(receivedApiData.items);
            };
          });
};

function displayStackOverflowResults(videosArrayValue)
{
  var html = '';
  var i = 1;
  $.each(videosArray, function(videosArrayKey, videosArrayValue)
  {
    html += '<tr>';
    html += 'th' + i++ + '</th>';
    html += '<td>' + videosArrayValue.snippet.title + '</td>';
    html += '<td>' + videosArrayValue.snippet.channelTitle + '</td>';
    html += '<td>' + "<a href='https://www.youtube.com/watch?v=" + videosArrayValue.id.videoId + "'target='_blank'>" + "Play" + "</href>" + "</td>";
    html += '</tr>';
  });
  $('#results table #youtube').html(html);
};

// W3S Functions

function showW3S()
{
  $("#results").hide();
  $("#w3s-results").on("click",
  function()
  {
    $("#w3s").show();
    $("#w3s-tab").show();
    $("#stackoverflow").hide();
    $("#stackoverflow-tab").hide();
    $("#jquery").hide();
    $("#jquery-tab").hide();
    $("#youtube").hide();
    $("#youtube-tab").hide();
    $("#stackoverflow-results").removeClass("active");
    $("#jquery-results").removeClass("active");
    $("#youtube-results").removeClass("active");
    $("#w3s-results").addClass("active");
  });
};

// jQuery Functions

function showJquery()
{
  $("#results").hide();
  $("#jquery-results").on("click",
  function()
  {
    $("#jquery").show();
    $("#jquery-tab").show();
    $("#w3s").hide();
    $("#w3s-tab").hide();
    $("#stackoverflow").hide();
    $("#stackoverflow-tab").hide();
    $("#youtube").hide();
    $("#youtube-tab").hide();
    $("#w3s-results").removeClass("active");
    $("#stackoverflow-results").removeClass("active");
    $("#youtube-results").removeClass("active");
    $("#jquery-results").addClass("active");
  });
};




// YouTube Functions

function showYouTube()
{
  $("#results").hide();
  $("#youtube-results").on("click",
  function()
  {
    $("#youtube").show();
    $("#youtube-tab").show();
    $("#w3s").hide();
    $("#w3s-tab").hide();
    $("#jquery").hide();
    $("#jquery-tab").hide();
    $("#stackoverflow").hide();
    $("#stackoverflow-tab").hide();
    $("#w3s-results").removeClass("active");
    $("#jquery-results").removeClass("active");
    $("#stackoverflow-results").removeClass("active");
    $("#youtube-results").addClass("active");
  });
};

function youtubeApiCall(userSearchTerm)
{
  $.getJSON('https://www.googleapis.com/youtube/v3/search',
      {
        part: 'snippet',
        maxResults: 10,
        key: 'AIzaSyCBhfcGXz-nQp2zFEHSdVKAb9lYd3d6WHs',
        q: userSearchTerm,
        type: video,
      },
          function(receivedApiData)
          {
            console.log(receivedApiData);
            if (receivedApiData.pageInfo.totalResults == 0)
            {
                alert('No results found.');
            }
            else
            {
                displayYoutubeResults(receivedApiData.items);
            };
          });
};

function displayYoutubeResults(videosArrayValue)
{
  var html = '';
  var i = 1;
  $.each(videosArray, function(videosArrayKey, videosArrayValue)
  {
    html += '<tr>';
    html += 'th' + i++ + '</th>';
    html += '<td>' + videosArrayValue.snippet.title + '</td>';
    html += '<td>' + videosArrayValue.snippet.channelTitle + '</td>';
    html += '<td>' + "<a href='https://www.youtube.com/watch?v=" + videosArrayValue.id.videoId + "'target='_blank'>" + "Play" + "</href>" + "</td>";
    html += '</tr>';
  });
  $('#results table #youtube').html(html);
};
