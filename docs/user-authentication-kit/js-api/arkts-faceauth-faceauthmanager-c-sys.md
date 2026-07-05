# FaceAuthManager

人脸认证管理器对象。用于提供人脸录入过程中的管理功能，包括设置人脸预览界面的Surface ID等。

**Since:** 9

**System capability:** SystemCapability.UserIAM.UserAuth.FaceAuth

**System API:** This is a system API.

## Modules to Import

```TypeScript
import { faceAuth } from '@kit.UserAuthenticationKit';
```

## constructor

```TypeScript
constructor()
```

用于创建人脸认证管理器对象。

**Since:** 9

**System capability:** SystemCapability.UserIAM.UserAuth.FaceAuth

**System API:** This is a system API.

**Example**

```TypeScript
import { faceAuth } from '@kit.UserAuthenticationKit';

let faceAuthManager = new faceAuth.FaceAuthManager();

```

## setSurfaceId

```TypeScript
setSurfaceId(surfaceId: string): void
```

用于在录入人脸时设置人脸预览界面的Surface ID。该接口需要配合 [addCredential](../../apis-basic-service-kit/arkts-apis/arkts-osaccount-useridentitymanager-c-sys.md#addCredential)使用，通过 [getXComponentSurfaceId]XComponentController#getXComponentSurfaceId组件的Surface来显示人脸预览画面。

**Since:** 9

**Required permissions:** 

 ohos.permission.MANAGE_USER_IDM

**System capability:** SystemCapability.UserIAM.UserAuth.FaceAuth

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| surfaceId | string | Yes | [XComponent]XComponentController#getXComponentSurfaceId 持有 Surface 的 ID。用于在  人脸录入过程中显示人脸预览画面，该ID需通过XComponentController的getXComponentSurfaceId方法获取。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 201 | Permission denied. |
| 202 | Permission denied. Called by non-system application. |
| 12700001 | The service is unavailable. |

**Example**

```TypeScript
import { faceAuth } from '@kit.UserAuthenticationKit';
import { BusinessError } from '@kit.BasicServicesKit';

// The surfaceId is obtained from the XComponent control. The surfaceId here is only an example.
let surfaceId = '123456';
let manager = new faceAuth.FaceAuthManager();
try {
  manager.setSurfaceId(surfaceId);
  console.info('set surface id successfully.');
} catch (error) {
  const err: BusinessError = error as BusinessError;
  console.error(`set surface id failed, Code is ${err?.code}, message is ${err?.message}`);
}

```

