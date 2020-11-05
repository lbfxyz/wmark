<template>
  <div class="upload-container">
    <div class="edit-wrapper">
      <uploader class="uploader" @get-image-data="getImageData"></uploader>
      <el-input placeholder="请输入水印文字" v-model="watermarkText" clearable @change="changeText"/>
      <el-color-picker v-model="color" show-alpha @change="changeRgb" />
      <el-button class="save-btn" type="success" @click="saveImage">保存</el-button>
    </div>
    <div class="canvas-wrapper">
      <canvas style="width: 100%" ref="canvasImage"></canvas>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import Uploader from "@/components/Uploader";
import Watermark from "@/draw/watermark";
import example from "@/assets/example.jpg"
export default {
  name: 'Home',
  components: {
    Uploader
  },
  data() {
    return {
      watermark: {},
      watermarkText: '',
      color: 'rgba(0,0,0,0.4)',
      state: {
        isExist: true,
        text: "仅用于测试水印，仅此而已",
        fontSize: 23,
        watermarkHeight: 180,
        watermarkWidth: 280
      }
    }
  },
  mounted() {
    this.watermark = new Watermark(this.$refs.canvasImage)
    this.setOptions()
    this.watermark.draw(example)
  },
  methods: {
    getImageData(data) {
      this.watermark.draw(data);
    },
    setOptions() {
      const { text, fontSize, watermarkWidth, watermarkHeight } = this.state;
      const fillStyle = this.color;
      this.watermark.setOptions({ text, fillStyle, fontSize, watermarkWidth, watermarkHeight });
    },
    saveImage() {
      this.watermark.save()
    },
    changeText(value) {
      this.state.text = value
      this.setOptions()
    },
    changeRgb(value) {
      this.color = value
      this.setOptions()
    }
  }
}
</script>

<style scoped lang="scss">
.upload-container {
  max-width: 1200px;
  max-height: 600px;
  margin: 0 auto;
  .edit-wrapper {
    display: flex;
    margin-bottom: 20px;
    .el-button {
      margin-left: 10px;
    }
    .el-input {
      margin-left: 10px;
      max-width: 300px;
    }
    .el-color-picker{
      margin-left: 10px;
    }
  }
  .uploader {

  }
  .canvas-wrapper {
    margin: 0 auto;
  }
}
</style>
