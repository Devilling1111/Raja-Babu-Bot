module.exports.config = {
	name: "kick",
    version: "1.0.1",
    permission: 2,
    credits: "BADOL-KHAN",
    prefix: true,
    description: "ask any thing",
    category: "admin",
    usages: "",
    cooldowns: 5,
    dependencies: {
        "openai": ""
    }
};

module.exports.run = function({ api, event }) {
	var mention = Object.keys(event.mentions);
	return api.getThreadInfo(event.threadID, (err, info) => {
		if (err) return api.sendMessage("Đã có lỗi xảy ra!",event.threadID);
		if (!info.adminIDs.some(item => item.id == api.getCurrentUserID())) return api.sendMessage('🌺গ্রুপ অ্যাডমিন অধিকার প্রয়োজন🌺\n 🌺যোগ করুন এবং আবার চেষ্টা করুন🌺', event.threadID, event.messageID);
		if(!mention[0]) return api.sendMessage("🌺লাথি মারার জন্য আপনাকে🌿অবশ্যই ট্যাগ করতে হবে🌺",event.threadID);
		if (info.adminIDs.some(item => item.id == event.senderID)) {
			for (let o in mention) {
				setTimeout(() => {
					api.removeUserFromGroup(mention[o],event.threadID) 
				},3000)
			}
		}
	})
}
