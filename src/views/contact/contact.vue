<template>
  <section class="contact-page">
    <div class="contact-card">
      <h1>南昌弘盾消防设备有限公司</h1>

      <p class="phone-line">
        <span class="label">李总：</span>
        <strong>13970083059</strong>
      </p>

      <p class="address-line">
        <span class="label">地址：</span>
        <span>南昌市进贤县工业园</span>
      </p>
    </div>
  </section>
</template>

<style scoped lang="scss">
.contact-page {
  background: #efefef;
  min-height: calc(100vh - 180px);
  padding: 16px;
}

.contact-card {
  max-width: 1200px;
  min-height: 560px;
  margin: 0 auto;
  background: #f5f5f5;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 56px;

  h1 {
    margin: 0;
    color: #2f3338;
    font-size: 62px;
    transform: scale(0.5);
    transform-origin: center center;
    line-height: 1;
    font-weight: 700;
  }

  p {
    margin: 0;
    color: #383838;
    display: flex;
    align-items: baseline;
    font-size: 60px;
    transform: scale(0.5);
    transform-origin: center center;
    line-height: 1;
    font-weight: 500;
  }

  .label {
    margin-right: 18px;
    color: #3f3f3f;
  }

  .phone-line {
    strong {
      color: #000;
      letter-spacing: 1px;
      font-weight: 500;
    }
  }
}

@media (max-width: 768px) {
  .contact-page {
    padding: 12px;
  }

  .contact-card {
    min-height: 420px;
    gap: 30px;
    padding: 0 12px;

    h1 {
      font-size: 48px;
      text-align: center;
      width: 200%;
    }

    p {
      font-size: 42px;
      width: 200%;
      justify-content: center;
      flex-wrap: wrap;
      row-gap: 8px;
    }

    .label {
      margin-right: 10px;
    }
  }
}
</style>
