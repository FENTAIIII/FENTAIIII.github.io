document.getElementById('copy-ip').addEventListener('click', function() {
    const ip = '请替换为实际服务器 IP';
    navigator.clipboard.writeText(ip).then(() => {
        alert('服务器 IP 已复制到剪贴板！');
    }).catch((err) => {
        console.error('无法复制 IP: ', err);
    });
});
// 模拟更新在线玩家数
setInterval(() => {
    const playerCount = Math.floor(Math.random() * 100); // 随机生成 0 - 100 之间的数
    document.getElementById('player-count').textContent = playerCount;
}, 5000);