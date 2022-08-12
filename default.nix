with import <nixpkgs> { };

let jekyll_env = bundlerEnv rec {
    inherit ruby;
    name     = "jekyll_env";
    gemfile  = ./Gemfile;
    lockfile = ./Gemfile.lock;
    gemset   = ./gemset.nix;
  };
in
  stdenv.mkDerivation rec {
    name = "techmeetup.co.uk";
    buildInputs = [ jekyll_env bundler ruby ];
  }

