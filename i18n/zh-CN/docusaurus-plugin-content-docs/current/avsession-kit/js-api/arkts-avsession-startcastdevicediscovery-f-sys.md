# startCastDeviceDiscovery

## startCastDeviceDiscovery

```TypeScript
function startCastDeviceDiscovery(callback: AsyncCallback<void>): void
```

Start device discovery.

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

avSession.startCastDeviceDiscovery(() => {
    console.info('Succeeded in starting cast device discovery.');
});

```

## startCastDeviceDiscovery

```TypeScript
function startCastDeviceDiscovery(filter: int, callback: AsyncCallback<void>): void
```

Start device discovery.

**起始版本：** 10

**系统能力：** SystemCapability.Multimedia.AVSession.AVCast

**系统接口：** 此接口为系统接口。

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| filter | int | 是 | device filter when discovering, can be an union of {@link ProtocolType} |
| callback | AsyncCallback&lt;void> | 是 | a callback function |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 202 | Not System App. |
| 401 | parameter check failed. 1.Mandatory parameters are left unspecified.  2.Parameter verification failed. |

**示例：**

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

**起始版本：** 10

**系统能力：** SystemCapability.Multimedia.AVSession.AVCast

**系统接口：** 此接口为系统接口。

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| filter | int | 否 | device filter when discovering, can be an union of {@link ProtocolType} [since 10 - 11] |
| drmSchemes | Array&lt;string> | 否 |  |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Promise&lt;void> | Promise for the result |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 401 | parameter check failed. 1.Mandatory parameters are left unspecified.  2.Incorrect parameter types. 3.Parameter verification failed. |
| 202 | Not System App. [since 12] |

**示例：**

```TypeScript

let filter = 2;
let drmSchemes = ['3d5e6d35-9b9a-41e8-b843-dd3c6e72c42c'];
avSession.startCastDeviceDiscovery(filter, drmSchemes).then(() => {
  console.info('Succeeded in starting cast device discovery.');
});

```

