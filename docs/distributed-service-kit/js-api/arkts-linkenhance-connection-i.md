# Connection

连接对象，提供连接、断连、获取对端设备ID、发送数据、注册/取消注册回调等方法。

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

业务执行完毕后，任意设备可调用该接口销毁connection对象，释放资源。若需再次与对端设备交互，必须重新创建connection对象并调用`connect()`发起连接。

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
  let peerDeviceId: string = "00:11:22:33:44:55";
  hilog.info(0x0000, TAG, 'connection server deviceId = ' + peerDeviceId);
  let connection: linkEnhance.Connection = linkEnhance.createConnection(peerDeviceId, "demo");
  connection.on('connectResult', (result: linkEnhance.ConnectResult): void => {
    hilog.info(0x0000, TAG, 'clientConnectResultCallback result = ' + result.success);
    if (result.success) {
      connection.close();
    }
  });
  connection.connect();
} catch (err) {
  hilog.error(0x0000, TAG, 'errCode: ' + (err as BusinessError).code + ', errMessage: ' +
  (err as BusinessError).message);
}

```

## connect

```TypeScript
connect(): void
```

在客户端执行，向服务端设备发起连接，最大连接个数限制为10。

**Since:** 20

**Required permissions:** 

 ohos.permission.DISTRIBUTED_DATASYNC

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.DistributedSched.AppCollaboration

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 201 | Permission denied. |
| 32390204 | The number of connection exceeds the limit. |
| 32390300 | Internal error. |

**Example**

```TypeScript
import { linkEnhance } from '@kit.DistributedServiceKit';
import { BusinessError } from '@kit.BasicServicesKit';
import { hilog } from '@kit.PerformanceAnalysisKit';

const TAG = "testDemo";

try {
  let peerDeviceId: string = "00:11:22:33:44:55";
  hilog.info(0x0000, TAG, 'connection server deviceId = ' + peerDeviceId);
  let connection: linkEnhance.Connection = linkEnhance.createConnection(peerDeviceId, "demo");
  // Subscribe to connectResult events.
  connection.on('connectResult', (result: linkEnhance.ConnectResult): void => {
    hilog.info(0x0000, TAG, 'clientConnectResultCallback result = ' + result.success);
  });
  // Initiate a connection.
  connection.connect();
} catch (err) {
  hilog.error(0x0000, TAG, 'errCode: ' + (err as BusinessError).code + ', errMessage: ' +
  (err as BusinessError).message);
}

```

## disconnect

```TypeScript
disconnect(): void
```

业务执行完毕后，双端任意设备可调用该接口断开连接。创建的connection对象仍有效，需要时可调用connect()重新连接。

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
  let peerDeviceId: string = "00:11:22:33:44:55";
  hilog.info(0x0000, TAG, 'connection server deviceId = ' + peerDeviceId);
  let connection: linkEnhance.Connection = linkEnhance.createConnection(peerDeviceId, "demo");
  connection.on('connectResult', (result: linkEnhance.ConnectResult): void => {
    hilog.info(0x0000, TAG, 'clientConnectResultCallback result = ' + result.success);
    if (result.success) {
      connection.disconnect();
    }
  });
  connection.connect();
} catch (err) {
  hilog.error(0x0000, TAG, 'errCode: ' + (err as BusinessError).code + ', errMessage: ' +
  (err as BusinessError).message);
}

```

## getPeerDeviceId

```TypeScript
getPeerDeviceId(): string
```

获取对端设备的deviceId，作为对端设备的标识符，连接成功后或者被连接成功后调用。

**Since:** 20

**Required permissions:** 

 ohos.permission.DISTRIBUTED_DATASYNC

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.DistributedSched.AppCollaboration

**Return value:**

| Type | Description |
| --- | --- |
| string | 对端设备的deviceId，即对端设备的BLE MAC地址。如果获取失败返回空字符串。 |

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
  let peerDeviceId: string = "00:11:22:33:44:55";
  hilog.info(0x0000, TAG, 'connection server deviceId = ' + peerDeviceId);
  let connection: linkEnhance.Connection = linkEnhance.createConnection(peerDeviceId, "demo");
  connection.getPeerDeviceId();
  hilog.info(0x0000, TAG, "peerDeviceId=%{public}s" + connection.getPeerDeviceId());
} catch (err) {
  hilog.error(0x0000, TAG, 'errCode: ' + (err as BusinessError).code + ', errMessage: ' +
  (err as BusinessError).message);
}

