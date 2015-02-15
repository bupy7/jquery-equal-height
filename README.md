Equal Height Children
=====================

A jQuery plugin to make elements equal height. There are many plugins out there
that do this, this one is ours.

Using the plugin
----------------

1.  Set the property `data-equal-height` on any element that is a parent
    of those you want to be equal, with a value that is the CSS selector
    of the elements that should be equal height
    
    <ul data-equal-height='li'>
        <li>Short<li>
        <li>Short<li>
        <li>Long, long, really long…<li>
    </ul>

1.  Include and invoke the plugin

    ```html
    <script src='query-equal-height.js'></script>
    <script>$('[data-equal-height]').makeChildrenEqualHeight();</script>
    ```
    
1.  Revoke the plugin

    ```html
    <script>$('[data-equal-height]').makeChildrenDisequalHeight();</script>
    ```

1.  Optionally call the function again if the heights are likely to have
    changed (eg. if the browser is resized, the font is resized, etc.)
    
    ```javascript
    $('body').on('resize', $('[data-equal-height]').makeChildrenEqualHeight());
    ```
