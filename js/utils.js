/**
 * 行程助手工具类
 */

const Utils = {
    /**
     * 获取本地存储数据
     * @param {string} key 
     * @param {any} defaultValue 
     */
    getStorage(key, defaultValue = null) {
        const val = localStorage.getItem(key);
        try {
            return val ? JSON.parse(val) : defaultValue;
        } catch (e) {
            return val || defaultValue;
        }
    },

    /**
     * 设置本地存储数据
     * @param {string} key 
     * @param {any} value 
     */
    setStorage(key, value) {
        const val = typeof value === 'string' ? value : JSON.stringify(value);
        localStorage.setItem(key, val);
    },

    /**
     * 生成 .ics 日历文件并触发下载
     * @param {string} title 
     * @param {string} startDate 'YYYY-MM-DD'
     * @param {string} endDate 'YYYY-MM-DD'
     * @param {string} description 
     */
    generateICS(title, startDate, endDate, description = '') {
        const formatDate = (dateStr) => {
            const date = new Date(dateStr);
            return date.toISOString().replace(/-|:|\.\d+/g, '').slice(0, 15) + 'Z';
        };

        const icsContent = [
            'BEGIN:VCALENDAR',
            'VERSION:2.0',
            'PRODID:-//TripPlanner//CN',
            'BEGIN:VEVENT',
            `SUMMARY:${title}`,
            `DTSTART:${formatDate(startDate)}`,
            `DTEND:${formatDate(endDate)}`,
            `DESCRIPTION:${description}`,
            'STATUS:CONFIRMED',
            'END:VEVENT',
            'END:VCALENDAR'
        ].join('\r\n');

        const blob = new Blob([icsContent], { type: 'text/calendar;charset=utf-8' });
        const link = document.createElement('a');
        link.href = URL.createObjectURL(blob);
        link.download = `${title}.ics`;
        link.click();
    },

    /**
     * 格式化日期
     */
    formatDate(date) {
        const d = new Date(date);
        const year = d.getFullYear();
        const month = String(d.getMonth() + 1).padStart(2, '0');
        const day = String(d.getDate()).padStart(2, '0');
        return `${year}-${month}-${day}`;
    },

    /**
     * 简单的关键词提取路线逻辑
     * @param {string} text 
     */
    parseRouteFromText(text) {
        // 匹配 Day1, Day2 等
        const days = text.split(/Day\s*\d+|第[一二三四五六七八九十]天/i);
        const routes = [];
        
        // 如果没有 Day 关键词，就尝试按行匹配
        if (days.length <= 1) {
            const lines = text.split('\n').filter(line => line.trim().length > 0);
            return lines.map(line => ({
                name: line.trim(),
                time: '全天'
            }));
        }

        // 匹配地点（简单正则：匹配带引号、书名号或特定前缀的内容）
        // 实际开发中这里可以更复杂
        return days.filter(d => d.trim()).map((d, index) => {
            const lines = d.trim().split('\n');
            return {
                day: `第${index + 1}天`,
                points: lines.map(l => l.trim()).filter(l => l.length > 0)
            };
        });
    },

    /**
     * 调用 DeepSeek API 进行智能规划
     * @param {string} prompt 
     * @param {string} apiKey 
     */
    async callDeepSeek(prompt, apiKey) {
        if (!apiKey) {
            throw new Error('请先在设置中配置 DeepSeek API Key');
        }

        const response = await fetch('https://api.deepseek.com/v1/chat/completions', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${apiKey}`
            },
            body: JSON.stringify({
                model: "deepseek-chat",
                messages: [
                    {
                        role: "system",
                        content: "你是一个专业的旅游规划助手。请根据用户提供的城市、地点、偏好和时间，生成一个详细的旅游行程。请以 JSON 格式返回，包含景点名称(name)和游玩建议/详情(time)。"
                    },
                    {
                        role: "user",
                        content: prompt
                    }
                ],
                response_format: { type: 'json_object' }
            })
        });

        if (!response.ok) {
            throw new Error('DeepSeek API 调用失败，请检查网络或 API Key');
        }

        return await response.json();
    }
};

window.Utils = Utils;