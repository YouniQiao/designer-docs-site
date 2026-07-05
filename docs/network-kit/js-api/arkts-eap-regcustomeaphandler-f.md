# regCustomEapHandler

## regCustomEapHandler

```TypeScript
function regCustomEapHandler(netType: number, eapCode: number, eapType: number, callback: Callback<EapData>): void
```

Customize eap packets by callback

**Since:** 20

**Required permissions:** 

 ohos.permission.MANAGE_ENTERPRISE_WIFI_CONNECTION

**System capability:** SystemCapability.Communication.NetManager.Eap

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| netType | number | Yes | Indicates net type need to customize. |
| eapCode | number | Yes | Indicates eap code need to customize. |
| eapType | number | Yes | Indicates eap type need to customize. |
| callback | Callback&lt;EapData> | Yes | the callback of eap packet customization. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 201 | Permission denied. |
| 33200006 | Invalid net type |
| 33200007 | Invalid eap code |
| 33200008 | Invalid eap type |
| 33200009 | netmanager stop |
| 33200099 | internal error |

**Example**

```TypeScript
import {eap} from '@kit.NetworkKit';
let netType = 1;
let eapCode = 1;
let eapType = 25;
let eapData = (eapData:eap.EapData):void => {
  console.info("rsp result", JSON.stringify(eapData));
};
    
eap.regCustomEapHandler(netType, eapCode, eapType, eapData);
console.info('regCustomEapHandler success');

```

