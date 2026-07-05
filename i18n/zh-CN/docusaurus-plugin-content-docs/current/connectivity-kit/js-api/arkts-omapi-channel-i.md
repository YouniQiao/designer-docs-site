# Channel

Channel represents an [ISO 7816-4] channel opened to a SE. It can be either a logical channel or the basic channel.

**起始版本：** 10

**系统能力：** SystemCapability.Communication.SecureElement

## 导入模块

```TypeScript
import { omapi } from '@kit.ConnectivityKit';
```

## close

```TypeScript
close(): void
```

Closes this channel to the SE. If the method is called when the channel is already closed, this method SHALL be ignored.

**起始版本：** 10

**系统能力：** SystemCapability.Communication.SecureElement

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 801 | Capability not supported. |

**示例：**

```TypeScript
import { hilog } from '@kit.PerformanceAnalysisKit';
import { omapi } from '@kit.ConnectivityKit';

let seChannel : omapi.Channel;

// 在使用seChannel之前，需要对seChannel进行初始化
try {
    seChannel.close();
} catch (exception) {
    hilog.error(0x0000, 'testTag', 'close exception %{public}s', JSON.stringify(exception));
}

```

## getSelectResponse

```TypeScript
getSelectResponse(): number[]
```

Returns the data as received from the application select command, including the status word received at applet selection.

**起始版本：** 10

**系统能力：** SystemCapability.Communication.SecureElement

**返回值：**

| 类型 | 说明 |
| --- | --- |
| number[] | The data as returned by the application select command inclusive of the status word. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 801 | Capability not supported. |

**示例：**

```TypeScript
import { hilog } from '@kit.PerformanceAnalysisKit';
import { omapi } from '@kit.ConnectivityKit';

let seChannel : omapi.Channel;

// 在使用seChannel之前，需要对seChannel进行初始化
try {
    let response = seChannel.getSelectResponse();
    hilog.info(0x0000, 'testTag', 'response = %{public}s', JSON.stringify(response));
} catch (exception) {
    hilog.error(0x0000, 'testTag', 'getSelectResponse exception %{public}s', JSON.stringify(exception));
}

```

## getSession

```TypeScript
getSession(): Session
```

Get the session that has opened this channel.

**起始版本：** 10

**系统能力：** SystemCapability.Communication.SecureElement

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Session | The Session object this channel is bound to. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 801 | Capability not supported. |

**示例：**

```TypeScript
import { hilog } from '@kit.PerformanceAnalysisKit';
import { omapi } from '@kit.ConnectivityKit';

let seSession : omapi.Session;
let seChannel : omapi.Channel;

// 在使用seChannel之前，需要对seChannel进行初始化

try {
    seSession = seChannel.getSession();
} catch (exception) {
    hilog.error(0x0000, 'testTag', 'getSession exception %{public}s', JSON.stringify(exception));
}

```

## isBasicChannel

```TypeScript
isBasicChannel(): boolean
```

Checks whether this channel is the basic channel.

**起始版本：** 10

**系统能力：** SystemCapability.Communication.SecureElement

**返回值：**

| 类型 | 说明 |
| --- | --- |
| boolean | True if this channel is a basic channel, false otherwise. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 801 | Capability not supported. |

**示例：**

```TypeScript
import { hilog } from '@kit.PerformanceAnalysisKit';
import { omapi } from '@kit.ConnectivityKit';

let seChannel : omapi.Channel;

// 在使用seChannel之前，需要对seChannel进行初始化
try {
    let isBasic = seChannel.isBasicChannel();
    hilog.info(0x0000, 'testTag', 'isBasic = %{public}s', JSON.stringify(isBasic));
} catch (exception) {
    hilog.error(0x0000, 'testTag', 'isBasicChannel exception %{public}s', JSON.stringify(exception));
}

```

## isClosed

```TypeScript
isClosed(): boolean
```

Checks if this channel is closed.

**起始版本：** 10

**系统能力：** SystemCapability.Communication.SecureElement

**返回值：**

