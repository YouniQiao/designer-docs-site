# getAllFormsInfo (System API)

## getAllFormsInfo

```TypeScript
function getAllFormsInfo(callback: AsyncCallback<Array<formInfo.FormInfo>>): void
```

Obtains the widget information provided by all applications on the device. This API uses an asynchronous callback
to return the result.

**Since:** 8

**Deprecated since:** 9

**Substitutes:** [getAllFormsInfo](arkts-form-getallformsinfo-f-sys.md#getallformsinfo-1)

**Required permissions:** ohos.permission.GET_BUNDLE_INFO_PRIVILEGED

**System capability:** SystemCapability.Ability.Form

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | AsyncCallback&lt;Array&lt;formInfo.FormInfo&gt;&gt; | Yes | Callback used to return the result. If the widgetinformation is obtained, **error** is undefined and **data** is the information obtained; otherwise, **error**is an error object. |


## getAllFormsInfo

```TypeScript
function getAllFormsInfo(): Promise<Array<formInfo.FormInfo>>
```

Obtains the widget information provided by all applications on the device. This API uses a promise to return the
result.

**Since:** 8

**Deprecated since:** 9

**Substitutes:** [getAllFormsInfo](arkts-form-getallformsinfo-f-sys.md#getallformsinfo-1)

**Required permissions:** ohos.permission.GET_BUNDLE_INFO_PRIVILEGED

**System capability:** SystemCapability.Ability.Form

**System API:** This is a system API.

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;Array&lt;formInfo.FormInfo&gt;&gt; | Promise used to return the information obtained. |

