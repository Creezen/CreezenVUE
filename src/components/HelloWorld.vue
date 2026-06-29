<template>
  <form class="upload" method="post" enctype="multipart/form-data" action="/uploadApk">
    <p><input type="file" name="apkFile"/></p>
    <label>版本号:</label> <label>1.001.001</label> <br>
    <label>APK大小:</label> <label>34.5M</label> <br>
    <label>操作人:</label> <label>芜湖</label>
    <p><input type="submit" value="上传"/></p>
  </form>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String,
    num: Number
  }
}
</script>

<style scoped>
h1 {
  text-align: center;
  font-size: 48px;
  color: darkcyan;
}
.file {
  text-align: center;
  background: darkcyan;
}

.upload {
  display: inline-block;
  text-align: left;
  background: aliceblue;
}

.upload label {
  transition: all 0.5s;
}

.upload label:hover {
  color: rebeccapurple;
  opacity: 0;
}
</style>
