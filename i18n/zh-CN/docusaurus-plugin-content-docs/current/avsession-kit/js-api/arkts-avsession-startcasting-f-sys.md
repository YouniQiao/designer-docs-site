# startCasting

## startCasting

```TypeScript
function startCasting(session: SessionToken, device: OutputDeviceInfo, callback: AsyncCallback<void>): void
```

Cast resource to remote device.

**起始版本：** 10

**需要权限：** 

 ohos.permission.MANAGE_MEDIA_RESOURCES

**系统能力：** SystemCapability.Multimedia.AVSession.AVCast

**系统接口：** 此接口为系统接口。

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| session | SessionToken | 是 | Specifies the sessionId which is to be casted. |
| device | OutputDeviceInfo | 是 | Specifies the device to cast. |
| callback | AsyncCallback&lt;void> | 是 | A callback instance used to return when start casting. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 201 | permission denied |
| 202 | Not System App. |
| 401 | parameter check failed. 1.Mandatory parameters are left unspecified.  2.Incorrect parameter types. 3.Parameter verification failed. |
| 6600101 | Session service exception |
| 6600108 | Device connecting failed |

**示例：**

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

**起始版本：** 10

**需要权限：** 

 ohos.permission.MANAGE_MEDIA_RESOURCES

**系统能力：** SystemCapability.Multimedia.AVSession.AVCast

**系统接口：** 此接口为系统接口。

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| session | SessionToken | 是 | Specifies the sessionId which is to be casted. |
| device | OutputDeviceInfo | 是 | Specifies the device to cast. |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Promise&lt;void> | Promise for the result |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 201 | permission denied |
| 202 | Not System App. |
| 401 | parameter check failed. 1.Mandatory parameters are left unspecified.  2.Incorrect parameter types. 3.Parameter verification failed. |
| 6600101 | Session service exception |
| 6600108 | Device connecting failed |

**示例：**

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

