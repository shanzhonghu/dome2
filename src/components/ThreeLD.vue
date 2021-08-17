<template>
  <div id="app">
    <el-cascader ref="qq"
      size="large"
      :options="options"
      v-model="selectedOptions"
      @change="handleChange">
    </el-cascader>
    {{address}}
  </div>
</template>

<script>
import { regionData, CodeToText } from 'element-china-area-data'
export default {
  data () {
    return {
      options: regionData,
      selectedOptions: [],
      address:null
    }
  },

  methods: {
    handleChange (value) {
      var zz=''
      zz+=CodeToText[value[0]]
      zz+=CodeToText[value[1]]
      zz+=CodeToText[value[2]]
      alert(zz)
      this.address=zz
    }
  }
}
</script>
