# stopCastDeviceDiscovery (System API)

## Modules to Import

```TypeScript
import { avSession } from '@kit.AVSessionKit';
```

## stopCastDeviceDiscovery

```TypeScript
function stopCastDeviceDiscovery(callback: AsyncCallback<void>): void
```

Stop device discovery.

**Since:** 10

<!--Device-avSession-function stopCastDeviceDiscovery(callback: AsyncCallback<void>): void--><!--Device-avSession-function stopCastDeviceDiscovery(callback: AsyncCallback<void>): void-End-->

**System capability:** SystemCapability.Multimedia.AVSession.AVCast

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | [AsyncCallback](../../apis-basic-service-kit/arkts-apis/arkts-basicservices-base-asynccallback-i.md)<void> | Yes | a callback function |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [202](../../errorcode-universal.md#202-permission-verification-failed-for-calling-a-system-api) | Not System App. |

**Example**

```TypeScript

avSession.stopCastDeviceDiscovery(() => {
    console.info('Succeeded in stopping cast device discovery.');
});

```


## stopCastDeviceDiscovery

```TypeScript
function stopCastDeviceDiscovery(): Promise<void>
```

Stop device discovery.

**Since:** 10

<!--Device-avSession-function stopCastDeviceDiscovery(): Promise<void>--><!--Device-avSession-function stopCastDeviceDiscovery(): Promise<void>-End-->

**System capability:** SystemCapability.Multimedia.AVSession.AVCast

**System API:** This is a system API.

**Return value:**

| Type | Description |
| --- | --- |
| [Promise](../../apis-na/arkts-apis/arkts-na-lib-es5-promise-i.md)<void> | Promise for the result |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [202](../../errorcode-universal.md#202-permission-verification-failed-for-calling-a-system-api) | Not System App. |

**Example**

```TypeScript

avSession.stopCastDeviceDiscovery().then(() => {
  console.info('Succeeded in stopping cast device discovery.');
});

```

