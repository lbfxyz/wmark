<template>
  <el-upload
      class="upload-demo"
      ref="upload"
      action="#"
      accept=".jpg,.jpeg,.png"
      :on-change="handleChange"
      :show-file-list="false"
      :auto-upload="false">
    <el-button slot="trigger" type="primary">选取文件</el-button>
  </el-upload>
</template>

<script>
export default {
  name: 'Uploader',
  data() {
    return {
    };
  },
  methods: {
    submitUpload() {
      this.$refs.upload.submit();
    },
    handleChange(file) {
      const _this = this
      let reader = new FileReader();
      reader.readAsDataURL(file.raw);
      reader.onload = function (e) {
        _this.$emit('get-image-data',e.target.result)
      };
    },
  }
}
</script>

<style scoped>

</style>
