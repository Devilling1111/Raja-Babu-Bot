module.exports.config = {
	name: "off",
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
module.exports.run = ({event, api}) =>api.sendMessage("Bye I love you mwah,আসসালামু আলাইকুম🥰\n আপনাদের সবার সাথে অনেক মজা করলাম যদি কোন ভুল হয়ে থাকে মাফ করে দিবেন😍🥰 বস  এর আদেশ আমি আর এখন কথা বলতে পারবো না😥 আপনাদের সাথে আমার আবার কথা হবে যখন আমার স্যার রা্ঁজা্ঁ বা্ঁবু্ঁ অনুমতি দিবে😍 \nতাই এখন এর জন্য বিদায়💔!!!",event.threadID, () =>process.exit(0))
