<template>
  <div class="gutter-example">
    <a-divider orientation="center">
      分割线
    </a-divider>
    <a-row type="flex">
      <a-col :span="20"><div>20</div></a-col>
      <a-col :span="4"><div>4</div></a-col>
    </a-row>

    <a-divider orientation="center">
      分割线
    </a-divider>
    <a-row type="flex">
      <a-col :flex="2"><div>2/5</div></a-col>
      <a-col :flex="3"><div>3/5</div></a-col>
    </a-row>


    <a-divider orientation="center">
      分割线
    </a-divider>
    <a-row type="flex">
      <a-col flex="300px"><div>300px</div></a-col>
      <a-col flex="auto"><div>auto</div></a-col>
    </a-row>

    <a-divider orientation="center">
      分割线
    </a-divider>
    <a-row type="flex">
      <a-col flex="1 1 200px"><div>1 1 200px</div></a-col>
      <a-col flex="0 1 300px"><div>0 1 300px</div></a-col>
    </a-row>


    <a-divider orientation="center">
      分割线
    </a-divider>
    <a-row :gutter="120">
      <a-col :span="12"><div>12</div></a-col>
      <a-col :span="12"><div>12</div></a-col>
    </a-row>

    <a-divider orientation="center">
      分割线
    </a-divider>
    <a-row :gutter="[100,200]">
      <a-col :span="12"><div>12</div></a-col>
      <a-col :span="12"><div>12</div></a-col>
    </a-row>


    <a-divider orientation="center">
      按钮
    </a-divider>
    <div class="button">
      <a-button>按钮1</a-button>
      <a-button type="primary">按钮/primary</a-button>
      <a-button type="danger">按钮/danger</a-button>
      <br><br>
      <a-button type="primary" disabled>按钮/primary</a-button>
      <br><br>
      <a-button type="primary" shape="circle" icon="search" />
      <a-button type="primary" shape="circle">查</a-button>
      <br><br>
      <a-dropdown>
        <a-menu  slot="overlay" @click="handleMenuClick">
          <a-menu-item key="1">1</a-menu-item>
          <a-menu-item key="2">2</a-menu-item>
        </a-menu>
        <a-button type="primary">11</a-button>
      </a-dropdown>

      <a-dropdown>
        <a-menu slot="overlay" @click="handleMenuClick">
          <a-menu-item key="1">
            1st item
          </a-menu-item>
          <a-menu-item key="2">
            2nd item
          </a-menu-item>
          <a-menu-item key="3">
            3rd item
          </a-menu-item>
        </a-menu>
        <a-button> Actions <a-icon type="down" /> </a-button>
      </a-dropdown>
    </div>


    <br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br>
  </div>
</template>


<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  methods: {
    handleMenuClick(e) {
      console.log('click', e);
    },
  },
}
</script>

<style scoped>
.gutter-example {
  width: 90vw;
  margin: 0 auto;
}
.ant-col div{
  color: #fff;
  background-color: #0093E9;
  background-image: -webkit-linear-gradient(160deg, #0093E9 0%, #80D0C7 100%);
  background-image: -moz-linear-gradient(160deg, #0093E9 0%, #80D0C7 100%);
  background-image: -o-linear-gradient(160deg, #0093E9 0%, #80D0C7 100%);
  background-image: linear-gradient(160deg, #0093E9 0%, #80D0C7 100%);
}
</style>
