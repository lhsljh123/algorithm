// First Solution
function solution(record) {
    let answer = [];
    let nickMap = new Map();
    for (let str of record){
        if (str.split(" ")[0] == "Enter") {
            answer.push(str.split(" ")[1] + "/님이 들어왔습니다.")   
            nickMap.set(str.split(" ")[1], str.split(" ")[2])
        } else if (str.split(" ")[0] == "Leave") {
            answer.push(str.split(" ")[1] + "/님이 나갔습니다.") 
        } else {
            nickMap.set(str.split(" ")[1], str.split(" ")[2])
        }
    }
    
    for (let i in answer){
        answer[i] = answer[i].replace(answer[i].split("/")[0] + "/", nickMap.get(answer[i].split("/")[0]))
    }
    return answer;
}

// Make Easy to Read
function solution(record) {
    const userInfo = {};
    const chatLog = [];
    const commands = {
        'Enter': '님이 들어왔습니다.',
        'Leave': '님이 나갔습니다.'
    }
    
    record.map((item) => {
        const [command, uid, nick] = item.split(' ');

        if (nick) userInfo[uid] = nick;
        if (command !== 'Change') chatLog.push([uid, command]);
    });
    return chatLog.map(([uid, command]) => userInfo[uid] + commands[command]);
}