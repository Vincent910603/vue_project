<div id="app">
	<ul>
        <li v-for="(value,key,index) in person">
        	{{index}}--{{key}}--{{value}}
        </li>
	</ul>
</div>
<script>
    var app = new Vue({
        el:"#app",//el即element，要渲染的页面元素
        data: {
            person:{"name":"白大锅", "age":3, "address":"中国"}
        }
    });
</script>
