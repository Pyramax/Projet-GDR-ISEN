<?php

function getcsv()
{
    $monfichier=fopen("BDD.csv", 'r');

    for ($numero=0 ; $numero<=3; numero++)
    {
        $ligne=fgets($monfichier);
        $mot [$numero]=substr($ligne,18,3);
    }
    
    echo '<br'>.$mot[1];
    
    echo '<br'>.$mot[2];
    
    echo '<br'>.$mot[3]; ...
}

?>