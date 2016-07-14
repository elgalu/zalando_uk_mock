/* v0.4 */
(function(){
    var qbType = document.getElementById('qbType').value || "outfitOfTheWeek";
    var updateType = document.getElementById('updateQBType').value || "false";

    var noQBElements = document.querySelectorAll('.noQB');
    var zalandoStreetStylesElements = document.querySelectorAll('.zalandoStreetStylesQB');
    var content = document.getElementById('content');
    var links = content.getElementsByTagName('a');            

    if(noQBElements.length > 0){
        for(var x = 0; x < noQBElements.length; x++){                            
            var qbLinks = noQBElements[x].getElementsByTagName('a');
            for(var y = 0; y < qbLinks.length; y++){
                qbLinks[y].removeAttribute('data-js-component');
            }
        }
    }

    if(updateType === "true"){
        for (var i = 0; links.length > i; i++) {
            var dataType = links[i].getAttribute('data-type');

            if (dataType !== null) {
                links[i].setAttribute('data-type', qbType);
            }
        }
    }

    if(zalandoStreetStylesElements.length > 0){
        for(var x = 0; x < zalandoStreetStylesElements.length; x++){
            var qbLinks = zalandoStreetStylesElements[x].getElementsByTagName('a');

            for(var y = 0; y < qbLinks.length; y++){
                var dataType = qbLinks[y].getAttribute('data-type');

                if (dataType !== null) {
                    qbLinks[y].setAttribute('data-type', 'zalandoStreetStyles');
                }
            }
        }
    }
})();
