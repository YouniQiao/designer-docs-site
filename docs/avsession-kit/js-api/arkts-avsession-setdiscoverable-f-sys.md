# setDiscoverable

## setDiscoverable

```TypeScript
function setDiscoverable(enable: boolean, callback: AsyncCallback<void>): void
```

Enable or disable device to be discoverable, used at sink side.

**Since:** 10

**System capability:** SystemCapability.Multimedia.AVSession.AVCast

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| enable | boolean | Yes | true: can be discoverable, false: cannot be discoverable. |
| callback | AsyncCallback&lt;void> | Yes | a callback function |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 202 | Not System App. |
| 401 | parameter check failed. 1.Mandatory parameters are left unspecified.  2.Parameter verification failed. |

**Example**

```TypeScript

avSession.setDiscoverable(true, () => {
    console.info('Succeeded in setting discoverable.');
});

```

## setDiscoverable

```TypeScript
function setDiscoverable(enable: boolean): Promise<void>
```

Enable or disable device to be discoverable, used at sink side.

**Since:** 10

**System capability:** SystemCapability.Multimedia.AVSession.AVCast

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| enable | boolean | Yes | true: can be discoverable, false: cannot be discoverable. |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;void> | Promise for the result |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 202 | Not System App. |
| 401 | parameter check failed. 1.Mandatory parameters are left unspecified.  2.Parameter verification failed. |

**Example**

```TypeScript

avSession.setDiscoverable(true).then(() => {
  console.info('Succeeded in setting discoverable.');
});

```

