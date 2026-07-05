# createLocalParticleAbility

## createLocalParticleAbility

```TypeScript
export declare function createLocalParticleAbility(name?: string): any
```

Get the java interface instance. The java instance needs to register, otherwise it cannot be obtained. After obtaining the instance, you can call the function with the same name on the Java side.

**起始版本：** 5

**废弃版本：** 8

**模型约束：** 此接口仅可在FA模型下使用。

**系统能力：** SystemCapability.ArkUI.ArkUI.Lite

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| name | string | 否 |  |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| any | A promise object is returned. The resolve callback is the object of PA.  The reject callback returns the object containing code and error data. |

