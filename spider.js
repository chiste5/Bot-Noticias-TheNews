var request = require('request');
var cheerio = require('cheerio');
const fs = require('fs');

request ('https://thenewscc.com.br/blog/', function(err , res , body){
    if(err) console.log('Erro:' + err);

    var $ = cheerio.load(body);
    $('.elementor-post__card').each(function(){
        var title = $(this).find('h3.elementor-post__title a').text().trim();
        var disc = $(this).find('.elementor-post__excerpt p').text().trim();
        var link = $(this).find('a').attr('href')

        console.log('Titulo:'+ title);
        console.log('Descrição:'+ disc);
        console.log('Link:'+ link);

        fs.appendFile('noticias.txt', title + '\n' + disc + '\n'+ link +'\n'+'\n',function(err){
            if(err) throw err;
        });
    });
});
