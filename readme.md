
                                       ...+$$...                          
                                       ....O....                          
                                   ........$........                      
                                   . .....,Z.... ...                      
                                   ..,?+=++++==++:..                      
                                ...~I7$77777777777?,....                  
                              ....+???+++=========+++~...                  
                              ...=$$$$$$$77777+?777$$7?..                  
                               .:$$$$$$$7+=II=,:?77$$I+,.                  
                        ...,?7?I??????++~:==~,,,,:==+++++=, ......           
                  .....,::+777777$$$7$$7$Z$OOZIII?$7I$I77=========:~,.         
                 .:~=~===~===?II?II7I7III?I?I??????????+==~===========~~,         
               ..,+++++====++++++++??++?????????????++++?++++++++++++===~~.      
            ....:=+++????????????????????????????????????????????????+===~,..
            ...~~~~=++++???IIIIIII???????????????????????????????????II?++=~~..
              ~:=+???IIIIIII??????++++++++++++++++++++++????????II+++++=+..
                 :+?+?+???II????????+++++++++++++++++?+??????????+===,..     
                     =?+???+++++++++++++++++++++++++???+++++++++=:.       
                    .. ~?????????I??++++++++++++++?????+++++++=,..        
                         .+???????I??+++++++++++++??I?+++++=~....         
                          ..,+????II??+++++++++++??III?++~ .              
                                 Z7I7??++?++?++++?7IZ8..                  
                                =ZZ.$O,....I.....D=.O8~                   
                               .Z7.7O..  . O..  ..87, 8..                 
                             ..ZZ:.Z..    .O0.   ..$$,O=..                
                           .?$ZZ...        .7I .   .~$.77.              
                          ..Z Z,.         .$Z?..    .ZZ~ZI.           
                        . Z$Z$.        . ?+7OZ???   ..OZO7,             
                         +$$$..         .........    ...OOOZ..           
                         Z$7, .                       ...ZZZO ..         
                      ..I$I7Z..                         ..ZIO8Z+ .        
                    ..$ZZO8OO?.. __    __  __  ___  ___ .I88OOOO..
                         / __)  /__\  (  )(  )/ __)( ___)(  _ \
                         \__ \ /(__)\  )(__) (( (__  )__)( )  /
                         (___/(__)(__)(______)\___)(____)(_)\_)


Keep your eyes peeled to the sky and maybe you will see it.



## A minimalist node module that does very little

### Usage

    npm install saucer


**server.js**

    require('saucer');


#### fly Saucer

    node server.js

## When Saucer Lands ...
## Will be a CoffeeScript/NodeJS framework w/ CoffeeCup templating
A relatively featureless but fully pluggable framework.


###Possible http routing and server syntax

**app.coffee**

```coffeecript
saucer = require 'saucer'
app = saucer.app

earth = app.render view: earth

app.get /hello earth, -> 
  @res earth

app.listen 8888
app.log listening on port 8888

```
