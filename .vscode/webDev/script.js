// 这里我们可以控制背景颜色动画的方向或添加时间控制
// 当前示例中暂时不需要JS动态控制，但可以加入交互事件

document.body.addEventListener('click', () => {
    const bg = document.querySelector('.background');
    bg.style.animationDuration = `${Math.random() * 5 + 5}s`; // 动态改变动画速度
  });
  