$('td.notranslate a').each(function(){ $(this).text(new Date($(this).text().toString()).toString()) });
