# deleteScanner

## deleteScanner

```TypeScript
function deleteScanner(uniqueId: string, discoveryMode: ScannerDiscoveryMode): Promise<void>
```

删除扫描仪（系统API）。使用Promise异步回调。

**起始版本：** 20

**需要权限：** 

 ohos.permission.MANAGE_PRINT_JOB

**系统能力：** SystemCapability.Print.PrintFramework

**系统接口：** 此接口为系统接口。

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| uniqueId | string | 是 | 扫描仪的唯一ID。 |
| discoveryMode | ScannerDiscoveryMode | 是 | 发现模式。 |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Promise&lt;void> | Promise对象，无返回结果。 |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 201 | Permission denied. |
| 202 | Not system application. |

