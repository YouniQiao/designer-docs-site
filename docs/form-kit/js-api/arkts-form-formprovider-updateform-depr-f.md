# updateForm

## updateForm

```TypeScript
function updateForm(
    formId: string,
    formBindingData: formBindingData.FormBindingData,
    callback: AsyncCallback<void>
  ): void
```

Updates a widget. This API uses an asynchronous callback to return the result.

**Since:** 8

**Deprecated since:** 9

**Substitutes:** [updateForm](arkts-form-formprovider-updateform-f.md#updateform-1)

<!--Device-formProvider-function updateForm(
    formId: string,
    formBindingData: formBindingData.FormBindingData,
    callback: AsyncCallback<void>
  ): void--><!--Device-formProvider-function updateForm(
    formId: string,
    formBindingData: formBindingData.FormBindingData,
    callback: AsyncCallback<void>
  ): void-End-->

**System capability:** SystemCapability.Ability.Form

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| formId | string | Yes | ID of the widget to update. |
| formBindingData | formBindingData.FormBindingData | Yes | Data to be used for the update. |
| callback | [AsyncCallback](../../apis-basic-service-kit/arkts-apis/arkts-basicservices-base-asynccallback-i.md)<void> | Yes | Callback used to return the result. |

**Example**

```TypeScript
import { BusinessError } from '@kit.BasicServicesKit';
import { formProvider, formBindingData } from '@kit.FormKit';

// Use an existing widget ID (formId).
let formId: string = '12400633174999288';
let param: Record<string, string> = {
  'temperature': '22c',
  'time': '22:00'
}
let obj: formBindingData.FormBindingData = formBindingData.createFormBindingData(param);
formProvider.updateForm(formId, obj, (error: BusinessError) => {
  if (error.code) {
    console.error(`formProvider updateForm, errorCode: ${error.code}, errorMessage: ${error.message}`);
  }
});

```


## updateForm

```TypeScript
function updateForm(formId: string, formBindingData: formBindingData.FormBindingData): Promise<void>
```

Updates a widget. This API uses a promise to return the result.

**Since:** 8

**Deprecated since:** 9

**Substitutes:** [updateForm](arkts-form-formprovider-updateform-f.md#updateform-1)

<!--Device-formProvider-function updateForm(formId: string, formBindingData: formBindingData.FormBindingData): Promise<void>--><!--Device-formProvider-function updateForm(formId: string, formBindingData: formBindingData.FormBindingData): Promise<void>-End-->

**System capability:** SystemCapability.Ability.Form

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| formId | string | Yes | ID of the widget to update. |
| formBindingData | formBindingData.FormBindingData | Yes | Data to be used for the update. |

**Return value:**

| Type | Description |
| --- | --- |
| [Promise](../../apis-na/arkts-apis/arkts-na-lib-es5-promise-i.md)<void> | Promise that returns no value. |

**Example**

```TypeScript
import { BusinessError } from '@kit.BasicServicesKit';
import { formProvider, formBindingData } from '@kit.FormKit';

// Use an existing widget ID (formId).
let formId: string = '12400633174999288';
let param: Record<string, string> = {
  'temperature': '22c',
  'time': '22:00'
}
let obj: formBindingData.FormBindingData = formBindingData.createFormBindingData(param);
formProvider.updateForm(formId, obj).then(() => {
  console.info('formProvider updateForm success');
}).catch((error: BusinessError) => {
  console.error(`formProvider updateForm, errorCode: ${error.code}, errorMessage: ${error.message}`);
});

```

