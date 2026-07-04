# Reader

Reader represents the SE readers supported by this device.

**Since:** 10

**System capability:** SystemCapability.Communication.SecureElement

## Modules to Import

```TypeScript
import { omapi } from '@ohos.secureElement';
```

## closeSessions

```TypeScript
closeSessions(): void
```

Close all the sessions opened on this reader. All the channels opened by all these sessions will be closed.

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
        // Release the SE service resources.
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

**Since:** 10

**System capability:** SystemCapability.Communication.SecureElement

**Return value:**

| Type | Description |
| --- | --- |
| string | The reader name, as a String. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [801](../../apis-ads-kit/errorcode-ads.md#801-ad-request-failure) | Capability not supported. |

**Example**

```TypeScript
import { hilog } from '@kit.PerformanceAnalysisKit';
import { omapi } from '@kit.ConnectivityKit';

let seReaders : omapi.Reader[];

// Initialize seReaders before using it.

try {
    let reader = seReaders[0]; // Set the expected reader (eSE, SIM, or SIM2).
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

**Since:** 10

**System capability:** SystemCapability.Communication.SecureElement

**Return value:**

| Type | Description |
| --- | --- |
| boolean | True if the SE is present, false otherwise. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [801](../../apis-ads-kit/errorcode-ads.md#801-ad-request-failure) | Capability not supported. |
| [3300101](../errorcode-se.md#3300101-abnormal-se-service-status) | IllegalStateError, service state exception. |

**Example**

```TypeScript
import { hilog } from '@kit.PerformanceAnalysisKit';
import { omapi } from '@kit.ConnectivityKit';

let seReaders : omapi.Reader[];

// Initialize seReaders before using it.

try {
    let reader = seReaders[0]; // Set the expected reader (eSE, SIM, or SIM2).
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

**Since:** 10

**System capability:** SystemCapability.Communication.SecureElement

**Return value:**

| Type | Description |
| --- | --- |
| Session | A Session object to be used to create channels. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [801](../../apis-ads-kit/errorcode-ads.md#801-ad-request-failure) | Capability not supported. |
| [3300101](../errorcode-se.md#3300101-abnormal-se-service-status) | IllegalStateError, service state exception. |
| [3300104](../errorcode-se.md#3300104-se-chip-io-exception) | IOError, there is a communication problem to the reader or the SE. |

**Example**

```TypeScript
import { hilog } from '@kit.PerformanceAnalysisKit';
import { omapi } from '@kit.ConnectivityKit';

let seReaders : omapi.Reader[];
let seSession : omapi.Session;

// Initialize seReaders before using it.
function secureElementDemo() {
    try {
        let reader = seReaders[0]; // Set the expected reader (eSE, SIM, or SIM2).
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

