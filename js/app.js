// ########################################
/*
*	Table of Contents
*	1)	Initialization of Variables
*	2)	Parent Function
*	3)	Child Functions
*			a) initLoad( )
*			b) welcome( )
*			c) youtubeApiCall( )
*			d) displayYoutubeResults( )
*			e) reset( )
*/

/*
      Unresolved Issues ()
      1)
*/


// ###########################################################
/* ---------- Initialization of Global Variables ---------- */
// ###########################################################


// ####################################################
/* ---------------- Parent Function ---------------- */
// ####################################################

$(document).ready(initLoad);

// ####################################################
/* ---------------- Child Functions ---------------- */
// ####################################################

/* ----------------- a) initLoad Function ---------------- */

function initLoad()                                                             // Runs the initial load of content to page.
{
	// console.log('page load');
	welcome(); 	                                                                  // Calls welcome function.
};

/* ----------------- b) welcome Function ---------------- */

function welcome()
{
  $("#results").hide();                                                         // Hide #results div.
  $("#youtube-results").on("click",                                             // When user clicks YouTube tab....
  function()
  {
    $("#youtube").show();                                                       // Show #youtube tbody.
    $("#youtube-tab").show();                                                   // Show #youtube-tab thead.
    // $("#stackoverflow").hide();                                              // Hide #stackoverflow tbody.
    // $("#stackoverflow-tab").hide();                                          // Hide #stackoverflow-tab thead.
    // $("#stackoverflow-results").removeClass("active");                       // Make StackOverflow Tab inactive to user's view.
    $("#youtube-results").addClass("active");                                   // Make YouTube Tab active to user's view.
  });
  // $("#stackoverflow-results").on("click",                                    // When user clicks StackOverflow tab....
  // function()
  // {
  //   $("#stackoverflow").show();                                              // Show #stackoverflow tbody.
  //   $("#stackoverflow-tab").show();                                          // Show #stackoverflow-tab thead.
  //   $("#youtube").hide();                                                    // Hide #youtube tbody.
  //   $("#youtube-tab").hide();                                                // Hide #youtube-tab thead.
  //   $("#youtube-results").removeClass("active");                             // Make YouTube Tab inactive to user's view.
  //   $("#stackoverflow-results").addClass("active");                          // Make StackOverflow Tab active to user's view.
  // });
  $(document).keypress(function(event)
  {
    if(event.which == 13)
    {
      event.preventDefault();
			reset();																																	// Reset display so search results don't append below prior results.
      var userInput = $("#query").val();																				// Take in user's search and store as userInput.
      console.log(userInput);
			$('#query').val('');
      if (userInput == 0)
      {
          alert('Please type a search term!');
      }
      else
      {
          youtubeApiCall(userInput);
          // stackOverFlowApiCall(userInput);
          $("#youtube").show();                                                 // Show #youtube tbody.
          // $("#stackoverflow").hide();                                        // Hide #stackoverflow tbody.
          // $("#stackoverflow-tab").hide();                                    // Hide #stackoverflow-tab thead.
      };
    };
  });
};

/* ----------------- c) youtubeApiCall Function ---------------- */

function youtubeApiCall(searchTerm)
{
  var params =																																	// Object that contains parameters for reading JSON.
  {
    part: "snippet",
    maxResults: 10,
    key: "AIzaSyCBhfcGXz-nQp2zFEHSdVKAb9lYd3d6WHs",
    q: searchTerm,
    type: "video"
  };
  console.log(searchTerm);
  url = 'https://www.googleapis.com/youtube/v3/search';

  $.getJSON(url, params,
    function(receivedApiData)
    {
      console.log(receivedApiData);
      if (receivedApiData.pageInfo.totalResults == 0)
      {
        alert("Not Found.");
      }
      else
      {
        displayYoutubeResults(receivedApiData.items);
      }
    });
};

/* ----------------- d) displayYoutubeResults Function ---------------- */

function displayYoutubeResults(videosArray)
{
	$("#results").show();
  var html = "";
  var i = 1;
  $.each(videosArray,
    function(videosArrayKey, videosArrayValue)
    {
			var tr = $('.template tr').clone();
			tr.find('.title').html(videosArrayValue.snippet.title);
			tr.find('.channel').html(videosArrayValue.snippet.channelTitle);
			tr.find('.link').attr('https://www.youtube.com/watch?v= + videosArrayValue.id.videoId + ');
      // console.log(videosArrayValue.snippet.title);
      // console.log(videosArrayValue.snippet.channelTitle);
      // console.log(videosArrayValue.id.videoId);
			$("#results table #youtube").append(tr);
    });
};

/* ----------------- e) reset Function ---------------- */

function reset()
{
	$('#results table #youtube').empty();
}
