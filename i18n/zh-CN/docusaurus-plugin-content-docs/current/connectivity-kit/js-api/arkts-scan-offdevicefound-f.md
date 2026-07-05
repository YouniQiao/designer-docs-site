# offDeviceFound

## offDeviceFound

```TypeScript
function offDeviceFound(callback?: Callback<ScanResults[]>): void
```

取消订阅星闪扫描结果。

**起始版本：** 26.0.0

**模型约束：** 此接口仅可在Stage模型下使用。

**系统能力：** SystemCapability.Communication.NearLink.Base

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| callback | Callback&lt;ScanResults[]> | 否 |  |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 801 | Capability not supported because the chip does not support it. |

