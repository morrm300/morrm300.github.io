var objects = ['Yeah',
               'Bitch',
               'Money',
               'Swag',
               'Slay',
               'Crib',
               'uhuh',
               'deuce',
               'whip',
               'rollin',
               'rari',
               'smoke',
               'shit',
               'smoke',
               'goals',
               'sex',
               'you',
               'yo',
               'me',
               'nigga',
               'dreamin',
               'god',


               ];

var colors  = ['red', 'blue', 'yellow', 'white'];

$('.button').click(function() {
  var random_object_number = Math.floor(Math.random() * objects.length),
      random_color_number  = Math.floor(Math.random() * colors.length),
      object_to_use        = objects[random_object_number],
      color_to_use         = colors[random_color_number],
      result               = '';

  if (random_object_number > 6) {
    result = '<span class="object ' + color_to_use + '">' + object_to_use + '</span>';
  } 

  $('.content').prepend(result);
});