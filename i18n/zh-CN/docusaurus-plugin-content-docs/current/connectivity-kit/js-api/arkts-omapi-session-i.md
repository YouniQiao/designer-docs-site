# Session

Session represent a connection session to one of the SEs available on the device. These objects can be used to get a communication channel with an applet in the SE. This channel can be the basic channel or a logical channel.

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

Close the connection with the SE. This will close any channels opened by this application with this SE.

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

let seSession : omapi.Session;

// 在使用seSession之前，需要对seSession进行初始化

try {
    seSession.close();
} catch (error) {
    hilog.error(0x0000, 'testTag', 'close error %{public}s', JSON.stringify(error));
}

```

## closeChannels

```TypeScript
closeChannels(): void
```

Close any channels opened on this session.

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

let seSession : omapi.Session;

// 在使用seSession之前，需要对seSession进行初始化

try {
    seSession.closeChannels();
} catch (error) {
    hilog.error(0x0000, 'testTag', 'closeChannels error %{public}s', JSON.stringify(error));
}

```

## getATR

```TypeScript
getATR(): number[]
```

Get the ATR of this SE. A empty array SHALL be returned if the ATR for this SE is not available.

**起始版本：** 10

**系统能力：** SystemCapability.Communication.SecureElement

**返回值：**

| 类型 | 说明 |
| --- | --- |
| number[] | The ATR as a number array or empty array. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 801 | Capability not supported. |
| 3300101 | IllegalStateError, service state exception. |

**示例：**

```TypeScript
import { hilog } from '@kit.PerformanceAnalysisKit';
import { omapi } from '@kit.ConnectivityKit';

let seSession : omapi.Session;

// 在使用seSession之前，需要对seSession进行初始化

try {
    let atr = seSession.getATR();
    hilog.info(0x0000, 'testTag', 'atr %{public}s', JSON.stringify(atr));
} catch (error) {
    hilog.error(0x0000, 'testTag', 'getATR error %{public}s', JSON.stringify(error));
}

```

## getReader

```TypeScript
getReader(): Reader
```

Get the reader that provides this session.

**起始版本：** 10

**系统能力：** SystemCapability.Communication.SecureElement

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Reader | The Reader object. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 801 | Capability not supported. |

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
        return;
    }
    try {
        let sessionReader = seSession.getReader();
    } catch (error) {
        hilog.error(0x0000, 'testTag', 'getReader error %{public}s', JSON.stringify(error));
    }
}

```

## isClosed

```TypeScript
isClosed(): boolean
```

Check if this session is closed.

**起始版本：** 10

**系统能力：** SystemCapability.Communication.SecureElement

**返回值：**

| 类型 | 说明 |
| --- | --- |
| boolean | True if the session is closed, false otherwise. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 801 | Capability not supported. |

**示例：**

```TypeScript
import { hilog } from '@kit.PerformanceAnalysisKit';
import { omapi } from '@kit.ConnectivityKit';

let seSession : omapi.Session;

// 在使用seSession之前，需要对seSession进行初始化

try {
    let isClosed = seSession.isClosed();
    hilog.info(0x0000, 'testTag', 'isClosed %{public}s', JSON.stringify(isClosed));
} catch (error) {
    hilog.error(0x0000, 'testTag', 'isClosed error %{public}s', JSON.stringify(error));
}

