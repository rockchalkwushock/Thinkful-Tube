
$(document).ready();

$('#search-form').submit(function(event)
{
  event.preventDefault();
  var userInput = $('#query').val();                //variable
  if (userInput == 0)
  {
    alert('Please type something to search.');
  }
  else
  {
      function(userInput);                          // function to call whatever
  };
});

function youtubeApiCall(userSearchTerm)
{
  $.getJSON('https://www.googleapis.com/youtube/v3/search',
      {
        part: 'snippet',
        maxResults: 20,
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
}

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
}
