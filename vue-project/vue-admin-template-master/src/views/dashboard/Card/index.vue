<template>
  <div>
    <el-row :gutter="10">
      <el-col :span="6">
        <el-card>
          <Detail title="总销售额" count="$126560">
            <template slot="charts">
                <span>周同比&nbsp;&nbsp;56.67% <svg t="1671862303269" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="3967" width="16" height="16"><path d="M936.170667 669.952L534.613333 268.394667a32 32 0 0 0-42.986666-2.069334l-2.282667 2.069334L87.829333 669.952a8.533333 8.533333 0 0 0-2.496 6.037333v66.346667a8.533333 8.533333 0 0 0 14.570667 6.058667l412.074667-412.096 412.117333 412.096a8.533333 8.533333 0 0 0 14.570667-6.037334v-66.346666a8.533333 8.533333 0 0 0-2.496-6.058667z" fill="#d81e06" p-id="3968"></path></svg></span>
                <span>日同比&nbsp;&nbsp;19.16% <svg t="1671862378712" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2500" width="16" height="16"><path d="M87.829333 352.021333L489.386667 753.578667a32 32 0 0 0 42.986666 2.069333l2.282667-2.069333 401.536-401.557334a8.533333 8.533333 0 0 0 2.496-6.037333v-66.346667a8.533333 8.533333 0 0 0-14.570667-6.037333L512.021333 685.674667 99.904 273.6a8.533333 8.533333 0 0 0-14.570667 6.037333v66.346667a8.533333 8.533333 0 0 0 2.496 6.037333z" fill="#1afa29" p-id="2501"></path></svg></span> 
            </template>
            <template slot="footer">
                <span>日销售额$12123</span>
            </template>
          </Detail>
        </el-card>
      </el-col>
      <el-col :span="6">
        <el-card>
          <Detail title="访问量" count="810">
            <template slot="charts">
                <lineCharts></lineCharts>
            </template>
            <template slot="footer">
                <span>日访问量2123</span>
            </template>
          </Detail>
        </el-card>
      </el-col>
      <el-col :span="6">
        <el-card>
          <Detail title="支付笔数" count="88460">
            <template slot="charts">
                <barCharts></barCharts>
            </template>
            <template slot="footer">
                <span>转换率65%</span>
            </template>
          </Detail>
        </el-card>
      </el-col>
      <el-col :span="6">
        <el-card>
          <Detail title="运营活动效果" count="78%">
            <template slot="charts">
                <progressCharts></progressCharts>
            </template>
            <template slot="footer">
                <span>周同比&nbsp;&nbsp;56.67% <svg t="1671862303269" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="3967" width="16" height="16"><path d="M936.170667 669.952L534.613333 268.394667a32 32 0 0 0-42.986666-2.069334l-2.282667 2.069334L87.829333 669.952a8.533333 8.533333 0 0 0-2.496 6.037333v66.346667a8.533333 8.533333 0 0 0 14.570667 6.058667l412.074667-412.096 412.117333 412.096a8.533333 8.533333 0 0 0 14.570667-6.037334v-66.346666a8.533333 8.533333 0 0 0-2.496-6.058667z" fill="#d81e06" p-id="3968"></path></svg></span>
                <span>日同比&nbsp;&nbsp;19.16% <svg t="1671862378712" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2500" width="16" height="16"><path d="M87.829333 352.021333L489.386667 753.578667a32 32 0 0 0 42.986666 2.069333l2.282667-2.069333 401.536-401.557334a8.533333 8.533333 0 0 0 2.496-6.037333v-66.346667a8.533333 8.533333 0 0 0-14.570667-6.037333L512.021333 685.674667 99.904 273.6a8.533333 8.533333 0 0 0-14.570667 6.037333v66.346667a8.533333 8.533333 0 0 0 2.496 6.037333z" fill="#1afa29" p-id="2501"></path></svg></span> 
            </template>
          </Detail>
        </el-card>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import Detail from "./Detail";
import lineCharts from './lineChart'
import barCharts from './barCharts'
import progressCharts from './progressCharts'
export default {
  components: {
    Detail,
    lineCharts,
    barCharts,
    progressCharts
  },
};
</script>

<style></style>
