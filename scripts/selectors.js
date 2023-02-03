console.log('selector.js loaded')

function highliting(element){
    element.css("background-color","#fcf30040")
}

function cssSelectors() {
    //all paragraph
  $('p').css('background-colour', '#2a9d8f');
  
  
    $('.red-box').css('background-colour', '#2a9d8f')

   // $('#list').css('background-colour', '#2a9d8f')

    $('h1, h2').css('background-color', '#3a86ff');

    $('li:even').css('background-color', 'red');

}

function traversingTheDOM(){
    // $('#list').find('li').css('background-color', '#3a86ff');

    //all parents of the ul
//     $('#list').parants('body').css('background-color', '#3a86ff')
// }
//     $('#list').parants('div').css('font-size', '20px')

    $('#list').prev().css('background-color', '#3a86ff');
    
    $('#list').next().css('background-color', '#3a86ff');
    $('#list').prev().next().css('background-color', '#3a86ff')
}

function filtering(){
    //$('#list').find('li').filter(':even').css('background-color', '#3a86ff')

    // $('#list').filter(function(index){
    //     return index % 3 === 0;

    // }).css('background-color','#219ebc')

    let items = $('#list').find('li');
    highliting(items);

}

function addingReplaceRemoving() {
    $('ul ul:first').append($("<li>I'm going to be the last item.</li>"))

    $("<li>Now I'm going to be the last item!</li>").appendTo("ul ul:first");

    $('ul ul:first').prepend("<li>I'm going to be the first child</li>");

    $("<li>Now I'm first!!</li>").prependTo("ul ul:first");

    $('.red-box').before("<div class='red-box'>Another red-box!</div> ");

    let text1 = "last night, Darth Vader came down from planet Vulcan."

    $('li').replaceWith(`<li>${text1}</li>`);

    // replace all
    $("<div class='green-box'> Green Box!!</div>").replaceAll('.red-box');

      // remove
    $('li').remove();
  
      // detaching use in the VERY LESS CASE IT IS UNSAFE TO USE
    let detachedItems = $('li').detach();
    $('#content').append(detachedItems);
  
    
    
}

addingReplaceRemoving();

// filtering();
// traversingTheDOM();
// cssSelectors();