```

## off('connectResult')

```TypeScript
off(type: 'connectResult', callback?: Callback<ConnectResult>): void
```

取消connect事件的回调监听，使用callback异步回调。

**Since:** 20

**Required permissions:** 

 ohos.permission.DISTRIBUTED_DATASYNC

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.DistributedSched.AppCollaboration

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| type | 'connectResult' | Yes | 事件回调类型，支持的事件为'connectResult'，完成`connect()`调用，触发该事件。 |
| callback | Callback&lt;ConnectResult> | No |  |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 201 | Permission denied. |
| 32390206 | Invalid parameter. |

**Example**

```TypeScript
import { linkEnhance } from '@kit.DistributedServiceKit';
import { BusinessError } from '@kit.BasicServicesKit';
import { hilog } from '@kit.PerformanceAnalysisKit';

const TAG = "testDemo";

try {
  let peerDeviceId: string = "00:11:22:33:44:55";
  hilog.info(0x0000, TAG, 'connection server deviceId = ' + peerDeviceId);
  let connection: linkEnhance.Connection = linkEnhance.createConnection(peerDeviceId, "demo");
  connection.on('connectResult', (result: linkEnhance.ConnectResult): void => {
    hilog.info(0x0000, TAG, 'clientConnectResultCallback result = ' + result.success);
  });
  // Unsubscribe from connectResult events.
  connection.off('connectResult', (result: linkEnhance.ConnectResult): void => {
    hilog.info(0x0000, TAG, 'clientConnectResultCallback result = ' + result.success);
  });
} catch (err) {
  hilog.error(0x0000, TAG, 'errCode: ' + (err as BusinessError).code + ', errMessage: ' +
  (err as BusinessError).message);
}

```

## off('disconnected')

```TypeScript
off(type: 'disconnected', callback?: Callback<number>): void
```

取消注册disconnected事件的回调监听。连接被动断开或底层异常断开时触发该事件，使用callback异步回调。

**Since:** 20

**Required permissions:** 

 ohos.permission.DISTRIBUTED_DATASYNC

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.DistributedSched.AppCollaboration

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| type | 'disconnected' | Yes | 事件回调类型，支持的事件为'disconnected'，连接被动断开或底层异常断开时，触发该事件。 |
| callback | Callback&lt;number> | No |  |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 201 | Permission denied. |
| 32390206 | Invalid parameter. |

**Example**

```TypeScript
import { linkEnhance } from '@kit.DistributedServiceKit';
import { BusinessError } from '@kit.BasicServicesKit';
import { hilog } from '@kit.PerformanceAnalysisKit';

const TAG = "testDemo";

try {
  let peerDeviceId: string = "00:11:22:33:44:55";
  hilog.info(0x0000, TAG, 'connection server deviceId = ' + peerDeviceId);
  let connection: linkEnhance.Connection = linkEnhance.createConnection(peerDeviceId, "demo");
  connection.on('disconnected', (number: number) => {
    hilog.info(0x0000, TAG, 'connection disconnected reason = ' + number);
  });
  // Unsubscribe from disconnected events.
  connection.off('disconnected', (number: number) => {
    hilog.info(0x0000, TAG, 'connection disconnected reason = ' + number);
  });
} catch (err) {
  hilog.error(0x0000, TAG, 'errCode: ' + (err as BusinessError).code + ', errMessage: ' +
  (err as BusinessError).message);
}

```

## off('dataReceived')

```TypeScript
off(type: 'dataReceived', callback?: Callback<ArrayBuffer>): void
```

取消dataReceived事件的回调监听，使用callback异步回调。

**Since:** 20

**Required permissions:** 

 ohos.permission.DISTRIBUTED_DATASYNC

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.DistributedSched.AppCollaboration

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| type | 'dataReceived' | Yes | 事件回调类型，支持的事件为'dataReceived'，收到数据时，触发该事件。 |
| callback | Callback&lt;ArrayBuffer> | No |  |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 201 | Permission denied. |
| 32390206 | Invalid parameter. |

**Example**

```TypeScript
import { linkEnhance } from '@kit.DistributedServiceKit';
import { BusinessError } from '@kit.BasicServicesKit';
import { hilog } from '@kit.PerformanceAnalysisKit';

const TAG = "testDemo";

try {
  let peerDeviceId: string = "00:11:22:33:44:55";
  hilog.info(0x0000, TAG, 'connection server deviceId = ' + peerDeviceId);
  let connection: linkEnhance.Connection = linkEnhance.createConnection(peerDeviceId, "demo");
  // Subscribe to data receiving notifications.
  connection.on('dataReceived', (data: ArrayBuffer) => {
    hilog.info(0x0000, TAG, 'recv dataLen = ' + data.byteLength);
  });
  // Unsubscribe from data receiving notifications.
  connection.off('dataReceived', (data: ArrayBuffer) => {
    hilog.info(0x0000, TAG, 'recv dataLen = ' + data.byteLength);
  });
} catch (err) {
  hilog.error(0x0000, TAG, 'errCode: ' + (err as BusinessError).code + ', errMessage: ' +
  (err as BusinessError).message);
}

