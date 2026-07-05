# stopDeviceLogging

## stopDeviceLogging

```TypeScript
function stopDeviceLogging(): Promise<void>
```

Stop the current device written even the discovery is ongoing.

**起始版本：** 13

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
| 6600101 | Session service exception. |
| 6600102 | The session does not exist. |

**示例：**

```TypeScript
avSession.stopDeviceLogging().then(() => {
  console.info('Succeeded in stopping casting.');
});

```

