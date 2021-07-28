#!/usr/bin/bash
for name in "$@"
do
    mkdir $name;
    cd $name;
    touch index.html;
    echo 'Creating a new project' $name;
    echo 'Hello World' > index.html;
    mkdir css;
    cd css;
    touch style.css;
    cd ../;
    mkdir js;
    cd js;
    touch app.js;
    cd ../;
    echo 'All done!';
    cd ../;
done