```

## offConnectResult

```TypeScript
offConnectResult(callback?: Callback<ConnectResult>): void
```

取消connect事件的回调监听，使用callback异步回调。

**Since:** 23

**Required permissions:** 

 ohos.permission.DISTRIBUTED_DATASYNC

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.DistributedSched.AppCollaboration

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | Callback&lt;ConnectResult> | No |  |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 201 | Permission denied. |
| 32390206 | Invalid parameter. |

## offDataReceived

```TypeScript
offDataReceived(callback?: Callback<ArrayBuffer>): void
```

取消dataReceived事件的回调监听，使用callback异步回调。

**Since:** 23

**Required permissions:** 

 ohos.permission.DISTRIBUTED_DATASYNC

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.DistributedSched.AppCollaboration

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | Callback&lt;ArrayBuffer> | No |  |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 201 | Permission denied. |
| 32390206 | Invalid parameter. |

## offDisconnected

```TypeScript
offDisconnected(callback?: Callback<int>): void
```

取消注册disconnected事件的回调监听。连接被动断开或底层异常断开时触发该事件，使用callback异步回调。

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
| 32390206 | Invalid parameter. |

## on('connectResult')

```TypeScript
on(type: 'connectResult', callback: Callback<ConnectResult>): void
```

注册connect事件的回调监听，通过回调函数获取连接结果。使用callback进行异步回调。

**Since:** 20

**Required permissions:** 

 ohos.permission.DISTRIBUTED_DATASYNC

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.DistributedSched.AppCollaboration

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| type | 'connectResult' | Yes | 事件回调类型，支持的事件为'connectResult'，完成`connect()`调用，触发该事件。 |
| callback | Callback&lt;ConnectResult> | Yes | 注册的回调函数。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 201 | Permission denied. |
| 32390206 | Invalid parameter. |

**Example**

```TypeScript
import { linkEnhance } from '@kit.DistributedServiceKit';
import { BusinessError } from '@kit.BasicServicesKit';
import { hilog } from '@kit.PerformanceAnalysisKit';

const TAG = "testDemo";

try {
  let peerDeviceId: string = "00:11:22:33:44:55";
  hilog.info(0x0000, TAG, 'connection server deviceId = ' + peerDeviceId);
  let connection: linkEnhance.Connection = linkEnhance.createConnection(peerDeviceId, "demo");
  // Subscribe to connectResult events.
  connection.on('connectResult', (result: linkEnhance.ConnectResult): void => {
    hilog.info(0x0000, TAG, 'clientConnectResultCallback result = ' + result.success);
  });

  // Initiate a connection.
  connection.connect();
} catch (err) {
  hilog.error(0x0000, TAG, 'errCode: ' + (err as BusinessError).code + ', errMessage: ' +
  (err as BusinessError).message);
}

```

## on('disconnected')

```TypeScript
on(type: 'disconnected', callback: Callback<number>): void
```

注册disconnected事件的回调监听，连接被动断开或者底层异常断开时触发该事件。使用callback异步回调。

**Since:** 20

**Required permissions:** 

 ohos.permission.DISTRIBUTED_DATASYNC

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.DistributedSched.AppCollaboration

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| type | 'disconnected' | Yes | 事件回调类型，支持的事件为'disconnected'，连接被动断开或底层异常断开时，触发该事件。 |
| callback | Callback&lt;number> | Yes | 注册的回调函数，number为返回的错误码。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 201 | Permission denied. |
| 32390206 | Invalid parameter. |

**Example**

```TypeScript
import { linkEnhance } from '@kit.DistributedServiceKit';
import { BusinessError } from '@kit.BasicServicesKit';
import { hilog } from '@kit.PerformanceAnalysisKit';

const TAG = "testDemo";

try {
  let peerDeviceId: string = "00:11:22:33:44:55";
  hilog.info(0x0000, TAG, 'connection server deviceId = ' + peerDeviceId);
  let connection: linkEnhance.Connection = linkEnhance.createConnection(peerDeviceId, "demo");
  // Subscribe to disconnected events.
  connection.on('disconnected', (number: number) => {
    hilog.info(0x0000, TAG, 'connection disconnected reason = ' + number);
  });
} catch (err) {
  hilog.error(0x0000, TAG, 'errCode: ' + (err as BusinessError).code + ', errMessage: ' +
  (err as BusinessError).message);
}

