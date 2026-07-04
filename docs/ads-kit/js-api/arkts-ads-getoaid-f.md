# getOAID

## Modules to Import

```TypeScript
import { identifier } from '@ohos.identifier.oaid';
```

## getOAID

```TypeScript
function getOAID(callback: AsyncCallback<string>): void
```

Obtains the OAID. This API uses an asynchronous callback to return the result.

**Since:** 10

**Required permissions:** ohos.permission.APP_TRACKING_CONSENT

**System capability:** SystemCapability.Advertising.OAID

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | AsyncCallback&lt;string&gt; | Yes | Callback used to return the OAID.1. If the app has configured the ohos.permission.APP_TRACKING_CONSENT permission and the cross-app associationaccess permission is allowed, the OAID is returned.2. If the app has configured the ohos.permission.APP_TRACKING_CONSENT permission andthe cross-app association access permission is disallowed, 00000000-0000-0000-0000-000000000000 is returned.3. If the app has not configured the ohos.permission.APP_TRACKING_CONSENT permission,00000000-0000-0000-0000-000000000000 is returned. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [17300001](../errorcode-oaid.md#17300001-system-internal-error) | System internal error. |

**Example**

```TypeScript
import { identifier } from '@kit.AdsKit';
import { BusinessError } from '@kit.BasicServicesKit';

identifier.getOAID((err: BusinessError, data: string) => {
  if (err.code) {
    return;
  }
  const oaid: string = data;
});

```


## getOAID

```TypeScript
function getOAID(): Promise<string>
```

Obtains the OAID. This API uses a promise to return the result.

**Since:** 10

**Required permissions:** ohos.permission.APP_TRACKING_CONSENT

**System capability:** SystemCapability.Advertising.OAID

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;string&gt; | Promise used to return the OAID.1. If the app has configured the ohos.permission.APP_TRACKING_CONSENTpermission and the cross-app association access permission is allowed, the OAID is returned.2. If the app has configured the ohos.permission.APP_TRACKING_CONSENT permissionand the cross-app association access permission is disallowed, 00000000-0000-0000-0000-000000000000is returned.3. If the app has not configured the ohos.permission.APP_TRACKING_CONSENT permission,00000000-0000-0000-0000-000000000000 is returned. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [17300001](../errorcode-oaid.md#17300001-system-internal-error) | System internal error. |

**Example**

```TypeScript
import { identifier } from '@kit.AdsKit';

identifier.getOAID().then((data: string) => {
  const oaid: string = data;
});

```

