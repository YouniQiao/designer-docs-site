# createImagePacker

## createImagePacker

```TypeScript
function createImagePacker(): ImagePacker
```

创建ImagePacker实例。 由于图片占用内存较大，所以当ImagePacker实例使用完成后，应主动调用[release]image.ImagePacker.release(callback: AsyncCallback<void>)方法及时 释放内存。释放时应确保该实例的所有异步方法均执行完成，且后续不再使用该实例。

**起始版本：** 6

**原子化服务API：** 从API version 11开始，该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.Multimedia.Image.ImagePacker

**返回值：**

| 类型 | 说明 |
| --- | --- |
| ImagePacker | 返回ImagePacker实例。 |

**示例：**

```TypeScript
async function CreateImagePacker() {
  const imagePackerObj: image.ImagePacker = image.createImagePacker();
}

```