```

## openBasicChannel

```TypeScript
openBasicChannel(aid: number[]): Promise<Channel>
```

This method is provided to ease the development of mobile applications and for backward compatibility with existing applications. This method is equivalent to openBasicChannel(aid, P2=0x00).

**起始版本：** 10

**系统能力：** SystemCapability.Communication.SecureElement

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| aid | number[] | 是 | The AID of the applet to be selected on this channel, as a byte array,  or Null if no applet is to be selected. |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Promise&lt;Channel> | An instance of channel if available. Null if the SE is unable to provide. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 401 | The parameter check failed. Possible causes:  1. Mandatory parameters are left unspecified.  2. Incorrect parameters types.  3. Parameter verification failed. |
| 801 | Capability not supported. |
| 3300101 | IllegalStateError, an attempt is made to use an SE session that has been closed. |
| 3300102 | NoSuchElementError, the AID on the SE is not available or cannot be selected. |
| 3300103 | SecurityError, the calling application cannot be granted access to this AID or the default applet on this session. |
| 3300104 | IOError, there is a communication problem to the reader or the SE. |

**示例：**

```TypeScript
import { hilog } from '@kit.PerformanceAnalysisKit';
import { omapi } from '@kit.ConnectivityKit';

let seSession : omapi.Session;
let seChannel : omapi.Channel;
let aidArray : number[] = [0xA0, 0x00, 0x00, 0x00, 0x03, 0x10, 0x10];

// 在使用seSession之前，需要对seSession进行初始化
function secureElementDemo() {
    try {
        // 改为在此channel上选择的App的aid
        seSession.openBasicChannel(aidArray).then((data) => {
            seChannel = data;
        }).catch((error : BusinessError)=> {
            hilog.error(0x0000, 'testTag', 'openBasicChannel error %{public}s', JSON.stringify(error));
        });
    } catch (exception) {
        hilog.error(0x0000, 'testTag', 'openBasicChannel exception %{public}s', JSON.stringify(exception));
    }
    if (seChannel == undefined) {
        hilog.error(0x0000, 'testTag', 'seChannel invalid.');
        return;
    }
}

```

## openBasicChannel

```TypeScript
openBasicChannel(aid: number[], callback: AsyncCallback<Channel>): void
```

This method is provided to ease the development of mobile applications and for backward compatibility with existing applications. This method is equivalent to openBasicChannel(aid, P2=0x00).

**起始版本：** 10

**系统能力：** SystemCapability.Communication.SecureElement

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| aid | number[] | 是 | The AID of the applet to be selected on this channel, as a byte array,  or Null if no applet is to be selected. |
| callback | AsyncCallback&lt;Channel> | 是 | The callback to return the Channel object. Null if the SE is unable to provide. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 401 | The parameter check failed. Possible causes:  1. Mandatory parameters are left unspecified.  2. Incorrect parameters types.  3. Parameter verification failed. |
| 801 | Capability not supported. |
| 3300101 | IllegalStateError, an attempt is made to use an SE session that has been closed. |
| 3300102 | NoSuchElementError, the AID on the SE is not available or cannot be selected. |
| 3300103 | SecurityError, the calling application cannot be granted access to this AID or the default applet on this session. |
| 3300104 | IOError, there is a communication problem to the reader or the SE. |

**示例：**

```TypeScript
import { hilog } from '@kit.PerformanceAnalysisKit';
import { omapi } from '@kit.ConnectivityKit';

let seSession : omapi.Session;
let seChannel : omapi.Channel;
let aidArray : number[] = [0xA0, 0x00, 0x00, 0x00, 0x03, 0x10, 0x10];

// 在使用seSession之前，需要对seSession进行初始化
function secureElementDemo() {
    try {
        // 改为在此channel上选择的App的aid
        seSession.openBasicChannel(aidArray, (error, data) => {
            if (error) {
                hilog.error(0x0000, 'testTag', 'openBasicChannel error %{public}s', JSON.stringify(error));
            } else {
                seChannel = data;
            }
        });
    } catch (exception) {
        hilog.error(0x0000, 'testTag', 'openBasicChannel exception %{public}s', JSON.stringify(exception));
    }
    if (seChannel == undefined) {
        hilog.error(0x0000, 'testTag', 'seChannel invalid.');
        return;
    }
}

