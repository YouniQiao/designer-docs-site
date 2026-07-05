# stopDeviceLogging

## stopDeviceLogging

```TypeScript
function stopDeviceLogging(): Promise<void>
```

Stop the current device written even the discovery is ongoing.

**Since:** 13

**System capability:** SystemCapability.Multimedia.AVSession.AVCast

**System API:** This is a system API.

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;void> | Promise for the result |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 202 | Not System App. |
| 6600101 | Session service exception. |
| 6600102 | The session does not exist. |

**Example**

```TypeScript
avSession.stopDeviceLogging().then(() => {
  console.info('Succeeded in stopping casting.');
});

```

