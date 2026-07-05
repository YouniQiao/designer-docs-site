# init

## init

```TypeScript
function init(keyAlias: string, options: HuksOptions, callback: AsyncCallback<HuksHandle>): void
```

init操作密钥接口。使用callback异步回调。 huks.init、huks.update、huks.finish为三段式接口，需要一起使用。 > **说明：** > > 从API version 8开始支持，从API version 9开始废弃，建议使用 > [huks.initSession<sup>9+</sup>]huks.initSession(keyAlias: string, options: HuksOptions)替代。

**Since:** 8

**Deprecated since:** 9

**Substitute:** huks.initSession(keyAlias:

**System capability:** SystemCapability.Security.Huks.Extension

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| keyAlias | string | Yes | Init操作密钥的别名。 |
| options | HuksOptions | Yes | Init操作的参数集合。 |
| callback | AsyncCallback&lt;HuksHandle> | Yes | 回调函数。当密钥操作init成功时，err为undefined，data为获取到的HuksHandle；否则为错误对象。  HuksHandle的handle返回init生成的handle。 |

## init

```TypeScript
function init(keyAlias: string, options: HuksOptions): Promise<HuksHandle>
```

init操作密钥接口。使用Promise异步回调。 huks.init、huks.update、huks.finish为三段式接口，需要一起使用。 > **说明：** > > 从API version 8开始支持，从API version 9开始废弃，建议使用 > [huks.initSession<sup>9+</sup>]huks.initSession(keyAlias: string, options: HuksOptions)替代。

**Since:** 8

**Deprecated since:** 9

**Substitute:** huks.initSession(keyAlias:

**System capability:** SystemCapability.Security.Huks.Extension

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| keyAlias | string | Yes | Init操作密钥的别名。 |
| options | HuksOptions | Yes | Init参数集合。 |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;HuksHandle> | Promise对象，返回HuksResult。HuksHandle的handle返回init生成的handle。 |

