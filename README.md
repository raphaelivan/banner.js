# Banner
Banner is a simple  jQuery banner( without controls )

## Usage

```sh
$("div#banner img.slide").banner();
```

## Effects (default is fade)
fade, slide, none(just hide)

```sh
$("div#banner img.slide").banner( { effect: "slide" } );
```

## Set sleep (milliseconds)
```sh
$("div#banner img.slide").banner( { sleep: 5000 } );
```

## Set effect time (milliseconds)
```sh
$("div#banner img.slide").banner( { effectTime: 2000 } );
```

## Set width and height 
Default is 300x250 pixel(Medium Rectangle)
```sh
$("div#banner img.slide").banner( { width: '336px', height: '280px' } );
```

## License
Banner is available under the MIT license.