// Generate snippets/snippets.in from snippets/snippets.in.json and snippets/source

const fs = require('fs');
const snippets_source = 'snippets/source/';
const snippets_in_json = 'snippets/snippets.in.json';
const snippets_out_json = 'dist/snippets.json';
function read_snippets_source()
{
    var snippets_source_Obj = {};

    let files = fs.readdirSync(snippets_source);

    files.forEach(function (filename)
    {
        var contents = fs.readFileSync(snippets_source + filename, 'utf8');
        snippets_source_Obj[filename] = JSON.stringify(contents.split(/\r?\n/));
    })
    return snippets_source_Obj
}

function create_snippets_json(source_obj)
{
    var contents = fs.readFileSync(snippets_in_json, 'utf8');
    Object.keys(source_obj).forEach(function(key) {
        var file_content = source_obj[key];
        contents = contents.replace('"@' + key + '@"', file_content)
      });
    fs.writeFileSync(snippets_out_json, contents, { mode: 0o644 });
}

var source_obj = read_snippets_source();
create_snippets_json(source_obj);