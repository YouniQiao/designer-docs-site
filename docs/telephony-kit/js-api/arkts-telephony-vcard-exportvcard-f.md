# exportVCard

## Modules to Import

```TypeScript
import { vcard } from '@kit.TelephonyKit';
```

<a id="exportvcard"></a>
## exportVCard

```TypeScript
function exportVCard(context: Context, predicates: dataSharePredicates.DataSharePredicates, options: VCardBuilderOptions, callback: AsyncCallback<string>): void
```

Export contact data to a vcf file.

**Since:** 23

**Required permissions:** ohos.permission.WRITE_CONTACTS and ohos.permission.READ_CONTACTS

<!--Device-vcard-function exportVCard(context: Context, predicates: dataSharePredicates.DataSharePredicates, options: VCardBuilderOptions, callback: AsyncCallback<string>): void--><!--Device-vcard-function exportVCard(context: Context, predicates: dataSharePredicates.DataSharePredicates, options: VCardBuilderOptions, callback: AsyncCallback<string>): void-End-->

**System capability:** SystemCapability.Telephony.CoreService

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| context | [Context](../../apis-arkui/arkts-components/arkts-arkui-context-t.md) | Yes | Indicates the context of application or capability. |
| predicates | dataSharePredicates.DataSharePredicates | Yes | Execute statement. |
| options | [VCardBuilderOptions](arkts-telephony-vcard-vcardbuilderoptions-i.md) | Yes | Encoding and version. |
| callback | [AsyncCallback](../../apis-basic-service-kit/arkts-apis/arkts-basicservices-base-asynccallback-i.md)&lt;string&gt; | Yes | Represents the address of the generated vcf file. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [201](../../errorcode-universal.md#201-permission-denied) | Permission denied. |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.2. Incorrect parameter types. |
| [8300001](../errorcode-telephony.md#8300001-input-parameter-value-out-of-range) | Invalid parameter value. |
| [8300003](../errorcode-telephony.md#8300003-system-internal-error) | System internal error. |
| [8300999](../errorcode-telephony.md#8300999-internal-error) | Unknown error. |

**Example**

```TypeScript
import { window } from '@kit.ArkUI';
import { UIAbility } from '@kit.AbilityKit';
import { BusinessError } from '@kit.BasicServicesKit';
import { vcard } from '@kit.TelephonyKit';
import { dataSharePredicates } from '@kit.ArkData';

class EntryAbility extends UIAbility {
    onWindowStageCreate(windowStage: window.WindowStage) {
        let predicates = new dataSharePredicates.DataSharePredicates();
        predicates.equalTo("NAME", "Rose");
        let options: vcard.VCardBuilderOptions = {
            cardType: vcard.VCardType.VERSION_21,
            charset: "UTF-8"
        };
        vcard.exportVCard(this.context, predicates, options, (err: BusinessError, data: string) => {
            console.error(`callback: err->${JSON.stringify(err)}, data->${JSON.stringify(data)}`);
        });
    }
}


```


<a id="exportvcard-1"></a>
## exportVCard

```TypeScript
function exportVCard(context: Context, predicates: dataSharePredicates.DataSharePredicates, options?: VCardBuilderOptions): Promise<string>
```

Export contact data to a vcf file.

**Since:** 23

**Required permissions:** ohos.permission.WRITE_CONTACTS and ohos.permission.READ_CONTACTS

<!--Device-vcard-function exportVCard(context: Context, predicates: dataSharePredicates.DataSharePredicates, options?: VCardBuilderOptions): Promise<string>--><!--Device-vcard-function exportVCard(context: Context, predicates: dataSharePredicates.DataSharePredicates, options?: VCardBuilderOptions): Promise<string>-End-->

**System capability:** SystemCapability.Telephony.CoreService

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| context | [Context](../../apis-arkui/arkts-components/arkts-arkui-context-t.md) | Yes | Indicates the context of application or capability. |
| predicates | dataSharePredicates.DataSharePredicates | Yes | Execute statement. |
| options | [VCardBuilderOptions](arkts-telephony-vcard-vcardbuilderoptions-i.md) | No | Encoding and version. |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;string&gt; | the promise represents the address of the generated vcf file.. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [201](../../errorcode-universal.md#201-permission-denied) | Permission denied. |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.2. Incorrect parameter types. |
| [8300001](../errorcode-telephony.md#8300001-input-parameter-value-out-of-range) | Invalid parameter value. |
| [8300003](../errorcode-telephony.md#8300003-system-internal-error) | System internal error. |
| [8300999](../errorcode-telephony.md#8300999-internal-error) | Unknown error. |

**Example**

```TypeScript
import { window } from '@kit.ArkUI';
import { UIAbility } from '@kit.AbilityKit';
import { BusinessError } from '@kit.BasicServicesKit';
import { vcard } from '@kit.TelephonyKit';
import { dataSharePredicates } from '@kit.ArkData';

class EntryAbility extends UIAbility {
    onWindowStageCreate(windowStage: window.WindowStage) {
        let predicates = new dataSharePredicates.DataSharePredicates();
        predicates.equalTo("NAME", "Rose");
        let options: vcard.VCardBuilderOptions = {
            cardType: vcard.VCardType.VERSION_21,
            charset: "UTF-8"
        };
        vcard.exportVCard(this.context, predicates, options).then(() => {
            console.info(`exportVCard success.`);
        }).catch((err: BusinessError) => {
            console.error(`exportVCard failed, promise: err->${JSON.stringify(err)}`);
        });
    }
}

```


<a id="exportvcard-2"></a>
## exportVCard

```TypeScript
function exportVCard(context: Context, predicates: dataSharePredicates.DataSharePredicates, callback: AsyncCallback<string>): void
```

Export contact data to a vcf file.

**Since:** 23

**Required permissions:** ohos.permission.WRITE_CONTACTS and ohos.permission.READ_CONTACTS

<!--Device-vcard-function exportVCard(context: Context, predicates: dataSharePredicates.DataSharePredicates, callback: AsyncCallback<string>): void--><!--Device-vcard-function exportVCard(context: Context, predicates: dataSharePredicates.DataSharePredicates, callback: AsyncCallback<string>): void-End-->

**System capability:** SystemCapability.Telephony.CoreService

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| context | [Context](../../apis-arkui/arkts-components/arkts-arkui-context-t.md) | Yes | Indicates the context of application or capability. |
| predicates | dataSharePredicates.DataSharePredicates | Yes | Execute statement. |
| callback | [AsyncCallback](../../apis-basic-service-kit/arkts-apis/arkts-basicservices-base-asynccallback-i.md)&lt;string&gt; | Yes | Represents the address of the generated vcf file. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [201](../../errorcode-universal.md#201-permission-denied) | Permission denied. |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.2. Incorrect parameter types. |
| [8300001](../errorcode-telephony.md#8300001-input-parameter-value-out-of-range) | Invalid parameter value. |
| [8300003](../errorcode-telephony.md#8300003-system-internal-error) | System internal error. |
| [8300999](../errorcode-telephony.md#8300999-internal-error) | Unknown error. |

**Example**

```TypeScript
import { window } from '@kit.ArkUI';
import { UIAbility } from '@kit.AbilityKit';
import { BusinessError } from '@kit.BasicServicesKit';
import { vcard } from '@kit.TelephonyKit';
import { dataSharePredicates } from '@kit.ArkData';

class EntryAbility extends UIAbility {
    onWindowStageCreate(windowStage: window.WindowStage) {
        let predicates = new dataSharePredicates.DataSharePredicates();
        predicates.equalTo("NAME", "Rose");

        vcard.exportVCard(this.context, predicates, (err: BusinessError, data: string) => {
            console.error(`callback: err->${JSON.stringify(err)}, data->${JSON.stringify(data)}`);
        });
    }
}


```

