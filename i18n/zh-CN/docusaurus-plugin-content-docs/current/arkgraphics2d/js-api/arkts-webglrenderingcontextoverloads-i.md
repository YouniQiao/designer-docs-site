# WebGLRenderingContextOverloads

WebGL 1.0

**起始版本：** 7

**系统能力：** SystemCapability.Graphic.Graphic2D.WebGL

## bufferData

```TypeScript
bufferData(target: GLenum, size: GLsizeiptr, usage: GLenum): void
```

Sets buffer data

**起始版本：** 7

**模型约束：** 此接口仅可在FA模型下使用。

**系统能力：** SystemCapability.Graphic.Graphic2D.WebGL

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| target | GLenum | 是 | Buffer target |
| size | GLsizeiptr | 是 | Buffer size |
| usage | GLenum | 是 | Buffer usage |

## bufferData

```TypeScript
bufferData(target: GLenum, data: BufferSource | null, usage: GLenum): void
```

Sets buffer data from BufferSource

**起始版本：** 7

**模型约束：** 此接口仅可在FA模型下使用。

**系统能力：** SystemCapability.Graphic.Graphic2D.WebGL

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| target | GLenum | 是 | Buffer target |
| data | BufferSource \| null | 是 | Buffer data |
| usage | GLenum | 是 | Buffer usage |

## bufferSubData

```TypeScript
bufferSubData(target: GLenum, offset: GLintptr, data: BufferSource): void
```

Sets buffer sub data

**起始版本：** 7

**模型约束：** 此接口仅可在FA模型下使用。

**系统能力：** SystemCapability.Graphic.Graphic2D.WebGL

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| target | GLenum | 是 | Buffer target |
| offset | GLintptr | 是 | Offset |
| data | BufferSource | 是 | Data to set |

## compressedTexImage2D

```TypeScript
compressedTexImage2D(
      target: GLenum,
      level: GLint,
      internalformat: GLenum,
      width: GLsizei,
      height: GLsizei,
      border: GLint,
      data: ArrayBufferView,
    ): void
```

Compressed texture image 2D

**起始版本：** 7

**模型约束：** 此接口仅可在FA模型下使用。

**系统能力：** SystemCapability.Graphic.Graphic2D.WebGL

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| target | GLenum | 是 | Texture target |
| level | GLint | 是 | Mipmap level |
| internalformat | GLenum | 是 | Internal format |
| width | GLsizei | 是 | Width |
| height | GLsizei | 是 | Height |
| border | GLint | 是 | Border |
| data | ArrayBufferView | 是 | Compressed image data |

## compressedTexSubImage2D

```TypeScript
compressedTexSubImage2D(
      target: GLenum,
      level: GLint,
      xoffset: GLint,
      yoffset: GLint,
      width: GLsizei,
      height: GLsizei,
      format: GLenum,
      data: ArrayBufferView,
    ): void
```

Compressed texture sub image 2D

**起始版本：** 7

**模型约束：** 此接口仅可在FA模型下使用。

**系统能力：** SystemCapability.Graphic.Graphic2D.WebGL

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| target | GLenum | 是 | Texture target |
| level | GLint | 是 | Mipmap level |
| xoffset | GLint | 是 | X offset |
| yoffset | GLint | 是 | Y offset |
| width | GLsizei | 是 | Width |
| height | GLsizei | 是 | Height |
| format | GLenum | 是 | Format |
| data | ArrayBufferView | 是 | Compressed image data |

## readPixels

```TypeScript
readPixels(
      x: GLint,
      y: GLint,
      width: GLsizei,
      height: GLsizei,
      format: GLenum,
      type: GLenum,
      pixels: ArrayBufferView | null,
    ): void
```

Reads pixels from the framebuffer

**起始版本：** 7

**模型约束：** 此接口仅可在FA模型下使用。

**系统能力：** SystemCapability.Graphic.Graphic2D.WebGL

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| x | GLint | 是 | X coordinate |
| y | GLint | 是 | Y coordinate |
| width | GLsizei | 是 | Width |
| height | GLsizei | 是 | Height |
| format | GLenum | 是 | Pixel format |
| type | GLenum | 是 | Pixel type |
| pixels | ArrayBufferView \| null | 是 | Pixel buffer |