```

## openBasicChannel

```TypeScript
openBasicChannel(aid: number[], p2: number): Promise<Channel>
```

Get access to the basic channel, as defined in [ISO 7816-4] (the one that has number 0). The obtained object is an instance of the channel class. Once this channel has been opened by a device application, it is considered as ‘locked’ by this device application, and other calls to this method SHALL return Null, until the channel is closed. Some SE plug-ins, such as those handling UICC, may prevent the use of the Basic Channel. In these cases, a Null value SHALL be returned. P2 is normally 0x00. The device SHOULD allow any value for P2 and SHALL allow the following values: 0x00, 0x04, 0x08, 0x0C (as defined in [ISO 7816-4]).

**起始版本：** 10

**系统能力：** SystemCapability.Communication.SecureElement

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| aid | number[] | 是 | The AID of the applet to be selected on this channel, as a byte array,  or Null if no applet is to be selected. |
| p2 | number | 是 | The P2 parameter of the SELECT APDU executed on this channel. |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Promise&lt;Channel> | An instance of channel if available. Null if the SE is unable to provide. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 401 | The parameter check failed. Possible causes:  1. Mandatory parameters are left unspecified.  2. Incorrect parameters types.  3. Parameter verification failed. |
| 801 | Capability not supported. |
| 3300101 | IllegalStateError, an attempt is made to use an SE session that has been closed. |
| 3300102 | NoSuchElementError, the AID on the SE is not available or cannot be selected. |
| 3300103 | SecurityError, the calling application cannot be granted access to this AID or the default applet on this session. |
| 3300104 | IOError, there is a communication problem to the reader or the SE. |

**示例：**

```TypeScript
import { hilog } from '@kit.PerformanceAnalysisKit';
import { omapi } from '@kit.ConnectivityKit';

let seSession : omapi.Session;
let seChannel : omapi.Channel;
let aidArray : number[] = [0xA0, 0x00, 0x00, 0x00, 0x03, 0x10, 0x10];
let p2 : number = 0x00;

// 在使用seSession之前，需要对seSession进行初始化
function secureElementDemo() {
    try {
        // 改为在此channel上选择的App的aid
        seSession.openBasicChannel(aidArray, p2).then((data) => {
            seChannel = data;
        }).catch((error : BusinessError)=> {
            hilog.error(0x0000, 'testTag', 'openBasicChannel error %{public}s', JSON.stringify(error));
        });
    } catch (exception) {
        hilog.error(0x0000, 'testTag', 'openBasicChannel exception %{public}s', JSON.stringify(exception));
    }
    if (seChannel == undefined) {
        hilog.error(0x0000, 'testTag', 'seChannel invalid.');
        return;
    }
}

```

## openBasicChannel

```TypeScript
openBasicChannel(aid: number[], p2: number, callback: AsyncCallback<Channel>): void
```

Get access to the basic channel, as defined in [ISO 7816-4] (the one that has number 0). The obtained object is an instance of the channel class. Once this channel has been opened by a device application, it is considered as ‘locked’ by this device application, and other calls to this method SHALL return Null, until the channel is closed. Some SE plug-ins, such as those handling UICC, may prevent the use of the Basic Channel. In these cases, a Null value SHALL be returned. P2 is normally 0x00. The device SHOULD allow any value for P2 and SHALL allow the following values: 0x00, 0x04, 0x08, 0x0C (as defined in [ISO 7816-4]).

**起始版本：** 10

**系统能力：** SystemCapability.Communication.SecureElement

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| aid | number[] | 是 | The AID of the applet to be selected on this channel, as a byte array,  or Null if no applet is to be selected. |
| p2 | number | 是 | The P2 parameter of the SELECT APDU executed on this channel. |
| callback | AsyncCallback&lt;Channel> | 是 | The callback to return the Channel object. Null if the SE is unable to provide. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 401 | The parameter check failed. Possible causes:  1. Mandatory parameters are left unspecified.  2. Incorrect parameters types.  3. Parameter verification failed. |
| 801 | Capability not supported. |
| 3300101 | IllegalStateError, an attempt is made to use an SE session that has been closed. |
| 3300102 | NoSuchElementError, the AID on the SE is not available or cannot be selected. |
| 3300103 | SecurityError, the calling application cannot be granted access to this AID or the default applet on this session. |
| 3300104 | IOError, there is a communication problem to the reader or the SE. |

**示例：**

```TypeScript
import { hilog } from '@kit.PerformanceAnalysisKit';
import { omapi } from '@kit.ConnectivityKit';