| 类型 | 说明 |
| --- | --- |
| boolean | True if the channel is closed, false otherwise. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 801 | Capability not supported. |

**示例：**

```TypeScript
import { hilog } from '@kit.PerformanceAnalysisKit';
import { omapi } from '@kit.ConnectivityKit';

let seChannel : omapi.Channel;

// 在使用seChannel之前，需要对seChannel进行初始化
try {
    let isClosed = seChannel.isClosed();
    hilog.info(0x0000, 'testTag', 'isClosed = %{public}s', JSON.stringify(isClosed));
} catch (exception) {
    hilog.error(0x0000, 'testTag', 'isClosed exception %{public}s', JSON.stringify(exception));
}

```

## transmit

```TypeScript
transmit(command: number[]): Promise<number[]>
```

Transmit an APDU command (as per ISO/IEC 7816) to the SE.

**起始版本：** 10

**系统能力：** SystemCapability.Communication.SecureElement

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| command | number[] | 是 | The APDU command to be transmitted, as a byte array. |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Promise&lt;number[]> | The response received, as a byte array. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 401 | The parameter check failed. Possible causes:  1. Mandatory parameters are left unspecified.  2. Incorrect parameters types.  3. Parameter verification failed. |
| 801 | Capability not supported. |
| 3300101 | IllegalStateError, an attempt is made to use an SE session or channel that has been closed. |
| 3300103 | SecurityError, the command is filtered by the security policy. |
| 3300104 | IOError, there is a communication problem to the reader or the SE. |

**示例：**

```TypeScript
import { hilog } from '@kit.PerformanceAnalysisKit';
import { omapi } from '@kit.ConnectivityKit';

let seChannel : omapi.Channel;

// 在使用seChannel之前，需要对seChannel进行初始化
let cmdData = [0x01, 0x02, 0x03, 0x04]; // 请更改为正确的data
try {
    seChannel.transmit(cmdData).then((response) => {
        // 若芯片捕获异常则response返回全0
        hilog.info(0x0000, 'testTag', 'transmit response = %{public}s.', JSON.stringify(response));
    }).catch((error : BusinessError) => {
        hilog.error(0x0000, 'testTag', 'transmit error = %{public}s.', JSON.stringify(error));
    });
} catch (exception) {
    hilog.error(0x0000, 'testTag', 'transmit exception = %{public}s.', JSON.stringify(exception));
}

```

## transmit

```TypeScript
transmit(command: number[], callback: AsyncCallback<number[]>): void
```

Transmit an APDU command (as per ISO/IEC 7816) to the SE.

**起始版本：** 10

**系统能力：** SystemCapability.Communication.SecureElement

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| command | number[] | 是 | The APDU command to be transmitted, as a byte array. |
| callback | AsyncCallback&lt;number[]> | 是 | The callback to return the response received, as a byte array. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 401 | The parameter check failed. Possible causes:  1. Mandatory parameters are left unspecified.  2. Incorrect parameters types.  3. Parameter verification failed. |
| 801 | Capability not supported. |
| 3300101 | IllegalStateError, an attempt is made to use an SE session or channel that has been closed. |
| 3300103 | SecurityError, the command is filtered by the security policy. |
| 3300104 | IOError, there is a communication problem to the reader or the SE. |

**示例：**

```TypeScript
import { hilog } from '@kit.PerformanceAnalysisKit';
import { omapi } from '@kit.ConnectivityKit';

let seChannel : omapi.Channel;

// 在使用seChannel之前，需要对seChannel进行初始化
let cmdData = [0x01, 0x02, 0x03, 0x04]; // 请更改为正确的data
try {
    seChannel.transmit(cmdData, (error, response) => {
    if (error) {
        hilog.error(0x0000, 'testTag', 'transmit error %{public}s', JSON.stringify(error));
    } else {
        // 若芯片捕获异常则response返回全0
        hilog.info(0x0000, 'testTag', 'transmit response = %{public}s.', JSON.stringify(response));
    }
    });
} catch (exception) {
    hilog.error(0x0000, 'testTag', 'transmit exception %{public}s', JSON.stringify(exception));
}

```

