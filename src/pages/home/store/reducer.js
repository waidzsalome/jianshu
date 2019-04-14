import { fromJS } from "immutable";

const defaultState = fromJS({
        topicList: [{
            id: 1,
            title: "社会热点",
            imgUrl: "https://upload.jianshu.io/collections/images/1717456/crop1549535994986.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/64/h/64/format/webp"
        },{
            id: 2,
            title: "京品好文",
            imgUrl: "https://upload.jianshu.io/collections/images/1745327/crop1555074897209.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/64/h/64/format/webp"
        }],
        articleList: [{
            id: 1,
            title: "一个土家族80后的家庭简史（1985年——2018年）",
            desc: "【 文：李砍柴】 引子 今年四月的时候，母亲给我打电话说，她不在镇上我姐家里住，她回家了。 其实姐姐也是心疼母亲，才接她去镇上，名义上是照看外孙...",
            imgUrl: "https://upload-images.jianshu.io/upload_images/1439852-34b485f26015b797?imageMogr2/auto-orient/strip|imageView2/1/w/360/h/240"
        },{
            id: 2,
            title: "《二十岁的年纪，做八十岁想起来都会嘴角上扬的事》",
            desc: "二十岁出头，正好处在一个尴尬的年纪。似乎看透了生活，实质却依旧单纯；似乎应有尽有，实质却一无所有；内心身怀雄心壮志，却又不得不脚踏实地。 身处二...",
            imgUrl: "https://upload-images.jianshu.io/upload_images/3459828-fdf30bf7e301a6e9.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/360/h/240"
        },{
            id: 3,
            title: "一个小城姑娘的上海十年",
            desc: "走出办公室，已经是晚上十点，白天人声鼎沸的南京西路早已行人稀疏。深夜的热闹属于几百米外的张园和铜仁路酒吧，属于三公里外的新天地和衡山路。 上海的...",
            imgUrl: "https://upload-images.jianshu.io/upload_images/8296185-9e0cd296b1508d0d.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/360/h/240"
        }]
});

export default (state = defaultState,action) => {
    switch (action.type) {
        default:
            return state;
    }
}