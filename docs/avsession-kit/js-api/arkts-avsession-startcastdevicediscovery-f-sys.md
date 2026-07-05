# startCastDeviceDiscovery

## startCastDeviceDiscovery

```TypeScript
function startCastDeviceDiscovery(callback: AsyncCallback<void>): void
```

Start device discovery.

**Since:** 10

**System capability:** SystemCapability.Multimedia.AVSession.AVCast

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | AsyncCallback&lt;void> | Yes | a callback function |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 202 | Not System App. |

**Example**

```TypeScript

avSession.startCastDeviceDiscovery(() => {
    console.info('Succeeded in starting cast device discovery.');
});

```

## startCastDeviceDiscovery

```TypeScript
function startCastDeviceDiscovery(filter: int, callback: AsyncCallback<void>): void
```

Start device discovery.

**Since:** 10

**System capability:** SystemCapability.Multimedia.AVSession.AVCast

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| filter | int | Yes | device filter when discovering, can be an union of {@link ProtocolType} |
| callback | AsyncCallback&lt;void> | Yes | a callback function |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 202 | Not System App. |
| 401 | parameter check failed. 1.Mandatory parameters are left unspecified.  2.Parameter verification failed. |

**Example**

```TypeScript

let filter = 2;
avSession.startCastDeviceDiscovery(filter, () => {
    console.info('Succeeded in starting cast device discovery.');
});

```

## startCastDeviceDiscovery

```TypeScript
function startCastDeviceDiscovery(filter?: int, drmSchemes?: Array<string>): Promise<void>
```

Start device discovery.

**Since:** 10

**System capability:** SystemCapability.Multimedia.AVSession.AVCast

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| filter | int | No | device filter when discovering, can be an union of {@link ProtocolType} [since 10 - 11] |
| drmSchemes | Array&lt;string> | No |  |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;void> | Promise for the result |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 401 | parameter check failed. 1.Mandatory parameters are left unspecified.  2.Incorrect parameter types. 3.Parameter verification failed. |
| 202 | Not System App. [since 12] |

**Example**

```TypeScript

let filter = 2;
let drmSchemes = ['3d5e6d35-9b9a-41e8-b843-dd3c6e72c42c'];
avSession.startCastDeviceDiscovery(filter, drmSchemes).then(() => {
  console.info('Succeeded in starting cast device discovery.');
});

```