let seSession : omapi.Session;
let seChannel : omapi.Channel;
let aidArray : number[] = [0xA0, 0x00, 0x00, 0x00, 0x03, 0x10, 0x10];
let p2 : number = 0x00;

// 在使用seSession之前，需要对seSession进行初始化
function secureElementDemo() {
    try {
        // 改为在此channel上选择的App的aid
        seSession.openBasicChannel(aidArray, p2, (error, data) => {
            if (error) {
                hilog.error(0x0000, 'testTag', 'openBasicChannel error %{public}s', JSON.stringify(error));
            } else {
                seChannel = data;
            }
        });
    } catch (exception) {
        hilog.error(0x0000, 'testTag', 'openBasicChannel exception %{public}s', JSON.stringify(exception));
    }
    if (seChannel == undefined) {
        hilog.error(0x0000, 'testTag', 'seChannel invalid.');
        return;
    }
}

```

## openLogicalChannel

```TypeScript
openLogicalChannel(aid: number[]): Promise<Channel>
```

This method is provided to ease the development of mobile applications and for backward compatibility with existing applications. This method is equivalent to openLogicalChannel(aid, P2=0x00).

**起始版本：** 10

**系统能力：** SystemCapability.Communication.SecureElement

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| aid | number[] | 是 | The AID of the applet to be selected on this channel, as a byte array. |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Promise&lt;Channel> | An instance of channel if available. Null if the SE is unable to provide.  A new logical channel or is unable to retrieve Access Control rules due to the lack of an available logical channel. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 401 | The parameter check failed. Possible causes:  1. Mandatory parameters are left unspecified.  2. Incorrect parameters types.  3. Parameter verification failed. |
| 801 | Capability not supported. |
| 3300101 | IllegalStateError, an attempt is made to use an SE session that has been closed. |
| 3300102 | NoSuchElementError, the AID on the SE is not available or cannot be selected or  a logical channel is already open to a non-multi-selectable applet. |
| 3300103 | SecurityError, the calling application cannot be granted access to this AID or the default applet on this session. |
| 3300104 | IOError, there is a communication problem to the reader or the SE. |

**示例：**

```TypeScript
import { hilog } from '@kit.PerformanceAnalysisKit';
import { omapi } from '@kit.ConnectivityKit';

let seSession : omapi.Session;
let seChannel : omapi.Channel;
let aidArray : number[] = [0xA0, 0x00, 0x00, 0x00, 0x03, 0x10, 0x10];

// 在使用seSession之前，需要对seSession进行初始化
function secureElementDemo() {
    try {
        // 改为在此channel上选择的App的aid
        seSession.openLogicalChannel(aidArray).then((data) => {
            seChannel = data;
        }).catch((error : BusinessError)=> {
            hilog.error(0x0000, 'testTag', 'openLogicalChannel error %{public}s', JSON.stringify(error));
        });
    } catch (exception) {
        hilog.error(0x0000, 'testTag', 'openLogicalChannel exception %{public}s', JSON.stringify(exception));
    }
    if (seChannel == undefined) {
        hilog.error(0x0000, 'testTag', 'seChannel invalid.');
        return;
    }
}

