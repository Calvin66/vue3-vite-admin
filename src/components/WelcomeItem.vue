<template>
  <div class="item">
    <i>
      <slot name="icon" />
    </i>
    <div class="details">
      <h3>
        <slot name="heading" />
      </h3>
      <slot />
    </div>
  </div>
</template>

<style scoped>
.item {
  display: flex;
  margin-top: 2rem;
}

.details {
  margin-left: 1rem;
  flex: 1;
}

i {
  display: flex;
  place-items: center;
  place-content: center;
  width: 32px;
  height: 32px;
  color: var(--color-text);
}

h3 {
  margin-bottom: 0.4rem;
  font-size: 1.2rem;
  font-weight: 500;
  color: var(--color-heading);
}

@media (width >= 1024px) {
  .item {
    margin-top: 0;
    padding: 0.4rem 0 1rem calc(var(--section-gap) / 2);
  }

  i {
    position: absolute;
    top: calc(50% - 25px);
    left: -26px;
    border: 1px solid var(--color-border);
    border-radius: 8px;
    width: 50px;
    height: 50px;
    background: var(--color-background);
  }

  .item::before {
    position: absolute;
    bottom: calc(50% + 25px);
    left: 0;
    border-left: 1px solid var(--color-border);
    height: calc(50% - 25px);
    content: ' ';
  }

  .item::after {
    position: absolute;
    top: calc(50% + 25px);
    left: 0;
    border-left: 1px solid var(--color-border);
    height: calc(50% - 25px);
    content: ' ';
  }

  .item:first-of-type::before {
    display: none;
  }

  .item:last-of-type::after {
    display: none;
  }
}
</style>
