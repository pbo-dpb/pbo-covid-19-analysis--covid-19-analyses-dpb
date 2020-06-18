<style scoped>
.loader-container {
  text-align: center;
}
.loader {
  display: inline-block;
  width: 50px;
  height: 50px;
  border: 3px solid #aaa;
  border-radius: 50%;
  border-top-color: #111;
  animation: spin 1s ease-in-out infinite;
  -webkit-animation: spin 1s ease-in-out infinite;
}

@keyframes spin {
  to {
    -webkit-transform: rotate(360deg);
  }
}
@-webkit-keyframes spin {
  to {
    -webkit-transform: rotate(360deg);
  }
}
</style>
<template>
  <div class="loader-container">
    <div class="loader" aria-busy="true" aria-live="polite"></div>
  </div>
</template>