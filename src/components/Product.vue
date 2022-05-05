<template>
  <div class="con">
    <div class="product-con">
      <input
        @input="(event) => $emit('update:checked', event.target.checked)"
        type="checkbox"
        :checked="checked"
        :id="product.id"
        class="delete-checkbox"
      />
      <label :for="product.id">
        <p>{{ product.SKU }}</p>
        <p>{{ product.name }}</p>
        <p>{{ product.price }} $</p>
        <p>
          {{
            product.productType === "Book"
              ? "Weight: "
              : product.productType === "DVD"
              ? "Size: "
              : "Dimentions: "
          }}
          {{ product.size || product.dimentions || product.weight }}
          {{
            product.productType === "Book"
              ? "KG"
              : product.productType === "DVD"
              ? "MB"
              : ""
          }}
        </p>
      </label>
    </div>
  </div>
</template>

<script>
export default {
  name: "Product",
  props: {
    product: Object,
    checked: {
      type: Boolean,
    },
  },
};
</script>

<style lang="scss" scoped>
.con {
  display: flex;
  flex-wrap: flex-wrap;
}
.product-con {
  width: 150px;
  height: 100px;
  border: 2px black solid;
  font-size: 12px;
  font-weight: 400;
  line-height: 0.4;
  position: relative;
  padding-top: 30px;
  border-radius: 2px;
  text-align: center;
  margin: 20px 10px;

  .delete-checkbox {
    position: absolute;
    left: 10px;
    top: 10px;
  }
}
</style>
