---
last_update:
  date: 2026-07-04
---

# subscribe (System API)

## Modules to Import

```TypeScript
import { userStatus } from '@ohos.multimodalAwareness.userStatus';
```

## subscribe

```TypeScript
function subscribe(featureId: UserStatusFeature, callback: Callback<UserStatusData>,
    deviceInfo?: DeviceInfo[]): number
```

Subscribes to user status monitoring.

**Since:** 26.0.0

**Model restriction:** This API can be used only in the stage model.

**System capability:** SystemCapability.MultimodalAwareness.UserStatus

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| featureId | UserStatusFeature | Yes | Indicates the feature to be unsubscribed to. |
| callback | Callback&lt;UserStatusData&gt; | Yes | Callback used to return user status data. |
| deviceInfo | DeviceInfo[] | No | List of devices to enable user status monitoring. |

**Return value:**

| Type | Description |
| --- | --- |
| number | Returns the registered callback ID. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [202](../../errorcode-universal.md#202-permission-verification-failed-for-calling-a-system-api) | Non-system application. |
| [801](../../apis-ads-kit/errorcode-ads.md#801-ad-request-failure) | Capability not supported. Function can not work correctly due to limited<br> device capabilities. |
| [33900001](../../apis-multimodalawareness-kit/errorcode-userStatus.md#33900001-service-exception) | Service exception. Possible causes:<br>1. System error, such as null pointer and container-related exception.<br>2. Node-API invocation exception, such as invalid Node-API status. |
| [33900002](../../apis-multimodalawareness-kit/errorcode-userStatus.md#33900002-subscription-failed) | Subscription failed. Possible causes:<br>1. Callback registration failed.<br>2. Failed to bind native object to JS wrapper.<br>3. Node-API invocation exception, such as invalid Node-API status.<br>4. IPC request exception. |

