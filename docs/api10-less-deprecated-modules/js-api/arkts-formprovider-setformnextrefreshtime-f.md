# setFormNextRefreshTime

## setFormNextRefreshTime

```TypeScript
function setFormNextRefreshTime(formId: string, minute: number, callback: AsyncCallback<void>): void
```

Sets the next refresh time for a widget. This API uses an asynchronous callback to return the result.

**Since:** 8

**Deprecated since:** 9

**Substitute:** @ohos.app.form.formProvider:formProvider#setFormNextRefreshTime

**System capability:** SystemCapability.Ability.Form

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| formId | string | Yes | Widget ID. |
| minute | number | Yes | Time for the next refresh. The value must be greater than or equal to 5, in minutes. |
| callback | AsyncCallback&lt;void> | Yes | Callback used to return the result. |

**Example**

```TypeScript
import { BusinessError } from '@kit.BasicServicesKit';
import { formProvider } from '@kit.FormKit';
// Use an existing widget ID (formId).
let formId: string = '12400633174999288';
formProvider.setFormNextRefreshTime(formId, 5, (error: BusinessError) => {
  if (error.code) {
    console.error(`formProvider setFormNextRefreshTime, errorCode: ${error.code}, errorMessage: ${error.message}`);
  }
});

```

## setFormNextRefreshTime

```TypeScript
function setFormNextRefreshTime(formId: string, minute: number): Promise<void>
```

Sets the next refresh time for a widget. This API uses a promise to return the result.

**Since:** 8

**Deprecated since:** 9

**Substitute:** @ohos.app.form.formProvider:formProvider#setFormNextRefreshTime

**System capability:** SystemCapability.Ability.Form

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| formId | string | Yes | Widget ID. |
| minute | number | Yes | Time for the next refresh. The value must be greater than or equal to 5, in minutes. |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;void> | Promise that returns no value. |

**Example**

```TypeScript
import { BusinessError } from '@kit.BasicServicesKit';
import { formProvider } from '@kit.FormKit';
// Use an existing widget ID (formId).
let formId: string = '12400633174999288';
formProvider.setFormNextRefreshTime(formId, 5).then(() => {
  console.info('formProvider setFormNextRefreshTime success');
}).catch((error: BusinessError) => {
  console.error(`formProvider setFormNextRefreshTime, errorCode: ${error.code}, errorMessage: ${error.message}`);
});

```

