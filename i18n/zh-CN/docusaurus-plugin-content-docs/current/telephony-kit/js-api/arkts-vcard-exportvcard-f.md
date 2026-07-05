# exportVCard

## exportVCard

```TypeScript
function exportVCard(context: Context, predicates: dataSharePredicates.DataSharePredicates, options: VCardBuilderOptions, callback: AsyncCallback<string>): void
```

Export contact data to a vcf file.

**起始版本：** 23

**需要权限：** 

 ohos.permission.WRITE_CONTACTS and ohos.permission.READ_CONTACTS

**系统能力：** SystemCapability.Telephony.CoreService

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| context | Context | 是 | Indicates the context of application or capability. |
| predicates | dataSharePredicates.DataSharePredicates | 是 | Execute statement. |
| options | VCardBuilderOptions | 是 | Encoding and version. |
| callback | AsyncCallback&lt;string> | 是 | Represents the address of the generated vcf file. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 201 | Permission denied. |
| 401 | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.  2. Incorrect parameter types. |
| 8300001 | Invalid parameter value. |
| 8300003 | System internal error. |
| 8300999 | Unknown error. |

**示例：**

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

## exportVCard

```TypeScript
function exportVCard(context: Context, predicates: dataSharePredicates.DataSharePredicates, options?: VCardBuilderOptions): Promise<string>
```

Export contact data to a vcf file.

**起始版本：** 23

**需要权限：** 

 ohos.permission.WRITE_CONTACTS and ohos.permission.READ_CONTACTS

**系统能力：** SystemCapability.Telephony.CoreService

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| context | Context | 是 | Indicates the context of application or capability. |
| predicates | dataSharePredicates.DataSharePredicates | 是 | Execute statement. |
| options | VCardBuilderOptions | 否 | Encoding and version. |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Promise&lt;string> | the promise represents the address of the generated vcf file.. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 201 | Permission denied. |
| 401 | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.  2. Incorrect parameter types. |
| 8300001 | Invalid parameter value. |
| 8300003 | System internal error. |
| 8300999 | Unknown error. |

**示例：**

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

## exportVCard

```TypeScript
function exportVCard(context: Context, predicates: dataSharePredicates.DataSharePredicates, callback: AsyncCallback<string>): void
```

Export contact data to a vcf file.

**起始版本：** 23

**需要权限：** 

 ohos.permission.WRITE_CONTACTS and ohos.permission.READ_CONTACTS

**系统能力：** SystemCapability.Telephony.CoreService

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| context | Context | 是 | Indicates the context of application or capability. |
| predicates | dataSharePredicates.DataSharePredicates | 是 | Execute statement. |
| callback | AsyncCallback&lt;string> | 是 | Represents the address of the generated vcf file. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 201 | Permission denied. |
| 401 | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.  2. Incorrect parameter types. |
| 8300001 | Invalid parameter value. |
| 8300003 | System internal error. |
| 8300999 | Unknown error. |

**示例：**

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

