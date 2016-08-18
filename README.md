## 文档
+ 还是三个分支
+ marster（前端）
+ ad（安卓）
+ server（后台）

## 前端技术栈
+ react+redux
+ react-router
+ antd

## todo
- [x] 前端框架搭建
- [x] 网页首页

## 一些数据结构

### 首页的信息

+ 轮播图的信息

```
data = [
    {
      imgSrc: ...,
      link: ...,
    },
    ...
]
```

+ 下面四个对应模块的内容

```
data = {
  first: {
    modalTitle: firstTitle,
    info: [
      {
        newsTitle: ...,
        newsLink: ...,
      },
      ...
    ],
  }
}
```
你可以将这两个信息装进一个对象，到时候统一请求

### 新闻详情页的信息

+ 传入的信息包括了Title => Notice OR Starking
+ ① Notice 可以带新闻的ID作为参数（以不同的参数来进行页面渲染）
+ ② Starking 可以带二级菜单的ID作为参数（以不同的参数来进行页面渲染）
+ ③ 用参数向后台进行请求新闻文本，新闻文本可以用字符模板装起来

### 每个女孩得信息

+ 一共分为三个大的对象，你也还是可以封装成一个给我

##### 基础信息

```
baseInfo: {
  id: ..., // 这个主要是为了以后的操作可以根据这个ID进行查询
  votes: ..., // 投票数，这是两个目前我所需要的必须的东西，之后的信息King会给我一个文件，到时候传给你看
  ...
}
```

##### 图片信息

```
imageInfo: [
  { src: ... },
  { src: ... },
  { src: ... },
  ...
]
```

##### 图片信息

```
videoInfo: [
  {
    src: ...,
    videoImageSrc: ...,
  },
  {
    src: ...,
    videoImageSrc: ...,
  },
  {
    src: ...,
    videoImageSrc: ...,
  },
  ...
]
```

### 新增一个客户询问的功能页面
+ 暂时还没有什么难点，不过这个应该是需要商量之后才能做
+ King想先把这个页面上线，然后我们再修改，再更新
+ 他说后端的那个管理端刻意不用着急，这个页面优先级比较高

## 打包方法

```
//在控制台运行
npm run dist
```

+ 之后会打包出现一个名为dist的文件夹
+ 再把index.html复制进去
+ 再在dist/assets/路径下新建一个src文件夹，把images放进去
