# Server

服务对象，提供启动服务、停止服务、关闭服务、注册/取消注册服务端回调等方法。

**Since:** 20

**System capability:** SystemCapability.DistributedSched.AppCollaboration

## Modules to Import

```TypeScript
import { linkEnhance } from '@kit.DistributedServiceKit';
```

## close

```TypeScript
close(): void
```

当业务执行完毕，服务端清理资源时，调用close()方法，销毁Server对象，释放相关资源。之后如果再次与对端设备交互，需要重新创建Server对象。

**Since:** 20

**Required permissions:** 

 ohos.permission.DISTRIBUTED_DATASYNC

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.DistributedSched.AppCollaboration

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 201 | Permission denied. |

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

取消注册connectionAccepted事件的回调监听。使用callback异步回调。

**Since:** 20

**Required permissions:** 

 ohos.permission.DISTRIBUTED_DATASYNC

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.DistributedSched.AppCollaboration

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| type | 'connectionAccepted' | Yes | 事件回调类型，支持的事件为'connectionAccepted'，收到对端连接，触发该事件。 |
| callback | Callback&lt;Connection> | No |  |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 201 | Permission denied. |
| 32390206 | Parameter invalid. |

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

取消注册serverStopped事件的回调监听。使用callback异步回调。

**Since:** 20

**Required permissions:** 

 ohos.permission.DISTRIBUTED_DATASYNC

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.DistributedSched.AppCollaboration

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| type | 'serverStopped' | Yes | 事件回调类型，支持的事件为'serverStopped'，底层服务异常时触发。 |
| callback | Callback&lt;number> | No |  |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 201 | Permission denied. |
| 32390206 | Parameter invalid. |

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

## offConnectionAccepted

```TypeScript
offConnectionAccepted(callback?: Callback<Connection>): void
```

取消注册connectionAccepted事件的回调监听。使用callback异步回调。

**Since:** 23

**Required permissions:** 

 ohos.permission.DISTRIBUTED_DATASYNC

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.DistributedSched.AppCollaboration

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | Callback&lt;Connection> | No |  |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 201 | Permission denied. |
| 32390206 | Parameter invalid. |

## offServerStopped

```TypeScript
offServerStopped(callback?: Callback<int>): void
```

取消注册serverStopped事件的回调监听。使用callback异步回调。

**Since:** 23

**Required permissions:** 

 ohos.permission.DISTRIBUTED_DATASYNC

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.DistributedSched.AppCollaboration

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | Callback&lt;int> | No |  |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 201 | Permission denied. |
| 32390206 | Parameter invalid. |

## on('connectionAccepted')

```TypeScript
on(type: 'connectionAccepted', callback: Callback<Connection>): void
```

创建服务成功后，注册connectionAccepted事件的回调监听，等待对端连接。使用callback异步回调。

**Since:** 20

**Required permissions:** 

 ohos.permission.DISTRIBUTED_DATASYNC

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.DistributedSched.AppCollaboration

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| type | 'connectionAccepted' | Yes | 事件回调类型，支持的事件为'connectionAccepted'，收到对端连接，触发该事件。 |
| callback | Callback&lt;Connection> | Yes | 注册的回调函数。[Connection]linkEnhance.Connection返回的连接对象。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 201 | Permission denied. |
| 32390206 | Parameter invalid. |

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

在创建服务成功后，注册serverStopped回调，监听服务异常停止。使用callback异步回调。

**Since:** 20

**Required permissions:** 

 ohos.permission.DISTRIBUTED_DATASYNC

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.DistributedSched.AppCollaboration

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| type | 'serverStopped' | Yes | 事件回调类型，支持的事件为'serverStopped'，底层服务异常时，触发该事件。 |
| callback | Callback&lt;number> | Yes | 注册的回调函数，number为返回的错误码。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 201 | Permission denied. |
| 32390206 | Parameter invalid. |

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

## onConnectionAccepted

```TypeScript
onConnectionAccepted(callback: Callback<Connection>): void
```

创建服务成功后，注册connectionAccepted事件的回调监听，等待对端连接。使用callback异步回调。

**Since:** 23

**Required permissions:** 

 ohos.permission.DISTRIBUTED_DATASYNC

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.DistributedSched.AppCollaboration

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | Callback&lt;Connection> | Yes | 注册的回调函数。[Connection]linkEnhance.Connection返回的连接对象。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 201 | Permission denied. |
| 32390206 | Parameter invalid. |

## onServerStopped

```TypeScript
onServerStopped(callback: Callback<int>): void
```

在创建服务成功后，注册serverStopped回调，监听服务异常停止。使用callback异步回调。

**Since:** 23

**Required permissions:** 

 ohos.permission.DISTRIBUTED_DATASYNC

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.DistributedSched.AppCollaboration

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | Callback&lt;int> | Yes | 注册的回调函数，int为返回的错误码。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 201 | Permission denied. |
| 32390206 | Parameter invalid. |

## start

```TypeScript
start(): void
```

创建服务成功后，需要调用start()开启该服务，方可被客户端连接，最大服务个数为10。

**Since:** 20

**Required permissions:** 

 ohos.permission.DISTRIBUTED_DATASYNC

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.DistributedSched.AppCollaboration

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 201 | Permission denied. |
| 32390202 | The number of servers exceeds the limit. |
| 32390300 | Internal error. |

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

使用完服务时，调用`stop`停止服务，停止后可以调用`start`重新开启服务。

**Since:** 20

**Required permissions:** 

 ohos.permission.DISTRIBUTED_DATASYNC

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.DistributedSched.AppCollaboration

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 201 | Permission denied. |

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

