# LifecycleForm

interface of form lifecycle.

**Since:** 7

<!--Device-unnamed-export declare interface LifecycleForm--><!--Device-unnamed-export declare interface LifecycleForm-End-->

**System capability:** SystemCapability.Ability.AbilityRuntime.FAModel

## onShare

```TypeScript
onShare?(formId: string): { [key: string]: any }
```

Called when the system shares the form.

**Since:** 9

**Model restriction:** This API can be used only in the FA model.

<!--Device-LifecycleForm-onShare?(formId: string): { [key: string]: any }--><!--Device-LifecycleForm-onShare?(formId: string): { [key: string]: any }-End-->

**System capability:** SystemCapability.Ability.AbilityRuntime.FAModel

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| formId | string | Yes | Indicates the ID of the deleted form. |

**Return value:**

| Type | Description |
| --- | --- |
| { [key: string]: any } | Returns the wantParams object. |

## onShareForm

```TypeScript
onShareForm?(formId: string): Record<string, Object>
```

Called when the system shares the form.The ability of this function is same as onShare. If both are set, this function will be called.

**Since:** 11

**Model restriction:** This API can be used only in the FA model.

<!--Device-LifecycleForm-onShareForm?(formId: string): Record<string, Object>--><!--Device-LifecycleForm-onShareForm?(formId: string): Record<string, Object>-End-->

**System capability:** SystemCapability.Ability.AbilityRuntime.FAModel

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| formId | string | Yes | Indicates the ID of the deleted form. |

**Return value:**

| Type | Description |
| --- | --- |
| [Record](../../apis-na/arkts-apis/arkts-na-record-t.md)<string, Object> | Returns the wantParams object. |

