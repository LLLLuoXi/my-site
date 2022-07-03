<template>
  <form
    id="data-form-container"
    ref="form"
    @submit.prevent="handleSubmit"
    class="data-form-container"
  >
    <div class="form-item">
      <div class="input-area">
        <input
          type="text"
          maxlength="10"
          v-model="formData.nickname"
          placeholder="用户昵称"
        />
        <span class="tip">{{ formData.nickname.length }}/10</span>
      </div>
      <div class="error">{{ error.nickname }}</div>
    </div>
    <div class="form-item">
      <div class="text-area">
        <textarea
          maxlength="300"
          placeholder="输入内容"
          v-model="formData.content"
        ></textarea>
        <span class="tip">{{ formData.content.length }}/300</span>
      </div>
      <div class="error">{{ error.content }}</div>
    </div>
    <div class="form-item">
      <div class="button-area">
        <button :disabled="isSubmiting">
          {{ isSubmiting ? "提交中..." : "提交" }}
        </button>
      </div>
    </div>
  </form>
</template>

<script>
export default {
  data() {
    return {
      formData: {
        nickname: "",
        content: "",
      },
      error: {
        nickname: "",
        content: "",
      },
      isSubmiting: false,
    };
  },
  methods: {
    handleSubmit() {
      this.error.nickname = this.formData.nickname ? "" : "请填写昵称";
      this.error.content = this.formData.content ? "" : "请填写内容";
      if (this.error.nickname || this.error.content) {
        // 有错误
        return;
      }
      this.isSubmiting = true; // 正在提交 防止重复点击
      this.$emit("submit", this.formData, (successMsg) => {
        this.$showMessage({
          content: successMsg,
          type: "success",
          duration: 1000,
          container: this.$refs.form,
          callback: () => {
            this.isSubmiting = false;
            this.formData.nickname = "";
            this.formData.content = "";
          },
        });
      }); // 让父组件处理事件
    },
  },
};
</script>

<style scoped lang="less">
@import "~@/styles/var.less";
.data-form-container {
  margin-bottom: 20px;
  overflow: hidden;
}
.form-item {
  margin-bottom: 8px;
}
.input-area {
  width: 30%;
  position: relative;
}
.text-area {
  position: relative;
}
.tip {
  position: absolute;
  right: 5px;
  bottom: 5px;
  color: #b4b8bc;
  font-size: 12px;
}
input,
textarea {
  display: block;
  width: 100%;
  box-sizing: border-box;
  border: 1px dashed @gray;
  outline: none;
  color: @words;
  font-size: 16px;
  border-radius: 4px;
  &:focus {
    border-color: @primary;
  }
}
input {
  line-height: 28px;
  border: 2px solid transparent;
  border-bottom-color: #777;
  padding: 0.2rem 0;
  outline: none;
  background-color: transparent;
  color: #0d0c22;
  transition: 0.3s cubic-bezier(0.645, 0.045, 0.355, 1);
  &:focus,
  &:hover {
    outline: none;
    padding: 0.2rem 1rem;
    border-radius: 1rem;
    border-color: #7a9cc6;
    background-color: #fff;
  }
  &:focus::placeholder {
    opacity: 0;
    transition: opacity 0.3s;
  }
  &::placeholder {
    color: @gray;
  }
}
textarea {
  resize: none;
  padding: 1.5rem 1rem;
  height: 120px;
  transition: 0.3s cubic-bezier(0.645, 0.045, 0.355, 1);
  &:focus {
    outline: none;
    padding: 0.6rem 1rem;
    border: 1px solid #7a9cc6;
    border-color: #7a9cc6;
    background-color: #fff;
  }
  &:focus::placeholder {
    opacity: 0;
    transition: opacity 0.3s;
  }
  &::placeholder {
    color: @gray;
  }
}
.error {
  margin-top: 6px;
  color: @danger;
  font-size: 14px;
  height: 20px;
  line-height: 20px;
}
button {
  position: relative;
  cursor: pointer;
  border: none;
  outline: none;
  width: 100px;
  height: 34px;
  color: #fff;
  border-radius: 4px;
  background: @primary;
  &:hover {
    background: darken(@primary, 10%);
  }
  &:disabled {
    background: lighten(@primary, 20%);
    cursor: not-allowed;
  }
}
</style>
