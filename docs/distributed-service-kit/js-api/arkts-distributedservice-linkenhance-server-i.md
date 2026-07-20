# Server

Represents a **Server** object, which provides methods for starting, stopping, and closing the server, and registering or unregistering event callbacks.

**Since:** 20

<!--Device-linkEnhance-interface Server--><!--Device-linkEnhance-interface Server-End-->

**System capability:** SystemCapability.DistributedSched.AppCollaboration

## Modules to Import

```TypeScript
import { linkEnhance } from '@kit.DistributedServiceKit';
```

## close

```TypeScript
close(): void
```

Destroys the **Server** object to release related resources. To interact with the peer device again, create a new **Server** object.

**Since:** 20

**Required permissions:** ohos.permission.DISTRIBUTED_DATASYNC

**Model restriction:** This API can be used only in the stage model.

<!--Device-Server-close(): void--><!--Device-Server-close(): void-End-->

**System capability:** SystemCapability.DistributedSched.AppCollaboration

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [201](../../errorcode-universal.md#201-permission-denied) | Permission denied. |

**Example**

```TypeScript
import { linkEnhance } from '@kit.DistributedServiceKit';
import { BusinessError } from '@kit.BasicServicesKit';
import { hilog } from '@kit.PerformanceAnalysisKit';

const TAG = "testDemo";

try {
  let name: string = "demo";
  hilog.info(0x0000, TAG, 'start server name = ' + name);
  let server: linkEnhance.Server = linkEnhance.createServer(name);
  server.start();
  server.close();
} catch (err) {
  hilog.error(0x0000, TAG, 'start server errCode: ' + (err as BusinessError).code + ', errMessage: ' +
  (err as BusinessError).message);
}

```

## off('connectionAccepted')

```TypeScript
off(type: 'connectionAccepted', callback?: Callback<Connection>): void
```

Unregisters the callback listener for **connectionAccepted** events. This API uses an asynchronous callback to return the result.

**Since:** 20

**Required permissions:** ohos.permission.DISTRIBUTED_DATASYNC

**Model restriction:** This API can be used only in the stage model.

<!--Device-Server-off(type: 'connectionAccepted', callback?: Callback<Connection>): void--><!--Device-Server-off(type: 'connectionAccepted', callback?: Callback<Connection>): void-End-->

**System capability:** SystemCapability.DistributedSched.AppCollaboration

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| type | 'connectionAccepted' | Yes | Event type, which is **connectionAccepted**. This event is triggered when a connection from the peer end is received. |
| callback | [Callback](../../apis-arkui/arkts-components/arkts-arkui-common-callback-i.md)<Connection> | No | Registered callback, which is used to return the [Connection](arkts-distributedservice-linkenhance-connection-i.md) object. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [201](../../errorcode-universal.md#201-permission-denied) | Permission denied. |
| [32390206](../../apis-distributedservice-kit/errorcode-link-enhance.md#32390206-invalid-parameter) | Parameter invalid. |

**Example**

```TypeScript
import { linkEnhance } from '@kit.DistributedServiceKit';
import { BusinessError } from '@kit.BasicServicesKit';
import { hilog } from '@kit.PerformanceAnalysisKit';

const TAG = "testDemo";

try {
  let name: string = "demo";
  hilog.info(0x0000, TAG, 'start server name = ' + name);
  // Construct a Server object using the specified name.
  let server: linkEnhance.Server = linkEnhance.createServer(name);
  server.on('connectionAccepted', (connection: linkEnhance.Connection): void => {
    hilog.info(0x0000, TAG, 'accept new connection');
  });
  // Unsubscribe from connectionAccepted events.
  server.off('connectionAccepted', (connection: linkEnhance.Connection): void => {
    hilog.info(0x0000, TAG, 'accept new connection');
  });
} catch (err) {
  hilog.error(0x0000, TAG, 'start server errCode: ' + (err as BusinessError).code + ', errMessage: ' +
  (err as BusinessError).message);
}

```

## off('serverStopped')

```TypeScript
off(type: 'serverStopped', callback?: Callback<number>): void
```

Unregisters the callback listener for **serverStopped** events. This API uses an asynchronous callback to return the result.

**Since:** 20

**Required permissions:** ohos.permission.DISTRIBUTED_DATASYNC

**Model restriction:** This API can be used only in the stage model.

<!--Device-Server-off(type: 'serverStopped', callback?: Callback<number>): void--><!--Device-Server-off(type: 'serverStopped', callback?: Callback<number>): void-End-->

**System capability:** SystemCapability.DistributedSched.AppCollaboration

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| type | 'serverStopped' | Yes | Event type, which is **serverStopped**. This event is triggered when the server is stopped abnormally. |
| callback | [Callback](../../apis-arkui/arkts-components/arkts-arkui-common-callback-i.md)<number> | No | Registered callback, where **number** indicates the returned error code. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [201](../../errorcode-universal.md#201-permission-denied) | Permission denied. |
| [32390206](../../apis-distributedservice-kit/errorcode-link-enhance.md#32390206-invalid-parameter) | Parameter invalid. |

**Example**

```TypeScript
import { linkEnhance } from '@kit.DistributedServiceKit';
import { BusinessError } from '@kit.BasicServicesKit';
import { hilog } from '@kit.PerformanceAnalysisKit';

const TAG = "testDemo";

try {
  let name: string = "demo";
  hilog.info(0x0000, TAG, 'start server name = ' + name);
  // Construct a Server object using the specified name.
  let server: linkEnhance.Server = linkEnhance.createServer(name);
  server.on('serverStopped', (reason: number): void => {
    hilog.info(0x0000, TAG, 'serverStopped, reason= ' + reason);
  });
  // Unsubscribe from serverStopped events.
  server.off('serverStopped', (reason: number): void => {
    hilog.info(0x0000, TAG, 'serverStopped, reason= ' + reason);
  });
} catch (err) {
  hilog.error(0x0000, TAG, 'start server errCode: ' + (err as BusinessError).code + ', errMessage: ' +
  (err as BusinessError).message);
}

```

## on('connectionAccepted')

```TypeScript
on(type: 'connectionAccepted', callback: Callback<Connection>): void
```

Registers a callback listener for **connectionAccepted** events. This API uses an asynchronous callback to return the result.

**Since:** 20

**Required permissions:** ohos.permission.DISTRIBUTED_DATASYNC

**Model restriction:** This API can be used only in the stage model.

<!--Device-Server-on(type: 'connectionAccepted', callback: Callback<Connection>): void--><!--Device-Server-on(type: 'connectionAccepted', callback: Callback<Connection>): void-End-->

**System capability:** SystemCapability.DistributedSched.AppCollaboration

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| type | 'connectionAccepted' | Yes | Event type, which is **connectionAccepted**. This event is triggered when a connection from the peer end is received. |
| callback | [Callback](../../apis-arkui/arkts-components/arkts-arkui-common-callback-i.md)<Connection> | Yes | Registered callback, which is used to return the [Connection](arkts-distributedservice-linkenhance-connection-i.md) object. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [201](../../errorcode-universal.md#201-permission-denied) | Permission denied. |
| [32390206](../../apis-distributedservice-kit/errorcode-link-enhance.md#32390206-invalid-parameter) | Parameter invalid. |

**Example**

```TypeScript
import { linkEnhance } from '@kit.DistributedServiceKit';
import { BusinessError } from '@kit.BasicServicesKit';
import { hilog } from '@kit.PerformanceAnalysisKit';

const TAG = "testDemo";

try {
  let name: string = "demo";
  hilog.info(0x0000, TAG, 'start server name = ' + name);
  // Construct a Server object using the specified name.
  let server: linkEnhance.Server = linkEnhance.createServer(name);

  // Subscribe to connectionAccepted events.
  server.on('connectionAccepted', (connection: linkEnhance.Connection): void => {
    hilog.info(0x0000, TAG, 'serverOnCallback = ' + JSON.stringify(connection));
  });
  // Start the server.
  server.start();
} catch (err) {
  hilog.error(0x0000, TAG, 'start server errCode: ' + (err as BusinessError).code + ', errMessage: ' +
  (err as BusinessError).message);
}

```

## on('serverStopped')

```TypeScript
on(type: 'serverStopped', callback: Callback<number>): void
```

Registers a callback listener for **serverStopped** events. This API uses an asynchronous callback to return the result.

**Since:** 20

**Required permissions:** ohos.permission.DISTRIBUTED_DATASYNC

**Model restriction:** This API can be used only in the stage model.

<!--Device-Server-on(type: 'serverStopped', callback: Callback<number>): void--><!--Device-Server-on(type: 'serverStopped', callback: Callback<number>): void-End-->

**System capability:** SystemCapability.DistributedSched.AppCollaboration

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| type | 'serverStopped' | Yes | Event type, which is **serverStopped**. This event is triggered when the server is stopped abnormally. |
| callback | [Callback](../../apis-arkui/arkts-components/arkts-arkui-common-callback-i.md)<number> | Yes | Registered callback, where **number** indicates the returned error code. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [201](../../errorcode-universal.md#201-permission-denied) | Permission denied. |
| [32390206](../../apis-distributedservice-kit/errorcode-link-enhance.md#32390206-invalid-parameter) | Parameter invalid. |

**Example**

```TypeScript
import { linkEnhance } from '@kit.DistributedServiceKit';
import { BusinessError } from '@kit.BasicServicesKit';
import { hilog } from '@kit.PerformanceAnalysisKit';

const TAG = "testDemo";

try {
  let name: string = "demo";
  hilog.info(0x0000, TAG, 'start server name = ' + name);
  // Construct a Server object using the specified name.
  let server: linkEnhance.Server = linkEnhance.createServer(name);

  // Unsubscribe from serverStopped events.
  server.on('serverStopped', (reason: number): void => {
    hilog.info(0x0000, TAG, 'serverStopped, reason= ' + reason);
  });
  // Start the server.
  server.start();
} catch (err) {
  hilog.error(0x0000, TAG, 'start server errCode: ' + (err as BusinessError).code + ', errMessage: ' +
  (err as BusinessError).message);
}

```

## start

```TypeScript
start(): void
```

Starts a server so that it can be connected by the client. A maximum of 10 servers are supported.

**Since:** 20

**Required permissions:** ohos.permission.DISTRIBUTED_DATASYNC

**Model restriction:** This API can be used only in the stage model.

<!--Device-Server-start(): void--><!--Device-Server-start(): void-End-->

**System capability:** SystemCapability.DistributedSched.AppCollaboration

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [201](../../errorcode-universal.md#201-permission-denied) | Permission denied. |
| [32390202](../../apis-distributedservice-kit/errorcode-link-enhance.md#32390202-number-of-services-exceeding-the-limit) | The number of servers exceeds the limit. |
| [32390300](../../apis-distributedservice-kit/errorcode-link-enhance.md#32390300-internal-error) | Internal error. |

**Example**

```TypeScript
import { linkEnhance } from '@kit.DistributedServiceKit';
import { BusinessError } from '@kit.BasicServicesKit';
import { hilog } from '@kit.PerformanceAnalysisKit';

const TAG = "testDemo";

try {
  let name: string = "demo";
  hilog.info(0x0000, TAG, 'start server name = ' + name);
  let server: linkEnhance.Server = linkEnhance.createServer(name);
  server.start();
} catch (err) {
  hilog.error(0x0000, TAG, 'start server errCode: ' + (err as BusinessError).code + ', errMessage: ' +
  (err as BusinessError).message);
}

```

## stop

```TypeScript
stop(): void
```

Stops the server. After the server is stopped, you can call `start` to start it again.

**Since:** 20

**Required permissions:** ohos.permission.DISTRIBUTED_DATASYNC

**Model restriction:** This API can be used only in the stage model.

<!--Device-Server-stop(): void--><!--Device-Server-stop(): void-End-->

**System capability:** SystemCapability.DistributedSched.AppCollaboration

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [201](../../errorcode-universal.md#201-permission-denied) | Permission denied. |

**Example**

```TypeScript
import { linkEnhance } from '@kit.DistributedServiceKit';
import { BusinessError } from '@kit.BasicServicesKit';
import { hilog } from '@kit.PerformanceAnalysisKit';

const TAG = "testDemo";

try {
  let name: string = "demo";
  hilog.info(0x0000, TAG, 'start server name = ' + name);
  let server: linkEnhance.Server = linkEnhance.createServer(name);
  server.start();
  server.stop();
} catch (err) {
  hilog.error(0x0000, TAG, 'start server errCode: ' + (err as BusinessError).code + ', errMessage: ' +
  (err as BusinessError).message);
}

```