## texImage2D

```TypeScript
texImage2D(
      target: GLenum,
      level: GLint,
      internalformat: GLint,
      width: GLsizei,
      height: GLsizei,
      border: GLint,
      format: GLenum,
      type: GLenum,
      pixels: ArrayBufferView | null,
    ): void
```

Sets texture image 2D from pixels

**起始版本：** 7

**模型约束：** 此接口仅可在FA模型下使用。

**系统能力：** SystemCapability.Graphic.Graphic2D.WebGL

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| target | GLenum | 是 | Texture target |
| level | GLint | 是 | Mipmap level |
| internalformat | GLint | 是 | Internal format |
| width | GLsizei | 是 | Width |
| height | GLsizei | 是 | Height |
| border | GLint | 是 | Border |
| format | GLenum | 是 | Pixel format |
| type | GLenum | 是 | Pixel type |
| pixels | ArrayBufferView \| null | 是 | Pixel data |

## texImage2D

```TypeScript
texImage2D(
      target: GLenum,
      level: GLint,
      internalformat: GLint,
      format: GLenum,
      type: GLenum,
      source: TexImageSource,
    ): void
```

Sets texture image 2D from TexImageSource

**起始版本：** 7

**模型约束：** 此接口仅可在FA模型下使用。

**系统能力：** SystemCapability.Graphic.Graphic2D.WebGL

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| target | GLenum | 是 | Texture target |
| level | GLint | 是 | Mipmap level |
| internalformat | GLint | 是 | Internal format |
| format | GLenum | 是 | Pixel format |
| type | GLenum | 是 | Pixel type |
| source | TexImageSource | 是 | Image source |

## texSubImage2D

```TypeScript
texSubImage2D(
      target: GLenum,
      level: GLint,
      xoffset: GLint,
      yoffset: GLint,
      width: GLsizei,
      height: GLsizei,
      format: GLenum,
      type: GLenum,
      pixels: ArrayBufferView | null,
    ): void
```

Sets texture sub image 2D from pixels

**起始版本：** 7

**模型约束：** 此接口仅可在FA模型下使用。

**系统能力：** SystemCapability.Graphic.Graphic2D.WebGL

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| target | GLenum | 是 | Texture target |
| level | GLint | 是 | Mipmap level |
| xoffset | GLint | 是 | X offset |
| yoffset | GLint | 是 | Y offset |
| width | GLsizei | 是 | Width |
| height | GLsizei | 是 | Height |
| format | GLenum | 是 | Pixel format |
| type | GLenum | 是 | Pixel type |
| pixels | ArrayBufferView \| null | 是 | Pixel data |

## texSubImage2D

```TypeScript
texSubImage2D(
      target: GLenum,
      level: GLint,
      xoffset: GLint,
      yoffset: GLint,
      format: GLenum,
      type: GLenum,
      source: TexImageSource,
    ): void
```

Sets texture sub image 2D from TexImageSource

**起始版本：** 7

**模型约束：** 此接口仅可在FA模型下使用。

**系统能力：** SystemCapability.Graphic.Graphic2D.WebGL

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| target | GLenum | 是 | Texture target |
| level | GLint | 是 | Mipmap level |
| xoffset | GLint | 是 | X offset |
| yoffset | GLint | 是 | Y offset |
| format | GLenum | 是 | Pixel format |
| type | GLenum | 是 | Pixel type |
| source | TexImageSource | 是 | Image source |

## uniform1fv

```TypeScript
uniform1fv(location: WebGLUniformLocation | null, v: Float32List): void
```

Sets uniform1fv value

**起始版本：** 7

**模型约束：** 此接口仅可在FA模型下使用。

**系统能力：** SystemCapability.Graphic.Graphic2D.WebGL

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| location | WebGLUniformLocation \| null | 是 | Uniform location |
| v | Float32List | 是 | Value array |

## uniform1iv

```TypeScript
uniform1iv(location: WebGLUniformLocation | null, v: Int32List): void
```

Sets uniform1iv value

**起始版本：** 7

**模型约束：** 此接口仅可在FA模型下使用。

**系统能力：** SystemCapability.Graphic.Graphic2D.WebGL

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| location | WebGLUniformLocation \| null | 是 | Uniform location |
| v | Int32List | 是 | Value array |

