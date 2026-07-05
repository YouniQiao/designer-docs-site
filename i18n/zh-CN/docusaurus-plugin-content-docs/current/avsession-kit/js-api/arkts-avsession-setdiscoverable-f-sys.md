# setDiscoverable

## setDiscoverable

```TypeScript
function setDiscoverable(enable: boolean, callback: AsyncCallback<void>): void
```

Enable or disable device to be discoverable, used at sink side.

**起始版本：** 10

**系统能力：** SystemCapability.Multimedia.AVSession.AVCast

**系统接口：** 此接口为系统接口。

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| enable | boolean | 是 | true: can be discoverable, false: cannot be discoverable. |
| callback | AsyncCallback&lt;void> | 是 | a callback function |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 202 | Not System App. |
| 401 | parameter check failed. 1.Mandatory parameters are left unspecified.  2.Parameter verification failed. |

**示例：**

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

**起始版本：** 10

**系统能力：** SystemCapability.Multimedia.AVSession.AVCast

**系统接口：** 此接口为系统接口。

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| enable | boolean | 是 | true: can be discoverable, false: cannot be discoverable. |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Promise&lt;void> | Promise for the result |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 202 | Not System App. |
| 401 | parameter check failed. 1.Mandatory parameters are left unspecified.  2.Parameter verification failed. |

**示例：**

```TypeScript

avSession.setDiscoverable(true).then(() => {
  console.info('Succeeded in setting discoverable.');
});

```

