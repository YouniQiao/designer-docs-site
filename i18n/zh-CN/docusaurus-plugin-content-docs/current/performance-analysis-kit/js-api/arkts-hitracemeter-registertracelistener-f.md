# registerTraceListener

## registerTraceListener

```TypeScript
function registerTraceListener(callback: TraceEventListener): int
```

Registers a callback to notify whether the application trace capture is enabled. This API uses a synchronous callback to return the result. After the registration is successful, the callback is executed immediately. Subsequent callbacks are executed when the application trace capture status changes. > **NOTE** > > If the callback contains time-consuming operations, the registration or deregistration will be blocked (waiting > for the callback execution to complete) when the callback is executed. > > Therefore, you are advised not to register or deregister callbacks containing time-consuming operations in the > main thread of the application to avoid application freeze.

**起始版本：** 22

**原子化服务API：** 该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.HiviewDFX.HiTrace

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| callback | TraceEventListener | 是 | Registered callback. |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| int | Callback registration status.  >= 0: The registration is successful. The callback index for deregistration is returned.  The index ranges from 0 to 9.  -1: The maximum number of callbacks has been reached.  -2: Invalid parameter. The parameter is not of the TraceEventListener type. |

**示例：**

```TypeScript
// 注册的回调函数定义
let callback: hiTraceMeter.TraceEventListener = (traceStatus: boolean) => {
  if (traceStatus) {
    // 当前应用trace捕获开启，业务流程......
  } else {
    // 当前应用trace捕获关闭，业务流程......
  }
};

// 注册应用trace捕获开关通知回调
let index = hiTraceMeter.registerTraceListener(callback);
if (index < 0) {
  // 异常处理......
}

```

