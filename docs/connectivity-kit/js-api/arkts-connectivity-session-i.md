# Session

Session represent a connection session to one of the SEs available on the device. These objects
can be used to get a communication channel with an applet in the SE. This channel can be the basic channel
or a logical channel.

**Since:** 10

**System capability:** SystemCapability.Communication.SecureElement

## Modules to Import

```TypeScript
import { omapi } from '@kit.ConnectivityKit';
```

## close

```TypeScript
close(): void
```

Close the connection with the SE. This will close any channels opened by this application with this SE.

**Since:** 10

**System capability:** SystemCapability.Communication.SecureElement

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [801](../../apis-ads-kit/errorcode-ads.md#801-ad-request-failure) | Capability not supported. |
| [3300101](../errorcode-se.md#3300101-abnormal-se-service-status) | IllegalStateError, service state exception. |

**Example**

```TypeScript
import { hilog } from '@kit.PerformanceAnalysisKit';
import { omapi } from '@kit.ConnectivityKit';

let seSession : omapi.Session;

// Initialize seSession before using it.

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

**Since:** 10

**System capability:** SystemCapability.Communication.SecureElement

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [801](../../apis-ads-kit/errorcode-ads.md#801-ad-request-failure) | Capability not supported. |
| [3300101](../errorcode-se.md#3300101-abnormal-se-service-status) | IllegalStateError, service state exception. |

**Example**

```TypeScript
import { hilog } from '@kit.PerformanceAnalysisKit';
import { omapi } from '@kit.ConnectivityKit';

let seSession : omapi.Session;

// Initialize seSession before using it.

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

Get the ATR of this SE.
A empty array SHALL be returned if the ATR for this SE is not available.

**Since:** 10

**System capability:** SystemCapability.Communication.SecureElement

**Return value:**

| Type | Description |
| --- | --- |
| number[] | The ATR as a number array or empty array. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [801](../../apis-ads-kit/errorcode-ads.md#801-ad-request-failure) | Capability not supported. |
| [3300101](../errorcode-se.md#3300101-abnormal-se-service-status) | IllegalStateError, service state exception. |

**Example**

```TypeScript
import { hilog } from '@kit.PerformanceAnalysisKit';
import { omapi } from '@kit.ConnectivityKit';

let seSession : omapi.Session;

// Initialize seSession before using it.

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

**Since:** 10

**System capability:** SystemCapability.Communication.SecureElement

**Return value:**

| Type | Description |
| --- | --- |
| Reader | The Reader object. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [801](../../apis-ads-kit/errorcode-ads.md#801-ad-request-failure) | Capability not supported. |

**Example**

```TypeScript
import { hilog } from '@kit.PerformanceAnalysisKit';
import { omapi } from '@kit.ConnectivityKit';

let seReaders : omapi.Reader[];
let seSession : omapi.Session;
let reader : omapi.Reader;

// Initialize seReaders before using it.
function secureElementDemo() {
    try {
        reader = seReaders[0]; // Set the expected reader (eSE, SIM, or SIM2).
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

**Since:** 10

**System capability:** SystemCapability.Communication.SecureElement

**Return value:**

| Type | Description |
| --- | --- |
| boolean | True if the session is closed, false otherwise. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [801](../../apis-ads-kit/errorcode-ads.md#801-ad-request-failure) | Capability not supported. |

**Example**

```TypeScript
import { hilog } from '@kit.PerformanceAnalysisKit';
import { omapi } from '@kit.ConnectivityKit';

let seSession : omapi.Session;

// Initialize seSession before using it.

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

This method is provided to ease the development of mobile applications and for backward compatibility with
existing applications. This method is equivalent to openBasicChannel(aid, P2=0x00).

**Since:** 10

**System capability:** SystemCapability.Communication.SecureElement

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| aid | number[] | Yes | The AID of the applet to be selected on this channel, as a byte array,or Null if no applet is to be selected. |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;Channel&gt; | An instance of channel if available. Null if the SE is unable to provide. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | The parameter check failed. Possible causes:<br> 1. Mandatory parameters are left unspecified.<br> 2. Incorrect parameters types.<br> 3. Parameter verification failed. |
| [801](../../apis-ads-kit/errorcode-ads.md#801-ad-request-failure) | Capability not supported. |
| [3300101](../errorcode-se.md#3300101-abnormal-se-service-status) | IllegalStateError, an attempt is made to use an SE session that has been closed. |
| [3300102](../errorcode-se.md#3300102-failed-to-find-the-desired-se) | NoSuchElementError, the AID on the SE is not available or cannot be selected. |
| [3300103](../errorcode-se.md#3300103-failed-to-obtain-the-access-rule) | SecurityError, the calling application cannot be granted access to this AID or the default applet on this session. |
| [3300104](../errorcode-se.md#3300104-se-chip-io-exception) | IOError, there is a communication problem to the reader or the SE. |

**Example**

```TypeScript
import { hilog } from '@kit.PerformanceAnalysisKit';
import { omapi } from '@kit.ConnectivityKit';

let seSession : omapi.Session;
let seChannel : omapi.Channel;
let aidArray : number[] = [0xA0, 0x00, 0x00, 0x00, 0x03, 0x10, 0x10];

// Initialize seSession before using it.
function secureElementDemo() {
    try {
        // Set the AID of the application selected on the channel.
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

This method is provided to ease the development of mobile applications and for backward compatibility with
existing applications. This method is equivalent to openBasicChannel(aid, P2=0x00).

**Since:** 10

**System capability:** SystemCapability.Communication.SecureElement

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| aid | number[] | Yes | The AID of the applet to be selected on this channel, as a byte array,or Null if no applet is to be selected. |
| callback | AsyncCallback&lt;Channel&gt; | Yes | The callback to return the Channel object. Null if the SE is unable to provide. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | The parameter check failed. Possible causes:<br> 1. Mandatory parameters are left unspecified.<br> 2. Incorrect parameters types.<br> 3. Parameter verification failed. |
| [801](../../apis-ads-kit/errorcode-ads.md#801-ad-request-failure) | Capability not supported. |
| [3300101](../errorcode-se.md#3300101-abnormal-se-service-status) | IllegalStateError, an attempt is made to use an SE session that has been closed. |
| [3300102](../errorcode-se.md#3300102-failed-to-find-the-desired-se) | NoSuchElementError, the AID on the SE is not available or cannot be selected. |
| [3300103](../errorcode-se.md#3300103-failed-to-obtain-the-access-rule) | SecurityError, the calling application cannot be granted access to this AID or the default applet on this session. |
| [3300104](../errorcode-se.md#3300104-se-chip-io-exception) | IOError, there is a communication problem to the reader or the SE. |

**Example**

```TypeScript
import { hilog } from '@kit.PerformanceAnalysisKit';
import { omapi } from '@kit.ConnectivityKit';

let seSession : omapi.Session;
let seChannel : omapi.Channel;
let aidArray : number[] = [0xA0, 0x00, 0x00, 0x00, 0x03, 0x10, 0x10];

// Initialize seSession before using it.
function secureElementDemo() {
    try {
        // Set the AID of the application selected on the channel.
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

Get access to the basic channel, as defined in [ISO 7816-4] (the one that has number 0). The obtained object
is an instance of the channel class.
Once this channel has been opened by a device application, it is considered as ‘locked’ by this device
application, and other calls to this method SHALL return Null, until the channel is closed.
Some SE plug-ins, such as those handling UICC, may prevent the use of the Basic Channel. In these cases,
a Null value SHALL be returned.
P2 is normally 0x00. The device SHOULD allow any value for P2 and SHALL allow the following values:
0x00, 0x04, 0x08, 0x0C (as defined in [ISO 7816-4]).

**Since:** 10

**System capability:** SystemCapability.Communication.SecureElement

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| aid | number[] | Yes | The AID of the applet to be selected on this channel, as a byte array,or Null if no applet is to be selected. |
| p2 | number | Yes | The P2 parameter of the SELECT APDU executed on this channel. |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;Channel&gt; | An instance of channel if available. Null if the SE is unable to provide. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | The parameter check failed. Possible causes:<br> 1. Mandatory parameters are left unspecified.<br> 2. Incorrect parameters types.<br> 3. Parameter verification failed. |
| [801](../../apis-ads-kit/errorcode-ads.md#801-ad-request-failure) | Capability not supported. |
| [3300101](../errorcode-se.md#3300101-abnormal-se-service-status) | IllegalStateError, an attempt is made to use an SE session that has been closed. |
| [3300102](../errorcode-se.md#3300102-failed-to-find-the-desired-se) | NoSuchElementError, the AID on the SE is not available or cannot be selected. |
| [3300103](../errorcode-se.md#3300103-failed-to-obtain-the-access-rule) | SecurityError, the calling application cannot be granted access to this AID or the default applet on this session. |
| [3300104](../errorcode-se.md#3300104-se-chip-io-exception) | IOError, there is a communication problem to the reader or the SE. |

**Example**

```TypeScript
import { hilog } from '@kit.PerformanceAnalysisKit';
import { omapi } from '@kit.ConnectivityKit';

let seSession : omapi.Session;
let seChannel : omapi.Channel;
let aidArray : number[] = [0xA0, 0x00, 0x00, 0x00, 0x03, 0x10, 0x10];
let p2 : number = 0x00;

// Initialize seSession before using it.
function secureElementDemo() {
    try {
        // Set the AID of the application selected on the channel.
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

Get access to the basic channel, as defined in [ISO 7816-4] (the one that has number 0). The obtained object
is an instance of the channel class.
Once this channel has been opened by a device application, it is considered as ‘locked’ by this device
application, and other calls to this method SHALL return Null, until the channel is closed.
Some SE plug-ins, such as those handling UICC, may prevent the use of the Basic Channel. In these cases,
a Null value SHALL be returned.
P2 is normally 0x00. The device SHOULD allow any value for P2 and SHALL allow the following values:
0x00, 0x04, 0x08, 0x0C (as defined in [ISO 7816-4]).

**Since:** 10

**System capability:** SystemCapability.Communication.SecureElement

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| aid | number[] | Yes | The AID of the applet to be selected on this channel, as a byte array,or Null if no applet is to be selected. |
| p2 | number | Yes | The P2 parameter of the SELECT APDU executed on this channel. |
| callback | AsyncCallback&lt;Channel&gt; | Yes | The callback to return the Channel object. Null if the SE is unable to provide. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | The parameter check failed. Possible causes:<br> 1. Mandatory parameters are left unspecified.<br> 2. Incorrect parameters types.<br> 3. Parameter verification failed. |
| [801](../../apis-ads-kit/errorcode-ads.md#801-ad-request-failure) | Capability not supported. |
| [3300101](../errorcode-se.md#3300101-abnormal-se-service-status) | IllegalStateError, an attempt is made to use an SE session that has been closed. |
| [3300102](../errorcode-se.md#3300102-failed-to-find-the-desired-se) | NoSuchElementError, the AID on the SE is not available or cannot be selected. |
| [3300103](../errorcode-se.md#3300103-failed-to-obtain-the-access-rule) | SecurityError, the calling application cannot be granted access to this AID or the default applet on this session. |
| [3300104](../errorcode-se.md#3300104-se-chip-io-exception) | IOError, there is a communication problem to the reader or the SE. |

**Example**

```TypeScript
import { hilog } from '@kit.PerformanceAnalysisKit';
import { omapi } from '@kit.ConnectivityKit';

let seSession : omapi.Session;
let seChannel : omapi.Channel;
let aidArray : number[] = [0xA0, 0x00, 0x00, 0x00, 0x03, 0x10, 0x10];
let p2 : number = 0x00;

// Initialize seSession before using it.
function secureElementDemo() {
    try {
        // Set the AID of the application selected on the channel.
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

This method is provided to ease the development of mobile applications and for backward compatibility with
existing applications. This method is equivalent to openLogicalChannel(aid, P2=0x00).

**Since:** 10

**System capability:** SystemCapability.Communication.SecureElement

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| aid | number[] | Yes | The AID of the applet to be selected on this channel, as a byte array. |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;Channel&gt; | An instance of channel if available. Null if the SE is unable to provide.A new logical channel or is unable to retrieve Access Control rules due to the lack of an available logical channel. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | The parameter check failed. Possible causes:<br> 1. Mandatory parameters are left unspecified.<br> 2. Incorrect parameters types.<br> 3. Parameter verification failed. |
| [801](../../apis-ads-kit/errorcode-ads.md#801-ad-request-failure) | Capability not supported. |
| [3300101](../errorcode-se.md#3300101-abnormal-se-service-status) | IllegalStateError, an attempt is made to use an SE session that has been closed. |
| [3300102](../errorcode-se.md#3300102-failed-to-find-the-desired-se) | NoSuchElementError, the AID on the SE is not available or cannot be selected ora logical channel is already open to a non-multi-selectable applet. |
| [3300103](../errorcode-se.md#3300103-failed-to-obtain-the-access-rule) | SecurityError, the calling application cannot be granted access to this AID or the default applet on this session. |
| [3300104](../errorcode-se.md#3300104-se-chip-io-exception) | IOError, there is a communication problem to the reader or the SE. |

**Example**

```TypeScript
import { hilog } from '@kit.PerformanceAnalysisKit';
import { omapi } from '@kit.ConnectivityKit';

let seSession : omapi.Session;
let seChannel : omapi.Channel;
let aidArray : number[] = [0xA0, 0x00, 0x00, 0x00, 0x03, 0x10, 0x10];

// Initialize seSession before using it.
function secureElementDemo() {
    try {
        // Set the AID of the application selected on the channel.
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

This method is provided to ease the development of mobile applications and for backward compatibility with
existing applications. This method is equivalent to openLogicalChannel(aid, P2=0x00).

**Since:** 10

**System capability:** SystemCapability.Communication.SecureElement

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| aid | number[] | Yes | The AID of the applet to be selected on this channel, as a byte array. |
| callback | AsyncCallback&lt;Channel&gt; | Yes | The callback to return the Channel object. Null if the SE is unable to provide.A new logical channel or is unable to retrieve Access Control rules due to the lack of an available logical channel. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | The parameter check failed. Possible causes:<br> 1. Mandatory parameters are left unspecified.<br> 2. Incorrect parameters types.<br> 3. Parameter verification failed. |
| [801](../../apis-ads-kit/errorcode-ads.md#801-ad-request-failure) | Capability not supported. |
| [3300101](../errorcode-se.md#3300101-abnormal-se-service-status) | IllegalStateError, an attempt is made to use an SE session that has been closed. |
| [3300102](../errorcode-se.md#3300102-failed-to-find-the-desired-se) | NoSuchElementError, the AID on the SE is not available or cannot be selected ora logical channel is already open to a non-multi-selectable applet. |
| [3300103](../errorcode-se.md#3300103-failed-to-obtain-the-access-rule) | SecurityError, the calling application cannot be granted access to this AID or the default applet on this session. |
| [3300104](../errorcode-se.md#3300104-se-chip-io-exception) | IOError, there is a communication problem to the reader or the SE. |

**Example**

```TypeScript
import { hilog } from '@kit.PerformanceAnalysisKit';
import { omapi } from '@kit.ConnectivityKit';

let seSession : omapi.Session;
let seChannel : omapi.Channel;
let aidArray : number[] = [0xA0, 0x00, 0x00, 0x00, 0x03, 0x10, 0x10];

// Initialize seSession before using it.
function secureElementDemo() {
    try {
        // Set the AID of the application selected on the channel.
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

Open a logical channel with the SE, selecting the applet represented by the given AID (when the AID is not
Null and the length of the AID is not 0).
If the length of the AID is 0, the method will select the Issuer Security Domain of the SE by sending a SELECT
command with 0 length AID as defined in [GPCS].
If the AID is Null, the method SHALL only send a MANAGE CHANNEL Open and SHALL NOT send a
SELECT command. In this case, the default applet associated to the logical channel will be selected by default.
P2 is normally 0x00. The device SHOULD allow any value for P2 and SHALL allow the following values:
0x00, 0x04, 0x08, 0x0C (as defined in [ISO 7816-4]).

**Since:** 10

**System capability:** SystemCapability.Communication.SecureElement

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| aid | number[] | Yes | The AID of the applet to be selected on this channel, as a byte array. |
| p2 | number | Yes | The P2 parameter of the SELECT APDU executed on this channel. |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;Channel&gt; | An instance of channel if available. Null if the SE is unable to provide.A new logical channel or is unable to retrieve Access Control rules due to the lack of an available logical channel. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | The parameter check failed. Possible causes:<br> 1. Mandatory parameters are left unspecified.<br> 2. Incorrect parameters types.<br> 3. Parameter verification failed. |
| [801](../../apis-ads-kit/errorcode-ads.md#801-ad-request-failure) | Capability not supported. |
| [3300101](../errorcode-se.md#3300101-abnormal-se-service-status) | IllegalStateError, an attempt is made to use an SE session that has been closed. |
| [3300102](../errorcode-se.md#3300102-failed-to-find-the-desired-se) | NoSuchElementError, the AID on the SE is not available or cannot be selected ora logical channel is already open to a non-multi-selectable applet. |
| [3300103](../errorcode-se.md#3300103-failed-to-obtain-the-access-rule) | SecurityError, the calling application cannot be granted access to this AID or the default applet on this session. |
| [3300104](../errorcode-se.md#3300104-se-chip-io-exception) | IOError, there is a communication problem to the reader or the SE. |

**Example**

```TypeScript
import { hilog } from '@kit.PerformanceAnalysisKit';
import { omapi } from '@kit.ConnectivityKit';

let seSession : omapi.Session;
let seChannel : omapi.Channel;
let aidArray : number[] = [0xA0, 0x00, 0x00, 0x00, 0x03, 0x10, 0x10];
let p2 : number = 0x00;

// Initialize seSession before using it.
function secureElementDemo() {
    try {
        // Set the AID of the application selected on the channel.
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

Open a logical channel with the SE, selecting the applet represented by the given AID (when the AID is not
Null and the length of the AID is not 0).
If the length of the AID is 0, the method will select the Issuer Security Domain of the SE by sending a SELECT
command with 0 length AID as defined in [GPCS].
If the AID is Null, the method SHALL only send a MANAGE CHANNEL Open and SHALL NOT send a
SELECT command. In this case, the default applet associated to the logical channel will be selected by default.
P2 is normally 0x00. The device SHOULD allow any value for P2 and SHALL allow the following values:
0x00, 0x04, 0x08, 0x0C (as defined in [ISO 7816-4]).

**Since:** 10

**System capability:** SystemCapability.Communication.SecureElement

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| aid | number[] | Yes | The AID of the applet to be selected on this channel, as a byte array. |
| p2 | number | Yes | The P2 parameter of the SELECT APDU executed on this channel. |
| callback | AsyncCallback&lt;Channel&gt; | Yes | The callback to return the instance of channel. Null if the SE is unable to provide. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | The parameter check failed. Possible causes:<br> 1. Mandatory parameters are left unspecified.<br> 2. Incorrect parameters types.<br> 3. Parameter verification failed. |
| [801](../../apis-ads-kit/errorcode-ads.md#801-ad-request-failure) | Capability not supported. |
| [3300101](../errorcode-se.md#3300101-abnormal-se-service-status) | IllegalStateError, an attempt is made to use an SE session that has been closed. |
| [3300102](../errorcode-se.md#3300102-failed-to-find-the-desired-se) | NoSuchElementError, the AID on the SE is not available or cannot be selected ora logical channel is already open to a non-multi-selectable applet. |
| [3300103](../errorcode-se.md#3300103-failed-to-obtain-the-access-rule) | SecurityError, the calling application cannot be granted access to this AID or the default applet on this session. |
| [3300104](../errorcode-se.md#3300104-se-chip-io-exception) | IOError, there is a communication problem to the reader or the SE. |

**Example**

```TypeScript
import { hilog } from '@kit.PerformanceAnalysisKit';
import { omapi } from '@kit.ConnectivityKit';

let seSession : omapi.Session;
let seChannel : omapi.Channel;
let aidArray : number[] = [0xA0, 0x00, 0x00, 0x00, 0x03, 0x10, 0x10];
let p2 : number = 0x00;

// Initialize seSession before using it.
function secureElementDemo() {
    try {
    // Set the AID of the application selected on the channel.
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

