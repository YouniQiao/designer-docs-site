# setOutputTypeByDomainID

## setOutputTypeByDomainID

```TypeScript
function setOutputTypeByDomainID(type: OutputType, domainIDs: Array<int>, isExclude: boolean): OutputType
```

Sets the output type for hilog for the domainID list.

**起始版本：** 26.0.0

**原子化服务API：** 该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.HiviewDFX.HiLog

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| type | OutputType | 是 | output type for hilog. |
| domainIDs | Array&lt;int> | 是 | domainID list, if isExclude is true, the output type for the domainID  list is set to DEFAULT, and the output type for the remaining domainIDs is set to the currently  specified output type; if isExclude is false, the output type for the domainID list is set to the  currently specified output type, and the output type for the remaining domainIDs is set to DEFAULT |
| isExclude | boolean | 是 | determine whether the domainIDs take effect for the currently specified output type. |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| OutputType | previous value of output type. |

**示例：**

```TypeScript
hilog.setOutputTypeByDomainID(hilog.OutputType.SHARE_SANDBOX_ONLY, [0x0001, 0x0002, 0x0003], false);
hilog.info(0x0001, "testTag", 'sandbox log to share sandbox only');
hilog.info(0x0002, "testTag", 'sandbox log to share sandbox only');
hilog.info(0x0003, "testTag", 'sandbox log to share sandbox only');
hilog.info(0x0004, "testTag", 'sandbox log to share sandbox only');
hilog.flush();


05-15 16:57:04.238 40518 40518 I A00001/testTag: sandbox log to share sandbox only
05-15 16:57:04.238 40518 40518 I A00002/testTag: sandbox log to share sandbox only
05-15 16:57:04.238 40518 40518 I A00003/testTag: sandbox log to share sandbox only

```

