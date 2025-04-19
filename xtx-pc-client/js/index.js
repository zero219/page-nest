//#region 头部滑动
(function () {
    const headerTop = document.querySelector('.headerTop')
    const header = document.querySelector('.header')
    window.addEventListener('scroll', function () {
        let height = document.documentElement.scrollTop
        headerTop.style.top = height >= header.offsetTop ? 0 : '-80px'
    })
})();
//#endregion

//#region  菜单栏点击出现颜色,，事件委托版
(function () {
    const nav = document.querySelectorAll('.nav ul')
    for (let index = 0; index < nav.length; index++) {
        const element = nav[index];
        element.addEventListener('mousedown', function (e) {
            if (e.target.tagName === 'A') {
                document.querySelector('.nav .active').classList.remove('active')
                e.target.classList.add('active')
            }

        })
    }
}());

//#endregion

//#region 侧边栏 鼠标移入移出
(function () {
    const ul = document.querySelector('.aside ul')
    const li = ul.children

    for (let index = 0; index < li.length; index++) {
        const element = li[index].children[0]
        // nextElementSibling 下一个兄弟节点
        const nextElement = element.nextElementSibling
        if (element.nextElementSibling !== null) {
            // 鼠标移入
            element.addEventListener('mouseover', function () {
                nextElement.style.display = 'block'
            })

            // 鼠标移出
            element.addEventListener('mouseout', function () {
                nextElement.style.display = 'none'
            })

            nextElement.addEventListener('mouseover', function () {
                nextElement.style.display = 'block'
            })
            nextElement.addEventListener('mouseout', function () {
                nextElement.style.display = 'none'
            })
        }

    }
    
})();
//#endregion

//#region 轮播
(function () {
    const data = [
        { "url": "./images/b1.jpg" },
        { "url": "./images/b3.jpg" },
        { "url": "./images/b4.jpg" },
        { "url": "./images/b5.jpg" },
    ]

    const banner = document.querySelector('.banner')
    const img = document.querySelector('.banner ul li img')
    const next = document.querySelector('.next')
    const prev = document.querySelector('.prev')
    let i = 0

    // 下一页
    next.addEventListener('click', () => {
        i++
        i = i >= data.length ? 0 : i
        customToggle()
    })

    // 上一页
    prev.addEventListener('click', () => {
        i--
        i = i < 0 ? data.length - 1 : i
        customToggle()
    })

    function customToggle() {
        img.src = data[i].url
        document.querySelector('.banner .wrapper .current').classList.remove('current')
        document.querySelector(`.banner .wrapper ol li:nth-child(${i + 1})`).classList.add('current')
    }

    // 自动轮播
    let timeId = setInterval(() => {
        next.click()
    }, 2000)

    // 鼠标移入
    banner.addEventListener('mouseenter', function () {
        clearInterval(timeId)
    })

    // 鼠标移出
    banner.addEventListener('mouseleave', function () {
        clearInterval(timeId)
        timeId = setInterval(() => {
            next.click()
        }, 2000)
    })
}());

//#endregion

//#region 电梯导航
(function () {
    // 下拉显示导航栏
    const elevator = document.querySelector('.elevator')
    // 获取高度，offset 包括border边框，client不包括
    const entry = document.querySelector('.banner').offsetTop
    window.addEventListener('scroll', function () {
        // document.documentElement 获取html
        const height = document.documentElement.scrollTop
        elevator.style.opacity = height >= entry ? 1 : 0
    })

    // 返回顶部
    const backTop = document.querySelector('#backTop')
    backTop.addEventListener('click', function () {
        window.scrollTo(0, 0)
    })
}());

(function () {
    // 滚动显示颜色
    window.addEventListener('scroll', function () {
        const old = document.querySelector('.elevator_list .current')
        if (old) old.classList.remove('current')

        const goodFoodBody = document.querySelector('.goodFoodBody')
        const popularityBody = document.querySelector('.popularityBody')
        const brandsBody = document.querySelector('.brandsBody')
        const backTop = document.querySelector('#backTop')
        const n = document.documentElement.scrollTop
        if (n >= goodFoodBody.offsetTop && n < popularityBody.offsetTop) {
            document.querySelector('[data-name=goodFood]').classList.add('current')
        } else if (n >= popularityBody.offsetTop && n < brandsBody.offsetTop) {
            document.querySelector('[data-name=popularity]').classList.add('current')
        } else if (n >= brandsBody.offsetTop) {
            document.querySelector('[data-name=brands]').classList.add('current')
        }
    })
}());

(function () {
    // 点击滚动
    const list = document.querySelector('.elevator_list')
    list.addEventListener('click', function (e) {
        if (e.target.tagName === 'A' && e.target.dataset.name) {
            const old = document.querySelector('.elevator_list .current')
            if (old) old.classList.remove('current')
            e.target.classList.add('current')

            // e.target.dataset.name获取自定义属性
            const top = document.querySelector(`.${e.target.dataset.name}Body`).offsetTop
            document.documentElement.scrollTop = top
        }
    })
}());
//#endregion


