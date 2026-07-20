# FormExtensionAbility

Widget extension class. It provides APIs to notify the widget provider that a widget is being created or the widget visibility status is being changed.

**Since:** 9

<!--Device-unnamed-declare class FormExtensionAbility--><!--Device-unnamed-declare class FormExtensionAbility-End-->

**System capability:** SystemCapability.Ability.Form

## Modules to Import

```TypeScript
import { FormExtensionAbility } from '@kit.FormKit';
```

## onAcquireFormData

```TypeScript
onAcquireFormData?(formId: string): Record<string, Object>
```

Called when the system acquire the form data.

**Since:** 10

**Model restriction:** This API can be used only in the stage model.

<!--Device-FormExtensionAbility-onAcquireFormData?(formId: string): Record<string, Object>--><!--Device-FormExtensionAbility-onAcquireFormData?(formId: string): Record<string, Object>-End-->

**System capability:** SystemCapability.Ability.Form

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| formId | string | Yes | Indicates the ID of the form. |

**Return value:**

| Type | Description |
| --- | --- |
| object | Returns the wantParams object.<br>**Applicable version:** 10 and later |
| [Record](../../apis-na/arkts-apis/arkts-na-record-t.md)<string, Object> | Returns the wantParams object.<br>**Applicable version:** 11 and later |

## onShareForm

```TypeScript
onShareForm?(formId: string): Record<string, Object>
```

Called when the system shares the form.

**Since:** 9

**Model restriction:** This API can be used only in the stage model.

<!--Device-FormExtensionAbility-onShareForm?(formId: string): Record<string, Object>--><!--Device-FormExtensionAbility-onShareForm?(formId: string): Record<string, Object>-End-->

**System capability:** SystemCapability.Ability.Form

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| formId | string | Yes | Indicates the ID of the form. |

**Return value:**

| Type | Description |
| --- | --- |
| object | Returns the wantParams object.<br>**Applicable version:** 9 - 10 |
| [Record](../../apis-na/arkts-apis/arkts-na-record-t.md)<string, Object> | Returns the wantParams object.<br>**Applicable version:** 11 and later |

