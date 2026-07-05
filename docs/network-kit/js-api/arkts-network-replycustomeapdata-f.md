# replyCustomEapData

## Modules to Import

```TypeScript
import { eap } from '@ohos.net.eap';
```

## replyCustomEapData

```TypeScript
function replyCustomEapData(result: CustomResult, data: EapData): void
```

send Customized eap packets to system

**Since:** 20

**Required permissions:** ohos.permission.MANAGE_ENTERPRISE_WIFI_CONNECTION

**System capability:** SystemCapability.Communication.NetManager.Eap

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| result | CustomResult | Yes | Indicates the result of custom authentication. |
| data | EapData | Yes | Indicates eap packet data after customization. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [201](../../errorcode-universal.md#201-permission-denied) | Permission denied. |
| [33200004](../errorcode-net-eap.md#33200004-invalid-eap-result-value) | Invalid result |
| [33200005](../errorcode-net-eap.md#33200005-invalid-data-length) | Invalid size of eap data |
| [33200009](../errorcode-net-eap.md#33200009-netmanager-not-exist) | netmanager stop |
| [33200099](../errorcode-net-eap.md#33200099-internal-program-error) | internal error |

