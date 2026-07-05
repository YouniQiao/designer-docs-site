# openFormManager

## openFormManager

```TypeScript
function openFormManager(want: Want): void
```

Opens the Widget Manager page of the current application.

**Since:** 18

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.Ability.Form

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| want | Want | Yes | Parameter that must contain the following fields: bundleName: bundle name of widget.  abilityName: ability name of the widget. parameters: - ohos.extra.param.key.form_dimension:  [Widget dimension](arkts-forminfo-formdimension-e.md#FormDimension). - ohos.extra.param.key.form_name:  Widget name. - ohos.extra.param.key.module_name: module name of the widget. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 16500050 | IPC connection error. |
| 16500100 | Failed to obtain the configuration information. |
| 16501000 | An internal functional error occurred. |

**Example**

```TypeScript
import { formProvider } from '@kit.FormKit';
import { BusinessError } from '@kit.BasicServicesKit';
import { Want } from '@kit.AbilityKit';

const want: Want = {
  bundleName: 'com.example.formbutton',
  abilityName: 'EntryFormAbility',
  parameters: {
    'ohos.extra.param.key.form_dimension': 2,
    'ohos.extra.param.key.form_name': 'widget',
    'ohos.extra.param.key.module_name': 'entry'
  },
};
try {
  formProvider.openFormManager(want);
} catch (error) {
  console.error(`catch error, code: ${(error as BusinessError).code}, message: ${(error as BusinessError).message})`);
}

```

