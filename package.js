Package.describe({
  name: 'teamon:tinymce',
  version: '4.3.3',
  summary: 'TinyMCE editor',
  git: 'https://github.com/teamOnHQ/tinymce.git',
});

Package.onUse(function (api) {
  api.versionsFrom('1.2.1');

  // client files
  api.addFiles([
    // core files
    'tinymce.min.js',

    // plugins
    'plugins/insertdatetime/plugin.min.js',
    'plugins/lists/plugin.min.js',
    'plugins/preview/plugin.min.js',
    'plugins/table/plugin.min.js',
    'plugins/wordcount/plugin.min.js',
    'plugins/code/plugin.min.js',
    'plugins/image/plugin.min.js',
    'plugins/media/plugin.min.js',
    'plugins/link/plugin.min.js',
    'plugins/paste/plugin.min.js',

    // skins
    'skins/lightgray/content.inline.min.css',
    'skins/lightgray/content.min.css', // modified
    'skins/lightgray/skin.ie7.min.css',
    'skins/lightgray/skin.min.css',

    // themes
    'themes/modern/theme.min.js',
  ], 'client');

  api.addAssets([
    // skins
    'skins/lightgray/fonts/tinymce-small.eot',
    'skins/lightgray/fonts/tinymce-small.svg',
    'skins/lightgray/fonts/tinymce-small.ttf',
    'skins/lightgray/fonts/tinymce-small.woff',
    'skins/lightgray/fonts/tinymce.eot',
    'skins/lightgray/fonts/tinymce.svg',
    'skins/lightgray/fonts/tinymce.ttf',
    'skins/lightgray/fonts/tinymce.woff',

    'skins/lightgray/img/anchor.gif',
    'skins/lightgray/img/loader.gif',
    'skins/lightgray/img/object.gif',
    'skins/lightgray/img/trans.gif',
  ], 'client');
});
