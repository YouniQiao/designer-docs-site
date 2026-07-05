# EntityRecognizer

Provides entity recognition capabilities, which can be used to obtain the type and start and end positions of an entity in the text. Currently, supported entities include phone numbers, and date and time.

**Since:** 11

**System capability:** SystemCapability.Global.I18n

## Modules to Import

```TypeScript
import { i18n } from '@kit.LocalizationKit';
```

## constructor

```TypeScript
constructor(locale?: string)
```

Creates an **entityRecognizer** object. This object is used to recognize entities in the text for the specified locale.

**Since:** 11

**Atomic service API:** From API version 12 this API can be used in atomic services.

**System capability:** SystemCapability.Global.I18n

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| locale | string | No |  |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 401 | Parameter error. Possible causes: 1.Mandatory parameters are left unspecified;  2.Incorrect parameter types. |
| 890001 | Invalid parameter. Possible causes: Parameter verification failed. |

**Example**

```TypeScript
import { BusinessError } from '@kit.BasicServicesKit';
import { i18n } from '@kit.LocalizationKit';

try {
  let entityRecognizer: i18n.EntityRecognizer = new i18n.EntityRecognizer('zh-CN');
} catch (error) {
  let err: BusinessError = error as BusinessError;
  console.error(`call new i18n.EntityRecognizer failed, error code: ${err.code}, message: ${err.message}.`);
}

```

## findEntityInfo

```TypeScript
findEntityInfo(text: string): Array<EntityInfoItem>
```

Obtains entity information in the **text** object.

**Since:** 11

**Atomic service API:** From API version 12 this API can be used in atomic services.

**System capability:** SystemCapability.Global.I18n

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| text | string | Yes | Input text. |

**Return value:**

| Type | Description |
| --- | --- |
| Array&lt;EntityInfoItem> | List of entities in the text. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 401 | Parameter error. Possible causes: 1.Mandatory parameters are left unspecified;  2.Incorrect parameter types. |

**Example**

```TypeScript
import { BusinessError } from '@kit.BasicServicesKit';
import { i18n } from '@kit.LocalizationKit';

try {
  let entityRecognizer: i18n.EntityRecognizer = new i18n.EntityRecognizer('zh-CN');
  let phoneNumberText: string = 'If you have any questions, call us by phone 12345678.';
  // phoneNumberEntity[0].type = 'phone_number', phoneNumberEntity[0].begin = 8, phoneNumberEntity[0].end = 19
  let phoneNumberEntity: Array<i18n.EntityInfoItem> = entityRecognizer.findEntityInfo(phoneNumberText);
  let dateText: string = 'Let's have dinner on December 1, 2023.';
  // dateEntity[0].type = 'date', dateEntity[0].begin = 2, dateEntity[0].end = 12
  let dateEntity: Array<i18n.EntityInfoItem> = entityRecognizer.findEntityInfo(dateText);
} catch (error) {
  let err: BusinessError = error as BusinessError;
  console.error(`call EntityRecognizer.findEntityInfo failed, error code: ${err.code}, message: ${err.message}.`);
}

```

