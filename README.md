# TechMeetup.co.uk
The GitHub Pages/Jekyll-powered website for techmeetup.co.uk.

## Installation

```bash
git clone https://github.com/TechMeetup/TechMeetup.co.uk
cd TechMeetup.co.uk
gem install bundler
bundle install
bundle exec guard
```

Or, via nix

```
nix-shell
```

Note that if the nix shell is invalid, it's probably because the Gemfile has
been updated but a new gemset.nix hasn't been generated; run:

```
nix-shell -p bundler -p bundix --run 'bundler update; bundler lock; bundler package --no-install --path vendor; bundix; rm -rf vendor'
```

to fix that.

## Running

```
jekyll serve --watch
```

## Contact
[TechMeetup Organisers](mailto:techmeetuporganisers@googlegroups.com)

## License
The code is licensed under the the [MIT License](http://en.wikipedia.org/wiki/MIT_License) and the text under the [Creative Commons Attribution-NonCommercial-ShareAlike 2.5 Scotland License](http://creativecommons.org/licenses/by-nc-sa/2.5/scotland/).
