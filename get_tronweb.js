async function getTronWeb() {
  if (!window.tronLink) {
    throw new Error("请安装TronLink");
  }

  if (window.tronLink.ready) {
    return window.tronLink.tronWeb;
  }

  const res = await window.tronLink.request({
    method: "tron_requestAccounts",
    params: {
      websiteIcon: "https://file.axum.rs/asset/logo.png",
      websiteName: "AXUM中文网",
    },
  });
  if (res.code !== 200) {
    throw new Error("未能成功连接TronLink钱包");
  }
  return window.tronLink.tronWeb;
}
