# unregCustomEapHandler

## Modules to Import

```TypeScript
import { eap } from '@ohos.net.eap';
```

## unregCustomEapHandler

```TypeScript
function unregCustomEapHandler(netType:number, eapCode: number, eapType: number, callback: Callback<EapData>): void
```

unreg the callback of eap packet customization.

**Since:** 20

**Required permissions:** ohos.permission.MANAGE_ENTERPRISE_WIFI_CONNECTION

**System capability:** SystemCapability.Communication.NetManager.Eap

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| netType | number | Yes | Indicates net type need to customize. |
| eapCode | number | Yes | Indicates eap code need to customize. |
| eapType | number | Yes | Indicates eap type need to customize. |
| callback | Callback&lt;EapData&gt; | Yes | the callback of eap packet customization. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [201](../../errorcode-universal.md#201-permission-denied) | Permission denied. |
| [33200006](../errorcode-net-eap.md#33200006-invalid-network-type) | Invalid net type |
| [33200007](../errorcode-net-eap.md#33200007-invalid-eapcode-value) | Invalid eap code |
| [33200008](../errorcode-net-eap.md#33200008-invalid-eaptype-value) | Invalid eap type |
| [33200009](../errorcode-net-eap.md#33200009-netmanager-not-exist) | netmanager stop |
| [33200099](../errorcode-net-eap.md#33200099-internal-program-error) | internal error |

**Example**

```TypeScript
import {eap} from '@kit.NetworkKit';
let netType = 1;
let eapCode = 1;
let eapType = 25;
let eapData = (eapData:eap.EapData):void => {
  console.info("rsp result", JSON.stringify(eapData));
};
    
eap.unregCustomEapHandler(netType, eapCode, eapType, eapData);
console.info('unregCustomEapHandler success');

```

