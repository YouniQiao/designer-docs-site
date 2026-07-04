# acquireFormState (System API)

## acquireFormState

```TypeScript
function acquireFormState(want: Want, callback: AsyncCallback<formInfo.FormStateInfo>): void
```

Obtains the widget state. This API uses an asynchronous callback to return the result.

**Since:** 8

**Deprecated since:** 9

**Substitutes:** [acquireFormState](arkts-form-acquireformstate-f-sys.md#acquireformstate-1)

**Required permissions:** ohos.permission.REQUIRE_FORM and ohos.permission.GET_BUNDLE_INFO_PRIVILEGED

**System capability:** SystemCapability.Ability.Form

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| want | Want | Yes | **Want** information carried to query the widget state. The information must contain thebundle name, ability name, module name, widget name, and widget dimensions. |
| callback | AsyncCallback&lt;formInfo.FormStateInfo&gt; | Yes | Callback used to return the result. If the widgetstate is obtained, **error** is undefined and **data** is the widget state obtained; otherwise, **error**is an error object. |


## acquireFormState

```TypeScript
function acquireFormState(want: Want): Promise<formInfo.FormStateInfo>
```

Obtains the widget state. This API uses a promise to return the result.

**Since:** 8

**Deprecated since:** 9

**Substitutes:** [acquireFormState](arkts-form-acquireformstate-f-sys.md#acquireformstate-1)

**Required permissions:** ohos.permission.REQUIRE_FORM and ohos.permission.GET_BUNDLE_INFO_PRIVILEGED

**System capability:** SystemCapability.Ability.Form

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| want | Want | Yes | **Want** information carried to query the widget state. |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;formInfo.FormStateInfo&gt; | Promise used to return the widget state obtained. |

