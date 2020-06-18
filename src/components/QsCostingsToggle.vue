<style scoped>
.switch-wrapper {
  display: flex;
  flex-direction: row;
  align-items: center;
  background-color: #fff;
  padding: 0.5em 1em 0.5em 0.5em;
  border-radius: 34px;
  border: 1px solid lightgray;
}

.switch-wrapper.disabled {
  opacity: 0.7;
}

.switch-wrapper > label {
  margin-left: 1em;
  font-size: smaller;
}

/* The switch - the box around the slider */
.switch {
  position: relative;
  display: inline-block;
  width: 60px;
  height: 34px;
}

/* Hide default HTML checkbox */
.switch input {
  opacity: 0;
  width: 0;
  height: 0;
}

/* The slider */
.slider {
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #ccc;
  -webkit-transition: 0.4s;
  transition: 0.4s;
}

.slider:before {
  position: absolute;
  content: "";
  height: 26px;
  width: 26px;
  left: 4px;
  bottom: 4px;
  background-color: white;
  -webkit-transition: 0.4s;
  transition: 0.4s;
}

input:checked + .slider {
  background-color: #65b891;
}

input:focus + .slider {
  box-shadow: 0 0 1px #65b891;
}

input:checked + .slider:before {
  -webkit-transform: translateX(26px);
  -ms-transform: translateX(26px);
  transform: translateX(26px);
}

/* Rounded sliders */
.slider.round {
  border-radius: 34px;
}

.slider.round:before {
  border-radius: 50%;
}
</style>

<template>
  <div class="switch-wrapper" :disabled="disabled" :class="{'disabled':disabled}">
    <div class="switch">
      <input
        :id="'qs-toggle-' + _uid"
        v-model="privateValue"
        @change="toggleTriggered"
        type="checkbox"
        :disabled="disabled"
      />
      <span class="slider round" @click="toggleTriggeredByToggleClick" aria-hidden="true"></span>
    </div>
    <label :for="'qs-toggle-' + _uid">{{ label }}</label>
  </div>
</template>

<script>
export default {
  props: {
    value: {
      type: Boolean,
      default: false
    },
    label: {
      type: String
    },
    disabled: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      privateValue: false
    };
  },
  watch: {
    value: function(newValue) {
      this.privateValue = newValue;
    }
  },
  mounted() {
    this.privateValue = this.value;
  },
  methods: {
    toggleTriggeredByToggleClick() {
      if (this.disabled) return;
      this.privateValue = !this.privateValue;
      this.toggleTriggered(null);
    },
    toggleTriggered(e) {
      if (this.disabled) return;
      this.$emit("change", this.privateValue);
    }
  }
};
</script>