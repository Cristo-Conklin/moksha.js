<?php

// runonce.php
$directories = ['Level 0', 'Level 1', 'Level 2', 'Finishing']; // todo: could scan to list all dirs...
$images = [];

// create array from image files
foreach ($directories as $dir) {
	$subimages = scan_dir($dir);
	foreach ($subimages as $subimage) {
		//if ($subimage == '.' || $subimage= '..') continue;
		$images[$dir][] = $subimage;
	}
		
}
var_dump($images);
file_put_contents('asanas.js', json_encode($images));


// http://stackoverflow.com/questions/11923235/scandir-to-sort-by-date-modified
function scan_dir($dir) {
    $ignored = array('.', '..', '.svn', '.htaccess');

    $files = array();    
    foreach (scandir($dir) as $file) {
        if (in_array($file, $ignored)) continue;
        $files[$file] = filemtime($dir . '/' . $file);
    }

    asort($files);
    $files = array_keys($files);

    return ($files) ? $files : false;
}