```

## openLogicalChannel

```TypeScript
openLogicalChannel(aid: number[], callback: AsyncCallback<Channel>): void
```

This method is provided to ease the development of mobile applications and for backward compatibility with existing applications. This method is equivalent to openLogicalChannel(aid, P2=0x00).

**起始版本：** 10

**系统能力：** SystemCapability.Communication.SecureElement

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| aid | number[] | 是 | The AID of the applet to be selected on this channel, as a byte array. |
| callback | AsyncCallback&lt;Channel> | 是 | The callback to return the Channel object. Null if the SE is unable to provide.  A new logical channel or is unable to retrieve Access Control rules due to the lack of an available logical channel. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 401 | The parameter check failed. Possible causes:  1. Mandatory parameters are left unspecified.  2. Incorrect parameters types.  3. Parameter verification failed. |
| 801 | Capability not supported. |
| 3300101 | IllegalStateError, an attempt is made to use an SE session that has been closed. |
| 3300102 | NoSuchElementError, the AID on the SE is not available or cannot be selected or  a logical channel is already open to a non-multi-selectable applet. |
| 3300103 | SecurityError, the calling application cannot be granted access to this AID or the default applet on this session. |
| 3300104 | IOError, there is a communication problem to the reader or the SE. |

**示例：**

```TypeScript
import { hilog } from '@kit.PerformanceAnalysisKit';
import { omapi } from '@kit.ConnectivityKit';

let seSession : omapi.Session;
let seChannel : omapi.Channel;
let aidArray : number[] = [0xA0, 0x00, 0x00, 0x00, 0x03, 0x10, 0x10];

// 在使用seSession之前，需要对seSession进行初始化
function secureElementDemo() {
    try {
        // 改为在此channel上选择的App的aid
        seSession.openLogicalChannel(aidArray, (error, data) => {
            if (error) {
                hilog.error(0x0000, 'testTag', 'openLogicalChannel error %{public}s', JSON.stringify(error));
            } else {
                seChannel = data;
            }
        });
    } catch (exception) {
        hilog.error(0x0000, 'testTag', 'openLogicalChannel exception %{public}s', JSON.stringify(exception));
    }
    if (seChannel == undefined) {
        hilog.error(0x0000, 'testTag', 'seChannel invalid.');
        return;
    }
}

```

## openLogicalChannel

```TypeScript
openLogicalChannel(aid: number[], p2: number): Promise<Channel>
```

Open a logical channel with the SE, selecting the applet represented by the given AID (when the AID is not Null and the length of the AID is not 0). If the length of the AID is 0, the method will select the Issuer Security Domain of the SE by sending a SELECT command with 0 length AID as defined in [GPCS]. If the AID is Null, the method SHALL only send a MANAGE CHANNEL Open and SHALL NOT send a SELECT command. In this case, the default applet associated to the logical channel will be selected by default. P2 is normally 0x00. The device SHOULD allow any value for P2 and SHALL allow the following values: 0x00, 0x04, 0x08, 0x0C (as defined in [ISO 7816-4]).

**起始版本：** 10

**系统能力：** SystemCapability.Communication.SecureElement

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| aid | number[] | 是 | The AID of the applet to be selected on this channel, as a byte array. |
| p2 | number | 是 | The P2 parameter of the SELECT APDU executed on this channel. |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Promise&lt;Channel> | An instance of channel if available. Null if the SE is unable to provide.  A new logical channel or is unable to retrieve Access Control rules due to the lack of an available logical channel. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 401 | The parameter check failed. Possible causes:  1. Mandatory parameters are left unspecified.  2. Incorrect parameters types.  3. Parameter verification failed. |
| 801 | Capability not supported. |
| 3300101 | IllegalStateError, an attempt is made to use an SE session that has been closed. |
| 3300102 | NoSuchElementError, the AID on the SE is not available or cannot be selected or  a logical channel is already open to a non-multi-selectable applet. |
| 3300103 | SecurityError, the calling application cannot be granted access to this AID or the default applet on this session. |
| 3300104 | IOError, there is a communication problem to the reader or the SE. |

**示例：**

```TypeScript
import { hilog } from '@kit.PerformanceAnalysisKit';
import { omapi } from '@kit.ConnectivityKit';

