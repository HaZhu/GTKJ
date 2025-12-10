// request.js

const baseUrl = "https://192.168.0.183:5008";

export default function request(options = { method: "GET", data: {}, contentType: "application/json" }) {
  const data = {
    ...(options.data || {})
  };

  const headers = {
    "Content-Type": options.contentType || "application/json",
    token: uni.getStorageSync("token"),
    locale: "zh_CN"
  };

  return new Promise((resolve, reject) => {
    uni.request({
      url: (options.baseUrl || baseUrl) + options.url,
      data,
      header: headers,
      method: options.method.toUpperCase(),
      success: (res) => {
        const { statusCode, data } = res;

        // 未登录或登录过期
        if (data.code === 501) {
          uni.showToast({
            title: data.msg || "登录已过期，请重新登录",
            icon: "none",
            duration: 3000
          });

          // 保存返回地址（如果你需要和 Taro 一样的逻辑）
          setLoginReturnUrl();

          // 跳转登录页
          uni.reLaunch({
            url: "/pages/login/index"
          });
          return;
        }

        // 业务错误 / HTTP 错误
        if (statusCode !== 200 || (data.code && data.code !== 200)) {
          setTimeout(() => {
            uni.showToast({
              title: data.msg || "网络请求错误",
              icon: "none",
              duration: 3000
            });
          }, 200);
        }

        resolve(data);
      },
      fail: (e) => {
        uni.showToast({
          title: typeof e === "string" ? `网络错误 ${e}` : `网络错误 ${JSON.stringify(e)}`,
          icon: "none"
        });
        reject(e);
      }
    });
  });
}
