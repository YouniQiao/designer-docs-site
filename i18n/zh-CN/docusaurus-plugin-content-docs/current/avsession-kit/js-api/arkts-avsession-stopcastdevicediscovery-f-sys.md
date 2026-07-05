# stopCastDeviceDiscovery

## stopCastDeviceDiscovery

```TypeScript
function stopCastDeviceDiscovery(callback: AsyncCallback<void>): void
```

Stop device discovery.

**起始版本：** 10

**系统能力：** SystemCapability.Multimedia.AVSession.AVCast

**系统接口：** 此接口为系统接口。

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| callback | AsyncCallback&lt;void> | 是 | a callback function |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 202 | Not System App. |

**示例：**

```TypeScript

avSession.stopCastDeviceDiscovery(() => {
    console.info('Succeeded in stopping cast device discovery.');
});

```

## stopCastDeviceDiscovery

```TypeScript
function stopCastDeviceDiscovery(): Promise<void>
```

Stop device discovery.

**起始版本：** 10

**系统能力：** SystemCapability.Multimedia.AVSession.AVCast

**系统接口：** 此接口为系统接口。

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Promise&lt;void> | Promise for the result |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 202 | Not System App. |

**示例：**

```TypeScript

avSession.stopCastDeviceDiscovery().then(() => {
  console.info('Succeeded in stopping cast device discovery.');
});

```

