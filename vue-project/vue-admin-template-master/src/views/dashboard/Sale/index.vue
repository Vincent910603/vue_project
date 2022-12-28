<template>
  <el-card class="box-card" style="margin: 10px 0px">
    <div slot="header" class="clearfix">
      <el-tabs class="tab" v-model="activeName">
        <el-tab-pane label="销售额" name="sale"></el-tab-pane>
        <el-tab-pane label="访问量" name="visit"></el-tab-pane>
      </el-tabs>
      <div class="right">
        <span @click="setDay">今日</span>
        <span @click="setWeek">本周</span>
        <span @click="setMonth">本月</span>
        <span @click="setYear">本年</span>
        <!-- v-model="value1" -->
        <el-date-picker
        style="width:250px"
        v-model="date"
          class="date"
          type="daterange"
          range-separator="-"
          start-placeholder="开始日期"
          end-placeholder="结束日期"
          value-format="yyyy-MM-dd"
        >
        </el-date-picker>
      </div>
    </div>
    <div>
      <el-row :gutter="10">
        <el-col :span="18">
          <div class="charts" ref="charts"></div>
        </el-col>
        <el-col :span="6" class="right">
            <h3>门店{{title}}排名</h3>
            <ul>
                <li>
                    <span class="rindex">1</span>
                    <span>聖誕節</span>
                    <span class="rvalue">讚讚</span>
                </li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
            </ul>
        </el-col>
      </el-row>
    </div>
  </el-card>
</template>

<script>
import* as echarts from "echarts";
import dayjs from 'dayjs'
export default {
  data() {
    return {
      activeName: "sale",
      mycharts:null,
      date:[]
    };
  },
  mounted() {
    this.mycharts = echarts.init(this.$refs.charts);
    this.mycharts.setOption({
        title:{
            text:this.title +"趋势"
        },
      tooltip: {
        trigger: "axis",
        axisPointer: {
          type: "shadow",
        },
      },
      grid: {
        left: "3%",
        right: "4%",
        bottom: "3%",
        containLabel: true,
      },
      xAxis: [
        {
          type: "category",
          data: ["一月", "二月", "三月", "四月", "五月", "六月", "七月","八月","九月","十月","十一月","十二月"],
          axisTick: {
            alignWithLabel: true,
          },
        },
      ],
      yAxis: [
        {
          type: "value",
        },
      ],
      series: [
        {
          name: "Direct",
          type: "bar",
          barWidth: "60%",
          data: [10, 52, 200, 334, 390, 330, 220,110,98,167,13,44],
        },
      ],
    });
  },
  computed:{
    title(){
        return this.activeName=='sale'?'销售额':'访问量'
    }
  },
  watch:{
    title(){
        this.mycharts.setOption({
            title:{
                text:this.title
            }
        })
    }
  },
  methods:{
    setDay(){
        const day = dayjs().format('YYYY-MM-DD');
        this.date = [day,day];
    },
    setWeek(){
        const start = dayjs().day(1).format('YYYY-MM-DD')
        const end = dayjs().day(7).format('YYYY-MM-DD')
        this.date = [start,end]
    },
    setMonth(){
        const start = dayjs().startOf('month').format('YYYY-MM-DD')
        const end = dayjs().endOf('month').format('YYYY-MM-DD')
        this.date = [start,end]
    },
    setYear(){
        const start = dayjs().startOf('year').format('YYYY-MM-DD')
        const end = dayjs().endOf('year').format('YYYY-MM-DD')
        this.date = [start,end]
    }
  }
};
</script>

<style scoped>
.clearfix {
  position: relative;
  display: flex;
  justify-content: space-between;
}
.tab {
  width: 100%;
}
.right {
  position: absolute;
  right: 0px;
}
.date {
  width: 200px;
  margin: 0px 20px;
}
.right span {
  margin: 0px 10px;
}
.charts {
  width: 100%;
  height: 300px;
}
ul{
    list-style:none;
    width:100%;
    height:300px;
    padding:0px
}
ul li{
    height: 8%;
    margin:10px 0px;
}
.rindex{
    float :left;
    width: 20px;
    height:20px;
    border-radius:50%;
    background:black;
    color:white;
    text-align:center
}
.rvalue{
    float:right;
}
</style>
