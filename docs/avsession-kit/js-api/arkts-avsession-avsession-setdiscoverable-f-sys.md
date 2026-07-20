# setDiscoverable (System API)

## Modules to Import

```TypeScript
import { avSession } from '@kit.AVSessionKit';
```

## setDiscoverable

```TypeScript
function setDiscoverable(enable: boolean, callback: AsyncCallback<void>): void
```

Enable or disable device to be discoverable, used at sink side.

**Since:** 10

<!--Device-avSession-function setDiscoverable(enable: boolean, callback: AsyncCallback<void>): void--><!--Device-avSession-function setDiscoverable(enable: boolean, callback: AsyncCallback<void>): void-End-->

**System capability:** SystemCapability.Multimedia.AVSession.AVCast

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| enable | boolean | Yes | true: can be discoverable, false: cannot be discoverable. |
| callback | [AsyncCallback](../../apis-basic-service-kit/arkts-apis/arkts-basicservices-base-asynccallback-i.md)<void> | Yes | a callback function |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [202](../../errorcode-universal.md#202-permission-verification-failed-for-calling-a-system-api) | Not System App. |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | parameter check failed. 1.Mandatory parameters are left unspecified.2.Parameter verification failed. |

**Example**

```TypeScript

avSession.setDiscoverable(true, () => {
    console.info('Succeeded in setting discoverable.');
});

```


## setDiscoverable

```TypeScript
function setDiscoverable(enable: boolean): Promise<void>
```

Enable or disable device to be discoverable, used at sink side.

**Since:** 10

<!--Device-avSession-function setDiscoverable(enable: boolean): Promise<void>--><!--Device-avSession-function setDiscoverable(enable: boolean): Promise<void>-End-->

**System capability:** SystemCapability.Multimedia.AVSession.AVCast

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| enable | boolean | Yes | true: can be discoverable, false: cannot be discoverable. |

**Return value:**

| Type | Description |
| --- | --- |
| [Promise](../../apis-na/arkts-apis/arkts-na-lib-es5-promise-i.md)<void> | Promise for the result |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [202](../../errorcode-universal.md#202-permission-verification-failed-for-calling-a-system-api) | Not System App. |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | parameter check failed. 1.Mandatory parameters are left unspecified.2.Parameter verification failed. |

**Example**

```TypeScript

avSession.setDiscoverable(true).then(() => {
  console.info('Succeeded in setting discoverable.');
});

```

