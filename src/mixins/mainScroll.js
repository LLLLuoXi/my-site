/*
 * @Author: luoxi
 * @LastEditTime: 2022-02-18 21:56:51
 * @LastEditors: your name
 * @Description: 主要区域滑动逻辑，注册和取消监听eventBus
 */

export default function (refValue) {
    return {
        mounted() {
            this.$bus.$on("setMainScroll", this.handleSetMainScroll);
            this.$refs[refValue].addEventListener("scroll", this.handleMainScroll);
        },
        beforeDestroy() {
            this.$bus.$emit("manScroll", undefined);
            this.$bus.$off("setMainScroll", this.handleSetMainScroll);
            this.$refs[refValue].removeEventListener("scroll", this.handleMainScroll);
        },
        methods: {
            handleMainScroll() {
                this.$bus.$emit("mainScroll", this.$refs[refValue]);
            },
            handleSetMainScroll(scrollTop) {
                this.$refs[refValue].scrollTop = scrollTop;
            },
        },
    }

}
