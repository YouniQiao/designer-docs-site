# importVCard

## Modules to Import

```TypeScript
import { vcard } from '@kit.TelephonyKit';
```

<a id="importvcard"></a>
## importVCard

```TypeScript
function importVCard(context: Context, filePath: string, accountId: number, callback: AsyncCallback<void>): void
```

Import contacts from the specified vcf file.

**Since:** 23

**Required permissions:** ohos.permission.WRITE_CONTACTS and ohos.permission.READ_CONTACTS

<!--Device-vcard-function importVCard(context: Context, filePath: string, accountId: int, callback: AsyncCallback<void>): void--><!--Device-vcard-function importVCard(context: Context, filePath: string, accountId: int, callback: AsyncCallback<void>): void-End-->

**System capability:** SystemCapability.Telephony.CoreService

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| context | [Context](../../apis-arkui/arkts-components/arkts-arkui-context-t.md) | Yes | Indicates the context of application or capability. |
| filePath | string | Yes | Vcf file path. |
| accountId | number | Yes | Contact account ID. When the app chooses to import the vcf file into a contact account,it needs to pass in the accountId. If the accountId is not passed, a new contact account will be added by default. |
| callback | [AsyncCallback](../../apis-basic-service-kit/arkts-apis/arkts-basicservices-base-asynccallback-i.md)&lt;void&gt; | Yes | The callback of the function. |

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

class EntryAbility extends UIAbility {
    onWindowStageCreate(windowStage: window.WindowStage) {
        let filePath: string = "/data/storage/vcf/contacts.vcf";
        let accountId: number = 0;
        vcard.importVCard(this.context, filePath, accountId, (err: BusinessError) => {
            console.error(`callback: err->${JSON.stringify(err)}`);
        });
    }
}


```


<a id="importvcard-1"></a>
## importVCard

```TypeScript
function importVCard(context: Context, filePath: string, accountId?: number): Promise<void>
```

Import contacts from the specified vcf file.

**Since:** 23

**Required permissions:** ohos.permission.WRITE_CONTACTS and ohos.permission.READ_CONTACTS

<!--Device-vcard-function importVCard(context: Context, filePath: string, accountId?: int): Promise<void>--><!--Device-vcard-function importVCard(context: Context, filePath: string, accountId?: int): Promise<void>-End-->

**System capability:** SystemCapability.Telephony.CoreService

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| context | [Context](../../apis-arkui/arkts-components/arkts-arkui-context-t.md) | Yes | Indicates the context of application or capability. |
| filePath | string | Yes | Vcf file path. |
| accountId | number | No | Contact account ID.When the app chooses to import the vcf file into a contact account,it needs to pass in the accountId. If the accountId is not passed, a new contact account will be added by default. |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;void&gt; | the promise returned by the function. |

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

class EntryAbility extends UIAbility {
    onWindowStageCreate(windowStage: window.WindowStage) {
        let filePath: string = "/data/storage/vcf/contacts.vcf";
        let accountId: number = 0;
        vcard.importVCard(this.context, filePath, accountId).then(() => {
            console.info(`importVCard success.`);
        }).catch((err: BusinessError) => {
            console.error(`importVCard failed, promise: err->${JSON.stringify(err)}`);
        });
    }
}

```


<a id="importvcard-2"></a>
## importVCard

```TypeScript
function importVCard(context: Context, filePath: string, callback: AsyncCallback<void>): void
```

Import contacts from the specified vcf file.

**Since:** 23

**Required permissions:** ohos.permission.WRITE_CONTACTS and ohos.permission.READ_CONTACTS

<!--Device-vcard-function importVCard(context: Context, filePath: string, callback: AsyncCallback<void>): void--><!--Device-vcard-function importVCard(context: Context, filePath: string, callback: AsyncCallback<void>): void-End-->

**System capability:** SystemCapability.Telephony.CoreService

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| context | [Context](../../apis-arkui/arkts-components/arkts-arkui-context-t.md) | Yes | Indicates the context of application or capability. |
| filePath | string | Yes | Vcf file path. |
| callback | [AsyncCallback](../../apis-basic-service-kit/arkts-apis/arkts-basicservices-base-asynccallback-i.md)&lt;void&gt; | Yes | The callback of the function. |

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

class EntryAbility extends UIAbility {
    onWindowStageCreate(windowStage: window.WindowStage) {
        let filePath: string = "/data/storage/vcf/contacts.vcf";
        vcard.importVCard(this.context, filePath, (err: BusinessError) => {
            console.error(`callback: err->${JSON.stringify(err)}`);
        });
    }
}


```

