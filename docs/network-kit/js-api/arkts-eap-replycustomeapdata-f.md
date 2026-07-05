# replyCustomEapData

## replyCustomEapData

```TypeScript
function replyCustomEapData(result: CustomResult, data: EapData): void
```

send Customized eap packets to system

**Since:** 20

**Required permissions:** 

 ohos.permission.MANAGE_ENTERPRISE_WIFI_CONNECTION

**System capability:** SystemCapability.Communication.NetManager.Eap

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| result | CustomResult | Yes | Indicates the result of custom authentication. |
| data | EapData | Yes | Indicates eap packet data after customization. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 201 | Permission denied. |
| 33200004 | Invalid result |
| 33200005 | Invalid size of eap data |
| 33200009 | netmanager stop |
| 33200099 | internal error |

