# enableEthernetInterface

## enableEthernetInterface

```TypeScript
function enableEthernetInterface(): Promise<void>
```

Enable the ethernet interface.

**起始版本：** 26.0.0

**需要权限：** 

 ohos.permission.CONNECTIVITY_INTERNAL

**模型约束：** 此接口仅可在Stage模型下使用。

**系统能力：** SystemCapability.Communication.NetManager.Ethernet

**系统接口：** 此接口为系统接口。

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Promise&lt;void> | The promise returned when the ethernet interface is enabled. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 201 | Permission denied. |
| 202 | Non-system applications use system APIs. |
| 2200002 | Failed to connect to the service. |
| 2200003 | System internal error. |