## uniform2fv

```TypeScript
uniform2fv(location: WebGLUniformLocation | null, v: Float32List): void
```

Sets uniform2fv value

**起始版本：** 7

**模型约束：** 此接口仅可在FA模型下使用。

**系统能力：** SystemCapability.Graphic.Graphic2D.WebGL

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| location | WebGLUniformLocation \| null | 是 | Uniform location |
| v | Float32List | 是 | Value array |

## uniform2iv

```TypeScript
uniform2iv(location: WebGLUniformLocation | null, v: Int32List): void
```

Sets uniform2iv value

**起始版本：** 7

**模型约束：** 此接口仅可在FA模型下使用。

**系统能力：** SystemCapability.Graphic.Graphic2D.WebGL

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| location | WebGLUniformLocation \| null | 是 | Uniform location |
| v | Int32List | 是 | Value array |

## uniform3fv

```TypeScript
uniform3fv(location: WebGLUniformLocation | null, v: Float32List): void
```

Sets uniform3fv value

**起始版本：** 7

**模型约束：** 此接口仅可在FA模型下使用。

**系统能力：** SystemCapability.Graphic.Graphic2D.WebGL

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| location | WebGLUniformLocation \| null | 是 | Uniform location |
| v | Float32List | 是 | Value array |

## uniform3iv

```TypeScript
uniform3iv(location: WebGLUniformLocation | null, v: Int32List): void
```

Sets uniform3iv value

**起始版本：** 7

**模型约束：** 此接口仅可在FA模型下使用。

**系统能力：** SystemCapability.Graphic.Graphic2D.WebGL

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| location | WebGLUniformLocation \| null | 是 | Uniform location |
| v | Int32List | 是 | Value array |

## uniform4fv

```TypeScript
uniform4fv(location: WebGLUniformLocation | null, v: Float32List): void
```

Sets uniform4fv value

**起始版本：** 7

**模型约束：** 此接口仅可在FA模型下使用。

**系统能力：** SystemCapability.Graphic.Graphic2D.WebGL

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| location | WebGLUniformLocation \| null | 是 | Uniform location |
| v | Float32List | 是 | Value array |

## uniform4iv

```TypeScript
uniform4iv(location: WebGLUniformLocation | null, v: Int32List): void
```

Sets uniform4iv value

**起始版本：** 7

**模型约束：** 此接口仅可在FA模型下使用。

**系统能力：** SystemCapability.Graphic.Graphic2D.WebGL

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| location | WebGLUniformLocation \| null | 是 | Uniform location |
| v | Int32List | 是 | Value array |

## uniformMatrix2fv

```TypeScript
uniformMatrix2fv(location: WebGLUniformLocation | null, transpose: GLboolean, value: Float32List): void
```

Sets uniformMatrix2fv value

**起始版本：** 7

**模型约束：** 此接口仅可在FA模型下使用。

**系统能力：** SystemCapability.Graphic.Graphic2D.WebGL

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| location | WebGLUniformLocation \| null | 是 | Uniform location |
| transpose | GLboolean | 是 | Whether to transpose |
| value | Float32List | 是 | Matrix value |

## uniformMatrix3fv

```TypeScript
uniformMatrix3fv(location: WebGLUniformLocation | null, transpose: GLboolean, value: Float32List): void
```

Sets uniformMatrix3fv value

**起始版本：** 7

**模型约束：** 此接口仅可在FA模型下使用。

**系统能力：** SystemCapability.Graphic.Graphic2D.WebGL

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| location | WebGLUniformLocation \| null | 是 | Uniform location |
| transpose | GLboolean | 是 | Whether to transpose |
| value | Float32List | 是 | Matrix value |

## uniformMatrix4fv

```TypeScript
uniformMatrix4fv(location: WebGLUniformLocation | null, transpose: GLboolean, value: Float32List): void
```

Sets uniformMatrix4fv value

**起始版本：** 7

**模型约束：** 此接口仅可在FA模型下使用。

**系统能力：** SystemCapability.Graphic.Graphic2D.WebGL

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| location | WebGLUniformLocation \| null | 是 | Uniform location |
| transpose | GLboolean | 是 | Whether to transpose |
| value | Float32List | 是 | Matrix value |

