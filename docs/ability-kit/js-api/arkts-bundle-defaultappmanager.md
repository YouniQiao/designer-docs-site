# @ohos.bundle.defaultAppManager

The module provides APIs to query whether the current application is the default application of a specific type.

**Since:** 9

**System capability:** SystemCapability.BundleManager.BundleFramework.DefaultApp

## Modules to Import

```TypeScript
import { defaultAppManager } from '@ohos.bundle.defaultAppManager';
```

## Summary

### Functions

| Name | Description |
| --- | --- |
| [isDefaultApplication](arkts-ability-isdefaultapplication-f.md#isdefaultapplication-1) | Checks whether this application is the default application of a system-defined application type or a [uniform data type](../../apis-arkdata/arkts-apis/arkts-data-uniformtypedescriptor.md#uniformtypedescriptor). This API uses an asynchronous callback to return the result. |
| [isDefaultApplication](arkts-ability-isdefaultapplication-f.md#isdefaultapplication-2) | Checks whether this application is the default application of a system-defined application type or a [uniform data type](../../apis-arkdata/arkts-apis/arkts-data-uniformtypedescriptor.md#uniformtypedescriptor). This API uses a promise to return the result. |
| [isDefaultApplicationSync](arkts-ability-isdefaultapplicationsync-f.md#isdefaultapplicationsync-1) | Checks whether this application is the default application of a system-defined application type or a [uniform data type](../../apis-arkdata/arkts-apis/arkts-data-uniformtypedescriptor.md#uniformtypedescriptor). This API returns the result synchronously. |

<!--Del-->
### Functions（系统接口）

| Name | Description |
| --- | --- |
| [getDefaultApplication](arkts-ability-getdefaultapplication-f-sys.md#getdefaultapplication-1) | Obtains the default application based on a system-defined application type, a file type that complies with the media type format (either specified by **type** or **subtype**), or a [uniform data type](../../apis-arkdata/arkts-apis/arkts-data-uniformtypedescriptor.md#uniformtypedescriptor). This API uses an asynchronous callback to return the result. |
| [getDefaultApplication](arkts-ability-getdefaultapplication-f-sys.md#getdefaultapplication-2) | Obtains the default application based on a system-defined application type, a file type that complies with the media type format (either specified by **type** or **subtype**), or a [uniform data type](../../apis-arkdata/arkts-apis/arkts-data-uniformtypedescriptor.md#uniformtypedescriptor). This API uses an asynchronous callback to return the result. |
| [getDefaultApplication](arkts-ability-getdefaultapplication-f-sys.md#getdefaultapplication-3) | Obtains the default application based on a system-defined application type, a file type that complies with the media type format (either specified by **type** or **subtype**), or a [uniform data type](../../apis-arkdata/arkts-apis/arkts-data-uniformtypedescriptor.md#uniformtypedescriptor). This API uses a promise to return the result. |
| [getDefaultApplicationSync](arkts-ability-getdefaultapplicationsync-f-sys.md#getdefaultapplicationsync-1) | Obtains the default application based on a system-defined application type, a file type that complies with the media type format (either specified by **type** or **subtype**), or a [uniform data type](../../apis-arkdata/arkts-apis/arkts-data-uniformtypedescriptor.md#uniformtypedescriptor). This API returns the result synchronously. |
| [resetDefaultApplication](arkts-ability-resetdefaultapplication-f-sys.md#resetdefaultapplication-1) | Resets the default application for a user based on a system-defined application type, a file type that complies with the media type format (either specified by **type** or **subtype**), or a [uniform data type](../../apis-arkdata/arkts-apis/arkts-data-uniformtypedescriptor.md#uniformtypedescriptor). This API uses an asynchronous callback to return the result. |
| [resetDefaultApplication](arkts-ability-resetdefaultapplication-f-sys.md#resetdefaultapplication-2) | Resets the default application based on a system-defined application type, a file type that complies with the media type format (either specified by **type** or **subtype**), or a [uniform data type](../../apis-arkdata/arkts-apis/arkts-data-uniformtypedescriptor.md#uniformtypedescriptor). This API uses an asynchronous callback to return the result. |
| [resetDefaultApplication](arkts-ability-resetdefaultapplication-f-sys.md#resetdefaultapplication-3) | Resets the default application based on a system-defined application type, a file type that complies with the media type format (either specified by **type** or **subtype**), or a [uniform data type](../../apis-arkdata/arkts-apis/arkts-data-uniformtypedescriptor.md#uniformtypedescriptor). This API uses a promise to return the result. |
| [resetDefaultApplicationSync](arkts-ability-resetdefaultapplicationsync-f-sys.md#resetdefaultapplicationsync-1) | Resets the default application based on a system-defined application type, a file type that complies with the media type format (either specified by **type** or **subtype**), or a [uniform data type](../../apis-arkdata/arkts-apis/arkts-data-uniformtypedescriptor.md#uniformtypedescriptor). This API returns the result synchronously. |
| [setDefaultApplication](arkts-ability-setdefaultapplication-f-sys.md#setdefaultapplication-1) | Sets the default application for a user based on a system-defined application type, a file type that complies with the media type format (either specified by **type** or **subtype**), or a [uniform data type](../../apis-arkdata/arkts-apis/arkts-data-uniformtypedescriptor.md#uniformtypedescriptor). This API uses an asynchronous callback to return the result. |
| [setDefaultApplication](arkts-ability-setdefaultapplication-f-sys.md#setdefaultapplication-2) | Sets the default application based on a system-defined application type, a file type that complies with the media type format (either specified by **type** or **subtype**), or a [uniform data type](../../apis-arkdata/arkts-apis/arkts-data-uniformtypedescriptor.md#uniformtypedescriptor). This API uses an asynchronous callback to return the result. |
| [setDefaultApplication](arkts-ability-setdefaultapplication-f-sys.md#setdefaultapplication-3) | Sets the default application based on a system-defined application type, a file type that complies with the media type format (either specified by **type** or **subtype**), or a [uniform data type](../../apis-arkdata/arkts-apis/arkts-data-uniformtypedescriptor.md#uniformtypedescriptor). This API uses a promise to return the result. |
| [setDefaultApplicationForAppClone](arkts-ability-setdefaultapplicationforappclone-f-sys.md#setdefaultapplicationforappclone-1) | Sets an application clone as the default application of the specified type. This API returns the result synchronously. |
| [setDefaultApplicationSync](arkts-ability-setdefaultapplicationsync-f-sys.md#setdefaultapplicationsync-1) | Sets the default application based on a system-defined application type, a file type that complies with the media type format (either specified by **type** or **subtype**), or a [uniform data type](../../apis-arkdata/arkts-apis/arkts-data-uniformtypedescriptor.md#uniformtypedescriptor). This API returns the result synchronously. |
<!--DelEnd-->

### Enums

| Name | Description |
| --- | --- |
| [ApplicationType](arkts-ability-applicationtype-e.md) | Enumerates the default application types. |