let seSession : omapi.Session;
let seChannel : omapi.Channel;
let aidArray : number[] = [0xA0, 0x00, 0x00, 0x00, 0x03, 0x10, 0x10];
let p2 : number = 0x00;

// 在使用seSession之前，需要对seSession进行初始化
function secureElementDemo() {
    try {
        // 改为在此channel上选择的App的aid
        seSession.openLogicalChannel(aidArray, p2).then((data) => {
            seChannel = data;
        }).catch((error : BusinessError)=> {
            hilog.error(0x0000, 'testTag', 'openLogicalChannel error %{public}s', JSON.stringify(error));
        });
    } catch (exception) {
        hilog.error(0x0000, 'testTag', 'openLogicalChannel exception %{public}s', JSON.stringify(exception));
    }
    if (seChannel == undefined) {
        hilog.error(0x0000, 'testTag', 'seChannel invalid.');
        return;
    }
}

```

## openLogicalChannel

```TypeScript
openLogicalChannel(aid: number[], p2: number, callback: AsyncCallback<Channel>): void
```

Open a logical channel with the SE, selecting the applet represented by the given AID (when the AID is not Null and the length of the AID is not 0). If the length of the AID is 0, the method will select the Issuer Security Domain of the SE by sending a SELECT command with 0 length AID as defined in [GPCS]. If the AID is Null, the method SHALL only send a MANAGE CHANNEL Open and SHALL NOT send a SELECT command. In this case, the default applet associated to the logical channel will be selected by default. P2 is normally 0x00. The device SHOULD allow any value for P2 and SHALL allow the following values: 0x00, 0x04, 0x08, 0x0C (as defined in [ISO 7816-4]).

**起始版本：** 10

**系统能力：** SystemCapability.Communication.SecureElement

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| aid | number[] | 是 | The AID of the applet to be selected on this channel, as a byte array. |
| p2 | number | 是 | The P2 parameter of the SELECT APDU executed on this channel. |
| callback | AsyncCallback&lt;Channel> | 是 | The callback to return the instance of channel. Null if the SE is unable to provide. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 401 | The parameter check failed. Possible causes:  1. Mandatory parameters are left unspecified.  2. Incorrect parameters types.  3. Parameter verification failed. |
| 801 | Capability not supported. |
| 3300101 | IllegalStateError, an attempt is made to use an SE session that has been closed. |
| 3300102 | NoSuchElementError, the AID on the SE is not available or cannot be selected or  a logical channel is already open to a non-multi-selectable applet. |
| 3300103 | SecurityError, the calling application cannot be granted access to this AID or the default applet on this session. |
| 3300104 | IOError, there is a communication problem to the reader or the SE. |

**示例：**

```TypeScript
import { hilog } from '@kit.PerformanceAnalysisKit';
import { omapi } from '@kit.ConnectivityKit';

let seSession : omapi.Session;
let seChannel : omapi.Channel;
let aidArray : number[] = [0xA0, 0x00, 0x00, 0x00, 0x03, 0x10, 0x10];
let p2 : number = 0x00;

// 在使用seSession之前，需要对seSession进行初始化
function secureElementDemo() {
    try {
    // 改为在此channel上选择的App的aid
        seSession.openLogicalChannel(aidArray, p2, (error, data) => {
            if (error) {
                hilog.error(0x0000, 'testTag', 'openLogicalChannel error %{public}s', JSON.stringify(error));
            } else {
                seChannel = data;
            }
        });
    } catch (exception) {
        hilog.error(0x0000, 'testTag', 'openLogicalChannel exception %{public}s', JSON.stringify(exception));
    }
    if (seChannel == undefined) {
        hilog.error(0x0000, 'testTag', 'seChannel invalid.');
        return;
    }
}

```

