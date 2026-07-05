# startCasting

## startCasting

```TypeScript
function startCasting(session: SessionToken, device: OutputDeviceInfo, callback: AsyncCallback<void>): void
```

Cast resource to remote device.

**Since:** 10

**Required permissions:** 

 ohos.permission.MANAGE_MEDIA_RESOURCES

**System capability:** SystemCapability.Multimedia.AVSession.AVCast

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| session | SessionToken | Yes | Specifies the sessionId which is to be casted. |
| device | OutputDeviceInfo | Yes | Specifies the device to cast. |
| callback | AsyncCallback&lt;void> | Yes | A callback instance used to return when start casting. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 201 | permission denied |
| 202 | Not System App. |
| 401 | parameter check failed. 1.Mandatory parameters are left unspecified.  2.Incorrect parameter types. 3.Parameter verification failed. |
| 6600101 | Session service exception |
| 6600108 | Device connecting failed |

**Example**

```TypeScript

let myToken: avSession.SessionToken = {
  sessionId: sessionId,
}
let castDevice: avSession.OutputDeviceInfo | undefined = undefined;
avSession.on('deviceAvailable', (device: avSession.OutputDeviceInfo) => {
  castDevice = device;
  console.info(`on deviceAvailable  : ${device} `);
  if (castDevice !== undefined) {
    avSession.startCasting(myToken, castDevice, () => {
        console.info('Succeeded in starting casting.');
    });
  }
});

```

## startCasting

```TypeScript
function startCasting(session: SessionToken, device: OutputDeviceInfo): Promise<void>
```

Cast resource to remote device.

**Since:** 10

**Required permissions:** 

 ohos.permission.MANAGE_MEDIA_RESOURCES

**System capability:** SystemCapability.Multimedia.AVSession.AVCast

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| session | SessionToken | Yes | Specifies the sessionId which is to be casted. |
| device | OutputDeviceInfo | Yes | Specifies the device to cast. |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;void> | Promise for the result |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 201 | permission denied |
| 202 | Not System App. |
| 401 | parameter check failed. 1.Mandatory parameters are left unspecified.  2.Incorrect parameter types. 3.Parameter verification failed. |
| 6600101 | Session service exception |
| 6600108 | Device connecting failed |

**Example**

```TypeScript

let myToken: avSession.SessionToken = {
  sessionId: sessionId,
}
let castDevice: avSession.OutputDeviceInfo | undefined = undefined;
avSession.on('deviceAvailable', (device: avSession.OutputDeviceInfo) => {
  castDevice = device;
  console.info(`on deviceAvailable  : ${device} `);
  if (castDevice !== undefined) {
    avSession.startCasting(myToken, castDevice).then(() => {
      console.info('Succeeded in starting casting.');
    });
  }
});

```