```

## on('dataReceived')

```TypeScript
on(type: 'dataReceived', callback: Callback<ArrayBuffer>): void
```

注册dataReceived事件的回调监听。使用callback异步回调。

**Since:** 20

**Required permissions:** 

 ohos.permission.DISTRIBUTED_DATASYNC

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.DistributedSched.AppCollaboration

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| type | 'dataReceived' | Yes | 事件回调类型，支持的事件为'dataReceived'，收到数据时，触发该事件。 |
| callback | Callback&lt;ArrayBuffer> | Yes | 注册的回调函数。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 201 | Permission denied. |
| 32390206 | Invalid parameter. |

**Example**

```TypeScript
import { linkEnhance } from '@kit.DistributedServiceKit';
import { BusinessError } from '@kit.BasicServicesKit';
import { hilog } from '@kit.PerformanceAnalysisKit';

const TAG = "testDemo";

try {
  let peerDeviceId: string = "00:11:22:33:44:55";
  hilog.info(0x0000, TAG, 'connection server deviceId = ' + peerDeviceId);
  let connection: linkEnhance.Connection = linkEnhance.createConnection(peerDeviceId, "demo");
  // Initiate a connection.
  connection.connect();
  // Subscribe to data receiving notifications.
  connection.on('dataReceived', (data: ArrayBuffer) => {
    hilog.info(0x0000, TAG, 'recv dataLen = ' + data.byteLength);
  });
} catch (err) {
  hilog.error(0x0000, TAG, 'errCode: ' + (err as BusinessError).code + ', errMessage: ' +
  (err as BusinessError).message);
}

```

## onConnectResult

```TypeScript
onConnectResult(callback: Callback<ConnectResult>): void
```

注册connect事件的回调监听，通过回调函数获取连接结果。使用callback进行异步回调。

**Since:** 23

**Required permissions:** 

 ohos.permission.DISTRIBUTED_DATASYNC

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.DistributedSched.AppCollaboration

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | Callback&lt;ConnectResult> | Yes | 注册的回调函数。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 201 | Permission denied. |
| 32390206 | Invalid parameter. |

## onDataReceived

```TypeScript
onDataReceived(callback: Callback<ArrayBuffer>): void
```

注册dataReceived事件的回调监听。使用callback异步回调。

**Since:** 23

**Required permissions:** 

 ohos.permission.DISTRIBUTED_DATASYNC

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.DistributedSched.AppCollaboration

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | Callback&lt;ArrayBuffer> | Yes | 注册的回调函数。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 201 | Permission denied. |
| 32390206 | Invalid parameter. |

## onDisconnected

```TypeScript
onDisconnected(callback: Callback<int>): void
```

注册disconnected事件的回调监听，连接被动断开或者底层异常断开时触发该事件。使用callback异步回调。

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
| 32390206 | Invalid parameter. |

## sendData

```TypeScript
sendData(data: ArrayBuffer): void
```

客户端连接成功后，可以向服务端发送数据。服务端接收到连接回调时，也可以向客户端发送数据。

**Since:** 20

**Required permissions:** 

 ohos.permission.DISTRIBUTED_DATASYNC

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.DistributedSched.AppCollaboration

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| data | ArrayBuffer | Yes | 需要发送的数据，最大发送长度为1024字节。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 201 | Permission denied. |
| 32390206 | Invalid parameter. |
| 32390205 | Connection is not ready. |
| 32390300 | Internal error. |

**Example**

```TypeScript
import { linkEnhance } from '@kit.DistributedServiceKit';
import { BusinessError } from '@kit.BasicServicesKit';
import { hilog } from '@kit.PerformanceAnalysisKit';

const TAG = "testDemo";

try {
  let peerDeviceId: string = "00:11:22:33:44:55";
  hilog.info(0x0000, TAG, 'connection server deviceId = ' + peerDeviceId);
  let connection: linkEnhance.Connection = linkEnhance.createConnection(peerDeviceId, "demo");
  connection.on('connectResult', (result: linkEnhance.ConnectResult): void => {
    hilog.info(0x0000, TAG, 'clientConnectResultCallback result = ' + result.success);
    if (result.success) {
      let len = 1;
      let arraybuffer = new ArrayBuffer(len); // Create the data to send.
      connection.sendData(arraybuffer);
      hilog.info(0x0000, TAG, "sendData data connection peerDeviceId=%{public}s" + connection.getPeerDeviceId());
      connection.disconnect();
    }
  });
  connection.connect();
} catch (err) {
  hilog.error(0x0000, TAG, 'errCode: ' + (err as BusinessError).code + ', errMessage: ' +
  (err as BusinessError).message);
}

```

