$(document).ready(function(){
    $('#format').click(function(){
        let raw_json = $('#raw-json-input').val();
        try {
            let new_raw = JSON.parse(raw_json);
            let formatted_json = JSON.stringify(new_raw, null, 4);
            $('#formatted-json-input').val(formatted_json); 
            console.log(formatted_json);
        } catch (error) {
            $('#formatted-json-input').val(error);
        }
    });

    $('.copy-button').click(function(){        
        const textarea = document.getElementById('formatted-json-input');
        textarea.select();
        document.execCommand('copy');

        const originalText = $(this).text();
        $(this).text('Copied!');

        setTimeout(() => {
            $(this).text(originalText);
        }, 2000);
    });
});
