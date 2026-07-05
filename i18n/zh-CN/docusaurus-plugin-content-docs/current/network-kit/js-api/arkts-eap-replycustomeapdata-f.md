# replyCustomEapData

## replyCustomEapData

```TypeScript
function replyCustomEapData(result: CustomResult, data: EapData): void
```

send Customized eap packets to system

**起始版本：** 20

**需要权限：** 

 ohos.permission.MANAGE_ENTERPRISE_WIFI_CONNECTION

**系统能力：** SystemCapability.Communication.NetManager.Eap

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| result | CustomResult | 是 | Indicates the result of custom authentication. |
| data | EapData | 是 | Indicates eap packet data after customization. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 201 | Permission denied. |
| 33200004 | Invalid result |
| 33200005 | Invalid size of eap data |
| 33200009 | netmanager stop |
| 33200099 | internal error |

