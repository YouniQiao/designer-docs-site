# onPublishFormCrossBundleControl

## onPublishFormCrossBundleControl

```TypeScript
function onPublishFormCrossBundleControl(callback: formInfo.PublishFormCrossBundleControlCallback): void
```

Subscribes to controls on cross-bundle widget addition to the home screen. This API uses an asynchronous callback to return the result.

**Since:** 23

**Required permissions:** 

 ohos.permission.PUBLISH_FORM_CROSS_BUNDLE_CONTROL

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.Ability.Form

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | formInfo.PublishFormCrossBundleControlCallback | Yes | Callback function used to return the control  result on cross-bundle widget addition to the home screen. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 201 | Permissions denied. |
| 202 | The application is not a system application. |
| 16500050 | IPC connection error. |

