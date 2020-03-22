---
title: SpringBoot 自定义 Properties
---

## 快速入门

以阿里云OSS的AccessKey为例，为防止上传到github泄露。自定义配置文件，并在 .gitignore 中配置。

1. Resource 目录下自定义配置文件 secret/oss.properties
```properties
oss.secret.accessKeyId=secret
oss.secret.accessKeySecret=secret
```

2. 新建 `OSSProperties.java`
```java
package top.yinjinbiao.video.common.properties;

import lombok.Data;
import org.springframework.boot.context.properties.ConfigurationProperties;
import org.springframework.context.annotation.Configuration;
import org.springframework.context.annotation.PropertySource;

@Configuration
@ConfigurationProperties(prefix = "oss.secret", ignoreUnknownFields = false)
@PropertySource("classpath:secret/oss.properties")
@Data
public class OSSProperties {
    private String accessKeyId;
    private String accessKeySecret;
}
```

3. 使用时，`@Value("")` 来注入
```java
@Value("${oss.secret.accessKeyId}")
private String accessKeyId;

@Value("${oss.secret.accessKeySecret}")
private String accessKeySecret;
```

::: warning
`oss.properties`的前缀`oss.secret`不能与`application.yml`中的重名。
如果`oss.properties`中有`oss.secret`,`application.yml`中也有`oss.secret`,将会报错。
:::

4. 在 `.gitignore` 中忽略 secret 文件夹
```
secret/
```