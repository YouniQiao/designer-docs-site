# Reader

Reader represents the SE readers supported by this device.

**起始版本：** 10

**系统能力：** SystemCapability.Communication.SecureElement

## 导入模块

```TypeScript
import { omapi } from '@kit.ConnectivityKit';
```

## closeSessions

```TypeScript
closeSessions(): void
```

Close all the sessions opened on this reader. All the channels opened by all these sessions will be closed.

**起始版本：** 10

**系统能力：** SystemCapability.Communication.SecureElement

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 801 | Capability not supported. |
| 3300101 | IllegalStateError, service state exception. |

**示例：**

```TypeScript
import { hilog } from '@kit.PerformanceAnalysisKit';
import { omapi } from '@kit.ConnectivityKit';

let seReaders : omapi.Reader[];
let seSession : omapi.Session;
let reader : omapi.Reader;

// 在使用seReaders之前，需要对seReaders进行初始化
function secureElementDemo() {
    try {
        reader = seReaders[0]; // 将其更改为所选的reader：eSE、SIM、SIM2
        seSession = reader.openSession();
    } catch (error) {
        hilog.error(0x0000, 'testTag', 'openSession error %{public}s', JSON.stringify(error));
    }
    if (seSession == undefined) {
        hilog.error(0x0000, 'testTag', 'seSession invalid.');
        // 释放SeService资源
        seService.shutdown();
        return;
    }
    try {
        reader.closeSessions();
    } catch (error) {
        hilog.error(0x0000, 'testTag', 'closeSessions error %{public}s', JSON.stringify(error));
    }
}

```

## getName

```TypeScript
getName(): string
```

Returns the name of this reader. If this reader is a SIM reader, then its name must be "SIM[slot]". If the reader is an embedded SE reader, then its name must be "eSE[slot]".

**起始版本：** 10

**系统能力：** SystemCapability.Communication.SecureElement

**返回值：**

| 类型 | 说明 |
| --- | --- |
| string | The reader name, as a String. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 801 | Capability not supported. |

**示例：**

```TypeScript
import { hilog } from '@kit.PerformanceAnalysisKit';
import { omapi } from '@kit.ConnectivityKit';

let seReaders : omapi.Reader[];

// 在使用seReaders之前，需要对seReaders进行初始化

try {
    let reader = seReaders[0]; // 将其更改为所选的reader：eSE、SIM、SIM2
    let name = reader.getName();
    hilog.info(0x0000, 'testTag', 'name %{public}s', JSON.stringify(name));
} catch (error) {
    hilog.error(0x0000, 'testTag', 'getName error %{public}s', JSON.stringify(error));
}

```

## isSecureElementPresent

```TypeScript
isSecureElementPresent(): boolean
```

Checks if a SE is present in this reader.

**起始版本：** 10

**系统能力：** SystemCapability.Communication.SecureElement

**返回值：**

| 类型 | 说明 |
| --- | --- |
| boolean | True if the SE is present, false otherwise. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 801 | Capability not supported. |
| 3300101 | IllegalStateError, service state exception. |

**示例：**

```TypeScript
import { hilog } from '@kit.PerformanceAnalysisKit';
import { omapi } from '@kit.ConnectivityKit';

let seReaders : omapi.Reader[];

// 在使用seReaders之前，需要对seReaders进行初始化

try {
    let reader = seReaders[0]; // 将其更改为所选的reader：eSE、SIM、SIM2
    let isPresent = reader.isSecureElementPresent();
    hilog.info(0x0000, 'testTag', 'isPresent %{public}s', JSON.stringify(isPresent));
} catch (error) {
    hilog.error(0x0000, 'testTag', 'isSecureElementPresent error %{public}s', JSON.stringify(error));
}

```

## openSession

```TypeScript
openSession(): Session
```

Connects to a SE in this reader. This method prepares (initializes) the SE for communication before the session object is returned. There might be multiple sessions opened at the same time on the same reader.

**起始版本：** 10

**系统能力：** SystemCapability.Communication.SecureElement

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Session | A Session object to be used to create channels. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 801 | Capability not supported. |
| 3300101 | IllegalStateError, service state exception. |
| 3300104 | IOError, there is a communication problem to the reader or the SE. |

**示例：**

```TypeScript
import { hilog } from '@kit.PerformanceAnalysisKit';
import { omapi } from '@kit.ConnectivityKit';

let seReaders : omapi.Reader[];
let seSession : omapi.Session;

// 在使用seReaders之前，需要对seReaders进行初始化
function secureElementDemo() {
    try {
        let reader = seReaders[0]; // 将其更改为所选的reader：eSE、SIM、SIM2
        seSession = reader.openSession();
    } catch (error) {
        hilog.error(0x0000, 'testTag', 'openSession error %{public}s', JSON.stringify(error));
    }
    if (seSession == undefined) {
        hilog.error(0x0000, 'testTag', 'seSession invalid.');
        return;
    }
}

```

