# TinyMCE editor

Use TinyMCE editor for your meteor app.

```
$ meteor add teamon:tinymce
```

```
tinymce.init({
  selector: 'textarea',
  skin_url: '/packages/teamon_tinymce/skins/lightgray',
});
```

Caution: Default `skin_url` must be defined on init. If you want use a custom skin, you can simply modify it.
