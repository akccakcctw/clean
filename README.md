# Clean

A clean blog theme for [hugo](https://github.com/gohugoio/hugo).

[![Commitizen friendly](https://img.shields.io/badge/commitizen-friendly-brightgreen.svg)](http://commitizen.github.io/cz-cli/)


![preview](img/preview.png)

## Getting Started

1. Clone this repository to your hugo theme directory.

```sh
$ mkdir themes
$ cd themes
$ git clone https://github.com/akccakcctw/clean.git
```

2. Edit your config.yml:

```yaml
# config.yml
theme: "clean"
```

3. Preview locally with `hugo server`

```sh
$ hugo server
```

Then you can go to https://localhost:1313 and this theme should be visible.


## Features

### Last Modified Date

Add `lastmod` as parameter in the front-matter. You can get the date string by typing `date +%FT%T%z` within command line.

```
---
lastmod: 2022-04-29T10:50:09+0800
---
```

### Notation Block

avaiable notation type:

- alert
- note
- tip
- warning


```
{{<warning>}}
blah blah...
{{</warning>}}
```


### Math Typesetting with `KaTex`

We load katex library from cdn dynamically, add `katex` as parameter in the front-matter if you want to use it.

```
---
katex: true
---
```


## Development

### Commit

```sh
npx git-cz
```


## License

Clean is licensed under the [MIT License](LICENSE.md).


## Author

[Rex Tsou](https://github.com/akccakcctw)
