$('#btnsearch').click(function() {
  var name = $('#txtinputname')
    .val()
    .toLowerCase();
  console.log(name);
  var url = 'https://pokeapi.co/api/v2/pokemon/' + name;

  $.ajax(url)
    .done(function(data) {
      console.log(data);
      $('#result').html(
        'Name: ' +
          data.name +
          '<br> Height: ' +
          data.height +
          '<br> Weight: ' +
          data.weight
      );
      $('#pokemonimage').attr('src', data.sprites.front_default);
    })
    .fail(function() {
      $('#result').html(name + ' not found!');
    });
});
