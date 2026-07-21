# Channel

Channel represents an [ISO 7816-4] channel opened to a SE. It can be either a logical channel or the basic channel.

**Since:** 10

<!--Device-omapi-export interface Channel--><!--Device-omapi-export interface Channel-End-->

**System capability:** SystemCapability.Communication.SecureElement

## Modules to Import

```TypeScript
import { omapi } from '@kit.ConnectivityKit';
```

<a id="close"></a>
## close

```TypeScript
close(): void
```

Closes this channel to the SE.If the method is called when the channel is already closed, this method SHALL be ignored.

**Since:** 10

<!--Device-Channel-close(): void--><!--Device-Channel-close(): void-End-->

**System capability:** SystemCapability.Communication.SecureElement

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [801](../../apis-ads-kit/errorcode-ads.md#801-ad-request-failure) | Capability not supported. |

**Example**

```TypeScript
import { hilog } from '@kit.PerformanceAnalysisKit';
import { omapi } from '@kit.ConnectivityKit';

let seChannel : omapi.Channel;

// Initialize seChannel before using it.
try {
    seChannel.close();
} catch (exception) {
    hilog.error(0x0000, 'testTag', 'close exception %{public}s', JSON.stringify(exception));
}

```

<a id="getselectresponse"></a>
## getSelectResponse

```TypeScript
getSelectResponse(): number[]
```

Returns the data as received from the application select command, including the status word received at applet selection.

**Since:** 10

<!--Device-Channel-getSelectResponse(): number[]--><!--Device-Channel-getSelectResponse(): number[]-End-->

**System capability:** SystemCapability.Communication.SecureElement

**Return value:**

| Type | Description |
| --- | --- |
| number[] | The data as returned by the application select command inclusive of the status word. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [801](../../apis-ads-kit/errorcode-ads.md#801-ad-request-failure) | Capability not supported. |

**Example**

```TypeScript
import { hilog } from '@kit.PerformanceAnalysisKit';
import { omapi } from '@kit.ConnectivityKit';

let seChannel : omapi.Channel;

// Initialize seChannel before using it.
try {
    let response = seChannel.getSelectResponse();
    hilog.info(0x0000, 'testTag', 'response = %{public}s', JSON.stringify(response));
} catch (exception) {
    hilog.error(0x0000, 'testTag', 'getSelectResponse exception %{public}s', JSON.stringify(exception));
}

```

<a id="getsession"></a>
## getSession

```TypeScript
getSession(): Session
```

Get the session that has opened this channel.

**Since:** 10

<!--Device-Channel-getSession(): Session--><!--Device-Channel-getSession(): Session-End-->

**System capability:** SystemCapability.Communication.SecureElement

**Return value:**

| Type | Description |
| --- | --- |
| [Session](../../apis-camera-kit/arkts-apis/arkts-camera-camera-session-i.md) | The Session object this channel is bound to. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [801](../../apis-ads-kit/errorcode-ads.md#801-ad-request-failure) | Capability not supported. |

**Example**

```TypeScript
import { hilog } from '@kit.PerformanceAnalysisKit';
import { omapi } from '@kit.ConnectivityKit';

let seSession : omapi.Session;
let seChannel : omapi.Channel;

// Initialize seChannel before using it.

try {
    seSession = seChannel.getSession();
} catch (exception) {
    hilog.error(0x0000, 'testTag', 'getSession exception %{public}s', JSON.stringify(exception));
}

```

<a id="isbasicchannel"></a>
## isBasicChannel

```TypeScript
isBasicChannel(): boolean
```

Checks whether this channel is the basic channel.

**Since:** 10

<!--Device-Channel-isBasicChannel(): boolean--><!--Device-Channel-isBasicChannel(): boolean-End-->

**System capability:** SystemCapability.Communication.SecureElement

**Return value:**

| Type | Description |
| --- | --- |
| boolean | True if this channel is a basic channel, false otherwise. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [801](../../apis-ads-kit/errorcode-ads.md#801-ad-request-failure) | Capability not supported. |

**Example**

```TypeScript
import { hilog } from '@kit.PerformanceAnalysisKit';
import { omapi } from '@kit.ConnectivityKit';

let seChannel : omapi.Channel;

// Initialize seChannel before using it.
try {
    let isBasic = seChannel.isBasicChannel();
    hilog.info(0x0000, 'testTag', 'isBasic = %{public}s', JSON.stringify(isBasic));
} catch (exception) {
    hilog.error(0x0000, 'testTag', 'isBasicChannel exception %{public}s', JSON.stringify(exception));
}

```

<a id="isclosed"></a>
## isClosed

```TypeScript
isClosed(): boolean
```

Checks if this channel is closed.

**Since:** 10

<!--Device-Channel-isClosed(): boolean--><!--Device-Channel-isClosed(): boolean-End-->

**System capability:** SystemCapability.Communication.SecureElement

**Return value:**

| Type | Description |
| --- | --- |
| boolean | True if the channel is closed, false otherwise. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [801](../../apis-ads-kit/errorcode-ads.md#801-ad-request-failure) | Capability not supported. |

**Example**

```TypeScript
import { hilog } from '@kit.PerformanceAnalysisKit';
import { omapi } from '@kit.ConnectivityKit';

let seChannel : omapi.Channel;

// Initialize seChannel before using it.
try {
    let isClosed = seChannel.isClosed();
    hilog.info(0x0000, 'testTag', 'isClosed = %{public}s', JSON.stringify(isClosed));
} catch (exception) {
    hilog.error(0x0000, 'testTag', 'isClosed exception %{public}s', JSON.stringify(exception));
}

```

<a id="transmit"></a>
## transmit

```TypeScript
transmit(command: number[]): Promise<number[]>
```

Transmit an APDU command (as per ISO/IEC 7816) to the SE.

**Since:** 10

<!--Device-Channel-transmit(command: number[]): Promise<number[]>--><!--Device-Channel-transmit(command: number[]): Promise<number[]>-End-->

**System capability:** SystemCapability.Communication.SecureElement

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| command | number[] | Yes | The APDU command to be transmitted, as a byte array. |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;number[]&gt; | The response received, as a byte array. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | The parameter check failed. Possible causes:<br> 1. Mandatory parameters are left unspecified.<br> 2. Incorrect parameters types.<br> 3. Parameter verification failed. |
| [801](../../apis-ads-kit/errorcode-ads.md#801-ad-request-failure) | Capability not supported. |
| [3300101](../errorcode-se.md#3300101-abnormal-se-service-status) | IllegalStateError, an attempt is made to use an SE session or channel that has been closed. |
| [3300103](../errorcode-se.md#3300103-failed-to-obtain-the-access-rule) | SecurityError, the command is filtered by the security policy. |
| [3300104](../errorcode-se.md#3300104-se-chip-io-exception) | IOError, there is a communication problem to the reader or the SE. |

**Example**

```TypeScript
import { hilog } from '@kit.PerformanceAnalysisKit';
import { omapi } from '@kit.ConnectivityKit';

let seChannel : omapi.Channel;

// Initialize seChannel before using it.
let cmdData = [0x01, 0x02, 0x03, 0x04]; // Set command data correctly.
try {
    seChannel.transmit(cmdData).then((response) => {
        // If the chip captures an exception, an all zero value is returned for response.
        hilog.info(0x0000, 'testTag', 'transmit response = %{public}s.', JSON.stringify(response));
    }).catch((error : BusinessError) => {
        hilog.error(0x0000, 'testTag', 'transmit error = %{public}s.', JSON.stringify(error));
    });
} catch (exception) {
    hilog.error(0x0000, 'testTag', 'transmit exception = %{public}s.', JSON.stringify(exception));
}

```

<a id="transmit-1"></a>
## transmit

```TypeScript
transmit(command: number[], callback: AsyncCallback<number[]>): void
```

Transmit an APDU command (as per ISO/IEC 7816) to the SE.

**Since:** 10

<!--Device-Channel-transmit(command: number[], callback: AsyncCallback<number[]>): void--><!--Device-Channel-transmit(command: number[], callback: AsyncCallback<number[]>): void-End-->

**System capability:** SystemCapability.Communication.SecureElement

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| command | number[] | Yes | The APDU command to be transmitted, as a byte array. |
| callback | [AsyncCallback](../../apis-basic-service-kit/arkts-apis/arkts-basicservices-base-asynccallback-i.md)&lt;number[]&gt; | Yes | The callback to return the response received, as a byte array. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | The parameter check failed. Possible causes:<br> 1. Mandatory parameters are left unspecified.<br> 2. Incorrect parameters types.<br> 3. Parameter verification failed. |
| [801](../../apis-ads-kit/errorcode-ads.md#801-ad-request-failure) | Capability not supported. |
| [3300101](../errorcode-se.md#3300101-abnormal-se-service-status) | IllegalStateError, an attempt is made to use an SE session or channel that has been closed. |
| [3300103](../errorcode-se.md#3300103-failed-to-obtain-the-access-rule) | SecurityError, the command is filtered by the security policy. |
| [3300104](../errorcode-se.md#3300104-se-chip-io-exception) | IOError, there is a communication problem to the reader or the SE. |

**Example**

```TypeScript
import { hilog } from '@kit.PerformanceAnalysisKit';
import { omapi } from '@kit.ConnectivityKit';

let seChannel : omapi.Channel;

// Initialize seChannel before using it.
let cmdData = [0x01, 0x02, 0x03, 0x04]; // Set command data correctly.
try {
    seChannel.transmit(cmdData, (error, response) => {
    if (error) {
        hilog.error(0x0000, 'testTag', 'transmit error %{public}s', JSON.stringify(error));
    } else {
        // If the chip captures an exception, an all zero value is returned for response.
        hilog.info(0x0000, 'testTag', 'transmit response = %{public}s.', JSON.stringify(response));
    }
    });
} catch (exception) {
    hilog.error(0x0000, 'testTag', 'transmit exception %{public}s', JSON.stringify(exception));
}

```

