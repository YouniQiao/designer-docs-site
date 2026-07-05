# startManualNetworkScan

## startManualNetworkScan

```TypeScript
function startManualNetworkScan(slotId: int, callback: Callback<NetworkSearchRealTimeResult>): void
```

start ManualNetworkScan , Real-time report.

**起始版本：** 23

**需要权限：** 

 ohos.permission.GET_TELEPHONY_STATE

**系统能力：** SystemCapability.Telephony.CoreService

**系统接口：** 此接口为系统接口。

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| slotId | int | 是 | Indicates the card slot index number. |
| callback | Callback&lt;NetworkSearchRealTimeResult> | 是 | Indicates the callback for manual network scan |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 201 | Permission denied. |
| 202 | Nonsystem applications use system APIs. |
| 8300001 | Invalid parameter value. |
| 8300002 | Service connection failed. |
| 8300003 | System internal error. |
| 8300999 | Unknown error. |

