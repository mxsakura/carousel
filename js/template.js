Vue.component('vue-banner', {
    props: ['listData', 'width'],
    template: `
        <div @mouseover="overHandle()" @mouseout="outHandle()">
            <div class="img">
                  <div class="list" :style="{left:currentId*width+'px',width:listData.length*width+'px',transition:this.isloop?'none':'left .2s'}">
                      <a href="#" v-for="item,index in listData"><img :src="item" alt=""/></a>
                  </div>
            </div>
            <button class="iconfont leftBtn" @click="prevTab">&#xe667;</button>
            <button class="iconfont rightBtn" @click="nextTab">&#xe63f;</button>
            <div class=circle :style="{width:(listData.length-1)*14+'px'}">
            <span :class="index === -currentId?'active':''" v-for="item,index in (listData.length-1)" @click="spanHandle(index)"></span>
            </div>
        </div>
    `,
    data() {
        return {
            currentId: 0,
            timer: null,
            isloop: false,
        }
    },
    methods: {
        prevTab() {
            this.isloop = false;
            if (this.currentId == 0) {
                this.currentId = -this.listData.length + 2;
            } else {
                this.currentId++;
            }
        },
        nextTab() {
            this.isloop = false;
            if (this.currentId == -this.listData.length + 2) {
                this.currentId--;
                setTimeout(() => {
                    this.isloop = true;
                    this.currentId = 0;
                }, 100)
            } else {
                this.currentId--;
            }
        },
        setTimer() {
            this.isloop = false;
            if (this.currentId == -this.listData.length + 2) {
                this.currentId--;
                setTimeout(() => {
                    this.isloop = true;
                    this.currentId = 0;
                }, 100)
            } else {
                this.currentId--;
            }
        },
        overHandle() {
            clearInterval(this.timer);
        },
        outHandle() {
            this.timer = setInterval(this.setTimer, 3000);
        },
        spanHandle(index) {
            this.currentId = -index;
        }
    },
    created() {
        this.timer = setInterval(this.setTimer, 3000);

    }
})