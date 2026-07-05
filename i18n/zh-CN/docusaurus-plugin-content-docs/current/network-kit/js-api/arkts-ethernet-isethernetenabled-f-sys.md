# isEthernetEnabled

## isEthernetEnabled

```TypeScript
function isEthernetEnabled(): boolean
```

Check whether the global ethernet switch is enabled.

**起始版本：** 26.0.0

**需要权限：** 

 ohos.permission.GET_NETWORK_INFO

**模型约束：** 此接口仅可在Stage模型下使用。

**系统能力：** SystemCapability.Communication.NetManager.Ethernet

**系统接口：** 此接口为系统接口。

**返回值：**

| 类型 | 说明 |
| --- | --- |
| boolean | True if ethernet is globally enabled. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 201 | Permission denied. |
| 202 | Non-system applications use system APIs. |
| 2200002 | Operation failed. Cannot connect to service. |
| 2200003 | Internal error. |

