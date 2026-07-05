# isTraceEnabled

## isTraceEnabled

```TypeScript
function isTraceEnabled(): boolean
```

Checks whether application trace capture is enabled.

**起始版本：** 19

**原子化服务API：** 该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.HiviewDFX.HiTrace

**返回值：**

| 类型 | 说明 |
| --- | --- |
| boolean | true is returned when the trace capture is enabled using  [hitrace](docroot://dfx/hitrace.md). false is returned when it is disabled or stopped. In this case,  calling the HiTraceMeter API does not take effect. |

**示例：**

```TypeScript
if (hiTraceMeter.isTraceEnabled()) {
  // 业务流程......
} else {
  // 业务流程......
}

```

