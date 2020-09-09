const colors = require('colors');

module.exports = {
    name: "ping",
    aliases: ["p","delay"],
    category: "info",
    description: "Returns latency and API ping",
    usage: "[command | alias]",
    run: async (client, message, args) => {
        message.delete();
        const msg = await message.channel.send(`🏓 Pinging....`);
        
        const LoggingLat = Math.floor(msg.createdTimestamp - message.createdTimestamp);
        
        const LoggingAPI = Math.round(client.ping);
        
        msg.edit(`🏓 Pong!
        Latency is ${Math.floor(msg.createdTimestamp - message.createdTimestamp)}ms
        API Latency is ${Math.round(client.ping)}ms
        `);
      
        if(LoggingLat >= 500) {
          console.log(`Latency is ${LoggingLat}`.red);
        }else{
          if(LoggingLat >= 300) {
            console.log(`Latency is ${LoggingLat}`.yellow);
          }else{
            if(LoggingLat <= 299){
            console.log(`Latency is ${LoggingLat}`.green);
            }
          }
          if(LoggingAPI >= 500) {
          console.log(`API Latency is ${LoggingAPI}`.red);
        }else{
          if(LoggingAPI >= 300) {
            console.log(`API Latency is ${LoggingAPI}`.yellow);
          }else{
            if(LoggingAPI <= 299){
            console.log(`API Latency is ${LoggingAPI}`.green);
            }
          }
        
        console.log(' ');
        }
    }
  }
}