{% if theme.tencent_analytics %}
  <script type="text/javascript">
    (function() {
      var hm = document.createElement("script");
      hm.type = "text/javascript";
      hm.src = "http://tajs.qq.com/stats?sId={{ theme.tencent_analytics }}";
      hm.charset = "UTF-8";
      var s = document.getElementsByTagName("script")[0];
      s.parentNode.insertBefore(hm, s);
    })();
  </script>
{% endif %}
