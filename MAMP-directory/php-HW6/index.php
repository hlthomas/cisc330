<?php

include('resources/page.html');

// Enable error reporting for debugging
error_reporting(E_ALL);
ini_set('display_errors', 1);

// a. Create an associative array with keys and values
$icecream = [
    "product" => "Chocolate Icecream",
    "price" => 1.99,

];

// b. Loop through the array and echo out each key-value pair
foreach ($icecream as $key => $value) {
    echo ucfirst($key) . ": " . $value . "<br>";
}

function scoopnumber(string $product, float $price, string $size="3 Scoop"): string {
    return "This is the $size $product and it costs $$price.";
}
echo "<br>" . scoopnumber("Vanilla Ice Cream", 3.99, "2 Scoop") . "<br>"; // With size
echo scoopnumber("Strawberry Ice Cream", 5.99) . "<br>";

?>