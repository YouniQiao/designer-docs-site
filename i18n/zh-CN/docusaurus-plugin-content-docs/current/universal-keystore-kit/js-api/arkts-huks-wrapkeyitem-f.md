# wrapKeyItem

## wrapKeyItem

```TypeScript
function wrapKeyItem(keyAlias: string, params: HuksOptions): Promise<HuksReturnResult>
```

加密导出密钥。使用Promise异步回调。 <!--Del-->该功能暂不支持。<!--DelEnd-->

**起始版本：** 20

**原子化服务API：** 从API version 26.0.0开始，该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.Security.Huks.Core

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| keyAlias | string | 是 | 密钥别名，应与所用密钥生成时使用的别名相同。 |
| params | HuksOptions | 是 | 用于指定导出密钥时的加密类型。 |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Promise&lt;HuksReturnResult> | Promise对象，返回调用接口的结果。当调用成功时，HuksReturnResult的outData成员为导出的密钥密文。 |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 801 | api is not supported |
| 12000004 | operating file failed |
| 12000005 | IPC communication failed |
| 12000011 | queried entity does not exist |
| 12000012 | Device environment or input parameter abnormal |
| 12000014 | memory is insufficient |
| 12000018 | the input parameter is invalid |
| 12000026 | the secure element is not available [since 26.0.0] |

