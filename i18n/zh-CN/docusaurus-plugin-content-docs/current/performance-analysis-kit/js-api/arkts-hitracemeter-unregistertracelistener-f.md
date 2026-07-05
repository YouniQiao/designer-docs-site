# unregisterTraceListener

## unregisterTraceListener

```TypeScript
function unregisterTraceListener(index: int): int
```

Unregisters the callback function used to notify whether the trace capture is enabled, which is registered using **registerTraceListener()**.

**起始版本：** 22

**原子化服务API：** 该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.HiviewDFX.HiTrace

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| index | int | 是 | Index of the registered callback function, that is, the return value when  [registerTraceListener()]hiTraceMeter.registerTraceListener is successfully called  The value range is all integers. |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| int | Callback deregistration status.  0: Deregistration succeeded.  -1: The callback corresponding to the index is not registered.  -2: Invalid index. The index value is not within the range of 0 to 9. |

**示例：**

```TypeScript
// 注销应用trace捕获开关通知回调，index为hiTraceMeter.registerTraceListener返回的回调索引
let ret = hiTraceMeter.unregisterTraceListener(index);
if (ret < 0) {
  // 异常处理......
}

```

