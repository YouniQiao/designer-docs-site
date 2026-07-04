---
last_update:
  date: 2026-07-04
---

# FaceAuthManager (System API)

Provides APIs for facial authentication management.

**Since:** 9

**System capability:** SystemCapability.UserIAM.UserAuth.FaceAuth

**System API:** This is a system API.

## Modules to Import

```TypeScript
import { faceAuth } from '@ohos.userIAM.faceAuth';
```

## constructor

```TypeScript
constructor()
```

A constructor used to create a **FaceAuthManager** object.

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

Sets an [XComponent surface ID](../../apis-arkui/arkts-components/arkts-arkui-xcomponentcontroller-c.md#getxcomponentsurfaceid-1) for the face preview page in the face enrollment process. This API must be used with [addCredential](../../apis-basic-service-kit/arkts-apis/arkts-basicservices-useridentitymanager-c-sys.md#addcredential-1).

**Since:** 9

**Required permissions:** ohos.permission.MANAGE_USER_IDM

**System capability:** SystemCapability.UserIAM.UserAuth.FaceAuth

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| surfaceId | string | Yes | ID of the surface held by[XComponent](../../apis-arkui/arkts-components/arkts-arkui-xcomponentcontroller-c.md#getxcomponentsurfaceid-1). |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [201](../../errorcode-universal.md#201-permission-denied) | Permission denied. |
| [202](../../errorcode-universal.md#202-permission-verification-failed-for-calling-a-system-api) | Permission denied. Called by non-system application. |
| [12700001](../errorcode-useriam.md#12700001-facial-authentication-service-unavailable) | The service is unavailable. |

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

