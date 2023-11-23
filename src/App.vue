<template>
  <div class="app">
    <i v-if="false" class="icon iconfont icon_folder"></i>
    <CCTable :data="data" :columns="columns"></CCTable>
  </div>
</template>
<script lang="ts">
import { defineComponent, ref } from "vue";
import type {
  TableColumn,
  TableData,
} from "@xuyanfeng/cc-ui/types/cc-table/const";
import ccui from "@xuyanfeng/cc-ui";
import axios from "axios";
const { CCTable } = ccui.components;

interface LogData {
  id: number;
  name: string;
  createDate: string;
  updateDate: string;
}
export default defineComponent({
  name: "app",
  components: {
    CCTable,
  },
  setup(props, ctx) {
    const columns = ref<TableColumn[]>([
      {
        title: "日期",
        key: "time",
        width: 200,
      },
      {
        title: "日志",
        key: "log",
      },
    ]);
    const data = ref<TableData[]>([]);

    // 获取服务器上的所有日志
    const use = true;
    if (use) {
      const url = "http://localhost:3000/log/get-all-log";
      axios.post(url).then((res) => {
        console.log(res);
        for (let i = 0; i < res.data.length; i++) {
          const item: LogData = res.data[i];
          data.value.push({ time: item.createDate, log: item.name });
        }
      });
    } else {
      setTimeout(() => {
        console.log("add");
        data.value.push({ time: "1", log: "1" });
      }, 1000);
    }

    return {
      data,
      columns,
    };
  },
});
</script>

<style scoped lang="less">
.app {
  display: flex;
  flex-direction: column;
}
</style>
